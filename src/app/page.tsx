import Hero from "@/components/PortalBrilho/Hero";
import PainCycle from "@/components/PortalBrilho/PainCycle";
import Deliverables from "@/components/PortalBrilho/Deliverables";
import SocialProof from "@/components/PortalBrilho/SocialProof";
import AboutMaster from "@/components/PortalBrilho/AboutMaster";
import Pricing from "@/components/PortalBrilho/Pricing";
import Footer from "@/components/PortalBrilho/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <PainCycle />
      <Deliverables />
      <AboutMaster />
      <Pricing />
      <Footer />
    </main>
  );
}
