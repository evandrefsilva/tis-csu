"use client";

export default function SobreCSU() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-csu-red rounded-full"></div>
            <h2 className="text-4xl font-bold text-csu-black">Sobre o CSU</h2>
            <div className="w-12 h-1 bg-csu-red rounded-full"></div>
          </div>
          <p className="text-csu-black/70 text-lg max-w-2xl mx-auto">
            Sistema de informação para proteção social e desenvolvimento
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Logo CSU */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-6 bg-csu-red rounded-2xl p-8 shadow-2xl border border-csu-red/20">
              <div className="text-csu-white font-bold text-lg-3xl">CADASTRO</div>
              <div className="relative">
                <svg
                  className="w-8 h-8 text-csu-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-csu-red rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-csu-white font-bold ">SOCIAL</div>
              <div className="text-csu-yellow font-bold ">ÚNICO</div>
            </div>
            <div className="text-csu-red font-bold text-xl mt-4">
              Incluir para o Desenvolvimento
            </div>
          </div>

          {/* Informações Detalhadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-csu-red/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-csu-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-csu-black">
                  Decreto Regulamentar
                </h3>
              </div>
              <p className="text-csu-black/70">
                Instituído pelo <strong>Decreto-Regulamentar n°7/2018</strong>,
                de 20 de setembro, como instrumento de apoio ao sistema de
                proteção social.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-csu-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-csu-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-csu-black">
                  Classificação Socioeconómica
                </h3>
              </div>
              <p className="text-csu-black/70">
                Identificação e classificação dos agregados familiares através
                do cálculo do indicador de focalização.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-csu-red/20">
            <p className="text-csu-black/80 leading-relaxed text-lg text-center max-w-4xl mx-auto">
              O Ministério da Acção Social, Família e Promoção da Mulher,
              abreviadamente designado «MASFAMU», é a Departamento Ministerial
              Auxiliar do Titular do Poder Executivo que de acordo com os
              princípios, objectivos e prioridades definidos, tem como missão
              conceber, propor. promover e executar a política social relativa
              as pessoas e grupos da população em situação de vulnerabilidade,
              promover o desenvolvimento das comunidades, incluindo acções de
              combate a pobreza, bem como a defesa do bem-estar da família,
              promoção da mulher e garanta dos seus direitos, promoção da
              igualdade e equidade do gênero, e a coordenação, acompanhamento e
              fiscalização das ONGs que prossigam fins de protecção social.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Nova seção sobre MASFAMU Angola
export function MASFAMUAngola() {
  return (
    <section className="py-20 bg-gradient-to-br from-csu-red/5 via-csu-white/5 to-csu-red/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-csu-red rounded-full"></div>
            <h2 className="text-4xl font-bold text-csu-black">
              MASFAMU Angola
            </h2>
            <div className="w-12 h-1 bg-csu-red rounded-full"></div>
          </div>
          <p className="text-csu-black/70 text-lg max-w-2xl mx-auto">
            Ministério da Ação Social, Família e Promoção da Mulher
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Informações Principais */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-csu-red/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-csu-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-csu-black">Missão</h3>
              </div>
              <p className="text-csu-black/70">
                Promover políticas e programas de proteção social,
                desenvolvimento familiar e empoderamento da mulher, garantindo a
                inclusão social e o bem-estar das famílias angolanas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-csu-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-csu-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-csu-black">Visão</h3>
              </div>
              <p className="text-csu-black/70">
                Ser uma referência na promoção da coesão social, igualdade de
                género e desenvolvimento sustentável das famílias em Angola.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-csu-red/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-csu-red/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-csu-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-csu-black">Valores</h3>
              </div>
              <p className="text-csu-black/70">
                Solidariedade, equidade, transparência, responsabilidade social
                e respeito pelos direitos humanos e dignidade da pessoa humana.
              </p>
            </div>
          </div>

          {/* Áreas de Atuação */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-csu-red/20 mb-12">
            <h3 className="text-2xl font-bold text-csu-black text-center mb-8">
              Áreas de Atuação
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-csu-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-csu-black mb-2">
                    Proteção Social
                  </h4>
                  <p className="text-csu-black/70 text-sm">
                    Desenvolvimento e implementação de programas de assistência
                    social, incluindo o CSU, para garantir a proteção dos grupos
                    mais vulneráveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-csu-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-csu-black mb-2">
                    Desenvolvimento Familiar
                  </h4>
                  <p className="text-csu-black/70 text-sm">
                    Promoção de políticas e programas que fortaleçam a estrutura
                    familiar e melhorem a qualidade de vida das famílias
                    angolanas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-csu-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-csu-black mb-2">
                    Promoção da Mulher
                  </h4>
                  <p className="text-csu-black/70 text-sm">
                    Empoderamento feminino, igualdade de género e promoção dos
                    direitos das mulheres em todos os setores da sociedade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-csu-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-csu-black mb-2">
                    Inclusão Social
                  </h4>
                  <p className="text-csu-black/70 text-sm">
                    Desenvolvimento de políticas e programas que promovam a
                    inclusão social e reduzam as desigualdades económicas e
                    sociais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações de Contacto */}
          <div className="bg-gradient-to-r from-csu-red to-csu-red/90 rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold text-center mb-6">
              Informações de Contacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Endereço</h4>
                  <p className="text-white/80">
                    Ministério da Ação Social, Família e Promoção da Mulher
                    <br />
                    Luanda, Angola
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Contacto</h4>
                  <p className="text-white/80">
                    Telefone: 939 092 959 /  939 092 969 
                    <br />
                    Email: aquisicoes.csu@csu.gov.ao
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
