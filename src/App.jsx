import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <Router>
      <PageTitle />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/html" />} />
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route
            path="/javascript"
            element={<Resources category="javascript" />}
          />
          <Route path="/react" element={<Resources category="react" />} />
          <Route
            path="/sanity"
            element={<Resources category="headless-cms" />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
