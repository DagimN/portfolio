const ServiceTile = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  return (
    <div className={`grid justify-items-center ${className} hover:scale-110 duration-300`}>
      <img src={image} alt="" className="h-32 w-32 my-5" />
      <h1 className="text-gray-300 text-lg font-semibold">{title}</h1>
      <h2 className="text-gray-400 text-sm font-thin text-center w-2/3">{description}</h2>
    </div>
  );
};

export default ServiceTile;
