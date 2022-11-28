---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145085348"
---
Schlüssel | type | BESCHREIBUNG
----|------|------------
`action` | `string` | Die durchgeführte Aktion. Kann eine der folgenden Aktionen sein:<ul><li>`created` – Jemand installiert eine {% data variables.product.prodname_github_app %}.</li><li>`deleted` – Jemand deinstalliert eine {% data variables.product.prodname_github_app %}.</li><li>`suspend` – Jemand sperrt die {% data variables.product.prodname_github_app %}-Installation an.</li><li>`unsuspend` – Jemand entsperrt die {% data variables.product.prodname_github_app %}-Installation.</li><li>`new_permissions_accepted` – Jemand akzeptiert neue Berechtigungen für eine {% data variables.product.prodname_github_app %}-Installation. Wenn ein {% data variables.product.prodname_github_app %}-Besitzer neue Berechtigungen anfordert, muss die Person, die die {% data variables.product.prodname_github_app %} installiert hat, die neue Berechtigungsanforderung akzeptieren. </li></ul>
`repositories` | `array` | Ein Array von Repositoryobjekten, auf die die Installation zugreifen kann.
