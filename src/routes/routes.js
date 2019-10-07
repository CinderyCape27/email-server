const express = require('express');
const router = express.Router();

router.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;
    
    contentHTML = `
        <h1>User information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Phone: ${phone}</li>

            <p>${message}</p>
        </ul>
    `;
    console.log(contentHTML);
    
    
    res.send('received')
});

module.exports = router;