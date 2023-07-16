"use client";

import { AiFillHome } from "react-icons/ai";
import FloatingButton from "./FloatingButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdDarkMode, MdSunny } from "react-icons/md";
import { BiSolidPin } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useScroll } from "framer-motion";

import {
  setAuthorId,
  setLastVerse,
  setNavigatedFromPin,
  setTheme,
} from "../redux/slice/meal";

import { updateThemeColor } from "../utils/changeThemeColor";

const FloatingContainer = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.meal.theme);
  const author_id = useSelector((state) => state.meal.author_id);
  const lastVerse = useSelector((state) => state.meal.lastVerse);

  const handleTheme = () => {
    document.querySelector("body").classList.toggle("dark");
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      dispatch(setTheme("light"));
    } else {
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("body").classList.add("dark");
      dispatch(setTheme("dark"));
      updateThemeColor("#283618");
    } else {
      document.querySelector("body").classList.remove("dark");
      dispatch(setTheme("light"));
      updateThemeColor("#fefae0");
    }

    if (localStorage.getItem("lastVerse") !== "") {
      dispatch(setLastVerse(localStorage.getItem("lastVerse")));
    }

    if (localStorage.getItem("author_id") !== "") {
      dispatch(setAuthorId(parseInt(localStorage.getItem("author_id"))));
    } else {
      dispatch(setAuthorId(6));
    }
  }, []);

  const { scrollY } = useScroll();
  const [isVisibile, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // if least is greater than 100px trigger animation of framer motion
    if (latest > 80) {
      if (!isVisibile) {
        setIsVisible(true);
      }
    } else {
      if (isVisibile) {
        setIsVisible(false);
      }
    }
  });

  return (
    <AnimatePresence>
      {isVisibile && (
        <motion.div
          initial={{ opacity: 0, y: 100, translateX: "-50%" }}
          animate={{ opacity: 1, y: 0, translateX: "-50%" }}
          exit={{ opacity: 0, y: 100, translateX: "-50%" }}
          className="flex rounded-[16px] h-[56px] p-[12px] bg-floating_bg shadow-floating fixed bottom-[20px] left-1/2 -translate-x-1/2 z-[50] backdrop-blur-floating backdrop-saturate-floating"
        >
          <ul className="flex flex-row items-center h-[32px] space-x-3">
            <FloatingButton link={"/"}>
              <AiFillHome className="fill-blue_soft" />
            </FloatingButton>
            <FloatingButton link={""}>
              <div onClick={handleTheme}>
                {theme === "dark" ? (
                  <MdSunny className="fill-blue_soft" />
                ) : (
                  <MdDarkMode className="fill-blue_soft" />
                )}
              </div>
            </FloatingButton>

            <FloatingButton link={"/surahs/" + author_id + "/" + lastVerse}>
              <div
                onClick={() => {
                  dispatch(setNavigatedFromPin(true));
                }}
              >
                <BiSolidPin className="fill-blue_soft" />
              </div>
            </FloatingButton>

            <FloatingButton link={"/"}>
              <IoMdSettings className="fill-blue_soft" />
            </FloatingButton>

            <FloatingButton link={""}>
              <div onClick={scrollToTop}>
                <FaArrowUp className="fill-blue_soft" />
              </div>
            </FloatingButton>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContainer;
