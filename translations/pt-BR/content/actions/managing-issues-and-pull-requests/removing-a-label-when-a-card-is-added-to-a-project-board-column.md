---
title: Remover uma etiqueta quando um cartão é adicionado à coluna de um quadro de projeto
intro: 'É possível usar o {% data variables.product.prodname_actions %} para remover automaticamente um rótulo quando um problema ou uma solicitação de pull é adicionada a uma coluna específica em um {% data variables.projects.projects_v1_board %}.'
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
ms.openlocfilehash: d86d9e5ad198c9cf8811b47f2a6c8a7114e20104
ms.sourcegitcommit: 4d6d3735d32540cb6de3b95ea9a75b8b247c580d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148185626'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a [ação `actions/github-script`](https://github.com/marketplace/actions/github-script) com uma condicional para remover um rótulo de problemas e solicitações de pull adicionados a uma coluna específica em um {% data variables.projects.projects_v1_board %}. Por exemplo, você pode remover o rótulo `needs review` quando os cartões de projeto são movidos para a coluna `Done`.

No tutorial, primeiro, você criará um arquivo de fluxo de trabalho que usa a [ação `actions/github-script`](https://github.com/marketplace/actions/github-script). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. Escolha um {% data variables.projects.projects_v1_board %} que pertença ao repositório. Este fluxo de trabalho não pode ser usado com projetos que pertencem a usuários ou organizações. É possível usar um {% data variables.projects.projects_v1_board %} existente ou criar um {% data variables.projects.projects_v1_board %}. Para saber como criar um projeto, confira "[Criar um {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/creating-a-project-board)".
3. {% data reusables.actions.make-workflow-file %}
4. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    ```yaml{:copy}
    name: Remove a label
    on:
      project_card:
        types:
          - moved
    jobs:
      remove_label:
        if: github.event.project_card.column_id == '12345678'
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-github-script %}
            with:
              script: |
                // this gets the number at the end of the content URL, which should be the issue/PR number
                const issue_num = context.payload.project_card.content_url.split('/').pop()
                github.rest.issues.removeLabel({
                  issue_number: issue_num,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  name: ["needs review"]
                })
    ```

5. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Em `github.event.project_card.column_id == '12345678'`, substitua `12345678` pela ID da coluna em que deseja remover o rótulo de solicitações de pull e problemas que são movidos para ela.

     Para encontrar a ID da coluna, acesse o {% data variables.projects.projects_v1_board %}. Ao lado do título da coluna, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e clique em **Copiar link da coluna**. O ID da coluna é o número no final do link copiado. Por exemplo, `24687531` é a ID da coluna para `https://github.com/octocat/octo-repo/projects/1#column-24687531`.

     Caso deseje modificar mais de uma coluna, separe as condições com `||`. Por exemplo, `if github.event.project_card.column_id == '12345678' || github.event.project_card.column_id == '87654321'` funcionará sempre que um cartão de projeto for adicionado à coluna `12345678` ou à coluna `87654321`. As colunas podem estar em diferentes quadros de projetos.
   - Altere o valor de `name` na função `github.rest.issues.removeLabel()` para o nome do rótulo que você deseja remover dos problemas ou das solicitações de pull movidas para as colunas especificadas. Para obter mais informações sobre rótulos, confira "[Como gerenciar rótulos](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
6. {% data reusables.actions.commit-workflow %}

## Testar o fluxo de trabalho

Sempre que um cartão de projeto em um {% data variables.projects.projects_v1_board %} no repositório é movido, este fluxo de trabalho é executado. Se o cartão for um problema ou uma solicitação de pull e for movido para a coluna especificada, o fluxo de trabalho removerá o rótulo especificado do problema ou da solicitação de pull. Os cartões que são observações que não serão afetadas.

Teste o fluxo de trabalho movendo um problema no {% data variables.projects.projects_v1_board %} para a coluna de destino.

1. Abra um problema no seu repositório. Para obter mais informações, confira "[Como criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Dê ao problema o rótulo que você deseja que o fluxo de trabalho remova. Para obter mais informações, confira "[Como gerenciar rótulos](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Adicione o problema à coluna do {% data variables.projects.projects_v1_board %} especificada no arquivo do fluxo de trabalho. Para obter mais informações, confira "[Adicionar problemas e solicitações de pull a um {% data variables.product.prodname_project_v1 %}](/github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board)".
4. Para ver a execução do fluxo de trabalho que foi acionada adicionando o problema ao projeto, visualize o histórico da execução do seu fluxo de trabalho. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
5. Quando o fluxo de trabalho for concluído, o problema adicionado à coluna do projeto deverá ter o rótulo especificado removido.

## Próximas etapas

- Para saber sobre mais coisas que podem ser feitas com a ação `actions/github-script`, confira a [documentação da ação `actions/github-script`](https://github.com/marketplace/actions/github-script).
- [Pesquise o GitHub](https://github.com/search?q=%22uses:+actions/github-script%22&type=code) para ver exemplos de fluxos de trabalho que usam essa ação.
