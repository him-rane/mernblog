import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/userContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./components/Providers/ThemeProvider";
import Layout from "./Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
