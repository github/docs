---
title: Agendar a criação de problemas
intro: 'Você pode usar {% data variables.product.prodname_actions %} para criar um problema regularmente para coisas como reuniões diárias ou revisões trimestrais.'
redirect_from:
  - /actions/guides/scheduling-issue-creation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 6a68e7cab1c20a7f89bdef438d299c5bda32315c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410054'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a [ação `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action) para criar um problema regularmente. Por exemplo, você pode criar um problema toda semana para usar como agenda para uma reunião de equipe.

No tutorial, primeiro, você criará um arquivo de fluxo de trabalho que usa a [ação `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}
    
    name: Weekly Team Sync
    on:
      schedule:
        - cron: 20 07 * * 1

    jobs:
      create_issue:
        name: Create team sync issue
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Create team sync issue
            uses: imjohnbo/issue-bot@3daae12aa54d38685d7ff8459fc8a2aee8cea98b
            with:
              assignees: "monalisa, doctocat, hubot"
              labels: "weekly sync, docs-team"
              title: "Team sync"
              body: |
                ### Agenda

                - [ ] Start the recording
                - [ ] Check-ins
                - [ ] Discussion points
                - [ ] Post the recording
                        
                ### Discussion Points
                Add things to discuss below

                - [Work this week](https://github.com/orgs/github/projects/3)
              pinned: false
              close-previous: false
            env:
              GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Altere o valor de `on.schedule` para determinar quando deseja executar esse fluxo de trabalho. No exemplo acima, o fluxo de trabalho será executado todas as segundas às 7h20 UTC. Para obter mais informações sobre os fluxos de trabalho agendados, confira "[Eventos agendados](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Altere o valor de `assignees` para a lista de nomes de usuário do {% data variables.product.prodname_dotcom %} que você deseja atribuir ao problema.
   - Altere o valor de `labels` para a lista de rótulos que você deseja aplicar ao problema.
   - Altere o valor de `title` para o título que você deseja que o problema tenha.
   - Altere o valor de `body` para o texto desejado no corpo do problema. O caractere `|` permite que você use um valor de várias linhas para esse parâmetro.
   - Caso deseje fixar esse problema no seu repositório, defina `pinned` como `true`. Para obter mais informações sobre os problemas fixos, confira "[Como fixar um problema no seu repositório](/articles/pinning-an-issue-to-your-repository)".
   - Caso deseje fechar o problema anterior gerado por esse fluxo de trabalho sempre que um problema é criado, defina `close-previous` como `true`. O fluxo de trabalho fechará o problema mais recente que tem os rótulos definidos no campo `labels`. Para evitar o fechamento do problema errado, use uma etiqueta exclusiva ou uma combinação de etiquetas.
5. {% data reusables.actions.commit-workflow %}

## Resultados esperados

Com base no parâmetro `schedule` (por exemplo, todas as segundas-feiras às 7h20 UTC), o fluxo de trabalho criará um problema com os destinatários, os rótulos, o título e o corpo especificados. Se você definir `pinned` como `true`, o fluxo de trabalho fixará o problema no seu repositório. Se você definir `close-previous` como true, o fluxo de trabalho fechará o problema mais recente com os rótulos correspondentes.

{% data reusables.actions.schedule-delay %}

Você pode visualizar o histórico de execução do fluxo de trabalho para ver a execução deste fluxo de trabalho periodicamente. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

## Próximas etapas

- Para saber mais sobre outras coisas que você pode fazer com a ação `imjohnbo/issue-bot`, como girar destinatários ou usar um modelo de problema, confira a [documentação da ação `imjohnbo/issue-bot`](https://github.com/marketplace/actions/issue-bot-action).
- [Pesquise o GitHub](https://github.com/search?q=%22uses%3A+imjohnbo%2Fissue-bot%22&type=code) para ver exemplos de fluxos de trabalho que usam essa ação.
