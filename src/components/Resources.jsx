import resources from "./ressurser";
import PageTitle from "./PageTitle";
import "../styles/layout.scss";

export default function Resources({ category }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <section className="resources">
      <PageTitle category={category} />
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="test">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
