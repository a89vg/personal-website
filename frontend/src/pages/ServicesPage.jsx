import useHashNavigation from '../hooks/useHashNavigation';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Technologies from '../components/sections/Technologies';
import Consulting from '../components/sections/Consulting';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

export default function ServicesPage() {
  useHashNavigation();

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Consulting />
      <Portfolio />
      <Contact />
    </>
  );
}
