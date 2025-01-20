const ServiceCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="flex">
      <img src={image} alt="service" className="h-[613px] w-1/2 object-cover rounded-l-[50px]" />
      <div className="m-24">
        <h1 className="text-3xl">{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default ServiceCard;
