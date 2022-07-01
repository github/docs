---
title: Usando fluxos de trabalho iniciais
intro: '{% data variables.product.product_name %} fornece fluxos de trabalho iniciais para uma série de linguagens e ferramentas.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre fluxos de trabalho iniciais

{% data variables.product.product_name %} oferece fluxos de trabalho iniciantes para uma série de linguagens e ferramentas. Ao configurar os fluxos de trabalho no repositório, {% data variables.product.product_name %} analisa o código no seu repositório e recomenda fluxos de trabalho baseados na linguagem e na estrutura do seu repositório. Por exemplo, se você usar [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} irá sugerir um arquivo de fluxo de trabalho inicial que instala pacotes do seu Node.js e executa os seus testes.{% ifversion actions-starter-template-ui %} Você pode pesquisar e filtrar para encontrar fluxos de trabalho iniciantes relevantes.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

Você também pode criar seu próprio fluxo de trabalho inicial para compartilhar com sua organização. Estes fluxos de trabalho iniciais aparecerão junto com os fluxos de trabalho iniciais fornecidos por {% data variables.product.product_name %}. Para obter mais informações, consulte "[Criando fluxos de trabalho iniciais para a sua organização](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Usando fluxos de trabalho iniciais

Qualquer pessoa com a permissão de gravação em um repositório pode configurar fluxos de trabalho iniciais de {% data variables.product.prodname_actions %} para CI/CD ou outra automatização.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. Se você já tem um fluxo de trabalho no seu repositório, clique em **Novo fluxo de trabalho**.
1. A página "{% ifversion actions-starter-template-ui %}Escolher um fluxo de trabalho{% else %}Escolher o modelo de um fluxo de trabalho{% endif %} mostra uma seleção de fluxos de trabalhos iniciais recomendados. Localizar o fluxo de trabalho inicial que você deseja usar, em seguida, clique em {% ifversion actions-starter-template-ui %}**Configurar**{% else %}**Configurar este fluxo de trabalho**{% endif %}.{% ifversion actions-starter-template-ui %} Para ajudar você a encontrar o fluxo de trabalho inicial que deseja, você procurar por palavras-chave ou filtrar por categoria.{% endif %}

   {% ifversion actions-starter-template-ui %}![Configure this workflow](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![Set up this workflow](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. Se o fluxo de trabalho inicial contiver comentários que detalham as etapas de instalação adicionais, siga estas etapas. Muitos dos fluxos de trabalho iniciais têm guias correspondentes. Para obter mais informações, consulte os [ guias de {% data variables.product.prodname_actions %}](/actions/guides).
1. Alguns fluxos de trabalho iniciais usam segredos. Por exemplo, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Se o fluxo de trabalho inicial usar um segredo, armazene o valor descrito no nome do segredo como um segredo no repositório. Para obter mais informações, consulte "[Segredos criptografados](/actions/reference/encrypted-secrets)".
1. Opcionalmente, faça as alterações adicionais. Por exemplo, talvez você queira alterar o valor de `on` para mudar quando o fluxo de trabalho é executado.
1. Clique em **Start commit** (Iniciar commit).
1. Escreva uma mensagem de commit e decida se você deseja de fazer o commit diretamente para o branch padrão ou abrir um pull request.

## Leia mais

- [Sobre integração contínua](/articles/about-continuous-integration)
- "[Gerenciando execuções de fluxo de trabalho](/actions/managing-workflow-runs)"
- "[Sobre o monitoramento e solução de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
{% ifversion fpt or ghec %}
- "[Gerenciando cobrança para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"
{% endif %}
