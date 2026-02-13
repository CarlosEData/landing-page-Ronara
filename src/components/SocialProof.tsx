export default function SocialProof() {
  const clients = [
    'Santander',
    'Vale',
    'Light',
    'Banco do Brasil',
  ];

  return (
    <section className="bg-black py-16 px-6 border-t border-b border-silver border-opacity-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-center text-silver text-xl md:text-2xl font-bold opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
