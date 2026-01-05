import { ArrowRight, Award, Target, Users, Lightbulb, Gauge, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sobre() {
  const scrollToBio = () => {
    const element = document.getElementById('jornada');
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
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-title uppercase tracking-wider leading-tight">
                A Arquiteta de Decisões
              </h1>
              <h2 className="text-xl md:text-2xl text-silver leading-relaxed">
                <span className="font-semibold text-light">Ronara Lamounier</span> é conhecida como a{' '}
                <span className="italic">'McKinsey de uma mulher só'</span>. Ela não separa a lógica corporativa da alma humana.
              </h2>
              <p className="text-lg text-silver leading-relaxed">
                Com um histórico de <span className="text-gold font-semibold">destravar operações bilionárias</span>, ela hoje
                aplica sua <span className="italic font-semibold">Engenharia de Consciência</span> para eliminar a paralisia de
                líderes e empresas que sabem que podem mais, mas estão travados no 'ruído'.
              </p>
              <button
                onClick={scrollToBio}
                className="inline-flex items-center space-x-2 bg-gold text-primary px-8 py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group"
              >
                <span>Conheça minha jornada</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-silver/10 border-2 border-gold p-2">
                <div className="bg-primary h-[500px] flex items-center justify-center text-light">
                  <div className="text-center">
                    <div className="text-8xl font-title mb-6">RL</div>
                    <div className="text-sm tracking-widest mb-2">RONARA LAMOUNIER</div>
                    <div className="text-xs text-silver">ENGENHARIA DE CONSCIÊNCIA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-silver/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-12">
              Essência da Marca
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-primary text-gold px-6 py-3 text-xl font-title tracking-wider">CONTRIBUIÇÃO</div>
              <div className="bg-primary text-gold px-6 py-3 text-xl font-title tracking-wider">RESULTADOS</div>
              <div className="bg-primary text-gold px-6 py-3 text-xl font-title tracking-wider">ACESSIBILIDADE</div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto">
                  <Award size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Madura</h3>
                <p className="text-silver text-sm">Experiência consolidada em transformação organizacional de alto nível.</p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto">
                  <Target size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Didática</h3>
                <p className="text-silver text-sm">Capacidade de traduzir complexidade em ações práticas e aplicáveis.</p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto">
                  <Users size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Flexível</h3>
                <p className="text-silver text-sm">Adaptação estratégica às necessidades únicas de cada organização.</p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto">
                  <Lightbulb size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Criativa</h3>
                <p className="text-silver text-sm">Soluções inovadoras que vão além do convencional.</p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto">
                  <Gauge size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Prática</h3>
                <p className="text-silver text-sm">Foco em execução e resultados mensuráveis, não apenas teoria.</p>
              </div>

              <div className="bg-white border border-primary/20 p-8">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle2 size={32} className="text-gold" />
                </div>
                <h3 className="text-xl font-title uppercase mb-3 tracking-wider">Organizada</h3>
                <p className="text-silver text-sm">Estrutura metódica que garante clareza e previsibilidade.</p>
              </div>
            </div>

            <div className="mt-16 bg-primary text-light p-8 md:p-12 border-l-4 border-gold">
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="font-semibold">Estratégia:</span> Levar informações e soluções via{' '}
                <span className="text-gold font-semibold">Métodos Ágeis</span> no digital, mostrando sua eficácia no meio
                empresarial para gerar resultados reais, transformando desafios em oportunidades através de eficiência e inovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider text-center mb-6">
              De Desenvolvedora a Líder em Transformação Organizacional
            </h2>
            <p className="text-xl text-silver text-center mb-16 max-w-3xl mx-auto">
              Uma jornada de 25 anos construindo expertise em tecnologia, gestão e métodos ágeis.
            </p>

            <div className="space-y-12">
              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">01</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">Raízes em Divinópolis</h3>
                  <p className="text-silver leading-relaxed">
                    Nascida em <span className="text-light font-semibold">Divinópolis-MG</span>, em uma família amorosa, Ronara
                    cresceu com a influência marcante de sua avó. Desde cedo, demonstrou interesse pela mente humana, inicialmente
                    inclinada para a psicologia. Foi na <span className="text-gold font-semibold">adolescência</span> que descobriu
                    sua verdadeira paixão: a <span className="text-gold font-semibold">tecnologia</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">02</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">Início em São Paulo</h3>
                  <p className="text-silver leading-relaxed">
                    Aos <span className="text-gold font-semibold">19 anos</span>, mudou-se para São Paulo em busca de crescimento
                    profissional. Iniciou sua carreira como <span className="text-light font-semibold">desenvolvedora</span>,
                    mergulhando no universo da programação e sistemas. Foi nesse período que começou a entender a interseção entre
                    tecnologia e processos organizacionais.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">03</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">O Ponto de Virada: Mentoria de Alexandre Notte</h3>
                  <p className="text-silver leading-relaxed mb-4">
                    Em <span className="text-gold font-semibold">2004</span>, sua vida profissional tomou uma direção transformadora.
                    Foi mentorada por <span className="text-light font-semibold">Alexandre Notte</span>, que lhe presenteou com um
                    kit simbólico de gestão de projetos: <span className="italic">um livro, uma caneta e post-its</span>.
                  </p>
                  <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-6">
                    <p className="text-light leading-relaxed">
                      Esse momento foi sua introdução ao <span className="text-gold font-semibold">PMI (Project Management Institute)</span>
                      {' '}e ao conceito de <span className="text-gold font-semibold">PMP (Project Management Professional)</span>.
                      A partir daí, Ronara compreendeu que tecnologia sem gestão estratégica era apenas código sem propósito.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">04</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">Formação de Elite</h3>
                  <p className="text-silver leading-relaxed mb-4">
                    Dedicou-se intensamente aos estudos, combinando rigor técnico com visão estratégica:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-silver">
                        <span className="text-light font-semibold">ESPM</span> - Estudos intensos em gestão empresarial
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-silver">
                        Graduação em <span className="text-light font-semibold">Sistemas de Informação</span>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-silver">
                        Extensão na <span className="text-light font-semibold">USP</span> em metodologias ágeis
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-silver">
                        Pós-graduação em <span className="text-light font-semibold">Gestão de Negócios e Marketing pela ESPM</span>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-silver">
                        Duas <span className="text-light font-semibold">formações internacionais de coaching</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">05</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">Ascensão Meteórica</h3>
                  <p className="text-silver leading-relaxed mb-4">
                    Sua progressão de carreira foi implacável: de coordenadora a{' '}
                    <span className="text-gold font-semibold">gerente de portfólios</span> (o nível mais alto pelo PMI). Conquistou a
                    cobiçada <span className="text-light font-semibold">certificação PMP</span>, reconhecida globalmente como o padrão
                    de excelência em gestão de projetos.
                  </p>
                  <div className="bg-gold/10 border-l-4 border-gold p-6">
                    <p className="text-light leading-relaxed">
                      "Não basta gerenciar projetos. É preciso orquestrar <span className="italic">transformações</span>."
                    </p>
                    <p className="text-silver text-sm mt-2">— Ronara Lamounier</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">06</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">Impacto em Gigantes Corporativos</h3>
                  <p className="text-silver leading-relaxed mb-4">
                    Gerenciou projetos estratégicos de alto impacto em algumas das maiores organizações do Brasil e do mundo:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">BANCO DO BRASIL</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">VALE</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">LIGHT</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">FIAT</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">FLEURY</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">SANTANDER</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">MICROSOFT</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">GPA</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">BMG</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">TEMPO ASSIST</div>
                    </div>
                    <div className="bg-primary/50 border border-silver/20 p-4 text-center">
                      <div className="text-gold font-title text-lg">GRUPO MARISTA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">07</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">A Revolução Ágil</h3>
                  <p className="text-silver leading-relaxed mb-4">
                    Desde <span className="text-gold font-semibold">2009</span>, Ronara é apaixonada por{' '}
                    <span className="text-light font-semibold">agilidade</span>. Incorporou práticas ágeis em sua expertise tradicional
                    de gestão, criando uma abordagem híbrida que combina o rigor do PMI com a flexibilidade do Agile.
                  </p>
                  <p className="text-silver leading-relaxed">
                    Em <span className="text-gold font-semibold">2015</span>, tornou-se{' '}
                    <span className="text-light font-semibold">Agile Coach no Walmart.com</span>, liderando a transformação digital
                    de um dos maiores varejistas do mundo. Depois, levou sua metodologia para Santander, Microsoft e outras gigantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 border-l-2 border-gold pl-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gold flex items-center justify-center">
                  <div className="text-primary font-title text-2xl">08</div>
                </div>
                <div>
                  <h3 className="text-2xl font-title uppercase tracking-wider mb-3">Missão e Legado</h3>
                  <p className="text-silver leading-relaxed mb-4">
                    Movida pela paixão de <span className="text-gold font-semibold">compartilhar conhecimentos</span>, Ronara dedica-se
                    a ajudar profissionais e organizações com práticas ágeis para mudanças duradouras.
                  </p>
                  <div className="bg-gold text-primary p-8">
                    <p className="text-xl font-semibold mb-2">Objetivo</p>
                    <p className="leading-relaxed">
                      Preparar e impactar mais profissionais em suas carreiras e organizações, transformando paralisia em execução e
                      caos em lucro através da Engenharia de Consciência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-title uppercase tracking-wider mb-8">
              Pronto para sua transformação?
            </h2>
            <p className="text-xl text-silver mb-12">
              Descubra como a Engenharia de Consciência pode destravar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultoria"
                className="inline-flex items-center justify-center space-x-2 bg-primary text-light px-8 py-4 hover:bg-primary/90 transition-colors font-semibold uppercase tracking-wider"
              >
                <span>Consultoria Corporativa</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/mentoria"
                className="inline-flex items-center justify-center space-x-2 bg-gold text-primary px-8 py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider"
              >
                <span>Mentoria de Carreira</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
