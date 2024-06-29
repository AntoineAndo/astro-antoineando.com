import { Button, Switch } from "@nextui-org/react";
import React from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    //@ts-ignore
    "dark"
  );

  const handleThemeChange = (e: any) => {
    setTheme(theme === "light" ? "dark" : "light");
    //@ts-ignore
    window?.__setPreferredTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    console.log("azd");
    //@ts-ignore
    window.__onThemeChange = (v) => {
      //@ts-ignore
      setTheme(window?.__theme);
    };
    //@ts-ignore
    window.__onThemeChange(localStorage.theme);

    console.log("Theme is", localStorage.theme);
  }, []);

  return (
    <div>
      <Switch
        defaultSelected={theme === "light"}
        isSelected={theme === "light"}
        color="default"
        size="lg"
        className="dark:fill-gray-200 fill-yellow-500"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={handleThemeChange}
        classNames={{
          wrapper: "!bg-blue-500 dark:!bg-gray-800",
        }}
      />
    </div>
  );
}
