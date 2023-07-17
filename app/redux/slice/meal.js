import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: "meal",
  initialState: {
    theme: "light",
    surahs: [],
    authors: [],
    verses: [],
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

    setAuthors: (state, action) => {
      state.authors = action.payload;
    },

    setFonts: (state, action) => {
      state.fonts = action.payload;
    },

    setSelectedFont: (state, action) => {
      state.selectedFont = action.payload;
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
  setAuthors,
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
} = mealSlice.actions;

export default mealSlice.reducer;
