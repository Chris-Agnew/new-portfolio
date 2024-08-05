import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Seo from "../components/Seo";
import { Experience, PageInfo, Project, Social } from "../typings";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experience, projects, socials }: Props) => {
  return (
    <>
      <Seo
        title="Chris Agnew | Full-Stack React Developer | TypeScript, Next.js, Tailwind CSS, Node.js Expert"
        description="Discover Chris Agnew, a Full-Stack React Developer based in Cleveland, Ohio. Specializing in TypeScript, Next.js, Tailwind CSS, and Node.js, Chris creates exceptional websites and applications that are user friendly and fully accessible."
      />
      <link rel="icon" href="/favicon.ico" />
      <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 font-nunito-sans">
        <Header socials={socials} />

        <main>
          <section id="hero" aria-labelledby="hero-section">
            <Hero pageInfo={pageInfo} />
          </section>

          <section id="about" aria-labelledby="about-section">
            <About pageInfo={pageInfo} />
          </section>

          <section id="experience" aria-labelledby="experience-section">
            <WorkExperience experience={experience} />
          </section>

          <section id="projects" aria-labelledby="projects-section">
            <Projects projects={projects} />
          </section>

          <section id="contact" aria-labelledby="contact-section">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
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
  const socialsQuery = groq`*[_type == "social"]`;

  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);
  const experience: Experience[] = await sanityClient.fetch(experienceQuery);
  const projects: Project[] = await sanityClient.fetch(projectsQuery);
  const socials: Social[] = await sanityClient.fetch(socialsQuery);
  return {
    props: {
      pageInfo,
      experience,
      projects,
      socials,
    },
    revalidate: 60,
  };
};
