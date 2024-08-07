import type { GetStaticProps } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Seo from "../components/Seo";
import { Experience, PageInfo, Project, Social } from "../typings";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";
import Footer from "../components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experience, projects, socials }: Props) => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-M9J75R27" />

      <Seo
        title="Chris Agnew | Full-Stack React Developer "
        description="Discover Chris Agnew, a Full-Stack Next.js Developer based in Cleveland, Ohio who creates high performing websites/web apps that are user friendly and accessible."
      />
      <link rel="icon" href="/favicon.ico" />
      <main className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C83EC]/80 font-nunito-sans">
        <Header socials={socials} />

        <section id="hero" aria-label="Hero section" role="region">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" aria-label="About section" role="region">
          <About pageInfo={pageInfo} />
        </section>

        <section id="experience" aria-label="Experience section" role="region">
          <WorkExperience experience={experience} />
        </section>

        <section id="projects" aria-label="projects-section" role="region">
          <Projects projects={projects} />
        </section>

        <section id="contact" aria-label="contact-section" role="region">
          <Contact pageInfo={pageInfo} />
        </section>
        <Footer />
        <BackToTop />
      </main>
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
