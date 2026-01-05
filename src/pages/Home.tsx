import { ArrowRight, Building2, Cpu, Target, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const scrollToFilter = () => {
    const element = document.getElementById('filtro');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-light">
      <section className="relative min-h-screen flex items-center justify-center bg-primary text-light overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-silver/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-title uppercase tracking-wider leading-tight">
              Eu transformo sistemas ou pessoas travadas em execução e lucro.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-silver font-body max-w-4xl mx-auto leading-relaxed">
              A mesma engenharia de decisão que usei para destravar operações em gigantes como{' '}
              <span className="text-gold font-semibold">Santander</span> e{' '}
              <span className="text-gold font-semibold">Vale</span>, agora aplicada para reescrever o código da sua vida ou do seu negócio.
            </h2>
            <button
              onClick={scrollToFilter}
              className="inline-flex items-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-all text-lg font-semibold uppercase tracking-wider group mt-8"
            >
              <span>Quero destravar minha execução</span>
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

      <section className="bg-primary py-12 border-y border-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-silver uppercase tracking-widest text-sm mb-8 font-semibold">
            Confiada por líderes em
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-light text-2xl md:text-3xl font-title tracking-wider">SANTANDER</div>
            <div className="text-light text-2xl md:text-3xl font-title tracking-wider">VALE</div>
            <div className="text-light text-2xl md:text-3xl font-title tracking-wider">BANCO DO BRASIL</div>
            <div className="text-light text-2xl md:text-3xl font-title tracking-wider">WALMART</div>
            <div className="text-light text-2xl md:text-3xl font-title tracking-wider">MICROSOFT</div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8 opacity-60">
            <div className="text-light text-xl md:text-2xl font-title tracking-wider">FIAT</div>
            <div className="text-light text-xl md:text-2xl font-title tracking-wider">FLEURY</div>
            <div className="text-light text-xl md:text-2xl font-title tracking-wider">GPA</div>
            <div className="text-light text-xl md:text-2xl font-title tracking-wider">BMG</div>
          </div>
        </div>
      </section>

      <section id="filtro" className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-title uppercase tracking-wider mb-6">
              Qual sistema precisamos reescrever?
            </h2>
            <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto leading-relaxed">
              Não importa se o travamento está num servidor corporativo ou na mente de uma líder.{' '}
              <span className="text-primary font-semibold">O problema é sempre um código de decisão errado.</span>{' '}
              Eu sou a especialista que encontra o <span className="italic">'bug'</span> e reescreve o sistema.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-primary p-10 hover:border-gold transition-all group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary group-hover:bg-gold transition-colors flex items-center justify-center">
                  <Building2 size={40} className="text-light" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-title uppercase text-center mb-4 tracking-wider">
                Para Empresas
              </h3>
              <p className="text-silver text-center mb-8 text-lg leading-relaxed">
                Minha <span className="text-primary font-semibold">EMPRESA</span> precisa de lucro e eficiência.
              </p>
              <Link
                to="/consultoria"
                className="block w-full bg-gold text-primary text-center py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group"
              >
                <span className="inline-flex items-center space-x-2">
                  <span>Consultoria Corporativa</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
            </div>

            <div className="bg-white border-2 border-primary p-10 hover:border-gold transition-all group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary group-hover:bg-gold transition-colors flex items-center justify-center">
                  <Cpu size={40} className="text-light" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-title uppercase text-center mb-4 tracking-wider">
                Para Profissionais
              </h3>
              <p className="text-silver text-center mb-8 text-lg leading-relaxed">
                Minha <span className="text-primary font-semibold">CARREIRA</span> precisa de direção e saúde mental.
              </p>
              <Link
                to="/mentoria"
                className="block w-full bg-gold text-primary text-center py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group"
              >
                <span className="inline-flex items-center space-x-2">
                  <span>Mentoria de Alta Performance</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-title uppercase tracking-wider mb-6">
                A Engenharia do Caos
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Um método preciso para transformar paralisia em <span className="text-gold font-semibold">execução implacável</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent transform -translate-y-1/2 z-0"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gold mb-6">
                  <Target size={48} className="text-primary" />
                </div>
                <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                  <div className="text-gold text-6xl font-title mb-4">01</div>
                  <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Diagnóstico</h3>
                  <h4 className="text-gold font-semibold mb-3 uppercase text-sm tracking-wider">Identificar o Erro</h4>
                  <p className="text-silver leading-relaxed">
                    Encontrar a crença ou processo que está gerando inércia e travando resultados.
                  </p>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gold mb-6">
                  <Code2 size={48} className="text-primary" />
                </div>
                <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                  <div className="text-gold text-6xl font-title mb-4">02</div>
                  <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Reprogramação</h3>
                  <h4 className="text-gold font-semibold mb-3 uppercase text-sm tracking-wider">Reescrever o Código</h4>
                  <p className="text-silver leading-relaxed">
                    Ajustar mentalidade e processos com precisão cirúrgica para eliminar o bloqueio.
                  </p>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gold mb-6">
                  <Zap size={48} className="text-primary" />
                </div>
                <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-8">
                  <div className="text-gold text-6xl font-title mb-4">03</div>
                  <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Alta Performance</h3>
                  <h4 className="text-gold font-semibold mb-3 uppercase text-sm tracking-wider">Rodar o Sucesso</h4>
                  <p className="text-silver leading-relaxed">
                    Execução implacável focada em resultados mensuráveis e lucro sustentável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-silver/10 border-2 border-primary p-2">
                  <div className="bg-primary h-[500px] flex items-center justify-center text-light">
                    <div className="text-center">
                      <div className="text-6xl font-title mb-4">RL</div>
                      <div className="text-sm tracking-widest">RONARA LAMOUNIER</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider">
                  A Arquiteta de Decisões
                </h2>

                <p className="text-lg text-primary leading-relaxed">
                  <span className="font-semibold">Ronara Lamounier</span> é conhecida como a{' '}
                  <span className="italic">'McKinsey de uma mulher só'</span>. Ela não separa a lógica corporativa da alma humana.
                </p>

                <p className="text-silver leading-relaxed">
                  Nascida em <span className="font-semibold text-primary">Divinópolis-MG</span> em uma família amorosa,
                  desde cedo foi influenciada pela sabedoria de sua avó. Inicialmente interessada em psicologia,
                  descobriu sua paixão por <span className="font-semibold text-primary">tecnologia na adolescência</span>,
                  o que mudaria completamente sua trajetória.
                </p>

                <p className="text-silver leading-relaxed">
                  Aos <span className="font-semibold text-primary">19 anos</span>, mudou-se para São Paulo e iniciou
                  sua carreira como <span className="font-semibold text-primary">desenvolvedora</span>. Em 2004,
                  sua vida profissional tomou uma direção transformadora quando foi mentorada por{' '}
                  <span className="font-semibold text-primary">Alexandre Notte</span>, que lhe presenteou com um
                  kit de gestão de projetos: um livro, uma caneta e post-its. Esse momento foi sua introdução ao{' '}
                  <span className="font-semibold text-primary">PMI e PMP</span>.
                </p>

                <p className="text-silver leading-relaxed">
                  Dedicou-se intensamente aos estudos na <span className="font-semibold text-primary">ESPM</span>,
                  cursou <span className="font-semibold text-primary">Sistemas de Informação</span> e fez extensão
                  na <span className="font-semibold text-primary">USP</span> em metodologias ágeis. Sua progressão
                  foi meteórica: de coordenadora a <span className="font-semibold text-primary">gerente de portfólios</span>{' '}
                  (o nível mais alto pelo PMI), conquistou a certificação <span className="font-semibold text-primary">PMP</span>,
                  pós-graduação em <span className="font-semibold text-primary">Gestão de Negócios e Marketing pela ESPM</span>{' '}
                  e duas <span className="font-semibold text-primary">formações internacionais de coaching</span>.
                </p>

                <p className="text-silver leading-relaxed">
                  Gerenciou projetos estratégicos em gigantes como{' '}
                  <span className="font-semibold text-primary">Banco do Brasil, Vale, Light, Fiat e Fleury</span>.
                  Apaixonada por agilidade desde <span className="font-semibold text-primary">2009</span>, incorporou
                  práticas ágeis em sua expertise, tornando-se <span className="font-semibold text-primary">Agile Coach
                  no Walmart.com em 2015</span>. Depois atuou em{' '}
                  <span className="font-semibold text-primary">Santander, Tempo Assist, Microsoft, GPA, Grupo Marista e BMG</span>.
                </p>

                <p className="text-silver leading-relaxed">
                  Com um histórico de <span className="font-semibold text-primary">destravar operações bilionárias</span>,
                  hoje aplica sua <span className="italic font-semibold text-gold">Engenharia de Consciência</span> para
                  eliminar a paralisia de líderes e empresas que sabem que podem mais, mas estão travados no 'ruído'.
                </p>

                <div className="bg-primary text-light p-6 border-l-4 border-gold mt-8">
                  <p className="text-lg font-semibold mb-2">Missão</p>
                  <p className="text-silver">
                    Ajudar profissionais e organizações com práticas ágeis para mudanças duradouras,
                    preparando-os para impactar carreiras e negócios de forma transformadora.
                  </p>
                </div>

                <Link
                  to="/#filtro"
                  className="inline-flex items-center space-x-2 bg-gold text-primary px-8 py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group mt-6"
                >
                  <span>Trabalhe comigo</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 border-2 border-gold p-4">
              <div className="text-6xl font-title text-gold">⚡</div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-title uppercase tracking-wider mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl md:text-2xl text-silver leading-relaxed">
              Reescrever o código de decisão de sistemas e pessoas, transformando{' '}
              <span className="text-gold font-semibold">paralisia em execução</span> e{' '}
              <span className="text-gold font-semibold">caos em lucro</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
