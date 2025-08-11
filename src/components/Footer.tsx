'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-csu-red via-red-700 to-red-900 text-white py-20 relative overflow-hidden">
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
              <div className="w-12 h-12 bg-csu-white rounded-full flex items-center justify-center">
                <span className="text-csu-black font-bold text-xl">C</span>
              </div>
              <div>
                <span className="text-2xl font-bold">CSU</span>
                <div className="text-sm text-csu-white">CNCSU</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md mx-auto lg:mx-0">
              Portal oficial do Cadastro Social Único de Angola. 
              Sistema de informação para identificação e classificação socioeconómica dos agregados familiares.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-6 text-csu-white">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#indicadores" className="block text-white/70 hover:text-csu-white transition-colors">Indicadores</a>
                <a href="#documentos" className="block text-white/70 hover:text-csu-white transition-colors">Documentos</a>
                <a href="#parceiros" className="block text-white/70 hover:text-csu-white transition-colors">Parceiros</a>
              </div>
              <div className="space-y-3">
                <a href="#faqs" className="block text-white/70 hover:text-csu-white transition-colors">FAQs</a>
                <a href="#contato" className="block text-white/70 hover:text-csu-white transition-colors">Contato</a>
                <a href="#" className="block text-white/70 hover:text-csu-white transition-colors">Ajuda</a>
              </div>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold mb-6 text-csu-white">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-10 h-10 bg-csu-red/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-csu-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Contactos</div>
                  <div className="text-white/70 text-sm">939 092 959 /  939 092 969 </div>
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
                  <div className="text-white/70 text-sm">aquisicoes.csu@csu.gov.ao</div>
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
              <h3 className="text-lg font-bold mb-4 text-csu-white">Nossas Redes Sociais</h3>
              <div className="flex justify-center lg:justify-start gap-4">
                <a target="_blank" href="https://www.facebook.com/MASFAMU2020" className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-csu-white hover:scale-110 transition-all duration-300" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="blue" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"/></svg>
                </a>
              </div>
            </div>

            {/* Endereço */}
            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end gap-3">
                <svg className="w-5 h-5 text-csu-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <address className="text-white/80 text-sm"> difício Welwitshia Business Center, <br /> 1º Andar
                Rua Frederico Welwitch, nº 90/92, <br /> Distrito Urbano da Ingombota  Luanda, Angola
                </address>
              </div>  
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; Todos os direitos reservados a MASFAMU - CNCSU {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
} 