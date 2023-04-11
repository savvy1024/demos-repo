import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColonSign, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4, v4 } from "uuid";

import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useRef, useState } from "react";

function Header() {
  

  const socialLinks = [
    {
      id: v4(),
      icon: faGithub,
      link: "https://github.com",
    },
    {
      id: v4(),
      icon: faLinkedin,
      link: "https://linkedin.com",
    },
    {
      id: v4(),
      icon: faMedium,
      link: "https://medium.com",
    },
    {
      id: v4(),
      icon: faStackOverflow,
      link: "https://stackoverflow.com",
    },
  ];
  const scrollRef = useRef(0);
  const [scrollUp, setScrollUp] = useState(0);

  useEffect(() => {
    function headerScroll() {
      let curPosition = window.pageYOffset;
      if (curPosition > scrollUp) {
        scrollRef.current.style.transform = "translateY(-200px)";
      } else {
        scrollRef.current.style.transform = "translateY(0px)";
      }
      setScrollUp(curPosition <= 0 ? 0 : curPosition);
    }
    window.addEventListener("scroll", headerScroll);

    return () => window.removeEventListener("scroll", headerScroll);
  }, [scrollUp]);

 

  return (
    <div>
      <div
        className='w-full fixed top-0 left-0 right-0 bg-[#18181b] transition-transform ease-in-out delay-150 '
        ref={scrollRef}
      >
        <div className='w-full mx-auto flex flex-row justify-between max-w-[1280px]  text-white px-12'>
          <div className='text-3xl w-[30%] flex flex-row gap-5 '>
            {socialLinks.map(({ icon, link, id }) => (
              <a className='my-auto' href={link} ke={id} rel='icon'>
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
          <div className='w-full h-16 flex flex-row justify-end gap-5 '>
            <a className='my-auto' href='#'>
              Projects
            </a>
            <a className='my-auto' href='#'>
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
