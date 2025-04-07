import React from "react";
import NavBar from "@/components/navigation/NavBar";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col h-screen relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center hero-background"
          aria-hidden="true"
        >
          <div className="absolute inset-0 -z-10 bg-overlay" />
        </div>
        <NavBar />
      </div>
    </main>
  );
};

export default HomePage;
