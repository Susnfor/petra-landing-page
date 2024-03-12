'use client'
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main data-theme={isDark ? 'dark' : 'light'} className=" min-h-screen bg-primary transition-all ">
      <div className="text-secondary transition-colors">
        <Navbar isDark={isDark} setIsDark={setIsDark}/>
        <Hero />
      </div>
    </main>
  );
}
