import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Rocket, Copy, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LPPromptGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    briefing: '',
    objetivo: '',
    copy: '',
    elementos: [],
    efeitos: '',
    tipoLP: '',
    observacoes: '',
    linksCliente: '',
    logo: ''
  });

  const steps = [
    {
      title: "Briefing do Cliente",
      subtitle: "Conte-nos sobre o projeto",
      field: "briefing",
      type: "textarea",
      placeholder: "Descreva o negócio, produto/serviço, público-alvo, diferenciais, proposta de valor...",
      icon: "📋"
    },
    {
      title: "Objetivo da Página", 
      subtitle: "Qual é o resultado esperado?",
      field: "objetivo",
      type: "textarea",
      placeholder: "Ex: Capturar leads, vender produto, agendar consulta, baixar ebook...",
      icon: "🎯"
    },
    {
      title: "Copy da Landing Page",
      subtitle: "Todo o texto que deve aparecer",
      field: "copy",
      type: "textarea",
      placeholder: "Headlines, subtítulos, descrições, depoimentos, CTAs, textos dos botões...",
      icon: "✍️"
    },
    {
      title: "Elementos Necessários",
      subtitle: "Funcionalidades e componentes",
      field: "elementos",
      type: "checkbox",
      icon: "🔧",
      options: [
        "Formulário de contato",
        "Quiz interativo", 
        "Botão WhatsApp",
        "Depoimentos/Testimonials",
        "FAQ",
        "Galeria de imagens",
        "Vídeo embed",
        "Contador regressivo",
        "Pop-up",
        "Chat bot",
        "Integração com redes sociais",
        "Seção de preços",
        "Outros"
      ]
    },
    {
      title: "Efeitos e Transições",
      subtitle: "Como deve se comportar a página",
      field: "efeitos",
      type: "textarea", 
      placeholder: "Animações de entrada, hover effects, scroll reveal, parallax, transições suaves...",
      icon: "✨"
    },
    {
      title: "Estilo da Landing Page",
      subtitle: "Qual visual você busca?",
      field: "tipoLP",
      type: "radio",
      icon: "🎨",
      options: [
        "Sofisticado/Elegante",
        "Tecnológico/Moderno",
        "Clean/Minimalista", 
        "Retrô/Vintage",
        "Criativo/Artístico",
        "Corporativo/Profissional",
        "Jovem/Descolado",
        "Luxo/Premium"
      ]
    },
    {
      title: "Links e Referências",
      subtitle: "Site do cliente e inspirações",
      field: "linksCliente",
      type: "textarea",
      placeholder: "Links do site atual, redes sociais, competitors, inspirações...",
      icon: "🔗"
    },
    {
      title: "Logo e Paleta",
      subtitle: "Identidade visual",
      field: "logo",
      type: "textarea",
      placeholder: "Link do logo, cores da marca, paleta preferida, fontes utilizadas...",
      icon: "🎭"
    },
    {
      title: "Observações Finais",
      subtitle: "Detalhes importantes",
      field: "observacoes", 
      type: "textarea",
      placeholder: "Prazo, restrições, preferências específicas, informações adicionais...",
      icon: "📝"
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field, option) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(option) 
        ? prev[field].filter(item => item !== option)
        : [...prev[field], option]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep) / steps.length) * 100;

  const generatePrompt = () => {
    return `# PROMPT PARA CRIAR LANDING PAGE NO LOVABLE

## 📋 BRIEFING DO CLIENTE
${formData.briefing}

## 🎯 OBJETIVO DA PÁGINA
${formData.objetivo}

## ✍️ COPY COMPLETA
${formData.copy}

## 🔧 ELEMENTOS NECESSÁRIOS
${formData.elementos.length > 0 ? formData.elementos.map(el => `• ${el}`).join('\n') : 'Não especificado'}

## ✨ EFEITOS E TRANSIÇÕES
${formData.efeitos}

## 🎨 ESTILO DA LANDING PAGE
${formData.tipoLP}

## 🔗 LINKS E REFERÊNCIAS
${formData.linksCliente}

## 🎭 LOGO E PALETA DE CORES
${formData.logo}

## 📝 OBSERVAÇÕES FINAIS
${formData.observacoes}

---

## 💻 INSTRUÇÕES PARA O LOVABLE:

Por favor, crie uma landing page completa e responsiva baseada nas informações acima. 

**Requisitos técnicos:**
- Design responsivo para mobile, tablet e desktop
- Código limpo e otimizado
- Implementar todos os elementos solicitados
- Seguir o estilo visual definido
- Aplicar os efeitos e transições mencionados
- Usar as cores da marca fornecida
- Incluir todos os textos da copy fornecida
- Otimizar para conversão

**Estrutura sugerida:**
1. Header com navegação
2. Hero section impactante
3. Seções de benefícios/features
4. Depoimentos (se solicitado)
5. Call-to-action principal
6. Footer completo

Certifique-se de que a página seja visualmente atrativa, carregue rapidamente e converta visitantes em leads/clientes.`;
  };

  const copyToClipboard = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mr-4"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Voltar</span>
              </Link>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  LP Prompt Generator
                </h1>
                <p className="text-sm text-gray-600 font-medium">Ferramenta Profissional para Lovable</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {currentStep < steps.length ? `Etapa ${currentStep + 1} de ${steps.length}` : 'Finalizado ✨'}
              </div>
            </div>
          </div>
          
          {/* Enhanced Progress Bar */}
          <div className="mt-6 w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 h-3 rounded-full transition-all duration-700 ease-out shadow-md relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {currentStep < steps.length ? (
          /* Enhanced Form Steps */
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100/50 transition-all duration-500 hover:shadow-3xl">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <span className="text-2xl">{currentStepData.icon}</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                {currentStepData.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {currentStepData.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              {currentStepData.type === 'textarea' && (
                <div className="relative">
                  <textarea
                    value={formData[currentStepData.field]}
                    onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                    placeholder={currentStepData.placeholder}
                    className="w-full h-48 p-6 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 resize-none text-gray-900 placeholder-gray-400 bg-gray-50/50 hover:bg-white shadow-sm"
                  />
                  <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                    {formData[currentStepData.field].length} caracteres
                  </div>
                </div>
              )}

              {currentStepData.type === 'checkbox' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentStepData.options.map((option, index) => (
                    <label 
                      key={index} 
                      className={`group flex items-center space-x-4 p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-md ${
                        formData[currentStepData.field].includes(option)
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-blue-300 bg-white/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData[currentStepData.field].includes(option)}
                        onChange={() => handleCheckboxChange(currentStepData.field, option)}
                        className="w-5 h-5 text-blue-600 rounded-lg focus:ring-blue-500 transition-all duration-200"
                      />
                      <span className={`font-medium transition-colors duration-200 ${
                        formData[currentStepData.field].includes(option) ? 'text-blue-700' : 'text-gray-700'
                      }`}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {currentStepData.type === 'radio' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentStepData.options.map((option, index) => (
                    <label 
                      key={index} 
                      className={`group flex items-center space-x-4 p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-md ${
                        formData[currentStepData.field] === option
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-blue-300 bg-white/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={currentStepData.field}
                        value={option}
                        checked={formData[currentStepData.field] === option}
                        onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                        className="w-5 h-5 text-blue-600 focus:ring-blue-500 transition-all duration-200"
                      />
                      <span className={`font-medium transition-colors duration-200 ${
                        formData[currentStepData.field] === option ? 'text-blue-700' : 'text-gray-700'
                      }`}>
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="group flex items-center space-x-3 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-gray-400 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Anterior</span>
              </button>

              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'bg-blue-600 scale-125' 
                        : index < currentStep 
                          ? 'bg-green-500' 
                          : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStep}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="font-medium">
                  {currentStep === steps.length - 1 ? 'Gerar Prompt' : 'Próximo'}
                </span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        ) : (
          /* Enhanced Results Page */
          <div className="space-y-10">
            <div className="text-center">
              <div className="relative inline-block mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <Rocket className="w-12 h-12 text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Prompt Gerado com Sucesso!
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Seu prompt personalizado está pronto! Copie e cole no Lovable para criar uma Landing Page incrível seguindo sua metodologia comprovada.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 p-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-white" />
                  <h3 className="text-white font-bold text-xl">Seu Prompt Personalizado</h3>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  <span className="font-medium">{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
              
              <div className="p-8 max-h-96 overflow-y-auto bg-gray-50/50">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-mono">
                  {generatePrompt()}
                </pre>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setFormData({
                    briefing: '',
                    objetivo: '',
                    copy: '',
                    elementos: [],
                    efeitos: '',
                    tipoLP: '',
                    observacoes: '',
                    linksCliente: '',
                    logo: ''
                  });
                }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all duration-300 font-medium"
              >
                🔄 Criar Novo Prompt
              </button>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white rounded-2xl hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                <span>{copied ? '✅ Copiado!' : '📋 Copiar Prompt'}</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold">LP Prompt Generator</h3>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            Ferramenta profissional para otimizar a criação de Landing Pages no Lovable
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Metodologia Comprovada</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Powered by Lovable</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Resultados Garantidos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LPPromptGenerator;
