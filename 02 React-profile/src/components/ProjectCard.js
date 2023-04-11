import { useAccordionItemState } from "@chakra-ui/react";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectCard({ item }) {
  return (
    <div>
      <div className='bg-white flex flex-col justify-center rounded-md shadow-md mb-5'>
        <div className='h-[40vh]'>
          <img
            className=' w-full h-full object-cover rounded-t-md '
            src={item.image}
            alt='Project-1'
          />
        </div>
        <div className='px-3 mt-3'>
          <h2 className='text-md font-bold'>{item.name}</h2>
          <p>{item.brief}</p>
        </div>
        <div className='px-3 mt-3'>
          <p>See more <FontAwesomeIcon icon={faArrowRight}/></p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
