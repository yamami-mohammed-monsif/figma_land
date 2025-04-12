"use client";

import { lazy } from "react";
import NavBar from "@/components/navigation/NavBar";
import Hero from "@/components/Hero";
import { motion } from "motion/react";
import { heroBackgroundAnimation } from "@/constants/animations";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Subscribe from "@/components/Subscribe";
import Partners from "@/components/Partners";
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen relative">
        <motion.div
          className="absolute inset-0 -z-10 bg-cover bg-center hero-background"
          aria-hidden="true"
          initial="initial"
          animate="animate"
          variants={heroBackgroundAnimation}
        >
          <div className="absolute inset-0 -z-10 bg-overlay" />
        </motion.div>
        <NavBar />
        <Hero />
      </div>
      <Features />
      <CTA />
      <Subscribe />
      <Partners />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
