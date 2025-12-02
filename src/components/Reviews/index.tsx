import ReviewCard from "./components/ReviewCard";
import data from "./data";

const Reviews = () => {
  return (
    <div id="clients" className="overflow-hidden flex">
      <div className="animate-slide inline-flex delay-1000">
        {data.map((item, index) => (
          <ReviewCard key={`review-delayed-${index}`} avatar={item.avatar} />
        ))}
      </div>
      <div className="animate-slide inline-flex">
        {data.map((item, index) => (
          <ReviewCard key={`review-${index}`} avatar={item.avatar} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
