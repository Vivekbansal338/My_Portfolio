import React from "react";
import { Outlet } from "react-router-dom";
// import useDarkMode from "use-dark-mode";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

const AppLayout = () => {
  const darkMode = "true";
  return (
    <div
      className={`${darkMode ? "dark" : "light"} text-foreground bg-background`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
