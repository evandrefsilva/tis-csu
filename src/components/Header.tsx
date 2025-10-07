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
      targetElement.classList.add('ring-2', 'ring-csu-red', 'ring-opacity-30');
      setTimeout(() => {
        targetElement.classList.remove('ring-2', 'ring-csu-red', 'ring-opacity-30');
      }, 2000);
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white text-black sticky top-0 z-50 border-t border-gray-300 border-b-2 border-b-csu-red">
      <div className="navbar flex flex-row justify-between container mx-auto px-4 py-2">
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <div className="dropdown lg:hidden">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost text-black hover:bg-csu-red/10"
              onClick={toggleMobileMenu}
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </div>
            <ul 
              tabIndex={0} 
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-lg w-56 border border-gray-100 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <li>
                <a 
                  href="#indicadores" 
                  className={`text-csu-black hover:bg-csu-red/10 hover:text-csu-red transition-all duration-200 rounded-md ${
                    activeSection === 'indicadores' ? 'bg-csu-red/10 text-csu-red font-medium' : ''
                  }`} 
                  onClick={(e) => handleSmoothScroll(e, 'indicadores')}
                >
                  Indicadores
                </a>
              </li>
              <li>
                <a 
                  href="#documentos" 
                  className={`text-csu-black hover:bg-csu-red/10 hover:text-csu-red transition-all duration-200 rounded-md ${
                    activeSection === 'documentos' ? 'bg-csu-red/10 text-csu-red font-medium' : ''
                  }`} 
                  onClick={(e) => handleSmoothScroll(e, 'documentos')}
                >
                  Editais
                </a>
              </li>
              <li>
                <a 
                  href="#parceiros" 
                  className={`text-csu-black hover:bg-csu-red/10 hover:text-csu-red transition-all duration-200 rounded-md ${
                    activeSection === 'parceiros' ? 'bg-csu-red/10 text-csu-red font-medium' : ''
                  }`} 
                  onClick={(e) => handleSmoothScroll(e, 'parceiros')}
                >
                  Parceiros
                </a>
              </li>
              <li>
                <a 
                  href="#faqs" 
                  className={`text-csu-black hover:bg-csu-red/10 hover:text-csu-red transition-all duration-200 rounded-md ${
                    activeSection === 'faqs' ? 'bg-csu-red/10 text-csu-red font-medium' : ''
                  }`} 
                  onClick={(e) => handleSmoothScroll(e, 'faqs')}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className={`text-csu-black hover:bg-csu-red/10 hover:text-csu-red transition-all duration-200 rounded-md ${
                    activeSection === 'contato' ? 'bg-csu-red/10 text-csu-red font-medium' : ''
                  }`} 
                  onClick={(e) => handleSmoothScroll(e, 'contato')}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Logo */}
          <div className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 bg-csu-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-csu-black">CSU</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navbar-center flex flex-row items-center gap-3">
          <ul className="menu menu-horizontal px-1 flex flex-row items-center gap-6">
            <li>
              <a 
                href="#indicadores" 
                className={`text-csu-black hover:text-csu-red transition-colors ${
                  activeSection === 'indicadores' ? 'text-csu-red font-medium' : ''
                }`} 
                onClick={(e) => handleSmoothScroll(e, 'indicadores')}
              >
                Indicadores
              </a>
            </li>
            <li>
              <a 
                href="#documentos" 
                className={`text-csu-black hover:text-csu-red transition-colors ${
                  activeSection === 'documentos' ? 'text-csu-red font-medium' : ''
                }`} 
                onClick={(e) => handleSmoothScroll(e, 'documentos')}
              >
                Editais
              </a>
            </li>
            <li>
              <a 
                href="#parceiros" 
                className={`text-csu-black hover:text-csu-red transition-colors ${
                  activeSection === 'parceiros' ? 'text-csu-red font-medium' : ''
                }`} 
                onClick={(e) => handleSmoothScroll(e, 'parceiros')}
              >
                Parceiros
              </a>
            </li>
            <li>
              <a 
                href="#faqs" 
                className={`text-csu-black hover:text-csu-red transition-colors ${
                  activeSection === 'faqs' ? 'text-csu-red font-medium' : ''
                }`} 
                onClick={(e) => handleSmoothScroll(e, 'faqs')}
              >
                FAQs
              </a>
            </li>
            <li>
              <a 
                href="#contato" 
                className={`text-csu-black hover:text-csu-red transition-colors ${
                  activeSection === 'contato' ? 'text-csu-red font-medium' : ''
                }`} 
                onClick={(e) => handleSmoothScroll(e, 'contato')}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        
        {/* CTA Button */}
        <div className="navbar-end">
          <button className="bg-csu-red text-white hover:bg-csu-red/90 rounded-lg shadow-sm px-6 py-2 font-medium transition-all duration-200">
            Plataforma do CSU
          </button>
        </div>
      </div>
    </header>
  );
} 