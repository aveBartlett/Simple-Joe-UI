import "../styles/index.css";
import { MoralisProvider } from "react-moralis";
import { wrapper } from "../redux/store";

const APP_ID = "PHXVxBWtBBNYEuTCkUbUYL2dbYIrDlpgf8S6WIlm";
const SERVER_URL = "https://ygigwjndfimj.usemoralis.com:2053/server";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default wrapper.withRedux(MyApp);
