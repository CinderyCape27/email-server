require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;
    
    contentHTML = `
        <h1>User information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>${message}</p>

    `;
    const HOST_URI = process.env.HOST_URI
    const PASS_URI = process.env.PASS_URI
    

    const transporter = nodemailer.createTransport({
        host: HOST_URI,
        port: 26,
        secure: false,
        auth: {
            user: 'jdenis@corah.com.mx',
            pass: PASS_URI
        },
        tls: {
            rejectUnauthorized: false
        }
        
    });

    const info = await transporter.sendMail({
        from: '"Julio Denis" <jdenis@corah.com.mx>',
        to: 'julio_denis@icloud.com',
        subject: 'Website contact form',
        text: 'Hello world',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);
    res.redirect('/success.html');

});

module.exports = router;