---
ms.openlocfilehash: ec6ab3ed5541819ee7578b34ce61fc11de31b51f
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120933"
---

{% ifversion target-runner-groups %}{% ifversion ghec or ghae or ghes %}
## Uso de nombres únicos para grupos de ejecutores

{% data variables.product.prodname_actions %} requiere que los nombres del grupo de ejecutores sean únicos a nivel de organización. Esto significa que una organización ya no podrá crear un grupo de ejecutores con el mismo nombre que uno de la empresa. Además, los usuarios verán un banner de advertencia en cualquier grupo de ejecutores que comparta el mismo nombre que un grupo de la empresa, que sugiere que se debe cambiar el nombre del grupo de la organización.

Para evitar ambigüedad, se producirá un error en un flujo de trabajo si hay grupos de ejecutores duplicados en la organización y en la empresa. Para solucionarlo, puedes cambiar el nombre de uno de los grupos de ejecutores de la organización o de la empresa, o bien actualizar el archivo de flujo de trabajo para agregar un prefijo al nombre del grupo de ejecutores:

- `org/` o `organization/`
- `ent/` o `enterprise/`

### Ejemplo: Uso de prefijos para diferenciar grupos de ejecutores

Por ejemplo, si tienes un grupo de ejecutores denominado `my-group` en la organización y otro denominado `my-group` en la empresa, puedes actualizar el archivo de flujo de trabajo para usar `org/my-group` o `ent/my-group` para diferenciar entre los dos.

Usar `org/`:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

Usar `ent/`:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```

{% endif %}

{% endif %}
