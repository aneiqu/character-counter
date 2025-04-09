type PropTypes = {
  letter: string;
  count: number;
  percentage: number;
};

export default function LetterDensity({ letter, count, percentage }: PropTypes) {
  return (
    <div id={`letter-${letter}`} className='flex gap-[14px] items-center'>
      <p className='min-w-4 text-preset-4'>{letter.toUpperCase()}</p>
      <div className='min-w-[212px] rounded-full bg-neutral-100 dark:bg-neutral-800 h-3'>
        <div
          className='rounded-full bg-purple-400 h-full'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className=' text-preset-4 text-right w-full'>
        {count} ({percentage.toFixed(2)}%)
      </p>
    </div>
  );
}
