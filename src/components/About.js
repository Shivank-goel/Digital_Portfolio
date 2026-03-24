import React from 'react';

//motion

import {motion} from 'framer-motion';

//variant

import { fadeIn} from '../variants';


const About = () => {
  return(
   <section className='section' id='about'>
   <div className='container mx-auto '>
    <div className='flex flex-col lg:flex-row gap-x-10'>
    {/* text */}
    <motion.div
    variants={fadeIn('right' , 0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.3}}
     className='flex-1 mb-8 lg:mb-0'>
      <h2 className='h2 text-accent'>About me.</h2>
      <h3 className='h3 mb-4'>
      Software Engineer by profession, AI enthusiast by passion — I build intelligent systems and modern web applications.
      </h3>
      <p className='mb-6'>
I'm a Software Engineer with a B.Tech in Computer Science & Engineering. At work, I focus on building software solutions, 
while my passion projects revolve around LLMs, AI Agents, and RAG-based systems. I also take on freelance web development 
projects, helping businesses establish a strong digital presence with modern, responsive websites.
      </p>
    </motion.div>
    {/* highlights */}
    <motion.div
    variants={fadeIn('left' , 0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.3}}
     className='flex-1'>
      <div className='flex flex-col gap-y-6'>
        <div className='border-b border-white/20 pb-6'>
          <h4 className='text-[20px] font-primary font-semibold text-gradient mb-2'>Software Engineer</h4>
          <p className='font-secondary text-sm'>Currently employed as a Software Engineer, building and shipping production-grade software solutions.</p>
        </div>
        <div className='border-b border-white/20 pb-6'>
          <h4 className='text-[20px] font-primary font-semibold text-gradient mb-2'>LLMs & AI Agents</h4>
          <p className='font-secondary text-sm'>Working with Large Language Models, RAG pipelines, and autonomous AI agents to solve real-world problems.</p>
        </div>
        <div className='border-b border-white/20 pb-6'>
          <h4 className='text-[20px] font-primary font-semibold text-gradient mb-2'>Freelance Web Development</h4>
          <p className='font-secondary text-sm'>Building custom, responsive websites for clients — from landing pages to full-stack web applications.</p>
        </div>
      </div>
    </motion.div>
    </div>
   </div>
   </section>
   );
};

export default About;
