import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const text = title.innerText;
    title.innerHTML = '';
    
[...text].forEach((char, i) => {
  const span = document.createElement('span');
  if (char === ' ') {
    span.innerHTML = '&nbsp;';
  } else {
    span.innerText = char;
  }
  span.style.opacity = '0';
  span.style.transform = 'translateY(20px)';
  span.style.display = 'inline-block';
  span.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
  span.style.transitionDelay = `${i * 0.05}s`;
  
  title.appendChild(span);
  
  setTimeout(() => {
    span.style.opacity = '1';
    span.style.transform = 'translateY(0)';
  }, 100);
});
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto ">
          <p
            ref={titleRef}
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white"
          >
           Hello, I'm Anup Chand
          </p>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300 opacity-0 transform translate-y-8 animate-fade-in-up">
            A passionate developer crafting beautiful digital experiences
          </p>
          
          <div className="flex justify-center gap-4 mb-12 opacity-0 transform translate-y-8 animate-fade-in-up animation-delay-300">
            <a 
              href="https://github.com/anupchand007" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/anup-chand-b34953291/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/its_me_again_anup/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="opacity-0 transform translate-y-8 animate-fade-in-up animation-delay-600">
            <a 
              href="#about" 
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;