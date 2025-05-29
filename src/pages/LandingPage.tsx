
import React, { useState } from 'react';
import { 
  ChevronRight, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle, 
  XCircle, 
  Star,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentQuizStep, setCurrentQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [pricingMode, setPricingMode] = useState<'monthly' | 'annual'>('annual');

  const quizQuestions = [
    {
      question: "Quanto tempo você demora para criar uma Landing Page do zero?",
      options: [
        { text: "Mais de 8 horas", score: 1 },
        { text: "4-8 horas", score: 2 },
        { text: "2-4 horas", score: 3 },
        { text: "Menos de 2 horas", score: 4 }
      ]
    },
    {
      question: "Quantas revisões suas LPs geralmente precisam?",
      options: [
        { text: "Mais de 10 revisões", score: 1 },
        { text: "5-10 revisões", score: 2 },
        { text: "2-5 revisões", score: 3 },
        { text: "1-2 revisões", score: 4 }
      ]
    },
    {
      question: "Qual sua taxa de conversão média?",
      options: [
        { text: "Menos de 2%", score: 1 },
        { text: "2-5%", score: 2 },
        { text: "5-10%", score: 3 },
        { text: "Mais de 10%", score: 4 }
      ]
    },
    {
      question: "Como você se sente ao entregar uma LP ao cliente?",
      options: [
        { text: "Ansioso, nunca sei se vai agradar", score: 1 },
        { text: "Inseguro, sempre fico na dúvida", score: 2 },
        { text: "Confiante na maioria das vezes", score: 3 },
        { text: "Sempre confiante e orgulhoso", score: 4 }
      ]
    }
  ];

  const handleQuizAnswer = (score: number) => {
    const newAnswers = { ...quizAnswers, [currentQuizStep]: score };
    setQuizAnswers(newAnswers);
    
    if (currentQuizStep < quizQuestions.length - 1) {
      setCurrentQuizStep(currentQuizStep + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const getQuizResult = () => {
    const totalScore = Object.values(quizAnswers).reduce((sum, score) => sum + score, 0);
    
    if (totalScore <= 8) {
      return {
        level: "CRÍTICO",
        color: "text-red-600",
        bgColor: "bg-red-50 border-red-200",
        message: "Você está perdendo MUITO tempo e dinheiro! Precisa URGENTEMENTE da nossa ferramenta.",
        recommendation: "Comece HOJE mesmo com nosso plano anual (63% de desconto)"
      };
    } else if (totalScore <= 12) {
      return {
        level: "INTERMEDIÁRIO",
        color: "text-orange-600", 
        bgColor: "bg-orange-50 border-orange-200",
        message: "Você tem potencial, mas está longe do ideal. Nossa ferramenta vai te levar ao próximo nível.",
        recommendation: "Teste 7 dias grátis e veja a diferença!"
      };
    } else {
      return {
        level: "AVANÇADO",
        color: "text-green-600",
        bgColor: "bg-green-50 border-green-200", 
        message: "Você já é bom, mas imagine ser PERFEITO em todas as entregas!",
        recommendation: "Experimente e torne-se o melhor do mercado!"
      };
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                LP Generator Pro
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('problema')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Problema
              </button>
              <button onClick={() => scrollToSection('solucao')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Solução
              </button>
              <button onClick={() => scrollToSection('funcionalidades')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Funcionalidades
              </button>
              <button onClick={() => scrollToSection('precos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Preços
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </button>
              <a 
                href="https://crmapi.notoria.pro/payment-link/6838aca5edf79f50f4afb2ee"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Começar Agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('problema')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Problema
                </button>
                <button onClick={() => scrollToSection('solucao')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Solução
                </button>
                <button onClick={() => scrollToSection('funcionalidades')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Funcionalidades
                </button>
                <button onClick={() => scrollToSection('precos')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  Preços
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                  FAQ
                </button>
                <a 
                  href="https://crmapi.notoria.pro/payment-link/6838aca5edf79f50f4afb2ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all duration-300"
                >
                  Começar Agora
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-8 text-blue-700 font-medium">
            <Rocket className="w-4 h-4 mr-2" />
            Revolução na Criação de Landing Pages
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              De 48 Horas para
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              30 Minutos
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Criando LPs Perfeitas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            A única ferramenta que transforma agências, freelancers e empresas em 
            <span className="font-bold text-blue-600"> máquinas de conversão</span>, 
            eliminando 95% do tempo gasto e 100% das frustrações.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="https://crmapi.notoria.pro/payment-link/6838aca5edf79f50f4afb2ee"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
            >
              <span>🚀 Começar Teste Gratuito</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              onClick={() => scrollToSection('quiz')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center space-x-3"
            >
              <Target className="w-5 h-5" />
              <span>Avaliar Meu Nível</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.847</div>
              <div className="text-gray-600">LPs Criadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">96%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">1.2M</div>
              <div className="text-gray-600">Horas Economizadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">O Pesadelo</span> de Todo Profissional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Você reconhece essas situações? Elas estão custando seu tempo, dinheiro e sanidade mental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Before Card */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-800">SEM Nossa Ferramenta</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>48+ horas</strong> para criar uma LP básica</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>15+ revisões</strong> com o cliente insatisfeito</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>R$ 200+</strong> gastos em créditos Lovable</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Estresse infinito</strong> e noites mal dormidas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Conversão baixa</strong> (menos de 3%)</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-100 rounded-xl">
                <p className="text-red-800 font-semibold text-center">
                  💸 Prejuízo médio: R$ 3.500/mês em tempo perdido
                </p>
              </div>
            </div>

            {/* After Card */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-800">COM Nossa Ferramenta</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>30 minutos</strong> para gerar prompt perfeito</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>1-2 ajustes</strong> mínimos necessários</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Plano FREE</strong> do Lovable é suficiente</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Cliente WOW</strong> na primeira apresentação</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700"><strong>Conversão alta</strong> (8-15% média)</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-100 rounded-xl">
                <p className="text-green-800 font-semibold text-center">
                  💰 Lucro adicional: R$ 8.500/mês em eficiência
                </p>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
              As 5 Maiores Dores que Nossa Ferramenta Elimina
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Clock className="w-8 h-8 text-red-500" />,
                  title: "Tempo Infinito",
                  description: "Horas e horas tentando criar algo que funcione"
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-red-500" />,
                  title: "Gasto Desnecessário", 
                  description: "Créditos Lovable voando com tentativas fracassadas"
                },
                {
                  icon: <Users className="w-8 h-8 text-red-500" />,
                  title: "Cliente Insatisfeito",
                  description: "Revisões infinitas e relacionamento desgastado"
                },
                {
                  icon: <Target className="w-8 h-8 text-red-500" />,
                  title: "Baixa Conversão",
                  description: "LPs que não vendem e não geram resultados"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-red-500" />,
                  title: "Inconsistência",
                  description: "Cada projeto é uma loteria de sucesso"
                }
              ].map((pain, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-red-50 transition-all duration-300">
                  <div className="flex justify-center mb-4">{pain.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{pain.title}</h4>
                  <p className="text-gray-600">{pain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solução Definitiva</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada + IA avançada = Landing Pages que convertem desde o primeiro clique
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🎯 Metodologia Científica</h3>
                <p className="text-blue-800">
                  Baseada em 2.847 Landing Pages criadas e otimizada com dados reais de conversão. 
                  Cada pergunta foi pensada para extrair exatamente o que o Lovable precisa saber.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">⚡ Prompts Inteligentes</h3>
                <p className="text-purple-800">
                  Nossa IA gera prompts estruturados que falam a "língua" do Lovable, 
                  resultando em LPs perfeitas já na primeira tentativa.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-900 mb-4">📈 Resultados Garantidos</h3>
                <p className="text-green-800">
                  96% de satisfação dos clientes e conversões médias de 8-15%. 
                  Seus clientes vão ficar impressionados desde a primeira apresentação.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Como Funciona a Mágica?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Responda 9 Perguntas Estratégicas</h4>
                    <p className="text-white/90">Em 15 minutos você fornece todas as informações necessárias</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">IA Gera Prompt Perfeito</h4>
                    <p className="text-white/90">Algoritmo exclusivo cria prompt otimizado para Lovable</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Cole no Lovable e Pronto!</h4>
                    <p className="text-white/90">Landing Page completa e perfeita em menos de 10 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Funcionalidades que Fazem a <span className="text-blue-600">Diferença</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada recurso foi pensado para maximizar sua produtividade e garantir resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-blue-500" />,
                title: "Formulário Inteligente",
                description: "9 perguntas estratégicas que capturam TUDO que o Lovable precisa saber para criar LPs perfeitas"
              },
              {
                icon: <Rocket className="w-8 h-8 text-purple-500" />,
                title: "Prompts Otimizados",
                description: "IA exclusiva gera prompts estruturados baseados em milhares de LPs de sucesso"
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: "Velocidade Extrema",
                description: "De briefing à LP finalizada em menos de 10 minutos, não 48 horas"
              },
              {
                icon: <Target className="w-8 h-8 text-green-500" />,
                title: "Foco na Conversão",
                description: "Metodologia baseada em psicologia de vendas e otimização de conversão"
              },
              {
                icon: <Award className="w-8 h-8 text-red-500" />,
                title: "Qualidade Profissional",
                description: "Resultados que impressionam clientes e geram renovações automáticas"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-cyan-500" />,
                title: "ROI Comprovado",
                description: "Economize 95% do tempo e triplique sua capacidade de atendimento"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-center mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Os <span className="text-green-600">Ganhos Reais</span> dos Nossos Usuários
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-green-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">2.847</div>
              <div className="text-green-800 font-semibold mb-2">Horas Economizadas</div>
              <div className="text-sm text-green-700">Por mês pelos nossos usuários</div>
            </div>

            <div className="text-center bg-blue-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">R$ 8.5K</div>
              <div className="text-blue-800 font-semibold mb-2">Lucro Adicional</div>
              <div className="text-sm text-blue-700">Média mensal por profissional</div>
            </div>

            <div className="text-center bg-purple-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">96%</div>
              <div className="text-purple-800 font-semibold mb-2">Satisfação</div>
              <div className="text-sm text-purple-700">Clientes satisfeitos na primeira entrega</div>
            </div>

            <div className="text-center bg-yellow-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15%</div>
              <div className="text-yellow-800 font-semibold mb-2">Conversão Média</div>
              <div className="text-sm text-yellow-700">Vs 3% do mercado tradicional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Descubra Seu <span className="text-blue-600">Nível de Eficiência</span>
            </h2>
            <p className="text-xl text-gray-600">
              Responda 4 perguntas e veja onde você está perdendo tempo e dinheiro
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {!showQuizResult ? (
              <div>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">
                      Pergunta {currentQuizStep + 1} de {quizQuestions.length}
                    </span>
                    <span className="text-sm text-blue-600 font-semibold">
                      {Math.round(((currentQuizStep) / quizQuestions.length) * 100)}% completo
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuizStep) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 text-gray-900">
                  {quizQuestions[currentQuizStep].question}
                </h3>

                <div className="space-y-4">
                  {quizQuestions[currentQuizStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(option.score)}
                      className="w-full text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg text-gray-700 group-hover:text-blue-700">
                          {option.text}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className={`inline-block px-6 py-3 rounded-full text-lg font-bold mb-6 ${getQuizResult().bgColor} border-2`}>
                  <span className={getQuizResult().color}>
                    NÍVEL: {getQuizResult().level}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Resultado da Sua Avaliação
                </h3>

                <p className="text-lg text-gray-700 mb-6">
                  {getQuizResult().message}
                </p>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
                  <p className="text-yellow-800 font-semibold">
                    💡 Recomendação: {getQuizResult().recommendation}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://crmapi.notoria.pro/payment-link/6838acceedf79f2b1cafb2f6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🎯 Plano Anual (63% OFF) - R$ 99
                  </a>
                  
                  <a 
                    href="https://crmapi.notoria.pro/payment-link/6838aca5edf79f50f4afb2ee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300"
                  >
                    🚀 Teste 7 Dias Grátis
                  </a>
                </div>

                <button
                  onClick={() => {
                    setShowQuizResult(false);
                    setCurrentQuizStep(0);
                    setQuizAnswers({});
                  }}
                  className="mt-6 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Refazer Teste
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Invista em Sua <span className="text-green-600">Produtividade</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Economize milhares de reais em tempo perdido. O investimento se paga na primeira semana.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Pricing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-2xl inline-flex">
                <button
                  onClick={() => setPricingMode('monthly')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pricingMode === 'monthly'
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setPricingMode('annual')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                    pricingMode === 'annual'
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Anual
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    63% OFF
                  </span>
                </button>
              </div>
            </div>

            {/* Single Pricing Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl border-2 border-blue-200 p-8 text-center relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  7 DIAS GRÁTIS
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 mt-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gray-900">LP Generator Pro</h3>
              
              {pricingMode === 'monthly' ? (
                <div className="mb-6">
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    <span className="line-through text-gray-400 text-3xl">R$ 39</span>
                    <span className="ml-2">R$ 9,90</span>
                  </div>
                  <div className="text-gray-500">por mês</div>
                </div>
              ) : (
                <div className="mb-6">
                  <div className="text-5xl font-bold text-green-600 mb-2">
                    <span className="line-through text-gray-400 text-3xl">R$ 390</span>
                    <span className="ml-2">R$ 99</span>
                  </div>
                  <div className="text-gray-500">por ano</div>
                  <div className="text-green-600 font-semibold mt-1">
                    Economia de R$ 291 (63% OFF)
                  </div>
                </div>
              )}
              
              <ul className="space-y-4 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Prompts ilimitados</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Atualizações automáticas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Templates exclusivos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Novos recursos em primeira mão</span>
                </li>
                {pricingMode === 'annual' && (
                  <>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Consultoria exclusiva (1h)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Grupo VIP no WhatsApp</span>
                    </li>
                  </>
                )}
              </ul>

              <a 
                href={pricingMode === 'monthly' 
                  ? "https://crmapi.notoria.pro/payment-link/6838aca5edf79f50f4afb2ee"
                  : "https://crmapi.notoria.pro/payment-link/6838acceedf79f2b1cafb2f6"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Começar 7 Dias Grátis
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-yellow-800 mb-2">💰 Garantia Total de 30 Dias</h4>
              <p className="text-yellow-700">
                Se você não economizar pelo menos 10 horas no primeiro mês, devolvemos 100% do seu dinheiro. 
                Sem burocracia, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-blue-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa saber antes de revolucionar sua produtividade
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Como exatamente a ferramenta funciona?",
                answer: "Você responde 9 perguntas estratégicas sobre o projeto (leva 10 minutos), nossa IA gera um prompt otimizado baseado em nossa metodologia comprovada, você copia e cola no Lovable, e em menos de 15 minutos tem uma LP completa e profissional."
              },
              {
                question: "Preciso ter conhecimento técnico para usar?",
                answer: "Absolutamente não! A ferramenta foi criada para qualquer pessoa usar. Se você sabe preencher um formulário e copiar/colar texto, você já sabe usar nossa ferramenta. É mais simples que pedir um Uber."
              },
              {
                question: "Funciona mesmo com o plano FREE do Lovable?",
                answer: "Sim! Como nossos prompts são extremamente precisos, você raramente precisa fazer ajustes. Na maioria dos casos, o plano gratuito do Lovable é mais que suficiente. Nossos usuários economizam em média R$ 150/mês só em créditos."
              },
              {
                question: "Quanto tempo realmente economizo?",
                answer: "Nossos usuários relatam economia de 6-8 horas por projeto. Se você cria 5 LPs por mês, está economizando 30-40 horas mensais. Isso equivale a R$ 3.000-5.000 em tempo que você pode usar para novos clientes."
              },
              {
                question: "E se eu não ficar satisfeito?",
                answer: "Garantia total de 30 dias. Se você não economizar pelo menos 10 horas no primeiro mês ou não ficar completamente satisfeito, devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas."
              },
              {
                question: "A ferramenta substitui minha criatividade?",
                answer: "Não! Ela potencializa sua criatividade. Você continua sendo o estrategista, definindo objetivos, copy e elementos. A ferramenta apenas traduz suas ideias em prompts que o Lovable entende perfeitamente, eliminando tentativa e erro."
              },
              {
                question: "Funciona para qualquer tipo de negócio?",
                answer: "Sim! Nossa metodologia foi testada em mais de 2.847 projetos de todos os segmentos: e-commerce, serviços, B2B, B2C, infoprodutos, agências, freelancers. A ferramenta se adapta automaticamente ao seu briefing."
              },
              {
                question: "Como recebo atualizações e melhorias?",
                answer: "Todas as atualizações são automáticas e gratuitas. Nossa equipe constantemente melhora a IA baseada no feedback dos usuários e nos dados de performance das LPs criadas. Você sempre terá a versão mais avançada."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pare de Perder Tempo e Dinheiro
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a mais de 1.200 profissionais que já revolucionaram sua produtividade
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">⏱️</div>
                <div className="text-lg font-semibold">95% Menos Tempo</div>
                <div className="text-sm opacity-75">De 48 horas para 30 minutos</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">💰</div>
                <div className="text-lg font-semibold">R$ 8.500 Lucro Extra</div>
                <div className="text-sm opacity-75">Média mensal por usuário</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">🎯</div>
                <div className="text-lg font-semibold">15% Conversão</div>
                <div className="text-sm opacity-75">Vs 3% do mercado tradicional</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://crmapi.notoria.pro/payment-link/6838acceedf79f2b1cafb2f6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
            >
              <Award className="w-6 h-6" />
              <span>Plano Anual - 63% OFF (R$ 99)</span>
            </a>
            
            <a 
              href="https://crmapi.notoria.pro/payment-link/6838aca5edf79f50f4afb2ee"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all duration-300 flex items-center space-x-3"
            >
              <Rocket className="w-6 h-6" />
              <span>Teste 7 Dias Grátis</span>
            </a>
          </div>

          <p className="text-sm mt-6 opacity-75">
            ✅ Garantia de 30 dias | ✅ Suporte completo | ✅ Atualizações gratuitas
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">LP Generator Pro</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                A ferramenta definitiva para criar Landing Pages perfeitas no Lovable. 
                Transformamos sua metodologia em resultados excepcionais.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#quiz" className="hover:text-white transition-colors">Avaliação Gratuita</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:suporte@lpgeneratorpro.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantia</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 LP Generator Pro. Todos os direitos reservados.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Powered by Metodologia Comprovada + IA Avançada</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
