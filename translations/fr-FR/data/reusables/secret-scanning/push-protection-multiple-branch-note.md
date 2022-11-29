---
ms.openlocfilehash: 4cc5759031be6a031424abf13b7aa4c1db05c84f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147578694"
---
{% note %}

**Remarques**: 

* Si votre configuration Git prend en charge les envois vers plusieurs branches, et non seulement vers la branche par défaut, votre envoi peut être bloqué en raison de l’envoi (push) de références supplémentaires et involontaires. Pour plus d’informations, consultez les [options `push.default`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) dans la documentation Git.
* Si l’{% data variables.product.prodname_secret_scanning %} à l’occasion de l’expiration d’un envoi (push), {% data variables.product.prodname_dotcom %} exécute toujours une analyse après l’envoi (push).

{% endnote %}
