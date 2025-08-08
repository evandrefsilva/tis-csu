'use client';

export default function TutelaCSU() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-csu-yellow rounded-full"></div>
            <h2 className="text-4xl font-bold text-csu-black">Tutela do CSU</h2>
            <div className="w-12 h-1 bg-csu-yellow rounded-full"></div>
          </div>
          <p className="text-csu-black/70 text-lg max-w-2xl mx-auto">
            Instituições responsáveis pela gestão e coordenação do sistema
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ministério */}
          <div className="text-center lg:text-left">
                          <div className="bg-gradient-to-br from-csu-red/5 to-csu-red/10 rounded-xl p-8 mb-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-14 h-16 bg-csu-red rounded-full flex-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div className="uppercase ">
                  <p className="text-csu-black font-bold text-sm mb-1">MINISTÉRIO DA ACÇÃO SOCIAL,</p>
                  <p className="text-csu-black font-bold text-sm mb-1">FAMÍLIA E PROMOÇÃO DA MULHER (MASFAMU)
                  Responsável pela coordenação das políticas sociais em Angola</p>
                  <div className="text-csu-red font-semibold">MASFAMU</div>
                </div>
              </div>
            </div>
            <p className="text-csu-black/70 leading-relaxed text-lg">
            O MASFAMU lidera a formulação e execução das políticas e estratégias de ação social, com foco na promoção da dignidade humana, inclusão social e desenvolvimento das comunidades. 
            </p>
          </div>
          
          {/* Governo */}
          <div className="text-center lg:text-left">
                          <div className="bg-gradient-to-r from-csu-red via-csu-yellow to-csu-red rounded-xl p-8 mb-6 shadow-lg">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-1">GOVERNO DE ANGOLA</div>
                  <div className="text-white/90 font-semibold">A TRABALHAR PARA TODOS</div>
                </div>
              </div>
            </div>
            <p className="text-csu-black/70 leading-relaxed text-lg">
              O Governo de Angola coordena e supervisiona a implementação do CSU, garantindo que o sistema funcione de forma eficiente e transparente para beneficiar todos os cidadãos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 