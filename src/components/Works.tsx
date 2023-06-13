import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc/SectionWrapper";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";

const ProjectTypes = [
  { name: "Full Stack", id: 1 },
  { name: "Backend", id: 2 },
  { name: "javascript", id: 3 },
];

interface ITag {
  name: string;
  color: string;
}
interface IProject {
  id: number;
  name: string;
  description: string;
  tags: Array<ITag>;
  image: string;
  type: string;
  source_code_link: string;
}

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;

const Works = () => {
  const [currentType, setCurrentType] = useState<string>(ProjectTypes[0].name);
  const [selected, setSelected] = useState<Array<IProject> | null>(null);

  const handlecurrentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value);
  };

  useEffect(() => {
    const filteredProjects = projects.filter(
      (project: IProject) => project.type === currentType
    );
    setSelected(filteredProjects);
    console.log(filteredProjects);
  }, [currentType]);

  // useEffect(() => {
  //   console.log("updated");
  // }, [selected]);

  return (
    <>
      <div className={styles.paddingX + styles.paddingY}>
        <motion.div variants={textVariant(1)}>
          <p className={styles.sectionSubText}> My Work</p>
          <h2 className={styles.sectionHeadText}> Project. </h2>
        </motion.div>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("left", "fade", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] 
     max-w-3xl leading-[30px]"
          >
            Following projects showcare my skills and experience through
            real-world examples of my work .Each project is breiefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies
            and manager projects efficiently.
          </motion.p>
        </div>

        <label
          className={`${styles.sectionSubText} mr-10 mt-22`}
          htmlFor="projectType"
        >
          Choose Project Type
        </label>
        <select
          onChange={(e) => handlecurrentType(e)}
          name="projectType"
          id="projectType"
          className="bg-slate-400 text-black text-sm rounded-md p-2"
        >
          {/* <option
            value="default"
            className="bg-slate-400 rounded-md text-white"
          >
            --Select Type--
          </option> */}
          {ProjectTypes.map((type) => (
            <option
              className="bg-slate-400 mt-1 rounded-md text-white"
              value={type.name}
            >
              {type.name}
            </option>
          ))}
        </select>
        <div className="mt-20 flex flex-wrap gap-7">
          {(selected && selected.length!=0 && selected !== null) ? (
            selected.map((project, index) => (
              // <div >
                <ProjectCard index={index} {...project}></ProjectCard>
              // </div>
            ))
          ) : 
            <h1 className="text-white text-4xl font-bold">No Projects</h1>
          }
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");