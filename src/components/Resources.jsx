import resources from "../components/ressurser";
import { useParams } from "react-router-dom";
import "../styles/layout.scss";

export default function Resources() {
  const { category } = useParams();
  console.log("Category from URL:", category);
  console.log("All resources:", resources);

  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );
  console.log("Filtered resources:", filteredResources);

  return (
    <section>
      <h1>{category.toUpperCase()} Resources</h1>
      {filteredResources.length > 0 ? (
        <ul>
          {filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No resources found for this category.</p>
      )}
    </section>
  );
}
