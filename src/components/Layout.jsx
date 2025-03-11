import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Link to="html">HTML</Link>
        <Link to="css">CSS</Link>
        <Link to="javascript">Javascript</Link>
        <Link to="react">React</Link>
        <Link to="sanityandcms">Sanity and headless CMS</Link>
      </main>
      {children}
    </>
  );
}
