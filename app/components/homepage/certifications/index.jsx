// @flow strict

import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import GlowCard from "../../helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(certification => (
            <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
              <div className="p-4 relative">
                <Image
                  src="/blur-23.svg"
                  alt="Hero"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="flex items-start gap-x-4">
                  <div className="text-[#16f2b3] transition-all duration-300 hover:scale-125 mt-1">
                    <MdVerified size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium mb-2 text-white">
                      {certification.title}
                    </h3>
                    <p className="text-sm text-[#16f2b3] mb-2">
                      {certification.issuer} • {certification.year}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {certification.description}
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
