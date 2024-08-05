import Seo from "../components/Seo";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Seo
        title="Chris Agnew LLC | Privacy Policy"
        description="Learn about the SMS Privacy Policy of Chris Agnew LLC. Discover how we handle and disclose Personal Data and other information."
      />
      <link rel="icon" href="/favicon.ico" />
      <main
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
        role="main"
      >
        <h1 className="text-2xl font-bold mb-6" tabIndex={0}>
          Chris Agnew LLC Privacy Policy
        </h1>
        <section className="mb-8" aria-labelledby="general-privacy-policy">
          <h2
            id="general-privacy-policy"
            className="text-xl font-semibold mb-4"
            tabIndex={0}
          >
            General Privacy Policy
          </h2>
          <p className="mb-4">
            At Chris Agnew LLC, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and disclose information about you when you use
            our services.
          </p>
          <p className="mb-4">
            We may collect personal information such as your name, email
            address, phone number, and other contact details when you interact
            with us. This information is used to provide and improve our
            services, communicate with you, and comply with legal obligations.
          </p>
          <p className="mb-4">
            We do not sell or share your personal information with third parties
            for their own marketing purposes without your consent. We may share
            your information with trusted third-party service providers who
            assist us in delivering our services.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sms-privacy-policy">
          <h2
            id="sms-privacy-policy"
            className="text-xl font-semibold mb-4"
            tabIndex={0}
          >
            SMS Privacy Policy
          </h2>
          <p className="mb-4">
            Chris Agnew LLC may disclose Personal Data and other information as
            follows:
          </p>
          <h3 className="text-lg font-semibold mb-4" tabIndex={0}>
            Third Parties that Help Provide the Messaging Service
          </h3>
          <p className="mb-4">
            We will not share your opt-in to an SMS short code campaign with a
            third party for purposes unrelated to supporting you in connection
            with that campaign. We may share your Personal Data with third
            parties that help us provide the messaging service, including, but
            not limited to, platform providers, phone companies, and other
            vendors who assist us in the delivery of text messages.
          </p>
        </section>

        <section aria-labelledby="accessibility-policy">
          <h2
            id="accessibility-policy"
            className="text-xl font-semibold mb-4"
            tabIndex={0}
          >
            Accessibility Policy
          </h2>
          <p className="mb-4">
            Chris Agnew LLC is committed to ensuring digital accessibility for
            people with disabilities. We are continually improving the user
            experience for everyone and applying the relevant accessibility
            standards.
          </p>
          <p className="mb-4">
            If you experience any difficulty in accessing any part of this
            website, please feel free to call/text me at{" "}
            <Link className="text-purple-600 underline" href="tel:4405306474">
              (440) 530-6474
            </Link>{" "}
            or email us at{" "}
            <Link
              className="text-purple-600 underline"
              href="mailto:accessibility@chrisagnew.codes"
            >
              accessibility@chrisagnew.codes
            </Link>
            . We will work with you to provide the information, item, or
            transaction you seek through a communication method that is
            accessible for you, consistent with applicable law.
          </p>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
