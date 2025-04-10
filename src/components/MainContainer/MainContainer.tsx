import checkmarkIcon from "../../assets/images/icon-check.svg";

type OptionTypes = {
  exSpaces: boolean;
  charLimit: boolean;
  charLimitNumber: number;
};

type PropTypes = {
  setText: (text: string) => void;
  setOptions: (options: OptionTypes) => void;
  options: OptionTypes;
  text: string;
};

export default function MainContainer({ text, setText, options, setOptions }: PropTypes) {
  const textChangeHandler = (text: string) => {
    setText(text);
  };

  const optionsChangeHandler = (option: Record<string, boolean | number>) => {
    setOptions({ ...options, ...option });
  };

  // const readingTime = ;

  return (
    <div className='flex flex-col gap-10 col-span-4 md:col-span-8 px-4 md:px-8 '>
      <h1 className='text-preset-1-mobile font-bold text-neutral-900 text-center dark:text-neutral-100'>
        Analyze your text in real-time.
      </h1>
      <div className='dark:text-neutral-200'>
        <textarea
          tabIndex={1}
          onChange={(e) => textChangeHandler(e.target.value)}
          className='text-preset-3 mb-4 outline-none bg-neutral-100 dark:bg-neutral-700 border-2 border-neutral-200 dark:border-neutral-800 rounded-12 w-full h-[200px] resize-none p-4'
        />
        <div className='md:flex justify-between items-center'>
          <div className='md:flex gap-6'>
            <div
              role='checkbox'
              className='flex gap-[10px] items-center mb-3 md:mb-0 w-fit'
              onClick={() => optionsChangeHandler({ exSpaces: !options.exSpaces })}
            >
              <div
                tabIndex={2}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    optionsChangeHandler({ exSpaces: !options.exSpaces });
                  }
                }}
                id='exSpaces'
                className={`flex items-center justify-center w-4 h-4 rounded-4 border focus:border-neutral-200 focus:ring-2 ring-white focus:outline-none focus:outline-2 focus:outline-purple-400 ${
                  options.exSpaces
                    ? "bg-purple-400 focus:border-2 border-purple-400 focus:border-purple-400 "
                    : "border-neutral-900 dark:border-neutral-200 border-2"
                }`}
              >
                <img src={checkmarkIcon} className={`${options.exSpaces ? "" : "hidden"}`} />
              </div>
              <label htmlFor='exSpaces' className='text-preset-4'>
                Exclude Spaces
              </label>
            </div>
            <div
              role='checkbox'
              className='flex gap-[10px] items-center mb-3 md:mb-0 w-fit'
              onClick={() => optionsChangeHandler({ charLimit: !options.charLimit })}
            >
              <div
                tabIndex={3}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    optionsChangeHandler({ charLimit: !options.charLimit });
                  }
                }}
                id='charLimit'
                className={`flex items-center justify-center w-4 h-4 rounded-4 border focus:border-neutral-200 focus:ring-2 ring-white focus:outline-none focus:outline-2 focus:outline-purple-400 ${
                  options.charLimit
                    ? "bg-purple-400 focus:border-2 border-purple-400 focus:border-purple-400 "
                    : "border-neutral-900 dark:border-neutral-200 border-2"
                }`}
              >
                <img src={checkmarkIcon} className={`${options.charLimit ? "" : "hidden"}`} />
              </div>
              <label htmlFor='charLimit' className='text-preset-4'>
                Set Character Limit
              </label>
              <input
                tabIndex={4}
                type='number'
                className={`outline-none border-[1px] border-neutral-600 dark:bg-transparent rounded-6 px-3 py-1 max-w-[55px] ${
                  options.charLimit ? "" : "hidden"
                }`}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <p className='text-preset-4'>
            Approx. reading time: {Math.ceil(text.trim().split(" ").length / 220)} minute
          </p>
        </div>
      </div>
    </div>
  );
}
