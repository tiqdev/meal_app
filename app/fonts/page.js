"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFont } from "@/app/redux/slice/meal";
import { BiCheckboxSquare, BiCheckbox } from "react-icons/bi";

const FontsPage = () => {
  const fonts = useSelector((state) => state.meal.fonts);
  const selectedFont = useSelector((state) => state.meal.selectedFont);
  const dispatch = useDispatch();

  const handleCheckbox = (id) => {
    let font = fonts.find((font) => font.id === id);

    localStorage.setItem("font", font.name);
    dispatch(setSelectedFont(font));

    if (font.name === "Satoshi") {
      document.querySelector("body").style.fontFamily = "Satoshi, sans-serif";
    } else {
      document.querySelector("body").style.fontFamily = "Lora, serif";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 150, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40,
        }}
        className="flex flex-col gap-[20px] mt-[10px]"
      >
        <h1 className="title">Yazı Tipleri</h1>
        <div className="flex flex-col items-center justify-center mt-[10px]">
          {fonts.map((font, index) => (
            <div
              className="w-full flex flex-row justify-between items-center p-[10px] py-[20px] border-solid border-b-[1px] border-blue_soft_border dark:border-blue_white_border"
              key={index}
              onClick={() => handleCheckbox(font.id)}
            >
              <div
                key={font.id}
                className="w-full gap-[10px] flex justify-between items-center"
              >
                <label
                  className={`font-[500] text-[1.3rem] leading-[1.4] ${font.tailwind_class}`}
                >
                  Rabbin seni bırakmadı ve sana darılmadı.
                </label>

                {selectedFont.id === font.id ? (
                  <BiCheckboxSquare className="w-[32px] h-[32px]" />
                ) : (
                  <BiCheckbox className="w-[32px] h-[32px]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FontsPage;
