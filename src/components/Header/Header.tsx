import iconMoon from "../../assets/images/icon-moon.svg";
import iconSun from "../../assets/images/icon-sun.svg";
import logoDark from "../../assets/images/logo-dark-theme.svg";
import logoLight from "../../assets/images/logo-light-theme.svg";

export default function Header({ toggleTheme }) {
  const clickHandler = (e) => {
    toggleTheme(e);
  };

  return (
    <div className='col-span-4 flex justify-between p-4 items-center '>
      <img src={logoDark} alt='logo' className='dark:block hidden w-[11.525rem] h-[1.875rem]' />
      <img src={logoLight} alt='logo' className='dark:hidden block w-[11.525rem] h-[1.875rem]' />
      <img
        onClick={() => clickHandler("light")}
        src={iconSun}
        alt='logo'
        className='dark:block hidden w-[1.25rem] h-[1.25rem]'
      />
      <img
        onClick={() => clickHandler("dark")}
        src={iconMoon}
        alt='logo'
        className='dark:hidden block w-[1.25rem] h-[1.25rem]'
      />
    </div>
  );
}
