"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Info } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a subject."),
  message: z.string().trim().min(10, "Please enter at least 10 characters."),
});
type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const submit = async () => { await new Promise(resolve => setTimeout(resolve, 450)); setSent(true); reset(); };

  return <form onSubmit={handleSubmit(submit)} noValidate className="grid gap-[18px]">
    {sent && <div role="status" className="flex gap-2 rounded-sm bg-emerald-50 p-3.5 text-[21px] leading-7 text-emerald-800"><CheckCircle2 size={18} className="mt-0.5 shrink-0"/>Your message is validated. This demo does not send email yet; connect an API or email provider to enable delivery.</div>}
    <div className="flex gap-2 rounded-sm bg-slate-50 p-3 text-xl leading-7 text-slate-600"><Info size={16} className="mt-0.5 shrink-0"/>Frontend demo form. Submitted content is not transmitted or stored.</div>
    {(["name", "email", "subject", "message"] as const).map(name => <label key={name} className="grid gap-2 text-xl font-bold capitalize">
      {name === "name" ? "Your name" : name === "email" ? "Email address" : name}
      {name === "message" ? <textarea className="w-full rounded border border-slate-300 bg-white px-3.5 py-3 text-[22px] font-normal text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" rows={5} placeholder="What would you like to discuss?" aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...register(name)}/> : <input className="w-full rounded border border-slate-300 bg-white px-3.5 py-3 text-[22px] font-normal text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" type={name === "email" ? "email" : "text"} placeholder={name === "name" ? "Jane Smith" : name === "email" ? "jane@example.com" : "A quick introduction"} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...register(name)}/>}
      {errors[name] && <span id={`${name}-error`} role="alert" className="font-normal normal-case text-red-700">{errors[name]?.message}</span>}
    </label>)}
    <button disabled={isSubmitting} className="inline-flex min-h-12 items-center justify-center gap-2 justify-self-start rounded bg-primary px-5 text-[22px] font-semibold text-white transition hover:bg-primary/90 disabled:cursor-wait disabled:opacity-75">{isSubmitting ? "Checking…" : "Send message"}<Send size={15}/></button>
  </form>;
}
