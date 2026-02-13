import { Building2, Cpu } from 'lucide-react';

interface FilterProps {
  onNavigate: (page: string) => void;
}

export default function Filter({ onNavigate }: FilterProps) {
  return (
    <section id="filter-section" className="bg-charcoal py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-off-white text-center mb-16 leading-heading">
          Qual sistema precisamos reescrever?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black border border-silver border-opacity-30 p-10 hover:border-gold transition-all duration-300 group cursor-pointer"
               onClick={() => onNavigate('consultoria')}>
            <div className="flex flex-col items-center text-center">
              <Building2 size={64} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-off-white mb-4">
                Minha EMPRESA precisa de lucro e eficiência.
              </h3>
              <button className="bg-gold hover:bg-opacity-90 text-charcoal font-bold px-6 py-3 mt-6 uppercase tracking-wide transition-all duration-300">
                Consultoria Corporativa
              </button>
            </div>
          </div>

          <div className="bg-black border border-silver border-opacity-30 p-10 hover:border-gold transition-all duration-300 group cursor-pointer"
               onClick={() => onNavigate('mentoria')}>
            <div className="flex flex-col items-center text-center">
              <Cpu size={64} className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-off-white mb-4">
                Minha CARREIRA precisa de direção e saúde mental.
              </h3>
              <button className="bg-gold hover:bg-opacity-90 text-charcoal font-bold px-6 py-3 mt-6 uppercase tracking-wide transition-all duration-300">
                Mentoria de Alta Performance
              </button>
            </div>
          </div>
        </div>

        <p className="text-silver text-lg text-center max-w-4xl mx-auto leading-body">
          Não importa se o travamento está num servidor corporativo ou na mente de uma líder. O problema é sempre um código de decisão errado. Eu sou a especialista que encontra o 'bug' e reescreve o sistema.
        </p>
      </div>
    </section>
  );
}
