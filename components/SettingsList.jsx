"use client";

import Link from "next/link";
import { exportFavList, getFavList } from "@/utils/localStorageManager";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SettingsList = () => {
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    setFavList(getFavList());
  }, []);

  return (
    <>
      <Link href={`/authors`} className="surah_item ">
        <p className="font-[500] text-[1.3rem]">Mealler</p>
      </Link>
      <Link href={`/fonts`} className="surah_item">
        <p className="font-[500] text-[1.3rem]">Yazı Tipleri</p>
      </Link>
      <Link href={`/about`} className="surah_item">
        <p className="font-[500] text-[1.3rem]">Uygulama Hakkında</p>
      </Link>
      {favList.length > 0 && (
        <div
          className="surah_item"
          onClick={() => {
            try {
              exportFavList();
            } catch (e) {
              toast("İndirme işlemi başarısız.");
            }
          }}
        >
          <p className="font-[500] text-[1.3rem]">Kayıtlı Ayetleri İndir</p>
        </div>
      )}
    </>
  );
};

export default SettingsList;
