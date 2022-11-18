---
ms.openlocfilehash: e61b98fb2e2ad39bf3e17b058b401a6fdb967836
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086277"
---
Exécute la commande `mvn --batch-mode deploy` pour effectuer une publication sur le dépôt `ossrh`. La variable d’environnement `MAVEN_USERNAME` est définie avec le contenu de votre secret `OSSRH_USERNAME`, et la variable d’environnement `MAVEN_PASSWORD` est définie avec le contenu de votre secret `OSSRH_TOKEN`.
