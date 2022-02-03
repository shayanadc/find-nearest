import {Hello} from "./HelloMessage.dto";
import express from "express"
const router = express.Router()

router.get('/', async (req, res, next: Function) => {
    var body : Hello = {message : 'bye'}
    await res.status(200).json(body);
});


export default router