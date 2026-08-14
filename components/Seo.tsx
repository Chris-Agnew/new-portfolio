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
      canonical="https://www.chris-agnew.com/"
      openGraph={{
        url: "https://www.chris-agnew.com/",
        title: title,
        description: description,
        images: [
          {
            url: "https://www.chris-agnew.com/images/chris-agnew-og.png",
            width: 1200,
            height: 630,
            alt: "Chris Agnew: E-Commerce Operations, Onboarding & Implementation",
            type: "image/png",
          },
        ],
        site_name: "Chris Agnew LLC",
      }}
    />
  );
};

export default Seo;
