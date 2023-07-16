import { NextResponse } from "next/server";

export async function GET(request, context) {
  let surah_id = context.params.surahid;
  let verse_id = context.params.verseid;

  try {
    const res = await fetch(
      "https://api.acikkuran.com/surah/" +
        surah_id +
        "/verse/" +
        verse_id +
        "/translations",
      {
        headers: {
          "Content-Type": "application/json",
          "API-Key": process.env.DATA_API_KEY,
        },
      }
    );

    //surah
    let data = await res.json();
    data = data.data.filter((item) => item.author.language === "tr");

    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.error(e);
  }
}
