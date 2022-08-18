---
title: Introdução à adoção do GitHub Advanced Security em escala
intro: 'Você pode adotar {% data variables.product.prodname_GH_advanced_security %} em escala na sua empresa, seguindo as práticas recomendadas do setor e do GitHub.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introdução
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
---

## Sobre esses artigos

{% data variables.product.prodname_GH_advanced_security %} (GHAS) ajuda as equipes a construir código mais seguro e mais rapidamente usando ferramentas integradas, como digitalização de segredo e a digitalização de código usando CodeQL. Para entender os recursos de segurança disponíveis por meio de {% data variables.product.prodname_GH_advanced_security %}, consulte "[Sobre o GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."

O GHAS é um conjunto de ferramentas que requer a participação ativa de desenvolvedores na sua empresa. Para perceber o melhor retorno do seu investimento, você deve aprender a usar, aplicar e manter o GHAS.


Criamos uma abordagem faseada para implementações do GHAS desenvolvidas com base nas práticas recomendadas do setor e do GitHub. Esperamos que a maioria dos clientes queira seguir essas etapas, com base na nossa experiência ajudando os clientes com uma implantação bem sucedida de {% data variables.product.prodname_GH_advanced_security %}, mas você pode precisar modificar esta abordagem para atender às necessidades da sua empresa.

A habilitação do GHAS em uma grande organização pode ser dividida em seis fases principais.

1. [**Alinhamento da sua estratégia de implantação e objetivos**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals): Pense sobre como será o sucesso e defina como o GHAS será implementado em sua empresa. Esta fase pode demorar apenas alguns dias ou uma semana, mas estabelece bases sólidas para o restante da implantação.

2. [**preparando-se para ativar na escala**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale): Prepare os desenvolvedores, colete dados sobre seus repositórios e certifique-se de estar pronto para a próxima etapa.

3. [**Programas piloto**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs): Opcionalmente, faça o piloto de uma implementação inicial para alguns projetos e equipes de alto impacto. Isso permitirá que um grupo inicial da sua empresa se familiarize com o GHAS antes de você se apresentar com o restante de sua empresa.

4. [**Criar a documentação interna**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation): Crie e comunique a documentação interna para os consumidores de GHAS. Sem documentação adequada fornecida aos desenvolvedores, engenheiros de segurança e outros que estiverem usando o GHAS, o valor será perdido na implementação.

5. [**Implementação e escala de {% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning): Usando as APIs disponíveis, implantar automaticamente {% data variables.product.prodname_code_scanning %} por equipe e por linguagem na sua empresa, usando os dados do repositório que você coletou anteriormente.

6. [**Implementação e escala {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning): Implementar {% data variables.product.prodname_secret_scanning %}, que envolve menos configuração e, portanto, é mais simples de adotar do que {% data variables.product.prodname_code_scanning %}. Ainda assim, é fundamental ter uma estratégia para lidar com resultados novos e antigos.

## {% data variables.contact.github_support %} e {% data variables.product.prodname_professional_services_team %}

Se você encontrar algum problema ou tiver dúvidas durante a sua implementação, você pode pesquisar em nossa documentação por soluções ou entrar em contato com {% data variables.contact.github_support %}. Para obter mais informações, consulte "[Sobre GitHub Support](/support/learning-about-github-support/about-github-support)".

Se você preferir receber orientação ao longo do processo de implementação, {% data variables.product.prodname_professional_services %} poderá fazer parceria com você para uma implementação bem-sucedida de {% data variables.product.prodname_GH_advanced_security %}. Oferecemos uma série de opções de orientação e suporte. Nós também temos treinamento e campos de inicialização disponíveis para ajudar a sua empresa a otimizar o valor de {% data variables.product.prodname_GH_advanced_security %}.

Fale com o seu representante de vendas para obter mais informações sobre todas as opções de Serviços Profissionais disponíveis. Para mais informações, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

{% note %}

Para o primeiro artigo dessa série, consulte "[Fase 1: Alinhe sua estratégia e metas de implementação](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals). "

{% endnote %}
