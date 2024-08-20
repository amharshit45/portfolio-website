import { AboutMe } from "@/components/aboutme";
import { CodingStats } from "@/components/codingStats";
import { Contact } from "@/components/contact";
import { Display, DisplayContent, RefTags } from "@/components/display";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Display />
      <AboutMe />
      <CodingStats />
      <Projects />
      <Contact />
      <Footer />
    </>  
  );
}
