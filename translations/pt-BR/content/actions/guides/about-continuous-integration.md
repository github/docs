---
title: Sobre integração contínua
intro: 'Você pode criar fluxos de trabalho personalizados de integração contínua (CI) e implantação contínua (CD) diretamente no seu repositório de {% data variables.product.prodname_dotcom %} com as {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: overview
topics:
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre integração contínua

A integração contínua (CI, Continuous Integration) é uma prática de software que exige commits frequentes de códigos para um repositório compartilhado. Fazer commits de códigos com frequência detecta erros com mais antecedência e reduz a quantidade de código necessária para depuração quando os desenvolvedores chegam à origem de um erro. As atualizações frequentes de código também facilitam o merge de alterações dos integrantes de uma equipe de desenvolvimento de software. Assim, os desenvolvedores podem se dedicar mais à gravação de códigos e se preocupar menos com erros de depuração ou conflitos de merge.

Ao fazer commit do seu repositório, você pode continuamente compilar e testar o código para garantir que o commit não insira erros. Seus testes podem incluir linters de código (que verificam formatação de estilo), verificações de segurança, cobertura de código, testes funcionais e outras verificações personalizadas.

Para compilar e testar seu código, é necessário usar um servidor. Você pode criar e testar atualizações no local antes de fazer push do código para um repositório, ou pode usar um servidor de CI que verifica os novos commits de código em um repositório.

### Sobre integração contínua usando {% data variables.product.prodname_actions %}

A CI que usa {% data variables.product.prodname_actions %} oferece fluxos de trabalho que podem criar o código no seu repositório e executar os seus testes. Fluxos de trabalho podem ser executados em máquinas virtuais hospedadas em {% data variables.product.prodname_dotcom %} ou em máquinas que você mesmo hospeda. Para obter mais informações, consulte "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)" e "[Sobre executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

Você pode configurar seu fluxo de trabalho de CI para ser executado quando ocorre um evento de {% data variables.product.product_name %} (por exemplo, quando um novo código é enviado para o repositório), em uma programação definida, ou quando um evento externo ocorre usando o webhook de envio do repositório.

{% data variables.product.product_name %} executa seus testes de CI e fornece os resultados de cada teste no pull request para que você possa ver se a mudança no seu branch introduz um erro. Quando todos os testes de CI em um fluxo de trabalho forem aprovados, as alterações que passaram por push estarão prontas para a revisão de um integrante da equipe ou para o merge. Se algum teste falhar, uma de suas alterações pode ter causado a falha.

Ao configurar o CI no seu repositório, {% data variables.product.product_name %} analisa o código no seu repositório e recomenda fluxos de trabalho CI baseados no idioma e na estrutura do seu repositório. Por exemplo, se você usar o [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} irá sugerir um arquivo de modelo que instala seus pacotes Node.js e executa seus testes. Você pode usar o modelo do fluxo de trabalho de CI sugerido por {% data variables.product.product_name %}, personalizar o modelo sugerido ou criar o seu próprio arquivo de fluxo de trabalho personalizado para executar seus testes de CI.

![Captura de tela dos modelos sugeridos de integração contínua](/assets/images/help/repository/ci-with-actions-template-picker.png)

Além de ajudá-lo a configurar fluxos de trabalho de CI para seu projeto, você pode usar {% data variables.product.prodname_actions %} para criar fluxos de trabalho ao longo de todo o ciclo de vida de desenvolvimento do software. Por exemplo, você pode usar ações para implantar, criar pacotes ou lançar uma versão do seu projeto. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_actions %}](/articles/about-github-actions)".

Para obter uma definição de termos comuns, consulte "[Conceitos básicos de {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)".

### Linguagens compatíveis

{% data variables.product.product_name %} oferece modelos de fluxo de trabalho de CI para uma variedade de linguagens e estruturas.

Pesquise a lista completa dos modelos de fluxo de trabalho de CI oferecidos por {% data variables.product.product_name %} no repositório {% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) {% else %} e no repositório `actions/starter-workflows` em {% data variables.product.product_location %}{% endif %}.

### Notificações para execução de fluxo de trabalho

{% data reusables.repositories.workflow-notifications %}

### Selos de status para execução de fluxo de trabalho

{% data reusables.repositories.actions-workflow-status-badge-into %}

Para obter mais informações, consulte "[Configurar fluxo de trabalho](/articles/configuring-a-workflow)."

### Leia mais

- "[Configurar a integração contínua usando {% data variables.product.prodname_actions %}](/articles/setting-up-continuous-integration-using-github-actions)"
{% if currentVersion == "free-pro-team@latest" %}
- "[Gerenciar a cobrança para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
