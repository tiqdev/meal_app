"use client";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import store from "./redux/configureStore";

import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";
import { Provider, useSelector } from "react-redux";

export default function RootLayout({ children }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 3) {
        document.getElementById("scrolltotop").style.display = "flex";
      } else {
        document.getElementById("scrolltotop").style.display = "none";
      }

      if (window.scrollY > 180) {
        document.getElementById("overlay_top").style.display = "flex";
      } else {
        document.getElementById("overlay_top").style.display = "none";
      }
    });
  }, []);

  const transitionVariants = {
    initialState: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    animateState: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exitState: {},
  };

  return (
    <Provider store={store}>
      <html lang="en">
        <meta name="theme-color" content={"#283618"} id="theme-color-meta" />
        <link rel="manifest" href="/manifest.json" />
        <body>
          <ToastContainer
            position="top-center"
            transition={Slide}
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

          <AnimatePresence>
            <motion.div
              className=""
              initial="initialState"
              animate="animateState"
              exit="exitState"
              variants={transitionVariants}
            >
              <Navbar />
              {children}
            </motion.div>
          </AnimatePresence>
        </body>
      </html>
    </Provider>
  );
}
