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
        url: "https:/chrisagnew.codes",
        title: "Chris Agnew | Next.js and Tailwind CSS Developer",
        description: description,
        images: [
          {
            url: "/images/chris-agnew-logo.webp",
            width: 800,
            height: 600,
            alt: "Chris Agnew Logo",
            type: "image/jpeg",
          },
        ],
        site_name: "Chris Agnew",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
