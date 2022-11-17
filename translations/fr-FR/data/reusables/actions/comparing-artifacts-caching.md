---
ms.openlocfilehash: 48326e29174e0cba6f56d99436271a68f65189bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105109"
---
## Comparaison des artefacts et de la mise en cache des dépendances

Les artefacts et la mise en cache sont similaires, car ils permettent de stocker des fichiers sur {% data variables.product.prodname_dotcom %}, mais chaque fonctionnalité offre des cas d’utilisation différents et ne peut pas être utilisée de manière interchangeable.

- Utilisez la mise en cache lorsque vous souhaitez réutiliser des fichiers qui ne changent pas souvent entre les travaux ou les exécutions de workflow, comme les dépendances de build d’un système de gestion de packages.
- Utilisez les artefacts lorsque vous souhaitez enregistrer des fichiers générés par un travail pour les afficher au terme de l’exécution d’un workflow, comme des fichiers binaires générés ou des journaux de génération. 
