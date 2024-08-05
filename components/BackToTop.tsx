import Image from "next/image";
import Link from "next/link";

const BackToTop = () => {
  return (
    <div
      className="hidden sticky bottom-10 md:flex justify-end w-11/12 cursor-pointer "
      role="contentinfo"
    >
      <Link href="#hero" aria-label="Back to top">
        <Image
          src="/images/chris-agnew-logo.webp"
          height={50}
          width={50}
          alt="Chris Agnew logo"
          className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
        />
      </Link>
    </div>
  );
};

export default BackToTop;
