import React from 'react';

//countup

import CountUp from 'react-countup';

//intersection observer hook

import {useInView} from 'react-intersection-observer';

//motion

import {motion} from 'framer-motion';

//variant

import { fadeIn} from '../variants';


const About = () => {
  const [ref, inView ] = useInView({
    threshold: 0.5,
  })
  return(
   <section className='section' id='about' ref={ref}>
   <div className='container mx-auto '>
    {/* text */}
    <motion.div
    variants={fadeIn('left' , 0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.3}}
     className='flex-1'>
      <h2 className='h2 text-accent'>About me.</h2>
      <h3 className='h3 mb-4'>
      I am a passionate and driven CSE student who thoroughly enjoys coding and maintains an unwavering commitment to continuous learning.
      </h3>
      <p className='mb-6'>
        
Since my ninth-grade year, I have been actively engaged in coding, primarily focusing on Java. 
Throughout my college journey, I expanded my expertise by delving into software development and further honed my skills in Python
      </p>
      {/* stats */}
      <div className='flex mb-12'>
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
           { 
            inView ? <CountUp start={0} end={2} duration={3}/> : null}
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Years of <br />
            Experience
          </div>
        </div>
      </div>
    </motion.div>
   </div>
   </section>
   );
};

export default About;
