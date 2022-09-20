---
title: Adicionar um selo de status de fluxo de trabalho
intro: Você pode exibir um selo de status no seu repositório para indicar o status dos seus fluxos de trabalho.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add a status badge
ms.openlocfilehash: d2b0703e9ca4dcdc0a02cb81144e321a38cffde0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880626'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Observação**: as notificações de fluxo de trabalho em um repositório privado não podem ser acessados ​​externamente, portanto, você não poderá incorporar ou vinculá-los a partir de um site externo.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


Para adicionar uma notificação de status de fluxo de trabalho ao arquivo `README.md`, primeiro localize a URL da notificação de status que você gostaria de exibir. Em seguida, você pode usar o Markdown para exibir a notificação como uma imagem em seu arquivo `README.md`. Para obter mais informações sobre a marcação de imagem no Markdown, confira "[Sintaxe básica de escrita e formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

## Usar o nome do arquivo do fluxo de trabalho

Você pode criar a URL para uma notificação de status de fluxo de trabalho usando o nome do arquivo de fluxo de trabalho:

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

Para exibir a notificação de status do fluxo de trabalho em seu arquivo `README.md`, use a marcação do Markdown para inserir imagens. Para obter mais informações sobre a marcação de imagem no Markdown, confira "[Sintaxe básica de escrita e formatação](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

Por exemplo, adicione o Markdown a seguir ao arquivo `README.md` para adicionar uma notificação de status para um fluxo de trabalho com o caminho do arquivo `.github/workflows/main.yml`. O `OWNER` do repositório é a organização `github`, e o nome do `REPOSITORY` é `docs`.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Como usar o parâmetro `branch`

Para exibir o status de uma execução de fluxo de trabalho para um branch específico, adicione `?branch=<BRANCH_NAME>` ao final da URL da notificação de status.

Por exemplo, adicione o Markdown a seguir ao arquivo `README.md` para adicionar uma notificação de status para uma marcação com o nome `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Como usar o parâmetro `event`

Para exibir o status das execuções de fluxo de trabalho disparadas pelo evento `push`, adicione `?event=push` ao final da URL da notificação de status.

Por exemplo, adicione o seguinte Markdown ao seu arquivo `README.md` para exibir uma notificação com o status das execuções de fluxo de trabalho acionadas pelo evento `push`, que mostrará o status do build para o estado atual desse branch.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
