import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const CorrectTitle = useLocation();

  const ResourcesNames = {
    "/html": "HTML Ressursarkiv",
    "/css": "CSS Ressursarkiv",
    "/javascript": "JavaScript Ressursarkiv",
    "/react": "React Ressursarkiv",
    "/sanity": "Sanity & Headless CMS Ressursarkiv",
  };

  useEffect(() => {
    document.title = ResourcesNames[CorrectTitle.pathname] || "Ressursarkiv";
  }, [CorrectTitle]);

  return null;
}
