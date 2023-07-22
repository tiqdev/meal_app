"use client";

import { copyToClipboard } from "@/utils/clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

import { BiSolidCopy, BiSolidPin, BiSearchAlt2 } from "react-icons/bi";

import {
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  resetSurahInfo,
  setBookMarkedVerses,
  setLastVerse,
  setNavigatedFromPin,
  setSelectedVerse,
} from "@/app/redux/slice/meal";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Highlighter from "react-highlight-words";
import { FaInfo } from "react-icons/fa";
import {
  addFav,
  clearFavList,
  getFavCount,
  getFavList,
  isFav,
  removeFav,
} from "@/utils/localStorageManager";

const VerseList = ({ surah = "Fatiha", surahId }) => {
  const [verses_data, setVersesData] = useState([]);
  const [highlightedWord, setHighlightedWord] = useState("");

  const theme = useSelector((state) => state.meal.theme);
  const verses = useSelector((state) => state.meal.verses);
  const lastVerse = useSelector((state) => state.meal.lastVerse);
  const navigatedFromPin = useSelector((state) => state.meal.navigatedFromPin);
  const author_id = useSelector((state) => state.meal.author_id);
  const bookmarkedVerses = useSelector((state) => state.meal.bookmarkedVerses);

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

    if (e.target.value.length >= 1) {
      3;
      setVersesData(
        verses.filter((item) =>
          (item.verse_number + "-" + item.translation.text)
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
                <p
                  className="back_button"
                  onClick={() => {
                    dispatch(resetSurahInfo());
                  }}
                >
                  <BsFillCaretLeftFill className="w-[24px] h-[24px]" />
                </p>
              </Link>
            ) : (
              <></>
            )}
          </div>

          <h1 className="title">{surah}</h1>

          <div className="w-[24px] h-[24px] flex items-center justify-center">
            {surah !== "Nas" ? (
              <Link
                className=""
                href={"/surahs/" + author_id + "/" + (surahId + 1).toString()}
              >
                <p
                  className="back_button"
                  onClick={() => {
                    dispatch(resetSurahInfo());
                  }}
                >
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
          <BiSearchAlt2 className="w-[20px] h-[20px]" />
        </div>

        <input
          type="text"
          placeholder="Kelime yada ayet numarası..."
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
        {verses_data.length > 0 && bookmarkedVerses !== null ? (
          verses_data.map((verse, index) => {
            let verse_id = verse.verse_number;
            let surah_id = verse.surah_id;

            let isActive = lastVerse === surah_id + "#" + verse_id;

            let isBookmarked = bookmarkedVerses.some(
              (item) => item.id === surah_id + "#" + verse_id
            );

            let _verse = {
              id: surah_id + "#" + verse_id,
              surah_id: surah_id,
              verse_id: verse_id,
              verse: verse.translation.text,
            };

            return (
              <div
                key={index}
                className={
                  isActive
                    ? "verse_item bg-blue_soft text-blue_white dark:bg-blue_white dark:text-blue_soft"
                    : "verse_item"
                }
                id={verse.verse_number}
              >
                <div className="w-full px-[10px] pt-[2px]">
                  <span className="flex flex-row leading-[1.4] ">
                    <Highlighter
                      highlightClassName="highlight"
                      caseSensitive={false}
                      searchWords={[highlightedWord]}
                      highlightStyle={
                        theme === "dark"
                          ? {
                              backgroundColor: "#ecfdf5",
                              padding: 1,
                              color: "#008080",
                            }
                          : {
                              backgroundColor: "#008080",
                              padding: 1,
                              color: "#ecfdf5",
                            }
                      }
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
                    <BiSolidPin
                      className={
                        isActive
                          ? "fill-blue_white dark:fill-blue_soft group-hover:fill-blue_soft dark:group-hover:fill-[#ffffff]"
                          : "fill-blue_soft dark:fill-blue_white group-hover:fill-[#ffffff] dark:group-hover:fill-blue_soft"
                      }
                    />
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
                    <BiSolidCopy
                      className={
                        isActive
                          ? "fill-blue_white dark:fill-blue_soft group-hover:fill-blue_soft dark:group-hover:fill-[#ffffff]"
                          : "fill-blue_soft dark:fill-blue_white group-hover:fill-[#ffffff] dark:group-hover:fill-blue_soft"
                      }
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    className="svg_container group"
                  >
                    <Link
                      href="/versedetail"
                      key={verse.id}
                      onClick={() => {
                        dispatch(
                          setSelectedVerse({
                            surah_name: surah !== null ? surah : "",
                            verse_id: verse.verse_number,
                            surah_id: verse.surah_id,
                          })
                        );
                      }}
                    >
                      <BiSearchAlt2
                        className={
                          isActive
                            ? "fill-blue_white dark:fill-blue_soft group-hover:fill-blue_soft dark:group-hover:fill-[#ffffff]"
                            : "fill-blue_soft dark:fill-blue_white group-hover:fill-[#ffffff] dark:group-hover:fill-blue_soft"
                        }
                      />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                    className="svg_container group"
                    onClick={() => {
                      let _bookmarkedVerses = [...bookmarkedVerses];

                      if (isFav(_verse)) {
                        removeFav(_verse);
                        _bookmarkedVerses = [...bookmarkedVerses];
                        _bookmarkedVerses.splice(
                          _bookmarkedVerses.indexOf(_verse),
                          1
                        );

                        dispatch(setBookMarkedVerses(_bookmarkedVerses));

                        toast("Ayet favorilerden kaldırıldı.");
                        return;
                      }

                      addFav(_verse);
                      _bookmarkedVerses.push(_verse);
                      dispatch(setBookMarkedVerses(_bookmarkedVerses));
                      toast("Ayet kaydedildi.");
                    }}
                  >
                    {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
                  </motion.div>
                </div>
              </div>
            );
          })
        ) : searchActive ? (
          <motion.div
            className="not_found"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Aranan kelime bulunamadı.</h1>
          </motion.div>
        ) : (
          <div
            role="status"
            className="w-full flex items-center justify-center py-[40px]"
          >
            <svg
              aria-hidden="true"
              className="inline w-12 h-12 mr-2 text-blue_soft_border animate-spin dark:text-blue_white_border fill-blue_soft dark:fill-blue_white"
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
      </div>
    </>
  );
};

export default VerseList;
