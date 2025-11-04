import data from "./data/index.json";
import ServiceTile from "./components/ServiceTile";

const Services = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-black to-transparent h-96 w-full" />
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
          <div className="bg-gray-400 w-full h-[75%] bg-opacity-30 backdrop-blur-sm grid grid-cols-3 justify-center items-center justify-items-center rounded-[50px] border-primary border-opacity-10 border-[1px]">
            {data.map((service) => (
              <ServiceTile
                title={service.title}
                description={service.description}
                image={service.image}
                icons={service.icons}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#07100d] to-transparent h-48 w-full" />
    </div>
  );
};

export default Services;
