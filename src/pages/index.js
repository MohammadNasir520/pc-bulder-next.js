import Head from "next/head";

import { Button } from "@material-tailwind/react";

import ProductCard from "@/components/ProductCard";
import NavBar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>

      <NavBar></NavBar>


      <ProductCard></ProductCard>

    </>
  );
}
