import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const CorrectTitle = useLocation();

  const ResourcesNames = {
    "/html": "HTML Ressurser",
    "/css": "CSS Ressurser",
    "/javascript": "JavaScript Ressurser",
    "/react": "React Ressurser",
    "/sanity": "Sanity & Headless CMS Ressurser",
  };

  useEffect(() => {
    document.title = ResourcesNames[CorrectTitle.pathname] || "Ressursarkiv";
  }, [CorrectTitle]);

  return null;
}
