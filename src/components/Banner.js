
import React from 'react';

//icons

import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineDocumentDownload} from 'react-icons/hi';

//type animation

import { TypeAnimation } from 'react-type-animation';

//motion

import { motion } from 'framer-motion';

//variants

import {fadeIn} from '../variants';

import { Link } from 'react-scroll';

const PDF_URL = '/Shivank_Goel.pdf';

const Banner = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PDF_URL;
    link.setAttribute('download', 'Shivank_Goel.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <section className='section' id='home'>
  <div className='container mx-auto'>
  <div className='flex flex-col items-center text-center'>
      {/* tagline */}
      <motion.p
      variants={fadeIn('down', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      className='text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[6px] text-white/40 mb-4 font-secondary px-4'>Software Engineer &bull; AI Developer &bull; Freelancer</motion.p>
      {/* name */}
      <motion.h1 
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      className='text-[36px] sm:text-[48px] font-bold leading-[1] lg:text-[80px] font-heading mb-4 px-4'>SHIVANK <span className='text-gradient'>GOEL</span></motion.h1>
      {/* type animation */}
      <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}} className='mb-6 text-[20px] sm:text-[24px] lg:text-[36px] font-tertiary font-semibold uppercase leading-[1]'>
        <TypeAnimation sequence={[
          'Software Engineer',
          2000,
          'AI / LLM Developer',
          2000,
          'Freelance Web Developer',
          2000,
        ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
        />
      </motion.div>
      {/* description */}
      <motion.p 
      variants={fadeIn('up', 0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      className='mb-8 sm:mb-10 max-w-[600px] text-white/60 text-sm sm:text-base leading-relaxed px-4'>Software Engineer with expertise in LLMs, AI Agents, and full-stack development. Currently building intelligent systems at work while helping businesses create modern, high-impact web experiences through freelancing.
      </motion.p>
      {/* CTA buttons */}
      <motion.div
      variants={fadeIn('up', 0.7)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
       className='flex flex-col sm:flex-row gap-4 sm:gap-x-4 items-center mb-8 sm:mb-10'>
        <Link to='contact' smooth={true}>
          <button className='btn btn-sm'>Get in Touch</button>
        </Link>
        <button className='btn btn-sm flex items-center gap-x-2' onClick={handleDownload}>
          <HiOutlineDocumentDownload className='text-lg' />
          Resume
        </button>
      </motion.div>
      {/* social icons */}
      <motion.div
      variants={fadeIn('up', 0.8)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
       className='flex text-[24px] gap-x-5'>
        <button 
          onClick={() => window.open('https://github.com/Shivank-goel')}
          className='w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300'>
        <FaGithub />
      </button>
      <button 
        onClick={() => window.open('https://www.linkedin.com/in/shivank-goel-6b9911200')}
        className='w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300'>
        <FaLinkedin />
      </button>
      </motion.div>
    </div>
  </div>
  </section>
  );
};

export default Banner;
