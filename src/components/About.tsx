export default function About() {
  return (
    <section className="bg-charcoal py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-6 leading-heading">
              A Arquiteta de Decisões
            </h2>

            <p className="text-silver text-lg mb-6 leading-body">
              <span className="text-gold font-bold">Ronara Lamounier</span> é conhecida como a 'McKinsey de uma mulher só'.
            </p>

            <p className="text-silver text-lg mb-6 leading-body">
              Ela não separa a lógica corporativa da alma humana. Com um histórico de destravar operações bilionárias, ela hoje aplica sua Engenharia de Consciência para eliminar a paralisia de líderes e empresas que sabem que podem mais, mas estão travados no 'ruído'.
            </p>

            <div className="border-l-4 border-gold pl-6 mt-8">
              <p className="text-off-white text-xl font-bold leading-heading">
                25 anos de experiência destravando sistemas complexos e mentes brilhantes.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-black border border-silver border-opacity-30 aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-gold text-6xl font-bold mb-4">RL</div>
                <p className="text-silver text-sm uppercase tracking-wider">Imagem de Autoridade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
