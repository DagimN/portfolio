import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const GlowingLine = () => {
  const [maxHeight, setMaxHeight] = useState<number>(1090);
  const { scrollYProgress } = useScroll();
  const height = useTransform(
    scrollYProgress,
    [0, 0.32],
    ["0px", `${maxHeight}px`]
  );

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      if (width >= 1270) {
        setMaxHeight(1090);
      }

      if (width < 1270 && width >= 768) {
        setMaxHeight(1290);
      }

      if (width < 768) {
        setMaxHeight(990);
      }

      if (width < 480) {
        setMaxHeight(1120);
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <motion.div
      className="w-[4px] bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] absolute z-0 top-[-150px] left-1/2 -translate-x-1/2"
      style={{ height }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingLine;
