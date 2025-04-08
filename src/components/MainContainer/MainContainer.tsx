type PropTypes = {
  setText: (text: string) => void;
};

export default function MainContainer({ setText }: PropTypes) {
  const changeHandler = (text: string) => {
    setText(text);
  };

  return (
    <div className='flex flex-col gap-10 col-span-4 p-4'>
      <h1 className='text-preset-1-mobile font-bold text-neutral-900 text-center'>
        Analyze your text in real-time.
      </h1>
      <div>
        <textarea
          onChange={(e) => changeHandler(e.target.value)}
          className='text-preset-3 mb-4 outline-none bg-neutral-100 border-2 border-neutral-200 rounded-12 w-full h-[200px] resize-none p-4'
        />
        <div className='flex gap-[10px] items-center mb-3'>
          <input id='exSpaces' type='checkbox' className='w-4 h-4' />
          <label htmlFor='exSpaces' className='text-preset-4'>
            Exclude Spaces
          </label>
        </div>
        <div className='flex gap-[10px] items-center mb-3'>
          <input id='charLimit' type='checkbox' className='w-4 h-4' />
          <label htmlFor='charLimit' className='text-preset-4'>
            Set Character Limit
          </label>
        </div>
        <p className='text-preset-4'>Approx. reading time: 1 minute</p>
      </div>
    </div>
  );
}
