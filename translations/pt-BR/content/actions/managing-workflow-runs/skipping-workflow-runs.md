---
title: Ignorar execuções de fluxo de trabalho
intro: Você pode ignorar as execuções de fluxo de trabalho disparadas pelos eventos `push` e `pull_request` incluindo um comando na mensagem de commit.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199967'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Observação:** se um fluxo de trabalho for ignorado devido à [filtragem de caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [à filtragem de branch](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou a uma mensagem de commit (veja abaixo), as verificações associadas a esse fluxo de trabalho permanecerão em um estado "Pendente". Uma solicitação de pull que exige que essas verificações sejam bem-sucedidas não poderá ser mesclada.

{% endnote %}

Os fluxos de trabalho que, de outra forma, seriam disparados por meio de `on: push` ou `on: pull_request` não serão disparados se você adicionar uma das seguintes cadeias de caracteres à mensagem de commit em um push ou ao commit HEAD de uma solicitação de pull:

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Como alternativa, você pode terminar a mensagem de commit com duas linhas vazias seguidas por:
- `skip-checks:true`
- `skip-checks: true`

Você não conseguirá fazer o merge do pull request se o repositório estiver configurado para exigir verificações específicas para passar primeiro. Para permitir que o merge do pull request, você pode fazer o push de um novo commit no pull request sem que a instrução seja ignorada na mensagem do commit.

{% note %}

**Observação:** ignorar as instruções só se aplica aos eventos `push` e `pull_request`. Por exemplo, a adição de `[skip ci]` a uma mensagem de commit não impedirá a execução de um fluxo de trabalho disparado com `on: pull_request_target`.

{% endnote %}

Ignorar as instruções só se aplica às execuções do(s) fluxo(s) de trabalho que serão acionadas pelo commit que contém as instruções de para ignorar. Você também pode desabilitar um fluxo de trabalho da execução. Para obter mais informações, confira "[Como desabilitar e habilitar um fluxo de trabalho](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
