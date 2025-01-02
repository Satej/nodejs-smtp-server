// smtpServer.js
const { SMTPServer } = require('smtp-server');
const fs = require('fs');

// Create SMTP Server instance
const server = new SMTPServer({
  secure: false, // Set to true if you want to use SSL
  authMethods: ['PLAIN', 'LOGIN'],
  onAuth(auth, session, callback) {
    if (auth.username !== 'testuser' || auth.password !== 'testpass') {
      return callback(new Error('Invalid username or password'));
    }
    callback(null, { user: 123 }); // Successful authentication
  },
  onData(stream, session, callback) {
    // Log the email content to console for now (you can process the message here)
    console.log('Received Email:');
    stream.pipe(process.stdout); // Pipe the incoming email stream to console
    stream.on('end', callback);
  },
});

// Start listening on port 25 (or any other port you prefer)
server.listen(25, () => {
  console.log('SMTP server is listening on port 25');
});
