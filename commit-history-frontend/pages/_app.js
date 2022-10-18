import "../styles/globals.css";

import NonSSRWrapper from "../components/NonSSRWrapper";
import DefaultLayout from "../components/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <NonSSRWrapper>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </NonSSRWrapper>
  );
}

export default MyApp;
