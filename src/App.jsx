import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import PageTitle from "./components/PageTitle";
import Resources from "./components/Resources";
import HtmlPage from "./components/HtmlPage";
import SanityAndCmsPage from "./components/SanityAndCmsPage";
import CssPage from "./components/CssPage";
import JavaScriptPage from "./components/JavaScriptPage";
import ReactPage from "./components/ReactPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="html" element={<HtmlPage />} />
        <Route path="css" element={<CssPage />} />
        <Route path="javascript" element={<JavaScriptPage />} />
        <Route path="react" element={<ReactPage />} />
        <Route path="sanityandcms" element={<SanityAndCmsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
