import { useEffect, useState } from "react";
import LetterDensity from "./LetterDensity";

type PropTypes = {
  text: string;
};

export default function DensityContainer({ text }: PropTypes) {
  const [letters, setLetters] = useState<Record<string, number>>({});
  const [showAllStats, setShowAllStats] = useState<boolean>(false);

  const toggleDisplay = () => {
    setShowAllStats((prev) => !prev);
  };

  useEffect(() => {
    setLetters(
      text
        .trim()
        .replace(/\s+/g, "")
        .split("")
        .filter((char) => /[a-zA-Z]/.test(char))
        .reduce((acc: Record<string, number>, char) => {
          acc[char.toLowerCase()] = (acc[char.toLowerCase()] || 0) + 1;
          return acc;
        }, {})
    );
  }, [text]);

  const LetterStats = Object.entries(letters)
    .sort(([, a], [, b]) => b - a)
    .map(([letter, count]) => (
      <LetterDensity
        key={letter}
        letter={letter}
        count={count}
        percentage={(count / Object.entries(letters).reduce((acc, [, b]) => acc + b, 0)) * 100}
      />
    ));

  return (
    <div className='flex flex-col gap-5 dark:text-neutral-200'>
      <h3 className='text-preset-2'>Letter Density</h3>
      <div className='flex flex-col gap-3'>
        {LetterStats.slice(0, showAllStats ? LetterStats.length : 5)}
      </div>
      <div className='flex items-center gap-2' onClick={toggleDisplay}>
        {showAllStats ? "See less" : "See more"}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`size-3 ${showAllStats ? "hidden" : ""}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`size-3 ${showAllStats ? "" : "hidden"}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
        </svg>
      </div>
    </div>
  );
}
