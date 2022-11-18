---
ms.openlocfilehash: 0b7740ddd22bccfe9899f98ac44af4d4b94b4ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145104342"
---
{% note %}

**Remarques :** 
- Un chargement SARIF prend en charge un maximum de 5 000 résultats par chargement. Tous les résultats au-delà de cette limite sont ignorés. Si un outil génère trop de résultats, vous devez mettre à jour la configuration pour vous concentrer sur les résultats des règles ou requêtes les plus importantes.

 - À chaque chargement, le chargement SARIF prend en charge une taille maximale de 10 Mo pour le fichier SARIF compressé au format `gzip`. Tous les chargements au-delà de cette limite sont rejetés. Si votre fichier SARIF est trop volumineux parce qu’il contient trop de résultats, vous devez mettre à jour la configuration pour vous concentrer sur les résultats des règles ou requêtes les plus importantes.

{% endnote %}
