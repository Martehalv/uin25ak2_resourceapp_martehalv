import { Link } from "react-router-dom";
import "../styles/layout.scss";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/html">HTML</Link>
        </li>
        <li>
          <Link to="/css">CSS</Link>
        </li>
        <li>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/sanity">Sanity and headless CMS</Link>
        </li>
      </ul>
    </nav>
  );
}
