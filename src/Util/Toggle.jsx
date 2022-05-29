import React from "react";
import { func, string } from "prop-types";
import { ReactComponent as MoonIcon } from "../icons/MoonIcon.svg";
import { ReactComponent as SunIcon } from "../icons/SunIcon.svg";
import ToggleContainer from "./Toggle.styled";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
