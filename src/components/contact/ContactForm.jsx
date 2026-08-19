import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

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
    { id: "name", label: t("contact.form.name"), placeholder: t("contact.form.namePh"), type: "text" },
    { id: "email", label: t("contact.form.email"), placeholder: t("contact.form.emailPh"), type: "email" },
    { id: "phone", label: t("contact.form.phone"), placeholder: t("contact.form.phonePh"), type: "tel" },
    { id: "subject", label: t("contact.form.subject"), placeholder: t("contact.form.subjectPh"), type: "text" },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="card flex flex-col gap-5 p-4 lg:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className={field.id === "subject" ? "sm:col-span-2" : ""}>
            <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
              {field.label} {(field.id === "name" || field.id === "email") && <span className="text-gold-500">*</span>}
            </label>
            <input
              id={field.id}
              type={field.type}
              value={form[field.id]}
              onChange={handleChange(field.id)}
              placeholder={field.placeholder}
              required={field.id === "name" || field.id === "email"}
              aria-invalid={Boolean(errors[field.id])}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-navy-900 dark:text-white ${
                errors[field.id]
                  ? "border-red-400 focus:ring-red-200"
                  : "border-slate-200 focus:border-gold-400 focus:ring-gold-100 dark:border-navy-700"
              }`}
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-slate-200">
          {t("contact.form.message")} <span className="text-gold-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange("message")}
          placeholder={t("contact.form.messagePh")}
          aria-invalid={Boolean(errors.message)}
          className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-navy-900 dark:text-white ${
            errors.message ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:border-gold-400 focus:ring-gold-100 dark:border-navy-700"
          }`}
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
  );
}
