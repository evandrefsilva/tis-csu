'use client';
import Header from '../components/Header';
import Banner from '../components/Banner';
import TutelaCSU from '../components/TutelaCSU';
import SobreCSU from '../components/SobreCSU';
import Indicadores from '../components/Indicadores';
import Documentos from '../components/Documentos';
import Parceiros from '../components/Parceiros';
import Localizacao from '../components/Localizacao';
import HelpSection from '../components/HelpSection';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <Banner />
      <TutelaCSU />
      <SobreCSU />
      <Indicadores />
      <Documentos />
              <Parceiros />
        <Localizacao />
        <HelpSection />
        <FAQs />
        <Contact />
        <Footer />
        <Modal />
    </div>
  );
}
