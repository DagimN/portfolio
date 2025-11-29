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
      type: string;
    }[];
  };
  offset: string;
  endTrigger: boolean;
}) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  let interval: any;

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
      className={`bg-gray-400 bg-opacity-30 backdrop-blur-sm border-primary border-opacity-10 border-[1px] rounded-[50px] absolute ${offset} w-full shadow-xl transition-transform md:flex justify-between`}
      style={{ top: offset, transition: "top 300ms ease-in-out" }}
    >
      <div className="w-1/2">
        <h2 className="text-3xl text-white font-semibold p-8">
          {content.title}
        </h2>
        <p className="text-white p-8 pt-0">{content.description}</p>
      </div>

      <div className="w-full md:w-1/2 h-full relative">
        {content.media[mediaIndex].type === "video" ? (
          <video
            src={content.media[mediaIndex].url}
            className="w-full h-full bg-white/20 rounded-br-[50px] rounded-bl-[50px] rounded-tr-none md:rounded-tr-[50px] md:rounded-br-[50px] md:rounded-bl-none opacity-70"
            autoPlay
            muted
          />
        ) : (
          <div className="relative">
            <img
              src={content.media[mediaIndex].url}
              alt=""
              className="w-full h-96 bg-white/20 rounded-br-[50px] rounded-bl-[50px] rounded-tr-none md:rounded-tr-[50px] md:rounded-br-[50px] md:rounded-bl-none object-cover opacity-50 z-0 relative"
            />
            <div className="w-full h-96 bg-gray-300/30 rounded-br-[50px] rounded-bl-[50px] rounded-tr-none md:rounded-tr-[50px] md:rounded-br-[50px] md:rounded-bl-none backdrop-blur-md absolute top-0 left-0 z-10" />
            <img
              src={content.media[mediaIndex].url}
              alt=""
              className="w-full h-96 rounded-br-[50px] rounded-bl-[50px] rounded-tr-none md:rounded-tr-[50px] md:rounded-br-[50px] md:rounded-bl-none object-contain absolute top-0 left-0 z-30"
            />
          </div>
        )}

        {content.media.length > 1 && (
          <div className="absolute bottom-4 w-full px-8 grid gap-4 z-40">
            <div className="flex justify-center gap-6 w-full px-8">
              <button
                onClick={prevMedia}
                className="rounded-full bg-white h-6 w-6 shadow-xl flex justify-center items-center"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                onClick={nextMedia}
                className="rounded-full bg-white h-6 w-6 shadow-xl flex justify-center items-center"
              >
                <FaChevronRight size={12} />
              </button>
            </div>

            <div className="flex justify-center">
              {content.media.map((media, index) => (
                <span
                  key={`media-indicator-${index}`}
                  className={`h-2 rounded-full relative mx-1 bg-gray-400 ${
                    index === mediaIndex ? "w-6" : " w-2"
                  }`}
                >
                  <span
                    className={`h-2 rounded-full absolute top-0 left-0 ${
                      index === mediaIndex
                        ? `bg-white w-6 animate-[growWidth_var(--duration)_linear_forwards]`
                        : "bg-gray-400 w-2"
                    }`}
                    style={
                      {
                        "--duration": `${media.duration}ms`,
                      } as React.CSSProperties
                    }
                  />
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCaseItem;
