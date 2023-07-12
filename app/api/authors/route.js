import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.acikkuran.com/authors", {
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.DATA_API_KEY,
      },
    });

    //all authors
    const _data = await res.json();

    //turkish authors
    const data = _data.data.filter((author) => author.language === "tr");
    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.error(e);
  }
}
