---
ms.openlocfilehash: 3e44864fd82617c799cc4af8a3ab31b9279ed950
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877175"
---
## Contrôle de version basé sur les fonctionnalités

Le contrôle de version basé sur les fonctionnalités nous permet de définir et de contrôler les versions d’une « fonctionnalité   nommée arbitrairement à un même endroit.

**Remarque** : ne supprimez pas `data/features/placeholder.yml` car il est utilisé par les tests.

## Fonctionnement

Ajoutez un nouveau fichier YAML avec le nom de la fonctionnalité que vous souhaitez utiliser dans ce répertoire. Pour une fonctionnalité nommée `meow`, il s’agit de `data/features/meow.yml`.

Ajoutez un bloc `versions` au fichier YML avec les noms courts des versions dans lesquelles la fonctionnalité est disponible. Par exemple :

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

Le format et les valeurs autorisées sont identiques à la propriété des versions [propriété des versions préliminaires](/content#versions).

### Conditions liquides

Vous pouvez désormais utiliser `{% ifversion meow %} ... {% endif %}` dans les fichiers de contenu.

### Informations préliminaires

Vous pouvez également utiliser la fonctionnalité dans les informations préliminaires des fichiers de contenu :

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

Vous ne pouvez pas utiliser `feature:` pour spécifier plusieurs versions simultanées, car cela n’est pas pris en charge. En guise d’alternative, vous pouvez créer un fichier de versioning basé sur des fonctionnalités avec le versioning requis.

## Application du schéma

Le schéma de validation du contrôle de version des fonctionnalités réside dans [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) et est utilisé par [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js).

## Script pour supprimer des balises de fonctionnalité

TBD
