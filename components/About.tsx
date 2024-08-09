import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { ResumeDownload } from "./ResumeDownload";
import Image from "next/image";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative mb-12 text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center"
        aria-label="about-section"
        role="region"
      >
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="-mb-20 md:mb-0 flex-shrink-0 w-full h-full md:justify-center md:items-center  object-cover rounded-full md:rounded-lg xl:w-[500px] xl:h-[500px] hidden md:flex"
        >
          <Image
            src={urlFor(pageInfo?.heroImage).url()}
            alt="Photo of Chris Agnew in the office"
            loading="lazy"
            width={300}
            height={200}
            className="rounded-lg relative mx-auto object-cover"
          />
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
          <h2 className="text-lg md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#8C83EC]/50">little</span>{" "}
            background
          </h2>
          <p className="text-base ">{pageInfo?.backgroundInformation}</p>
        </div>
      </motion.div>
      <ResumeDownload />
    </>
  );
};

export default About;
