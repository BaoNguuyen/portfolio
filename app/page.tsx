"use client";

import dynamic from "next/dynamic";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
