import React, { useEffect, useRef } from 'react';
import { Code, Globe, Layout, Database, Server, Palette } from 'lucide-react';

// interface Skill removed

const Skills = () => { // React.FC removed
  const skillsRef = useRef(null);

  const skills = [ // Type Skill[] removed
    { name: 'HTML/CSS', level: 90, icon: <Globe size={24} />, category: 'Frontend' },
    { name: 'JavaScript', level: 85, icon: <Code size={24} />, category: 'Frontend' },
    { name: 'React', level: 80, icon: <Layout size={24} />, category: 'Frontend' },
    { name: 'TypeScript', level: 75, icon: <Code size={24} />, category: 'Frontend' },
    { name: 'Node.js', level: 70, icon: <Server size={24} />, category: 'Backend' },
    { name: 'SQL', level: 65, icon: <Database size={24} />, category: 'Backend' },
    { name: 'UI/UX Design', level: 75, icon: <Palette size={24} />, category: 'Design' },
    { name: 'GraphQL', level: 60, icon: <Database size={24} />, category: 'Backend' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            const progressBar = entry.target.querySelector('.progress-bar');
            if (progressBar) {
              progressBar.style.width = progressBar.dataset.level + '%';
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const skillElements = skillsRef.current?.querySelectorAll('.skill-item');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-5xl mx-auto" ref={skillsRef}>
          {categories.map((category, index) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="skill-item opacity-0"
                      style={{ 
                        transitionDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`,
                      }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="mr-3 text-blue-600 dark:text-blue-400 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                      
                      <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden transition-colors duration-300">
                        <div 
                          className="progress-bar h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: '0%' }}
                          data-level={skill.level}
                        ></div>
                      </div>
                      <div className="flex justify-end mt-1">
                        <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;