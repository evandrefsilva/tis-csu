'use client';
import { useState } from 'react';

export default function Modal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [denunciaStep, setDenunciaStep] = useState(1);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    nome: '',
    telefone: '',
    sexo: '',
    dataNascimento: '',
    email: '',
    // Step 2
    concelho: '',
    zona: '',
    endereco: '',
    possuiCadastro: 'nao',
    nia: '',
    // Step 3
    descricao: '',
    quemEscreveu: 'reclamante',
    documentos: null,
    termos: false
  });
  
  const [denunciaData, setDenunciaData] = useState({
    // Step 1 - Identificação
    nomeDenunciante: '',
    telefoneDenunciante: '',
    sexoDenunciante: '',
    dataNascimentoDenunciante: '',
    emailDenunciante: '',
    // Step 2 - Denúncia
    concelhoDenuncia: '',
    descricaoDenuncia: '',
    quemEscreveuDenuncia: 'denunciante',
    documentosDenuncia: null,
    termosDenuncia: false
  });

  const handleInputChange = (field: string, value: string | boolean | FileList | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDenunciaInputChange = (field: string, value: string | boolean | FileList | null) => {
    setDenunciaData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDenunciaNext = () => {
    if (denunciaStep < 2) {
      setDenunciaStep(denunciaStep + 1);
    }
  };

  const handleDenunciaPrevious = () => {
    if (denunciaStep > 1) {
      setDenunciaStep(denunciaStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Dados do formulário:', formData);
    alert('Reclamação enviada com sucesso!');
  };

  const handleDenunciaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Dados da denúncia:', denunciaData);
    alert('Denúncia enviada com sucesso!');
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.nome && formData.telefone && formData.sexo && formData.dataNascimento;
      case 2:
        return formData.concelho && formData.zona && formData.endereco;
      case 3:
        return formData.descricao && formData.quemEscreveu && formData.termos;
      default:
        return false;
    }
  };

  const isDenunciaStepValid = (step: number) => {
    if (isAnonymous) {
      switch (step) {
        case 1:
          return true; // Anônimo não precisa de dados pessoais
        case 2:
          return denunciaData.concelhoDenuncia && denunciaData.descricaoDenuncia && denunciaData.termosDenuncia;
        default:
          return false;
      }
    } else {
      switch (step) {
        case 1:
          return denunciaData.nomeDenunciante && denunciaData.telefoneDenunciante && denunciaData.sexoDenunciante && denunciaData.dataNascimentoDenunciante;
        case 2:
          return denunciaData.concelhoDenuncia && denunciaData.descricaoDenuncia && denunciaData.termosDenuncia;
        default:
          return false;
      }
    }
  };

  return (
    <>
      {/* Modal Reclamação */}
      <dialog id="modal-reclamacao" className="modal">
        <div className="modal-box w-11/12 max-w-3xl bg-white shadow-2xl p-4 sm:p-6 md:p-8">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-gray-100">✕</button>
          </form>
          
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-4 flex-col sm:flex-row">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-csu-red rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-csu-black text-center">Formulário de Reclamação</h3>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 overflow-x-auto">
              <div className="flex items-center space-x-2 sm:space-x-6 min-w-max">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm transition-all duration-300 ${
                      step <= currentStep ? 'bg-csu-red scale-110' : 'bg-gray-300'
                    }`}>
                      {step < currentStep ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      ) : (
                        step
                      )}
                    </div>
                    <span className={`ml-2 sm:ml-3 text-xs sm:text-sm font-medium transition-colors duration-300 hidden sm:block ${
                      step <= currentStep ? 'text-csu-red' : 'text-gray-500'
                    }`}>
                      {step === 1 ? 'Identificação' : step === 2 ? 'Endereço' : 'Reclamação'}
                    </span>
                    {step < 3 && (
                      <div className={`w-6 sm:w-12 h-1 ml-2 sm:ml-6 transition-all duration-300 ${
                        step < currentStep ? 'bg-csu-red' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Identificação */}
            <div className={`transition-all duration-500 ${currentStep === 1 ? 'block' : 'hidden'}`}>
              <div className="bg-gradient-to-br from-csu-red/5 via-csu-yellow/5 to-csu-red/10 p-4 sm:p-6 md:p-8 rounded-xl border-2 border-csu-red/30 shadow-lg">
                <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-csu-black flex items-center justify-center flex-col sm:flex-row">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-csu-red rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-4">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <span className="text-center">Informações do Reclamante</span>
                </h4>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Primeira linha - Nome e Telefone */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="form-control">
                      <label className="label pb-2 sm:pb-3">
                        <span className="label-text font-bold text-csu-black text-base sm:text-lg">Nome do Reclamante *</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Nome completo" 
                        className="input input-md sm:input-lg input-bordered bg-white border-2 border-csu-red/30 focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 rounded-lg" 
                        value={formData.nome}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="form-control">
                      <label className="label pb-2 sm:pb-3">
                        <span className="label-text font-bold text-csu-black text-base sm:text-lg">Telemóvel *</span>
                      </label>
                      <input 
                        type="tel" 
                        placeholder="Número de telefone" 
                        className="input input-md sm:input-lg input-bordered bg-white border-2 border-csu-red/30 focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 rounded-lg" 
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  {/* Segunda linha - Sexo e Data Nascimento */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="form-control">
                      <label className="label pb-3">
                        <span className="label-text font-bold text-csu-black text-lg">Sexo *</span>
                      </label>
                      <select 
                        className="select select-lg select-bordered bg-white border-2 border-csu-red/30 focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 rounded-lg" 
                        value={formData.sexo}
                        onChange={(e) => handleInputChange('sexo', e.target.value)}
                        required
                      >
                        <option value="">Selecione o sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                      </select>
                    </div>
                    
                    <div className="form-control">
                      <label className="label pb-3">
                        <span className="label-text font-bold text-csu-black text-lg">Data de Nascimento *</span>
                      </label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="dd/mm/aaaa" 
                          className="input input-lg input-bordered w-full pr-12 bg-white border-2 border-csu-red/30 focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 rounded-lg" 
                          value={formData.dataNascimento}
                          onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                          required 
                        />
                        <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-csu-red/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Terceira linha - Email (largura total) */}
                  <div className="form-control">
                    <label className="label block pb-3">
                      <span className="label-text block font-bold text-csu-black text-lg">Email de Contacto (Opcional)</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="input input-lg w-full input-bordered bg-white border-2 border-csu-red/30 focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 rounded-lg" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2: Endereço */}
            <div className={`transition-all duration-500 ${currentStep === 2 ? 'block' : 'hidden'}`}>
              <div className="bg-gradient-to-br from-csu-black/5 via-csu-yellow/5 to-csu-black/10 p-8 rounded-xl border-2 border-csu-black/30 shadow-lg">
                <h4 className="font-bold text-2xl mb-8 text-csu-black flex items-center justify-center">
                  <div className="w-10 h-10 bg-csu-black rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  Localização do Reclamante
                </h4>
                
                <div className="space-y-8">
                  {/* Primeira linha - Concelho e Zona */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="form-control">
                      <label className="label pb-3">
                        <span className="label-text font-bold text-csu-black text-lg">Concelho *</span>
                      </label>
                      <select 
                        className="select select-lg select-bordered bg-white border-2 border-csu-black/30 focus:border-csu-black focus:ring-2 focus:ring-csu-black/20 transition-all duration-300 rounded-lg" 
                        value={formData.concelho}
                        onChange={(e) => handleInputChange('concelho', e.target.value)}
                        required
                      >
                        <option value="">Selecione o concelho</option>
                        <option value="praia">Praia</option>
                        <option value="mindelo">Mindelo</option>
                        <option value="sal">Sal</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                    
                    <div className="form-control">
                      <label className="label pb-3">
                        <span className="label-text font-bold text-csu-black text-lg">Zona *</span>
                      </label>
                      <select 
                        className="select select-lg select-bordered bg-white border-2 border-csu-black/30 focus:border-csu-black focus:ring-2 focus:ring-csu-black/20 transition-all duration-300 rounded-lg" 
                        value={formData.zona}
                        onChange={(e) => handleInputChange('zona', e.target.value)}
                        required
                      >
                        <option value="">Selecione a zona</option>
                        <option value="zona1">Zona 1</option>
                        <option value="zona2">Zona 2</option>
                        <option value="zona3">Zona 3</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Segunda linha - Endereço (largura total) */}
                  <div className="form-control">
                    <label className="label block pb-3">
                      <span className="label-text font-bold text-csu-black text-lg">Referência da Morada *</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Endereço completo" 
                      className="input input-lg w-full input-bordered bg-white border-2 border-csu-black/30 focus:border-csu-black focus:ring-2 focus:ring-csu-black/20 transition-all duration-300 rounded-lg" 
                      value={formData.endereco}
                      onChange={(e) => handleInputChange('endereco', e.target.value)}
                      required 
                    />
                  </div>
                  
                  {/* Terceira linha - Cadastro e NIA */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="form-control">
                      <label className="label pb-3">
                        <span className="label-text font-bold text-csu-black text-lg">Possui Cadastro?</span>
                      </label>
                      <select 
                        className="select select-lg select-bordered bg-white border-2 border-csu-black/30 focus:border-csu-black focus:ring-2 focus:ring-csu-black/20 transition-all duration-300 rounded-lg"
                        value={formData.possuiCadastro}
                        onChange={(e) => handleInputChange('possuiCadastro', e.target.value)}
                      >
                        <option value="nao">Não</option>
                        <option value="sim">Sim</option>
                      </select>
                    </div>
                    
                    <div className="form-control">
                      <label className="label pb-3">
                        <span className="label-text font-bold text-csu-black text-lg">Número de Identificação (NIA)</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="Número de Identificação" 
                        className="input input-lg input-bordered bg-white border-2 border-csu-black/30 focus:border-csu-black focus:ring-2 focus:ring-csu-black/20 transition-all duration-300 rounded-lg"
                        value={formData.nia}
                        onChange={(e) => handleInputChange('nia', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3: Reclamação */}
            <div className={`transition-all duration-500 ${currentStep === 3 ? 'block' : 'hidden'}`}>
              <div className="bg-gradient-to-br from-csu-yellow/5 via-csu-red/5 to-csu-yellow/10 p-8 rounded-xl border-2 border-csu-yellow/30 shadow-lg">
                <h4 className="font-bold text-2xl mb-8 text-csu-black flex items-center justify-center">
                  <div className="w-10 h-10 bg-csu-yellow rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-csu-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  Detalhes da Reclamação
                </h4>
                
                <div className="space-y-8">
                  {/* Descrição da Reclamação */}
                  <div className="form-control">
                    <label className="label block pb-3">
                      <span className="label-text font-bold text-csu-black text-lg">Descrição da Reclamação *</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered w-full h-40 text-lg focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 bg-white border-2 border-csu-yellow/30 rounded-lg resize-none" 
                      placeholder="Descreva detalhadamente sua reclamação, incluindo fatos, datas e pessoas envolvidas..."
                      value={formData.descricao}
                      onChange={(e) => handleInputChange('descricao', e.target.value)}
                      required
                    ></textarea>
                  </div>
                  
                  {/* Quem escreveu */}
                  <div className="form-control">
                    <label className="label block pb-3">
                      <span className="label-text font-bold text-csu-black text-lg">Quem escreveu esta reclamação? *</span>
                    </label>
                    <select 
                      className="select select-lg w-full select-bordered bg-white border-2 border-csu-yellow/30 focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 rounded-lg"
                      value={formData.quemEscreveu}
                      onChange={(e) => handleInputChange('quemEscreveu', e.target.value)}
                      required
                    >
                      <option value="reclamante">O reclamante</option>
                      <option value="representante">Representante legal</option>
                      <option value="terceiro">Terceiro</option>
                    </select>
                  </div>
                  
                  {/* Anexar Documentos */}
                  <div className="form-control">
                    <label className="label pb-3">
                      <span className="label-text font-bold text-csu-black text-lg">Anexar Documentos</span>
                    </label>
                    <div className="border-2 border-dashed border-csu-yellow/30 rounded-lg p-6 bg-white hover:border-csu-yellow/50 transition-all duration-300">
                      <input 
                        type="file" 
                        className="file-input file-input-bordered w-full focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 rounded-lg" 
                        multiple 
                        onChange={(e) => handleInputChange('documentos', e.target.files)}
                      />
                      <p className="text-sm text-gray-500 mt-3">Formatos aceitos: PDF, JPG, PNG (máx. 5MB cada)</p>
                    </div>
                  </div>
                  
                  {/* Termos e Condições */}
                  <div className="form-control">
                    <div className="bg-white p-6 rounded-lg border-2 border-csu-yellow/30 shadow-sm">
                      <label className="label cursor-pointer">
                        <div className="flex items-start space-x-4">
                          <input 
                            type="checkbox" 
                            className="checkbox checkbox-primary mt-1" 
                            checked={formData.termos}
                            onChange={(e) => handleInputChange('termos', e.target.checked)}
                            required 
                          />
                          <div className="flex-1">
                            <span className="label-text font-bold text-csu-black text-lg">Concordo com os termos de uso e política de privacidade *</span>
                            <p className="text-sm text-wrap text-gray-600 mt-2">
                              Ao marcar esta opção, você concorda com o processamento dos seus dados pessoais para fins de análise e resolução da reclamação.
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
                                 {/* Navigation Buttons */}
                     <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-10 gap-4 sm:gap-6">
                       <button 
                         type="button" 
                         className={`btn btn-md sm:btn-lg px-4 sm:px-8 transition-all duration-300 w-full sm:w-auto ${
                           currentStep > 1 
                             ? 'bg-csu-black text-white hover:bg-gray-800 shadow-lg hover:scale-105 border-2 border-csu-black rounded-lg' 
                             : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300 rounded-lg'
                         }`}
                         onClick={handlePrevious}
                         disabled={currentStep === 1}
                       >
                         <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                         </svg>
                         Anterior
                       </button>
                       
                       <div className="flex gap-4 sm:gap-6 w-full sm:w-auto">
                         {currentStep < 3 ? (
                           <button 
                             type="button" 
                             className={`btn btn-md sm:btn-lg px-4 sm:px-8 transition-all duration-300 w-full ${
                               isStepValid(currentStep)
                                 ? 'bg-csu-yellow text-csu-black hover:bg-yellow-400 shadow-lg hover:scale-105 border-2 border-csu-yellow font-bold rounded-lg'
                                 : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300 rounded-lg'
                             }`}
                             onClick={handleNext}
                             disabled={!isStepValid(currentStep)}
                           >
                             Seguinte
                             <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                             </svg>
                           </button>
                         ) : (
                           <button 
                             type="submit" 
                             className={`btn btn-md sm:btn-lg px-4 sm:px-8 transition-all duration-300 w-full ${
                               isStepValid(currentStep)
                                 ? 'bg-csu-red text-white hover:bg-csu-red/90 shadow-lg hover:scale-105 border-2 border-csu-red font-bold rounded-lg'
                                 : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300 rounded-lg'
                             }`}
                             disabled={!isStepValid(currentStep)}
                           >
                             <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                             </svg>
                             Enviar Reclamação
                           </button>
                         )}
                       </div>
                     </div>
          </form>
          
          {/* Progress Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
              <div className="w-2 h-2 bg-csu-red rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-600">Etapa {currentStep} de 3</span>
            </div>
          </div>
        </div>
      </dialog>

      {/* Modal Denúncia */}
      <dialog id="modal-denuncia" className="modal">
        <div className="modal-box w-11/12 max-w-3xl bg-white shadow-2xl p-4 sm:p-6 md:p-8">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-gray-100">✕</button>
          </form>
          
                    {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-4 flex-col sm:flex-row">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-csu-yellow rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-csu-black text-center">Formulário de Denúncia</h3>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 overflow-x-auto">
              <div className="flex items-center space-x-2 sm:space-x-6 min-w-max">
                                {[1, 2].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm transition-all duration-300 ${
                      step <= 1 ? 'bg-csu-yellow scale-110' : 'bg-gray-300'
                    }`}>
                      {step < 1 ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      ) : (
                        step
                      )}
                    </div>
                    <span className={`ml-2 sm:ml-3 text-xs sm:text-sm font-medium transition-colors duration-300 hidden sm:block ${
                      step <= 1 ? 'text-csu-yellow' : 'text-gray-500'
                    }`}>
                      {step === 1 ? 'Identificação' : 'Denúncia'}
                    </span>
                    {step < 2 && (
                      <div className={`w-6 sm:w-12 h-1 ml-2 sm:ml-6 transition-all duration-300 ${
                        step < 1 ? 'bg-csu-yellow' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
                      <form onSubmit={handleDenunciaSubmit} className="space-y-6">
              {/* Step 1: Identificação */}
              <div className={`transition-all duration-500 ${denunciaStep === 1 ? 'block' : 'hidden'}`}>
                                       <div className="bg-gradient-to-br from-csu-yellow/5 via-csu-yellow/5 to-csu-yellow/10 p-8 rounded-xl border-2 border-csu-yellow/30 shadow-lg">
                  <h4 className="font-bold text-2xl mb-8 text-csu-black flex items-center justify-center">
                                               <div className="w-10 h-10 bg-csu-yellow rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    Informações do Denunciante
                  </h4>
                  
                                    {/* Opção de Denúncia Anônima */}
                  <div className="mb-6 sm:mb-8">
                    <button
                      type="button"
                      className={`btn btn-outline w-full p-3 sm:p-4 border-2 transition-all duration-300 text-sm sm:text-base ${
                        isAnonymous 
                          ? 'border-csu-yellow bg-csu-yellow/10 text-csu-black' 
                          : 'border-csu-yellow/30 hover:border-csu-yellow'
                      }`}
                      onClick={() => setIsAnonymous(!isAnonymous)}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Quero fazer uma denúncia anónima
                    </button>
                  </div>
                  
                  {!isAnonymous && (
                    <div className="space-y-8">
                      {/* Primeira linha - Nome e Telefone */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="form-control">
                          <label className="label block pb-3">
                            <span className="label-text block font-bold text-csu-black text-lg">Nome do Denunciante *</span>
                          </label>
                          <input 
                            type="text" 
                            placeholder="Nome completo" 
                            className="input input-lg w-full input-bordered bg-white border-2 border-csu-yellow/30 focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 rounded-lg" 
                            value={denunciaData.nomeDenunciante}
                            onChange={(e) => handleDenunciaInputChange('nomeDenunciante', e.target.value)}
                            required 
                          />
                        </div>
                        
                        <div className="form-control">
                          <label className="label block pb-3">
                            <span className="label-text block font-bold text-csu-black text-lg">Telemóvel *</span>
                          </label>
                          <input 
                            type="tel" 
                            placeholder="Número de telefone" 
                            className="input input-lg w-full input-bordered bg-white border-2 border-csu-yellow/30 focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 rounded-lg" 
                            value={denunciaData.telefoneDenunciante}
                            onChange={(e) => handleDenunciaInputChange('telefoneDenunciante', e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      
                      {/* Segunda linha - Sexo e Data Nascimento */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="form-control">
                          <label className="label block pb-3">
                            <span className="label-text block font-bold text-csu-black text-lg">Sexo *</span>
                          </label>
                          <select 
                            className="select select-lg w-full select-bordered bg-white border-2 border-csu-yellow/30 focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 rounded-lg" 
                            value={denunciaData.sexoDenunciante}
                            onChange={(e) => handleDenunciaInputChange('sexoDenunciante', e.target.value)}
                            required
                          >
                            <option value="">Sexo do denunciante</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                          </select>
                        </div>
                        
                        <div className="form-control">
                          <label className="label block pb-3">
                            <span className="label-text block font-bold text-csu-black text-lg">Data nascimento *</span>
                          </label>
                          <div className="relative">
                            <input 
                              type="text" 
                              placeholder="dd/mm/aaaa" 
                              className="input input-lg w-full pr-12 input-bordered bg-white border-2 border-csu-yellow/30 focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 rounded-lg" 
                              value={denunciaData.dataNascimentoDenunciante}
                              onChange={(e) => handleDenunciaInputChange('dataNascimentoDenunciante', e.target.value)}
                              required 
                            />
                            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-csu-yellow/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Terceira linha - Email (largura total) */}
                      <div className="form-control">
                        <label className="label block pb-3">
                          <span className="label-text block font-bold text-csu-black text-lg">Caso tenha, informe um email de contacto</span>
                        </label>
                        <input 
                          type="email" 
                          placeholder="seu@email.com" 
                          className="input input-lg w-full input-bordered bg-white border-2 border-csu-yellow/30 focus:border-csu-yellow focus:ring-2 focus:ring-csu-yellow/20 transition-all duration-300 rounded-lg" 
                          value={denunciaData.emailDenunciante}
                          onChange={(e) => handleDenunciaInputChange('emailDenunciante', e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Step 2: Denúncia */}
              <div className={`transition-all duration-500 ${denunciaStep === 2 ? 'block' : 'hidden'}`}>
                                       <div className="bg-gradient-to-br from-csu-red/5 via-csu-red/5 to-csu-red/10 p-8 rounded-xl border-2 border-csu-red/30 shadow-lg">
                  <h4 className="font-bold text-2xl mb-8 text-csu-black flex items-center justify-center">
                                               <div className="w-10 h-10 bg-csu-red rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    Descreva a sua denúncia
                  </h4>
                  
                  <div className="space-y-8">
                    {/* Concelho */}
                    <div className="form-control">
                      <label className="label block pb-3">
                        <span className="label-text block font-bold text-csu-black text-lg">Concelho *</span>
                      </label>
                      <select 
                                                    className="select select-lg w-full select-bordered bg-white border-2 border-csu-red/30 focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 rounded-lg" 
                            value={denunciaData.concelhoDenuncia}
                            onChange={(e) => handleDenunciaInputChange('concelhoDenuncia', e.target.value)}
                            required
                          >
                        <option value="">Concelho da ocorrência</option>
                        <option value="praia">Praia</option>
                        <option value="mindelo">Mindelo</option>
                        <option value="sal">Sal</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                    
                    {/* Descrição da Denúncia */}
                    <div className="form-control">
                      <label className="label block pb-3">
                        <span className="label-text block font-bold text-csu-black text-lg">Descrição da Denúncia *</span>
                      </label>
                      <textarea 
                                                    className="textarea textarea-bordered w-full h-40 text-lg focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 bg-white border-2 border-csu-red/30 rounded-lg resize-none" 
                            placeholder="Descreva detalhadamente os fatos que você está denunciando, incluindo datas, pessoas envolvidas e evidências..."
                            value={denunciaData.descricaoDenuncia}
                            onChange={(e) => handleDenunciaInputChange('descricaoDenuncia', e.target.value)}
                            required
                          ></textarea>
                    </div>
                    
                    {/* Quem escreveu */}
                    <div className="form-control">
                      <label className="label block pb-3">
                        <span className="label-text block font-bold text-csu-black text-lg">Quem escreveu esta denúncia? *</span>
                      </label>
                      <select 
                                                    className="select select-lg w-full select-bordered bg-white border-2 border-csu-red/30 focus:border-csu-red focus:ring-2 focus:ring-csu-red/20 transition-all duration-300 rounded-lg"
                            value={denunciaData.quemEscreveuDenuncia}
                            onChange={(e) => handleDenunciaInputChange('quemEscreveuDenuncia', e.target.value)}
                            required
                          >
                        <option value="denunciante">O denunciante</option>
                        <option value="representante">Representante legal</option>
                        <option value="terceiro">Terceiro</option>
                      </select>
                    </div>
                    
                    {/* Termos e Condições */}
                    <div className="form-control">
                                                   <div className="bg-white p-6 rounded-lg border-2 border-csu-red/30 shadow-sm">
                        <label className="label cursor-pointer">
                          <div className="flex items-start space-x-4">
                            <input 
                              type="checkbox" 
                              className="checkbox checkbox-primary mt-1" 
                              checked={denunciaData.termosDenuncia}
                              onChange={(e) => handleDenunciaInputChange('termosDenuncia', e.target.checked)}
                              required 
                            />
                            <div className="flex-1">
                              <span className="label-text font-bold text-csu-black text-lg">Concordo com os termos de uso e política de privacidade *</span>
                              <p className="text-sm text-wrap text-gray-600 mt-2">
                                Ao marcar esta opção, você concorda com o processamento dos seus dados pessoais para fins de análise e resolução da denúncia.
                              </p>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
                                   {/* Navigation Buttons */}
                     <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-10 gap-4 sm:gap-6">
                       <button 
                         type="button" 
                         className={`btn btn-md sm:btn-lg px-4 sm:px-8 transition-all duration-300 w-full sm:w-auto ${
                           denunciaStep > 1 
                             ? 'bg-csu-black text-white hover:bg-gray-800 shadow-lg hover:scale-105 border-2 border-csu-black rounded-lg' 
                             : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300 rounded-lg'
                         }`}
                         onClick={handleDenunciaPrevious}
                         disabled={denunciaStep === 1}
                       >
                         <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                         </svg>
                         Anterior
                       </button>
                       
                       <div className="flex gap-4 sm:gap-6 w-full sm:w-auto">
                         {denunciaStep < 2 ? (
                           <button 
                             type="button" 
                             className={`btn btn-md sm:btn-lg px-4 sm:px-8 transition-all duration-300 w-full ${
                               isDenunciaStepValid(denunciaStep)
                                 ? 'bg-csu-yellow text-csu-black hover:bg-csu-yellow/90 shadow-lg hover:scale-105 border-2 border-csu-yellow font-bold rounded-lg'
                                 : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300 rounded-lg'
                             }`}
                             onClick={handleDenunciaNext}
                             disabled={!isDenunciaStepValid(denunciaStep)}
                           >
                             Seguinte
                             <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                             </svg>
                           </button>
                         ) : (
                           <button 
                             type="submit" 
                             className={`btn btn-md sm:btn-lg px-4 sm:px-8 transition-all duration-300 w-full ${
                               isDenunciaStepValid(denunciaStep)
                                 ? 'bg-csu-red text-white hover:bg-csu-red/90 shadow-lg hover:scale-105 border-2 border-csu-red font-bold rounded-lg'
                                 : 'bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300 rounded-lg'
                             }`}
                             disabled={!isDenunciaStepValid(denunciaStep)}
                           >
                             <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                             </svg>
                             Enviar Denúncia
                           </button>
                         )}
                       </div>
                     </div>
            </form>
        </div>
      </dialog>
    </>
  );
} 