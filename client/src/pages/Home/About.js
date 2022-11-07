import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const {loading, portfolioData}= useSelector((state) => state.root);
  const {about} = portfolioData;
  const {skills, lottieUrl, description1, description2} = about;
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/3 sm:w-full">
          <lottie-player
            src={lottieUrl}
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 ml-8 w-2/3  text-lg sm:w-full">
          <p className="text-quaternary">
            {description1 || ''}
          </p>
          <p className="text-quaternary">
           {description2 || ''}
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          I am learning:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10  " key={index}>
              <h1 className="text-tertiary text-lg" >{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
