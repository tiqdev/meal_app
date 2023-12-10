"use client";

import AnimatedContainer from "@/components/AnimatedContainer";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional


const SettingsPage = () => {
  const [details, setDetails] = useState([]);
  const [pronunciations, setPronunciations] = useState("");

  const [selectedType, setSelectedType] = useState("arabic");

  const [words, setWords] = useState([]);
  const theme = useSelector((state) => state.meal.theme);
  const selectedVerse = useSelector((state) => state.meal.selectedVerse);

  useEffect(() => {
    if (selectedVerse !== null) {
      fetch(
        `/api/versedetail/${selectedVerse.surah_id}/${selectedVerse.verse_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setDetails(data.data);
        });

      fetch(
        `/api/versepron/${selectedVerse.surah_id}/${selectedVerse.verse_id}/6`
      )
        .then((res) => res.json())
        .then((data) => {
          setPronunciations(data.transcription);
        });

      fetch(`/api/surahs/${selectedVerse.surah_id}/${selectedVerse.verse_id}`)
        .then((res) => res.json())
        .then((data) => {
          setWords(data.data);
        });
    }
  }, [selectedVerse]);

  return (
    <AnimatedContainer>
      <div>
        <h1 className="title">
          {selectedVerse.surah_name + " " + selectedVerse.verse_id + ". Ayet"}
        </h1>
      </div>

      <div
        onClick={() => {
          if (selectedType === "arabic") {
            setSelectedType("latin");
          } else {
            setSelectedType("arabic");
          }
        }}
        className=" my-[10px] flex items-center rounded-[12px] bg-brown_soft_border  dark:bg-cream_white_border bg-opacity-20 p-[6px] cursor-pointer hover:bg-brown_soft dark:hover:bg-cream_bg  px-[12px] py-[4px] w-min ml-auto mr-[10px] "
      >
        <span className="text-[14px] font-[500] text-brown_soft dark:text-cream_white dark:hover:text-brown_soft hover:text-cream_white">
          {selectedType === "arabic" ? "Arap" : "Latin"}
        </span>
      </div>

      {selectedType === "arabic" && (
        <div className=" text-right arabic_text px-[10px] w-full max-w-[1200px] flex flex-row-reverse flex-wrap items-end justify-start gap-[16px]">
          {words.map((item, index) => (
            <span key={index}>

              <Tippy content={item.turkish}>
                <span
                  id={`tooltip_${index}`}
                  key={index}
                  className="hover:text-orange"
                >
                  {item.arabic}
                </span>
              </Tippy>

            </span>
          ))}
        </div>
      )}

      {selectedType === "latin" && (
        <div className=" text-left p-[10px] pt-[14px] mt-[20px] font-[500] text-[20px] leading-[1.4] w-full max-w-[1200px] flex-wrap items-end justify-start gap-[16px]">
          {pronunciations}
        </div>
      )}

      <hr className="my-[20px] border-solid border-b-[1px] border-brown_soft_border dark:border-cream_white_border" />

      <ul className="mt-[20px]">
        {details.map((item, index) => (
          <li
            key={index}
            className="verse_item w-full px-[10px] py-[10px] flex items-start justify-start "
          >
            <p className=" font-[500] leading-[1.4]">{item.text}</p>

            <h2 className="ml-auto font-[400] text-[14px] mt-[10px]">
              {item.author.name}
            </h2>
          </li>
        ))}
      </ul>
    </AnimatedContainer>
  );
};

export default SettingsPage;
