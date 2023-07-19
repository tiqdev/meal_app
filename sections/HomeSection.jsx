"use client";

import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import store from "@/app/redux/configureStore";

import { Analytics } from "@vercel/analytics/react";

import { Slide, ToastContainer } from "react-toastify";

import Container from "../components/Container";
import FloatingContainer from "../components/FloatingContainer";
import OverlayWithInfo from "../components/OverlayWithInfo";
import ScrollLoader from "../components/ScrollLoader";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

const HomeSection = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <Provider store={store}>
      <section className="w-full mx-auto">
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
      </section>
    </Provider>
  );
};

export default HomeSection;
