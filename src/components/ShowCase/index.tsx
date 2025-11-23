import { useEffect, useState } from "react";
import ShowCaseItem from "./ShowCaseItem";

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
      className="duration-1000 mt-48 relative px-8 pb-[700px] md:pb-[500px]"
    >
      <h1 className="text-5xl text-saturated-green font-bold my-5">Projects</h1>

      <div className="relative pt-20">
        {["", "", "", "", "", ""].map((_, index) => {
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
              offset={scrollY < trigger ? "1000px" : `${index * 100}px`}
              endTrigger={scrollY > offset}
              content={{
                title: "Sample Project",
                description: "lorem ipsum dolor sit amet consectetur",
                media: [
                  {
                    url: "https://cdn.sanity.io/images/599r6htc/regionalized/dd1a495b8b4851ea64959fe6ea1d29f683ff226d-2400x2400.png",
                    duration: 3000,
                    type: "image",
                  },
                  {
                    url: "https://www.holamediasolutions.com/wp-content/uploads/2020/09/web-design-1.jpg",
                    duration: 10000,
                    type: "image",
                  },
                ],
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCasePanel;
