'use client';

export default function Header() {
  return (
    <header className="bg-csu-red text-white shadow-lg sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#indicadores" className="text-csu-red">Indicadores</a></li>
              <li><a href="#documentos" className="text-csu-red">Documentos</a></li>
              <li><a href="#parceiros" className="text-csu-red">Parceiros</a></li>
              <li><a href="#faqs" className="text-csu-red">FAQs</a></li>
              <li><a href="#contato" className="text-csu-red">Contato</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-csu-yellow rounded-full flex items-center justify-center">
              <span className="text-csu-black font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold">CSU</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><a href="#indicadores">Indicadores</a></li>
            <li><a href="#documentos">Documentos</a></li>
            <li><a href="#parceiros">Parceiros</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-csu-yellow text-csu-black hover:bg-csu-yellow/90 border-none">
            Plataforma do CSU
          </button>
        </div>
      </div>
    </header>
  );
} 