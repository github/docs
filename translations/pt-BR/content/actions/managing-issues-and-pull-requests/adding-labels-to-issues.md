---
title: Adicionando etiquetas a problemas
shortTitle: Add labels to issues
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
ms.openlocfilehash: a3523069b9422ecd8107007ca5e00fb0071dd738
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185558'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a [ação `actions/github-script`](https://github.com/marketplace/actions/github-script) em um fluxo de trabalho para rotular os problemas recém-abertos ou reabertos. Por exemplo, você pode adicionar o rótulo `triage` sempre que um problema é aberto ou reaberto. Em seguida, veja todos os problemas que precisam ser triagem filtrando os problemas com o rótulo `triage`.

A ação `actions/github-script` permite que você use facilmente a API do {% data variables.product.prodname_dotcom %} em um fluxo de trabalho.

No tutorial, primeiro, você criará um arquivo de fluxo de trabalho que usa a [ação `actions/github-script`](https://github.com/marketplace/actions/github-script). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.
  
    ```yaml{:copy}
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
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                github.rest.issues.addLabels({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  labels: ["triage"]
                })
    ```

4. Personalize o parâmetro `script` no seu arquivo do fluxo de trabalho:
   - Os valores `issue_number`, `owner` e `repo` são definidos automaticamente com o objeto `context`. Não é necessário alterar esses padrões.
   - Altere o valor de `labels` para a lista de rótulos que deseja adicionar ao problema. Separe etiquetas múltiplas com vírgulas. Por exemplo, `["help wanted", "good first issue"]`. Para obter mais informações sobre rótulos, confira "[Como gerenciar rótulos](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
5. {% data reusables.actions.commit-workflow %}

## Testar o fluxo de trabalho

Toda vez que um problema no seu repositório for aberto ou reaberto, esse fluxo de trabalho adicionará as etiquetas que você especificou ao problema.

Teste o seu fluxo de trabalho criando um problema no seu repositório.

1. Crie um problema no seu repositório. Para obter mais informações, confira "[Como criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Para ver a execução do fluxo de trabalho que foi acionada criando o problema, veja o histórico de execuções do seu fluxo de trabalho. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
3. Quando o fluxo de trabalho é concluído, o problema que você criou deve ter as etiquetas especificadas adicionadas.

## Próximas etapas

- Para saber sobre mais coisas que podem ser feitas com a ação `actions/github-script`, confira a [documentação da ação `actions/github-script`](https://github.com/marketplace/actions/github-script).
- Para saber mais sobre diferentes eventos que podem disparar seu fluxo de trabalho, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#issues)".
- [Pesquise o GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) para ver exemplos de fluxos de trabalho que usam essa ação.
