import React from 'react';
import me from "../assets/edited.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-blue-100 dark:border-blue-900 shadow-xl transition-all duration-300">
                <img 
                  src={me}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full -z-10 transition-colors duration-300"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-full -z-10 transition-colors duration-300"></div>
            </div>
          </div>
          
          <div className="md:w-3/5 md:pl-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              I'm a passionate web developer with a keen eye for design and a love for creating intuitive, 
              dynamic user experiences. With expertise in modern web technologies, I bring ideas to life 
              through clean, efficient code and thoughtful user interfaces.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through blog posts and mentoring.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Location
                </h4>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Kathmandu, Nepal
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Email
                </h4>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  anupchannd258@gmail.com
                </p>
              </div>
              {/* <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Experience
                </h4>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  5+ Years
                </p>
              </div> */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  Education
                </h4>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Bachelor in Information Technology (BIT)
                  <br />
                  Patan Multiple Campus
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1uG7UWKrRwJ41ghWuY6Sl_9S47QP_nNMl/view?usp=drive_link" 
                className="inline-block ml-4 px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;