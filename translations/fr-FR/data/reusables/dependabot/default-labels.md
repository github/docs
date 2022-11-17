---
ms.openlocfilehash: 3b05d1b75c37f24e9ae4ce03618910c572f259d1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: "147887712"
---
Par défaut, {% data variables.product.prodname_dependabot %} déclenche toutes les demandes de tirage avec l’étiquette `dependencies` . Si plusieurs gestionnaires de package sont définis, {% data variables.product.prodname_dependabot %} inclut une étiquette supplémentaire sur chaque demande de tirage. Cela indique le langage ou l’écosystème que la demande de tirage va mettre à jour, par exemple : `java` pour les mises à jour de Gradle, et `submodules` pour les mises à jour de sous-module Git. {% data variables.product.prodname_dependabot %} crée automatiquement ces étiquettes par défaut si nécessaire dans votre dépôt.
