'use client';

export default function FAQs() {
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
                  <p className="text-csu-black/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 