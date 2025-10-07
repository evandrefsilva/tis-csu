'use client';
import { useState, useEffect } from 'react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
      
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('csu-welcome-seen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-11/12 mx-4 p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-csu-red rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-white">C</span>
          </div>
          <h1 className="text-2xl font-bold text-csu-black mb-2">
            Bem-vindo ao CSU
          </h1>
          <p className="text-gray-600">
            Cadastro Social Único de Angola
          </p>
        </div>

        {/* Conteúdo */}
        <div className="text-center mb-6">
          <p className="text-gray-700 mb-4">
            Seja bem-vindo ao portal oficial do CSU, 
            sistema do MASFAMU para programas sociais.
          </p>
          <p className="text-sm text-gray-600">
            Cadastro gratuito disponível em todas as províncias.
          </p>
        </div>

        {/* Botão */}
        <button
          onClick={handleClose}
          className="w-full bg-csu-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-csu-red/90 transition-colors"
        >
          Entendi
        </button>
      </div>
    </div>
  );
}
