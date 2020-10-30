---
title: Sobre ações do GitHub
intro: 'O {% data variables.product.prodname_actions %} permite que você crie fluxos de trabalho personalizados de ciclo de vida de desenvolvimento de software (SDLC, Software Development Life Cycle) diretamente no seu repositório do {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax/
  - /articles/about-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre o {% data variables.product.prodname_actions %}

Fluxos de trabalho do {% data reusables.repositories.about-github-actions %} são processos automatizados personalizados que você pode configurar no repositório para criar, testar, fazer pacotes, gerar versões ou implantar qualquer projeto de código no {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.actions-ci-cd %}{% data variables.product.prodname_actions %} aciona o serviço de integração contínua integrado de {% data variables.product.prodname_dotcom %} Para obter mais informações, consulte "[Sobre integração contínua](/articles/about-continuous-integration)".

Os fluxos de trabalho são executados no Linux, macOS, Windows e contêineres em máquinas hospedadas em {% data variables.product.prodname_dotcom %}, denominadas "executoras". Como alternativa, você também pode hospedar seus próprios executores para executar ou gerenciar fluxos de trabalho em máquinas que você possui. Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

Você pode criar fluxos de trabalho usando ações definidas no seu repositório, ações de código aberto em repositórios públicos no {% data variables.product.prodname_dotcom %} ou imagens de contêiner Docker publicadas. Os fluxos de trabalho em repositórios bifurcados não são executados por padrão.

É possível descobrir ações a serem usadas no seu fluxo de trabalho no {% data variables.product.prodname_dotcom %} e compilar ações para compartilhar com a comunidade do {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre como criar uma ação personalizada, consulte "[Criando ações"](/actions/creating-actions)".

Você pode criar um arquivo de fluxo de trabalho configurado para execução em eventos específicos. Para obter mais informações, consulte "[Configurar fluxo de trabalho](/articles/configuring-a-workflow)" e "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)".

Para obter uma definição dos termos comuns, consulte "[Conceitos principais para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)".

### Descobrir ações na comunidade do {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_marketplace %} é um local central para você encontrar, compartilhar e usar ações criadas pela comunidade {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Usando ações de {% data variables.product.prodname_marketplace %} no seu fluxo de trabalho](/actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow)".

Você também pode personalizar o seu projeto com ações de código aberto compartilhadas nos repositórios públicos em {% data variables.product.prodname_dotcom %} e usar ações criadas por {% data variables.product.prodname_dotcom %} na organização [ações](https://github.com/actions).

### Desativar ou limitar {% data variables.product.prodname_actions %} para o seu repositório ou organização

{% data reusables.github-actions.disabling-github-actions %}

Para obter mais informações, consulte "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para um repositório](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)" ou "[Desabilitar ou limitar {% data variables.product.prodname_actions %} para sua organização](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)".

### Notificações para execução de fluxo de trabalho

{% data reusables.repositories.workflow-notifications %}

### Limites de uso

{% data reusables.github-actions.github-actions-usage-limits %}

{% if currentVersion == "free-pro-team@latest" %}

### Política de uso

Além dos limites de uso, você deve garantir que você usa {% data variables.product.prodname_actions %} nos [Termos de serviço](/articles/github-terms-of-service/) do GitHub. Para obter mais informações sobre termos específicos de {% data variables.product.prodname_actions %}, consulte os [Termos adicionais do produto do GitHub](/github/site-policy/github-additional-product-terms#a-actions-usage).

### Sobre a cobrança do {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".

### Entrar em contato com o suporte

{% data reusables.github-actions.contacting-support %}

{% endif %}

### Leia mais

- [Gerenciar a execução de fluxos de trabalho](/articles/managing-a-workflow-run)
- [Eventos que acionam fluxos de trabalho](/articles/events-that-trigger-workflows)
- "[Ambientes virtuais para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
"[Gerenciar cobrança do {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
