type PropTypes = {
  StatValue: number;
  StatTitle: string;
  Image: string;
  Style: string;
};

export default function StatisticCard({ StatValue, StatTitle, Image, Style }: PropTypes) {
  return (
    <div
      className={`${Style} flex flex-col px-4 py-[27px] rounded-12 gap-2 overflow-hidden relative justify-center`}
    >
      <h2 className='text-preset-1-mobile'>{StatValue}</h2>
      <p className='text-preset-3'>{StatTitle}</p>
      <img src={Image} width={150} height={150} className='absolute right-[-15%]' />
    </div>
  );
}
