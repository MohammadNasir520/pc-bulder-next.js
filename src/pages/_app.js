import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";

import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavBar></NavBar>
        <Component {...pageProps} />
        <Toaster />
        <Footer></Footer>
      </Provider>
    </ThemeProvider>
  );
}