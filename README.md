# Ronara Lamounier - Hub Digital de Conversão

Site completo desenvolvido para ronaralamounier.com.br, atuando como um Hub Digital de Conversão High Ticket com arquitetura de Behavior Target (Segmentação Comportamental).

## Características Principais

### Design e Estética
- **Minimalismo de Luxo + Industrial Tech**
- Paleta de cores profissional:
  - `#1A1A1A` - Primária (preto/carvão)
  - `#9B9794` - Complementar (prata metálico)
  - `#F8BF04` - Adicional (dourado envelhecido para CTAs)
  - `#F2F1F3` - Fundo claro
- Tipografia elegante: Marcellus (títulos) e TT Norms (corpo)
- Mobile-first design otimizado para 80% do tráfego móvel

### Arquitetura
- **Home Unificadora**: Apresenta a 'Engenharia da Consciência'
- **Filtro Inteligente**: Bifurcação comportamental para dois públicos
- **Consultoria (B2B)**: Para empresas e líderes corporativos
- **Mentoria (B2C)**: Para profissionais em transição de carreira

### SEO e Performance
- Meta tags otimizadas para 'Consultoria de Transformação' e 'Mentoria de Carreira'
- Core Web Vitals otimizados
- Carregamento instantâneo
- Responsive design com breakpoints profissionais

## Configuração de Tracking Pixels

### Meta Pixel (Facebook/Instagram)

1. Obtenha seu Pixel ID no Facebook Business Manager
2. Abra o arquivo `src/App.tsx`
3. Substitua `YOUR_META_PIXEL_ID` pelo seu ID real:

```typescript
const metaPixelId = 'SEU_PIXEL_ID_AQUI';
```

### LinkedIn Insight Tag

1. Obtenha seu Partner ID no LinkedIn Campaign Manager
2. No mesmo arquivo `src/App.tsx`
3. Substitua `YOUR_LINKEDIN_PARTNER_ID` pelo seu ID real:

```typescript
const linkedInPartnerId = 'SEU_PARTNER_ID_AQUI';
```

## Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura de Páginas

### Home (`/`)
- Hero Section com proposta de valor
- Prova Social com clientes de prestígio
- Filtro Inteligente (Behavior Target)
- Metodologia 'A Engenharia do Caos'
- Biografia completa de Ronara
- Manifesto e Missão

### Consultoria (`/consultoria`)
- Foco em B2B: Board Members, CEOs, CIOs
- Metodologia Alfaiate de Luxo
- Processos + Pessoas + Ferramentas = Cultura
- Cases de sucesso com ROI mensurável
- CTA para diagnóstico estratégico

### Mentoria (`/mentoria`)
- Foco em B2C: Profissionais em transição
- Método 4R: Roadmap, Relevância, Ritmo, Resultado
- Depoimentos e resultados mensuráveis
- Processo de aplicação estruturado
- CTA para candidatura

## Próximos Passos Recomendados

### 1. Imagens Reais
Substitua os placeholders por fotos profissionais de Ronara:
- Hero Section: foto cinematográfica em ação
- Seção Sobre: retrato com iluminação dramática
- Estilo 'Cinema Vérité' com power poses

### 2. Configurar Analytics
- Instale os pixels de rastreamento (instruções acima)
- Configure eventos personalizados para rastreamento de conversão
- Implemente remarketing separado por segmento (B2B vs B2C)

### 3. Testes A/B
Sugestões para otimização:
- Testar diferentes headlines na Hero Section
- Variações de CTAs em botões principais
- Posicionamento do Filtro Inteligente
- Ordem de informações nas páginas de conversão

### 4. Melhorias de Conversão
- Adicionar chat ao vivo para qualificação
- Implementar formulários de captura de leads
- Criar sequências de email automatizadas
- Adicionar vídeo manifesto na página de mentoria

### 5. SEO Avançado
- Criar sitemap.xml
- Implementar schema markup (Person, Organization, Service)
- Otimizar imagens com alt tags descritivos
- Adicionar blog para conteúdo de autoridade

## Tecnologias Utilizadas

- React 18
- TypeScript
- React Router DOM
- Tailwind CSS
- Vite
- Lucide React (ícones)

## Contatos e Suporte

Para dúvidas sobre implementação ou customizações adicionais, entre em contato através dos canais oficiais de Ronara Lamounier.

---

**Desenvolvido com foco em conversão, autoridade e resultados mensuráveis.**
