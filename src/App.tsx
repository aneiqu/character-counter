import { useState } from "react";
import "./App.css";
import BgDark from "./assets/images/bg-dark-theme.png";
import BgLight from "./assets/images/bg-light-theme.png";
import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState<string>("");

  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div
      role='main'
      className={`${theme} grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 mx-auto duration-200 gap-10`}
      style={{ backgroundImage: `url(${theme === "dark" ? BgDark : BgLight})` }}
    >
      <Header toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
