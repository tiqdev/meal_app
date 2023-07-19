"use client";

import AnimatedContainer from "@/components/AnimatedContainer";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const [details, setDetails] = useState([]);
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
    }
  }, [selectedVerse]);

  return (
    <AnimatedContainer>
      <h1 className="title">
        {selectedVerse.surah_name + " " + selectedVerse.verse_id + ". Ayet"}
      </h1>
      <ul className=" mt-[20px]">
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
