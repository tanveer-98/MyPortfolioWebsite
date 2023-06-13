import React from 'react'
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import {fadeIn,textVariant}  from '../utils/motion';

import {SectionWrapper} from '../hoc/SectionWrapper'
import {projects} from '../constants';
import ProjectCard from './ProjectCard';




const Works = () => {
  return (
   <div className={styles.paddingX + styles.paddingY}>
   <motion.div
   variants={textVariant(1)} 
   >
    <p className={styles.sectionSubText}> My Work</p>
    <h2 className={styles.sectionHeadText}> Project. </h2>
   </motion.div>
    <div className="w-full flex">
     <motion.p
     variants = {fadeIn("left","fade",0.1,1)}
     className="mt-3 text-secondary text-[17px] 
     max-w-3xl leading-[30px]"
     >

    Following projects showcare my skills and experience through real-world examples of my work .Each project is breiefly described with links to code repositories and live demos 
    in it. It reflects my ability to solve complex problems, work with different technologies and manager projects efficiently.

     </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project , index)=><ProjectCard
        key={index}
        index = {index}
        {...project}
        
        >

        </ProjectCard>)}
    </div>

   </div>
  )
}

export default SectionWrapper(Works,"");