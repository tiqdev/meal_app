"use client";
import Container from "@/app/components/Container";
import {
  setAuthorId,
  setSurahId,
  setSurahName,
  setTotalVerses,
  setVerses,
} from "@/app/redux/slice/meal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VerseList from "../../../components/VerseList";

const SurahPage = ({ params }) => {
  let surahId = params.id;
  let dispatch = useDispatch();

  const surah_id = useSelector((state) => state.meal.surah_id);
  const surah_name = useSelector((state) => state.meal.surah_name);
  const author_id = useSelector((state) => state.meal.author_id);

  useEffect(() => {
    let defaultAuthorId = 0;
    if (isNaN(author_id)) {
      defaultAuthorId = 6;
      dispatch(setAuthorId(defaultAuthorId));
      localStorage.setItem("author_id", defaultAuthorId);
    } else {
      defaultAuthorId = author_id;
    }

    fetch("/api/verses/" + defaultAuthorId + "/" + surahId)
      .then((res) => res.json())
      .then((data) => {
        let _data = data.data;
        dispatch(setSurahName(_data.name));
        dispatch(setVerses(_data.verses));
        dispatch(setSurahId(_data.id));
        dispatch(setTotalVerses(_data.verse_count));
      });
  }, [author_id]);

  return (
    <main>
      <Container>
        <VerseList surah={surah_name} surahId={surah_id} />
      </Container>
    </main>
  );
};

export default SurahPage;
