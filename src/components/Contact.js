import React, {useState} from 'react';

//motion 

import { motion } from 'framer-motion';

//variants

import { fadeIn } from '../variants';

const Contact = () => {
  const [username, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit=(e)=>{
    if(username.length===0 && email.length===0){
      setError(true)
    }

  }
  return (
  <section className='py-16 lg:section' id='contact'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* text */}
      <motion.div
      variants={fadeIn('right' , 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.3}}
       className='flex-1 flex justify-start items-center'>
      <div>
        <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch </h4>
        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!
        </h2>
        </div>
      </motion.div>
      {/* form */}
      <motion.form
      onSubmit={handleSubmit}
      action='https://formspree.io/f/mnqkaygq'
      method='POST'
      name='contact-inputs'
      variants={fadeIn('left' , 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.3}}
       className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
        <input
        onChange={e=>setName(e.target.value)}
         className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
         focus:border-accent transition-all'
         type='text'
         name='username'
         placeholder={error&&username.length<=0?"Please enter your name":"Your name" }
         />
        <input 
        onChange={e=>setEmail(e.target.value)}
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
         focus:border-accent transition-all'
         type='email'
         name='email'
         placeholder={error&&email.length<=0?"Please enter your email":"Your email" }
         />
        <textarea 
        name='message'
        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
         focus:border-accent transition-all resize-none mb-12'
         placeholder='Your message'
         ></textarea>
         <button 
         type='submit'
          className='btn btn-lg'>Send message</button>
      </motion.form>
    </div>
  </div>
  </section>
  );
};

export default Contact;
