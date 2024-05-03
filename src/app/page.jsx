import Image from "next/image";
import About from "../components/About";

// Styles
import "./page.scss";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ContactUs />
    </main>
  );
}
