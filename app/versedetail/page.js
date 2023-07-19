"use client";

import AnimatedContainer from "@/components/AnimatedContainer";
import "react-tooltip/dist/react-tooltip.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Tooltip as ReactTooltip } from "react-tooltip";

const SettingsPage = () => {
  const [details, setDetails] = useState([]);
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

      fetch(`/api/surahs/${selectedVerse.surah_id}/${selectedVerse.verse_id}`)
        .then((res) => res.json())
        .then((data) => {
          setWords(data.data);
        });
    }
  }, [selectedVerse]);

  return (
    <AnimatedContainer>
      <h1 className="title">
        {selectedVerse.surah_name + " " + selectedVerse.verse_id + ". Ayet"}
      </h1>

      <div className=" text-right arabic_text px-[10px] w-full max-w-[1200px] flex flex-row-reverse flex-wrap items-end justify-start gap-[16px]">
        {words.map((item, index) => (
          <span key={index}>
            <span
              id={`tooltip_${index}`}
              key={index}
              className="hover:text-orange"
            >
              {item.arabic}
            </span>
            <ReactTooltip
              anchorId={`tooltip_${index}`}
              place="bottom"
              offset={0}
              content={item.turkish}
              style={{
                backgroundColor: theme === "dark" ? "#ecfdf5" : "#008080",
                color: theme === "dark" ? "#008080" : "#ecfdf5",
                fontSize: "16px",
                fontWeight: "700",
                borderRadius: "12px",
              }}
            />
          </span>
        ))}
      </div>

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
