import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header
      className=" top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 items-start xl:items-center"
      role="banner"
    >
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {socials.map((social) => (
          <SocialIcon
            url={social.link}
            fgColor="white"
            bgColor="transparent"
            key={social._id}
            aria-label={`Link to ${social.title}`}
          />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        aria-label="Contact section"
      >
        <SocialIcon
          className="cursor-pointer"
          fgColor="white"
          bgColor="transparent"
          aria-label="hidden"
          network="email"
          url="#contact"
        />
        <Link href="#contact">
          <p
            className="uppercase hidden md:inline-flex text-sm text-gray-100"
            aria-label="Get in Touch"
          >
            Get in Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
