'use client';

export default function Parceiros() {
  return (
    <section id="parceiros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-csu-black mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-csu-black/70 max-w-3xl mx-auto">
            Instituições que trabalham conosco para melhorar a vida dos cabo-verdianos
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Ministério da Cidadania", logo: "🏛️" },
            { name: "Caixa Económica Federal", logo: "🏦" },
            { name: "Banco do Brasil", logo: "🏛️" },
            { name: "INSS", logo: "📋" },
            { name: "Ministério da Educação", logo: "🎓" },
            { name: "Ministério da Saúde", logo: "🏥" },
            { name: "Governos Estaduais", logo: "🏛️" },
            { name: "Prefeituras", logo: "🏢" }
          ].map((parceiro, index) => (
            <div key={index} className="card bg-csu-red/5 hover:bg-csu-yellow/10 transition-colors cursor-pointer border border-csu-red/20">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{parceiro.logo}</div>
                <h3 className="card-title text-sm justify-center text-csu-black">{parceiro.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 