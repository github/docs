---
ms.openlocfilehash: ec6ab3ed5541819ee7578b34ce61fc11de31b51f
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120902"
---

{% ifversion target-runner-groups %}{% ifversion ghec or ghae or ghes %}
## Usar nomes exclusivos para grupos de executores

{% data variables.product.prodname_actions %} exige que os nomes de grupos de executores precisem ser exclusivos no nível da organização. Isso significa que uma organização não poderá mais criar um grupo de executores com o mesmo nome que um na empresa. Além disso, os usuários verão uma faixa de aviso em qualquer grupo de executores que compartilhem o mesmo nome de um grupo na empresa, sugerindo que o grupo da organização deve ser renomeado.

Para evitar ambiguidade, um fluxo de trabalho falhará se houver grupos de executores duplicados na organização e na empresa. Para resolver isso, você pode renomear um dos grupos de executores na organização ou na empresa ou atualizar o arquivo de fluxo de trabalho para adicionar um prefixo ao nome do grupo de executores:

- `org/` ou `organization/`
- `ent/` ou `enterprise/`

### Exemplo: usar prefixos para diferenciar grupos de executores

Por exemplo, se você tiver um grupo de executores chamado `my-group` na organização e outro chamado `my-group` na empresa, poderá atualizar seu arquivo de fluxo de trabalho para usar `org/my-group` ou `ent/my-group` para diferenciar os dois.

Usando `org/`:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

Usando `ent/`:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```

{% endif %}

{% endif %}
