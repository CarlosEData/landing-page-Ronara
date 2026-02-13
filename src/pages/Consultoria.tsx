import { ArrowRight, TrendingUp, Users, Cog, Target, CheckCircle2, Building2 } from 'lucide-react';

export default function Consultoria() {
  return (
    <div className="bg-light">
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary text-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-24 h-24 border-2 border-gold mb-6">
              <Building2 size={48} className="text-gold" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-title uppercase tracking-wider leading-tight">
              Consultoria Corporativa
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-silver font-body max-w-4xl mx-auto leading-relaxed">
              A consultoria tradicional entrega <span className="line-through">slides</span>.{' '}
              <span className="text-gold font-semibold">Eu entrego cirurgia.</span>
            </h2>
            <p className="text-lg text-silver max-w-3xl mx-auto">
              Contrate a senioridade de <span className="text-gold font-semibold">25 anos</span> sem a equipe júnior.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-6">
                Para quem é esta consultoria
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Organizações que precisam de <span className="text-primary font-semibold">transformação real</span>,
                não relatórios bonitos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Target size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Board Members</h3>
                <p className="text-silver leading-relaxed">
                  CEOs e C-Levels que precisam destravar operações bilionárias travadas em complexidade e burocracia.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Cog size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">CIOs & CTOs</h3>
                <p className="text-silver leading-relaxed">
                  Líderes de tecnologia que precisam integrar agilidade sem perder governança e controle estratégico.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Líderes de Transformação</h3>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-6">
                Metodologia Alfaiate de Luxo
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Processos, Pessoas e Ferramentas = <span className="text-gold font-semibold">Cultura de Execução</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="text-gold text-5xl font-title mb-4">01</div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider flex items-center space-x-3">
                  <Cog size={24} />
                  <span>Processos</span>
                </h3>
                <p className="text-silver leading-relaxed mb-4">
                  Redesenho de fluxos operacionais para eliminar gargalos, redundâncias e inércia organizacional.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Mapeamento de cadeia de valor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Implementação de frameworks ágeis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Governança adaptativa</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="text-gold text-5xl font-title mb-4">02</div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider flex items-center space-x-3">
                  <Users size={24} />
                  <span>Pessoas</span>
                </h3>
                <p className="text-silver leading-relaxed mb-4">
                  Desenvolvimento de liderança e times para execução de alta performance com mentalidade ágil.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Coaching de liderança executiva</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Capacitação de squads ágeis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Gestão de mudança comportamental</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="text-gold text-5xl font-title mb-4">03</div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider flex items-center space-x-3">
                  <Target size={24} />
                  <span>Ferramentas</span>
                </h3>
                <p className="text-silver leading-relaxed mb-4">
                  Implementação de sistemas, métricas e tecnologias para visibilidade total e decisão baseada em dados.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Dashboards de performance em tempo real</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>OKRs e métricas de impacto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Automação de rituais ágeis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-6">
                Resultados Comprovados
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Números que importam para o <span className="text-primary font-semibold">Board</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-primary p-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-title text-gold mb-2">+40%</h3>
                    <p className="text-primary font-semibold mb-2">Aumento de Produtividade</p>
                    <p className="text-silver text-sm leading-relaxed">
                      Empresa do setor financeiro eliminou gargalos operacionais e aumentou throughput de entregas
                      em 6 meses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary p-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0">
                    <Target size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-title text-gold mb-2">-60%</h3>
                    <p className="text-primary font-semibold mb-2">Redução de Time-to-Market</p>
                    <p className="text-silver text-sm leading-relaxed">
                      Varejista de grande porte acelerou ciclo de lançamento de produtos digitais com framework ágil customizado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary p-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-title text-gold mb-2">+85%</h3>
                    <p className="text-primary font-semibold mb-2">Engajamento de Times</p>
                    <p className="text-silver text-sm leading-relaxed">
                      Multinacional de tecnologia transformou cultura organizacional com programa de desenvolvimento de liderança.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary p-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0">
                    <Cog size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-title text-gold mb-2">R$50M+</h3>
                    <p className="text-primary font-semibold mb-2">ROI em Otimização</p>
                    <p className="text-silver text-sm leading-relaxed">
                      Instituição bancária eliminou redundâncias operacionais e automatizou processos críticos gerando economia substancial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-8">
              Pronto para cirurgia organizacional?
            </h2>
            <p className="text-xl text-silver mb-12 leading-relaxed">
              Agende um diagnóstico estratégico de <span className="text-gold font-semibold">90 minutos</span> com Ronara
              para identificar o 'bug' que está travando seus resultados.
            </p>

            <div className="bg-primary/50 backdrop-blur-sm border-2 border-gold p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-title uppercase mb-6 tracking-wider">O que você vai receber</h3>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">Análise profunda dos gargalos operacionais da sua organização</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">Roadmap executivo de transformação ágil customizado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">Projeção de ROI e métricas de impacto esperadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">Proposta de engajamento com escopo e investimento</span>
                </li>
              </ul>

              <a
                href="mailto:consultoria@ronaralamounier.com.br?subject=Diagnóstico Estratégico - Consultoria Corporativa"
                className="inline-flex items-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group"
              >
                <span>Agendar diagnóstico com a Ronara</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>

              <p className="text-sm text-silver mt-6">
                Investimento mínimo: R$50.000/mês | Engajamentos a partir de 3 meses
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-light border-t border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-silver text-sm uppercase tracking-widest mb-4">Empresas que já confiaram</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
              <div className="text-primary text-xl md:text-2xl font-title tracking-wider">SANTANDER</div>
              <div className="text-primary text-xl md:text-2xl font-title tracking-wider">VALE</div>
              <div className="text-primary text-xl md:text-2xl font-title tracking-wider">WALMART</div>
              <div className="text-primary text-xl md:text-2xl font-title tracking-wider">MICROSOFT</div>
              <div className="text-primary text-xl md:text-2xl font-title tracking-wider">BANCO DO BRASIL</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
