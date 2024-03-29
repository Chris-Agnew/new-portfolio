import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Calendly from "./Calendly";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Have a project you&apos;d like to discuss?
          <span className="decoration-[#F7AB0A]/50 underline px-2">
            Lets Talk.
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex justify-center items-center space-x-5">
            <MapPinIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Fredericksburg, VA</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">
              <a href="mailto:hello@chrisagnew.codes">hello@chrisagnew.codes</a>{" "}
            </p>
          </div>
          <Calendly url="https://calendly.com/chris-agnew-1/30min" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
