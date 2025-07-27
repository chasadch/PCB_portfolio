"use client";

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { useState } from 'react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', 'AI/ML', 'IoT', 'Robotics', 'Hardware'];
  
  const getCategoryFromTools = (tools) => {
    if (tools.some(tool => ['OpenCV', 'TensorFlow', 'AI'].includes(tool))) return 'AI/ML';
    if (tools.some(tool => ['IoT', 'BLE', 'MQTT'].includes(tool))) return 'IoT';
    if (tools.some(tool => ['ROS', 'Pixhawk', 'LiDAR'].includes(tool))) return 'Robotics';
    if (tools.some(tool => ['PCB Design', 'ESP32', 'ARM Cortex'].includes(tool))) return 'Hardware';
    return 'Other';
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => getCategoryFromTools(project.tools) === selectedCategory);

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24 px-4 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500"></div>
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore my latest work in AI, IoT, robotics, and embedded systems. Each project represents a unique challenge solved with innovative technology.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
            }`}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`transform transition-all duration-500 ${
              hoveredProject === project.id ? 'scale-105 -translate-y-2' : ''
            }`}>
              <ProjectCard 
                project={project} 
                isHovered={hoveredProject === project.id}
                index={index}
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-16">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
          <span className="relative z-10">View All Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>
    </div>
  );
};

export default Projects;