import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const technologiesTop = technologies.slice(0, 5);
  const technologiesBottom = technologies.slice(5);

  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologiesTop.map((technology) => (
          <div className='w-1/2 sm:w-28 h-28 flex flex-col items-center justify-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='mt-2'>{technology.name}</p>
          </div> 
        ))}
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-4'>
        {technologiesBottom.map((technology) => (
          <div className='w-1/2 sm:w-28 h-28 flex flex-col items-center justify-center' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className='mt-2'>{technology.name}</p>
          </div>        
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
