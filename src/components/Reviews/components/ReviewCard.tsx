const ReviewCard = ({ avatar }: { avatar: string }) => {
  return (
    <div className="w-[250px] h-48 sm:h-56 rounded-3xl mx-5 grid justify-items-center content-between p-6">
      <img src={avatar} alt="" className="h-20 sm:h-28 object-contain" />
    </div>
  );
};

export default ReviewCard;
