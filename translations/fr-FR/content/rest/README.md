---
ms.openlocfilehash: 059e56c6821926e1d6a604c95dd1fa167de2db6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145131867"
---
# REST

Le répertoire `/content/rest` est l’emplacement où résident les documents de l’API REST GitHub.

* Les répertoires `/content/rest/guides` et `/content/rest/overview` contiennent des articles ordinaires. Ceux-ci sont modifiables par un humain.
* Le répertoire `/content/rest/reference` contient un article pour chaque groupe de points de terminaison dans l’API REST GitHub. L’essentiel du contenu figurant dans ce répertoire est rendu à l’aide d’étiquettes `include`.

  Le contenu rendu par des étiquettes `include` provient du répertoire `/lib/rest/static` qui est généré automatiquement à partir du code source de l’API en interne dans GitHub, et ne doit pas être modifié par un humain. Pour plus d’informations, consultez l’objet [`/lib/rest/README.md`](/lib/rest/README.md).

  **Nous ne pouvons pas accepter les modifications apportées au contenu rendu par des étiquettes `include`. Toutefois, vous pouvez ouvrir un problème décrivant les modifications que vous aimeriez voir.**
