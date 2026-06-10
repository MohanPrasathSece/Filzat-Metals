import path from "path";
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Warn early if SMTP credentials are absent
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn(
    "[server] WARNING: One or more SMTP env vars are missing (SMTP_HOST, SMTP_USER, SMTP_PASS). " +
      "Email sending will fail until .env.local is correctly configured."
  );
}

/** Create a fresh transporter per request so env changes are always picked up */
function makeTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, phone, company, subject, message } = req.body;
  try {
    const transporter = makeTransporter();
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
    console.error("[server] Failed to send email:", err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
  console.log(`SMTP API server listening on http://localhost:${PORT}`);
});
