---
title: Adicionando etiquetas a problemas
intro: 'Você pode usar {% data variables.product.prodname_actions %} para etiquetar problemas automaticamente.'
redirect_from:
  - /actions/guides/adding-labels-to-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 8e80990a1a533ed303f47cbad8dafb95c890893d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884306'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a [ação `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) em um fluxo de trabalho para rotular os problemas recém-abertos ou reabertos. Por exemplo, você pode adicionar o rótulo `triage` sempre que um problema é aberto ou reaberto. Em seguida, veja todos os problemas que precisam ser triagem filtrando os problemas com o rótulo `triage`.

No tutorial, primeiro, você criará um arquivo de fluxo de trabalho que usa a [ação `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Label issues
    on:
      issues:
        types:
          - reopened
          - opened
    jobs:
      label_issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Label issues
            uses: andymckay/labeler@e6c4322d0397f3240f0e7e30a33b5c5df2d39e90
            with:
              add-labels: "triage"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Altere o valor de `add-labels` para a lista de rótulos que deseja adicionar ao problema. Separe etiquetas múltiplas com vírgulas. Por exemplo, `"help wanted, good first issue"`. Para obter mais informações sobre rótulos, confira "[Como gerenciar rótulos](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

## Testar o fluxo de trabalho

Toda vez que um problema no seu repositório for aberto ou reaberto, esse fluxo de trabalho adicionará as etiquetas que você especificou ao problema.

Teste o seu fluxo de trabalho criando um problema no seu repositório.

1. Crie um problema no seu repositório. Para obter mais informações, confira "[Como criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Para ver a execução do fluxo de trabalho que foi acionada criando o problema, veja o histórico de execuções do seu fluxo de trabalho. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. Quando o fluxo de trabalho é concluído, o problema que você criou deve ter as etiquetas especificadas adicionadas.

## Próximas etapas

- Para saber mais sobre outras coisas que você pode fazer com a ação `andymckay/labeler`, como remover rótulos ou ignorar essa ação se o problema for atribuído ou tiver um rótulo específico, confira a [documentação da ação `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- Para saber mais sobre diferentes eventos que podem disparar seu fluxo de trabalho, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#issues)". A ação `andymckay/labeler` só funciona em eventos `issues`, `pull_request` ou `project_card`.
- [Pesquise o GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) para ver exemplos de fluxos de trabalho que usam essa ação.
