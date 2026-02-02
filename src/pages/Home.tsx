import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-light">
      <section className="relative min-h-screen flex items-center bg-black text-light overflow-hidden">
        <div className="w-full relative z-10">
          <div className="grid md:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in px-4 sm:px-6 lg:px-12 xl:px-24 py-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-title leading-tight">
                Especialista em Transformação Estratégica: Ordem no caos para a estratégia virar entrega real.
              </h1>
              <h2 className="text-lg md:text-xl text-silver leading-relaxed">
                Organizo pessoas, prioridades e decisões para transformar estratégia em execução consistente.
              </h2>
              <p className="text-sm text-silver uppercase tracking-wider">
                Consultoria em transformação organizacional e execução estratégica.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('como-atuo');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 bg-gold text-primary px-8 py-4 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group"
              >
                <span>Conheça minha forma de atuação</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <p className="text-sm text-silver italic font-light">
                Clareza que vira movimento. Movimento que vira resultado.
              </p>
            </div>

            <div className="order-first md:order-last">
              <div className="relative bg-black">
                <img
                  src="/image.png"
                  alt="Ronara Lamounier"
                  className="w-full h-auto opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-light border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-title text-center mb-12">
            Atuação em organizações de alta complexidade
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 mb-12 max-w-5xl mx-auto">
            <img
              src="/walmart-logo-4.png"
              alt="Walmart"
              className="h-14 md:h-16 lg:h-20 w-auto grayscale opacity-70"
            />
            <img
              src="/banco_santander_logotipo.svg.png"
              alt="Santander"
              className="h-14 md:h-16 lg:h-20 w-auto grayscale opacity-70"
            />
            <img
              src="/microsoft_logo_(2012).svg.png"
              alt="Microsoft"
              className="h-14 md:h-16 lg:h-20 w-auto grayscale opacity-70"
            />
            <img
              src="/logo_bayer.svg.png"
              alt="Bayer"
              className="h-14 md:h-16 lg:h-20 w-auto grayscale opacity-70"
            />
            <img
              src="/gpa_logo_2013.svg.png"
              alt="GPA"
              className="h-14 md:h-16 lg:h-20 w-auto grayscale opacity-70"
            />
          </div>
          <p className="text-center text-silver text-sm max-w-3xl mx-auto mb-2">
            Projetos de transformação organizacional, governança, agilidade e execução estratégica.
          </p>
          <p className="text-center text-silver text-sm max-w-3xl mx-auto">
            Atuação sustentada por estruturas próprias: fundadora da InnovaSmart e sócia da 123 Ágil.
          </p>
        </div>
      </section>

      <section id="como-atuo" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-12">
              Como eu atuo
            </h2>

            <div className="mb-16 text-center">
              <p className="text-lg md:text-xl text-primary leading-relaxed mb-4">
                Atuo organizando o que normalmente está difuso: decisões, prioridades e responsabilidades.
              </p>
              <p className="text-lg md:text-xl text-primary leading-relaxed">
                Entro quando a dinâmica é acelerada demais para pensar e a pressão alta demais para errar.
              </p>
            </div>

            <div className="space-y-10">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl md:text-2xl font-title mb-3">
                  1. Diagnóstico de decisão e prioridade
                </h3>
                <p className="text-silver leading-relaxed">
                  Avalio onde a dinâmica atual está perdendo energia: excesso de demandas, decisões fragmentadas e ausência de critério claro de prioridade.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl md:text-2xl font-title mb-3">
                  2. Organização do fluxo de execução
                </h3>
                <p className="text-silver leading-relaxed">
                  Estruturo como decisões entram, são avaliadas e se transformam em ação concreta. Menos retrabalho. Menos urgência artificial. Mais previsibilidade.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl md:text-2xl font-title mb-3">
                  3. Alinhamento de direção e responsabilidade
                </h3>
                <p className="text-silver leading-relaxed">
                  Trabalho junto a quem sustenta decisões para alinhar direção, expectativas e ritmo. Pessoas e times não travam por falta de capacidade, mas por falta de clareza.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-xl md:text-2xl font-title mb-3">
                  4. Ritmo de execução e acompanhamento
                </h3>
                <p className="text-silver leading-relaxed">
                  Crio cadência de decisão e ação para que a estratégia deixe de ser intenção e se sustente em resultados consistentes ao longo do tempo.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg md:text-xl text-primary font-medium mb-6">
                Não entro para implantar método.
                <br />
                Entro para organizar a dinâmica em funcionamento.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('resultados');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-light transition-all font-semibold uppercase tracking-wider group text-sm"
              >
                <span>Converse sobre o seu contexto atual</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-8">
                Resultados em contextos de alta complexidade
              </h2>
              <p className="text-lg md:text-xl text-primary leading-relaxed mb-4">
                Minha atuação gera impacto quando o problema não é falta de esforço.
              </p>
              <p className="text-lg md:text-xl text-primary leading-relaxed">
                É perda de foco, excesso de decisões difusas e ausência de critério claro de priorização.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border border-primary/20 p-6">
                <p className="text-primary font-medium">
                  Reorganização de prioridades e focos de decisão
                </p>
              </div>
              <div className="bg-white border border-primary/20 p-6">
                <p className="text-primary font-medium">
                  Redução de retrabalho e urgência artificial
                </p>
              </div>
              <div className="bg-white border border-primary/20 p-6">
                <p className="text-primary font-medium">
                  Clareza de responsabilidades e critérios de decisão
                </p>
              </div>
              <div className="bg-white border border-primary/20 p-6">
                <p className="text-primary font-medium">
                  Alinhamento real entre direção e execução
                </p>
              </div>
              <div className="bg-white border border-primary/20 p-6">
                <p className="text-primary font-medium">
                  Aumento de previsibilidade de ação e resultados
                </p>
              </div>
              <div className="bg-white border border-primary/20 p-6">
                <p className="text-primary font-medium">
                  Estratégia operando como prática, não como discurso
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-silver leading-relaxed mb-4">
                Resultados construídos em contextos onde a complexidade é real, as decisões pesam e a clareza faz diferença.
              </p>
              <p className="text-silver leading-relaxed">
                Atuação sustentada por estruturas próprias: fundadora da InnovaSmart e sócia da 123 Ágil.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  const element = document.getElementById('para-quem');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-light transition-all font-semibold uppercase tracking-wider group text-sm"
              >
                <span>Verifique se essa abordagem faz sentido para o seu contexto</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="para-quem" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-16">
              Para quem esse trabalho faz sentido
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-light border border-primary/20 p-8">
                <h3 className="text-2xl font-title mb-6 text-primary">
                  Esse trabalho é para você se:
                </h3>
                <ul className="space-y-4 text-silver">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Lidera pessoas, times ou operações e sente que a complexidade aumentou</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Ou vive um momento pessoal de excesso de frentes, escolhas difíceis e falta de direção clara</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Tem dificuldade real de priorizar e sustentar decisões</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Sente que esforço não está virando avanço</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Precisa transformar estratégia em execução, não em apresentação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Vive pressão por resultado, prazo e decisão</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Sabe que esforço não é o problema, mas falta de clareza</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light border border-primary/20 p-8">
                <h3 className="text-2xl font-title mb-6 text-primary">
                  Esse trabalho não é para você se:
                </h3>
                <ul className="space-y-4 text-silver">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Busca fórmula pronta ou método milagroso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Espera motivação no lugar de decisão</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Quer terceirizar responsabilidade por escolhas difíceis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Procura treinamento genérico ou conteúdo superficial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Não está disposto a revisar prioridades e formas de operar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">•</span>
                    <span>Quer mudança, mas não está disposto a mudar a forma de decidir e agir.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg md:text-xl text-primary font-medium">
                O caos pode estar na organização ou na vida.
                <br />
                A lógica para sair dele é a mesma: clareza, decisão e execução.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              Quem conduz esse trabalho
            </h2>
            <p className="text-center text-silver text-lg mb-12 italic">
              Em organizações e na vida prática
            </p>

            <div className="space-y-6 text-silver leading-relaxed">
              <p>
                Sou consultora de transformação organizacional, com mais de duas décadas de atuação em contextos de alta complexidade, onde decisões precisam ser tomadas com clareza, ritmo e responsabilidade.
              </p>
              <p>
                Ao longo da minha trajetória, essa lógica de organização se mostrou válida não apenas em empresas, mas também em contextos individuais, quando a vida entra em uma dinâmica sobrecarregada de escolhas, prioridades difusas e execução frágil.
              </p>
              <p>
                Meu trabalho é o mesmo nos dois casos: organizar pessoas, prioridades e decisões para que a dinâmica, organizacional ou pessoal, volte a funcionar com clareza e resultado.
              </p>
              <p>
                Além da atuação direta, sou fundadora da InnovaSmart e sócia da 123 Ágil, estruturas criadas para sustentar projetos de transformação organizacional, agilidade e execução estratégica em contextos de alta complexidade.
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg md:text-xl text-primary font-medium">
                A execução se perde quando decisões se acumulam.
                <br />
                Meu trabalho começa exatamente aí.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-8">
              Quando a clareza falta, a execução perde a direção.
            </h2>

            <p className="text-lg md:text-xl text-silver text-center mb-12 leading-relaxed">
              Se você sente que o excesso de demandas, decisões ou responsabilidades está impedindo avanço real no negócio ou na vida, talvez o problema não seja esforço, mas falta de clareza e critério para decidir e agir.
            </p>

            <p className="text-center text-silver text-sm mb-12">
              Meu trabalho hoje acontece em dois contextos.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4 text-gold">
                  Consultoria organizacional
                </h3>
                <p className="text-lg font-semibold mb-6">
                  Para organizações e lideranças
                </p>
                <p className="text-silver mb-8 leading-relaxed">
                  Para empresas e líderes que precisam organizar decisões, prioridades e execução em contextos de alta complexidade.
                </p>
                <Link
                  to="/consultoria"
                  className="inline-flex items-center space-x-2 bg-gold text-primary px-6 py-3 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group text-sm w-full justify-center"
                >
                  <span>Agende uma conversa de diagnóstico organizacional</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                <h3 className="text-2xl font-title uppercase tracking-wider mb-4 text-gold">
                  Mentoria de decisão e carreira
                </h3>
                <p className="text-lg font-semibold mb-6">
                  Para pessoas físicas
                </p>
                <p className="text-silver mb-8 leading-relaxed">
                  Para pessoas que precisam de clareza, critério e direção para decisões que se sustentam no tempo.
                </p>
                <Link
                  to="/mentoria"
                  className="inline-flex items-center space-x-2 bg-gold text-primary px-6 py-3 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group text-sm w-full justify-center"
                >
                  <span>Agende uma conversa de diagnóstico pessoal</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>

            <p className="text-center text-silver text-sm mt-12">
              Uma conversa para entender seu contexto e avaliar, com clareza, se essa forma de atuação faz sentido.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
