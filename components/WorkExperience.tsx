import { useRef } from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import { useDraggable } from "react-use-draggable-scroll";

type Props = {
  experience: Experience[];
};

const WorkExperience = ({ experience }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(
    ref as React.MutableRefObject<HTMLDivElement>
  );

  return (
    <motion.div
      className="h-screen flex relative overflow-auto flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      aria-labelledby="experience-heading"
    >
      <h3
        id="experience-heading"
        className="absolute top-24 xl:top-0 uppercase tracking-[20px] text-gray-500 text-2xl hidden 2xl:flex"
      >
        Experience
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C83EC]/80 "
        {...events}
        ref={ref}
        role="list"
      >
        {experience
          .sort((a, b) => a.position - b.position)

          .map((exp, index) => (
            <ExperienceCard key={exp._id} exp={exp} position={index + 1} />
          ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
