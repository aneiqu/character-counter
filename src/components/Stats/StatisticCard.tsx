type PropTypes = {
  StatValue: number;
  StatTitle: string;
  Image: string;
  Style: string;
};

export default function StatisticCard({ StatValue, StatTitle, Image, Style }: PropTypes) {
  return (
    <div
      className={`${Style} flex flex-col px-5 py-[27px] md:px-3 md:py-[25px] rounded-12 gap-2 overflow-hidden relative justify-center md:w-full`}
    >
      <h2 className='text-preset-1-mobile'>{StatValue}</h2>
      <p className='text-preset-3'>{StatTitle}</p>
      <img src={Image} width={150} height={150} className='absolute right-[-15%] md:right-[-30%]' />
    </div>
  );
}
