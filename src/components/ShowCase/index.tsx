import { useEffect, useState } from "react";
import ShowCaseItem from "./ShowCaseItem";

const ShowCasePanel = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="showcases"
      className="duration-1000 mt-48 relative mx-24 pb-[500px]"
    >
      <h1 className="text-5xl text-saturated-green font-bold my-5">Projects</h1>

      <div className="relative px-6 pt-20">
        {["", "", "", "", "", ""].map((_, index) => {
          const trigger = index == 0 ? 1845 : (index + 1) * 100 + 1845;

          return (
            <ShowCaseItem
              key={`showcase-${index}`}
              offset={scrollY < trigger ? "1000px" : `${index * 100}px`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCasePanel;
