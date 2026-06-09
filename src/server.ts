import express, { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, phone, company, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: `${process.env.SMTP_USER}`,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Company:</strong> ${company}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
  console.log(`SMTP API server listening on http://localhost:${PORT}`);
});
