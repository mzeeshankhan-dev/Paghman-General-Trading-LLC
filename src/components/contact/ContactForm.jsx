import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle2, AlertCircle, User,Phone, MessageCircle, Mail } from "lucide-react";
import {MessageSquareText } from 'lucide-react';

const initialForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function validate(values) {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = true;
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = true;
    if (!values.message.trim() || values.message.trim().length < 10) nextErrors.message = true;
    return nextErrors;
  }

  function handleChange(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      // Simulated submission — replace with a real API call in production.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  const fields = [
    { id: "name", icon: User , placeholder: t("contact.form.namePh"), type: "text" },
    { id: "email", icon: Mail , placeholder: t("contact.form.emailPh"), type: "email" },
    { id: "phone", icon: Phone, placeholder: t("contact.form.phonePh"), type: "tel" },
    { id: "subject", icon: MessageCircle, placeholder: t("contact.form.subjectPh"), type: "text" },
  ];

  return (
    <div className="card p-4 lg:p-7">
      <h1 className="text-navy-950 text-3xl font-bold">Get In Touch</h1>
      <p className="mt-1">Drop us a message and our team will get back to you as soon as possible. </p>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 mt-4 ">
        <div className="flex flex-col gap-3">
          {fields.map((field) => (
            <div key={field.id} className={`flex gap-3 items-center overflow-hidden rounded-xl border border-navy-100 px-4 py-2 dark:text-white ${errors.message ? "border-red-400 focus:ring-red-200" : ""}`}>
              <field.icon className="text-slate-500"/>
              <input
                id={field.id}
                type={field.type}
                value={form[field.id]}
                onChange={handleChange(field.id)}
                placeholder={field.placeholder}
                required={field.id === "name" || field.id === "email"}
                aria-invalid={Boolean(errors[field.id])}
                className={`w-full bg-white  text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none dark:bg-navy-900 dark:text-white `}
              />
            </div>
          ))}
        </div>

        <div className={`px-4 py-3 border border-navy-100 flex gap-3 rounded-xl dark:text-white ${errors.message ? "border-red-400 focus:ring-red-200" : ""}`}>
          <MessageSquareText className="text-slate-500" />
          <textarea
            id="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange("message")}
            placeholder={t("contact.form.messagePh")}
            aria-invalid={Boolean(errors.message)}
            className={`w-full resize-none bg-white text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none dark:bg-navy-900 dark:text-white `}
          />
        </div>

        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit">
          <Send className="h-4 w-4" aria-hidden="true" />
          {status === "submitting" ? t("common.submitting") : t("common.sendMessage")}
        </button>

        {status === "success" && (
          <p role="status" className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            {t("contact.form.success")}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            {t("contact.form.error")}
          </p>
        )}
      </form>
    </div>
  );
}
