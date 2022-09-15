---
title: Fechar problemas inativos
intro: 'Você pode usar {% data variables.product.prodname_actions %} para comentar ou fechar problemas que ficaram inativos por um determinado período de tempo.'
redirect_from:
  - /actions/guides/closing-inactive-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 7d0cab4c1ef7ac5fda67a0487b50817adfb5dfd8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147063607'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a [ação `actions/stale`](https://github.com/marketplace/actions/close-stale-issues) para adicionar um comentário aos problemas inativos por determinado período e fechá-los. Por exemplo, você pode comentar se um problema está inativo por 30 dias para incentivar os participantes a agir. Em seguida, se nenhuma atividade adicional ocorrer após 14 dias, você poderá fechar o problema.

No tutorial, primeiro, você criará um arquivo de fluxo de trabalho que usa a [ação `actions/stale`](https://github.com/marketplace/actions/close-stale-issues). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Altere o valor de `on.schedule` para determinar quando deseja executar esse fluxo de trabalho. No exemplo acima, o fluxo de trabalho será executado todos os dias à 1:30 UTC. Para obter mais informações sobre os fluxos de trabalho agendados, confira "[Eventos agendados](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Altere o valor de `days-before-issue-stale` para o número de dias sem atividade antes que a ação `actions/stale` rotule um problema. Se você nunca quiser que essa ação rotule problemas, defina esse valor como `-1`.
   - Altere o valor de `days-before-issue-close` para o número de dias sem atividade antes que a ação `actions/stale` feche um problema. Se você nunca quiser que essa ação feche problemas, defina esse valor como `-1`.
   - Altere o valor de `stale-issue-label` para o rótulo que deseja aplicar aos problemas inativos durante o tempo especificado por `days-before-issue-stale`.
   - Altere o valor de `stale-issue-message` para o comentário que deseja adicionar aos problemas rotulados pela ação `actions/stale`.
   - Altere o valor de `close-issue-message` para o comentário que deseja adicionar aos problemas fechados pela ação `actions/stale`.
5. {% data reusables.actions.commit-workflow %}

## Resultados esperados

Com base no parâmetro `schedule` (por exemplo, todos os dias à 1h30 UTC), o fluxo de trabalho encontrará os problemas inativos durante o período de tempo especificado e adicionará o comentário e o rótulo especificados. Além disso, o seu fluxo de trabalho fechará quaisquer problemas etiquetados anteriormente se nenhuma atividade adicional tiver ocorrido pelo período de tempo especificado.

{% data reusables.actions.schedule-delay %}

Você pode visualizar o histórico de execução do fluxo de trabalho para ver a execução deste fluxo de trabalho periodicamente. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Este fluxo de trabalho só irá etiquetar e/ou fechar 30 problemas de cada vez para evitar exceder um limite de taxa. Você pode definir isso com a configuração `operations-per-run`. Para obter mais informações, confira a [documentação da ação `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).

## Próximas etapas

- Para descobrir outras coisas que você pode fazer com a ação `actions/stale`, como fechar solicitações de pull inativas, ignorar problemas com determinados rótulos ou marcos ou verificar apenas problemas com determinados rótulos, confira a [documentação da ação `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).
- [Pesquise o GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) para ver exemplos de fluxos de trabalho que usam essa ação.
