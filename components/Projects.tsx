import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { useDraggable } from "react-use-draggable-scroll";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0, y: -300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      role="region"
      aria-labelledby="projects-heading"
    >
      <h3
        id="projects-heading"
        className="absolute top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
      >
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
        role="list"
        {...events}
        ref={ref}
      >
        {projects
          .sort((a, b) => (a._updatedAt > b._updatedAt ? -1 : 1))
          .map((project, i) => (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              key={i}
              role="listitem"
              aria-label={`Project ${i + 1}: ${project.title}`}
            >
              <Image
                src={urlFor(project.image).url()}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-sm object-cover"
              />
              <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-7xl">
                <h4 className="text-lg md:text-4xl font-semibold text-center">
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-[#F7AB0A]/50"
                    aria-label={`Link to case study for project ${i + 1}`}
                  >
                    Case Study {i + 1} of {projects.length} : {project.title}
                  </a>
                </h4>
                <div className="flex justify-center items-center">
                  {project?.technologies.map((tech) => (
                    <span key={tech._id} className="px-2">
                      <Image
                        src={urlFor(tech.image).url()}
                        alt={tech.title}
                        width={50}
                        height={50}
                        aria-label={tech.title}
                      />
                    </span>
                  ))}
                </div>
                {project.summary.split("\n").map((text, index) => (
                  <p className="text-xs md:text-lg md:text-left" key={index}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
