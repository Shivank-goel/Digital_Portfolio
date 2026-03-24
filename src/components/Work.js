import React from 'react';

//motion
import {motion} from 'framer-motion';

//varaints

import { fadeIn } from '../variants';

//img

import Img1 from '../assets/todolist.png';
import Img2 from '../assets/Travel_Nest.jpeg';
import Img3 from '../assets/webpage.png'

// AI/ML project data
const aiProjects = [
  {
    title: 'Finance Copilot',
    tech: 'LLM · AI Agent · LangChain',
    description: 'An AI-powered financial assistant that leverages LLMs to analyze market data, generate insights, and assist with financial decision-making.',
  },
  {
    title: 'RAG Document Analyser',
    tech: 'LLM · RAG Pipeline · Vector DB',
    description: 'A retrieval-augmented generation system that enables intelligent querying and analysis of large document collections.',
  },
  {
    title: 'Churn Prediction Model',
    tech: 'Machine Learning · Python · Scikit-learn',
    description: 'A predictive ML model that identifies customers likely to churn, enabling proactive retention strategies.',
  },
];

const Work = () => {

  const handleClick = () =>{
    window.open("https://github.com/Shivank-goel", "_blank");
  }

  return (
  <section className='py-16 lg:py-24' id='work'>
    <div className='container mx-auto'>

      {/* Section Header */}
      <motion.div
        variants={fadeIn('up' , 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='mb-16'>
        <h2 className='h2 leading-tight text-accent'>
          My Work
        </h2>
        <p className='max-w-lg'>
          From AI-powered copilots to full-stack web apps — here's what I've been building.
        </p>
      </motion.div>

      {/* ── AI / ML Engineer ── */}
      <motion.div
        variants={fadeIn('up' , 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.2}}
        className='mb-20'>
        <h3 className='font-heading text-[22px] uppercase tracking-[4px] text-accent mb-10'>
          AI / ML Engineer
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {aiProjects.map((project, index) => (
            <div key={index}
              className='border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm
              hover:border-accent/50 hover:bg-white/10 transition-all duration-500 group'>
              <span className='text-accent font-tertiary text-sm uppercase tracking-widest'>
                {project.tech}
              </span>
              <h4 className='text-[24px] font-primary font-semibold mt-3 mb-4 group-hover:text-gradient transition-all'>
                {project.title}
              </h4>
              <p className='text-white/60 text-[15px] leading-relaxed font-secondary'>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Web Developer ── */}
      <motion.div
        variants={fadeIn('up' , 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.2}}>
        <h3 className='font-heading text-[22px] uppercase tracking-[4px] text-accent mb-10'>
          Web Developer
        </h3>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
            {/* TO DO List */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={Img1}
                alt='TO DO List'/>
              <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>TO DO List</span>
              </div>
              <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl lg:text-3xl text-white'>Node & Express</span>
              </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-y-10'>
            {/* Hotel Review System */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={Img2}
                alt='Hotel Review System'/>
              <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Hotel Review System</span>
              </div>
              <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl lg:text-3xl text-white'>React</span>
              </div>
            </div>
            {/* Static Portfolio */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={Img3}
                alt='Static Portfolio'/>
              <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Static Portfolio</span>
              </div>
              <div className='absolute -bottom-full left-6 lg:left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl lg:text-3xl text-white'>HTML CSS</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* View all button */}
      <motion.div
        variants={fadeIn('up' , 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='mt-12 text-center'>
        <button className='btn btn-sm' onClick={handleClick}>View all projects</button>
      </motion.div>

    </div>
  </section>
  );
};

export default Work;
