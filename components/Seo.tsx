import { NextSeo } from "next-seo";

type Props = {
  title: string;
  description: string;
};

const Seo = ({ title, description }: Props) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical="https://chrisagnew.codes"
      openGraph={{
        url: "https://chrisagnew.codes",
        title: title,
        description: description,
        images: [
          {
            url: "/images/chris-agnew-og.gif",
            width: 1200,
            height: 630,
            alt: "Chris Agnew LLC Company Logo",
            type: "image/jpeg",
          },
        ],
        site_name: "Chris Agnew LLC | Full-Stack React Developer",
      }}
    />
  );
};

export default Seo;
