import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";


const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData}= useSelector((state) => state.root);
  const {experiences} = portfolioData;

  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-5 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-quaternary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
              key={index}
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-secondary border-tertiary border-l-4 -ml-[3px] bg-quaternary py-3 "
                    : "text-quaternary"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 px-10 w-2/3">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}{" "}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}{" "}
          </h1>
          <p className="text-quaternary text-lg">
          {experiences[selectedItemIndex].description}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
