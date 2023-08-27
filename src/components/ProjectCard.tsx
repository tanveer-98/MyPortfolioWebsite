import React from "react";
//@ts-ignore
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import Tag from "./Tag";

interface ITag {
  name: string;
  color: string;
}

const ProjectCard = ({
  id,
  index,
  name,
  description,
  tags,
  image,
  type,
  source_code_link,
  site_link
}: any) => {
  console.log("KEY" + id);
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    // key={id}
    // >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=" relative bg-tertiary p-5 rounded-2xl
       md:w-[360px] w-[200] h-full"
    >
      <div className=" w-full h-full" key={index}>

      {
              type !="Backend" ? 
              <img
                src={image}
                alt={name}
                className="w-full h-full bg-contain rounded-2xl"
                />

              :""
              
            }

        <div className="mt-5 px-2">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap w-full px-2 mt-2 gap-2">
          {tags.map((tag: ITag) => (
            <Tag name={tag.name} color={tag.color} />
          ))}
        </div>
        <div className="absolute right-0 -top-14 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            // __blank means url will open in a new window

            className="rounded-full bg-gradient  w-10 h-10 flex justify-center items-center cursor-pointer"
          >
            <div className="rounded-full hover:shadow-lg">
              <img
                src={github}
                alt={github}
                className="object-contain rounded-full  hover:scale-110 hover:shadow-black"
              />
            </div>
          </div>
          <div
            onClick={() => window.open(site_link, "_blank")}
            // __blank means url will open in a new window

            className="rounded-full bg-gradient  w-10 h-10 flex hover:scale-110  justify-center items-center cursor-pointer"
          >
            <div className="relative group bg-white rounded-full p-2 ">
              <img
                src="./img/arrow-right-up.svg"
                alt="arrow right up image"
                className="object-contain  hover:shadow-black"
              />

              <span className=" text-black bg-white rounded-md block right-0 bottom-10 p-1 shadow-md shadow-black scale-0 absolute group-hover:scale-100 ">
                Visit Site
              </span>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
    // </motion.div>
  );
};

export default ProjectCard;
