---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065423"
---
Use `permissions` para modificar as permissões padrão concedidas ao `GITHUB_TOKEN`, adicionando ou removendo o acesso conforme necessário, de modo que você só permita o acesso mínimo necessário. Para obter mais informações, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Use `permissions` como uma chave de nível superior a ser aplicada a todos os trabalhos no fluxo de trabalho ou em trabalhos específicos. Quando você adiciona a chave `permissions` a um trabalho específico, todas as ações e os comandos de execução nesse trabalho que usam o `GITHUB_TOKEN` obtêm os direitos de acesso especificados.  Para obter mais informações, confira [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### Exemplo: Atribuindo permissões ao GITHUB_TOKEN

Este exemplo mostra as permissões que estão sendo definidas para o `GITHUB_TOKEN` que se aplicará a todos os trabalhos no fluxo de trabalho. É concedido acesso de leitura a todas as permissões.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
