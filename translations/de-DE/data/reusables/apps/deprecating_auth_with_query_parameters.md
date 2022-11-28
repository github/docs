---
ms.openlocfilehash: 1ba4f5242c21b752ac7e3bd9a424e0c8c4e96b2a
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876902"
---
{% warning %}

**Veraltungshinweis**: {% data variables.product.prodname_dotcom %} führt die Authentifizierung mit der API mit Abfrageparametern nicht mehr aus. Die Authentifizierung mit der API sollte mit [HTTP-Standardauthentifizierung](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) erfolgen. {% ifversion fpt or ghec %} Die Verwendung von Abfrageparametern zur Authentifizierung bei der API funktioniert am 5. Mai 2021 nicht mehr. {% endif %} Weitere Informationen (einschließlich geplanter Änderungen) findest du im [Blogbeitrag](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% ifversion ghes or ghae %} Die Authentifizierung bei der API mithilfe von Abfrageparametern (wenn verfügbar) wird aufgrund von Sicherheitsbedenken nicht mehr unterstützt. Stattdessen wird empfohlen, dass Integratoren ihr Zugriffstoken (`client_id`) oder das `client_secret` in die Kopfzeile verschieben. {% data variables.product.prodname_dotcom %} wird die Abschaffung der Authentifizierung durch Abfrageparameter mit einer Vorankündigung ankündigen. {% endif %}

{% endwarning %}
