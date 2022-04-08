import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
]
// all routes here are starting with /users only!
router.get('/', (_req, res) => {
    console.log(users);
    res.send('hello!!');
});


export default router;