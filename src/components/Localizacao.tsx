"use client";
import Map from "./Map";

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
            
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11304.205419213182!2d13.239989497058989!3d-8.822550998614622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f388f49cf983%3A0x9f4e3c0db10e958c!2sMASFAMU!5e1!3m2!1spt-PT!2sao!4v1754660053637!5m2!1spt-PT!2sao"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>

          {/* Locations */}
          <div className="space-y-6">

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
