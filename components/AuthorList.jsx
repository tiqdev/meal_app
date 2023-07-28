"use client";

import { useDispatch, useSelector } from "react-redux";
import { setAuthorId, setAuthors } from "@/app/redux/slice/meal";
import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";

const AuthorList = ({ authors }) => {
  const dispatch = useDispatch();
  const author_id = useSelector((state) => state.meal.author_id);

  const handleCheckbox = (id) => {
    localStorage.setItem("author_id", id);
    dispatch(setAuthorId(parseInt(id)));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[10px]">
      {authors.length !== 0 &&
        authors.map((author, index) => (
          <div
            className="w-full flex flex-row justify-between items-center p-[10px] py-[20px] border-solid border-b-[1px] border-brown_soft_border dark:border-cream_white_border"
            key={index}
            onClick={() => handleCheckbox(author.id)}
          >
            <div
              key={author.id}
              className="w-full gap-[10px] flex justify-between items-center"
            >
              <label className="font-[500] text-[1.3rem]">{author.name}</label>

              {author_id === author.id ? (
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

export default AuthorList;
