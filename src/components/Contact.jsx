import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github,behance,linkedin,mail } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText} style={{color: '#915EFF'}}>Contacts</h3>

        <div className='mt-12 flex gap-8 justify-around items-center'>
            <a href='https://github.com/YevheniiaSmetana' target='_blank' rel='noopener noreferrer'>
                <img src={github} alt='Github' style={{width: '118px', height: '118px'}}/>
            </a>
            <a href='https://www.linkedin.com/in/yevheniia-smetana/' target='_blank' rel='noopener noreferrer'>
                <img src={linkedin} alt='LinkedIn' style={{width: '110px', height: '110px'}}/>
            </a>
            <a href='https://www.behance.net/yevheniiasmetana' target='_blank' rel='noopener noreferrer'>
                <img src={behance} alt='Behance' style={{width: '98px', height: '98px'}} className="ml-3"/>
            </a>
        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
