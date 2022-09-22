import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  exp: Experience;
};

const ExperienceCard = ({ exp }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[360px] md:w-[600px] xl:w-[900px] bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center">
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
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-light">{exp.jobTitle}</h4>
        <p className="font-light text-lg md:text-2xl mt-1">{exp.company}</p>
        <div className="flex space-x-2 my-2">
          {exp.technologies.map((tech) => (
            <Image
              key={tech._id}
              src={urlFor(tech.image).url()}
              width={50}
              height={50}
              alt={tech.title}
              className=" object-cover object-center px-3"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
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
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {exp.points &&
            exp.points.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
