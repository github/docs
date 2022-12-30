---
ms.openlocfilehash: 7ab0c705855f1bd271c17eacc9a2533184d1b5f1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145105499"
---
{% ifversion ghae %} Wenn die Richtlinien deines Unternehmens das Forken privater und interner Repositorys zulassen, kannst du ein Repository zu deinem persönlichen Konto oder zu einer Organisation forken, in der du die Berechtigung zum Erstellen von Repositorys hast. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

{% elsif ghes or ghec %} Du kannst ein privates oder internes Repository zu deinem persönlichen Konto oder einer Organisation auf {% data variables.product.product_location %} forken, wo du über Berechtigungen zur Repositoryerstellung verfügst, wenn Einstellungen für das Repository und deine Unternehmensrichtlinien das Forken zulassen.

{% elsif fpt %} Wenn du Zugriff auf ein privates Repository hast und der Besitzer das Forken erlaubt, kannst du das Repository zu deinem persönlichen Konto oder einer beliebigen Organisation auf {% data variables.product.prodname_team %} forken, sofern du die Berechtigungen zur Erstellung von Repositorys hast. Du kannst ein privates Repository nicht mit {% data variables.product.prodname_free_team %} zu einer Organisation forken. Weitere Informationen findest du bei den [GitHub-Produkten](/articles/githubs-products).
{% endif %}
