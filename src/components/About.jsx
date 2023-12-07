import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. My name is Tran, please take a look at my portfolio</p>
            </div>
            <div>
              <p>Hello, I'm Tran, and I'd like to share a bit about myself. In my free time, 
                I enjoy playing video games and watching soccer. Additionally, I have a passion for coding projects beyond my school assignments. 
                I'm glad that you're here, and I hope you enjoy exploring my portfolio. Thank you</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;