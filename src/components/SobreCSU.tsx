'use client';

export default function SobreCSU() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-csu-yellow rounded-full"></div>
            <h2 className="text-4xl font-bold text-csu-black">Sobre o CSU</h2>
            <div className="w-12 h-1 bg-csu-yellow rounded-full"></div>
          </div>
          <p className="text-csu-black/70 text-lg max-w-2xl mx-auto">
            Sistema de informação para proteção social e desenvolvimento
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Logo CSU */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-6 bg-white rounded-2xl p-8 shadow-2xl border border-csu-red/20">
              <div className="text-csu-red font-bold text-3xl">CADASTRO</div>
              <div className="relative">
                <svg className="w-10 h-10 text-csu-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-csu-red rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-csu-yellow font-bold text-3xl">SOCIAL</div>
              <div className="text-csu-red font-bold text-3xl">ÚNICO</div>
            </div>
            <div className="text-csu-yellow font-bold text-xl mt-4">Incluir para o Desenvolvimento</div>
          </div>
          
          {/* Informações Detalhadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-csu-red/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-csu-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-csu-black">Decreto Regulamentar</h3>
              </div>
              <p className="text-csu-black/70">
                Instituído pelo <strong>Decreto-Regulamentar n°7/2018</strong>, de 20 de setembro, como instrumento de apoio ao sistema de proteção social.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-csu-yellow/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-csu-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-csu-black">Classificação Socioeconómica</h3>
              </div>
              <p className="text-csu-black/70">
                Identificação e classificação dos agregados familiares através do cálculo do indicador de focalização.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-csu-red/20">
            <p className="text-csu-black/80 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              É um sistema de informação que compreende a identificação, o registo, a operacionalização, a atualização de informação e a classificação socioeconómica dos agregados familiares e dos seus membros, através do cálculo do indicador de focalização. O CSU foi instituído pelo Decreto-Regulamentar n°7/2018, de 20 de setembro, como um instrumento de apoio ao sistema de proteção social, para identificação e gestão dos beneficiários a nível da proteção social priorizando os agregados familiares em situação de vulnerabilidade, com vista a diminuição da pobreza e da desigualdade social e económica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 