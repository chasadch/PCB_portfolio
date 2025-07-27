"use client";

import * as React from 'react';
import { useState } from 'react';

function ProjectCard({ project, isHovered, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (tools) => {
    if (tools.some(tool => ['OpenCV', 'TensorFlow', 'AI'].includes(tool))) {
      return 'from-emerald-500 to-teal-500';
    }
    if (tools.some(tool => ['IoT', 'BLE', 'MQTT'].includes(tool))) {
      return 'from-blue-500 to-indigo-500';
    }
    if (tools.some(tool => ['ROS', 'Pixhawk', 'LiDAR'].includes(tool))) {
      return 'from-purple-500 to-violet-500';
    }
    if (tools.some(tool => ['PCB Design', 'ESP32', 'ARM Cortex'].includes(tool))) {
      return 'from-orange-500 to-red-500';
    }
    return 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (tools) => {
    if (tools.some(tool => ['OpenCV', 'TensorFlow', 'AI'].includes(tool))) {
      return '🤖';
    }
    if (tools.some(tool => ['IoT', 'BLE', 'MQTT'].includes(tool))) {
      return '📡';
    }
    if (tools.some(tool => ['ROS', 'Pixhawk', 'LiDAR'].includes(tool))) {
      return '🚁';
    }
    if (tools.some(tool => ['PCB Design', 'ESP32', 'ARM Cortex'].includes(tool))) {
      return '⚡';
    }
    return '💻';
  };

  return (
    <div className="relative group h-full">
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.tools)} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
      
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-gray-700/50 hover:shadow-2xl hover:shadow-purple-500/10">
        {/* Header with gradient accent */}
        <div className={`h-1 bg-gradient-to-r ${getCategoryColor(project.tools)}`}></div>
        
        {/* Card Content */}
        <div className="p-6 lg:p-8 h-full flex flex-col">
          {/* Project Icon and Category */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(project.tools)} flex items-center justify-center text-2xl shadow-lg`}>
                {getCategoryIcon(project.tools)}
              </div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {project.role.split(' ')[0]}
              </div>
            </div>
            <div className="text-gray-500 text-sm font-mono">
              #{String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {project.name}
          </h3>

          {/* Role Badge */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(project.tools)} text-white`}>
              {project.role}
            </span>
          </div>

          {/* Description */}
          <p className={`text-gray-300 leading-relaxed mb-6 flex-grow transition-all duration-300 ${
            isExpanded ? '' : 'line-clamp-3'
          }`}>
            {project.description}
          </p>

          {/* Expand/Collapse button for long descriptions */}
          {project.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-200 mb-4 self-start"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <button className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Project
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button className="px-4 py-3 bg-gray-800/50 text-gray-300 text-sm font-semibold rounded-xl border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.tools)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
      </div>
    </div>
  );
};

export default ProjectCard;