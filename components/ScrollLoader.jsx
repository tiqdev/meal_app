import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollLoader = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;

    const progress = scrolled / (fullHeight - windowHeight);
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isNaN(scrollProgress)) {
      setScrollProgress(0);
    }
  }, [scrollProgress]);

  return (
    <motion.div
      className="fixed bottom-0 left-0 h-[8px] bg-brown_soft dark:bg-cream_bg z-[45]"
      transition={{ ease: "linear", duration: 0 }}
      style={{ width: `${scrollProgress * 100}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress * 100}%` }}
    />
  );
};

export default ScrollLoader;
