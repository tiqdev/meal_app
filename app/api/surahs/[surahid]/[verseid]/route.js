import { NextResponse } from "next/server";

export async function GET(request, context) {
  let surah_id = context.params.surahid;
  let verse_id = context.params.verseid;

  let url = `https://api.acikkuran.com/surah/${surah_id}/verse/${verse_id}/words`;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.DATA_API_KEY,
      },
    });

    //surah
    let data = await res.json();
    data = data.data;

    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.error(e);
  }
}
