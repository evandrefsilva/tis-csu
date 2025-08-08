'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Função para detectar seção ativa durante o scroll
  const handleScroll = () => {
    const sections = ['indicadores', 'documentos', 'parceiros', 'faqs', 'contato'];
    const headerHeight = 80;
    
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= headerHeight + 100 && rect.bottom >= headerHeight + 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  // Adicionar listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Fechar menu mobile se estiver aberto
      setIsMenuOpen(false);
      
      // Adicionar classe de loading ao link clicado
      const clickedLink = e.currentTarget;
      clickedLink.classList.add('opacity-50');
      
      // Calcular offset para o header fixo
      const headerHeight = 80; // Altura aproximada do header
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      // Scroll suave com callback
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Remover classe de loading após a animação
      setTimeout(() => {
        clickedLink.classList.remove('opacity-50');
      }, 1000);
      
      // Adicionar highlight temporário na seção de destino
      targetElement.classList.add('ring-2', 'ring-csu-yellow', 'ring-opacity-50');
      setTimeout(() => {
        targetElement.classList.remove('ring-2', 'ring-csu-yellow', 'ring-opacity-50');
      }, 2000);
    }
  };
  return (
    <header className="bg-csu-red text-white shadow-lg sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#indicadores" className={`text-csu-red transition-colors ${activeSection === 'indicadores' ? 'bg-csu-red/10' : ''}`} onClick={(e) => handleSmoothScroll(e, 'indicadores')}>Indicadores</a></li>
              <li><a href="#documentos" className={`text-csu-red transition-colors ${activeSection === 'documentos' ? 'bg-csu-red/10' : ''}`} onClick={(e) => handleSmoothScroll(e, 'documentos')}>Documentos</a></li>
              <li><a href="#parceiros" className={`text-csu-red transition-colors ${activeSection === 'parceiros' ? 'bg-csu-red/10' : ''}`} onClick={(e) => handleSmoothScroll(e, 'parceiros')}>Parceiros</a></li>
              <li><a href="#faqs" className={`text-csu-red transition-colors ${activeSection === 'faqs' ? 'bg-csu-red/10' : ''}`} onClick={(e) => handleSmoothScroll(e, 'faqs')}>FAQs</a></li>
              <li><a href="#contato" className={`text-csu-red transition-colors ${activeSection === 'contato' ? 'bg-csu-red/10' : ''}`} onClick={(e) => handleSmoothScroll(e, 'contato')}>Contato</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-csu-yellow rounded-full flex items-center justify-center">
              <span className="text-csu-black font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold">CSU</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><a href="#indicadores" className={`transition-colors ${activeSection === 'indicadores' ? 'bg-csu-yellow/20 text-csu-yellow' : ''}`} onClick={(e) => handleSmoothScroll(e, 'indicadores')}>Indicadores</a></li>
            <li><a href="#documentos" className={`transition-colors ${activeSection === 'documentos' ? 'bg-csu-yellow/20 text-csu-yellow' : ''}`} onClick={(e) => handleSmoothScroll(e, 'documentos')}>Documentos</a></li>
            <li><a href="#parceiros" className={`transition-colors ${activeSection === 'parceiros' ? 'bg-csu-yellow/20 text-csu-yellow' : ''}`} onClick={(e) => handleSmoothScroll(e, 'parceiros')}>Parceiros</a></li>
            <li><a href="#faqs" className={`transition-colors ${activeSection === 'faqs' ? 'bg-csu-yellow/20 text-csu-yellow' : ''}`} onClick={(e) => handleSmoothScroll(e, 'faqs')}>FAQs</a></li>
            <li><a href="#contato" className={`transition-colors ${activeSection === 'contato' ? 'bg-csu-yellow/20 text-csu-yellow' : ''}`} onClick={(e) => handleSmoothScroll(e, 'contato')}>Contato</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-csu-yellow text-csu-black hover:bg-csu-yellow/90 border-none">
            Plataforma do CSU
          </button>
        </div>
      </div>
    </header>
  );
} 