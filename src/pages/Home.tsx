import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Filter from '../components/Filter';
import Method from '../components/Method';
import About from '../components/About';
import Manifesto from '../components/Manifesto';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <Hero />
      <SocialProof />
      <Filter onNavigate={onNavigate} />
      <Method />
      <About />
      <Manifesto />
    </div>
  );
}
