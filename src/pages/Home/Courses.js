import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import SectionTitle from '../../components/SectionTitle'

const Courses = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData}= useSelector((state) => state.root);
    const {courses} = portfolioData;
    return (
    <div>
        <SectionTitle title='Courses'/>
        <div className="flex py-10 gap-5 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-quaternary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((project, index) => (
            <div key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-secondary border-tertiary border-l-4 -ml-[3px] bg-quaternary py-3 "
                    : "text-quaternary"
                }`}
              >
                {project.title}
              </h1>
              
            </div>
          ))}
          
        </div>

        <div className='flex items-center justify-start gap-10  w-2/3 sm:flex-col'>
            
        <div className="flex flex-col gap-5 ">
          <h1 className="text-secondary text-xl">
            {courses[selectedItemIndex].title}{" "}
          </h1>
          <p className="text-quaternary text-lg">
          {courses[selectedItemIndex].description}{" "}
          </p>
        </div>
          <img  src={courses[selectedItemIndex].image} alt="project-img" className='h-52 w-80'/>
        </div>
      </div>

    </div>
  )
}

export default Courses