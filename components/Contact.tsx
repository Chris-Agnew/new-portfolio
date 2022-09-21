import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
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
            <p className="text-2xl">Willowick, Ohio</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <EnvelopeIcon className="text-[#F7Ab0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">
              <a href="mailto:hello@chrisagnew.codes">hello@chrisagnew.codes</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
