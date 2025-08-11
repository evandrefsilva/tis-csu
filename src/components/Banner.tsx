'use client';

export default function Banner() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-csu-red via-red-700 to-red-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-csu-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-csu-white/10 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-8 h-8 bg-csu-white rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <div className="w-6 h-6 bg-white rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '1s'}}>
        <div className="w-4 h-4 bg-csu-white rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-csu-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-csu-white/30">
              <div className="w-2 h-2 bg-csu-white rounded-full animate-pulse"></div>
              <span className="text-csu-white font-semibold text-sm">Sistema Oficial do Governo</span>
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
                <div className="text-xl font-bold text-csu-white">91K</div>
                <div className="text-xs opacity-80">Agregados</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xl font-bold text-csu-white">330K</div>
                <div className="text-xs opacity-80">Membros</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xl font-bold text-csu-white">40K</div>
                <div className="text-xs opacity-80">Pobreza</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xl font-bold text-csu-white">16</div>
                <div className="text-xs opacity-80">Programas</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4 flex align-middle">
              {/* Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  className="btn bg-csu-red/90 text-white hover:bg-csu-red border-none px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={() => {
                    const modal = document.getElementById('modal-reclamacao') as HTMLDialogElement;
                    if (modal) modal.showModal();
                  }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  Fazer Reclamação
                </button>
                <button 
                  className="btn bg-csu-yellow/90 text-csu-black hover:bg-csu-white border-none px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={() => {
                    const modal = document.getElementById('modal-denuncia') as HTMLDialogElement;
                    if (modal) modal.showModal();
                  }}
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
                <svg className="w-4 h-4 text-csu-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-xs opacity-80">Sistema Seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <svg className="w-4 h-4 text-csu-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-xs opacity-80">24/7 Disponível</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                <svg className="w-4 h-4 text-csu-white" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="w-72 h-72 bg-csu-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
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
  );
} 