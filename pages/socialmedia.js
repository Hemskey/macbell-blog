import Head from "next/head";
import SocialMedia from "../components/layout/SocialMedia";

function socialmedia() {
  return (
    <>
      <Head>
        <title>Social Media</title>
        <meta name="description" content="Social Media" />
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-xl tracking-widest text-gray-700 font-light mt-10">
          INSTAGRAM
        </h1>
        <hr className="w-7/12 my-10"></hr>
        <SocialMedia
          name="Kimberley Campbell"
          image="/images/siteImages/beach-hero.jpg"
        />

        <SocialMedia
          name="Joseph MacDonald"
          image="/images/siteImages/beach-hero.jpg"
        />
      </div>
    </>
  );
}

export default socialmedia;
