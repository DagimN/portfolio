const Services = () => {
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
        <div className="p-10 bg-gray-400 bg-opacity-30 backdrop-blur-sm h-[75%] rounded-[50px] border-primary border-opacity-10 border-[1px]">
          <div>UI/UX Design</div>
          <div>Backend Servers</div>
          <div>Full Stack</div>
          <div>Mobile Development</div>
          <div>Desktop Development</div>
          <div>Bots i.e. Telegram/Discord</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
