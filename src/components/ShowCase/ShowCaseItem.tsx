import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShowCaseItem = ({
  content,
  offset,
  endTrigger,
}: {
  content: {
    title: string;
    description: string;
    media: {
      url: string;
      duration: number;
      type: "image" | "video";
    }[];
  };
  offset: string;
  endTrigger: boolean;
}) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  let interval: NodeJS.Timeout;

  const nextMedia = () => {
    clearInterval(interval);

    setMediaIndex((prevIndex) =>
      prevIndex + 1 >= content.media.length ? 0 : prevIndex + 1
    );
  };

  const prevMedia = () => {
    clearInterval(interval);

    setMediaIndex((prevIndex) =>
      prevIndex - 1 >= content.media.length ? 0 : prevIndex - 1
    );
  };

  useEffect(() => {
    interval = setInterval(nextMedia, content.media[mediaIndex].duration);
    return () => clearInterval(interval);
  }, [mediaIndex]);

  useEffect(() => {
    if (endTrigger) {
      clearInterval(interval);
    }
  }, [endTrigger]);

  return (
    <div
      className={`bg-gray-400 bg-opacity-30 backdrop-blur-sm border-primary border-opacity-10 border-[1px] rounded-[50px] h-96 absolute ${offset} w-full shadow-xl transition-transform flex justify-between`}
      style={{ top: offset, transition: "top 300ms ease-in-out" }}
    >
      <div>
        <h2 className="text-3xl text-white font-semibold p-8">
          {content.title}
        </h2>
        <p className="text-white p-8 pt-0">{content.description}</p>
      </div>

      <div className=" w-1/2 h-full relative">
        {content.media[mediaIndex].type === "video" ? (
          <video
            src={content.media[mediaIndex].url}
            className="w-full h-full bg-white/20 rounded-r-[50px] object-fill opacity-70"
            autoPlay
            muted
          />
        ) : (
          <img
            src={content.media[mediaIndex].url}
            alt=""
            className="w-full h-full bg-white/20 rounded-r-[50px] object-fill opacity-70"
          />
        )}

        {content.media.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-8">
            <button
              onClick={prevMedia}
              className="rounded-full bg-white h-10 w-10 shadow-xl flex justify-center items-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextMedia}
              className="rounded-full bg-white h-10 w-10 shadow-xl flex justify-center items-center"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCaseItem;
