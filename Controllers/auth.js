import jwt from "jsonwebtoken";


export const createAccessToken = (user) => {
  return jwt.sign({ userId: user.id,
    userName : user.userName,
    password : user.password,
    }, "access", {
      algorithm: "HS256",
    expiresIn: "1d"
  });
};

export const createRefreshToken = (user) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    "refresh",
    {
      expiresIn: "7d"
    }
  );
};



// this is the controller to verify the token when the user is logged in.

export const verifyToken = async (req, res, next)  => {
  const token = req.body.token;
  if(!token) return res.status(403).json({
    message : 'A token is required for authentication'
  })
  try {
    const decode = jwt.verify(token, 'access');
    req.decoded = decode;
  } catch(err) {
    return res.status(401).json({
      message : 'Invalid token'
    })
  }
  return next();
}