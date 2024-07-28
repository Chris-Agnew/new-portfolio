import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  exp: Experience;
};

const ExperienceCard = ({ exp }: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[360px] md:w-[600px] xl:w-[900px] bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 h-full overflow-y-auto"
      aria-labelledby={`experience-${exp._id}-title`}
      role="article"
    >
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(exp.companyImage).url()}
        alt={`${exp.company} logo`}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover xl:object-contain object-center"
      />
      <div className="px-0 md:px-10">
        <h4
          id={`experience-${exp._id}-title`}
          className="text-md md:text-4xl font-semibold text-center"
        >
          {exp.jobTitle}
        </h4>
        <p className="font-light text-sm md:text-2xl mt-1 text-center">
          {exp.company}
        </p>
        <div
          className="flex justify-center space-x-2 my-2"
          role="group"
          aria-label="Technologies used"
        >
          {exp.technologies.map((tech) => (
            <span key={tech._id} className="px-2">
              <Image
                src={urlFor(tech.image).url()}
                width={50}
                height={50}
                alt={tech.title}
                className="object-contain object-center"
              />
            </span>
          ))}
        </div>
        <p className="uppercase py-5 text-center text-gray-300">
          {new Date(exp.dateStarted).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
          })}
          -
          {exp.isCurrentlyWorkingHere
            ? "Present"
            : new Date(exp.dateEnded).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
              })}
        </p>
        <ul className="list-disc space-y-4 ml-5 md:text-lg" role="list">
          {exp.points &&
            exp.points.map((point: string, i: number) => (
              <li key={i} role="listitem">
                {point}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
