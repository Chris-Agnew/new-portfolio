import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
  return (
    <div
      className="relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 xl:my-10 justify-evenly mx-auto items-center"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col space-y-10 justify-center items-center">
        <div className="space-y-4 text-center">
          <h2 id="contact-heading" className="text-4xl font-semibold">
            Get in touch
          </h2>
          <p className="text-base text-gray-300 max-w-xl">
            Open to onboarding, implementation, and e-commerce operations roles.
            Remote.
          </p>
        </div>
        <div className="space-y-10 flex flex-col justify-center items-center">
          {pageInfo?.address && (
            <div className="flex justify-center items-center space-x-5">
              <MapPinIcon
                className="text-[#8C83EC] h-7 w-7 animate-pulse"
                aria-hidden="true"
              />
              <p className="text-2xl">{pageInfo.address}</p>
            </div>
          )}
          {pageInfo?.email && (
            <div className="flex justify-center items-center space-x-5">
              <EnvelopeIcon
                className="text-[#8C83EC] h-7 w-7 animate-pulse"
                aria-hidden="true"
              />
              <div className="text-2xl">
                <a
                  href={`mailto:${pageInfo.email}`}
                  className="underline decoration-[#8C83EC]/50"
                >
                  {pageInfo.email}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
