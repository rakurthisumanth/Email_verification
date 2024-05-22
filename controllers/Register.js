const user = require("../models/users")

const nodemailer=require('nodemailer')
const Register=async(req,res)=>{
    try{
        const {email,password}=req.body

        const newUser=new user({email,password})

        await  newUser.save()

        const VerificationToken=Math.random().toString(36).substring(2)
        newUser.verificationToken=VerificationToken
        console?.log(VerificationToken,"Tokennnnnnnnnnnnnnnnnnnnnnnnn")

        await newUser.save()

        // mail processs
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: 'sumanth6633@gmail.com',
              pass: 'ctnf ilxb oirw lzjw'
            }
          });
          
          const mailOptions = {
            from: 'sumanth6633@gmail.com',
            to: email,
            subject: 'Account Verification',
            text: `Hello! Please verify your email by clicking on the link: http://localhost:3000/verify/${VerificationToken}`
          };
      
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
              return res.status(500).send('Failed to send verification email');
            }
            console.log('Email sent: ' + info.response);
            res.status(200).send('Verification email sent');
          });
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
        
}

module.exports=Register