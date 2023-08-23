
import React from 'react';

//images 

import Image from '../assets/avatar.png';

//icons

import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';

//type animation

import { TypeAnimation } from 'react-type-animation';

//motion

import { motion } from 'framer-motion';

//variants

import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section className='section' id='home'>
  <div className='container mx-auto'>
  <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
    {/*text */}
    <div className=' flex-1 text-center font-secondary lg:text-left'>
      <motion.h1 
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      className='text-[55px] font-bold leading-[0.8] lg:text-[110px] '>SHIVANK <span>GOEL</span></motion.h1>
      <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
        <span className='mr-4'>I am a</span>
        <TypeAnimation sequence={[
          'Developer',
          2000,
          'Programmer',
          2000
        ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
        />
      </motion.div>
      <motion.p 
      variants={fadeIn('up', 0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
      className='mb-8 max-w-lg mx-ayto lg:mx-0'>I am excited to introduce myself as a passionate and diligent B.Tech student in Computer Science & Engineering, eager to embark on a rewarding journey in the world of technology and innovation.
      am a quick learner, always eager to acquire new skills and stay updated with the latest advancements.
      </motion.p>
      <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
       className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
      </motion.div>
      <motion.div
      variants={fadeIn('up', 0.7)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.7}}
       className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
        {/*socials */}
        <button onClick={() => window.open('https://github.com/Shivank-goel')}>
        <FaGithub />
      </button>
      <button onClick={() => window.open('https://www.linkedin.com/in/shivank-goel-6b9911200')}>
        <FaLinkedin />
      </button>
      <button onClick={() => window.open('#')}>
        <FaInstagram />
      </button>
      </motion.div>
    </div>
    {/* image  */}
  <motion.div
  variants={fadeIn('down', 0.3)}
      initial='hidden'
      whileInView={'show'}
    className='hidden lg:flex felx-1 max-w-[320px] lg:max-w-[482px] justify-center '>
    <img className=' w-1/2 h-1/2 rounded-full' src={Image} alt=' '></img>
    </motion.div>
    </div>
  </div>
  </section>
  );
};

export default Banner;
