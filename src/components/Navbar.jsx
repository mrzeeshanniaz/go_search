import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import Switch from "react-switch";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="py-5 pb-0 flex flex-col justify-between  sm:justify-center items-center shadow dark:shadow-md">
      
      <div className="w-full flex justify-between items-center">
        <Logo />
        <Switch onChange={() => setDarkTheme(!darkTheme)}  uncheckedIcon="💡" checkedIcon="🌙" offColor="#173347" className="border mx-2 dark:border-secondary" onColor="#000000" checked={darkTheme} />
      </div>

      <div className="w-full flex justify-center items-center">
      <Search />
      </div>
      
    </div>
  );
};
