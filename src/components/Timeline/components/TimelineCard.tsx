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
    if (window.scrollY > 200 * (index + 1) && !isExpanded) {
      setIsExpanded(true);
    }

    if (window.scrollY <= 200 * (index + 1) && isExpanded) {
      setIsExpanded(false);
    }
  });

  return (
    <div
      className={`my-10 h-fit flex place-content-center items-center md:relative ${
        index % 2 != 0 ? "right-[19.64%]" : "left-[19.71%]"
      } ${
        isExpanded ? "w-full md:w-[40%] opacity-100" : "w-[10%] opacity-0"
      } duration-300 ease-in-out`}
    >
      {index % 2 == 0 && (
        <div className="md:block hidden w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] mr-20" />
      )}
      <div className="relative w-full z-10">
        <div
          className={`rounded-xl ${
            isExpanded ? "w-full px-6 py-2" : ""
          } bg-slate-400 bg-opacity-20 backdrop-blur-sm`}
        >
          <h1 className="text-title font-bold text-lg"> {data.title}</h1>
          <h2 className="text-subtitle text-sm py-2">{data.description}</h2>
          <h3 className="text-secondary float-right text-[12px] mt-3">
            {data.date}
          </h3>
        </div>
        <div className="absolute md:hidden w-3 h-3 top-[-15px] left-1/2 -translate-x-1/2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] mr-20" />
      </div>

      {index % 2 != 0 && (
        <div className="md:block hidden w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] ml-20" />
      )}
    </div>
  );
};

export default TimelineCard;
