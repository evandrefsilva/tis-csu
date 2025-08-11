'use client';
import { useState } from 'react';

export default function HelpSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: "Qual a finalidade do Cadastro Social Único?",
      answer: "Garante maior transparência, justiça social e igualdade de oportunidade na atribuição e gestão dos benefícios sociais. Facilita o conhecimento, a formulação e implementação de políticas públicas capazes de promover a melhoria de condições de vida dos agregados familiares.\n\nÉ a base de dados de referência para as Câmaras Municipais, as operadoras de água, de eletricidade, os Ministérios da Saúde, Educação, Habitação, Família, Desenvolvimento e Inclusão Social, o Centro Nacional de Pensões Sociais (CNPS), e outras entidades que executam/gerem programas de proteção social.\n\nPermite calcular o indicador de focalização que é um indicador de qualidade de vida dos agregados familiares e dos seus membros."
    },
    {
      question: "Como cadastrar?",
      answer: "O registo no Cadastro Social Único (CSU) é feito por visita domiciliar do Técnico do Cadastro Social Único, que se desloca à residência dos agregados familiares para a recolha de informações socioeconómicas.\n\nIgualmente, pode ser realizado nas Câmaras Municipais, num primeiro momento, seguido de uma visita a domicílio para validação das informações."
    },
    {
      question: "Quem pode ser cadastrado no CSU?",
      answer: "Todo o cidadão cabo-verdiano pode, por iniciativa própria, promover o registo do seu agregado familiar no Cadastro Social Único, condição prévia e incontornável para o acesso a qualquer benefício social público ao nível da Rede de Segurança.\n\nPor exemplo: Para beneficiar das tarifas sociais de água ou energia, apoio de transporte escolar, kit escolar, propinas do ensino superior, isenção da taxa moderadora nos serviços de saúde, o agregado familiar deve estar previamente inscrito no CSU e, dependendo dos critérios utilizados por cada programa, será ou não considerado elegível."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleComplaint = () => {
    const modal = document.getElementById('modal-reclamacao') as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  const handleReport = () => {
    const modal = document.getElementById('modal-denuncia') as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-csu-red via-red-700 to-red-900 relative overflow-hidden">
                   {/* Background Pattern */}
             <div className="absolute inset-0 opacity-5">
               <div className="absolute top-10 left-10 w-32 h-32 bg-csu-white rounded-full blur-3xl"></div>
               <div className="absolute bottom-10 right-10 w-40 h-40 bg-csu-white rounded-full blur-3xl"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-csu-red rounded-full blur-3xl"></div>
             </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Question */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-csu-white mb-8 drop-shadow-lg">
            O que deseja saber?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {faqItems.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div 
                  key={index}
                  className="bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Question Header */}
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-xl font-semibold text-csu-white flex-1">
                      {item.question}
                    </h3>
                    <div className="flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg 
                          className={`w-5 h-5 text-csu-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Answer Content */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                                             <div className="w-full h-1 bg-csu-white mb-4"></div>
                      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                           <button
                   onClick={handleComplaint}
                   className="btn btn-lg bg-csu-red text-white hover:bg-csu-red/90 border-none px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
                 >
                   <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                   </svg>
                   Fazer uma reclamação
                 </button>
                 
                 <button
                   onClick={handleReport}
                   className="btn btn-lg bg-csu-white text-csu-black hover:bg-csu-white/90 border-none px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
                 >
                   <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                   </svg>
                   Fazer uma denúncia
                 </button>
        </div>

        {/* Contact Line */}
        <div className="text-center">
                           <div className="inline-flex items-center bg-gray-800 text-csu-white px-8 py-4 rounded-xl shadow-lg">
                   <svg className="w-8 h-8 mr-4 text-csu-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <div className="text-center">
              <div className="text-sm font-medium">LINHA VERDE GRÁTIS</div>
              <div className="text-2xl font-bold">939 092 959 /  939 092 969 </div>
              <div className="text-xs">Acesso Nacional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 