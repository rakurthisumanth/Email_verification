const users = require("../models/users");

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const foundUser = await users.findOne({ email, password });
        if (foundUser && foundUser.verified) {
            res.status(200).send({message:"True"});
        } else {
            res.status(400).send({message:"False"});
        }
    } catch (err) {
        res.status(400).send('Login Failure');
    }
};

module.exports = Login;
