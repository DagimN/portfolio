import TimelineCard from "./components/TimelineCard";
import data from "./data/index.json";

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="w-full grid justify-center content-start bg-"
    >
      {/* TODO: Implement timeline animation */}
      {data.map((item, index) => (
        <TimelineCard data={item} index={index} />
      ))}
    </section>
  );
};

export default Timeline;
