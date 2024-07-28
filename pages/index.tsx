import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Seo from "../components/Seo";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experience, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen  overflow-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 font-nunito-sans">
      <Seo
        title="Chris Agnew | Next.js and Tailwind CSS Developer"
        description="Chris Agnew is a Full-Stack Developer based out of Cleveland, Ohio. He specializes in making sites and apps with Next.js and Tailwind CSS"
      />

      <Header socials={socials} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience">
        <WorkExperience experience={experience} />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  // queries
  const experienceQuery = groq`*[_type == "experience"]{
  ...,
  technologies[]->
}`;
  const pageInfoQuery = groq`*[_type == "pageInfo"][0]`;
  const projectsQuery = groq`*[_type == "project"]{
  ...,
  technologies[]->
}`;
  const skillsQuery = groq`*[_type == "skill"]`;
  const socialsQuery = groq`*[_type == "social"]`;

  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);
  const experience: Experience[] = await sanityClient.fetch(experienceQuery);
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  const skills: Skill[] = await sanityClient.fetch(skillsQuery);
  const socials: Social[] = await sanityClient.fetch(socialsQuery);
  return {
    props: {
      pageInfo,
      experience,
      projects,
      skills,
      socials,
    },
    revalidate: 60,
  };
};
