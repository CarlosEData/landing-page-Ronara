# Instruções para Configuração de Pixels de Rastreamento

Este documento explica como configurar corretamente o Meta Pixel (Facebook/Instagram) e o LinkedIn Insight Tag para remarketing e análise de conversão.

## Meta Pixel (Facebook/Instagram)

### Passo 1: Obter o Pixel ID

1. Acesse o [Facebook Business Manager](https://business.facebook.com)
2. Navegue até **Configurações de Negócios** > **Fontes de Dados** > **Pixels**
3. Copie o **ID do Pixel** (uma sequência de números)

### Passo 2: Configurar no Site

1. Abra o arquivo `src/App.tsx`
2. Localize a linha:
   ```typescript
   const metaPixelId = 'YOUR_META_PIXEL_ID';
   ```
3. Substitua `'YOUR_META_PIXEL_ID'` pelo seu ID real:
   ```typescript
   const metaPixelId = '1234567890123456';
   ```

### Passo 3: Configurar Eventos de Conversão

No Facebook Events Manager, configure eventos personalizados:

#### Para B2B (Consultoria):
- **Lead** - Quando usuário clica em "Agendar diagnóstico"
- **PageView** - Página `/consultoria`
- **ViewContent** - Seção de resultados/cases

#### Para B2C (Mentoria):
- **Lead** - Quando usuário clica em "Aplicar para mentoria"
- **PageView** - Página `/mentoria`
- **ViewContent** - Seção de depoimentos

### Passo 4: Criar Públicos de Remarketing

Crie audiences separadas para cada segmento:

1. **Público B2B**:
   - Visitantes da página `/consultoria`
   - Pessoas que clicaram no card "Para Empresas"
   - Duração: 60-90 dias

2. **Público B2C**:
   - Visitantes da página `/mentoria`
   - Pessoas que clicaram no card "Para Profissionais"
   - Duração: 60-90 dias

## LinkedIn Insight Tag

### Passo 1: Obter o Partner ID

1. Acesse o [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager)
2. Clique em **Account Assets** > **Insight Tag**
3. Copie o **Partner ID** (uma sequência de números)

### Passo 2: Configurar no Site

1. No mesmo arquivo `src/App.tsx`
2. Localize a linha:
   ```typescript
   const linkedInPartnerId = 'YOUR_LINKEDIN_PARTNER_ID';
   ```
3. Substitua `'YOUR_LINKEDIN_PARTNER_ID'` pelo seu ID real:
   ```typescript
   const linkedInPartnerId = '1234567';
   ```

### Passo 3: Configurar Conversões no LinkedIn

No LinkedIn Campaign Manager, configure eventos de conversão:

#### Para B2B (Consultoria):
- **Tipo**: Lead
- **Página**: `/consultoria`
- **Ação**: Clique no CTA "Agendar diagnóstico"
- **Valor**: Opcional, mas recomendado (ex: R$50.000)

#### Para B2C (Mentoria):
- **Tipo**: Lead
- **Página**: `/mentoria`
- **Ação**: Clique no CTA "Aplicar para mentoria"
- **Valor**: Opcional (ex: R$3.500)

### Passo 4: Criar Matched Audiences

Segmente audiências no LinkedIn baseadas em:

1. **Visitantes de /consultoria**:
   - Filtro por cargo: C-Level, VP, Diretor
   - Setor: Tecnologia, Finanças, Varejo
   - Tamanho da empresa: 500+ funcionários

2. **Visitantes de /mentoria**:
   - Filtro por cargo: Gerente, Coordenador, Especialista
   - Interesse em: Desenvolvimento de carreira, Agilidade
   - Senioridade: Mid-senior, Senior

## Verificação e Testes

### Testar Meta Pixel

1. Instale a extensão [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper)
2. Navegue pelo site
3. Verifique se o pixel está disparando corretamente em cada página

### Testar LinkedIn Insight Tag

1. Abra as ferramentas de desenvolvedor do navegador (F12)
2. Vá para a aba **Network**
3. Filtre por `licdn`
4. Navegue pelo site e verifique se os requests aparecem

## Boas Práticas de Remarketing

### Segmentação Comportamental

**B2B (Consultoria)**:
- Remarketing focado em decisores
- Mensagens sobre ROI e transformação corporativa
- Calls sobre "diagnóstico gratuito" ou "conversa estratégica"

**B2C (Mentoria)**:
- Remarketing focado em profissionais
- Mensagens sobre crescimento de carreira e resultados
- Calls sobre "aplicação" e "transformação pessoal"

### Frequência de Anúncios

- **Primeira semana**: 3-5 impressões
- **Segunda semana**: 2-3 impressões
- **Após 15 dias**: 1-2 impressões

### Exclusões Importantes

Exclua das campanhas de remarketing:
- Pessoas que já converteram
- Visitantes que passaram menos de 10 segundos no site
- Bounces da homepage sem interação com o filtro

## Monitoramento de Performance

### KPIs para B2B (Consultoria)

- **CTR**: Meta > 2%
- **Custo por Lead**: Meta < R$500
- **Taxa de Conversão**: Meta > 3%
- **Qualidade de Leads**: Scoring mínimo de 7/10

### KPIs para B2C (Mentoria)

- **CTR**: Meta > 3%
- **Custo por Lead**: Meta < R$100
- **Taxa de Conversão**: Meta > 5%
- **Taxa de Aplicação Completa**: Meta > 40%

## Troubleshooting

### Pixel não está disparando

1. Verifique se os IDs foram substituídos corretamente
2. Limpe o cache do navegador
3. Teste em modo anônimo
4. Verifique o console do navegador por erros JavaScript

### Eventos não estão sendo registrados

1. Confirme que o pixel está instalado corretamente
2. Verifique se os eventos estão configurados no Events Manager
3. Aguarde até 24h para dados aparecerem nos relatórios

### Audiences não estão crescendo

1. Verifique se há tráfego suficiente (mínimo 100 pessoas/semana)
2. Confirme que os pixels estão disparando em todas as páginas
3. Revise as regras de segmentação das audiences

## Suporte

Para questões técnicas sobre os pixels, consulte:
- [Meta Pixel Support](https://www.facebook.com/business/help/742478679120153)
- [LinkedIn Insight Tag Support](https://www.linkedin.com/help/lms/answer/a423304)

---

**Importante**: Após configurar os pixels, aguarde 24-48 horas para começar a coletar dados suficientes para criar campanhas de remarketing eficazes.
