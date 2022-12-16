---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145085349"
---
Clé | Type | Description
----|------|------------
`action` | `string` | Action qui a été effectuée. Peut être :<ul><li>`created` - Quelqu’un installe {% data variables.product.prodname_github_app %}.</li><li>`deleted` - Quelqu’un désinstalle {% data variables.product.prodname_github_app %}.</li><li>`suspend` - Quelqu’un suspend une installation de {% data variables.product.prodname_github_app %}.</li><li>`unsuspend` - Quelqu’un annule la suspension d’une installation de {% data variables.product.prodname_github_app %}.</li><li>`new_permissions_accepted` - Quelqu’un accepte de nouvelles autorisations pour une installation de {% data variables.product.prodname_github_app %}. Quand un propriétaire de {% data variables.product.prodname_github_app %} demande de nouvelles autorisations, la personne qui a installé {% data variables.product.prodname_github_app %} doit accepter la demande. </li></ul>
`repositories` | `array` | Tableau d’objets de dépôt auxquels l’installation peut accéder.
