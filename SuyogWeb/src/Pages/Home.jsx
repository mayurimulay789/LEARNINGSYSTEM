import Hero from "../Components/Hero"
import KeyBenefits from "../Components/Key-Benefits"
import OurCommitment from "../Components/OurCommitment"
import OurExpertise from "../Components/OurExperties"
import OurStory from "../Components/OurStory"
import Testimonials from "../Components/Testimonials"

export default function Home() {
  return (
    <div>
      <Hero />
      <OurStory/>
      <OurCommitment/>
      <OurExpertise/>
      <KeyBenefits />
      <Testimonials />
    </div>
  )
}
