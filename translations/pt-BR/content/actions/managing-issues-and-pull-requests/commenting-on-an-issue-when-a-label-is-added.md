---
title: Comentar em um problema quando uma etiqueta é adicionada
intro: 'Você pode usar {% data variables.product.prodname_actions %} para comentar automaticamente nos problema quando uma etiqueta específica é aplicada.'
redirect_from:
  - /actions/guides/commenting-on-an-issue-when-a-label-is-added
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
shortTitle: Add label to comment on issue
ms.openlocfilehash: 02484ffce5af753f06ac0523ef8e6ab853f47454
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409033'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este tutorial demonstra como usar a [ ação`peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment) para adicionar um comentário a um problema quando um rótulo específico é aplicado. Por exemplo, quando o rótulo `help-wanted` é adicionado a um problema, você pode adicionar um comentário para incentivar os colaboradores a trabalhar no problema.

No tutorial, primeiro, você criará um arquivo de fluxo de trabalho que usa a [ação `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment). Então, você personalizará o fluxo de trabalho para atender às suas necessidades.

## Criar o fluxo de trabalho

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copie o seguinte conteúdo YAML para o arquivo do fluxo de trabalho.

    ```yaml{:copy}
{% indented_data_reference reusables.actions.actions-not-certified-by-github-comment spaces=4 %}

{% indented_data_reference reusables.actions.actions-use-sha-pinning-comment spaces=4 %}

    name: Add comment
    on:
      issues:
        types:
          - labeled
    jobs:
      add-comment:
        if: github.event.label.name == 'help-wanted'
        runs-on: ubuntu-latest
        permissions:
          issues: write
        steps:
          - name: Add comment
            uses: peter-evans/create-or-update-comment@a35cf36e5301d70b76f316e867e7788a55a31dae
            with:
              issue-number: {% raw %}${{ github.event.issue.number }}{% endraw %}
              body: |
                This issue is available for anyone to work on. **Make sure to reference this issue in your pull request.** :sparkles: Thank you for your contribution! :sparkles:
    ```

4. Personalize os parâmetros no seu arquivo do fluxo de trabalho:
   - Substitua `help-wanted` em `if: github.event.label.name == 'help-wanted'` pelo rótulo no qual deseja trabalhar. Caso deseje trabalhar em mais de um rótulo, separe as condições com `||`. Por exemplo, `if: github.event.label.name == 'bug' || github.event.label.name == 'fix me'` adicionará um comentário sempre que os rótulos `bug` ou `fix me` forem adicionados a um problema.
   - Altere o valor de `body` para o comentário que deseja adicionar. Markdown em estilo GitHub é compatível. Para obter mais informações sobre o markdown, confira "[Sintaxe básica de escrita e formatação](/github/writing-on-github/basic-writing-and-formatting-syntax)".
5. {% data reusables.actions.commit-workflow %}

## Testar o fluxo de trabalho

Toda vez que um problema no repositório for identificado, esse fluxo de trabalho será executado. Se o rótulo adicionado for um dos rótulos especificados no arquivo de fluxo de trabalho, a ação `peter-evans/create-or-update-comment` adicionará o comentário especificado ao problema.

Teste seu fluxo de trabalho aplicando a sua etiqueta especificada a um problema.

1. Abra um problema no seu repositório. Para obter mais informações, confira "[Como criar um problema](/github/managing-your-work-on-github/creating-an-issue)".
2. Etiquete o problema com a etiqueta especificada no seu arquivo de fluxo de trabalho. Para obter mais informações, confira "[Como gerenciar rótulos](/github/managing-your-work-on-github/managing-labels#applying-labels-to-issues-and-pull-requests)".
3. Para ver a execução do fluxo de trabalho acionada etiquetando o problema, veja o histórico de execuções do seu fluxo de trabalho. Para obter mais informações, confira "[Como ver o histórico de execução do fluxo de trabalho](/actions/managing-workflow-runs/viewing-workflow-run-history)".
4. Quando o fluxo de trabalho é concluído, o problema que você etiquetou deve ter um comentário adicionado.

## Próximas etapas

- Para saber mais sobre outras coisas que você pode fazer com a ação `peter-evans/create-or-update-comment`, como adicionar reações, acesse a [documentação da ação `peter-evans/create-or-update-comment`](https://github.com/marketplace/actions/create-or-update-comment).
