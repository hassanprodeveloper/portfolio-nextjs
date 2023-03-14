import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import CustomHead from "@/src/CustomHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <CustomHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
