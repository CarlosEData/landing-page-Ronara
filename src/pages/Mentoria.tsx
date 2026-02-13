import { ArrowLeft, Map, Star, Activity, Trophy } from 'lucide-react';

interface MentoriaProps {
  onNavigate: (page: string) => void;
}

export default function Mentoria({ onNavigate }: MentoriaProps) {
  const method4R = [
    {
      icon: Map,
      title: 'Roadmap',
      description: 'Clareza total sobre onde você está e para onde precisa ir.',
    },
    {
      icon: Star,
      title: 'Relevância',
      description: 'Posicionamento estratégico para se tornar indispensável.',
    },
    {
      icon: Activity,
      title: 'Ritmo',
      description: 'Execução consistente sem sacrificar saúde mental.',
    },
    {
      icon: Trophy,
      title: 'Resultado',
      description: 'Conquistas tangíveis: promoções, salário, reconhecimento.',
    },
  ];

  return (
    <div className="bg-charcoal min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-silver hover:text-gold transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={20} />
          Voltar
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6 leading-heading">
            Mentoria de Alta Performance
          </h1>
          <p className="text-2xl text-gold mb-8">
            Você não precisa de motivação, precisa de reprogramação.
          </p>
          <p className="text-xl text-silver leading-body max-w-4xl">
            Método prático para sair da estagnação e construir uma carreira de alto impacto com saúde mental e lucro financeiro.
          </p>
        </div>

        <div className="bg-black border border-gold p-12 mb-16">
          <h2 className="text-3xl font-bold text-off-white mb-8 leading-heading">
            Método 4R
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {method4R.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gold flex items-center justify-center">
                    <item.icon size={32} className="text-charcoal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-off-white mb-2 leading-heading">
                    {item.title}
                  </h3>
                  <p className="text-silver leading-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black border border-silver border-opacity-30 p-8">
            <h3 className="text-2xl font-bold text-off-white mb-4 leading-heading">
              Carreira
            </h3>
            <p className="text-silver leading-body">
              Desbloqueie seu próximo nível profissional com estratégia clara e execução impecável.
            </p>
          </div>

          <div className="bg-black border border-silver border-opacity-30 p-8">
            <h3 className="text-2xl font-bold text-off-white mb-4 leading-heading">
              Dinheiro
            </h3>
            <p className="text-silver leading-body">
              Aprenda a posicionar seu valor e negociar como um executivo sênior.
            </p>
          </div>

          <div className="bg-black border border-silver border-opacity-30 p-8">
            <h3 className="text-2xl font-bold text-off-white mb-4 leading-heading">
              Saúde Mental
            </h3>
            <p className="text-silver leading-body">
              Alta performance sem burnout. Sucesso sustentável é o único sucesso real.
            </p>
          </div>
        </div>

        <div className="bg-black border border-silver border-opacity-30 p-12 mb-16">
          <h2 className="text-3xl font-bold text-off-white mb-6 leading-heading">
            Para quem é esta mentoria?
          </h2>
          <div className="space-y-4 text-silver leading-body">
            <p className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">→</span>
              <span>Profissionais em transição de carreira que precisam de clareza estratégica</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">→</span>
              <span>Líderes que sentem que podem mais, mas estão travados</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">→</span>
              <span>Executivos que querem crescer sem sacrificar saúde mental</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">→</span>
              <span>Profissionais que precisam de reprogramação, não motivação</span>
            </p>
          </div>
        </div>

        <div className="bg-black border border-gold p-12 mb-16">
          <h2 className="text-2xl font-bold text-off-white mb-4 leading-heading">
            Manifesto
          </h2>
          <p className="text-silver text-lg leading-body italic">
            "A estagnação não é falta de talento. É um código de decisão errado. Eu encontro o bug e reescrevo o sistema. O resultado? Você volta a executar no seu máximo potencial - com lucro e sem esgotamento."
          </p>
          <p className="text-gold font-bold mt-6">
            - Ronara Lamounier
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-off-white mb-6 leading-heading">
            Pronto para reprogramar sua carreira?
          </h2>
          <button className="bg-gold hover:bg-opacity-90 text-charcoal font-bold px-12 py-4 text-lg uppercase tracking-wide transition-all duration-300">
            Aplicação para Mentoria
          </button>
          <p className="text-silver text-sm mt-4">
            Vagas limitadas. Processo seletivo rigoroso.
          </p>
        </div>
      </div>
    </div>
  );
}
