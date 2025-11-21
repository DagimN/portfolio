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
