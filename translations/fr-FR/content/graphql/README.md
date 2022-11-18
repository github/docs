---
ms.openlocfilehash: aadf6a8e4452758098031014ad7ade2ca28ac09a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066677"
---
# GraphQL

Le répertoire `/content/graphql` est l’emplacement où résident les documents de l’API GraphQL GitHub.

* Les répertoires `/content/graphql/guides` et `/content/graphql/overview` contiennent des articles modifiables.
* Le répertoire `/content/graphql/reference` contient un article pour chaque type de données GraphQL utilisé dans l’API GraphQL GitHub. L’essentiel du contenu figurant dans ce répertoire est rendu à l’aide d’étiquettes `include`.

  Le contenu rendu par des étiquettes `include` provient du répertoire `/lib/graphql/static` qui est généré automatiquement à partir du code source de l’API en interne dans GitHub, et ne doit pas être modifié par un humain. Pour plus d’informations, consultez l’objet [`/lib/graphql/README.md`](/lib/graphql/README.md).

  **Ainsi, nous ne pouvons pas accepter les contributions au contenu de référence de l’API GraphQL dans ce dépôt.**
