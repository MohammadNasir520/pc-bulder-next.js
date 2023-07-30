import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/Navbar";
import "@/styles/globals.css";

import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </ThemeProvider>
  );
}