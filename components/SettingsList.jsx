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
    </>
  );
};

export default SettingsList;
