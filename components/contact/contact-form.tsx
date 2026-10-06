"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Info } from "lucide-react";

const schema = z.object({ name: z.string().trim().min(2, "Please enter at least 2 characters."), email: z.string().trim().email("Enter a valid email address."), subject: z.string().trim().min(3, "Please add a subject."), message: z.string().trim().min(10, "Please enter at least 10 characters.") });
type FormData = z.infer<typeof schema>;
export function ContactForm() {
 const [sent, setSent] = useState(false);
 const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
 const submit = async () => { await new Promise(resolve => setTimeout(resolve, 450)); setSent(true); reset(); };
 return <form onSubmit={handleSubmit(submit)} noValidate style={{ display: "grid", gap: 18 }}>
  {sent && <div role="status" style={{ padding: 14, background: "#eff6ff", color: "#1d4ed8", display: "flex", gap: 9, fontSize: 13, lineHeight: 1.6 }}><CheckCircle2 size={18} style={{ flexShrink: 0 }}/>Your message is validated. This demo does not send email yet; connect an API or email provider to enable delivery.</div>}
  <div style={{ padding: 13, background: "#f8fafc", color: "#64748b", display: "flex", gap: 9, fontSize: 12, lineHeight: 1.55 }}><Info size={16} style={{ flexShrink: 0 }}/>Frontend demo form. Submitted content is not transmitted or stored.</div>
  {(["name","email","subject","message"] as const).map((name) => <label key={name} style={{ display: "grid", gap: 7, fontSize: 12, fontWeight: 700, textTransform: "capitalize" }}>{name === "name" ? "Your name" : name === "email" ? "Email address" : name}<>{name === "message" ? <textarea className="field" rows={5} placeholder="What would you like to discuss?" aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...register(name)}/> : <input className="field" type={name === "email" ? "email" : "text"} placeholder={name === "name" ? "Jane Smith" : name === "email" ? "jane@example.com" : "A quick introduction"} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...register(name)}/>}</>{errors[name] && <span id={`${name}-error`} role="alert" style={{ color: "#b42318", fontWeight: 400, textTransform: "none" }}>{errors[name]?.message}</span>}</label>)}
  <button disabled={isSubmitting} className="btn btn-primary" style={{ border: 0, justifySelf: "start", cursor: isSubmitting ? "wait" : "pointer", opacity: isSubmitting ? .75 : 1 }}>{isSubmitting ? "Checking…" : "Send message"}<Send size={15}/></button>
 </form>;
}
