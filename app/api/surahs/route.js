import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.acikkuran.com/surahs", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });

  //all surahs
  const data = await res.json();

  return NextResponse.json({ data });
}
