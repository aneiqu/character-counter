import patternCharCount from "../../assets/images/pattern-character-count.svg";
import patternSentenceCount from "../../assets/images/pattern-sentence-count.svg";
import patternWordCount from "../../assets/images/pattern-word-count.svg";
import DensityContainer from "../Density/DensityContainer";
import StatisticCard from "./StatisticCard";

type PropTypes = {
  text: string;
  exSpaces: boolean;
};

export default function Stats({ text, exSpaces }: PropTypes) {
  return (
    <div className='flex flex-col gap-4 col-span-4 p-4'>
      <StatisticCard
        StatValue={exSpaces ? text.replace(/\s+/g, "").length : text.length}
        StatTitle='Total Characters'
        Image={patternCharCount}
        Style='bg-purple-400'
      />
      <StatisticCard
        StatValue={
          text
            .trim()
            .split(" ")
            .filter((word) => word.length > 0).length
        }
        StatTitle='Word Count'
        Image={patternWordCount}
        Style='bg-yellow-500'
      />
      <StatisticCard
        StatValue={
          text
            .trim()
            .split(".")
            .filter((sentence) => sentence.length > 0).length
        }
        StatTitle='Sentence Count'
        Image={patternSentenceCount}
        Style='bg-orange-500'
      />
      <DensityContainer text={text} />
    </div>
  );
}
