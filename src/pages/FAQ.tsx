import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  id: string;
  items: FAQItem[];
  cta?: {
    text: string;
    link: string;
  };
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqSections.flatMap(section =>
        section.items.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      )
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const faqSections: FAQSection[] = [
    {
      title: "Geral",
      id: "geral",
      items: [
        {
          question: "Em que você atua, na prática?",
          answer: "Atuo em performance e execução: estratégia que vira plano, plano que vira ação, ação que vira resultado. Em ambientes corporativos e no desenvolvimento executivo individual."
        },
        {
          question: "Qual é a diferença entre consultoria e mentoria?",
          answer: "Consultoria é atuação na organização e no sistema (processos, pessoas, governança). Mentoria é atuação 1:1 no profissional (decisão, posicionamento, execução e evolução de carreira)."
        },
        {
          question: "Você trabalha com método ou é abordagem aberta?",
          answer: "Trabalho com método. A estrutura garante direção, acompanhamento e mensuração. O conteúdo é adaptado ao contexto, não improvisado."
        },
        {
          question: "Você atende presencialmente?",
          answer: "Prioritariamente online para consistência e agilidade. Formatos presenciais podem ocorrer conforme necessidade e agenda."
        }
      ]
    },
    {
      title: "Consultoria Corporativa",
      id: "consultoria",
      items: [
        {
          question: "Para quais empresas a consultoria é indicada?",
          answer: "Para organizações que precisam destravar execução, melhorar performance, reduzir desperdício e criar governança que sustente crescimento."
        },
        {
          question: "Como começa um projeto de consultoria?",
          answer: "Com diagnóstico e alinhamento executivo: contexto, objetivos, riscos, prioridades e proposta com escopo e governança."
        },
        {
          question: "Quais temas você costuma endereçar em consultoria?",
          answer: "Execução estratégica, liderança, governança, cultura de performance, cadências de gestão, OKRs e modelos operacionais adaptativos."
        },
        {
          question: "Você executa com o time ou entrega apenas recomendações?",
          answer: "Executo com o time. O foco é implementação com cadência, indicadores e responsabilização, não apresentações."
        },
        {
          question: "Quem normalmente é o patrocinador do projeto?",
          answer: "C-level, diretoria e liderança de transformação. O patrocinador define prioridade, remove impedimentos e sustenta governança."
        }
      ],
      cta: {
        text: "Agendar conversa de diagnóstico",
        link: "/consultoria"
      }
    },
    {
      title: "Mentoria Executiva 1:1",
      id: "mentoria",
      items: [
        {
          question: "O que é a Mentoria de Alta Performance 1:1?",
          answer: "É mentoria individual estruturada para clareza, posicionamento e execução consistente. O foco é transformar decisão em resultado mensurável."
        },
        {
          question: "Para quem a mentoria é indicada?",
          answer: "Para líderes e profissionais que entregam, mas precisam de direção estratégica, relevância e ritmo de execução para evoluir carreira e resultado."
        },
        {
          question: "Para quem não é indicada?",
          answer: "Para quem busca motivação, atalhos ou validação. A mentoria exige comprometimento com implementação e responsabilidade."
        },
        {
          question: "Como funciona o processo de aplicação?",
          answer: "Formulário, análise de aderência e conversa estratégica para validar fit. Depois disso, proposta personalizada."
        },
        {
          question: "Qual é a duração da mentoria?",
          answer: "Programas de 6 ou 12 meses, conforme objetivo e ponto de partida."
        },
        {
          question: "Qual é a frequência dos encontros?",
          answer: "Definida no início, conforme objetivo. O formato prioriza acompanhamento suficiente para manter execução e ajustes rápidos de rota."
        },
        {
          question: "Existe confidencialidade?",
          answer: "Sim. O processo é conduzido com confidencialidade e discrição."
        }
      ],
      cta: {
        text: "Aplicar para a Mentoria 1:1",
        link: "/mentoria"
      }
    },
    {
      title: "Investimento e Contratação",
      id: "investimento",
      items: [
        {
          question: "Qual é o investimento da consultoria?",
          answer: "Engajamentos variam conforme escopo e complexidade. O investimento é definido após diagnóstico e alinhamento executivo."
        },
        {
          question: "Qual é o investimento da mentoria 1:1?",
          answer: "O investimento é definido caso a caso, após análise de perfil, objetivos e formato do acompanhamento. A proposta é apresentada após a conversa estratégica."
        },
        {
          question: "Há garantia de resultados?",
          answer: "Resultados variam conforme contexto, comprometimento e ponto de partida. O compromisso é com método, direcionamento e acompanhamento para acelerar decisões e execução."
        },
        {
          question: "Como funciona a contratação e o início?",
          answer: "Após aprovação de proposta, são definidos agenda, metas, governança (ou cadência da mentoria) e critérios de acompanhamento."
        }
      ]
    },
    {
      title: "Contato e Próximos Passos",
      id: "contato",
      items: [
        {
          question: "Qual é o próximo passo para consultoria?",
          answer: "Agendar conversa de diagnóstico para validar aderência, objetivos e escopo."
        },
        {
          question: "Qual é o próximo passo para mentoria?",
          answer: "Aplicar para a mentoria 1:1. Se houver aderência, você será chamado para a conversa estratégica."
        }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-light min-h-screen">
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-title uppercase tracking-wider text-center mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-lg md:text-xl text-center text-silver mb-12">
              Respostas objetivas para decidir com segurança.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {faqSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-6 py-2 border border-primary/30 text-primary hover:bg-primary hover:text-light transition-all text-sm font-semibold uppercase tracking-wider"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {faqSections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 md:py-20 ${sectionIndex % 2 === 0 ? 'bg-light' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-title uppercase tracking-wider mb-12 text-primary border-b-2 border-gold pb-4">
                {section.title}
              </h2>

              <div className="space-y-4 mb-12">
                {section.items.map((item, itemIndex) => {
                  const accordionId = `${section.id}-${itemIndex}`;
                  const isOpen = openIndex === accordionId;

                  return (
                    <div
                      key={itemIndex}
                      className="border border-primary/20 bg-white overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(accordionId)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-light/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-primary pr-4">
                          {item.question}
                        </h3>
                        <ChevronDown
                          size={24}
                          className={`text-gold flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-silver leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {section.cta && (
                <div className="text-center">
                  <Link
                    to={section.cta.link}
                    className="inline-flex items-center space-x-2 bg-gold text-primary px-8 py-3 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group"
                  >
                    <span>{section.cta.text}</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-primary text-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-title uppercase tracking-wider mb-8">
              Ainda tem dúvidas?
            </h2>
            <p className="text-silver mb-8">
              Entre em contato para esclarecer qualquer questão sobre consultoria ou mentoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultoria"
                className="inline-flex items-center justify-center space-x-2 bg-gold text-primary px-8 py-3 hover:bg-gold/90 transition-all font-semibold uppercase tracking-wider group text-sm"
              >
                <span>Consultoria Corporativa</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                to="/mentoria"
                className="inline-flex items-center justify-center space-x-2 border-2 border-gold text-gold px-8 py-3 hover:bg-gold hover:text-primary transition-all font-semibold uppercase tracking-wider group text-sm"
              >
                <span>Mentoria 1:1</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center space-x-2 border-2 border-silver/30 text-silver px-8 py-3 hover:bg-silver/10 transition-all font-semibold uppercase tracking-wider group text-sm"
              >
                <span>Sobre</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
