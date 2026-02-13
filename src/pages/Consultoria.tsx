import { ArrowLeft, Target, TrendingUp, Users } from 'lucide-react';

interface ConsultoriaProps {
  onNavigate: (page: string) => void;
}

export default function Consultoria({ onNavigate }: ConsultoriaProps) {
  const benefits = [
    {
      icon: Target,
      title: 'Precisão Cirúrgica',
      description: 'Sem slides genéricos. Cada estratégia é desenhada para a sua operação específica.',
    },
    {
      icon: TrendingUp,
      title: 'ROI Mensurável',
      description: 'Foco absoluto em resultados tangíveis: lucro, eficiência, crescimento.',
    },
    {
      icon: Users,
      title: 'Senioridade Total',
      description: '25 anos de experiência sem equipe júnior. Você contrata a arquiteta, não estagiários.',
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
            Consultoria Corporativa
          </h1>
          <p className="text-2xl text-gold mb-8">
            A consultoria tradicional entrega slides. Eu entrego cirurgia.
          </p>
          <p className="text-xl text-silver leading-body max-w-4xl">
            Contrate a senioridade de 25 anos sem a equipe júnior. Transforme processos, pessoas e ferramentas em cultura de alta performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black border border-silver border-opacity-30 p-8 hover:border-gold transition-all duration-300"
            >
              <benefit.icon size={48} className="text-gold mb-4" />
              <h3 className="text-xl font-bold text-off-white mb-3 leading-heading">
                {benefit.title}
              </h3>
              <p className="text-silver leading-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-black border border-gold p-12 mb-16">
          <h2 className="text-3xl font-bold text-off-white mb-6 leading-heading">
            Metodologia Alfaiate de Luxo
          </h2>
          <div className="space-y-6 text-silver leading-body">
            <div>
              <h3 className="text-gold font-bold mb-2">Processos</h3>
              <p>Identificação e eliminação de gargalos operacionais que travam a execução.</p>
            </div>
            <div>
              <h3 className="text-gold font-bold mb-2">Pessoas</h3>
              <p>Reprogramação da mentalidade de liderança para tomada de decisão ágil.</p>
            </div>
            <div>
              <h3 className="text-gold font-bold mb-2">Ferramentas</h3>
              <p>Implementação de sistemas que suportam crescimento sustentável.</p>
            </div>
            <div>
              <h3 className="text-gold font-bold mb-2">Cultura</h3>
              <p>Consolidação de uma cultura de alta performance e resultados mensuráveis.</p>
            </div>
          </div>
        </div>

        <div className="bg-black border border-silver border-opacity-30 p-12">
          <h2 className="text-3xl font-bold text-off-white mb-6 text-center leading-heading">
            Cases de Sucesso
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-bold text-off-white mb-2">Santander</h3>
              <p className="text-silver leading-body">
                Reestruturação de processos de decisão que resultou em aumento de eficiência operacional em unidades estratégicas.
              </p>
            </div>
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-bold text-off-white mb-2">Vale</h3>
              <p className="text-silver leading-body">
                Implementação de metodologia de alta performance em operações complexas com impacto direto no bottom line.
              </p>
            </div>
            <div className="border-l-4 border-gold pl-6">
              <h3 className="text-xl font-bold text-off-white mb-2">Light</h3>
              <p className="text-silver leading-body">
                Transformação cultural e operacional com foco em destravar paralisia executiva.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-off-white mb-6 leading-heading">
            Pronto para destravar sua operação?
          </h2>
          <button className="bg-gold hover:bg-opacity-90 text-charcoal font-bold px-12 py-4 text-lg uppercase tracking-wide transition-all duration-300">
            Agendar Diagnóstico com a Ronara
          </button>
        </div>
      </div>
    </div>
  );
}
