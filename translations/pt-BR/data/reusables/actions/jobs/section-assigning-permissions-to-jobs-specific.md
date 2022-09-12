---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145083899"
---
Para um trabalho específico, você pode usar `jobs.<job_id>.permissions` para modificar as permissões padrão concedidas ao `GITHUB_TOKEN`, adicionando ou removendo o acesso conforme necessário, para que você permita apenas o acesso mínimo necessário. Para obter mais informações, confira "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Ao especificar a permissão em uma definição de trabalho, você pode configurar um conjunto diferente de permissões para o `GITHUB_TOKEN` em cada trabalho, se necessário. Como alternativa, você pode especificar as permissões para todas as tarefas do fluxo de trabalho. Para obter informações sobre como definir permissões no nível do fluxo de trabalho, confira [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### Exemplo: Configurar permissões para um trabalho específico

Este exemplo mostra as permissões que estão sendo definidas para o `GITHUB_TOKEN` que se aplicará somente ao trabalho chamado `stale`. O acesso de gravação é permitido para os escopos `issues` e `pull-requests`. Todos os outros escopos não terão acesso.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
