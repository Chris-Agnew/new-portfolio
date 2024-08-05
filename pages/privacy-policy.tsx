import Head from "next/head";

const SmsPrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Head>
        <title>SMS Privacy Policy - Chris Agnew LLC</title>
        <meta
          name="description"
          content="SMS Privacy Policy for Chris Agnew LLC"
        />
      </Head>
      <main className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">SMS Privacy Policy</h1>
        <p className="mb-4">
          Chris Agnew LLC may disclose Personal Data and other information as
          follows:
        </p>
        <h2 className="text-xl font-semibold mb-4">
          Third Parties that Help Provide the Messaging Service
        </h2>
        <p className="mb-4">
          We will not share your opt-in to an SMS short code campaign with a
          third party for purposes unrelated to supporting you in connection
          with that campaign. We may share your Personal Data with third parties
          that help us provide the messaging service, including, but not limited
          to, platform providers, phone companies, and other vendors who assist
          us in the delivery of text messages.
        </p>
      </main>
    </div>
  );
};

export default SmsPrivacyPolicy;
