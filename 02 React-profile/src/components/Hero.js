import React from 'react'

const profit={
  greeting:"Hello, I am Paul!",
  bio1:"A frontend developer",
  bio2:"specialsed in React"
}

function Hero() {
  return (
    <div className='bg-[#2A4365] h-screen flex'>
      <div
        className='w-full m-auto mx-auto max-w-[1280px] flex flex-col gap-2 place-items-center text-white'
        
      >
        <img className="w-12 rounded-full" src="https://i.pravatar.cc/150?img=7" alt="photo" />
        <h1 className='text-lg'>{profit.greeting}</h1>
        <p className='text-3xl font-sans font-bold'>{profit.bio1}</p>

        <p className='text-3xl font-sans font-bold'>{profit.bio2}</p>

        </div>
        </div>
  )
}

export default Hero;
