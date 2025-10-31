import GlowingLine from "./components/GlowingLine";
import TimelineCard from "./components/TimelineCard";
import data from "./data/index.json";

const Timeline = () => {
  return (
    <div className="relative">
      <section
      id="timeline"
      className="grid place-items-center"
    >
      {data.map((item, index) => (
        <TimelineCard data={item} index={index} />
      ))}
      </section>
      <GlowingLine/>
    </div>
    
  );
};

export default Timeline;
