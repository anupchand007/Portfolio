import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// interface Project removed

const Projects = () => { // React.FC removed
  const [filter, setFilter] = useState('all'); // Type <string> removed
  
  const projects = [ // Type Project[] removed
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart, checkout and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['HTML', 'CSS', "JavaScript"],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Real-time weather forecasting application with location detection.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tags: ['React', 'API', 'JavaScript'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Here are some of my recent projects. Each one was carefully crafted to solve specific 
            problems and showcase different skills.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden group h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.demoUrl}
                        className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="text-white bg-gray-800 hover:bg-gray-900 p-2 rounded-full transition-colors duration-300"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
              No projects found with the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;