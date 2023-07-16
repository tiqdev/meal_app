"use client";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import store from "./redux/configureStore";

import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";
import { Provider, useSelector } from "react-redux";
import Container from "./components/Container";
import FloatingContainer from "./components/FloatingContainer";
import OverlayWithInfo from "./components/OverlayWithInfo";
import ScrollLoader from "./components/ScrollLoader";

export default function RootLayout({ children }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        document.getElementById("overlay_top").style.display = "flex";
        document.getElementById("overlay").style.display = "flex";
      } else {
        document.getElementById("overlay_top").style.display = "none";
        document.getElementById("overlay").style.display = "none";
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
      <html lang="tr">
        <meta name="theme-color" content={"#008080"} id="theme-color-meta" />
        <link rel="manifest" href="/manifest.json" />
        <body className="w-full mx-auto">
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
            <Container>
              <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                variants={transitionVariants}
              >
                <ScrollLoader />
                <OverlayWithInfo />
                <Navbar />
                {children}
                <FloatingContainer />
              </motion.div>
            </Container>
          </AnimatePresence>
        </body>
      </html>
    </Provider>
  );
}
