import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); 

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT == "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

export const sendMail = async (to, subject, html, replyTo = process.env.LEAD_EMAIL) => {
  console.log(" SMTP Configuration:");
  console.log("Host:", process.env.SMTP_HOST);
  console.log("Port:", process.env.SMTP_PORT);
  console.log("User:", process.env.SMTP_USER);

  try {
    await transporter.sendMail({
      from: `"DollarDucks" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      replyTo,
    });
    console.log(`Email successfully sent to ${to}`);
  } catch (error) {
    console.error(` Error sending email: ${error.message}`);
    throw error;
  }
};
