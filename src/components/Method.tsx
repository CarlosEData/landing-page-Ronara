import { Search, Code2, Zap } from 'lucide-react';

export default function Method() {
  const steps = [
    {
      icon: Search,
      title: 'O Diagnóstico',
      subtitle: 'Identificar o Erro',
      description: 'Encontrar a crença ou processo que está gerando a inércia.',
    },
    {
      icon: Code2,
      title: 'A Reprogramação',
      subtitle: 'Reescrever o Código',
      description: 'Ajustar a mentalidade e os processos para a nova realidade.',
    },
    {
      icon: Zap,
      title: 'A Alta Performance',
      subtitle: 'Rodar o Sucesso',
      description: 'Execução implacável focada em lucro (financeiro ou de vida).',
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-off-white text-center mb-6 leading-heading">
          A Engenharia do Caos
        </h2>
        <p className="text-silver text-lg text-center mb-16 max-w-3xl mx-auto leading-body">
          Três passos para transformar paralisia em execução
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-charcoal border border-silver border-opacity-30 p-8 h-full hover:border-gold transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gold mb-6">
                  <step.icon size={32} className="text-charcoal" />
                </div>

                <div className="absolute top-8 -right-4 text-6xl font-bold text-silver opacity-10">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-off-white mb-2 leading-heading">
                  {step.title}
                </h3>
                <h4 className="text-gold text-sm uppercase tracking-wider mb-4">
                  {step.subtitle}
                </h4>
                <p className="text-silver leading-body">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold opacity-50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
