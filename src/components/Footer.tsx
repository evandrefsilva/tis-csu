'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-csu-black via-gray-900 to-csu-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-12 h-12 bg-csu-yellow rounded-full flex items-center justify-center">
                <span className="text-csu-black font-bold text-xl">C</span>
              </div>
              <div>
                <span className="text-2xl font-bold">CSU</span>
                <div className="text-sm text-csu-yellow">CNCSU</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              Portal oficial do Cadastro Social Único de Cabo Verde. 
              Sistema de informação para identificação e classificação socioeconómica dos agregados familiares.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-6 text-csu-yellow">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#indicadores" className="block text-white/70 hover:text-csu-yellow transition-colors">Indicadores</a>
                <a href="#documentos" className="block text-white/70 hover:text-csu-yellow transition-colors">Documentos</a>
                <a href="#parceiros" className="block text-white/70 hover:text-csu-yellow transition-colors">Parceiros</a>
              </div>
              <div className="space-y-3">
                <a href="#faqs" className="block text-white/70 hover:text-csu-yellow transition-colors">FAQs</a>
                <a href="#contato" className="block text-white/70 hover:text-csu-yellow transition-colors">Contato</a>
                <a href="#" className="block text-white/70 hover:text-csu-yellow transition-colors">Ajuda</a>
              </div>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-6 text-csu-yellow">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 bg-csu-red/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-csu-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Linha Verde</div>
                  <div className="text-white/70 text-sm">800 2008</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 bg-csu-red/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-csu-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-white/70 text-sm">cncsu.oficial@mfids.gov.cv</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociais e Endereço */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Redes Sociais */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 text-csu-yellow">Nossas Redes Sociais</h3>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-csu-yellow hover:scale-110 transition-all duration-300" title="Facebook">
                  <svg className="w-6 h-6 text-csu-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-csu-yellow hover:scale-110 transition-all duration-300" title="Instagram">
                  <svg className="w-6 h-6 text-csu-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Endereço */}
            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end gap-3">
                <svg className="w-5 h-5 text-csu-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div className="text-white/80 text-sm">
                  Achada de Santo António - Rua Cidade do Funchal, Nº 2<br />
                  Cidade da Praia - Santiago, República de Cabo Verde
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; Todos os direitos reservados a MFIDS - CNCSU {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
} 