import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-[220px] sm:w-[220px] min-w-[200px] sm:min-w-[220px] flex-shrink-0'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[13px] sm:text-[17px] max-w-7xl leading-[26px] sm:leading-[30px] sm:px-0'

      >
        I'm a final-year Management Information Systems (MIS) student with a strong foundation in business analysis, data visualization, and user-centered design.  
        I’ve practiced turning user needs into clear flows, wireframes, and actionable solutions using tools like Figma, SQL, and Power BI.  
        I'm passionate about solving real-world problems at the intersection of business, data, and user experience, and currently seeking internship opportunities to grow as a business analyst in a professional environment.
      </motion.p>

      <div className='mt-10 flex gap-4 px-4 sm:px-0 overflow-x-auto sm:justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
