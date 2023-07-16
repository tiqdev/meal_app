"use client";

import { useDispatch, useSelector } from "react-redux";
import { resetSurahInfo, setSurahName, setSurahs } from "../redux/slice/meal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const SurahList = () => {
  const dispatch = useDispatch();

  const surahs = useSelector((state) => state.meal.surahs);

  const author_id = useSelector((state) => state.meal.author_id);
  const lastVerse = useSelector((state) => state.meal.lastVerse);
  const [firstLoad, setFirstLoad] = useState(true);
  const [filteredSurahs, setFilteredSurahs] = useState(surahs);
  const [searchActive, setSearchActive] = useState(false);
  const [savedSurah, setSavedSurah] = useState(0);

  useEffect(() => {
    dispatch(setSurahName(""));
    fetch("/api/surahs")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setSurahs(data.data.data));
      });
  }, []);

  useEffect(() => {
    setFilteredSurahs(surahs);
  }, [surahs]);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    }

    if (lastVerse.includes("#")) {
      let surah_id = lastVerse.split("#")[0];

      setSavedSurah(parseInt(surah_id));
    }
  }, []);

  const searchHandle = (e) => {
    if (e.target.value.length > 0) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }

    if (e.target.value.length <= 3 && parseInt(e.target.value) > 0) {
      setFilteredSurahs(
        surahs.filter((surah) => surah.id.toString().includes(e.target.value))
      );

      return;
    }

    if (e.target.value.length > 2) {
      setFilteredSurahs(
        surahs.filter((surah) =>
          surah.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredSurahs(surahs);
    }
  };

  return (
    <div className="flex flex-col gap-[20px] mt-[10px]">
      <h1 className="title">Sureler</h1>

      <div className="w-full h-[50px] flex flex-row justify-center items-center border-solid border-b-[1px]  border-blue_soft_border dark:border-blue_white_border px-[12px] gap-[10px]">
        <div className="w-[24px]">
          <BiSearch className="w-[20px] h-[20px]" />
        </div>

        <input
          type="text"
          placeholder="Sure adı veya numarası.."
          className="input_bar"
          onChange={searchHandle}
        />

        {searchActive && (
          <div className="w-[24px]">
            <AiOutlineClose
              className="w-[20px] h-[20px]"
              onClick={() => {
                document.querySelector("input").value = "";
                setFilteredSurahs(surahs);
                setSearchActive(false);
              }}
            />
          </div>
        )}
      </div>

      <ul className="flex flex-col">
        {filteredSurahs.length > 0 ? (
          filteredSurahs.map((surah, index) => (
            <Link
              href={`/surahs/${author_id}/${surah.id}`}
              className="flex flex-row justify-between items-center p-[10px] border-solid border-b-[1px] border-blue_soft_border dark:border-blue_white_border"
              key={surah.id}
              onClick={() => {
                dispatch(resetSurahInfo());
              }}
            >
              <p className="font-[700] text-[1.3rem]">
                {surah.id} - {surah.name}
              </p>

              <span className="text-[12px]">{surah.verse_count} Ayet</span>
            </Link>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Aradığınız sure bulunamadı.</p>
          </motion.div>
        )}
      </ul>
    </div>
  );
};

export default SurahList;
