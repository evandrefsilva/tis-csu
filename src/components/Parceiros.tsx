'use client';

export default function Parceiros() {
  const parceiros = ["/parceiros/cisp.jpg", "/parceiros/in.jpg", "/parceiros/inac.jpg", "/parceiros/mirex.jpg", "/parceiros/sepe.jpg", "/parceiros/sme.jpg"]
  return (
    <section id="parceiros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-csu-black mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-xl text-csu-black/70 max-w-3xl mx-auto">
            Instituições que trabalham conosco para melhorar a vida dos angolanos
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {parceiros.map((parceiro, index) => (
            <div key={index} className="card bg-csu-red/5 hover:bg-csu-white/10 transition-colors cursor-pointer border rounded-lg border-csu-red/20">
              <div className="card-body text-center p-6">
                <img src={parceiro} alt="" className="image-fit rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 