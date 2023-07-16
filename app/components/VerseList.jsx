"use client";

import { copyToClipboard } from "@/app/utils/clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

import { BiCopyAlt, BiSolidPin } from "react-icons/bi";

import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  setLastVerse,
  setNavigatedFromPin,
  setOldVerses,
  setVerses,
} from "@/app/redux/slice/meal";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Highlighter from "react-highlight-words";

const VerseList = ({ surah = "Fatiha", surahId }) => {
  const [verses_data, setVersesData] = useState([]);
  const [highlightedWord, setHighlightedWord] = useState("");

  const theme = useSelector((state) => state.meal.theme);
  const verses = useSelector((state) => state.meal.verses);
  const lastVerse = useSelector((state) => state.meal.lastVerse);
  const navigatedFromPin = useSelector((state) => state.meal.navigatedFromPin);
  const author_id = useSelector((state) => state.meal.author_id);
  const [canRender, setCanRender] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //clear verses when changing surah
    setVersesData([]);
    setVersesData(verses);
  }, [surahId]);

  useEffect(() => {
    if (verses.length > 0) {
      setTimeout(() => {
        if (navigatedFromPin) {
          if (lastVerse) {
            let verse_id = lastVerse.split("#")[1];
            let surah_id = lastVerse.split("#")[0];

            if (surah_id !== surahId.toString()) {
              return;
            } else {
              const saved_verse = document.getElementById(verse_id);
              if (saved_verse) {
                saved_verse.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                });
              }
            }
          }
        }
        dispatch(setNavigatedFromPin(false));
      }, 300);
    }
  }, [verses, navigatedFromPin]);

  const searchHandle = (e) => {
    setHighlightedWord(e.target.value);

    if (e.target.value.length > 0) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }

    if (e.target.value.length > 1) {
      setVersesData(
        verses.filter((item) =>
          item.translation.text
            .replace('"', "'")
            .toLowerCase()
            .replace("i̇", "i")
            .includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setVersesData(verses);
    }
  };

  return (
    <>
      {surah !== "" && (
        <div className="flex flex-row justify-between items-center px-[10px] ">
          <div className="w-[24px] h-[24px] flex items-center justify-center ]">
            {surah !== "Fatiha" ? (
              <Link
                className=""
                href={"/surahs/" + author_id + "/" + (surahId - 1).toString()}
              >
                <p className="back_button">
                  <BsFillCaretLeftFill className="w-[24px] h-[24px]" />
                </p>
              </Link>
            ) : (
              <></>
            )}
          </div>

          <h1 className="title">{surah.replace("İ", "I")}</h1>

          <div className="w-[24px] h-[24px] flex items-center justify-center">
            {surah !== "Nas" ? (
              <Link
                className=""
                href={"/surahs/" + author_id + "/" + (surahId + 1).toString()}
              >
                <p className="back_button">
                  <BsFillCaretRightFill className="w-[24px] h-[24px]" />
                </p>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}

      <div className="w-full h-[50px] flex flex-row justify-center items-center border-solid border-b-[1px]  border-blue_soft_border dark:border-blue_white_border px-[12px] gap-[10px]">
        <div className="w-[24px]">
          <BiSearch className="w-[20px] h-[20px]" />
        </div>

        <input
          type="text"
          placeholder="Kelime ara..."
          className="input_bar"
          onChange={searchHandle}
        />
        {searchActive && (
          <div className="">
            {verses_data.length > 0 && (
              <span className="badge"> {verses_data.length} </span>
            )}
          </div>
        )}
        {searchActive && (
          <div className="w-[24px]">
            <AiOutlineClose
              className="w-[20px] h-[20px]"
              onClick={() => {
                document.querySelector("input").value = "";
                setHighlightedWord("");
                setVersesData(verses);
                setSearchActive(false);
              }}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col mt-[10px]">
        {verses_data.length > 0 ? (
          verses_data.map((verse) => {
            let verse_id = verse.verse_number;
            let surah_id = verse.surah_id;

            let isActive = lastVerse === surah_id + "#" + verse_id;

            return (
              <div
                className={isActive ? "verse_item highlight" : "verse_item"}
                key={verse.id}
                id={verse.verse_number}
              >
                <div className="w-full px-[10px] pt-[2px]">
                  <span className="flex flex-row leading-[1.4] ">
                    <Highlighter
                      highlightClassName="highlight"
                      caseSensitive={false}
                      searchWords={[highlightedWord]}
                      highlightStyle={{
                        backgroundColor: "#dda15e",
                        padding: 1,
                        color: "#283618",
                      }}
                      autoEscape={false}
                      textToHighlight={
                        verse.verse_number + "-" + verse.translation.text
                      }
                    />
                  </span>
                </div>

                <div className="flex flex-row items-end justify-end gap-[12px] p-[10px] ml-auto ">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    className="svg_container group"
                    onClick={() => {
                      dispatch(setLastVerse(""));
                      localStorage.removeItem("lastVerse");

                      localStorage.setItem(
                        "lastVerse",
                        surahId + "#" + verse.verse_number
                      );
                      dispatch(
                        setLastVerse(surahId + "#" + verse.verse_number)
                      );
                      toast("Son okuduğunuz ayet kaydedildi.");
                    }}
                  >
                    <BiSolidPin className="fill-blue_soft dark:fill-blue_white group-hover:fill-[#ffffff] dark:group-hover:fill-blue_soft" />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    className="svg_container group"
                    onClick={() => {
                      copyToClipboard(
                        surah +
                          " " +
                          verse.verse_number +
                          ". Ayet:  " +
                          verse.translation.text,
                        surah + " " + verse.verse_number + ". Ayet kopyalandı."
                      );
                    }}
                  >
                    <BiCopyAlt className=" fill-blue_soft dark:fill-blue_white group-hover:fill-[#ffffff] dark:group-hover:fill-blue_soft " />
                  </motion.div>
                </div>
              </div>
            );
          })
        ) : (
          <motion.div
            className="not_found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Aranan kelime bulunamadı.</h1>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default VerseList;
