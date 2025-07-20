import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import avatar from "../assets/avatar.png";

const Hero = () => {
  const words = ["flows", "logic", "deliverables"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-center md:items-start gap-10`}
      >
        {/* Cột trái: Dấu chấm & thanh dọc */}
        <div className="absolute left-5 top-[5px] flex flex-col justify-start items-centerflex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Cột giữa: Phần giới thiệu */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Cuong</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  I ask 'why' — a lot.
</p>

<div
  className={`flex items-center gap-2 mt-1 ${styles.heroSubText} text-white-100`}
>
  <span>Then turn them into</span>
  <span className="text-[#915EFF] font-semibold relative">
    <motion.span
      key={words[currentIndex]}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="inline-block"
    >
      {words[currentIndex]}
    </motion.span>
  </span>
</div>

          {/* ✅ Nút Download CV responsive */}
          <div className="mt-4 w-full flex justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="w-[200px] sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-center backdrop-blur-md bg-white/5 border border-white/10 text-white font-medium rounded-full shadow-md hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] hover:bg-white/10 transition-all duration-300 ease-in-out"
            >
              📄 Download my CV
            </a>
          </div>
        
        </div>

        {/* Cột phải: Avatar và icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6">
        
        <div className="relative w-60 h-60 rounded-full">
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#42A5F5] via-[#915EFF] to-[#E040FB] animate-spin-slow blur-sm opacity-40"></div>
  <img
    src={avatar}
    alt="avatar"
    className="relative w-full h-full object-cover rounded-full border-2 border-white shadow-lg"
  />
</div>




          {/* Icon buttons */}
          <div className="flex justify-center items-center gap-8">
            <a
              href="https://www.linkedin.com/in/hhcuong03/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[40px] hover:text-[#0072b1] transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/hoang.kelvinn712/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[40px] hover:text-[#4267B2] transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>
        
      </div>

      {/* ✅ Hook + Scroll indicator */}
<div className="absolute bottom-6 w-full flex flex-col items-center gap-2 px-4 sm:px-0">
  {/* Hook text */}
  <p
        className="text-center text-white-100 text-base sm:text-lg italic transition-transform duration-300 ease-in-out relative group"
      >
        <span className="inline-block px-4 py-2 rounded-md group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] group-hover:bg-gradient-to-r group-hover:from-[#915EFF33] group-hover:to-[#915EFF11] transition-all duration-500">
          Curious about what I’ve done?{" "}
          <br className="sm:hidden" /> Scroll to see my work in action
        </span>
      </p>

  {/* Scroll indicator */}
  <a href="#about">
    <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 sm:p-2 hover:shadow-lg hover:shadow-[#915EFF]/40 transition duration-300">
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
      />
    </div>
  </a>
</div>

    </section>
  );
};

export default Hero;