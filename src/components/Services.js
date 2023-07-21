import React from 'react';

//icons



//motion

import { motion } from 'framer-motion';

//variants

import { fadeIn } from '../variants';

//services data

const skills = [
  {
    name: 'Languages',
    description:'Java, Python, JavaScript, HTML & CSS'
  },
  {
    name: 'DataBase',
    description:'SQL, MongoDb'
  },
  {
    name: 'Development',
    description:'Web Development, Mern Stack'
  },
 
  
]

const Services = () => {
  const handleClick = () =>{
    window.open("https://github.com/Shivank-goel", "_blank");

  }
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
      {/* text & image*/}
      <motion.div
       variants={fadeIn('right' , 0.5)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.3}}
       className='flex-1 mb-12 lg:mb-0'> 
      <h2 className='h2 text-accent mb-6'> Learning </h2>
      <h3 className='h3 max-w-[445px] mb-16'>
        
My knowledge continues to grow
      </h3>
      <button className='btn btn-sm' onClick={handleClick}>Git</button>
      </motion.div>
      {/* skills */}
      <motion.div
       variants={fadeIn('left' , 0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false, amount:0.3}}
       className='flex-1'>
        {/* list of skills */}
        <div>
          {skills.map((skills, index)=>{
            //destructure skills
            const {name, description} = skills;
            return(
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
              <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'> {name} </h4>
              <p className='font-secondary leading-tight'>{description}</p>
                </div>
              </div>
            )
          }) }
        </div>
      </motion.div>

      </div>
    </div>
  </section>
  );
};

export default Services;
