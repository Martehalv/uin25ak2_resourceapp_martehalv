import Nav from "./Nav";
import "../styles/layout.scss";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section>{children}</section>
      </main>
    </>
  );
}
