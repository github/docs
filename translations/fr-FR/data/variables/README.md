---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145067045"
---
# Variables

Les variables sont des chaînes courtes de texte réutilisable.

Les fichiers YAML de ce répertoire contiennent chacun plusieurs variables.

Le *chemin*, le *nom de fichier* et les *clés* dans chaque fichier YAML déterminent son chemin dans l’objet de données.

Par exemple, prenons le fichier `data/variables/foo/bar.yml` :

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

Ses valeurs sont accessibles de la façon suivante :

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
