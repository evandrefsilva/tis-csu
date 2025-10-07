'use client';
import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Como faço meu cadastro no CSU?",
      answer: "Você pode fazer seu cadastro através do portal online, em um posto de atendimento do MASFAMU ou com a ajuda de um assistente social credenciado."
    },
    {
      question: "Quais documentos preciso para me cadastrar?",
      answer: "Você precisará do Bilhete de Identidade, comprovante de residência, certidão de nascimento e documentos de todos os membros da família."
    },
    {
      question: "Como atualizo meus dados no CSU?",
      answer: "Acesse o portal CSU com seu login e senha, ou procure um posto de atendimento do MASFAMU para atualizar suas informações."
    },
    {
      question: "Quais programas sociais posso acessar?",
      answer: "O CSU dá acesso a programas como Kwenda, Programa de Apoio à Família, Apoio Social Directo, Habitação Social e outros programas do MASFAMU."
    },
    {
      question: "Como consulto o status dos meus benefícios?",
      answer: "Acesse o portal CSU e vá na seção 'Meus Benefícios' para ver o status de todos os seus programas sociais."
    },
    {
      question: "O que fazer se esqueci minha senha?",
      answer: "Use a opção 'Esqueci minha senha' no portal ou entre em contato com a central de atendimento do MASFAMU."
    },
    {
      question: "O CSU é gratuito?",
      answer: "Sim, o cadastro no CSU é completamente gratuito. Não há taxas para se cadastrar ou consultar seus benefícios."
    },
    {
      question: "Posso me cadastrar em qualquer província?",
      answer: "Sim, o CSU está disponível em todas as 18 províncias de Angola. Você pode se cadastrar no posto mais próximo da sua residência."
    },
    {
      question: "Quanto tempo demora para ser aprovado?",
      answer: "O processo de análise e aprovação pode levar entre 30 a 60 dias úteis, dependendo da documentação apresentada e da demanda."
    },
    {
      question: "Como posso denunciar irregularidades?",
      answer: "Você pode denunciar através do portal CSU, por telefone na central de atendimento ou presencialmente em qualquer posto do MASFAMU."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-csu-black mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-csu-black/70 max-w-3xl mx-auto">
            Encontre rapidamente as respostas às perguntas mais comuns sobre o CSU
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <h3 className="text-xl font-medium text-csu-black">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-csu-red transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-csu-black/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 