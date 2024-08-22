import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
  return (
    <div
      className="relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 xl:my-10 justify-evenly mx-auto items-center"
      role="form"
      aria-label="contact-heading"
    >
      <div className="flex flex-col space-y-10 justify-center items-center">
        <h6 id="contact-heading" className="text-4xl font-semibold">
          Want to hire me? Let's talk!
          <br />
        </h6>
        <div className="space-y-10 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon
              className="text-[#8C83EC] h-7 w-7 animate-pulse"
              aria-hidden="true"
            />
            <p className="text-2xl">Remote from Ohio</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon
              className="text-[#8C83EC] h-7 w-7 animate-pulse"
              aria-hidden="true"
            />
            <div className="text-2xl">
              <a
                href="mailto:hello@chrisagnew.codes"
                aria-label="Email Chris Agnew"
              >
                chris@chrisagnew.codes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
