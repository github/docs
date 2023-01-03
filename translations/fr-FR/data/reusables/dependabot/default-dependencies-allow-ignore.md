---
ms.openlocfilehash: 082f3b30b23ed6c8b2a7a4261cace89e32f0a8c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133527"
---
Par défaut, toutes les dépendances définies explicitement dans un manifeste ou un fichier de verrouillage sont mises à jour. Vous pouvez utiliser `allow` et `ignore` pour personnaliser les dépendances à maintenir avec les mises à jour de version. {% data variables.product.prodname_dependabot %} recherche toutes les dépendances autorisées, puis filtre toutes les dépendances ou versions ignorées. Dès lors, une dépendance mise en correspondance par `allow` et `ignore` est ignorée.
