"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  exp: Experience;
  position: number;
};

const ExperienceCard = ({ exp, position }: Props) => {
  return (
    <div
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full max-w-[360px] md:max-w-[600px] xl:max-w-[900px] bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 min-h-[500px] md:min-h-[600px] xl:min-h-[700px] overflow-auto mx-4"
      aria-label={`experience-${exp.company}`}
      aria-posinset={position}
      role="listitem"
    >
      <motion.div
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
        className="w-32 h-32 rounded-full  object-cover xl:object-cover object-center "
      >
        <div className="flex justify-center items-center ">
          <Image
            src={urlFor(exp.companyImage).url()}
            alt={`${exp.company} logo`}
            width={200}
            height={200}
            className="object-fill object-center  "
            loading="lazy"
          />
        </div>
      </motion.div>
      <div className="px-0 md:px-10">
        <h3
          id={`experience-${exp._id}-title`}
          className="text-md md:text-2xl font-semibold text-center"
        >
          {exp.jobTitle}
        </h3>
        <h4 className="font-light text-sm md:text-xl mt-1 text-center">
          {exp.company}
        </h4>
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
                loading="lazy"
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
        <ul
          className="list-disc space-y-1 xl:space-y-4 ml-5 text-xs md:text-lg"
          role="list"
        >
          {exp.points &&
            exp.points.map((point: string, i: number) => (
              <li key={i} role="listitem">
                {point}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
