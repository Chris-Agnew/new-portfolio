import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name is ${pageInfo?.name}`,
      "Next.js Developer",
      "Tailwind CSS Lover",
      "TypeScript Advocate",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
      role="region"
      aria-labelledby="hero-heading"
    >
      <BackgroundCircles />
      <Image
        src="/images/chris-profile.webp"
        priority
        width={200}
        height={200}
        alt="Chris Agnew headshot"
        className="rounded-full relative h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2
          id="hero-heading"
          className="text-xs md:text-sm uppercase text-gray-100 pb-2 tracking-[15px]"
        >
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton" aria-label="About section">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton" aria-label="Experience section">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton" aria-label="Skills section">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton" aria-label="Projects section">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
