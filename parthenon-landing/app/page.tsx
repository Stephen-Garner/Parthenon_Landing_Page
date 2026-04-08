import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Membership from "@/components/Membership";
import Founders from "@/components/Founders";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Experience />
        <Membership />
        <Founders />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
