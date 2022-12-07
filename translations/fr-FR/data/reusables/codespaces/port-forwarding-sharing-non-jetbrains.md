---
ms.openlocfilehash: 22cef14793f2fe8ffa5937d60056f05f1be0265a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159552"
---
## Partage d’un fichier

{% note %}

**Remarque :** vous ne pouvez rendre un port privé que pour une organisation, si votre organisation utilise des données {% data variables.product.prodname_team %} ou {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

Si vous souhaitez partager un port transféré avec d’autres personnes, vous pouvez soit rendre le port privé pour votre organisation, soit rendre le port public. Une fois que vous avez créé un port privé pour votre organisation, toute personne de l’organisation disposant de l’URL du port peut afficher l’application en cours d’exécution. Après avoir rendu un port public, toute personne qui connaît l’URL et le numéro de port peuvent afficher l’application en cours d’exécution sans avoir à s’authentifier.

{% note %}

**Remarque :** votre choix d’options de visibilité de port peut être limité par une stratégie configurée pour votre organisation. Pour plus d’informations, consultez « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) ».

{% endnote %}