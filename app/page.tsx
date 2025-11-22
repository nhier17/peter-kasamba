import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Impact } from "@/components/Impact";
import { Projects } from "@/components/Projects";
import { CTA } from "@/components/CTA";
import { SupportMission } from "@/components/SupportMission";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="root-container">
        <Mission />
        <Projects />
        <Impact />
        <SupportMission />
        <CTA />
      </section>
    </>
  );
}
