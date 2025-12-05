import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const GlowingLine = () => {
  const [maxHeight, setMaxHeight] = useState<number>(1090);
  const [initialYProgress, setInitialYProgress] = useState<number>(0);
  const [isAtMax, setIsAtMax] = useState(false);
  const { scrollYProgress } = useScroll();
  const height = useTransform(
    scrollYProgress,
    [initialYProgress, 0.32],
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

      if (width > 640 && initialYProgress === 0.13) {
        setInitialYProgress(0);
      }

      if (width <= 640 && initialYProgress === 0) {
        setInitialYProgress(0.13);
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      // show the point when progress reaches the mapped max (0.32)
      setIsAtMax(v >= 0.32);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="w-[4px] bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] absolute z-0 top-[-150px] left-1/2 -translate-x-1/2"
      style={{ height }}
      transition={{
        ease: "easeInOut",
      }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isAtMax
            ? {
                opacity: [1, 1, 1, 1],
                scale: [1.25, 1, 1.25, 1],
              }
            : { opacity: 0, scale: 0 }
        }
        transition={
          isAtMax
            ? {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }
            : { type: "spring", stiffness: 300, damping: 20 }
        }
        className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] absolute right-[-5px] -bottom-2"
      />
    </motion.div>
  );
};

export default GlowingLine;
