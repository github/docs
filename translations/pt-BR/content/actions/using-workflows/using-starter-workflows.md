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
ms.openlocfilehash: 7159ce204b89287f86846cf79001657682f6d18d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146179836'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre fluxos de trabalho iniciais

{% data variables.product.product_name %} oferece fluxos de trabalho iniciantes para uma série de linguagens e ferramentas. Ao configurar os fluxos de trabalho no repositório, {% data variables.product.product_name %} analisa o código no seu repositório e recomenda fluxos de trabalho baseados na linguagem e na estrutura do seu repositório. Por exemplo, se você usa o [Node.js](https://nodejs.org/en/), o {% data variables.product.product_name %} vai sugerir um arquivo de fluxo de trabalho inicial que instale os pacotes do Node.js e execute os testes.{% ifversion actions-starter-template-ui %} Você pode usar a pesquisa e o filtro para encontrar fluxos de trabalho iniciais relevantes.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

Você também pode criar seu próprio fluxo de trabalho inicial para compartilhar com sua organização. Estes fluxos de trabalho iniciais aparecerão junto com os fluxos de trabalho iniciais fornecidos por {% data variables.product.product_name %}. Para obter mais informações, confira "[Como criar fluxos de trabalho iniciais para sua organização](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

## Usando fluxos de trabalho iniciais

Qualquer pessoa com a permissão de gravação em um repositório pode configurar fluxos de trabalho iniciais de {% data variables.product.prodname_actions %} para CI/CD ou outra automatização.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Se você já tiver um fluxo de trabalho no repositório, clique em **Novo fluxo de trabalho**.
1. A página "{% ifversion actions-starter-template-ui %}Escolher um fluxo de trabalho{% else %}Escolher um modelo de fluxo de trabalho{% endif %}" mostra uma seleção de fluxos de trabalho iniciais recomendados. Encontre o fluxo de trabalho inicial que deseja usar e clique em {% ifversion actions-starter-template-ui %}**Configurar**{% else %}**Configurar este fluxo de trabalho**{% endif %}.{% ifversion actions-starter-template-ui %} Como ajuda para encontrar o fluxo de trabalho inicial desejado, procure palavras-chave ou filtre o conteúdo por categoria.{% endif %}

   {% ifversion actions-starter-template-ui %}![Configurar esse fluxo de trabalho](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![Configurar este fluxo de trabalho](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. Se o fluxo de trabalho inicial contiver comentários que detalham as etapas de instalação adicionais, siga estas etapas. Muitos dos fluxos de trabalho iniciais têm guias correspondentes. Para saber mais, confira [os guias do {% data variables.product.prodname_actions %}](/actions/guides).
1. Alguns fluxos de trabalho iniciais usam segredos. Por exemplo, {% raw %}`${{ secrets.npm_token }}`{% endraw %}. Se o fluxo de trabalho inicial usar um segredo, armazene o valor descrito no nome do segredo como um segredo no repositório. Para obter mais informações, confira "[Segredos criptografados](/actions/reference/encrypted-secrets)".
1. Opcionalmente, faça as alterações adicionais. Por exemplo, o ideal é alterar o valor de `on` para alterar o período em que o fluxo de trabalho será executado.
1. Clique em **Iniciar commit**.
1. Escreva uma mensagem de commit e decida se você deseja de fazer o commit diretamente para o branch padrão ou abrir um pull request.

## Leitura adicional

- "[Sobre a integração contínua](/articles/about-continuous-integration)"
- "[Como gerenciar execuções de fluxos de trabalho](/actions/managing-workflow-runs)"
- "[Sobre o monitoramento e a solução de problemas](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)"
- "[Saiba como usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" {% ifversion fpt or ghec %}
- "[Como gerenciar a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)" {% endif %}
