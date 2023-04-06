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