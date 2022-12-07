---
ms.openlocfilehash: 3557e85680e20919fbe049cfe30ccacc93d9c17c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879808"
---
{% note %}

**Remarque :** des détails de carte de projet sont désormais présentés dans des réponses de l’API REST pour des événements de problème et de chronologie liés au projet. Cette fonctionnalité est désormais disponible en préversion pour les développeurs. Pour plus de détails, consultez ce [billet de blog](https://developer.github.com/changes/2018-09-05-project-card-events).

Pour recevoir l’attribut `project_card`, les tableaux de projet doivent être [activés](/articles/disabling-project-boards-in-a-repository) pour un dépôt, et vous devez fournir un [type de média](/rest/overview/media-types) personnalisé dans l’en-tête `Accept` :

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
