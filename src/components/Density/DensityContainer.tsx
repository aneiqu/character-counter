import { useEffect, useState } from "react";
import LetterDensity from "./LetterDensity";

type PropTypes = {
  text: string;
};

export default function DensityContainer({ text }: PropTypes) {
  const [letters, setLetters] = useState<Record<string, number>>({});

  useEffect(() => {
    setLetters(
      text
        .trim()
        .replace(/\s+/g, "")
        .split("")
        .filter((char) => /[a-zA-Z]/.test(char))
        .reduce((acc: Record<string, number>, char) => {
          acc[char] = (acc[char] || 0) + 1;
          return acc;
        }, {})
    );
  }, [text]);

  useEffect(() => {
    console.log(letters);
  });

  return (
    <div>
      <h3 className='text-preset-2 mb-5'>Letter Density</h3>
      <div className='flex flex-col gap-3'>
        {Object.entries(letters)
          .sort(([, a], [, b]) => b - a)
          .map(([letter, count]) => (
            <LetterDensity
              letter={letter}
              count={count}
              percentage={
                (count / Object.entries(letters).reduce((acc, [, b]) => acc + b, 0)) * 100
              }
            />
          ))}
      </div>
    </div>
  );
}
