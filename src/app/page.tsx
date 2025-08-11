"use client";
import { useEffect } from "react";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";

export default function Home() {
  //   useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, []);
    return <div className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <LogoTicker/>
      <Introduction/>

    </div>;
}
