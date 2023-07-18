"use client";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import store from "./redux/configureStore";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";
import { Provider, useSelector } from "react-redux";
import Container from "./components/Container";
import FloatingContainer from "./components/FloatingContainer";
import OverlayWithInfo from "./components/OverlayWithInfo";
import ScrollLoader from "./components/ScrollLoader";

export default function RootLayout({ children }) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight * 0.01 + "px"
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Provider store={store}>
      <html lang="tr">
        <meta name="theme-color" content={"#008080"} id="theme-color-meta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bu site (Kur'an-ı Kerim Türkçe Meali Sitesi), insanlara faydalı olmak ve Allah'ın ilmini insanlara yaymak amacıyla çıkar gözetmeksizin Tarık Kaya tarafından oluşturulmuştur."
        />
        <meta name="author" content="Tarık Kaya" />
        <meta name="keywords" content="Kur'an-ı Kerim, Meal, Türkçe" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <title>Kur'an-ı Kerim Türkçe Meali</title>
        <link rel="manifest" href="/manifest.json" />
        <body className="w-full mx-auto">
          <Analytics />
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

          <Container>
            <AnimatePresence>
              {!isLoading && (
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
              )}
            </AnimatePresence>
          </Container>

          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 40,
                }}
                className="w-full h-screen absolute top-0 left-0 bg-blue_white "
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                  animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                  exit={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 40,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px]"
                  src="/logo.svg"
                  id="logo"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </body>
      </html>
    </Provider>
  );
}
