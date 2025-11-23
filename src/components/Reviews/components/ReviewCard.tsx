const ReviewCard = ({
  avatar,
  reviewer,
}: {
  avatar: string;
  reviewer: string;
}) => {
  return (
    <div className="bg-zinc-600 w-[350px] h-48 sm:h-56 rounded-3xl mx-5 grid justify-items-center content-between p-6">
      <img src={avatar} alt="" className="h-20 sm:h-28" />
      <h1 className="text-xl sm:mt-4 text-title text-center">{reviewer}</h1>
    </div>
  );
};

export default ReviewCard;
