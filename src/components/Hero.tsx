import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToFilter = () => {
    const filterSection = document.getElementById('filter-section');
    filterSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal text-off-white px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal z-0" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-heading">
          Eu transformo sistemas ou pessoas travadas em execução e lucro.
        </h1>

        <h2 className="text-lg md:text-xl lg:text-2xl text-silver mb-12 leading-body max-w-4xl mx-auto">
          A mesma engenharia de decisão que usei para destravar operações em gigantes como Santander e Vale, agora aplicada para reescrever o código da sua vida ou do seu negócio.
        </h2>

        <button
          onClick={scrollToFilter}
          className="bg-gold hover:bg-opacity-90 text-charcoal font-bold px-8 py-4 text-lg transition-all duration-300 uppercase tracking-wide"
        >
          Quero destravar minha execução
        </button>

        <button
          onClick={scrollToFilter}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-silver hover:text-gold transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
