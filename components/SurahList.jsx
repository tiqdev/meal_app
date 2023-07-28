"use client";

import { useDispatch, useSelector } from "react-redux";
import { resetSurahInfo, setSurahName } from "../app/redux/slice/meal";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import AnimatedContainer from "./AnimatedContainer";

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
    setFilteredSurahs(surahs);
  }, [surahs]);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    }

    if (lastVerse !== "" && lastVerse !== null) {
      if (lastVerse.includes("#")) {
        let surah_id = lastVerse.split("#")[0];

        setSavedSurah(parseInt(surah_id));
      }
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
    <AnimatedContainer>
      <div className="flex flex-col gap-[20px] mt-[10px]">
        <h1 className="title">Sureler</h1>

        <div className="w-full h-[50px] flex flex-row justify-center items-center border-solid border-b-[1px]  border-brown_soft_border dark:border-cream_white_border px-[12px] gap-[10px]">
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
              <li key={surah.id}>
                <Link
                  href={`/surahs/${author_id}/${surah.id}`}
                  className={
                    "surah_item " +
                    (savedSurah == surah.id
                      ? "bg-brown_soft text-cream_white dark:bg-cream_bg dark:text-brown_soft "
                      : "")
                  }
                  onClick={() => {
                    dispatch(resetSurahInfo());
                  }}
                >
                  <p className="font-[500] text-[1.3rem]">
                    {surah.id} - {surah.name}
                  </p>

                  <span className="text-[12px]">{surah.verse_count} Ayet</span>
                </Link>
              </li>
            ))
          ) : searchActive ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="not_found"
            >
              <p>Aradığınız sure bulunamadı.</p>
            </motion.div>
          ) : (
            <div
              role="status"
              className="w-full flex items-center justify-center py-[40px]"
            >
              <svg
                aria-hidden="true"
                className="inline w-12 h-12 mr-2 text-brown_soft_border animate-spin dark:text-cream_white_border fill-brown_soft dark:fill-cream_white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </ul>
      </div>
    </AnimatedContainer>
  );
};

export default SurahList;
