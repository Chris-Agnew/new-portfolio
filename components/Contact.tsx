import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div
      className="relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 xl:my-10 justify-evenly mx-auto items-center"
      role="form"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col space-y-10 ">
        <h4 id="contact-heading" className="text-4xl font-semibold">
          Have a project you&apos;d like to discuss?
          <br />
        </h4>
        <div className="space-y-10">
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon
              className="text-[#F7Ab0A] h-7 w-7 animate-pulse"
              aria-hidden="true"
            />
            <p className="text-2xl">Conneaut, Ohio</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon
              className="text-[#F7Ab0A] h-7 w-7 animate-pulse"
              aria-hidden="true"
            />
            <p className="text-2xl">
              <a
                href="mailto:hello@chrisagnew.codes"
                aria-label="Email Chris Agnew"
              >
                hello@chrisagnew.codes
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
