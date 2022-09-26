---
title: Como gerenciar uma fila de mesclagem
intro: É possível aumentar a velocidade de desenvolvimento com uma mesclagem das filas para pull requests no seu repositório.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
ms.openlocfilehash: 2cdbbdc72dde5c9970d49f7060e5cb583b6dd1dd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496482'
---
{% data reusables.pull_requests.merge-queue-beta %}

## Sobre as filas de mesclagem

{% data reusables.pull_requests.merge-queue-overview %}

A fila de mesclagem cria branches temporários com um prefixo especial para validar as alterações da solicitação de pull. Em seguida, as alterações na solicitação de pull são agrupadas em um `merge_group` com a última versão do `base_branch`, bem como as alterações à frente dela na fila. O {% data variables.product.product_name %} mesclará todas essas alterações no `base_branch` depois que as verificações exigidas pelas proteções de branch do `base_branch` forem aprovadas.


Para obter informações sobre os métodos de mesclagem, confira "[Sobre as mesclagens de solicitações de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% note %}

**Observação**:

* Uma fila de mesclagem não pode ser habilitada com regras de proteção de branch que usam caracteres curinga (`*`) no padrão de nome do branch.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Disparando verificações de grupo de mesclagem com {% data variables.product.prodname_actions %}

Você pode usar o evento do `merge_group` para disparar o fluxo de trabalho {% data variables.product.prodname_actions %} quando uma solicitação de pull é adicionada a uma fila de mesclagem. Observe que esse é um evento diferente dos eventos de `pull_request` e `push`.

Um fluxo de trabalho que relata uma verificação exigida pelas proteções do branch de destino seria semelhante a este:

```yaml
on:
  pull_request:
  merge_group:
```

Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#merge-group)"

### Disparar verificações de grupo de mesclagem com outros provedores de CI

Com outros provedores de CI, talvez seja necessário atualizar sua configuração de CI para ser executada quando um branch que começa com o prefixo `gh-readonly-queue/{base_branch}` especial for criado.

## Como gerenciar uma fila de mesclagem

Os administradores do repositório podem exigir uma mesclagem habilitando a configuração de proteção de branch "Exigir fila de mesclagem" nas regras de proteção do branch base.

Para obter informações sobre como habilitar a configuração de proteção de fila de mesclagem, confira "[Como gerenciar uma regra de proteção de branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)".

## Leitura adicional

* "[Como mesclar uma solicitação de pull com uma fila de mesclagem](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[Sobre os branches protegidos](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
