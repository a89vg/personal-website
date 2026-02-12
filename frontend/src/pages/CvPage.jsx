import useHashNavigation from '../hooks/useHashNavigation';
import CvHero from '../components/sections/cv/CvHero';
import CareerTimeline from '../components/sections/cv/CareerTimeline';
import CompanyDeepDive from '../components/sections/cv/CompanyDeepDive';
import Technologies from '../components/sections/Technologies';
import Certifications from '../components/sections/Certifications';

export default function CvPage() {
  useHashNavigation();

  return (
    <>
      <CvHero />
      <Technologies />
      <CareerTimeline />
      <CompanyDeepDive />
      <Certifications />
    </>
  );
}
