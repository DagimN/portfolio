const ServiceTile = ({
  title,
  description,
  image,
  className,
  icons,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
  icons?: string[];
}) => {
  return (
    <div
      className={`grid justify-items-center ${className} w-[80%] hover:scale-110 duration-300 border-[1px] rounded-3xl p-3 border-transparent hover:border-secondary hover:z-10 hover:bg-gradient-to-br hover:from-[#00a8e056] hover:to-[#2fc29d2c] group`}
    >
      <div className="relative">
        <img
          src={image}
          alt=""
          className="h-32 w-32 my-5 group-hover:opacity-0"
        />
        {icons ? (
          <div className="flex flex-wrap absolute z-10 w-[200%] h-full top-0 left-[-50%] rounded-[20px] group-hover:visible invisible justify-center items-center gap-5">
            {icons.map((icon, index) => (
              <img
                key={`service-icon-${index}`}
                src={icon}
                alt=""
                className="w-14 h-16 object-contain bg-teal-300/10 rounded-md p-1"
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      <h1 className="text-title text-lg font-semibold text-center">{title}</h1>
      <h2 className="text-subtitle text-sm font-thin text-center w-2/3">
        {description}
      </h2>
    </div>
  );
};

export default ServiceTile;
