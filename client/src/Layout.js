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
const Layout = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <ThemeProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              <App />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export default Layout;
