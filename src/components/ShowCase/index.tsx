import { useEffect, useState } from "react";
import ShowCaseItem from "./ShowCaseItem";
import data from "./data";

const ShowCasePanel = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="showcases"
      className="duration-1000 mt-48 relative px-6 pb-[750px] md:pb-[550px]"
    >
      <h1 className="text-5xl text-saturated-green font-bold my-5">Projects</h1>

      <div className="relative pt-20">
        {data.map((content, index) => {
          const triggerHeight =
            windowWidth > 1020
              ? 1845
              : windowWidth > 800
              ? 2500
              : windowWidth > 400
              ? 2700
              : 2840;
          const trigger =
            index == 0 ? triggerHeight : (index + 1) * 100 + triggerHeight;
          const offset = trigger + 10;

          return (
            <ShowCaseItem
              key={`showcase-${index}`}
              offset={scrollY < trigger ? "1500px" : `${index * 160}px`}
              endTrigger={scrollY > offset}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCasePanel;
