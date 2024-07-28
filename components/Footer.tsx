import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Link href="#hero">
      <footer
        className="sticky bottom-5 w-full cursor-pointer"
        role="contentinfo"
      >
        <div className="flex justify-center items-center">
          <Image
            src="/images/chris-agnew-logo.webp"
            height={50}
            width={50}
            alt="Chris Agnew logo"
            className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
            aria-label="Back to top"
          />
        </div>
      </footer>
    </Link>
  );
};

export default Footer;
