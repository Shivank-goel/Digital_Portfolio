import React from 'react';

//motion
import {motion} from 'framer-motion';

//varaints

import { fadeIn } from '../variants';

//img

import Img1 from '../assets/todolist.png';
import Img2 from '../assets/keepnotes.png';
import Img3 from '../assets/webpage.png'

const Work = () => {

  const handleClick = () =>{
    window.open("https://github.com/Shivank-goel", "_blank");

  }
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>

      <div className='flex flex-col lg:flex-row gap-x-10'>

        <motion.div
        variants={fadeIn('right' , 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
         className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
           <h2 className='h2 leading-tight text-accent'>
            Some Of my <br/> 
           Projects
           </h2>
            <p className='max-w-sm mb-16'>
            I have actively uploaded projects on GitHub.



            </p>
            <button className='btn btn-sm' onClick={handleClick}>View all projects</button>
          </div>
          {/* images */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img 
              className='group-hover:scale-125 transition-all duration-500'
              src={Img1}
              alt=' '/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>TO DO List</span>
              </div>
              {/* title */}
              <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Node & Express</span>
              </div>
            </div>  
           </motion.div>
          <motion.div 
          variants={fadeIn('left' , 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10'>
          {/* images  */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img 
              className='group-hover:scale-125 transition-all duration-500'
              src={Img2}
              alt=' '/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Keep Notes</span>
              </div>
              {/* title */}
              <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>React</span>
              </div>
            </div> 
          {/* images  */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* Overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img 
              className='group-hover:scale-125 transition-all duration-500'
              src={Img3}
              alt=' '/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Static Portfolio</span>
              </div>
              {/* title */}
              <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>HTML CSS</span>
              </div>
            </div> 
        </motion.div>
      </div>
    </div>
    
  </section>
  );
};

export default Work;
