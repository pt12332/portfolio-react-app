import React from 'react';
import projectOneImage from '../assets/IT213.png';
import projectTwoImage from '../assets/appscart.jpg';
import projectThreeImage from '../assets/authenticate-user.png';
import projectFourImage from '../assets/IT315.PNG';

const data = [
  {
    name: 'Restaurant',
    image: projectOneImage,
    github: 'https://github.com/pt12332/213',
    live: 'https://mason.gmu.edu/~ptran48/213project5/index.html'
  },
  {
    name: 'App Cart',
    image: projectTwoImage,
    github: 'https://github.com/pt12332/Apps-Cart',
    // live not included for project two
  },
  {
    name: 'Authenticate-graphic-user',
    image: projectThreeImage,
    github: 'https://github.com/pt12332/Authenticate-graphic-user-',
    // live not included for project three
  },
  {
    name: 'WeatherApp',
    image: projectFourImage,
    github: 'https://github.com/pt12332/WeatherApp',
    live: 'https://www.veed.io/view/9bb1ae86-ecad-4dc3-b49a-7bd5db2693b0?panel=share'
  },
  // ... add additional projects if any
];

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-4 text-yellow-600'>Check out some of my recent projects</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Grid Item */}
          {data.map((item, index) => (
            <div key={index} className="shadow-lg shadow-[#040c16] group container rounded-md overflow-hidden">
              {/* Image container */}
              <div
                className="bg-cover bg-center bg-no-repeat h-64 w-full relative"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center transition-opacity duration-300">
                  <div className="text-center">
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    {item.live && (
                      <a href={item.live} target="_blank" rel="noopener noreferrer">
                        <button className="rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Project name */}
              <div className="bg-[#1A1C23] p-4">
                <p className="text-xl font-bold text-white text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
