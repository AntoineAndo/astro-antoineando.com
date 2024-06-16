import { Switch } from "@nextui-org/react";
import React from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export default function ThemeToggle() {
  const handleThemeChange = (e) => {
    const theme = e.target.checked ? "light" : "dark";

    window.localStorage.setItem("theme", theme);

    // if (e.target.value === "system") {
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    //     ? document.documentElement.classList.add("dark")
    //     : document.documentElement.classList.remove("dark");
    // } else

    if (e.target.checked === false) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Switch
      // defaultChecked={window.localStorage.getItem("theme") === "dark"}
      size="lg"
      className="dark:fill-gray-200 fill-yellow-500"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={handleThemeChange}
      classNames={{
        wrapper: "!bg-blue-500 dark:!bg-gray-800",
      }}
    />

    // <select name="themeSwitch" id="themeSwitch" onChange={handleThemeChange}>
    //   <option value="system">System</option>
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>
  );
}
