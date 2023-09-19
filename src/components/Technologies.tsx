import React from "react";
import { technologies } from "../constants";
import { styles } from "../styles";
const Technologies = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText + " sm:px-16 px-6 " + styles.paddingY}> Technologies </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 space-y-4 w-full justify-between items-center">
        {technologies.map((technology: any) => {
          return (
            <div className="flex justify-center items-center font-roboto flex-col space-y-4 px-12">
              <img
                className="w-10"
                src={technology.icon}
                alt="icon image for technology"
              />
              <span className="font-light text-sm text-white">
                {technology.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Technologies;
