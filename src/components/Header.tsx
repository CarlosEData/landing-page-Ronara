import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-silver/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-title text-light tracking-wide">
              RONARA LAMOUNIER
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/sobre"
              className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              Sobre
            </Link>
            <Link
              to="/metodo"
              className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              Método
            </Link>
            <Link
              to="/consultoria"
              className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              Consultoria
            </Link>
            <Link
              to="/mentoria"
              className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              Mentoria
            </Link>
            <a
              href="#contato"
              className="bg-gold text-primary px-6 py-2 hover:bg-gold/90 transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              Contato
            </a>
          </div>

          <button
            className="md:hidden text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-silver/20">
            <div className="flex flex-col space-y-4">
              <Link
                to="/sobre"
                className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/metodo"
                className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Método
              </Link>
              <Link
                to="/consultoria"
                className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultoria
              </Link>
              <Link
                to="/mentoria"
                className="text-light hover:text-gold transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentoria
              </Link>
              <a
                href="#contato"
                className="bg-gold text-primary px-6 py-2 text-center hover:bg-gold/90 transition-colors text-sm font-semibold uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
