'use client';

export default function Indicadores() {
  return (
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
          <h2 className="text-4xl font-bold text-white mb-4">Indicadores</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Números que mostram o impacto real do sistema CSU em Angola
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-csu-yellow mb-3">91 041</div>
              <div className="text-sm lg:text-base text-white/90 leading-tight">Agregados Cadastrados</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-csu-yellow mb-3">329 572</div>
              <div className="text-sm lg:text-base text-white/90 leading-tight">Membros Cadastrados</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-csu-yellow mb-3">39 877</div>
              <div className="text-sm lg:text-base text-white/90 leading-tight">
                Agregados em Situação de Pobreza
                <br />
                <span className="text-xs">(Grupo 1 e Grupo 2)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
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
  );
} 