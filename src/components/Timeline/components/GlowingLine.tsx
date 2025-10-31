import { motion, useScroll, useTransform } from "framer-motion";

const GlowingLine = () => {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.32], ["0px", "1540px"]);

  return (
    <motion.div
      className="w-[4px] bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee] absolute top-[-150px] left-1/2 -translate-x-1/2"
      style={{ height }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingLine;
