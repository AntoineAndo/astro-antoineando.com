export default function ThemeToggle() {
  const handleThemeChange = (e) => {
    console.log(window.localStorage.getItem("theme"));
    console.log(e.target.value);

    window.localStorage.setItem("theme", e.target.value);

    if (e.target.value === "system") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    } else if (e.target.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <select name="themeSwitch" id="themeSwitch" onChange={handleThemeChange}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
