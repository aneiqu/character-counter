import patternCharCount from "../../assets/images/pattern-character-count.svg";
import patternSentenceCount from "../../assets/images/pattern-sentence-count.svg";
import patternWordCount from "../../assets/images/pattern-word-count.svg";
import StatisticCard from "./StatisticCard";

type PropTypes = {
  text: string;
  exSpaces: boolean;
};

export default function Stats({ text, exSpaces }: PropTypes) {
  return (
    <div className='flex flex-col md:flex-row gap-4 col-span-4 md:col-span-8 px-4 md:px-8'>
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
    </div>
  );
}
