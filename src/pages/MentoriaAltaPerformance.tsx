import { ArrowRight, Target, DollarSign, Battery, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react';

export default function MentoriaAltaPerformance() {
  return (
    <div className="bg-light">
      <section className="relative min-h-[85vh] flex items-center bg-primary text-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-primary to-black/60"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-title uppercase tracking-wider leading-tight">
              MENTORIA DE ALTA PERFORMANCE
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-light font-semibold">
              Você não precisa de motivação. Você precisa de reprogramação.
            </h2>

            <p className="text-lg md:text-xl text-light leading-relaxed max-w-3xl mx-auto">
              Mentoria executiva 1:1 para líderes que precisam sair da estagnação, tomar decisões difíceis e executar com consistência.
            </p>

            <p className="text-silver text-lg max-w-3xl mx-auto">
              Diagnóstico, plano de ação e acompanhamento para transformar intenção em resultado.
            </p>

            <p className="text-silver text-lg">
              <span className="text-gold font-semibold">25 anos de experiência.</span> Método direto, com foco em execução e performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#aplicar"
                className="inline-flex items-center justify-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group"
              >
                <span>Aplicar para a Mentoria 1:1</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="mailto:ronara@gmail.com"
                className="inline-flex items-center justify-center space-x-2 border-2 border-gold text-gold px-10 py-4 hover:bg-gold hover:text-primary transition-all font-semibold uppercase tracking-wider group"
              >
                <span>Agendar conversa de alinhamento</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>

            <p className="text-silver text-sm pt-4">
              Processo de aplicação. Vagas limitadas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              PARA QUEM É ESTA MENTORIA
            </h2>

            <p className="text-center text-lg md:text-xl text-primary mb-16">
              Profissionais que sabem que podem mais, mas estão <span className="font-semibold">travados no ruído</span>.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Target size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  CLAREZA
                </h3>
                <p className="text-silver leading-relaxed">
                  Você está estagnado na carreira e não enxerga o próximo passo estratégico para avançar com consistência.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <DollarSign size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  DINHEIRO
                </h3>
                <p className="text-silver leading-relaxed">
                  Você entrega muito, mas ainda não converte valor em remuneração, posicionamento e escolhas melhores.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Battery size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  ENERGIA
                </h3>
                <p className="text-silver leading-relaxed">
                  Você opera em sobrecarga, perde foco e sente que sua vida profissional está no piloto automático.
                </p>
              </div>
            </div>

            <div className="bg-primary text-light p-10 md:p-12 border-l-4 border-gold">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                A verdade objetiva: você não está travado por falta de capacidade.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Você está <span className="text-gold font-semibold">travado por padrões de decisão</span> que repetem o mesmo resultado.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Na mentoria, eu identifico o que está sabotando sua <span className="text-gold font-semibold">execução</span> e reprogramo o seu sistema de escolhas para você voltar a <span className="text-gold font-semibold">comandar</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              MÉTODO 4R
            </h2>

            <p className="text-center text-lg md:text-xl text-silver mb-16">
              Um framework de <span className="text-gold font-semibold">engenharia de carreira</span> para execução consistente e resultados mensuráveis.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="text-5xl text-gold font-title mr-4">01</div>
                  <div className="w-12 h-12 bg-gold flex items-center justify-center">
                    <Target size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  ROADMAP
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Construir o mapa estratégico da sua carreira, com clareza, direção e prioridades.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Diagnóstico de posicionamento e cenário atual</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Definição de objetivo e métricas de avanço</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Plano de ação com marcos e prazos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="text-5xl text-gold font-title mr-4">02</div>
                  <div className="w-12 h-12 bg-gold flex items-center justify-center">
                    <TrendingUp size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  RELEVÂNCIA
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Aumentar autoridade e visibilidade estratégica para ser reconhecido pelo valor que entrega.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Posicionamento e narrativa profissional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Estratégia de networking e influência</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Comunicação executiva e presença</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="text-5xl text-gold font-title mr-4">03</div>
                  <div className="w-12 h-12 bg-gold flex items-center justify-center">
                    <Zap size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  RITMO
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Criar um sistema de execução com consistência, disciplina e energia sustentável.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Rotina de alta performance e foco</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Rituais de execução e cadência semanal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Responsabilização e acompanhamento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <div className="flex items-center mb-6">
                  <div className="text-5xl text-gold font-title mr-4">04</div>
                  <div className="w-12 h-12 bg-gold flex items-center justify-center">
                    <CheckCircle2 size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4">
                  RESULTADO
                </h3>
                <p className="text-silver leading-relaxed mb-6">
                  Converter execução em entregas e decisões que impactam remuneração, carreira e qualidade de vida.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Estratégia de promoção e aumento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Transição de carreira com plano</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0 mr-2" />
                    <span>Equilíbrio sustentável e performance</span>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              RESULTADOS REAIS
            </h2>

            <p className="text-center text-lg md:text-xl text-primary mb-16">
              Transformações mensuráveis de profissionais que reposicionaram a carreira e elevaram a execução.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-primary/20 p-10">
                <div className="text-5xl font-title text-gold mb-4">+150%</div>
                <h3 className="text-2xl font-title mb-3">Aumento Salarial</h3>
                <p className="text-silver leading-relaxed">
                  Crescimento médio de remuneração dos mentorados em 12 meses.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-10">
                <div className="text-5xl font-title text-gold mb-4">87%</div>
                <h3 className="text-2xl font-title mb-3">Taxa de Promoção</h3>
                <p className="text-silver leading-relaxed">
                  Profissionais promovidos ou com transição estratégica bem-sucedida.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-10">
                <div className="text-5xl font-title text-gold mb-4">6 meses</div>
                <h3 className="text-2xl font-title mb-3">Tempo Médio</h3>
                <p className="text-silver leading-relaxed">
                  Para alcançar o primeiro resultado significativo e mensurável.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary text-light p-8 border-l-4 border-gold">
                <p className="text-lg leading-relaxed mb-6">
                  "Eu estava há três anos no mesmo cargo e com a mesma remuneração. Em quatro meses de mentoria com a Ronara, fui promovido para gerente e tive aumento de 60%. O Método 4R trouxe clareza e direção sobre o que executar."
                </p>
                <div className="text-silver">
                  <p className="font-semibold text-light">João M.</p>
                  <p className="text-sm">Gerente de Projetos, Setor Financeiro</p>
                </div>
              </div>

              <div className="bg-primary text-light p-8 border-l-4 border-gold">
                <p className="text-lg leading-relaxed mb-6">
                  "Eu estava em esgotamento, trabalhando longas horas e sem reconhecimento. A mentoria me ajudou a reposicionar minha carreira, recuperar foco e elevar meus resultados com consistência. Hoje eu trabalho melhor, com mais previsibilidade e energia."
                </p>
                <div className="text-silver">
                  <p className="font-semibold text-light">Ana S.</p>
                  <p className="text-sm">Agile Coach, Tecnologia</p>
                </div>
              </div>
            </div>

            <p className="text-center text-silver text-sm mt-12">
              Resultados variam conforme contexto, comprometimento e ponto de partida.
            </p>
          </div>
        </div>
      </section>

      <section id="aplicar" className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              PRONTO PARA ELEVAR SUA EXECUÇÃO?
            </h2>

            <p className="text-lg md:text-xl text-silver text-center mb-4 leading-relaxed">
              A mentoria é por <span className="text-gold font-semibold">aplicação</span>. Eu não aceito todos os profissionais.
            </p>

            <p className="text-lg md:text-xl text-silver text-center mb-12 leading-relaxed">
              Trabalho com quem está comprometido com execução consistente e resultados mensuráveis.
            </p>

            <div className="bg-primary/50 backdrop-blur-sm border-2 border-gold p-10 md:p-12">
              <h3 className="text-2xl font-title uppercase tracking-wider text-center mb-8">
                PROCESSO DE APLICAÇÃO
              </h3>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-semibold text-lg">1.</span>
                  <span className="text-light text-lg">Preenchimento de formulário com contexto de carreira e objetivos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-semibold text-lg">2.</span>
                  <span className="text-light text-lg">Análise de perfil e critérios de aderência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-semibold text-lg">3.</span>
                  <span className="text-light text-lg">Conversa estratégica de <span className="text-gold font-semibold">45 minutos</span> para validação de fit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3 font-semibold text-lg">4.</span>
                  <span className="text-light text-lg">Proposta personalizada de mentoria 1:1</span>
                </li>
              </ul>

              <div className="text-center">
                <a
                  href="mailto:ronara@gmail.com"
                  className="inline-flex items-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group"
                >
                  <span>APLICAR PARA A MENTORIA 1:1</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <p className="text-center text-silver text-sm mt-8">
                Investimento a partir de <span className="text-gold font-semibold">R$ 3.500/mês</span> | Programas de <span className="text-gold font-semibold">6 ou 12 meses</span>
              </p>
            </div>

            <div className="bg-primary/30 border border-gold/50 p-6 mt-8">
              <p className="text-light text-sm leading-relaxed mb-2">
                <span className="font-semibold text-gold uppercase">IMPORTANTE:</span> esta mentoria não é sobre motivação. É sobre método, decisões e execução.
              </p>
              <p className="text-silver text-sm leading-relaxed">
                Indicada para profissionais que querem elevar performance e assumir responsabilidade pelos resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
