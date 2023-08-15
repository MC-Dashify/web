import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import GlobalStyle from "@/components/styles/GlobalStyle";
import { dark as darkTheme, light as lightTheme } from "@/styles/themes";
import "@/styles/font-settings.css";

export default function App({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page);

  const selectedTheme = "white"; // TODO
  let theme;

  switch (selectedTheme) {
    case "dark":
      theme = darkTheme;
      break;

    case "light":
    default:
      theme = lightTheme;
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AnimatePresence mode="wait" initial={false}>
        {getLayout(<Component {...pageProps} key={router.asPath} />)}
      </AnimatePresence>
    </ThemeProvider>
  );
}
