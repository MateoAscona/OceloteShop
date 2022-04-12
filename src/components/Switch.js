import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const Switch = () => {
  const { isOn, darkMode } = useThemeContext();

  return (
    <label className="label">
      <div className="toggle">
        <input
          className="toggle-state"
          type="checkbox"
          name="check"
          value="check"
          onClick={() => {
            darkMode();
          }}
        />
        <div className="indicator"></div>
      </div>
      <div className={`label-text${isOn}`}>dark mode</div>
    </label>
  );
};

export default Switch;
