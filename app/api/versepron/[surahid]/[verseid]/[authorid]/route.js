import { NextResponse } from "next/server";

export async function GET(request, context) {
  let surah_id = context.params.surahid;
  let verse_id = context.params.verseid;
  let author_id = context.params.authorid;

  try {
    let url =
      "https://api.acikkuran.com/surah/" +
      surah_id +
      "/verse/" +
      verse_id +
      "?author=" +
      author_id;

    const res = await fetch(url);

    //surah
    let _data = await res.json();

    return NextResponse.json(_data.data);
  } catch (e) {
    return NextResponse.error(e);
  }
}
