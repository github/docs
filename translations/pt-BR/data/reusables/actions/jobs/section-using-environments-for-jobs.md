---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145083892"
---
Use `jobs.<job_id>.environment` para definir o ambiente que o trabalho referencia. Todas as regras de proteção do ambiente têm de ser aprovadas para que um trabalho que faça referência ao ambiente seja enviado a um executor. Para obter mais informações, confira "[Como usar ambientes para implantação](/actions/deployment/using-environments-for-deployment)".

Você pode fornecer o ambiente como apenas o ambiente `name` ou como um objeto de ambiente com o `name` e a `url`. A URL é mapeada para `environment_url` na a API de implantações. Para obter mais informações sobre a API de implantações, confira "[Implantações](/rest/reference/repos#deployments)".

### Exemplo: Usando um único nome de ambiente
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### Exemplo: Usando o nome de ambiente e URL

```yaml
environment:
  name: production_environment
  url: https://github.com
```

A URL pode ser uma expressão e pode usar qualquer contexto, exceto o [contexto `secrets`](/actions/learn-github-actions/contexts#contexts). Para obter mais informações sobre expressões, confira "[Expressões](/actions/learn-github-actions/expressions)".

### Exemplo: Usando a saída como URL
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
