import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-light border-t border-silver/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-title mb-4 uppercase tracking-wider">
              Ronara Lamounier
            </h3>
            <p className="text-light text-sm leading-relaxed mb-2">
              Clareza de decisão para transformar estratégia em execução real.
            </p>
            <p className="text-silver text-sm leading-relaxed italic">
              Clareza que vira movimento. Movimento que vira resultado.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-title mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-silver hover:text-gold transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/metodo" className="text-silver hover:text-gold transition-colors">
                  Método
                </Link>
              </li>
              <li>
                <Link to="/consultoria" className="text-silver hover:text-gold transition-colors">
                  Consultoria Corporativa
                </Link>
              </li>
              <li>
                <Link to="/mentoria" className="text-silver hover:text-gold transition-colors">
                  Mentoria de Alta Performance
                </Link>
              </li>
              <li>
                <Link to="/perguntas-frequentes" className="text-silver hover:text-gold transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div id="contato">
            <h4 className="text-lg font-title mb-4 uppercase tracking-wider">
              Conecte-se
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/ronara.lamounier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ronaralamounier/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ronara@gmail.com"
                className="text-silver hover:text-gold transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-silver text-sm">
              ronara@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-silver/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-silver">
            <p>&copy; {new Date().getFullYear()} Ronara Lamounier. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
