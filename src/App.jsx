import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/html" element={<Resources category={"html"} />} />
          <Route path="/css" element={<Resources category={"css"} />} />
          <Route
            path="/javascript"
            element={<Resources category={"javascript"} />}
          />
          <Route path="/react" element={<Resources category={"react"} />} />
          <Route
            path="/sanityandcms"
            element={<Resources category={"headless-cms"} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
