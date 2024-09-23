import React from "react";

import StartedSection from "@/components/ui/StartedSection";
import FeaturesSection from "@/components/ui/FeaturesSection";
import FeatureAppSection from "@/components/ui/FeaturesAppSection";
import TutorialSection from "@/components/ui/TutorialSection";
import CommentsSection from "@/components/ui/CommentsSection";
import ServicesSection from "@/components/ui/ServicesSection";
import PlansSection from "@/components/ui/PlansSection";
import ContactSection from "@/components/ui/ContactSection";
import ClientSection from "@/components/ui/ClientSection";
import BuildingSection from "@/components/ui/BuildingSection";
import ChatButton from "@/components/ui/ChatButton";

const LandingPage = () => {
  return (
    <>
      <StartedSection
        title="Empezar con UrbanoAcceso"
        subtitle="Solución integral para administrar urbanizaciones y condominios"
      />
      <FeaturesSection />
      <BuildingSection />
      <FeatureAppSection />
      <TutorialSection />
      {/* <ServicesSection /> */}
      <PlansSection />
      <CommentsSection />
      <ContactSection />
      {/* <ClientSection /> */}
      <ChatButton />
    </>
  );
};

export default LandingPage;
