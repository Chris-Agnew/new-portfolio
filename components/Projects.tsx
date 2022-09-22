import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-fulll justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0, y: -300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects
          .sort((a, b) => {
            return a._createdAt > b._createdAt ? -1 : 1;
          })
          .map((project, i) => (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              key={i}
            >
              <Image
                src={urlFor(project.image).url()}
                alt=""
                width={500}
                height={300}
                className="rounded-sm object-cover "
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="underline decoration-[#F7AB0A]/50">
                      Case Study {i + 1} of {projects.length} : {project.title}
                    </span>
                  </a>
                </h4>
                <div className="flex justify-center items-center">
                  {project?.technologies.map((tech, i) => (
                    <Image
                      src={urlFor(tech.image).url()}
                      alt=""
                      width={50}
                      height={50}
                      key={tech._id}
                      className="h-5 w-5 space-x-2 px-2 mx-2"
                    />
                  ))}
                </div>

                <p className="text-lg text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
