import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const location = useLocation(); // Henter gjeldende URL-path

  // Lager en mapping mellom paths og titler
  const titles = {
    "/html": "HTML Resources",
    "/css": "CSS Resources",
    "/javascript": "JavaScript Resources",
    "/react": "React Resources",
    "/sanity": "Sanity & Headless CMS Resources",
  };

  useEffect(() => {
    // Oppdaterer dokumentets tittel basert på URL-path
    document.title = titles[location.pathname] || "Resources App";
  }, [location]);

  return null;
}
