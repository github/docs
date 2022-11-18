---
ms.openlocfilehash: 8cf9b4b70c5295ad2c7178a586fd660e05a88076
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885547"
---
Le graphe des dépendances est un résumé des manifestes et fichiers de verrouillage stockés dans un référentiel{% ifversion dependency-submission-api %} et de toutes les dépendances soumises pour le référentiel à l’aide de l’API de soumission de dépendances (bêta){% endif %}. Pour chaque dépôt, il affiche{% ifversion fpt or ghec %} :

- Dépendances, les écosystèmes et les packages dont il dépend
- Dépendants, les dépôts et les packages qui en dépendent{% else %} dépendances, c’est-à-dire les écosystèmes et les packages dont il dépend. {% data variables.product.product_name %} ne calcule pas les informations sur les dépendants, les dépôts et les packages qui dépendent d’un dépôt.{% endif %}
