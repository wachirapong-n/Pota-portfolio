"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Info, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร"),
  email: z.string().trim().email("กรุณากรอกอีเมลให้ถูกต้อง"),
  subject: z.string().trim().min(1, "กรุณากรอกหัวข้อ"),
  message: z.string().trim().min(1, "กรุณากรอกข้อความ"),
});

type FormData = z.infer<typeof schema>;
const submitErrorMessage =
  "ขออภัย ส่งข้อความไม่สำเร็จในขณะนี้ กรุณาลองใหม่อีกครั้งภายหลัง";

const fields = [
  { name: "name", label: "ชื่อ-นามสกุล", placeholder: "กรอกชื่อของคุณ" },
  { name: "email", label: "อีเมล", placeholder: "name@example.com" },
  {
    name: "subject",
    label: "หัวข้อ",
    placeholder: "กรอกหัวข้อที่ต้องการติดต่อ",
  },
  {
    name: "message",
    label: "ข้อความ",
    placeholder: "พิมพ์ข้อความที่ต้องการติดต่อ",
  },
] as const;

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submit = async (data: FormData) => {
    setSubmitState("idle");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as {
        success?: boolean;
      };

      if (!response.ok || !result.success) {
        throw new Error(submitErrorMessage);
      }

      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
      setSubmitError(submitErrorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="grid gap-5">
      <div className="flex gap-3 rounded-xl bg-slate-50 p-4 text-xl leading-7 text-slate-600">
        <Info size={21} className="mt-1 shrink-0" aria-hidden="true" />
        ข้อความจะถูกส่งไปยังอีเมลของเจ้าของเว็บไซต์เพื่อใช้ตอบกลับ
      </div>

      {fields.map(({ name, label, placeholder }) => (
        <label key={name} className="grid gap-2 text-xl font-bold">
          <span>
            {label}
            <span className="ml-1 text-red-600" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (จำเป็น)</span>
          </span>
          {name === "message" ? (
            <textarea
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[22px] font-normal text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              rows={5}
              placeholder={placeholder}
              required
              aria-required="true"
              aria-invalid={!!errors[name]}
              aria-describedby={errors[name] ? `${name}-error` : undefined}
              {...register(name)}
            />
          ) : (
            <input
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[22px] font-normal text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              type={name === "email" ? "email" : "text"}
              placeholder={placeholder}
              required
              aria-required="true"
              aria-invalid={!!errors[name]}
              aria-describedby={errors[name] ? `${name}-error` : undefined}
              {...register(name)}
            />
          )}
          {errors[name] && (
            <span
              id={`${name}-error`}
              role="alert"
              className="text-xl font-normal text-red-700"
            >
              {errors[name]?.message}
            </span>
          )}
        </label>
      ))}

      <button
        disabled={isSubmitting}
        className="inline-flex min-h-14 items-center justify-center gap-2 justify-self-start rounded-lg bg-primary px-6 text-[22px] font-semibold text-white transition hover:bg-primary/90 disabled:cursor-wait disabled:opacity-75"
      >
        {isSubmitting ? "กำลังส่งข้อความ…" : "ส่งข้อความ"}
        <Send size={19} aria-hidden="true" />
      </button>

      {submitState === "success" && (
        <div
          role="status"
          className="flex gap-3 rounded-xl bg-emerald-50 p-4 text-[21px] leading-7 text-emerald-800"
        >
          <CheckCircle2
            size={22}
            className="mt-1 shrink-0"
            aria-hidden="true"
          />
          ส่งข้อความเรียบร้อยแล้ว
        </div>
      )}
      {submitState === "error" && (
        <div
          role="alert"
          className="rounded-xl bg-red-50 p-4 text-xl leading-7 text-red-800"
        >
          {submitError}
        </div>
      )}
    </form>
  );
}
