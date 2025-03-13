export default function PageTitle({ category }) {
  const titles = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    react: "React",
    "headless-cms": "Sanity and Headless CMS",
  };

  return <h2>{titles[category]}</h2>;
}
