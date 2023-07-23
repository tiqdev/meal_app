import Link from "next/link";

const SettingsList = () => {
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
    </>
  );
};

export default SettingsList;
