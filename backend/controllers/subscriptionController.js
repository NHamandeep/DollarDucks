import Subscription from "../models/Subscription.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load env variables
dotenv.config();

// Mail transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT == "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const subscribe = async (req, res) => {
  try {
    const { email, firstName } = req.body;

    if (!email) {
      return res.status(400).json({ message: "❌ Email is required!" });
    }

    // Save to DB only if not already subscribed
    const existingUser = await Subscription.findOne({ email });

    if (!existingUser) {
      const newSubscription = new Subscription({ email, firstName });
      await newSubscription.save();
    }

    // Send thank you email every time
    const mailOptions = {
      from: `"DollarDucks" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Subscribing to DollarDucks!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hello ${firstName || "there"}</h2>
          <p>Thank you for subscribing to DollarDucks! </p>
          <p>We’ll keep you updated with our latest services and offers.</p>
          <p>📲 Follow us on <a href="https://www.instagram.com/dollar_ducks/" target="_blank">Instagram</a></p>
          <p>🌐 Visit our website: <a href="https://www.dollarducks.com" target="_blank">www.dollarducks.com</a></p>
          <br/>
          <p>Cheers,<br/>Team DollarDucks 💛</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);

    return res.status(200).json({
      message: "✅ Confirmation email sent!",
    });
  } catch (error) {
    console.error("❌ Error:", error.message);
    return res.status(500).json({
      message: "❌ Internal Server Error",
      error: error.message,
    });
  }
};
