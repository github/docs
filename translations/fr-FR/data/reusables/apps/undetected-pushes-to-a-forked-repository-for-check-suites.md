---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881859"
---
{% note %}

**Remarque :** L’API Checks recherche uniquement les poussées dans le dépôt où la suite de vérifications ou l’exécution de vérification ont été créées. Les poussées dans une branche incluse dans un dépôt dupliqué ne sont pas détectées et retournent un tableau `pull_requests` vide et une valeur `null` pour `head_branch`.

{% endnote %}
