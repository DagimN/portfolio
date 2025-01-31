const ReviewCard = ({
  avatar,
  reviewer,
  review,
}: {
  avatar: string;
  reviewer: string;
  review: string;
}) => {
  return (
    <div className="bg-white w-[350px] h-56 rounded-3xl mx-5 flex p-6 gap-5">
      <img src={avatar} alt="" className="bg-gray-400 rounded-full h-16 w-16" />
      <div className="grid content-start">
        <h1 className="text-3xl mt-4">{reviewer}</h1>
        <h2 className="text-lg italic mt-10 overflow-auto">{review}</h2>
      </div>
    </div>
  );
};

export default ReviewCard;
