// sendEmail.js
const nodemailer = require('nodemailer');

// Create transporter to connect to our SMTP server
const transporter = nodemailer.createTransport({
  host: 'localhost', // The SMTP server we just created
  port: 25,          // SMTP port
  secure: false,     // No SSL used, unless you enabled it on the server
  auth: {
    user: 'testuser',   // Username for authentication
    pass: 'testpass',   // Password for authentication
  },
});

// Define email options
const mailOptions = {
  from: 'sender@example.com', // Sender email
  to: 'receiver@example.com', // Receiver email
  subject: 'Test Email from Node.js SMTP Server',
  text: 'Hello, this is a test email sent from Node.js using SMTP.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
