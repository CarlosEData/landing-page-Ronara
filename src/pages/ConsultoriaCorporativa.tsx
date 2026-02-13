import { ArrowRight, Users, Target, Briefcase, TrendingUp, Settings, Layers } from 'lucide-react';

export default function ConsultoriaCorporativa() {
  return (
    <div className="bg-light">
      <section className="relative min-h-[85vh] flex items-center bg-primary text-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-primary to-black/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-title uppercase tracking-wider leading-tight">
              CONSULTORIA CORPORATIVA
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gold font-semibold">
              Menos apresentações. Mais implementação.
            </h2>

            <p className="text-lg md:text-xl text-light leading-relaxed max-w-3xl mx-auto">
              Diagnóstico rápido, plano de ação e execução junto ao seu time, com foco em metas, liderança e performance.
            </p>

            <p className="text-silver text-lg">
              <span className="text-gold font-semibold">25 anos de experiência.</span> Atendimento 100% sênior do início ao fim.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group"
              >
                <span>Agendar conversa de diagnóstico</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('como-funciona');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2 border-2 border-gold text-gold px-10 py-4 hover:bg-gold hover:text-primary transition-all font-semibold uppercase tracking-wider group"
              >
                <span>Ver como funciona</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            <p className="text-silver text-sm pt-4">
              Conversa de 30 minutos. Sem compromisso.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-light border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-silver text-sm mb-4">
            Empresas que confiaram na execução
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
            <img src="/walmart-logo-4.png" alt="Walmart" className="h-10 w-auto grayscale opacity-60" />
            <img src="/banco_santander_logotipo.svg.png" alt="Santander" className="h-10 w-auto grayscale opacity-60" />
            <img src="/microsoft_logo_(2012).svg.png" alt="Microsoft" className="h-10 w-auto grayscale opacity-60" />
            <img src="/logo_bayer.svg.png" alt="Bayer" className="h-10 w-auto grayscale opacity-60" />
            <img src="/gpa_logo_2013.svg.png" alt="GPA" className="h-10 w-auto grayscale opacity-60" />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              PARA QUEM É ESTA CONSULTORIA
            </h2>

            <p className="text-center text-lg md:text-xl text-primary mb-16">
              Organizações que precisam de <span className="font-semibold">transformação real</span>, não relatórios bonitos.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Briefcase size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  BOARD MEMBERS
                </h3>
                <p className="text-silver leading-relaxed">
                  CEOs e C-levels que precisam destravar operações bilionárias travadas em complexidade e burocracia.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Settings size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  CIOs & CTOs
                </h3>
                <p className="text-silver leading-relaxed">
                  Líderes de tecnologia que precisam integrar agilidade sem perder governança e controle estratégico.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  LÍDERES DE TRANSFORMAÇÃO
                </h3>
                <p className="text-silver leading-relaxed">
                  Diretores de transformação digital que precisam de execução implacável focada em ROI mensurável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              METODOLOGIA SOB MEDIDA
            </h2>

            <p className="text-center text-lg md:text-xl text-silver mb-16">
              Processos, Pessoas e Ferramentas integrados para construir <span className="text-gold font-semibold">Cultura de Execução</span>.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="text-6xl text-gold font-title mb-4">01</div>
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Layers size={32} className="text-light" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  PROCESSOS
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Redesenho de fluxos operacionais para eliminar gargalos, reduzir desperdícios e acelerar a entrega com governança.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Mapeamento de cadeia de valor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Cadências e rituais de execução</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Governança adaptativa e tomada de decisão</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="text-6xl text-gold font-title mb-4">02</div>
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Users size={32} className="text-light" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  PESSOAS
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Desenvolvimento de liderança e times para execução de alta performance, com foco, disciplina e responsabilidade.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Coaching de liderança executiva</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Capacitação de squads e liderança</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Gestão de mudança comportamental</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="text-6xl text-gold font-title mb-4">03</div>
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <Target size={32} className="text-light" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  FERRAMENTAS
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Implementação de sistemas, métricas e tecnologia para visibilidade total e decisões baseadas em dados.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Dashboards e indicadores em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>OKRs e métricas de impacto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Automação de rituais e cadências</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              RESULTADOS COMPROVADOS
            </h2>

            <p className="text-center text-lg md:text-xl text-primary mb-16">
              Números que importam para o Board.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-primary/20 p-10">
                <div className="w-16 h-16 bg-gold flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-primary" />
                </div>
                <div className="text-5xl font-title text-gold mb-4">+40%</div>
                <h3 className="text-2xl font-title mb-3">Aumento de Produtividade</h3>
                <p className="text-silver leading-relaxed">
                  Instituição financeira. Eliminação de gargalos operacionais e aumento de throughput de entregas em 6 meses.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-10">
                <div className="w-16 h-16 bg-gold flex items-center justify-center mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <div className="text-5xl font-title text-gold mb-4">-60%</div>
                <h3 className="text-2xl font-title mb-3">Redução de Time-to-Market</h3>
                <p className="text-silver leading-relaxed">
                  Varejista de grande porte. Aceleração do ciclo de lançamento de produtos digitais com modelo ágil sob medida.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-10">
                <div className="w-16 h-16 bg-gold flex items-center justify-center mb-6">
                  <Users size={32} className="text-primary" />
                </div>
                <div className="text-5xl font-title text-gold mb-4">+85%</div>
                <h3 className="text-2xl font-title mb-3">Engajamento de Times</h3>
                <p className="text-silver leading-relaxed">
                  Multinacional de tecnologia. Evolução de cultura e liderança com aumento consistente de adesão aos rituais de execução.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-10">
                <div className="w-16 h-16 bg-gold flex items-center justify-center mb-6">
                  <Briefcase size={32} className="text-primary" />
                </div>
                <div className="text-5xl font-title text-gold mb-4">R$ 50M+</div>
                <h3 className="text-2xl font-title mb-3">ROI em Otimização</h3>
                <p className="text-silver leading-relaxed">
                  Instituição bancária. Redução de redundâncias e automação de processos críticos com economia relevante.
                </p>
              </div>
            </div>

            <p className="text-center text-silver text-sm mt-12">
              Resultados obtidos variam conforme contexto e maturidade da organização.
            </p>
          </div>
        </div>
      </section>

      <section id="diagnostico" className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              PRONTO PARA DESTRAVAR A EXECUÇÃO?
            </h2>

            <p className="text-lg md:text-xl text-silver text-center mb-12 leading-relaxed">
              Agende uma sessão de diagnóstico executivo de <span className="text-gold font-semibold">90 minutos</span> com Ronara para identificar o gargalo crítico que está limitando seus resultados.
            </p>

            <div className="bg-primary/50 backdrop-blur-sm border-2 border-gold p-10 md:p-12">
              <h3 className="text-2xl font-title uppercase tracking-wider text-center mb-8">
                O QUE VOCÊ VAI RECEBER
              </h3>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1 text-xl">•</span>
                  <span className="text-light text-lg">Análise objetiva dos gargalos operacionais e de liderança</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1 text-xl">•</span>
                  <span className="text-light text-lg">Diagnóstico de prioridades e riscos para a execução</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1 text-xl">•</span>
                  <span className="text-light text-lg">Direcionamento de roadmap executivo com próximos passos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 mt-1 text-xl">•</span>
                  <span className="text-light text-lg">Proposta de engajamento com escopo, governança e investimento</span>
                </li>
              </ul>

              <div className="text-center">
                <a
                  href="mailto:ronara@gmail.com"
                  className="inline-flex items-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group"
                >
                  <span>AGENDAR DIAGNÓSTICO COM A RONARA</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <p className="text-center text-silver text-sm mt-8">
                Investimento a partir de <span className="text-gold font-semibold">R$ 50.000/mês</span> | Engajamentos mínimos de <span className="text-gold font-semibold">3 meses</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light border-t border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-silver text-sm mb-6">
            EMPRESAS QUE JÁ CONFIARAM
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 max-w-5xl mx-auto">
            <img src="/walmart-logo-4.png" alt="Walmart" className="h-12 w-auto grayscale opacity-60" />
            <img src="/banco_santander_logotipo.svg.png" alt="Santander" className="h-12 w-auto grayscale opacity-60" />
            <img src="/microsoft_logo_(2012).svg.png" alt="Microsoft" className="h-12 w-auto grayscale opacity-60" />
            <img src="/logo_bayer.svg.png" alt="Bayer" className="h-12 w-auto grayscale opacity-60" />
            <img src="/gpa_logo_2013.svg.png" alt="GPA" className="h-12 w-auto grayscale opacity-60" />
          </div>
        </div>
      </section>
    </div>
  );
}
