import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaFacebook, FaFileAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import avatar from "../assets/avatar.png";

const Hero = () => {
const words = ["flows", "logic", "deliverables"];
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, 2000); // 2s đổi từ

  return () => clearInterval(interval);
}, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        {/* Cột trái: Dấu chấm & thanh dọc */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Cột giữa: Phần giới thiệu */}
        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Cuong</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    I ask 'why' — a lot. <br className='sm:block hidden' />
    Then turn them into{" "}
    <span className="inline-block text-[#915EFF] font-semibold relative w-[150px] h-[28px]">
      <motion.span
        key={words[currentIndex]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute"
      >
        {words[currentIndex]}
      </motion.span>
    </span>
  </p>

          {/* Nút Download CV */}
          <div className="mt-16">
            <a
              href="/cv.pdf"
              download
              className="inline-block px-6 py-3 backdrop-blur-md bg-white/5 border border-white/10 text-white font-medium rounded-full shadow-md hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] hover:bg-white/10 transition-all duration-300 ease-in-out"
            >
              📄 Download my CV
            </a>
          </div>
        </div>

        {/* Cột phải: Avatar và nút */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center gap-6'
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-60 h-60 object-cover rounded-full border-4 border-violet-500 shadow-xl hover:scale-105 transition-all duration-300"

          />
          
          {/* Icon buttons */}
          <div className="flex justify-center items-center gap-8 mt-">
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

      {/* Hook + Scroll indicator */}
    <div className="absolute xs:bottom-10 bottom-20 w-full flex flex-col items-center gap-4">
      <p
        className="text-center text-white-100 text-base sm:text-lg italic transition-transform duration-300 ease-in-out relative group"
      >
        <span className="inline-block px-4 py-2 rounded-md group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(145,94,255,0.6)] group-hover:bg-gradient-to-r group-hover:from-[#915EFF33] group-hover:to-[#915EFF11] transition-all duration-500">
          Curious about what I’ve done?{" "}
          <br className="sm:hidden" /> Scroll to see my work in action
        </span>
      </p>

      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:shadow-lg hover:shadow-[#915EFF]/40 transition duration-300">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
    </div>
  </a>
</div>


    </section>
  );
};

export default Hero;