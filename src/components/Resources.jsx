import resources from "../components/ressurser";
import "../styles/layout.scss";

export default function Resources({ category }) {
  // Filtrer ressurser basert på prop-en
  const filteredResources = resources.filter(
    (res) => res.category === category
  );

  return (
    <section>
      <h2>Ressurser for {category.toUpperCase()}</h2>
      <ul>
        {filteredResources.length > 0 ? (
          filteredResources.map((res, index) => (
            <li key={index}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                {res.title}
              </a>
            </li>
          ))
        ) : (
          <p>Ingen ressurser funnet for denne kategorien.</p>
        )}
      </ul>
    </section>
  );
}
