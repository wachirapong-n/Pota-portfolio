import nodemailer from "nodemailer";
import { z } from "zod";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER?.trim() || profile.email;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!gmailAppPassword) {
    return Response.json(
      { error: "ขออภัย ส่งข้อความไม่สำเร็จในขณะนี้ กรุณาลองใหม่อีกครั้งภายหลัง" },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "ข้อมูลที่ส่งไม่ถูกต้อง" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "กรุณาตรวจสอบข้อมูลในแบบฟอร์มอีกครั้ง" },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${gmailUser}>`,
      to: profile.email,
      replyTo: email,
      subject: `[Portfolio] ${subject || "ข้อความจากเว็บไซต์"}`,
      text: `มีข้อความใหม่จากแบบฟอร์ม Portfolio\n\nชื่อ: ${name}\nอีเมล: ${email}\nหัวข้อ: ${subject || "ไม่ได้ระบุ"}\n\nข้อความ:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    const details =
      error && typeof error === "object"
        ? (error as { code?: unknown; message?: unknown })
        : null;

    console.error("Gmail SMTP failed to send contact message", {
      code: typeof details?.code === "string" ? details.code : "unknown",
      message:
        typeof details?.message === "string"
          ? details.message
          : "Unknown SMTP error",
    });

    return Response.json(
      {
        error:
          "ขออภัย ส่งข้อความไม่สำเร็จในขณะนี้ กรุณาลองใหม่อีกครั้งภายหลัง",
      },
      { status: 502 },
    );
  }
}
