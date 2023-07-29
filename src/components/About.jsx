import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
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
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText} style={{color: '#915EFF'}}>Overview</h2>
      </motion.div>
      <div className='w-full flex justify-center items-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-center text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a detail-oriented front-end developer proficient in HTML, CSS, and JavaScript, with hands-on experience in React and TypeScript. I thrive in cross-functional teams, creating efficient and user-friendly interfaces that enhance user experience. Eager to collaborate, learn and contribute to meaningful web solutions. 
          <p>Let's transform your concepts into reality!</p>
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
