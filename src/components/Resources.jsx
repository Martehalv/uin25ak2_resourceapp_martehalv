import resources from "../components/ressurser";
import "../styles/layout.scss";

export default function Resources({ category }) {
  const findResource = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <section>
      <h2>{category.toUpperCase()}</h2>
      <ul>
        {findResource.length > 0 ? (
          findResource.map((resource, index) => (
            <li key={index}>
              <a href={resource.url}>{resource.title}</a>
            </li>
          ))
        ) : (
          <p>Finnes ikke noen ressurser.</p>
        )}
      </ul>
    </section>
  );
}
