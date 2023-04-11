import React from "react";
import ProjectCard from "./ProjectCard";
import {v4 as uuidv4, v4} from  'uuid';
import image1 from './images/amelie-mourichon-sv8oOQaUb-o-unsplash.jpg';
import image2 from './images/markus-spiske-4T5MTKMrjZg-unsplash.jpg';
import image3 from './images/ux-indonesia-qC2n6RQU4Vw-unsplash.jpg';
import image4 from './images/ux-store-jJT2r2n7lYA-unsplash.jpg';




const projects =[
    {
        name:"Online Store:",
        brief:"Develop an online store with an easy-to-use interface to allow customers to purchase goods and services. ",
        image:image1,
        id:v4()
    },
    {
        name:"Social Networking Site: ",
        brief:"Create a social networking site that allows users to connect with friends, share posts, and join groups. ",
        image:image2,
        id:v4()
    },
    {
        name:"Online Video Platform: ",
        brief:"Develop an online video platform where users can upload, share, and watch videos.  ",
        image:image3,
        id:v4()

    },
    {
        name:"Online Marketplace: ",
        brief:"Create an online marketplace where buyers and sellers can find each other and trade goods.",
        image:image4,
        id:v4()
    }
]

function Project() {
  return (
    <div className=' bg-green-900 text-left px-10'>
        <div>
            <h1 className="text-4xl text-white font-bold py-10">Featured Projects</h1>
        </div>
        <div className="grid grid-cols-2 gap-5">{projects.map((item)=>(
            <div key={item.id}>
                <ProjectCard item={item}/>
            </div>
        ))}</div>
        
      
    </div>
  );
}

export default Project;
