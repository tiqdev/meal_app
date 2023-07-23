"use client";

import FloatingButton from "./FloatingButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  BiSolidPin,
  BiSolidCog,
  BiSolidSun,
  BiSolidMoon,
  BiSolidHome,
  BiSolidUpvote,
} from "react-icons/bi";

import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useScroll } from "framer-motion";

import {
  setAuthorId,
  setLastVerse,
  setNavigatedFromPin,
  setTheme,
} from "../app/redux/slice/meal";

import { updateThemeColor } from "../utils/changeThemeColor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      updateThemeColor("#008080");
    } else {
      document.querySelector("body").classList.remove("dark");
      dispatch(setTheme("light"));
      updateThemeColor("#ecfdf5");
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
            <FloatingButton link={"/"} className="group">
              <BiSolidHome className="fill-blue_soft w-[18px] h-[18px] group-hover:fill-blue_white" />
            </FloatingButton>
            <FloatingButton link={""}>
              <div
                onClick={handleTheme}
                className="w-[30px] h-[30px] flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <BiSolidSun className="fill-blue_soft w-[18px] h-[18px] group-hover:fill-blue_white" />
                ) : (
                  <BiSolidMoon className="fill-blue_soft w-[18px] h-[18px] group-hover:fill-blue_white" />
                )}
              </div>
            </FloatingButton>

            <FloatingButton
              link={
                lastVerse !== undefined &&
                lastVerse !== null &&
                lastVerse !== ""
                  ? "/surahs/" + author_id + "/" + lastVerse
                  : ""
              }
            >
              <div
                className="w-[30px] h-[30px] flex items-center justify-center"
                onClick={() => {
                  lastVerse !== undefined &&
                  lastVerse !== null &&
                  lastVerse !== ""
                    ? dispatch(setNavigatedFromPin(true))
                    : toast("Son okuduğunuz ayet bulunamadı.");
                }}
              >
                <BiSolidPin className="fill-blue_soft w-[18px] h-[18px] group-hover:fill-blue_white" />
              </div>
            </FloatingButton>

            <FloatingButton link={"/settings"}>
              <BiSolidCog className="fill-blue_soft w-[18px] h-[18px] group-hover:fill-blue_white" />
            </FloatingButton>

            <FloatingButton link={""}>
              <div
                onClick={scrollToTop}
                className="w-[30px] h-[30px] flex items-center justify-center"
              >
                <BiSolidUpvote className="fill-blue_soft w-[18px] h-[18px] group-hover:fill-blue_white" />
              </div>
            </FloatingButton>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContainer;
