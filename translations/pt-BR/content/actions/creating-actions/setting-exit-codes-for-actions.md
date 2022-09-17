---
title: Definindo códigos de saída para ações
shortTitle: Setting exit codes
intro: 'Você pode usar códigos de saída para definir o status de uma ação. {% data variables.product.prodname_dotcom %} exibe os status para indicar a aprovação ou falha das ações.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: 28aecc646814736beb8c814dfe4b8385a6605cd2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083681'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os códigos de saída

O {% data variables.product.prodname_dotcom %} usa o código de saída para definir o status de execução de verificação da ação, que pode ser `success` ou `failure`.

Status da saída | Status de verificação de execução | Descrição
------------|------------------|------------
`0` | `success` | A ação foi concluída com êxito, outras tarefas que dependem dela podem começar.
Valor diferente de zero (qualquer número inteiro que não seja 0)| `failure` | Qualquer outro código de saída indica falha na ação. Quando uma ação falha, todas as ações simultâneas são canceladas e as ações futuras são ignoradas. O conjunto de verificação e a execução de verificação obtém um status `failure`.

## Definir um código de saída de falha em uma ação JavaScript

Se você estiver criando uma ação do JavaScript, poderá usar o pacote do kit de ferramentas de ações [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) para registrar uma mensagem e definir um código de saída de falha. Por exemplo:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

Para obter mais informações, confira "[Criando uma ação JavaScript](/articles/creating-a-javascript-action)".

## Definir um código de saída de falha em uma ação de contêiner do Docker

Se você estiver criando uma ação de contêiner do Docker, poderá definir um código de saída de falha em seu script `entrypoint.sh`. Por exemplo:

```
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

Para obter mais informações, confira "[Como criar uma ação de contêiner do Docker](/articles/creating-a-docker-container-action)".
