import iconMoon from "../../assets/images/icon-moon.svg";
import iconSun from "../../assets/images/icon-sun.svg";
import logoDark from "../../assets/images/logo-dark-theme.svg";
import logoLight from "../../assets/images/logo-light-theme.svg";

type PropTypes = {
  toggleTheme: (theme: string) => void;
};

export default function Header({ toggleTheme }: PropTypes) {
  const clickHandler = (theme: string) => {
    toggleTheme(theme);
  };

  return (
    <div className='col-span-4 md:col-span-8 flex justify-between p-4 md:p-8 items-center '>
      <img src={logoDark} alt='logo' className='dark:block hidden w-[11.525rem] h-[1.875rem]' />
      <img src={logoLight} alt='logo' className='dark:hidden block w-[11.525rem] h-[1.875rem]' />
      <button className='hidden dark:block' onClick={() => clickHandler("light")}>
        <img tabIndex={0} src={iconSun} alt='sun icon' className='w-[1.25rem] h-[1.25rem]' />
      </button>
      <button
        className='block dark:hidden 
      '
        onClick={() => clickHandler("dark")}
      >
        <img src={iconMoon} alt='moon icon' className='w-[1.25rem] h-[1.25rem]' />
      </button>
    </div>
  );
}
