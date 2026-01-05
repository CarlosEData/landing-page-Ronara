import { ArrowRight, Cpu, MapPin, Star, Gauge, Trophy, CheckCircle2, Brain, DollarSign, Heart } from 'lucide-react';

export default function Mentoria() {
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
              <Cpu size={48} className="text-gold" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-title uppercase tracking-wider leading-tight">
              Mentoria de Alta Performance
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-silver font-body max-w-4xl mx-auto leading-relaxed">
              Você não precisa de <span className="line-through">motivação</span>.{' '}
              <span className="text-gold font-semibold">Você precisa de reprogramação.</span>
            </h2>
            <p className="text-lg text-silver max-w-3xl mx-auto">
              Método prático para sair da estagnação e reescrever o código da sua carreira.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-6">
                Para quem é esta mentoria
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Profissionais que sabem que podem mais, mas estão{' '}
                <span className="text-primary font-semibold">travados no 'ruído'</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Brain size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Clareza</h3>
                <p className="text-silver leading-relaxed">
                  Você está estagnado na carreira e não sabe qual o próximo passo estratégico para crescer.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <DollarSign size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Dinheiro</h3>
                <p className="text-silver leading-relaxed">
                  Você trabalha muito mas não está sendo remunerado à altura do valor que entrega.
                </p>
              </div>

              <div className="bg-white border border-primary/20 p-8 hover:border-gold transition-all">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Heart size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-title uppercase mb-4 tracking-wider">Saúde Mental</h3>
                <p className="text-silver leading-relaxed">
                  Você está esgotado, ansioso e sente que perdeu o controle da sua própria vida profissional.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-primary text-light p-8 md:p-12 border-l-4 border-gold">
              <p className="text-xl md:text-2xl leading-relaxed">
                <span className="font-semibold">A verdade dura:</span> Você não está travado por falta de capacidade.
                Você está travado porque o <span className="italic">'código de decisão'</span> que está rodando na sua
                mente está <span className="text-gold font-semibold">cheio de bugs</span>. Eu encontro esses bugs e
                reescrevo o sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-title uppercase tracking-wider mb-6">
                Método 4R
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Um framework de <span className="text-gold font-semibold">engenharia de carreira</span> para execução
                implacável de resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gold flex items-center justify-center flex-shrink-0">
                    <MapPin size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-gold text-3xl font-title">01</div>
                    <h3 className="text-3xl font-title uppercase tracking-wider">Roadmap</h3>
                  </div>
                </div>
                <p className="text-silver leading-relaxed mb-4">
                  Construir o mapa estratégico da sua carreira com clareza cirúrgica sobre onde você está e onde precisa
                  chegar.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Diagnóstico de posicionamento atual</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Definição de objetivo estratégico</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Plano de ação trimestral</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gold flex items-center justify-center flex-shrink-0">
                    <Star size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-gold text-3xl font-title">02</div>
                    <h3 className="text-3xl font-title uppercase tracking-wider">Relevância</h3>
                  </div>
                </div>
                <p className="text-silver leading-relaxed mb-4">
                  Construir autoridade e visibilidade estratégica no mercado para ser reconhecido pelo valor que você
                  realmente entrega.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Personal branding estratégico</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Networking de alto impacto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Comunicação executiva</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gold flex items-center justify-center flex-shrink-0">
                    <Gauge size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-gold text-3xl font-title">03</div>
                    <h3 className="text-3xl font-title uppercase tracking-wider">Ritmo</h3>
                  </div>
                </div>
                <p className="text-silver leading-relaxed mb-4">
                  Eliminar procrastinação e criar sistema de execução consistente que gera momentum e velocidade
                  sustentável.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Gestão de energia e foco</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Rituais de alta performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Accountability estruturado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/50 backdrop-blur-sm border border-silver/20 p-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gold flex items-center justify-center flex-shrink-0">
                    <Trophy size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-gold text-3xl font-title">04</div>
                    <h3 className="text-3xl font-title uppercase tracking-wider">Resultado</h3>
                  </div>
                </div>
                <p className="text-silver leading-relaxed mb-4">
                  Focar obsessivamente em entregas mensuráveis que impactam sua remuneração, reconhecimento e saúde
                  mental.
                </p>
                <ul className="space-y-2 text-sm text-silver">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Negociação de aumento e promoção</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Transição de carreira estratégica</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span>Equilíbrio sustentável</span>
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
                Resultados Reais
              </h2>
              <p className="text-lg md:text-xl text-silver max-w-3xl mx-auto">
                Transformações mensuráveis de profissionais que <span className="text-primary font-semibold">reescreveram
                o código</span> da sua carreira.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border-2 border-primary p-8 text-center">
                <div className="text-5xl font-title text-gold mb-2">+150%</div>
                <p className="text-primary font-semibold mb-2">Aumento Salarial</p>
                <p className="text-silver text-sm">Média de crescimento de remuneração dos mentorados em 12 meses</p>
              </div>

              <div className="bg-white border-2 border-primary p-8 text-center">
                <div className="text-5xl font-title text-gold mb-2">87%</div>
                <p className="text-primary font-semibold mb-2">Taxa de Promoção</p>
                <p className="text-silver text-sm">Profissionais promovidos ou em transição estratégica bem-sucedida</p>
              </div>

              <div className="bg-white border-2 border-primary p-8 text-center">
                <div className="text-5xl font-title text-gold mb-2">6 meses</div>
                <p className="text-primary font-semibold mb-2">Tempo Médio</p>
                <p className="text-silver text-sm">Para alcançar o primeiro resultado significativo mensurável</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary text-light p-8 border-l-4 border-gold">
                <p className="text-lg mb-4 italic">
                  "Estava há 3 anos no mesmo cargo e salário. Após 4 meses de mentoria com Ronara, consegui uma promoção
                  para gerente e aumento de 60%. O método 4R me deu clareza total sobre o que fazer."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center font-title text-2xl text-primary">
                    JM
                  </div>
                  <div>
                    <p className="font-semibold">João M.</p>
                    <p className="text-sm text-silver">Gerente de Projetos, Setor Financeiro</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-light p-8 border-l-4 border-gold">
                <p className="text-lg mb-4 italic">
                  "Estava burnout total, trabalhando 12h por dia sem reconhecimento. Ronara me ajudou a reposicionar minha
                  carreira. Hoje trabalho menos, ganho mais e recuperei minha saúde mental."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center font-title text-2xl text-primary">
                    AS
                  </div>
                  <div>
                    <p className="font-semibold">Ana S.</p>
                    <p className="text-sm text-silver">Agile Coach, Tecnologia</p>
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
              Pronto para reescrever seu código?
            </h2>
            <p className="text-xl text-silver mb-12 leading-relaxed">
              A mentoria é por <span className="text-gold font-semibold">aplicação</span>. Não aceito todos os
              profissionais. Trabalho apenas com quem está pronto para execução, não para desculpas.
            </p>

            <div className="bg-primary/50 backdrop-blur-sm border-2 border-gold p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-title uppercase mb-6 tracking-wider">Processo de aplicação</h3>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">
                    <span className="font-semibold text-light">Passo 1:</span> Preencha formulário detalhado sobre sua
                    carreira atual
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">
                    <span className="font-semibold text-light">Passo 2:</span> Análise do seu perfil e objetivos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">
                    <span className="font-semibold text-light">Passo 3:</span> Conversa estratégica de 45 minutos
                    para avaliar fit
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-silver">
                    <span className="font-semibold text-light">Passo 4:</span> Proposta personalizada de mentoria
                  </span>
                </li>
              </ul>

              <a
                href="mailto:mentoria@ronaralamounier.com.br?subject=Aplicação para Mentoria de Alta Performance"
                className="inline-flex items-center space-x-2 bg-gold text-primary px-10 py-4 hover:bg-gold/90 transition-colors font-semibold uppercase tracking-wider group"
              >
                <span>Aplicar para mentoria</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>

              <p className="text-sm text-silver mt-6">
                Investimento: a partir de R$3.500/mês | Programas de 6 ou 12 meses
              </p>
            </div>

            <div className="mt-12 p-8 bg-light/5 border border-silver/20">
              <p className="text-silver text-sm leading-relaxed">
                <span className="font-semibold text-light">IMPORTANTE:</span> Esta mentoria não é para quem busca
                'fórmulas mágicas' ou quer apenas 'se sentir bem'. É para profissionais que querem resultados
                mensuráveis e estão dispostos a fazer o trabalho pesado de reprogramação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
