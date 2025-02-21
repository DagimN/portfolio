import { useState } from "react";

const TimelineCard = ({
  data,
  index,
}: {
  data: { title: string; description: string; date: string };
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  window.addEventListener("scroll", (_) => {
    if (window.scrollY > 250 * (index + 1)) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  });

  return (
    <div
      className={`my-5 border-2 ${
        index % 2 != 0 ? "" : "ml-[70%]"
      } border-primary rounded-xl  ${
        isExpanded ? "w-[40%] px-6 py-2" : "w-0"
      } h-fit duration-100 bg-slate-400 bg-opacity-20 backdrop-blur-sm`}
    >
      <h1 className="text-title font-bold text-lg"> {data.title}</h1>
      <h2 className="text-subtitle text-sm p-2">{data.description}</h2>
      <h3 className="float-right text-[12px] mt-3">{data.date}</h3>
    </div>
  );
};

export default TimelineCard;
