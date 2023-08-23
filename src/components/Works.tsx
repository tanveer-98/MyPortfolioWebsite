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
  { name: "Frontend", id: 3 },
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
  const [currentType, setCurrentType] = useState<string>("all");
  const [selected, setSelected] = useState<Array<IProject> | null>(projects);

  const handlecurrentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value);
  };

  useEffect(() => {
    if (currentType !== "all") {
      const filteredProjects = projects.filter(
        (project: IProject) => project.type === currentType
      );
      setSelected(filteredProjects);
    } else {
      setSelected(projects);
    }
  }, [currentType]);

  // useEffect(() => {
  //   console.log("updated");
  // }, [selected]);

  return (
    <>
      <div id="works" className={styles.paddingX}>
        <div
          // variants={{
          //   hidden: {
          //     y: -50,
          //     opacity: 0,
          //   },
          //   show: {
          //     y: 0,
          //     opacity: 1,
          //     transition: {
          //       type: "spring",
          //       duration: 1.25,
          //       delay: 1,
          //     },
          //   },
          // }}
        >
          <p className={styles.sectionSubText}> My Work</p>
          <h2 className={styles.sectionHeadText}> Project.. </h2>
        </div>
        <div className="w-full flex">
          <p
            // variants={fadeIn("left", "fade", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] 
     max-w-3xl leading-[30px]"
          >
            Following projects showcare my skills and experience through
            real-world examples of my work .Each project is breiefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies
            and manager projects efficiently.
          </p>
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
          <option value="all" className="bg-slate-400 rounded-md text-white">
            All Projects
          </option>
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
          {selected && selected.length != 0 && selected !== null ? (
            selected.map((project, index) => (
              // <div >
              <ProjectCard index={index} {...project}></ProjectCard>
              // </div>
            ))
          ) : (
            <h1 className="text-white text-4xl font-bold">No Projects</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
