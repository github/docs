---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103466"
---
### Recherche en fonction du dépôt

Utilisez le qualificateur `repo` pour limiter les actions à un dépôt spécifique. Par exemple :

  * `repo:my-org/our-repo` recherche tous les événements qui se sont produits pour le dépôt `our-repo` dans l’organisation `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` recherche tous les événements qui se sont produits pour les dépôts `our-repo` et `another-repo` dans l’organisation `my-org`.
  * `-repo:my-org/not-this-repo` exclut tous les événements qui se sont produits pour le dépôt `not-this-repo` dans l’organisation `my-org`.

Notez que vous devez inclure le nom du compte dans le qualificateur `repo`. La recherche de `repo:our-repo` uniquement ne fonctionne pas.
