import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { subject, userEmail, message } = req.body;

  if (!subject || !userEmail || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Add this to your .env.local file
        pass: process.env.GMAIL_PASSWORD, // Add this to your .env.local file
      },
    });

    const mailOptions = {
      from: userEmail,
      to: "liberal07amos@gmail.com",
      subject: `Ohmbound Feedback: ${subject}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Feedback sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send feedback." });
  }
}
