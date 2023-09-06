"use client";

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import _ from "lodash";
import { BiSolidBookmark, BiSolidCopy } from "react-icons/bi";
import { isFav, removeFav } from "@/utils/localStorageManager";
import { setBookMarkedVerses } from "@/app/redux/slice/meal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { copyToClipboard } from "@/utils/clipboard";

const BookmarksList = () => {
  const dispatch = useDispatch();
  const bookmarkedVerses = useSelector((state) => state.meal.bookmarkedVerses);

  return (
    <div className="flex flex-col items-center justify-center mt-[10px]">
      {bookmarkedVerses.length > 0 ? (
        //sort by surah_id and sory by verse_id
        _.sortBy(bookmarkedVerses, ["surah_id", "verse_id"]).map(
          (item, index) => (
            <div
              className="w-full flex flex-row justify-between items-end p-[10px] py-[20px] border-solid border-b-[1px] border-brown_soft_border dark:border-cream_white_border"
              key={index}
            >
              <div
                key={item.id}
                className="w-full gap-[10px] flex flex-col justify-center items-start"
              >
                <span className="font-[400] italic">{item.surah_name}</span>
                <span className="font-[500] leading-[1.4]">
                  {item.verse_id + " - " + item.verse}
                </span>
              </div>
              <div className="flex flex-row items-end justify-end gap-[12px] p-[10px] ml-auto ">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  className="svg_container group "
                  onClick={() => {
                    copyToClipboard(
                      item.surah_name +
                        " " +
                        item.verse_id +
                        ". Ayet:  " +
                        item.verse,
                      item.surah_name +
                        " " +
                        item.verse_id +
                        ". Ayet kopyalandı."
                    );
                  }}
                >
                  <BiSolidCopy
                    className={
                      "fill-brown_soft dark:fill-cream_white group-hover:fill-[#ffffff] dark:group-hover:fill-brown_soft"
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
                    let _bookmarkedVerses = [...bookmarkedVerses];

                    if (isFav(item)) {
                      _bookmarkedVerses = [...bookmarkedVerses];

                      _.remove(_bookmarkedVerses, function (n) {
                        return n.id === item.id;
                      });

                      removeFav(item);

                      dispatch(setBookMarkedVerses(_bookmarkedVerses));

                      toast("Ayet favorilerden kaldırıldı.");
                      return;
                    }
                  }}
                >
                  <BiSolidBookmark className="fill-brown_soft dark:fill-cream_white group-hover:fill-[#ffffff] dark:group-hover:fill-brown_soft" />
                </motion.div>
              </div>
            </div>
          )
        )
      ) : (
        <motion.div
          className="not_found"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Kaydedilmiş ayet bulunamadı.</h1>
        </motion.div>
      )}
    </div>
  );
};

export default BookmarksList;
