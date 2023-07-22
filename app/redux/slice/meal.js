import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: "meal",
  initialState: {
    theme: "light",
    surahs: [
      {
        id: 1,
        name: "Fatiha",
        slug: "fatiha",
        verse_count: 7,
        pageNumber: 0,
        name_original: "سُورَةُ ٱلْفَاتِحَةِ",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/05-fatiha.mp3",
          duration: 38,
        },
      },
      {
        id: 2,
        name: "Bakara",
        slug: "bakara",
        verse_count: 286,
        pageNumber: 1,
        name_original: "سورة البقرة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/87-bakara.mp3",
          duration: 5982,
        },
      },
      {
        id: 3,
        name: "Ali İmran",
        slug: "ali-imran",
        verse_count: 200,
        pageNumber: 49,
        name_original: "سورة آل عمران",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/89-aliimran.mp3",
          duration: 3528,
        },
      },
      {
        id: 4,
        name: "Nisa",
        slug: "nisa",
        verse_count: 176,
        pageNumber: 76,
        name_original: "سورة النساء",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/92-nisa.mp3",
          duration: 3692,
        },
      },
      {
        id: 5,
        name: "Maide",
        slug: "maide",
        verse_count: 120,
        pageNumber: 105,
        name_original: "سورة المائدة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s112-maide.mp3",
          duration: 2777,
        },
      },
      {
        id: 6,
        name: "Enam",
        slug: "enam",
        verse_count: 165,
        pageNumber: 127,
        name_original: "سورة الأنعام",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/55-enam.mp3",
          duration: 2995,
        },
      },
      {
        id: 7,
        name: "Araf",
        slug: "araf",
        verse_count: 206,
        pageNumber: 150,
        name_original: "سورة الأعراف",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/39-araf.mp3",
          duration: 3214,
        },
      },
      {
        id: 8,
        name: "Enfal",
        slug: "enfal",
        verse_count: 75,
        pageNumber: 176,
        name_original: "سورة الأنفال",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/88-enfal.mp3",
          duration: 1194,
        },
      },
      {
        id: 9,
        name: "Tevbe",
        slug: "tevbe",
        verse_count: 129,
        pageNumber: 186,
        name_original: "سورة التوبة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s113-tevbe.mp3",
          duration: 2451,
        },
      },
      {
        id: 10,
        name: "Yunus",
        slug: "yunus",
        verse_count: 109,
        pageNumber: 207,
        name_original: "سورة يونس",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/51-yunus.mp3",
          duration: 1765,
        },
      },
      {
        id: 11,
        name: "Hud",
        slug: "hud",
        verse_count: 123,
        pageNumber: 220,
        name_original: "سورة هود",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/52-hud.mp3",
          duration: 1960,
        },
      },
      {
        id: 12,
        name: "Yusuf",
        slug: "yusuf",
        verse_count: 111,
        pageNumber: 234,
        name_original: "سورة يوسف",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/53-yusuf.mp3",
          duration: 1801,
        },
      },
      {
        id: 13,
        name: "Rad",
        slug: "rad",
        verse_count: 43,
        pageNumber: 248,
        name_original: "سورة الرعد",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/96-rad.mp3",
          duration: 858,
        },
      },
      {
        id: 14,
        name: "İbrahim",
        slug: "ibrahim",
        verse_count: 52,
        pageNumber: 254,
        name_original: "سورة ابراهيم",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/72-ibrahim.mp3",
          duration: 797,
        },
      },
      {
        id: 15,
        name: "Hicr",
        slug: "hicr",
        verse_count: 99,
        pageNumber: 261,
        name_original: "سورة الحجر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/54-hicr.mp3",
          duration: 699,
        },
      },
      {
        id: 16,
        name: "Nahl",
        slug: "nahl",
        verse_count: 128,
        pageNumber: 266,
        name_original: "سورة النحل",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/70-nahl.mp3",
          duration: 1690,
        },
      },
      {
        id: 17,
        name: "İsra",
        slug: "isra",
        verse_count: 111,
        pageNumber: 281,
        name_original: "سورة الإسراء",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/50-isra.mp3",
          duration: 1423,
        },
      },
      {
        id: 18,
        name: "Kehf",
        slug: "kehf",
        verse_count: 110,
        pageNumber: 292,
        name_original: "سورة الكهف",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/69-kehf.mp3",
          duration: 1473,
        },
      },
      {
        id: 19,
        name: "Meryem",
        slug: "meryem",
        verse_count: 98,
        pageNumber: 304,
        name_original: "سورة مريم",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/44-meryem.mp3",
          duration: 952,
        },
      },
      {
        id: 20,
        name: "Taha",
        slug: "taha",
        verse_count: 135,
        pageNumber: 311,
        name_original: "سورة طه",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/45-taha.mp3",
          duration: 1295,
        },
      },
      {
        id: 21,
        name: "Enbiya",
        slug: "enbiya",
        verse_count: 112,
        pageNumber: 321,
        name_original: "سورة الأنبياء",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/73-enbiya.mp3",
          duration: 1145,
        },
      },
      {
        id: 22,
        name: "Hac",
        slug: "hacc",
        verse_count: 78,
        pageNumber: 331,
        name_original: "سورة الحج",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s103-hac.mp3",
          duration: 1133,
        },
      },
      {
        id: 23,
        name: "Müminun",
        slug: "muminun",
        verse_count: 118,
        pageNumber: 341,
        name_original: "سورة المؤمنون",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/74-muminun.mp3",
          duration: 978,
        },
      },
      {
        id: 24,
        name: "Nur",
        slug: "nur",
        verse_count: 64,
        pageNumber: 349,
        name_original: "سورة النور",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s102-nur.mp3",
          duration: 1180,
        },
      },
      {
        id: 25,
        name: "Furkan",
        slug: "furkan",
        verse_count: 77,
        pageNumber: 358,
        name_original: "سورة الفرقان",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/42-furkan.mp3",
          duration: 828,
        },
      },
      {
        id: 26,
        name: "Şuara",
        slug: "suara",
        verse_count: 227,
        pageNumber: 366,
        name_original: "سورة الشعراء",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/47-suara.mp3",
          duration: 1281,
        },
      },
      {
        id: 27,
        name: "Neml",
        slug: "neml",
        verse_count: 93,
        pageNumber: 376,
        name_original: "سورة النمل",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/48-neml.mp3",
          duration: 1069,
        },
      },
      {
        id: 28,
        name: "Kasas",
        slug: "kasas",
        verse_count: 88,
        pageNumber: 384,
        name_original: "سورة القصص",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/49-kasas.mp3",
          duration: 1237,
        },
      },
      {
        id: 29,
        name: "Ankebut",
        slug: "ankebut",
        verse_count: 69,
        pageNumber: 395,
        name_original: "سورة العنكبوت",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/85-ankebut.mp3",
          duration: 924,
        },
      },
      {
        id: 30,
        name: "Rum",
        slug: "rum",
        verse_count: 60,
        pageNumber: 403,
        name_original: "سورة الروم",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/84-rum.mp3",
          duration: 748,
        },
      },
      {
        id: 31,
        name: "Lokman",
        slug: "lokman",
        verse_count: 34,
        pageNumber: 410,
        name_original: "سورة لقمان",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/57-lokman.mp3",
          duration: 532,
        },
      },
      {
        id: 32,
        name: "Secde",
        slug: "secde",
        verse_count: 30,
        pageNumber: 414,
        name_original: "سورة السجدة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/75-secde.mp3",
          duration: 352,
        },
      },
      {
        id: 33,
        name: "Ahzab",
        slug: "ahzab",
        verse_count: 73,
        pageNumber: 417,
        name_original: "سورة الأحزاب",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/90-ahzab.mp3",
          duration: 1183,
        },
      },
      {
        id: 34,
        name: "Sebe",
        slug: "sebe",
        verse_count: 54,
        pageNumber: 427,
        name_original: "سورة سَبَأ",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/58-sebe.mp3",
          duration: 817,
        },
      },
      {
        id: 35,
        name: "Fatır",
        slug: "fatir",
        verse_count: 45,
        pageNumber: 433,
        name_original: "سورة فاطر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/43-fatir.mp3",
          duration: 723,
        },
      },
      {
        id: 36,
        name: "Yasin",
        slug: "yasin",
        verse_count: 83,
        pageNumber: 439,
        name_original: "سورة يس",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/41-yasin.mp3",
          duration: 717,
        },
      },
      {
        id: 37,
        name: "Saffat",
        slug: "saffat",
        verse_count: 182,
        pageNumber: 445,
        name_original: "سورة الصافات",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/56-saffat.mp3",
          duration: 921,
        },
      },
      {
        id: 38,
        name: "Sad",
        slug: "sad",
        verse_count: 88,
        pageNumber: 452,
        name_original: "سورة ص",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/38-sad.mp3",
          duration: 770,
        },
      },
      {
        id: 39,
        name: "Zümer",
        slug: "zumer",
        verse_count: 75,
        pageNumber: 457,
        name_original: "سورة الزمر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/59-zumer.mp3",
          duration: 1084,
        },
      },
      {
        id: 40,
        name: "Mümin",
        slug: "mumin",
        verse_count: 85,
        pageNumber: 466,
        name_original: "سورة غافر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/60-mumin.mp3",
          duration: 1139,
        },
      },
      {
        id: 41,
        name: "Fussilet",
        slug: "fussilet",
        verse_count: 54,
        pageNumber: 476,
        name_original: "سورة فصلت",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/61-fussilet.mp3",
          duration: 760,
        },
      },
      {
        id: 42,
        name: "Şura",
        slug: "sura",
        verse_count: 53,
        pageNumber: 482,
        name_original: "سورة الشورى",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/62-sura.mp3",
          duration: 786,
        },
      },
      {
        id: 43,
        name: "Zuhruf",
        slug: "zuhruf",
        verse_count: 89,
        pageNumber: 488,
        name_original: "سورة الزخرف",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/63-zuhruf.mp3",
          duration: 834,
        },
      },
      {
        id: 44,
        name: "Duhan",
        slug: "duhan",
        verse_count: 59,
        pageNumber: 495,
        name_original: "سورة الدخان",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/64-duhan.mp3",
          duration: 347,
        },
      },
      {
        id: 45,
        name: "Casiye",
        slug: "casiye",
        verse_count: 37,
        pageNumber: 498,
        name_original: "سورة الجاثية",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/65-casiye.mp3",
          duration: 455,
        },
      },
      {
        id: 46,
        name: "Ahkaf",
        slug: "ahkaf",
        verse_count: 35,
        pageNumber: 501,
        name_original: "سورة الأحقاف",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/66-ahkaf.mp3",
          duration: 577,
        },
      },
      {
        id: 47,
        name: "Muhammed",
        slug: "muhammed",
        verse_count: 38,
        pageNumber: 506,
        name_original: "سورة محمد",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/95-muhammed.mp3",
          duration: 533,
        },
      },
      {
        id: 48,
        name: "Fetih",
        slug: "fetih",
        verse_count: 29,
        pageNumber: 510,
        name_original: "سورة الفتح",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s111-fetih.mp3",
          duration: 526,
        },
      },
      {
        id: 49,
        name: "Hucurat",
        slug: "hucurat",
        verse_count: 18,
        pageNumber: 514,
        name_original: "سورة الحجرات",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s106-hucurat.mp3",
          duration: 331,
        },
      },
      {
        id: 50,
        name: "Kaf",
        slug: "kaf",
        verse_count: 45,
        pageNumber: 517,
        name_original: "سورة ق",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/34-kaf.mp3",
          duration: 376,
        },
      },
      {
        id: 51,
        name: "Zariyat",
        slug: "zariyat",
        verse_count: 60,
        pageNumber: 519,
        name_original: "سورة الذاريات",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/67-zariyat.mp3",
          duration: 379,
        },
      },
      {
        id: 52,
        name: "Tur",
        slug: "tur",
        verse_count: 49,
        pageNumber: 522,
        name_original: "سورة الطور",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/76-tur.mp3",
          duration: 303,
        },
      },
      {
        id: 53,
        name: "Necm",
        slug: "necm",
        verse_count: 62,
        pageNumber: 525,
        name_original: "سورة النجم",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/23-necm.mp3",
          duration: 327,
        },
      },
      {
        id: 54,
        name: "Kamer",
        slug: "kamer",
        verse_count: 55,
        pageNumber: 527,
        name_original: "سورة القمر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/37-kamer.mp3",
          duration: 411,
        },
      },
      {
        id: 55,
        name: "Rahman",
        slug: "rahman",
        verse_count: 78,
        pageNumber: 530,
        name_original: "سورة الرحمن",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/97-rahman.mp3",
          duration: 402,
        },
      },
      {
        id: 56,
        name: "Vakıa",
        slug: "vakia",
        verse_count: 96,
        pageNumber: 533,
        name_original: "سورة الواقعة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/46-vakia.mp3",
          duration: 397,
        },
      },
      {
        id: 57,
        name: "Hadid",
        slug: "hadid",
        verse_count: 29,
        pageNumber: 536,
        name_original: "سورة الحديد",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/94-hadid.mp3",
          duration: 554,
        },
      },
      {
        id: 58,
        name: "Mücadele",
        slug: "mucadele",
        verse_count: 22,
        pageNumber: 541,
        name_original: "سورة المجادلة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s105-mucadele.mp3",
          duration: 449,
        },
      },
      {
        id: 59,
        name: "Haşr",
        slug: "hasr",
        verse_count: 24,
        pageNumber: 544,
        name_original: "سورة الحشر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s101-hasr.mp3",
          duration: 441,
        },
      },
      {
        id: 60,
        name: "Mümtehine",
        slug: "mumtehine",
        verse_count: 13,
        pageNumber: 548,
        name_original: "سورة الممتحنة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/91-mumtehine.mp3",
          duration: 342,
        },
      },
      {
        id: 61,
        name: "Saff",
        slug: "saff",
        verse_count: 14,
        pageNumber: 550,
        name_original: "سورة الصف",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s109-saf.mp3",
          duration: 199,
        },
      },
      {
        id: 62,
        name: "Cuma",
        slug: "cuma",
        verse_count: 11,
        pageNumber: 552,
        name_original: "سورة الجمعة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s110.cuma.mp3",
          duration: 161,
        },
      },
      {
        id: 63,
        name: "Münafikun",
        slug: "munafikun",
        verse_count: 11,
        pageNumber: 553,
        name_original: "سورة المنافقون",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s104-munafikun.mp3",
          duration: 181,
        },
      },
      {
        id: 64,
        name: "Tegabun",
        slug: "tegabun",
        verse_count: 18,
        pageNumber: 555,
        name_original: "سورة التغابن",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s108-tegabun.mp3",
          duration: 273,
        },
      },
      {
        id: 65,
        name: "Talak",
        slug: "talak",
        verse_count: 12,
        pageNumber: 557,
        name_original: "سورة الطلاق",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/99-talak.mp3",
          duration: 258,
        },
      },
      {
        id: 66,
        name: "Tahrim",
        slug: "tahrim",
        verse_count: 12,
        pageNumber: 559,
        name_original: "سورة التحريم",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s107-tahrim.mp3",
          duration: 252,
        },
      },
      {
        id: 67,
        name: "Mülk",
        slug: "mulk",
        verse_count: 30,
        pageNumber: 561,
        name_original: "سورة الملك",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/77-mulk.mp3",
          duration: 331,
        },
      },
      {
        id: 68,
        name: "Kalem",
        slug: "kalem",
        verse_count: 52,
        pageNumber: 563,
        name_original: "سورة القلم",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/02-kalem.mp3",
          duration: 320,
        },
      },
      {
        id: 69,
        name: "Hâkka",
        slug: "hakka",
        verse_count: 52,
        pageNumber: 565,
        name_original: "سورة الحاقة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/78-hakka.mp3",
          duration: 263,
        },
      },
      {
        id: 70,
        name: "Mearic",
        slug: "mearic",
        verse_count: 44,
        pageNumber: 567,
        name_original: "سورة المعارج",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/79-mearic.mp3",
          duration: 221,
        },
      },
      {
        id: 71,
        name: "Nuh",
        slug: "nuh",
        verse_count: 28,
        pageNumber: 569,
        name_original: "سورة نوح",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/71-nuh.mp3",
          duration: 221,
        },
      },
      {
        id: 72,
        name: "Cin",
        slug: "cinn",
        verse_count: 28,
        pageNumber: 571,
        name_original: "سورة الجن",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/40-cin.mp3",
          duration: 273,
        },
      },
      {
        id: 73,
        name: "Müzzemmil",
        slug: "muzzemmil",
        verse_count: 20,
        pageNumber: 573,
        name_original: "سورة المزمل",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/03-muzzemmil.mp3",
          duration: 200,
        },
      },
      {
        id: 74,
        name: "Müddessir",
        slug: "muddessir",
        verse_count: 56,
        pageNumber: 574,
        name_original: "سورة المدثر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/04-muddessir.mp3",
          duration: 252,
        },
      },
      {
        id: 75,
        name: "Kıyame",
        slug: "kiyame",
        verse_count: 40,
        pageNumber: 576,
        name_original: "سورة القيامة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/31-kiyamet.mp3",
          duration: 176,
        },
      },
      {
        id: 76,
        name: "İnsan",
        slug: "insan-dehr",
        verse_count: 31,
        pageNumber: 577,
        name_original: "سورة الانسان",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/98-insan.mp3",
          duration: 247,
        },
      },
      {
        id: 77,
        name: "Mürselat",
        slug: "murselat",
        verse_count: 50,
        pageNumber: 579,
        name_original: "سورة المرسلات",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/33-murselat.mp3",
          duration: 216,
        },
      },
      {
        id: 78,
        name: "Nebe",
        slug: "nebe",
        verse_count: 40,
        pageNumber: 581,
        name_original: "سورة النبأ",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/80-nebe.mp3",
          duration: 185,
        },
      },
      {
        id: 79,
        name: "Naziat",
        slug: "naziat",
        verse_count: 46,
        pageNumber: 582,
        name_original: "سورة النازعات",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/81-naziat.mp3",
          duration: 205,
        },
      },
      {
        id: 80,
        name: "Abese",
        slug: "abese",
        verse_count: 42,
        pageNumber: 584,
        name_original: "سورة عبس",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/24-abese.mp3",
          duration: 146,
        },
      },
      {
        id: 81,
        name: "Tekvir",
        slug: "tekvir",
        verse_count: 29,
        pageNumber: 585,
        name_original: "سورة التكوير",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/07-tekvir.mp3",
          duration: 108,
        },
      },
      {
        id: 82,
        name: "İnfitar",
        slug: "infitar",
        verse_count: 19,
        pageNumber: 586,
        name_original: "سورة الإنفطار",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/82-infitar.mp3",
          duration: 80,
        },
      },
      {
        id: 83,
        name: "Mutaffifin",
        slug: "mutaffifin",
        verse_count: 36,
        pageNumber: 587,
        name_original: "سورة المطففين",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/86-mutaffifin.mp3",
          duration: 172,
        },
      },
      {
        id: 84,
        name: "İnşikak",
        slug: "insikak",
        verse_count: 25,
        pageNumber: 588,
        name_original: "سورة الإنشقاق",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/83-insikak.mp3",
          duration: 113,
        },
      },
      {
        id: 85,
        name: "Büruc",
        slug: "buruc",
        verse_count: 22,
        pageNumber: 589,
        name_original: "سورة البروج",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/27-buruc.mp3",
          duration: 111,
        },
      },
      {
        id: 86,
        name: "Tarık",
        slug: "tarik",
        verse_count: 17,
        pageNumber: 591,
        name_original: "سورة الطارق",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/36-tarik.mp3",
          duration: 74,
        },
      },
      {
        id: 87,
        name: "Ala",
        slug: "ala",
        verse_count: 19,
        pageNumber: 591,
        name_original: "سورة الأعلى",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/08-ala.mp3",
          duration: 78,
        },
      },
      {
        id: 88,
        name: "Gaşiye",
        slug: "gasiye",
        verse_count: 26,
        pageNumber: 591,
        name_original: "سورة الغاشية",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/68-gasiye.mp3",
          duration: 98,
        },
      },
      {
        id: 89,
        name: "Fecr",
        slug: "fecr",
        verse_count: 30,
        pageNumber: 592,
        name_original: "سورة الفجر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/10-fecr.mp3",
          duration: 147,
        },
      },
      {
        id: 90,
        name: "Beled",
        slug: "beled",
        verse_count: 20,
        pageNumber: 593,
        name_original: "سورة البلد",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/35-beled.mp3",
          duration: 80,
        },
      },
      {
        id: 91,
        name: "Şems",
        slug: "sems",
        verse_count: 15,
        pageNumber: 594,
        name_original: "سورة الشمس",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/26-sems.mp3",
          duration: 73,
        },
      },
      {
        id: 92,
        name: "Leyl",
        slug: "leyl",
        verse_count: 21,
        pageNumber: 595,
        name_original: "سورة الليل",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/09-leyl.mp3",
          duration: 98,
        },
      },
      {
        id: 93,
        name: "Duha",
        slug: "duha",
        verse_count: 11,
        pageNumber: 595,
        name_original: "سورة الضحى",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/11-duha.mp3",
          duration: 53,
        },
      },
      {
        id: 94,
        name: "İnşirah",
        slug: "insirah-serh",
        verse_count: 8,
        pageNumber: 596,
        name_original: "سورة الشرح",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/12-insirah.mp3",
          duration: 37,
        },
      },
      {
        id: 95,
        name: "Tin",
        slug: "tin",
        verse_count: 8,
        pageNumber: 596,
        name_original: "سورة التين",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/28-tin.mp3",
          duration: 38,
        },
      },
      {
        id: 96,
        name: "Alak",
        slug: "alak",
        verse_count: 19,
        pageNumber: 597,
        name_original: "سورة العلق",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/01-alak.mp3",
          duration: 90,
        },
      },
      {
        id: 97,
        name: "Kadir",
        slug: "kadr-kadir",
        verse_count: 5,
        pageNumber: 598,
        name_original: "سورة القدر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/25-kadr.mp3",
          duration: 36,
        },
      },
      {
        id: 98,
        name: "Beyyine",
        slug: "beyyine",
        verse_count: 8,
        pageNumber: 598,
        name_original: "سورة البينة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s100-beyyine.mp3",
          duration: 94,
        },
      },
      {
        id: 99,
        name: "Zilzal",
        slug: "zilzal",
        verse_count: 8,
        pageNumber: 599,
        name_original: "سورة الزلزلة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/93-zilzal.mp3",
          duration: 48,
        },
      },
      {
        id: 100,
        name: "Adiyat",
        slug: "adiyat",
        verse_count: 11,
        pageNumber: 599,
        name_original: "سورة العاديات",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/14-adiyat.mp3",
          duration: 44,
        },
      },
      {
        id: 101,
        name: "Karia",
        slug: "karia",
        verse_count: 11,
        pageNumber: 600,
        name_original: "سورة القارعة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/30-karia.mp3",
          duration: 41,
        },
      },
      {
        id: 102,
        name: "Tekasür",
        slug: "tekasur",
        verse_count: 8,
        pageNumber: 600,
        name_original: "سورة التكاثر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/16-tekasur.mp3",
          duration: 40,
        },
      },
      {
        id: 103,
        name: "Asr",
        slug: "asr",
        verse_count: 3,
        pageNumber: 601,
        name_original: "سورة العصر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/13-asr.mp3",
          duration: 24,
        },
      },
      {
        id: 104,
        name: "Hümeze",
        slug: "humeze",
        verse_count: 9,
        pageNumber: 601,
        name_original: "سورة الهمزة",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/32-humeze.mp3",
          duration: 49,
        },
      },
      {
        id: 105,
        name: "Fil",
        slug: "fil",
        verse_count: 5,
        pageNumber: 601,
        name_original: "سورة الفيل",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/19-fil.mp3",
          duration: 25,
        },
      },
      {
        id: 106,
        name: "Kureyş",
        slug: "kureys",
        verse_count: 4,
        pageNumber: 602,
        name_original: "سورة قريش",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/29-kureys.mp3",
          duration: 25,
        },
      },
      {
        id: 107,
        name: "Maun",
        slug: "maun",
        verse_count: 7,
        pageNumber: 602,
        name_original: "سورة الماعون",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/17-maun.mp3",
          duration: 31,
        },
      },
      {
        id: 108,
        name: "Kevser",
        slug: "kevser",
        verse_count: 3,
        pageNumber: 602,
        name_original: "سورة الكوثر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/15-kevser.mp3",
          duration: 22,
        },
      },
      {
        id: 109,
        name: "Kafirun",
        slug: "kafirun",
        verse_count: 6,
        pageNumber: 603,
        name_original: "سورة الكافرون",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/18-kafirun.mp3",
          duration: 32,
        },
      },
      {
        id: 110,
        name: "Nasr",
        slug: "nasr",
        verse_count: 3,
        pageNumber: 603,
        name_original: "سورة النصر",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/s114-nasr.mp3",
          duration: 25,
        },
      },
      {
        id: 111,
        name: "Tebbet",
        slug: "tebbet-mesed",
        verse_count: 5,
        pageNumber: 603,
        name_original: "سورة المسد",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/06-tebbet.mp3",
          duration: 26,
        },
      },
      {
        id: 112,
        name: "İhlas",
        slug: "ihlas",
        verse_count: 4,
        pageNumber: 604,
        name_original: "سورة الإخلاص",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/22-ihlas.mp3",
          duration: 20,
        },
      },
      {
        id: 113,
        name: "Felak",
        slug: "felak",
        verse_count: 5,
        pageNumber: 604,
        name_original: "سورة الفلق",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/20-felak.mp3",
          duration: 26,
        },
      },
      {
        id: 114,
        name: "Nas",
        slug: "nas",
        verse_count: 6,
        pageNumber: 604,
        name_original: "سورة الناس",
        audio: {
          mp3: "https://archive.org/download/INDIRILIS_SIRASINA_GORE_SESLI_KURAN_MEALI/21-nas.mp3",
          duration: 24,
        },
      },
    ],
    verses: [],
    bookmarkedVerses: [],
    surah_id: 1,
    author_id: 6,
    surah_name: "",
    lastVerse: "",
    totalVerses: 0,
    navigatedFromPin: false,
    selectedVerse: {
      surah_id: 1,
      verse_id: 1,
      surah_name: "",
    },

    fonts: [
      {
        id: 1,
        name: "Satoshi",
        tailwind_class: "font-satoshi",
        font: "Satoshi, sans-serif",
      },
      {
        id: 2,
        name: "Lora",
        tailwind_class: "font-lora",
        font: "Lora, serif",
      },
    ],

    selectedFont: {
      id: 2,
      name: "Lora",
      tailwind_class: "font-lora",
      font: "Lora, serif",
    },
  },
  reducers: {
    setSurahs: (state, action) => {
      state.surahs = action.payload;
    },

    setFonts: (state, action) => {
      state.fonts = action.payload;
    },

    setSelectedFont: (state, action) => {
      state.selectedFont = action.payload;
    },

    setBookMarkedVerses: (state, action) => {
      state.bookmarkedVerses = action.payload;
    },

    setSurahId: (state, action) => {
      state.surah_id = action.payload;
    },

    setSelectedVerse: (state, action) => {
      state.selectedVerse = action.payload;
    },

    setAuthorId: (state, action) => {
      state.author_id = action.payload;
    },

    setSurahName: (state, action) => {
      state.surah_name = action.payload;
    },

    setVerses: (state, action) => {
      state.verses = action.payload;
    },

    setLastVerse: (state, action) => {
      state.lastVerse = action.payload;
    },

    setTheme: (state, action) => {
      state.theme = action.payload;
    },

    setTotalVerses: (state, action) => {
      state.totalVerses = action.payload;
    },

    setNavigatedFromPin: (state, action) => {
      state.navigatedFromPin = action.payload;
    },

    resetSurahInfo: (state) => {
      state.surah_id = 0;
      state.surah_name = "";
      state.author_name = "";
      state.verses = [];
    },
  },
});

export const {
  setSurahs,
  setSurahId,
  setAuthorId,
  setSurahName,
  setVerses,
  resetSurahInfo,
  setLastVerse,
  setTheme,
  setNavigatedFromPin,
  setTotalVerses,
  setSelectedVerse,
  setFonts,
  setSelectedFont,
  setBookMarkedVerses,
} = mealSlice.actions;

export default mealSlice.reducer;
