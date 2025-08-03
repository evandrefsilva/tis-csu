'use client';

export default function Documentos() {
  return (
    <section id="documentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-csu-black mb-4">
            Documentos Importantes
          </h2>
          <p className="text-xl text-csu-black/70 max-w-3xl mx-auto">
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
            <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-csu-red/20">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="card-title text-xl justify-center text-csu-black">{doc.title}</h3>
                <p className="text-csu-black/70">{doc.desc}</p>
                <div className="card-actions justify-center mt-4">
                  <button className="btn btn-sm bg-csu-red text-white hover:bg-csu-red/90 border-none">
                    Baixar {doc.type}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 