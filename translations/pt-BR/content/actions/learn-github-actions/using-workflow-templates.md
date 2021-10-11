---
title: Usando modelos de fluxo de trabalho
shortTitle: Usando modelos
intro: '{% data variables.product.product_name %} fornece modelos de fluxo de trabalho para uma série de linguagens e ferramentas.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os modelos do fluxo de trabalho

{% data variables.product.product_name %} oferece modelos de fluxo de trabalho para uma série e linguagens e ferramentas. Ao configurar os fluxos de trabalho no repositório, {% data variables.product.product_name %} analisa o código no seu repositório e recomenda fluxos de trabalho baseados na linguagem e na estrutura do seu repositório. Por exemplo, se você usar o [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} irá sugerir um arquivo de modelo que instala seus pacotes Node.js e executa seus testes.

Você também pode criar seus próprios modelos de fluxo de trabalho para compartilhar com sua organização. Para obter mais informações, consulte "[Criando modelos de fluxo de trabalho](/actions/learn-github-actions/creating-workflow-templates)".

## Usando modelos de fluxo de trabalho

Qualquer pessoa com a permissão de gravação em um repositório pode configurar fluxos de trabalho {% data variables.product.prodname_actions %} para CI/CD ou outra automatização.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Se você já tem um fluxo de trabalho no seu repositório, clique em **Novo fluxo de trabalho**.
1. Encontre o modelo que deseja usar e, em seguida, clique em **Configurar este fluxo de trabalho**.
1. Se o modelo do fluxo de trabalho contiver comentários que detalham as etapas de instalação adicionais, siga estas etapas.
1. Alguns modelos de fluxo de trabalho usam segredos. Por exemplo, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Se o modelo do fluxo de trabalho usar um segredo, armazene o valor descrito no nome do segredo como um segredo no seu repositório. Para obter mais informações, consulte "[Segredos criptografados](/actions/reference/encrypted-secrets)".
1. Opcionalmente, faça as alterações adicionais. Por exemplo, talvez você queira alterar o valor de `on` para mudar quando o fluxo de trabalho é executado.
1. Clique em **Start commit** (Iniciar commit).
1. Escreva uma mensagem de commit e decida se você deseja de fazer o commit diretamente para o branch padrão ou abrir um pull request.

## Leia mais

- [Sobre integração contínua](/articles/about-continuous-integration)
- "[Gerenciando execuções de fluxo de trabalho](/actions/managing-workflow-runs)"
- "[Sobre o monitoramento e solução de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
{% ifversion fpt %}
- "[Gerenciando cobrança para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"
{% endif %}
