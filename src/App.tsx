import { useState } from "react";
import "./App.css";
import BgDark from "./assets/images/bg-dark-theme.png";
import BgLight from "./assets/images/bg-light-theme.png";
import DensityContainer from "./components/Density/DensityContainer";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import Stats from "./components/Stats/Stats";

type OptionTypes = {
  exSpaces: boolean;
  charLimit: boolean;
  charLimitNumber: number;
};

function App() {
  const [text, setText] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [options, setOptions] = useState<OptionTypes>({
    exSpaces: false,
    charLimit: false,
    charLimitNumber: 0,
  });

  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };

  const updateOptions = (options: OptionTypes) => {
    setOptions((prev) => ({ ...prev, ...options }));
  };

  return (
    <div
      role='main'
      className={`${theme} grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 duration-200 gap-10`}
      style={{ backgroundImage: `url(${theme === "dark" ? BgDark : BgLight})` }}
    >
      <Header toggleTheme={toggleTheme} />
      <MainContainer setText={setText} text={text} options={options} setOptions={updateOptions} />
      <Stats text={text} exSpaces={options.exSpaces} />
      <DensityContainer text={text} />
    </div>
  );
}

export default App;
