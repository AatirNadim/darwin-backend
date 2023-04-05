import express from 'express'
import { getUser } from '../Controllers'

const router = express.Router()

router.get('/user', getUser);

export default router