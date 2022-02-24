// import { Button } from "react-bootstrap";
import { useState } from "react";
import lightBulb from "../assets/cuteBulb.png";

export default function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState("cute");

  const themes = {
    cute: {
      navBar: "#ddbbd5",
      navBarText: "#000",
      backgroundColor: "#feded7",
      loginButton: "#453750",
      registerButtonColor: "#4D90CC",
      progressBarColor: "#3e98c7",
      // logoFont: "'Josefin Sans', sans-serif",
      // subheaderFont: "'Mada', sans-serif",
      // textFont: "'Hind Guntur', sans-serif",
      textColor: "#000",
      glow: "none",
      lightsOut: "none",
    },
    dark: {
      navBar: "#151010",
      navBarText: "#FFF",
      backgroundColor: "#302A2A",
      loginButton: "#453750",
      registerButtonColor: "#4D90CC",
      progressBarColor: "#FFF",
      // logoFont: "'Josefin Sans', sans-serif",
      // subheaderFont: "'Mada', sans-serif",
      // textFont: "'Hind Guntur', sans-serif",
      textColor: "#FFF",
      glow: "drop-shadow(0px 0px 3px pink) brightness(250%)",
      lightsOut: " saturate(50%) brightness(40%)",
    },
  };

  const theme = themes[currentTheme];

  return (
    <>
      <style>
        {` :root {

        --navBar: ${theme.navBar}; 
        --navBarText:${theme.navBarText};
        --backgroundColor: ${theme.backgroundColor};
        --loginButton:${theme.loginButton};
        --registerButtonColor: ${theme.registerButtonColor};
        --progressBarColor: ${theme.progressBarColor};

        --textColor: ${theme.textColor};
        --glow: ${theme.glow};
        --lightsOut: ${theme.lightsOut};

        }

        .light-bulb {
          filter: var(--glow);
          transition: 1000ms;
        }

      `}
      </style>
      <div
        onClick={() => {
          currentTheme === "cute"
            ? setCurrentTheme("dark")
            : setCurrentTheme("cute");
        }}
      >
        <img alt="lightBulb" className="light-bulb" src={lightBulb}></img>
      </div>
    </>
  );
}
