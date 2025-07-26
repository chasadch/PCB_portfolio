// @flow strict

import { pcbProjects } from "@/utils/data/pcb-projects";
import Image from "next/image";
import { FaMicrochip } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import GlowCard from "../../helper/glow-card";

function PCBProjects() {
  return (
    <div id="pcb-projects" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            PCB Design Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pcbProjects.map(project => (
            <GlowCard key={project.id} identifier={`pcb-project-${project.id}`}>
              <div className="p-6 relative">
                <Image
                  src="/blur-23.svg"
                  alt="Hero"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                
                {/* Project Header */}
                <div className="flex items-start gap-x-4 mb-4">
                  <div className="text-[#16f2b3] transition-all duration-300 hover:scale-125 mt-1">
                    <MdDeveloperBoard size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-medium mb-2 text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Project Images */}
                <div className="mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.schematicImage && (
                      <div className="relative">
                        <h4 className="text-sm font-medium text-[#16f2b3] mb-2">Schematic Design</h4>
                        <div className="relative h-48 rounded-lg overflow-hidden border border-[#1b2c68a0]">
                          <Image
                            src={project.schematicImage}
                            alt={`${project.name} Schematic`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    )}
                    {project.pcbImage && (
                      <div className="relative">
                        <h4 className="text-sm font-medium text-[#16f2b3] mb-2">PCB Layout</h4>
                        <div className="relative h-48 rounded-lg overflow-hidden border border-[#1b2c68a0]">
                          <Image
                            src={project.pcbImage}
                            alt={`${project.name} PCB`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-violet-600 to-pink-500 rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Key Specifications</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {project.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <FaMicrochip className="text-[#16f2b3] mr-2 mt-1 flex-shrink-0" size={10} />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PCBProjects;
