const users = require('../models/users');

const Verification = async (req, res) => {
  try {
    const {token} = req.body;
    const user = await users.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).send('Invalid token');
    }
    user.verified = true;
    user.verificationToken = '';
    await user.save();
    res.status(201).send('VerifySucess');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = Verification;
