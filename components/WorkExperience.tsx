import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experience: Experience[];
};

const WorkExperience = ({ experience }: Props) => {
  return (
    <motion.div
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl hidden 2xl:flex">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience
          .sort((a, b) => {
            return a._updatedAt > b._updatedAt ? -1 : 1;
          })
          .map((experience) => (
            <ExperienceCard key={experience._id} exp={experience} />
          ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
