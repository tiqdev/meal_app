"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MdDarkMode, MdSunny } from "react-icons/md";
import { BiSolidPin } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

import {
  setAuthorId,
  setLastVerse,
  setNavigatedFromPin,
  setTheme,
} from "../redux/slice/meal";

import { updateThemeColor } from "../utils/changeThemeColor";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.meal.theme);
  const author_id = useSelector((state) => state.meal.author_id);
  const lastVerse = useSelector((state) => state.meal.lastVerse);

  const handleTheme = () => {
    document.querySelector("body").classList.toggle("dark");
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      dispatch(setTheme("light"));
    } else {
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("body").classList.add("dark");
      dispatch(setTheme("dark"));
      updateThemeColor("#283618");
    } else {
      document.querySelector("body").classList.remove("dark");
      dispatch(setTheme("light"));
      updateThemeColor("#fefae0");
    }

    if (localStorage.getItem("lastVerse") !== "") {
      dispatch(setLastVerse(localStorage.getItem("lastVerse")));
    }

    if (localStorage.getItem("author_id") !== "") {
      dispatch(setAuthorId(parseInt(localStorage.getItem("author_id"))));
    } else {
      dispatch(setAuthorId(6));
    }
  }, []);

  return (
    <nav className="w-full max-w-[1200px] flex flex-row items-center justify-between p-[10px]">
      <ul>
        <li>
          <Link href="/">
            <AiFillHome />
          </Link>
        </li>
      </ul>

      <Link href="/" className="w-[120px] h-[120px] bg-red-400"></Link>

      <ul className="flex flex-row items-center justify-center gap-4">
        <li>
          <a onClick={handleTheme}>
            {theme === "dark" ? <MdSunny /> : <MdDarkMode />}
          </a>
        </li>
        <li>
          <Link
            href={"/surahs/" + author_id + "/" + lastVerse}
            onClick={() => {
              dispatch(setNavigatedFromPin(true));
            }}
          >
            <BiSolidPin />
          </Link>
        </li>

        <li>
          <Link href="/settings">
            <IoMdSettings />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
