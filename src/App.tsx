import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionIntro from "./sections/SectionIntro";
import SectionProgram from "./sections/SectionProgram";
import SectionQa from "./sections/SectionQa";
import SectionDressCode from "./sections/SectionDressCode";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex flex-col">
        <SectionIntro />
        <SectionProgram />
        <SectionQa />
        <SectionDressCode />
      </main>
      <Footer />
    </>
  );
}
