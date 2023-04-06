import express from 'express'
import { login, signup } from '../Controllers/index.js'

const router = express.Router()

router.post('/userLogin', login);
router.post('/userSignup', signup);

export default router