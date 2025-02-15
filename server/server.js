const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Nodemailer transport configuration
  require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


  // Email content
  const mailOptions = {
    from: email, // Sender's email
    to: "your-email@gmail.com", // Your email address
    subject: `New Message: ${subject}`,
    text: `You received a message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
