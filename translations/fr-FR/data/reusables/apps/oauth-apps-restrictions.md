---
ms.openlocfilehash: f65192b62cd5ac803761ffaf5e1e374c8aad502e
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876932"
---
{% ifversion fpt or ghec %}Si vous utilisez votre application OAuth avec GitHub Actions, et si vous souhaitez modifier les fichiers de workflow, votre jeton OAuth doit avoir l’étendue `workflow`. De plus, l’utilisateur doit disposer d’une autorisation de propriétaire ou d’une autorisation d’accès en écriture sur le dépôt qui contient le fichier de workflow. Pour plus d’informations, consultez « [Présentation des étendues pour les applications OAuth](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) ».{% endif %}
