import resources from "./ressurser";
import PageTitle from "./PageTitle";
import "../styles/layout.scss";

export default function Resources({ category, resources }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <div>
      <h2>{category.toUpperCase()} Resources</h2>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
