---
ms.openlocfilehash: ec6ab3ed5541819ee7578b34ce61fc11de31b51f
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120908"
---

{% ifversion target-runner-groups %}{% ifversion ghec or ghae or ghes %}
## Utilisation de noms uniques pour les groupes d’exécuteurs

{% data variables.product.prodname_actions %} nécessite que les noms de groupes d’exécuteurs soient uniques au niveau de l’organisation. Cela signifie qu’une organisation ne peut plus créer de groupe d’exécuteurs portant le même nom qu’un autre au sein de l’entreprise. En outre, les utilisateurs voient une bannière d’avertissement sur tous les groupes d’exécuteurs qui partagent le même nom qu’un groupe dans l’entreprise, qui suggère que le groupe d’organisation doit être renommé.

Pour éviter toute ambiguïté, un workflow échoue s’il existe des groupes d’exécuteurs en double dans l’organisation et l’entreprise. Pour résoudre ce problème, vous pouvez renommer l’un de vos groupes d’exécuteurs dans l’organisation ou l’entreprise, ou mettre à jour votre fichier de workflow pour ajouter un préfixe au nom du groupe d’exécuteurs :

- `org/` ou `organization/`
- `ent/` ou `enterprise/`

### Exemple : utilisation de préfixes pour différencier les groupes d’exécuteurs

Par exemple, si vous avez un groupe d’exécuteurs nommé `my-group` dans l’organisation et un autre nommé `my-group` dans l’entreprise, vous pouvez mettre à jour votre fichier de workflow pour utiliser `org/my-group` ou `ent/my-group` afin de les différencier.

Utilisation de `org/`:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

Utilisation de `ent/`:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```

{% endif %}

{% endif %}
