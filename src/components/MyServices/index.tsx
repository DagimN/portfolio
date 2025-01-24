import { useEffect, useState } from "react";
import ServiceCard from "./components/ServiceCard";
import data from "./data";

const Services = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number>();
  const timers: number[] = [];

  useEffect(() => {
    if (hoverIndex) return;

    const timer = setTimeout(() => {
      //TODO: Clear timers when back to first
      setServiceIndex((serviceIndex + 1) % data.length);
    }, 5000);

    timers.push(timer);
  }, [serviceIndex]);

  return (
    <section className="relative h-[820px] w-full bg-black">
      <div className="z-0">
        <video
          src="https://videos.pexels.com/video-files/3130284/3130284-sd_640_360_30fps.mp4"
          className="w-full absolute h-full object-cover"
          autoPlay
          loop
          muted
          disablePictureInPicture
        />
        <div className="absolute h-full w-full bg-opacity-25 backdrop-blur-sm bg-black" />
      </div>

      <div className="absolute z-20 mx-24 my-5 w-[85%] h-full">
        <h1 className="text-5xl text-saturated-green font-bold my-5">
          Services
        </h1>
        <div className="bg-gray-400 w-full h-[75%] bg-opacity-30 backdrop-blur-sm  rounded-[50px] border-primary border-opacity-10 border-[1px] relative">
          <ServiceCard
            title={data[hoverIndex ?? serviceIndex].title}
            description={data[hoverIndex ?? serviceIndex].description}
            image={data[hoverIndex ?? serviceIndex].image}
          />

          <div className="absolute right-[17%] bottom-5 flex gap-5 z-10">
            {data.map((_service, index) => (
              <div
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => {
                  setHoverIndex(undefined);
                  var highestTimeoutId = setTimeout(";");
                  for (var i = 0; i < highestTimeoutId; i++) {
                    clearTimeout(i);
                  }
                  setServiceIndex(index);
                }}
                className={`h-3 w-3 ${
                  index === (hoverIndex ?? serviceIndex)
                    ? "bg-white"
                    : "bg-white/50"
                } rounded-full hover:scale-150 duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
