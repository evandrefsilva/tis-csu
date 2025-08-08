'use client';

export default function Documentos() {
  const data = [
    {
      title: "Instituto de Supervisão das Actividades Comunitárias",
      desc: "Documento legal sobre a supervisão das ações comunitárias",
      icon: "📄",
      type: "PDF",
      doc: "/docs/1_decreto_presidencial_2_23_estatuto_organico_do_masfamu_87425609963c552f6a7e43_59ce44227f.pdf"
    },
    {
      title: "Decreto Presidencial do Prémio Nacional 'Mulher de Mérito'",
      desc: "Estabelece o Prémio Nacional destinado à Mulher de Mérito",
      icon: "🏅",
      type: "PDF",
      doc: "/docs/2_decreto_presidencial_hoje_76167566561092a974aca3_0c09397fb8.pdf"
    },
    {
      title: "Decreto Presidencial nº 226/20",
      desc: "Legislação presidencial referente à ação social",
      icon: "📜",
      type: "PDF",
      doc: "/docs/3_decreto_premio_nacional_mulher_de_merito_15230486316215e7f48838b_be4273b446.pdf"
    },
    {
      title: "Decreto Presidencial nº 2/23",
      desc: "Decreto legal com foco em políticas sociais",
      icon: "📝",
      type: "PDF",
      doc: "/docs/Instituto_de_Supervisao_das_Actividades_Comunitarias_baca5bd078.pdf"
    }
  ]
  
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.map((doc, index) => (
            <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-csu-red/20">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="card-title text-xl justify-center text-csu-black">{doc.title}</h3>
                <p className="text-csu-black/70">{doc.desc}</p>
                <div className="card-actions justify-center mt-4">
                  <a download={doc.doc} href={doc.doc} className="btn btn-sm bg-csu-red text-white hover:bg-csu-red/90 border-none">
                    Baixar {doc.type}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 