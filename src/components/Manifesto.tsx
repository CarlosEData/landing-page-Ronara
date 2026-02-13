import { Linkedin, Instagram, Mail } from 'lucide-react';

export default function Manifesto() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-silver border-opacity-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-off-white mb-8 leading-heading">
            Nossa Missão
          </h2>
          <p className="text-silver text-xl md:text-2xl max-w-4xl mx-auto leading-body">
            Reescrever o código de decisão de sistemas e pessoas, transformando paralisia em execução e caos em lucro.
          </p>
        </div>

        <div className="border-t border-silver border-opacity-20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-silver">
              <p className="text-sm">© 2024 Ronara Lamounier. Todos os direitos reservados.</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:contato@ronaralamounier.com.br"
                className="text-silver hover:text-gold transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex gap-6 text-silver text-sm">
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Imprensa
              </a>
              <a href="#" className="hover:text-gold transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
