# Guia de Design e Marca - Ronara Lamounier

## Essência da Marca

**Contribuição | Resultados | Acessibilidade**

Ronara é madura, didática, flexível, criativa, prática, moderna e organizada.

## Posicionamento

"Engenharia de Consciência" aplicada a sistemas e pessoas. Eliminar qualquer ruído de 'coach de palco' ou 'blogueira'. Exalar **Autoridade**, **Engenharia** e **Lucro**.

Inspiração: Solidez de uma multinacional + Precisão de uma engenharia de software.

Metáfora: **"O Lobby do Império"**

---

## Sistema de Cores

### Paleta Principal

```css
#1A1A1A  /* Primária: Preto absoluto / Carvão */
#9B9794  /* Complementar: Prata metálico */
#F8BF04  /* Adicional: Dourado envelhecido */
#F2F1F3  /* Fundo claro: Próximo ao branco */
```

### Aplicação das Cores

**Regra de Harmonia** (baseada em feed Instagram):
- A cada 6 elementos visuais:
  - 3 elementos com cor primária (#1A1A1A) - 50%
  - 2 elementos com cor complementar (#9B9794) - 33%
  - 1 elemento com cor adicional (#F8BF04) - 17%

### Uso Específico

**#1A1A1A (Primária)**
- ✅ Backgrounds de seções hero
- ✅ Textos principais
- ✅ Bordas de cards importantes
- ✅ Cabeçalhos e rodapés

**#9B9794 (Complementar)**
- ✅ Textos secundários
- ✅ Ícones não destacados
- ✅ Bordas sutis
- ✅ Estados de hover

**#F8BF04 (Adicional - Dourado)**
- ✅ CTAs principais (botões de ação)
- ✅ Destaques de texto críticos
- ✅ Ícones de destaque
- ✅ Linhas de separação importantes
- ⚠️ Usar com moderação para manter sofisticação

**#F2F1F3 (Fundo Claro)**
- ✅ Backgrounds de seções alternadas
- ✅ Cards sobre fundo escuro
- ✅ Textos sobre fundo escuro

### Gradientes Permitidos

Usar apenas quando necessário para criar profundidade:

```css
/* Gradiente escuro com toque de ouro */
linear-gradient(135deg, #1A1A1A 0%, #9B9794 100%)

/* Gradiente sutil para overlays */
linear-gradient(to bottom, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.7) 100%)

/* Linha de destaque dourada */
linear-gradient(to right, transparent 0%, #F8BF04 50%, transparent 100%)
```

---

## Tipografia

### Fontes

**Títulos (Headings)**
```css
font-family: 'Marcellus', serif;
```
- Elegante e autoritária
- Usar em MAIÚSCULAS para máxima autoridade
- Tracking: letter-spacing: 0.05em a 0.1em

**Corpo e Subtítulos**
```css
font-family: 'TT Norms', 'Inter', system-ui, sans-serif;
```
- Clara e moderna
- Usar em minúsculas para acessibilidade
- Tracking: letter-spacing: 0.01em

### Escala Tipográfica

```css
/* Desktop */
H1: 4.5rem (72px) - Hero sections
H2: 3rem (48px) - Section titles
H3: 2rem (32px) - Subsections
H4: 1.5rem (24px) - Card titles
Body: 1.125rem (18px) - Texto principal
Small: 0.875rem (14px) - Textos secundários

/* Mobile */
H1: 2.5rem (40px)
H2: 2rem (32px)
H3: 1.5rem (24px)
H4: 1.25rem (20px)
Body: 1rem (16px)
Small: 0.875rem (14px)
```

### Hierarquia de Peso

```css
Light: 300 - Raramente usado
Regular: 400 - Corpo de texto
Semibold: 600 - Destaques e CTAs
Bold: 700 - Títulos e elementos críticos
```

**Máximo de 3 pesos por design** para manter coesão.

### Line Height

```css
Títulos (H1-H4): 120% (1.2)
Corpo de texto: 150% (1.5)
Textos longos: 175% (1.75)
```

### Uso de Negrito e Itálico

**Negrito**:
- Palavras-chave em parágrafos
- Nomes de empresas
- Números e métricas importantes
- Exemplo: "...operações em **Santander** e **Vale**..."

**Itálico**:
- Termos técnicos ou metáforas
- Ênfase sutil
- Exemplo: "...encontrar o _'bug'_ no código..."

---

## Elementos Visuais

### Estilo Fotográfico: "Cinema Vérité"

**O que USAR**:
- ✅ Power poses de Ronara em ação
- ✅ Ângulos de baixo para cima (autoridade)
- ✅ Ronara palestrando, em movimento
- ✅ Iluminação dramática e contrastada
- ✅ Olhar direto para câmera (conexão)
- ✅ Ambientes estruturados: escritórios, salas de reunião
- ✅ Elementos de código, linhas retas, xadrez

**O que EVITAR**:
- ❌ Fotos 'fofas' ou casuais demais
- ❌ Sorrisos excessivos ou forçados
- ❌ Poses de braços abertos na natureza
- ❌ Tons pastéis ou cores vibrantes demais
- ❌ Ambientes externos com muita luz natural
- ❌ Selfies ou fotos não profissionais

### Tratamento de Imagem

```css
/* Overlay para manter legibilidade */
overlay: linear-gradient(rgba(26,26,26,0.6), rgba(26,26,26,0.8));

/* Filtros sutis */
filter: brightness(0.85) contrast(1.1);

/* Desfoque para backgrounds */
backdrop-filter: blur(10px);
```

### Ícones

**Biblioteca**: Lucide React

**Estilo**:
- Stroke width: 2px (padrão)
- Tamanhos: 20px, 24px, 32px, 48px
- Cores: Primária, complementar ou dourado
- Sempre com significado claro, nunca decorativos

**Ícones Recomendados**:
- Building2, Cpu: Filtro inteligente
- Target, Code2, Zap: Método
- TrendingUp, Users, Cog: Processos/Resultados
- Brain, DollarSign, Heart: Mentoria

---

## Grid e Espaçamento

### Sistema de Espaçamento (8px base)

```css
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 3rem (48px)
2xl: 4rem (64px)
3xl: 6rem (96px)
```

### Container

```css
max-width: 1280px (xl)
padding: 1rem (mobile) | 2rem (tablet) | 4rem (desktop)
```

### Grid System

**Desktop**: 12 colunas
**Tablet**: 8 colunas
**Mobile**: 4 colunas

**Gap**: 2rem (32px) desktop | 1.5rem (24px) tablet | 1rem (16px) mobile

### Respiro (Breathing Room)

- Seções principais: padding vertical 5rem (80px) desktop | 3rem (48px) mobile
- Cards: padding 2.5rem (40px) desktop | 1.5rem (24px) mobile
- Entre elementos relacionados: 1.5rem (24px)
- Entre elementos não relacionados: 3rem (48px)

---

## Componentes

### Botões

#### Primário (CTA Principal)
```css
background: #F8BF04 (Dourado)
color: #1A1A1A (Preto)
padding: 1rem 2.5rem
font-weight: 600
text-transform: uppercase
letter-spacing: 0.05em
border: none

/* Hover */
background: rgba(248, 191, 4, 0.9)
transform: translateY(-2px)
transition: all 0.3s ease
```

#### Secundário
```css
background: transparent
color: #F2F1F3 (Claro)
border: 2px solid #F8BF04
padding: 1rem 2.5rem

/* Hover */
background: #F8BF04
color: #1A1A1A
```

#### Link
```css
color: #9B9794 (Prata)
text-decoration: none
border-bottom: 1px solid transparent

/* Hover */
color: #F8BF04
border-bottom: 1px solid #F8BF04
```

### Cards

#### Card Padrão
```css
background: #FFFFFF
border: 2px solid #1A1A1A
padding: 2.5rem

/* Hover */
border-color: #F8BF04
transform: translateY(-4px)
transition: all 0.3s ease
```

#### Card Destaque
```css
background: #1A1A1A
color: #F2F1F3
border-left: 4px solid #F8BF04
padding: 2rem
```

### Bordas

**Filosofia**: Cantos **retos** (não arredondados)

```css
border-radius: 0; /* Sempre reto */
```

Cantos retos transmitem:
- Força e modernidade
- Organização e estrutura
- Profissionalismo corporativo

### Separadores

```css
/* Linha simples */
border-top: 1px solid #9B9794;
opacity: 0.2;

/* Linha de destaque */
border-top: 2px solid #F8BF04;

/* Linha com gradiente */
background: linear-gradient(to right, transparent, #F8BF04, transparent);
height: 2px;
```

---

## Animações e Transições

### Princípios

1. **Sutileza**: Animações devem adicionar polish, não distrair
2. **Performance**: Apenas transform e opacity para 60fps
3. **Propósito**: Toda animação deve ter função (feedback, direção)

### Durações

```css
/* Rápido */
transition: 0.15s ease-out; /* Hover de botões */

/* Médio */
transition: 0.3s ease-out; /* Cards, transformações */

/* Lento */
transition: 0.6s ease-out; /* Fade in de seções */
```

### Easing

```css
/* Entrada */
ease-out

/* Saída */
ease-in

/* Entrada e saída */
ease-in-out
```

### Animações Implementadas

```css
/* Fade In */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

### Hover States

**Botões**:
- Transform: translateY(-2px)
- Sombra sutil

**Cards**:
- Transform: translateY(-4px)
- Borda muda para dourado

**Links**:
- Cor muda para dourado
- Underline aparece

---

## Responsividade

### Breakpoints

```css
sm: 640px   /* Smartphone landscape */
md: 768px   /* Tablet portrait */
lg: 1024px  /* Tablet landscape / Desktop pequeno */
xl: 1280px  /* Desktop padrão */
2xl: 1536px /* Desktop grande */
```

### Mobile-First

**Sempre começar mobile** e adicionar complexidade para desktop.

```css
/* Mobile first */
.element {
  font-size: 1rem;
  padding: 1rem;
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    font-size: 1.5rem;
    padding: 2rem;
  }
}
```

### Prioridades Mobile

1. **CTAs visíveis**: Sempre acima da dobra
2. **Menu hamburger**: Limpo e funcional
3. **Imagens otimizadas**: WebP, lazy load
4. **Texto legível**: Mínimo 16px
5. **Touch targets**: Mínimo 44x44px

---

## Acessibilidade

### Contraste

Todos os textos devem ter contraste mínimo:
- Texto normal: 4.5:1
- Texto grande (24px+): 3:1

**Combinações aprovadas**:
- ✅ #1A1A1A sobre #F2F1F3
- ✅ #F2F1F3 sobre #1A1A1A
- ✅ #F8BF04 sobre #1A1A1A
- ⚠️ #9B9794 sobre #1A1A1A (usar apenas para textos secundários grandes)

### Navegação por Teclado

- Tab order lógico
- Focus states visíveis
- Skip to content link

### Alt Text

Todas as imagens devem ter:
```html
<img src="..." alt="Descrição clara e concisa da imagem" />
```

---

## Tom de Voz

### Palavras de Poder (usar frequentemente)

- Execução
- Lucro
- Precisão
- Cirúrgico
- Destravar
- Reprogramar
- Engenharia
- Resultado
- ROI
- Implacável

### Palavras a Evitar

- Mágico / Milagre
- Segredo
- Fácil / Simples
- Rápido (sem contexto)
- Transforme sua vida (clichê)
- Sucesso garantido

### Estrutura de Mensagem

**Problema claro → Solução específica → Prova social → Ação**

Exemplo:
> "Sua empresa investe milhões em transformação ágil mas os times continuam lentos e desmotivados. (Problema)
>
> Nossa Metodologia Alfaiate de Luxo reescreve processos, capacita pessoas e implementa ferramentas de visibilidade total. (Solução)
>
> Santander e Vale aumentaram produtividade em 40% nos primeiros 6 meses. (Prova)
>
> Agende seu diagnóstico estratégico gratuito. (Ação)"

---

## Checklist de Qualidade

Antes de publicar qualquer novo elemento:

### Design
- [ ] Cores seguem a paleta definida?
- [ ] Harmonia 50/33/17 respeitada?
- [ ] Tipografia usando Marcellus (títulos) e TT Norms (corpo)?
- [ ] Espaçamento segue sistema de 8px?
- [ ] Cantos são retos (não arredondados)?
- [ ] Contraste de texto adequado?

### Conteúdo
- [ ] Tom de voz mantém autoridade e engenharia?
- [ ] Sem linguagem de "coach de palco"?
- [ ] Negrito em palavras-chave importantes?
- [ ] CTAs claros e diretos?
- [ ] Texto revisado (ortografia/gramática)?

### Performance
- [ ] Imagens otimizadas (<100KB)?
- [ ] Lazy loading implementado?
- [ ] Animações usando transform/opacity?
- [ ] Testado em mobile?

### SEO
- [ ] Heading hierarchy correta (H1 > H2 > H3)?
- [ ] Alt text em todas as imagens?
- [ ] Meta description presente?
- [ ] URLs amigáveis?

---

## Referências de Inspiração

### Design
- McKinsey & Company (autoridade corporativa)
- Granado Pharmácias (luxo minimalista brasileiro)
- Farnsworth House (arquitetura minimalista)
- Brutalist architecture (estrutura exposta)

### Fotografia
- Annie Leibovitz (retratos de poder)
- Platon (fotografia corporativa dramática)
- Corporate headshots by Peter Hurley

### Web Design
- Stripe (clareza técnica)
- Apple (minimalismo sofisticado)
- Linear (design limpo e moderno)

---

**Última atualização**: Janeiro 2026
**Responsável**: Equipe de Design Ronara Lamounier
