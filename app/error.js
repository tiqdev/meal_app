"use client";

import AnimatedContainer from "@/components/AnimatedContainer";
import Link from "next/link";

const Error = () => {
  return (
    <AnimatedContainer>
      <h1 className="title">Bir Hata Oluştu</h1>

      <div className="flex flex-col items-center gap-[20px] mt-[10px]">
        <h2 className="font-[500] text-[20px] leading-[1.4] px-[10px] text-center">
          Bir sorun çıkmış olmalı geri dön ve tekrar dene.
        </h2>
        <Link className="underline" href={"/"}>
          Geri Dön
        </Link>
      </div>
    </AnimatedContainer>
  );
};

export default Error;
