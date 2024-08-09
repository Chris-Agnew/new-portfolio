import { motion } from "framer-motion";

export const ResumeDownload: React.FC = () => {
  return (
    <motion.div
      className="flex justify-center items-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      aria-label="Link to download CV PDF"
      role="region"
    >
      <a
        href="/Chris_Agnew_fullstack_react_resume.pdf"
        download="chris-agnew-fullstack-dev-resume"
        className="p-3 bg-[#F7AB0A]/80 rounded-lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download CV PDF"
      >
        Download CV PDF
      </a>
    </motion.div>
  );
};
