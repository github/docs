---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876903"
---
{% warning %}

**Avis de désapprobation :** {% data variables.product.prodname_dotcom %} va interrompre le mode d’authentification auprès de l’API à l’aide des paramètres de requête. L’authentification auprès de l’API doit être effectuée au moyen de l’[Authentification HTTP de base](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens).{% ifversion fpt or ghec %} L’utilisation des paramètres de requête pour s’authentifier auprès de l’API ne fonctionnera plus à partir du 5 mai 2021. {% endif %}  Pour plus d’informations, notamment sur les baisses de tension planifiées, consultez le [billet de blog](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% ifversion ghes or ghae %} L’authentification auprès de l’API à l’aide des paramètres de requête, bien que disponible, n’est plus prise en charge pour des raisons de sécurité. Nous recommandons plutôt aux intégrateurs de déplacer leur jeton d’accès, `client_id` ou `client_secret` dans l’en-tête. {% data variables.product.prodname_dotcom %} publiera un préavis pour annoncer la suppression de l’authentification au moyen des paramètres de requête. {% endif %}

{% endwarning %}
