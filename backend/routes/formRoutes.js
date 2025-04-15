import express from "express";
import Form from "../models/Form.js";
import { sendMail } from "../utils/sendMail.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

const formLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { message: "⏳ Too many requests, please try again after a while." },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/", formLimiter, async (req, res) => {
  try {
    const { fullName, businessName, email, number, service } = req.body;

    if (!fullName || !businessName || !email || !number || !service) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Save lead to DB
    const newForm = new Form({ fullName, businessName, email, number, service });
    await newForm.save();

    // ✅ Send Thank You email to user (black name)
    await sendMail(
      email,
      "Thank you for contacting DollarDucks 🦆",
      `
        <div style="font-family:sans-serif;">
          <h2 style="color:#000;">Hi ${fullName},</h2>
          <p>Thank you for reaching out regarding <strong>${service}</strong>.</p>
          <p>Our team will get in touch with you shortly.</p>
          <p>Regards,</p>
          <strong>Dollar Ducks Team</strong>
        </div>
      `
    );

    // ✅ Notify Admins (send to all)
    const adminEmails = [
      "contact@dollarducks.com"
    ];

    await sendMail(
      adminEmails.join(","),
      "New Lead Submitted!",
      `
        <div style="font-family:sans-serif;">
          <h3>New Lead Details</h3>
          <ul>
            <li><strong>Name:</strong> ${fullName}</li>
            <li><strong>Business:</strong> ${businessName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${number}</li>
            <li><strong>Service:</strong> ${service}</li>
          </ul>
          <p style="margin-top:10px;font-size:12px;color:gray;">Form submitted from IP: ${req.ip}</p>
        </div>
      `
    );

    res.status(201).json({ message: "✅ Form submitted & emails sent!" });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

export default router;
