'use client';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-csu-black mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-csu-black/70 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de Contacto */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-csu-red/20">
            <h3 className="text-2xl font-bold text-csu-black mb-6">Envie uma Mensagem</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-csu-black mb-2">Nome Completo</label>
                <input type="text" className="w-full px-4 py-3 border border-csu-red/30 rounded-lg focus:ring-2 focus:ring-csu-red focus:border-transparent" placeholder="Seu nome" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-csu-black mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-csu-red/30 rounded-lg focus:ring-2 focus:ring-csu-red focus:border-transparent" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-csu-black mb-2">Assunto</label>
                <select className="w-full px-4 py-3 border border-csu-red/30 rounded-lg focus:ring-2 focus:ring-csu-red focus:border-transparent">
                  <option>Selecione um assunto</option>
                  <option>Informações sobre CSU</option>
                  <option>Problemas técnicos</option>
                  <option>Reclamações</option>
                  <option>Outros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-csu-black mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-csu-red/30 rounded-lg focus:ring-2 focus:ring-csu-red focus:border-transparent resize-none" placeholder="Sua mensagem"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-csu-red hover:bg-csu-red/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contacto */}
          <div className="space-y-6">
            {/* Informações de Contato */}
            <div className="bg-csu-red text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+244 930 097 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>geral@masfamu.gov.ao</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Segunda a Sexta: 8h às 18h</span>
                </div>
              </div>
            </div>

            {/* Atendimento Emergencial */}
            <div className="bg-csu-yellow text-csu-black rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Atendimento Emergencial</h3>
              <p className="mb-4">
                Para casos urgentes, ligue para nossa central de atendimento 24 horas.
              </p>
              <button className="w-full bg-csu-red hover:bg-csu-red/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Ligar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 