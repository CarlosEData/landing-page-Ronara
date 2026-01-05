import { ArrowRight, Target, Code2, Zap, CheckCircle2, Users, TrendingUp, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Metodo() {
  const scrollToTimeline = () => {
    const element = document.getElementById('passos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-light">
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary text-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-24 h-24 border-2 border-gold mb-6">
              <Zap size={48} className="text-gold" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-title uppercase tracking-wider leading-tight">
              A Engenharia do Caos
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-silver font-body max-w-4xl mx-auto leading-relaxed">
              Meu método prático para reescrever códigos de decisão errados, transformando{' '}
              <span className="text-gold font-semibold">paralisia em execução implacável</span> e{' '}
              <span className="text-gold font-semibold">caos em lucro</span> – baseado em práticas ágeis comprovadas.
            </h2>
            <button
              onClick={scrollToTimeline}
              className="inline-flex items-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group"
            >
              <span>Descubra os passos</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-silver/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-6">
                Estratégia dos Métodos Ágeis
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-4xl mx-auto leading-relaxed">
                Levar informações e soluções para profissionais e empresas, mostrando o quanto os{' '}
                <span className="text-primary font-semibold">Métodos Ágeis</span> são eficazes no meio empresarial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white border-2 border-primary p-10">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Users size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Colaboração</h3>
                <p className="text-silver leading-relaxed">
                  São colaborativos e ajudam a <span className="font-semibold text-primary">gerenciar o trabalho</span>,
                  otimizando a comunicação entre todos os níveis da organização.
                </p>
              </div>

              <div className="bg-white border-2 border-primary p-10">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Target size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Priorização</h3>
                <p className="text-silver leading-relaxed">
                  Permitem <span className="font-semibold text-primary">priorizar o que precisa ser feito</span>, focando em
                  entregas de alto valor e eliminando desperdícios.
                </p>
              </div>

              <div className="bg-white border-2 border-primary p-10">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Fluxo Contínuo</h3>
                <p className="text-silver leading-relaxed">
                  Criam um <span className="font-semibold text-primary">fluxo contínuo de entregas de valor com qualidade</span>,
                  garantindo resultados consistentes e mensuráveis.
                </p>
              </div>

              <div className="bg-white border-2 border-primary p-10">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Layers size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Comunicação</h3>
                <p className="text-silver leading-relaxed">
                  Otimizam a <span className="font-semibold text-primary">comunicação entre todos os níveis</span>, criando
                  transparência e alinhamento estratégico.
                </p>
              </div>
            </div>

            <div className="bg-primary text-light p-10 md:p-16 border-l-4 border-gold">
              <h3 className="text-2xl font-title uppercase mb-6 tracking-wider">Público-alvo</h3>
              <p className="text-lg md:text-xl leading-relaxed text-silver">
                Ideal para <span className="text-light font-semibold">profissionais de 30-55 anos</span> que conhecem os
                benefícios dos Métodos Ágeis e buscam <span className="text-gold font-semibold">transição de carreira</span>,
                posicionamento estratégico e <span className="text-gold font-semibold">ferramentas práticas</span> para aplicação
                no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="passos" className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-6">
                Os Três Passos do Método
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Um framework de <span className="text-gold font-semibold">engenharia de decisão</span> para execução implacável.
              </p>
            </div>

            <div className="space-y-16 relative">
              <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold to-gold"></div>

              <div className="relative">
                <div className="flex items-start space-x-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 bg-gold flex items-center justify-center">
                      <Target size={48} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-primary/50 backdrop-blur-sm border-2 border-gold p-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-gold text-6xl font-title">01</div>
                        <div>
                          <h3 className="text-3xl font-title uppercase tracking-wider">O Diagnóstico</h3>
                          <h4 className="text-gold font-semibold uppercase text-sm tracking-wider mt-2">Identificar o Erro</h4>
                        </div>
                      </div>
                      <p className="text-lg text-silver leading-relaxed mb-6">
                        Encontrar a <span className="text-light font-semibold">crença ou processo</span> que está gerando a inércia
                        e travando os resultados. É aqui que mapeamos o 'bug' no sistema.
                      </p>
                      <div className="bg-light/5 border-l-4 border-gold p-6">
                        <h5 className="text-light font-semibold mb-3 uppercase text-sm tracking-wider">Práticas Ágeis Aplicadas</h5>
                        <ul className="space-y-2 text-sm text-silver">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Retrospectives para mapear bugs em processos ou mentalidades</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Análise de Value Stream para identificar gargalos</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Mapeamento de stakeholders e impedimentos organizacionais</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-start space-x-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 bg-gold flex items-center justify-center">
                      <Code2 size={48} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-primary/50 backdrop-blur-sm border-2 border-gold p-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-gold text-6xl font-title">02</div>
                        <div>
                          <h3 className="text-3xl font-title uppercase tracking-wider">A Reprogramação</h3>
                          <h4 className="text-gold font-semibold uppercase text-sm tracking-wider mt-2">Reescrever o Código</h4>
                        </div>
                      </div>
                      <p className="text-lg text-silver leading-relaxed mb-6">
                        Ajustar a <span className="text-light font-semibold">mentalidade e os processos</span> para a nova realidade.
                        Aqui, reescrevemos o código de decisão com precisão cirúrgica.
                      </p>
                      <div className="bg-light/5 border-l-4 border-gold p-6">
                        <h5 className="text-light font-semibold mb-3 uppercase text-sm tracking-wider">Práticas Ágeis Aplicadas</h5>
                        <ul className="space-y-2 text-sm text-silver">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Sprints ágeis estruturados para implementar mudanças incrementais</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Coaching individual e de times para realinhar comportamentos</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Implementação de rituais ágeis (Daily, Planning, Review)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Definição de Definition of Done e critérios de qualidade</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-start space-x-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 bg-gold flex items-center justify-center">
                      <Zap size={48} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-primary/50 backdrop-blur-sm border-2 border-gold p-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-gold text-6xl font-title">03</div>
                        <div>
                          <h3 className="text-3xl font-title uppercase tracking-wider">A Alta Performance</h3>
                          <h4 className="text-gold font-semibold uppercase text-sm tracking-wider mt-2">Rodar o Sucesso</h4>
                        </div>
                      </div>
                      <p className="text-lg text-silver leading-relaxed mb-6">
                        <span className="text-light font-semibold">Execução implacável</span> focada em lucro (financeiro ou de vida).
                        O sistema reescrito agora roda em alta performance, gerando resultados mensuráveis.
                      </p>
                      <div className="bg-light/5 border-l-4 border-gold p-6">
                        <h5 className="text-light font-semibold mb-3 uppercase text-sm tracking-wider">Práticas Ágeis Aplicadas</h5>
                        <ul className="space-y-2 text-sm text-silver">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Entregas contínuas de valor com ciclos de feedback rápidos</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Métricas de ROI e saúde mental monitoradas constantemente</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Melhoria contínua através de retrospectives e adaptação</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                            <span>Sustentação de resultados com ritos e cultura consolidada</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
                Como Aplicar no Dia a Dia
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Aprenda técnicas e ferramentas ágeis para <span className="text-primary font-semibold">transição de carreira</span>
                {' '}e <span className="text-primary font-semibold">otimização empresarial</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Processos</h3>
                <p className="text-silver text-sm leading-relaxed">
                  Frameworks como Scrum e Kanban para gerenciar trabalho, criar transparência e acelerar entregas.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Priorização</h3>
                <p className="text-silver text-sm leading-relaxed">
                  Técnicas de backlog refinement e MoSCoW para focar no que realmente gera valor e impacto.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Comunicação</h3>
                <p className="text-silver text-sm leading-relaxed">
                  Rituais ágeis (Daily, Planning, Review, Retro) para alinhar equipes e eliminar ruídos.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Iteração</h3>
                <p className="text-silver text-sm leading-relaxed">
                  Ciclos curtos de feedback para aprender rápido, adaptar estratégia e evitar desperdício.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Métricas</h3>
                <p className="text-silver text-sm leading-relaxed">
                  KPIs ágeis (velocity, lead time, cycle time) para tomar decisões baseadas em dados reais.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Melhoria Contínua</h3>
                <p className="text-silver text-sm leading-relaxed">
                  Kaizen e retrospectives para evoluir constantemente processos, comportamentos e resultados.
                </p>
              </div>
            </div>

            <div className="bg-primary text-light p-10 md:p-16 border-l-4 border-gold">
              <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Transformando Desafios em Oportunidades</h3>
              <p className="text-lg md:text-xl leading-relaxed text-silver">
                Através de <span className="text-gold font-semibold">eficiência e inovação</span>, os Métodos Ágeis permitem que
                você e sua organização naveguem o caos com clareza, executem com velocidade e entreguem valor de forma sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-8">
              Pronto para aplicar o método?
            </h2>
            <p className="text-xl text-silver mb-12 leading-relaxed">
              Agende uma sessão para descobrir como a Engenharia do Caos pode transformar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultoria"
                className="inline-flex items-center justify-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group"
              >
                <span>Consultoria Corporativa</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/mentoria"
                className="inline-flex items-center justify-center space-x-2 border-2 border-gold text-light px-10 py-4 hover:bg-gold hover:text-primary transition-colors font-semibold uppercase tracking-wider group"
              >
                <span>Mentoria de Alta Performance</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
