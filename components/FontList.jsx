"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedFont } from "@/app/redux/slice/meal";
import { BiCheckboxSquare, BiCheckbox } from "react-icons/bi";
import AnimatedContainer from "@/components/AnimatedContainer";

const FontList = () => {
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
    <div className="flex flex-col items-center justify-center mt-[10px]">
      {fonts.map((font, index) => (
        <div
          className="w-full flex flex-row justify-between items-center p-[10px] py-[20px] border-solid border-b-[1px] border-brown_soft_border dark:border-cream_white_border"
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
  );
};

export default FontList;
