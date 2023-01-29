import Theme from "../styles/theme";
import Head from "next/head";
import { PROFILE_IMAGE_URL } from "../constants/urls";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hassan Akram - React Developer</title>
        <meta
          name="description"
          content="React Js, Next Js & React Native, JavaScript, TypeScript"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <meta
          property="og:title"
          content="Hassan Akram - React Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.BASE_URL} />
        <meta property="og:image" content={PROFILE_IMAGE_URL} />
        <meta property="og:image" content={PROFILE_IMAGE_URL} />
        <meta
          property="og:description"
          content="React Js, Next Js & React Native, JavaScript, TypeScript"
        />
        <meta property="og:site_name" content="Hassan Akram - Profile" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="298" />   
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
