---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145883574"
---
Use `jobs.<job_id>.needs` para identificar todos os trabalhos que precisam ser concluídos com êxito antes que este trabalho seja executado. Esse código pode ser uma string ou array de strings. Se houver falha em um trabalho, todos os trabalhos que dependem dele serão ignorados, a menos que os trabalhos usem uma expressão condicional que faça o trabalho continuar. Se uma execução contiver uma série de trabalhos que precisem uns dos outros, uma falha se aplicará a todos os trabalhos na cadeia de dependência do ponto de falha em diante.

#### Exemplo: Exigindo trabalhos dependentes com sucesso 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

Neste exemplo, `job1` precisa ser concluído com êxito antes que `job2` seja iniciado, e `job3` aguarda a conclusão de `job1` e de `job2`.

Os trabalhos neste exemplo são executados sequencialmente:

1. `job1`
2. `job2`
3. `job3`

#### Exemplo: Não exigindo trabalhos dependentes com sucesso

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

Neste exemplo, `job3` usa a expressão condicional `always()` para que ela sempre seja executada após a conclusão de `job1` e de `job2`, independentemente de elas terem sido bem-sucedidas. Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions#status-check-functions)".
