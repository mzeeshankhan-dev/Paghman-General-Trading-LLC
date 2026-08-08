import { useEffect } from "react";

/** Lightweight, dependency-free SEO helper: sets the tab title + meta description per page. */
export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Paghman General Trading LLC` : " Paghman General Trading LLC";
    document.title = fullTitle;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
