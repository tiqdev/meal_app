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
    <nav className="w-full max-w-[1200px] h-[80px] flex flex-row items-center justify-between  md:py-[1.6vw] md:px-[6vw] p-[10px]  mx-auto relative">
      <ul>
        <li>
          <Link href="/">
            <AiFillHome className="w-[20px] h-[20px]" />
          </Link>
        </li>
      </ul>

      <Link
        href="/"
        className="w-[100px] h-[100px] absolute -top-[40px] left-1/2 -translate-x-1/2 "
      >
        <img src="/logo.svg" alt="logo" className="w-[100px] h-[100px]" />
      </Link>

      <ul className="flex flex-row items-center justify-center gap-[12px]">
        <li>
          <a onClick={handleTheme}>
            {theme === "dark" ? (
              <MdSunny className="w-[20px] h-[20px]" />
            ) : (
              <MdDarkMode className="w-[20px] h-[20px]" />
            )}
          </a>
        </li>
        <li>
          <Link
            href={"/surahs/" + author_id + "/" + lastVerse}
            onClick={() => {
              dispatch(setNavigatedFromPin(true));
            }}
          >
            <BiSolidPin className="w-[20px] h-[20px]" />
          </Link>
        </li>

        <li>
          <Link href="/settings">
            <IoMdSettings className="w-[20px] h-[20px]" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
