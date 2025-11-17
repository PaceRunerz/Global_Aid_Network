// utils/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (options) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: options.email,
    subject: options.subject,
    html: options.html,
  };

  await transporter.sendMail(mailOptions);
};

const sendEmergencyAlert = async (emergency, volunteers) => {
  const emailPromises = volunteers.map(volunteer => 
    sendEmail({
      email: volunteer.email,
      subject: 'Emergency Assistance Request',
      html: `
        <h2>Emergency Assistance Needed</h2>
        <p><strong>Type:</strong> ${emergency.type}</p>
        <p><strong>Location:</strong> ${emergency.location.address}</p>
        <p><strong>Description:</strong> ${emergency.description}</p>
        <p>Please check the platform for more details and respond if you can help.</p>
      `
    })
  );

  await Promise.all(emailPromises);
};

module.exports = {
  sendEmail,
  sendEmergencyAlert
};