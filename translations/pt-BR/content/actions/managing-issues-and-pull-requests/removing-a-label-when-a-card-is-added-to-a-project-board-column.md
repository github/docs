---
title: Remover uma etiqueta quando um cartão é adicionado à coluna de um quadro de projeto
intro: 'Você pode usar {% data variables.product.prodname_actions %} para remover automaticamente uma etiqueta quando um problema ou pull request for adicionado a uma coluna específica no quadro de um projeto.'
redirect_from:
  - /actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Remove label when adding card
ms.openlocfilehash: c23edb495719c7059c9c5d8dab1c29acb0e78cb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410104'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a [ação `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler) com um condicional para remover um rótulo de solicitações de pull e problemas que são adicionados a uma coluna específica em um quadro de projetos. Por exemplo, você pode remover o rótulo `needs review` quando os cartões de projeto são movidos para a coluna `Done`.

No tutorial, primeiro, você criará um arquivo de fluxo de trabalho que usa a [ação `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. Escolha um projeto que pertence ao repositório. Este fluxo de trabalho não pode ser usado com projetos que pertencem a usuários ou organizações. Você pode usar um projeto existente ou criar um novo projeto. Para obter mais informações sobre como criar um projeto, confira "[Como criar um quadro de projetos](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.
    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Remove labels
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_labels:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - name: remove labels
            uses: andymckay/labeler@5c59dabdfd4dd5bd9c6e6d255b01b9d764af4414
            with:
              remove-labels: "needs review"
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

5. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Em `github.event.project_card.column_id == '12345678'`, substitua `12345678` pela ID da coluna em que deseja remover o rótulo de solicitações de pull e problemas que são movidos para ela.

    Para encontrar o ID da coluna, acesse o seu quadro de projetos. Ao lado do título da coluna, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Copiar link da coluna**. O ID da coluna é o número no final do link copiado. Por exemplo, `24687531` é a ID da coluna para `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Caso deseje modificar mais de uma coluna, separe as condições com `||`. Por exemplo, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` funcionará sempre que um cartão de projeto for adicionado à coluna `12345678` ou à coluna `87654321`. As colunas podem estar em diferentes quadros de projetos.
   - Altere o valor de `remove-labels` para a lista de rótulos que deseja remover de problemas ou solicitações de pull que são movidos para as colunas especificadas. Separe etiquetas múltiplas com vírgulas. Por exemplo, `"help wanted, good first issue"`. Para obter mais informações sobre rótulos, confira "[Como gerenciar rótulos](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
6. {% data reusables.actions.commit-workflow %}

## Testar o fluxo de trabalho

Cada vez que um cartão de projeto em um projeto no seu repositório for transferido, este fluxo de trabalho será executado. Se o cartão for um problema ou uma pull request e for movido para a coluna especificada, o fluxo de trabalho removerá os rótulos especificados do problema ou de um pull request. Os cartões que são observações que não serão afetadas.

Teste o seu fluxo de trabalho transferindo um problema no seu projeto para a coluna de destino.

1. Abra um problema no seu repositório. Para obter mais informações, confira "[Como criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiquete o problema com as etiquetas que deseja que o fluxo de trabalho remova. Para obter mais informações, confira "[Como gerenciar rótulos](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Adicione um problema na coluna do projeto que você especificou no arquivo do fluxo de trabalho. Para obter mais informações, confira "[Como adicionar problemas e solicitações de pull a um quadro de projetos](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)".
4. Para ver a execução do fluxo de trabalho que foi acionada adicionando o problema ao projeto, visualize o histórico da execução do seu fluxo de trabalho. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. Quando o fluxo de trabalho é concluído, o problema que você adicionou na coluna do projeto deve ter as etiquetas especificadas removidos.

## Próximas etapas

- Para saber mais sobre outras coisas que você pode fazer com a ação `andymckay/labeler`, como adicionar rótulos ou ignorar essa ação se o problema for atribuído ou tiver um rótulo específico, acesse a [documentação da ação `andymckay/labeler`](https://github.com/marketplace/actions/simple-issue-labeler).
- [Pesquise o GitHub](https://github.com/search?q=%22uses:+andymckay/labeler%22&type=code) para ver exemplos de fluxos de trabalho que usam essa ação.
