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
      className=" relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 mb-20"
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
        className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C83EC]/80"
        role="list"
        {...events}
        ref={ref}
      >
        {projects
          .sort((a, b) => a.position - b.position)

          .map((project, i) => (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-auto"
              key={i}
              role="listitem"
              aria-label={`Project ${i + 1}: ${project.title}`}
            >
              <div className="w-[300px] lg:w-[500px] h-[200px] lg:h-[400px] rounded-sm object-fill object-center ">
                <Image
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  width={500}
                  height={800}
                  loading="lazy"
                  className="rounded-sm object-fill object-center h-auto w-auto"
                />
              </div>
              <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-7xl w-full h-1/2">
                <h5 className="text-lg md:text-4xl font-semibold text-center">
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-[#8C83EC]/50"
                    aria-label={`Link to case study for project ${i + 1}`}
                  >
                    Case Study {i + 1} of {projects.length} : {project.title}
                  </a>
                </h5>
                <div className="flex justify-center items-center">
                  {project?.technologies.map((tech) => (
                    <span key={tech._id} className="px-1">
                      <Image
                        src={urlFor(tech.image).url()}
                        alt={tech.title}
                        width={35}
                        height={35}
                        aria-label={tech.title}
                        loading="lazy"
                        className="object-contain object-center h-auto w-auto"
                      />
                    </span>
                  ))}
                </div>
                {project.summary.split("\n").map((text, index) => (
                  <div
                    className="flex flex-col justify-center items-center "
                    key={index}
                  >
                    <p className="text-xs md:text-lg md:text-left lg:w-3/4">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#8C83EC]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
