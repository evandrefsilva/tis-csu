'use client';
import Map from './Map';

export default function Localizacao() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-csu-black mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre nossos principais pontos de atendimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-csu-black mb-6">Mapa de Atendimento</h3>
              <div className="rounded-lg overflow-hidden">
                <Map className="w-full h-96" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Clique nos marcadores para ver mais informações</p>
                                       <button className="btn btn-sm bg-csu-red text-white hover:bg-csu-red/90">
                  Ver Mapa Completo
                </button>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <div className="card bg-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-csu-black mb-4">Principais Escritórios</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-csu-red rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-csu-black">Praia - Santiago</h4>
                      <p className="text-sm text-gray-600">Achada de Santo António - Rua Cidade do Funchal, Nº 2</p>
                      <p className="text-sm text-gray-600">Cidade da Praia, República de Angola</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-csu-yellow rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-csu-black">Mindelo - São Vicente</h4>
                      <p className="text-sm text-gray-600">Rua da República, 150</p>
                      <p className="text-sm text-gray-600">Mindelo, São Vicente, República de Angola</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-csu-black rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-csu-black">Sal - Ilha do Sal</h4>
                      <p className="text-sm text-gray-600">Rua da Liberdade, 75</p>
                      <p className="text-sm text-gray-600">Santa Maria, Sal, República de Angola</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-csu-red text-white shadow-xl">
              <div className="card-body">
                <h3 className="card-title mb-4">Horário de Funcionamento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span>8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 