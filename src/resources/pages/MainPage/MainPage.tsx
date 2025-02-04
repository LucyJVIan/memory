import {
    AboutSection,
    FAQSection,
    HeroSection,
    HowItWorksSection,
    HowToBuySection,
    MissionSection,
    PrinciplesSection,
    RoadmapSection,
} from "@/resources/components";
import { memo } from "react";

export const MainPage = memo(() => {
    return (
        <div>
            <HeroSection />

            <MissionSection />

            <AboutSection />

            <RoadmapSection />

            <PrinciplesSection />
            
            <HowItWorksSection />

            <FAQSection />
            
            <HowToBuySection />

        </div>
    );
});

MainPage.displayName = "MainPage";
