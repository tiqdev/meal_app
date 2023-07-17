"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorId, setAuthors } from "@/app/redux/slice/meal";
import {
  BiCheckbox,
  BiCheckboxSquare,
  BiRadioCircle,
  BiRadioCircleMarked,
} from "react-icons/bi";

const AuthorsPage = () => {
  const dispatch = useDispatch();

  const author_id = useSelector((state) => state.meal.author_id);
  const authors = useSelector((state) => state.meal.authors);

  useEffect(() => {
    fetch("/api/authors")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAuthors(data.data));
      });
  }, []);

  const handleCheckbox = (id) => {
    localStorage.setItem("author_id", id);
    dispatch(setAuthorId(parseInt(id)));
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
        <h1 className="title">Çevirmenler</h1>
        <div className="flex flex-col items-center justify-center mt-[10px]">
          {authors.map((author, index) => (
            <div
              className="w-full flex flex-row justify-between items-center p-[10px] py-[20px] border-solid border-b-[1px] border-blue_soft_border dark:border-blue_white_border"
              key={index}
              onClick={() => handleCheckbox(author.id)}
            >
              <div
                key={author.id}
                className="w-full gap-[10px] flex justify-between items-center"
              >
                <label className="font-[500] text-[1.3rem]">
                  {author.name}
                </label>

                {author_id === author.id ? (
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

export default AuthorsPage;
