'use client';
import { useState } from 'react';

export default function Indicadores() {
  const [showDetails, setShowDetails] = useState(false);

  // Dados por província (exemplo com algumas províncias principais)
  const dadosProvincias = [
    { nome: 'Luanda', agregados: 25000, membros: 95000, pobres: 12000, programas: 12 },
    { nome: 'Huíla', agregados: 15000, membros: 55000, pobres: 8000, programas: 10 },
    { nome: 'Benguela', agregados: 12000, membros: 42000, pobres: 6000, programas: 9 },
    { nome: 'Huambo', agregados: 10000, membros: 38000, pobres: 5000, programas: 8 },
    { nome: 'Cabinda', agregados: 8000, membros: 28000, pobres: 3500, programas: 7 },
    { nome: 'Kwanza Sul', agregados: 7000, membros: 25000, pobres: 3000, programas: 6 },
    { nome: 'Malanje', agregados: 6000, membros: 22000, pobres: 2800, programas: 6 },
    { nome: 'Uíge', agregados: 5500, membros: 20000, pobres: 2500, programas: 5 },
    { nome: 'Zaire', agregados: 4500, membros: 16000, pobres: 2000, programas: 5 },
    { nome: 'Cunene', agregados: 4000, membros: 15000, pobres: 1800, programas: 4 },
    { nome: 'Namibe', agregados: 3500, membros: 13000, pobres: 1500, programas: 4 },
    { nome: 'Cuando Cubango', agregados: 3000, membros: 11000, pobres: 1200, programas: 3 },
    { nome: 'Lunda Norte', agregados: 2800, membros: 10000, pobres: 1100, programas: 3 },
    { nome: 'Lunda Sul', agregados: 2500, membros: 9000, pobres: 1000, programas: 3 },
    { nome: 'Moxico', agregados: 2200, membros: 8000, pobres: 900, programas: 2 },
    { nome: 'Bié', agregados: 2000, membros: 7500, pobres: 800, programas: 2 },
    { nome: 'Kwanza Norte', agregados: 1800, membros: 6500, pobres: 700, programas: 2 },
    { nome: 'Bengo', agregados: 1500, membros: 5500, pobres: 600, programas: 2 }
  ];

  // Totais nacionais
  const totais = {
    agregados: dadosProvincias.reduce((sum, p) => sum + p.agregados, 0),
    membros: dadosProvincias.reduce((sum, p) => sum + p.membros, 0),
    pobres: dadosProvincias.reduce((sum, p) => sum + p.pobres, 0),
    programas: Math.max(...dadosProvincias.map(p => p.programas))
  };

  return (
    <section id="indicadores" className="py-20 bg-gradient-to-br from-csu-red via-red-700 to-red-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Indicadores</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Números que mostram o impacto real do sistema CSU em Angola
          </p>
        </div>
        
        {/* Indicadores Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-csu-white mb-3">
                {totais.agregados.toLocaleString()}
              </div>
              <div className="text-sm lg:text-base text-white/90 leading-tight">Agregados Cadastrados</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-csu-white mb-3">
                {totais.membros.toLocaleString()}
              </div>
              <div className="text-sm lg:text-base text-white/90 leading-tight">Membros Cadastrados</div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-csu-white mb-3">
                {totais.pobres.toLocaleString()}
              </div>
              <div className="text-sm lg:text-base text-white/90 leading-tight">
                Agregados em Situação de Pobreza
                <br />
                <span className="text-xs">(Grupo 1 e Grupo 2)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-csu-white mb-3">
                {totais.programas}
              </div>
              <div className="text-sm lg:text-base text-white/90 leading-tight">
                Programas Sociais que Utilizam o CSU
              </div>
            </div>
          </div>
        </div>

        {/* Detalhes por Província */}
        {showDetails && (
          <div className="mb-12 animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              📊 Indicadores por Província
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-2 font-semibold">Província</th>
                      <th className="text-right py-4 px-2 font-semibold">Agregados</th>
                      <th className="text-right py-4 px-2 font-semibold">Membros</th>
                      <th className="text-right py-4 px-2 font-semibold">Pobres</th>
                      <th className="text-right py-4 px-2 font-semibold">Programas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dadosProvincias.map((provincia, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-3 px-2 font-medium">{provincia.nome}</td>
                        <td className="py-3 px-2 text-right">{provincia.agregados.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right">{provincia.membros.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right">{provincia.pobres.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right">{provincia.programas}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-white/30 font-bold">
                      <td className="py-4 px-2">TOTAL</td>
                      <td className="py-4 px-2 text-right">{totais.agregados.toLocaleString()}</td>
                      <td className="py-4 px-2 text-right">{totais.membros.toLocaleString()}</td>
                      <td className="py-4 px-2 text-right">{totais.pobres.toLocaleString()}</td>
                      <td className="py-4 px-2 text-right">{totais.programas}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="btn flex flex-row items-center justify-center mx-auto bg-csu-white hover:bg-csu-white/90 text-csu-black border-none px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            {showDetails ? 'Ocultar detalhes' : 'Ver mais indicadores'}
          </button>
        </div>
      </div>
    </section>
  );
} 