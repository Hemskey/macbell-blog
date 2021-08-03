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
          image="/images/siteImages/kim.jpg"
          link="https://www.instagram.com/hellomariko/"
        />

        <SocialMedia
          name="Joe MacDonald"
          image="/images/siteImages/joe.jpg"
          position="80% 20%"
          link="https://www.instagram.com/hemskey_/"
        />
      </div>
    </>
  );
}

export default socialmedia;
