import ReviewCard from "./components/ReviewCard";
import data from "./data/dummy.json";

const Reviews = () => {
  return (
    <div className="py-32 overflow-hidden h-96 flex">
      <div className="animate-slide inline-flex delay-1000">
        {data.map((item) => (
          <ReviewCard
            avatar={item.avatar}
            reviewer={item.reviewer}
            review={item.review}
          />
        ))}
      </div>
      <div className="animate-slide inline-flex">
        {data.map((item) => (
          <ReviewCard
            avatar={item.avatar}
            reviewer={item.reviewer}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
