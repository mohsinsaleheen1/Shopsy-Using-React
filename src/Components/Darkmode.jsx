import React, { useState } from "react";
import LightButton from "../images/lightmode.png";
import DarkButton from "../images/darkmode.png";
function Darkmode() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  console.log(element);
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={LightButton}
        className={`w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute z-10 right-0 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={DarkButton}
        className="w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
}

export default Darkmode;
