import Head from "next/head";

import styles from "../styles/Home.module.css";
const homePageContent = [
  {
    image: "seattle-hero.jpg",
    paragraph1:
      "Our little corner of the internet includes stories and adventures from our little life. We thought it would be a fun way to write down our thoughts, be a little more intentional with our actions, and look back on our memories. We are a happy bunch and are happy you’re along for the ride.",
    paragraph2:
      "We live in beautiful Seattle, WA in our new house! We are both full time corporate American (And Canadian) workers but when we have time off we use that for travel, learning, and fun hobbies. As you see the theme of our blog change over time, it reflects our learning and interests as they shift. ",
  },
  {
    image: "home-1.jpg",
    paragraph1:
      "Themes that we focus on often are health, happiness, and some damn good ice cream. We met and fell in love while being healthy and active, making gym goals, and balancing macros. With this combination of food and fitness we’ve become the healthiest versions of ourselves and would love the opportunity to share that here. ",
    paragraph2:
      "A promise we’ve made ourselves is to constantly be authentic. We will be real as we write out our every day actions and feelings. We do this because we think the world needs a little more real. ",
  },
  {
    image: "home-3.jpg",
    paragraph1:
      "Lastly, ice cream. Ice cream is a go to cheat meal for us, we regularly test out new recipes in our kitchen and try new flavours when we travel. We like giving reference to the best ice cream parlors and the hidden gems of each city. You’ll see a lot of ice cream as we continue to see new places and experiment with flavours.",
    paragraph2:
      "We’re a pretty silly bunch and hope that comes through as we write more about our time here on this earth and as we share a little more about our little life. Thank you for being here with us!",
  },
];

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Head>
          <title>The Macbell Clan</title>
          <meta
            name="image"
            property="og:image"
            content="https://www.macbellclan.com/images/siteImages/thumbnail.PNG"
          />
        </Head>

        <div className="parallax md:parallax-md lg:parallax-lg mt-1"></div>

        <div className="container w-10/12 mx-auto  sm:w-8/12 md:w-7/12 lg:w-5/12 ">
          <div>
            <p className="text-gray-500 font-light tracking-wider mb-6 mt-20 text-lg ">
              {homePageContent[0].paragraph1}
            </p>
            <p className="text-gray-500 font-light tracking-wider mb-20 text-lg">
              {homePageContent[0].paragraph2}
            </p>
          </div>
        </div>
        <div className="parallax2 md:parallax-md-2 lg:parallax-lg-2"></div>
        <div className="container w-10/12 mx-auto  sm:w-8/12 md:w-7/12 lg:w-5/12 ">
          <div>
            <p className="text-gray-500 font-light tracking-wider mb-6 mt-20 text-lg">
              {homePageContent[1].paragraph1}
            </p>
            <p className="text-gray-500 font-light tracking-wider mb-20 text-lg">
              {homePageContent[1].paragraph2}
            </p>
          </div>
        </div>
        <div className="parallax3 md:parallax-md-3"></div>
        <div className="container w-10/12 mx-auto  sm:w-8/12 md:w-7/12 lg:w-5/12 ">
          <div>
            <p className="text-gray-500 font-light tracking-wider mb-6 mt-20 text-lg">
              {homePageContent[2].paragraph1}
            </p>
            <p className="text-gray-500 font-light tracking-wider mb-20 text-lg">
              {homePageContent[2].paragraph2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
