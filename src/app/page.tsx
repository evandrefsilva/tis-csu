'use client';
import Image from "next/image";


export default function Home() {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header/Menu */}
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
                <li><a href="#indicadores" className="text-csu-red">Indicadores</a></li>
                <li><a href="#documentos" className="text-csu-red">Documentos</a></li>
                <li><a href="#parceiros" className="text-csu-red">Parceiros</a></li>
                <li><a href="#faqs" className="text-csu-red">FAQs</a></li>
                <li><a href="#contato" className="text-csu-red">Contato</a></li>
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
              <li><a href="#indicadores">Indicadores</a></li>
              <li><a href="#documentos">Documentos</a></li>
              <li><a href="#parceiros">Parceiros</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn bg-csu-yellow text-csu-black hover:bg-csu-yellow/90 border-none">
              Cadastrar-se
            </button>
          </div>
        </div>
      </header>

            {/* Banner/Hero Section - Otimizado */}
      <section className="relative min-h-screen bg-gradient-to-br from-csu-red via-red-700 to-red-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-csu-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-csu-yellow/10 rounded-full blur-2xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-8 h-8 bg-csu-yellow rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <div className="w-6 h-6 bg-white rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
          <div className="w-4 h-4 bg-csu-yellow rounded-full opacity-50"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-csu-yellow/20 backdrop-blur-sm rounded-full px-4 py-2 border border-csu-yellow/30">
                <div className="w-2 h-2 bg-csu-yellow rounded-full animate-pulse"></div>
                <span className="text-csu-yellow font-semibold text-sm">Sistema Oficial do Governo</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Portal do
                  <span className="block text-csu-yellow">Cadastro Social</span>
                  <span className="block">Único</span>
                </h1>
                <p className="text-lg lg:text-xl opacity-90 max-w-2xl leading-relaxed">
                  Sistema de informação para identificação, registo e classificação socioeconómica dos agregados familiares. 
                  <span className="text-csu-yellow font-semibold"> 91 mil agregados</span> já confiam no CSU.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-csu-yellow">91K</div>
                  <div className="text-xs opacity-80">Agregados</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-csu-yellow">330K</div>
                  <div className="text-xs opacity-80">Membros</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-csu-yellow">40K</div>
                  <div className="text-xs opacity-80">Pobreza</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-xl font-bold text-csu-yellow">16</div>
                  <div className="text-xs opacity-80">Programas</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4 flex align-middle">
                {/* Main CTA Button */}
                
                {/* Secondary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    className="btn bg-red-600/90 text-white hover:bg-red-700 border-none px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    onClick={() => openModal('modal-reclamacao')}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    Fazer Reclamação
                  </button>
                  <button 
                    className="btn bg-orange-600/90 text-white hover:bg-orange-700 border-none px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    onClick={() => openModal('modal-denuncia')}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    Fazer Denúncia
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <svg className="w-4 h-4 text-csu-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs opacity-80">Sistema Seguro</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <svg className="w-4 h-4 text-csu-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs opacity-80">24/7 Disponível</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <svg className="w-4 h-4 text-csu-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs opacity-80">100% Gratuito</span>
                </div>
              </div>


            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative hidden lg:block flex justify-center items-center w-full">
              {/* Main Logo Container */}
              <div className="relative flex justify-center items-center">
                <div className="w-72 h-72 bg-csu-yellow rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <span className="text-csu-black font-bold text-7xl">CSU</span>
                </div>
                
                {/* Orbiting Elements - Centralizados */}
                <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                  {/* Top */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-csu-red rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">🏠</span>
                  </div>
                  {/* Right */}
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-csu-red rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">👴</span>
                  </div>
                  {/* Bottom */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-csu-red rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">💳</span>
                  </div>
                  {/* Left */}
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-csu-red rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">🎓</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
             <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
           </div>
         </div>
       </section>

      {/* Sobre o CSU Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Tutela do CSU */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                <h2 className="text-4xl font-bold text-gray-800">Tutela do CSU</h2>
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Instituições responsáveis pela gestão e coordenação do sistema
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Ministério */}
              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-6 shadow-lg border border-blue-200">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-blue-800 font-bold text-xl mb-1">MINISTÉRIO DA FAMÍLIA,</div>
                      <div className="text-blue-800 font-bold text-xl mb-1">INCLUSÃO E DESENVOLVIMENTO SOCIAL</div>
                      <div className="text-blue-600 font-semibold">MFIDS</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  O Ministério da Família, Inclusão e Desenvolvimento Social (MFIDS) é o departamento governamental responsável pela Proteção Social ao nível da rede de segurança, bem como, pela tutela e coordenação interinstitucional do Cadastro Social Único.
                </p>
              </div>
              
              {/* Governo */}
              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-xl p-8 mb-6 shadow-lg">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl mb-1">GOVERNO DE CABO VERDE</div>
                      <div className="text-white/90 font-semibold">A TRABALHAR PARA TODOS</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  O Governo de Cabo Verde coordena e supervisiona a implementação do CSU, garantindo que o sistema funcione de forma eficiente e transparente para beneficiar todos os cidadãos.
                </p>
              </div>
            </div>
          </div>

          {/* Sobre o CSU */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                <h2 className="text-4xl font-bold text-gray-800">Sobre o CSU</h2>
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Sistema de informação para proteção social e desenvolvimento
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Logo CSU */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-6 bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                  <div className="text-blue-600 font-bold text-3xl">CADASTRO</div>
                  <div className="relative">
                    <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-orange-500 font-bold text-3xl">SOCIAL</div>
                  <div className="text-blue-600 font-bold text-3xl">ÚNICO</div>
                </div>
                <div className="text-orange-500 font-bold text-xl mt-4">Incluir para o Desenvolvimento</div>
              </div>
              
              {/* Informações Detalhadas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Decreto Regulamentar</h3>
                  </div>
                  <p className="text-gray-600">
                    Instituído pelo <strong>Decreto-Regulamentar n°7/2018</strong>, de 20 de setembro, como instrumento de apoio ao sistema de proteção social.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Classificação Socioeconómica</h3>
                  </div>
                  <p className="text-gray-600">
                    Identificação e classificação dos agregados familiares através do cálculo do indicador de focalização.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  É um sistema de informação que compreende a identificação, o registo, a operacionalização, a atualização de informação e a classificação socioeconómica dos agregados familiares e dos seus membros, através do cálculo do indicador de focalização. O CSU foi instituído pelo Decreto-Regulamentar n°7/2018, de 20 de setembro, como um instrumento de apoio ao sistema de proteção social, para identificação e gestão dos beneficiários a nível da proteção social priorizando os agregados familiares em situação de vulnerabilidade, com vista a diminuição da pobreza e da desigualdade social e económica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes e Contato Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-csu-black mb-4">
              O que deseja saber?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre rapidamente as informações que você precisa sobre o CSU
            </p>
          </div>

          {/* Perguntas Frequentes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <button className="btn bg-gray-700 text-white hover:bg-gray-800 border-none px-6 py-6 text-left h-auto">
              <div className="text-left w-full">
                <div className="font-semibold text-lg mb-2">Qual a finalidade do Cadastro Social Único?</div>
                <div className="text-sm opacity-80">Conheça os objetivos e benefícios do sistema</div>
              </div>
            </button>
            <button className="btn bg-gray-700 text-white hover:bg-gray-800 border-none px-6 py-6 text-left h-auto">
              <div className="text-left w-full">
                <div className="font-semibold text-lg mb-2">Como cadastrar?</div>
                <div className="text-sm opacity-80">Passo a passo para realizar seu cadastro</div>
              </div>
            </button>
            <button className="btn bg-gray-700 text-white hover:bg-gray-800 border-none px-6 py-6 text-left h-auto">
              <div className="text-left w-full">
                <div className="font-semibold text-lg mb-2">Quem pode ser cadastrado no CSU?</div>
                <div className="text-sm opacity-80">Verifique se você tem direito ao cadastro</div>
              </div>
            </button>
          </div>

          {/* Linha Verde de Contato - Centralizada */}
          <div className="flex justify-center">
            <div className="bg-gray-800 border-2 border-green-500 rounded-lg p-6 flex items-center gap-4 shadow-xl max-w-md">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div className="text-green-500 text-center">
                <div className="font-bold text-lg">LINHA VERDE GRÁTIS</div>
                <div className="font-bold text-2xl">800 2008</div>
                <div className="text-sm">Acesso Nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicadores Section */}
      <section id="indicadores" className="py-20 bg-gradient-to-br from-csu-red via-red-700 to-red-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-csu-yellow rounded-full"></div>
              <h2 className="text-4xl font-bold text-white">Indicadores</h2>
              <div className="w-12 h-1 bg-csu-yellow rounded-full"></div>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Números que mostram o impacto real do sistema CSU em Cabo Verde
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-csu-yellow mb-3">91 041</div>
                <div className="text-sm lg:text-base text-white/90 leading-tight">Agregados Cadastrados</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-csu-yellow mb-3">329 572</div>
                <div className="text-sm lg:text-base text-white/90 leading-tight">Membros Cadastrados</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-csu-yellow mb-3">39 877</div>
                <div className="text-sm lg:text-base text-white/90 leading-tight">
                  Agregados em Situação de Pobreza
                  <br />
                  <span className="text-xs">(Grupo 1 e Grupo 2)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-csu-yellow mb-3">16</div>
                <div className="text-sm lg:text-base text-white/90 leading-tight">
                  Programas Sociais que Utilizam o CSU
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="btn bg-csu-yellow hover:bg-csu-yellow/90 text-csu-black border-none px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Ver mais indicadores
            </button>
          </div>
        </div>
      </section>

      {/* Documentos Section */}
      <section id="documentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-csu-black mb-4">
              Documentos Importantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse os principais documentos e regulamentações do CSU
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Manual do Usuário",
                desc: "Guia completo para utilização do sistema CSU",
                icon: "📖",
                type: "PDF"
              },
              {
                title: "Regulamentação CSU",
                desc: "Normas e regulamentos do Cadastro Social Único",
                icon: "⚖️",
                type: "PDF"
              },
              {
                title: "Política de Privacidade",
                desc: "Como seus dados são protegidos no sistema",
                icon: "🔒",
                type: "PDF"
              },
              {
                title: "Termos de Uso",
                desc: "Condições para utilização do portal CSU",
                icon: "📋",
                type: "PDF"
              },
              {
                title: "Relatório Anual",
                desc: "Relatório de atividades e resultados do CSU",
                icon: "📊",
                type: "PDF"
              },
              {
                title: "FAQ Oficial",
                desc: "Perguntas frequentes sobre o sistema",
                icon: "❓",
                type: "PDF"
              }
            ].map((doc, index) => (
              <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{doc.icon}</div>
                  <h3 className="card-title text-xl justify-center text-csu-black">{doc.title}</h3>
                  <p className="text-gray-600">{doc.desc}</p>
                  <div className="card-actions justify-center mt-4">
                    <button className="btn btn-sm bg-csu-red text-white hover:bg-red-700">
                      Baixar {doc.type}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros Section */}
      <section id="parceiros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-csu-black mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instituições que trabalham conosco para melhorar a vida dos brasileiros
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Ministério da Cidadania", logo: "🏛️" },
              { name: "Caixa Econômica Federal", logo: "🏦" },
              { name: "Banco do Brasil", logo: "🏛️" },
              { name: "INSS", logo: "📋" },
              { name: "Ministério da Educação", logo: "🎓" },
              { name: "Ministério da Saúde", logo: "🏥" },
              { name: "Governos Estaduais", logo: "🏛️" },
              { name: "Prefeituras", logo: "🏢" }
            ].map((parceiro, index) => (
              <div key={index} className="card bg-gray-50 hover:bg-csu-yellow/10 transition-colors cursor-pointer">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">{parceiro.logo}</div>
                  <h3 className="card-title text-sm justify-center text-csu-black">{parceiro.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-csu-black mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o Cadastro Social Único
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Como faço meu cadastro no CSU?",
                  answer: "Você pode fazer seu cadastro através do portal online, em um posto de atendimento ou com a ajuda de um assistente social."
                },
                {
                  question: "Quais documentos preciso para me cadastrar?",
                  answer: "Você precisará de RG, CPF, comprovante de residência e documentos de todos os membros da família."
                },
                {
                  question: "Como atualizo meus dados no CSU?",
                  answer: "Acesse o portal CSU com seu login e senha, ou procure um posto de atendimento para atualizar suas informações."
                },
                {
                  question: "Quais programas sociais posso acessar?",
                  answer: "O CSU dá acesso a programas como Bolsa Família, BPC, Auxílio Brasil, Minha Casa Minha Vida e outros."
                },
                {
                  question: "Como consulto o status dos meus benefícios?",
                  answer: "Acesse o portal CSU e vá na seção 'Meus Benefícios' para ver o status de todos os seus programas."
                },
                {
                  question: "O que fazer se esqueci minha senha?",
                  answer: "Use a opção 'Esqueci minha senha' no portal ou entre em contato com nossa central de atendimento."
                }
              ].map((faq, index) => (
                <div key={index} className="collapse collapse-arrow bg-white shadow-lg">
                  <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                  <div className="collapse-title text-xl font-medium text-csu-black">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-csu-black mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aqui para ajudar. Entre em contato conosco
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-csu-black mb-6">Envie uma Mensagem</h3>
                <form className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-csu-black">Nome Completo</span>
                    </label>
                    <input type="text" placeholder="Seu nome" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-csu-black">Email</span>
                    </label>
                    <input type="email" placeholder="seu@email.com" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-csu-black">Assunto</span>
                    </label>
                    <select className="select select-bordered">
                      <option>Selecione um assunto</option>
                      <option>Dúvida sobre cadastro</option>
                      <option>Problema técnico</option>
                      <option>Sugestão</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-csu-black">Mensagem</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Sua mensagem"></textarea>
                  </div>
                  <button className="btn bg-csu-red text-white hover:bg-red-700 w-full">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card bg-csu-red text-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>0800 707 2003</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>csu@mds.gov.br</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Segunda a Sexta: 8h às 18h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-csu-yellow text-csu-black shadow-xl">
                <div className="card-body">
                  <h3 className="card-title mb-6">Atendimento Emergencial</h3>
                  <p className="mb-4">
                    Para casos urgentes, ligue para nossa central de atendimento 24 horas.
                  </p>
                  <button className="btn bg-csu-red text-white hover:bg-red-700 w-full">
                    Ligar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-csu-black mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre nossos principais pontos de atendimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-csu-black mb-6">Mapa de Atendimento</h3>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600">Mapa interativo dos pontos de atendimento</p>
                    <button className="btn bg-csu-red text-white hover:bg-red-700 mt-4">
                      Ver Mapa Completo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-6">
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-csu-black mb-4">Principais Escritórios</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-csu-red rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-csu-black">Brasília - DF</h4>
                        <p className="text-sm text-gray-600">Esplanada dos Ministérios, Bloco A</p>
                        <p className="text-sm text-gray-600">CEP: 70058-900</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-csu-yellow rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-csu-black">São Paulo - SP</h4>
                        <p className="text-sm text-gray-600">Av. Paulista, 1000</p>
                        <p className="text-sm text-gray-600">CEP: 01310-100</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-csu-black rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-csu-black">Rio de Janeiro - RJ</h4>
                        <p className="text-sm text-gray-600">Av. Rio Branco, 200</p>
                        <p className="text-sm text-gray-600">CEP: 20040-007</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-csu-red text-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title mb-4">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta</span>
                      <span>8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span>8h às 12h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-csu-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-csu-yellow rounded-full flex items-center justify-center">
                  <span className="text-csu-black font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold">CSU</span>
              </div>
              <p className="text-gray-400 mb-4">
                Portal oficial do Cadastro Social Único
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-csu-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-csu-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Serviços</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#indicadores" className="hover:text-white transition-colors">Indicadores</a></li>
                <li><a href="#documentos" className="hover:text-white transition-colors">Documentos</a></li>
                <li><a href="#parceiros" className="hover:text-white transition-colors">Parceiros</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Ajuda</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  0800 707 2003
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  csu@mds.gov.br
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Seg-Sex: 8h às 18h
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Portal do Cadastro Social Único. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal Reclamação */}
      <dialog id="modal-reclamacao" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-csu-red mb-6">Formulário de Reclamação</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Nome Completo *</span>
                </label>
                <input type="text" placeholder="Seu nome completo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">CPF *</span>
                </label>
                <input type="text" placeholder="000.000.000-00" className="input input-bordered" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email *</span>
                </label>
                <input type="email" placeholder="seu@email.com" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Telefone</span>
                </label>
                <input type="tel" placeholder="(00) 00000-0000" className="input input-bordered" />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Tipo de Reclamação *</span>
              </label>
              <select className="select select-bordered" required>
                <option value="">Selecione o tipo</option>
                <option value="problema-tecnico">Problema Técnico</option>
                <option value="atendimento">Problema no Atendimento</option>
                <option value="beneficio">Problema com Benefício</option>
                <option value="cadastro">Problema no Cadastro</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Descrição da Reclamação *</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-24" 
                placeholder="Descreva detalhadamente sua reclamação..."
                required
              ></textarea>
            </div>
            
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-semibold">Anexar Documentos</span>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" multiple />
              </label>
            </div>
            
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Concordo com os termos de uso e política de privacidade</span>
                <input type="checkbox" className="checkbox checkbox-primary" required />
              </label>
            </div>
            
            <div className="modal-action">
              <button type="submit" className="btn bg-csu-red text-white hover:bg-red-700">
                Enviar Reclamação
              </button>
              <form method="dialog">
                <button className="btn">Cancelar</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>

      {/* Modal Denúncia */}
      <dialog id="modal-denuncia" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-orange-600 mb-6">Formulário de Denúncia</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Nome Completo *</span>
                </label>
                <input type="text" placeholder="Seu nome completo" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">CPF *</span>
                </label>
                <input type="text" placeholder="000.000.000-00" className="input input-bordered" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email *</span>
                </label>
                <input type="email" placeholder="seu@email.com" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Telefone</span>
                </label>
                <input type="tel" placeholder="(00) 00000-0000" className="input input-bordered" />
              </div>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Tipo de Denúncia *</span>
              </label>
              <select className="select select-bordered" required>
                <option value="">Selecione o tipo</option>
                <option value="fraude">Fraude ou Irregularidade</option>
                <option value="corrupcao">Corrupção</option>
                <option value="desvio">Desvio de Recursos</option>
                <option value="discriminacao">Discriminação</option>
                <option value="assédio">Assédio</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Local da Ocorrência</span>
              </label>
              <input type="text" placeholder="Endereço ou local onde ocorreu" className="input input-bordered" />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Data da Ocorrência</span>
              </label>
              <input type="date" className="input input-bordered" />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Descrição da Denúncia *</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-24" 
                placeholder="Descreva detalhadamente os fatos que você está denunciando..."
                required
              ></textarea>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Pessoas Envolvidas</span>
              </label>
              <textarea 
                className="textarea textarea-bordered h-16" 
                placeholder="Nome das pessoas envolvidas (se conhecidas)"
              ></textarea>
            </div>
            
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-semibold">Anexar Evidências</span>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" multiple />
              </label>
            </div>
            
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Concordo com os termos de uso e política de privacidade</span>
                <input type="checkbox" className="checkbox checkbox-primary" required />
              </label>
            </div>
            
            <div className="alert alert-warning">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <span>Sua identidade será mantida em sigilo. Denúncias falsas podem resultar em responsabilização legal.</span>
            </div>
            
            <div className="modal-action">
              <button type="submit" className="btn bg-orange-600 text-white hover:bg-orange-700">
                Enviar Denúncia
              </button>
              <form method="dialog">
                <button className="btn">Cancelar</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
