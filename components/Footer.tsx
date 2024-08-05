import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[rgb(36,36,36)] text-white py-4 mt-8"
      role="contentinfo"
    >
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link
            href="https://github.com/chris-agnew"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/chris-agnew12/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="/privacy"
            className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="text-sm text-center md:text-right mt-4">
          &copy; {year} Chris Agnew LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
