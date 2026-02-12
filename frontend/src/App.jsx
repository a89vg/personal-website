import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ServicesPage from './pages/ServicesPage';
import CvPage from './pages/CvPage';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/cv" element={<CvPage />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
