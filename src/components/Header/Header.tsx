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
    <div className='col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-4 flex justify-between p-4 md:p-8 items-center max-w-[990px]'>
      <img
        src={logoDark}
        alt='logo'
        className='dark:block hidden w-[11.525rem] h-[1.875rem] md:scale-[1.333] md:ml-8'
      />
      <img src={logoLight} alt='logo' className='dark:hidden block w-[11.525rem] h-[1.875rem]' />
      <button className='hidden dark:block' onClick={() => clickHandler("light")}>
        <div className='p-2 md:p-3 rounded-md bg-neutral-700 md:rounded-lg'>
          <img
            tabIndex={0}
            src={iconSun}
            alt='sun icon'
            className='w-[17px] h-[17px] md:w-[18px] md:h-[18px]'
          />
        </div>
      </button>
      <button
        className='block dark:hidden 
      '
        onClick={() => clickHandler("dark")}
      >
        <div className='p-2 md:p-3 rounded-md bg-neutral-100 md:rounded-lg'>
          <img
            src={iconMoon}
            alt='moon icon'
            className='w-[17px] h-[17px] md:w-[18px] md:h-[18px]'
          />
        </div>
      </button>
    </div>
  );
}
