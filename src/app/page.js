
import BestSeller from "@/components/BestSeller";
import BreakfastSlider from "@/components/BreakfastSlider";
import FeedbackSlider from "@/components/FeedbackSlider";
import PartnerLogos from "@/components/PartnerLogos";
import TeamMemberSection from "@/components/TeamMemberSection";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
<div>
  <BreakfastSlider></BreakfastSlider>
<BestSeller></BestSeller>
<FeedbackSlider></FeedbackSlider>
  <TeamMemberSection></TeamMemberSection>

  <PartnerLogos></PartnerLogos>
  <Toaster
  position="top-right"
  reverseOrder={false}
/>
</div>
  );
}
