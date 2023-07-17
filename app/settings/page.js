"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SettingsPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 150, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40,
        }}
        className="flex flex-col mt-[10px]"
      >
        <h1 className="title  mb-[20px]">Ayarlar</h1>

        <Link href={`/authors`} className="surah_item ">
          <p className="font-[700] text-[1.3rem]">Çevirmenler</p>
        </Link>
        <Link href={`/fonts`} className="surah_item">
          <p className="font-[700] text-[1.3rem]">Yazı Tipleri</p>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingsPage;
