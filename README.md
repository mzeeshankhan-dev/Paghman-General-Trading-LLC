# PAGHMAN General Trading LLC — Corporate Website

A premium, production-ready corporate website for a Dubai-based international trading
company, built with **React 19**, **Vite**, and **Tailwind CSS v4**.

## Features

- 9 pages: Home, About, Products, Services, Industries, Gallery, Careers, Contact, 404
- Full multilingual support — **English, Persian (فارسی), Urdu (اردو)** — with automatic
  RTL layout switching, persisted in `localStorage`
- Light/Dark theme toggle, persisted in `localStorage`
- Sticky, responsive navbar with mobile menu, language switcher and theme toggle
- Swiper-powered hero slider, testimonials carousel, and partner logo marquee
- Framer Motion scroll-reveal animations throughout
- Animated statistic counters
- Accessible, validated contact form with success/error states
- Route-based code splitting (`React.lazy` + `Suspense`)
- Floating WhatsApp button and scroll-to-top button
- SEO-friendly meta tags, semantic HTML, keyboard-navigable UI

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

## Project Structure

```
src/
  components/     # Reusable UI building blocks, grouped by feature
    layout/         Navbar, Footer, ScrollToTopButton, WhatsAppButton
    ui/             Reveal, SectionHeading, Counter, Accordion, Seo, PageHeader
    home/           Section components used on the homepage
    products/       ProductCard
    services/       ServiceCard
    contact/        ContactForm
  pages/          One file per route (Home, About, Products, ...)
  layouts/        MainLayout (navbar + footer shell)
  data/           Non-translatable data: image URLs, icon mappings
  i18n/           i18next setup + locales/{en,fa,ur}.json
  hooks/          useTheme, useCountUp, useScrollTop
  assets/         Static assets (icons, images)
```

## Content & Translations

All translatable copy (navigation, headings, product/service/industry copy,
testimonials, FAQ, careers, contact form, footer, etc.) lives in
`src/i18n/locales/{en,fa,ur}.json`, sharing one schema across the three languages.
Edit those files to update site copy without touching component code.

## Images

`src/data/images.js` centralises all imagery as seeded Picsum placeholder URLs so the
site always renders real photography-like images out of the box. Replace any of these
URLs with your own licensed photography before shipping to production.

## Notes for Production

- The contact form and newsletter signup simulate submission — wire them up to your
  backend or a form service (e.g. Formspree, a serverless function) before launch.
- Replace the WhatsApp number in `WhatsAppButton.jsx` and `Contact.jsx`.
- Replace the map placeholder in `Contact.jsx` with a real embed (e.g. Google Maps
  iframe) once you have an API key.
- Swap the favicon (`public/favicon.svg`) and social links in `Footer.jsx`.
