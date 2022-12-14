---
ms.openlocfilehash: 324332325762999d6daaf4241ec0f9e291ce98a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067980"
---
Ein selbstgehosteter Runner kann entweder in deinen Repository-, Organisations- oder {% ifversion fpt or ghec %}Unternehmenskontoeinstellungen auf {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %}Unternehmenseinstellungen auf {% data variables.product.product_location %}{% endif %} gefunden werden. Um einen selbst-gehosteten Läufer zu verwalten, musst Du über die folgenden Berechtigungen verfügen, abhängig davon, wo der selbst-gehostete Läufer hinzugefügt wurde:
- **Benutzer-Repository**: Du musst der Repositorybesitzer sein.
- **Organisation**: Du musst ein Organisationsbesitzer sein. 
- **Organisationsrepository**: Du musst du ein Organisationsbesitzer sein oder über Administratorzugriff auf das Repository verfügen.
{% ifversion ghec %}
- **Unternehmenskonto**: Du musst ein Unternehmensbesitzer sein.
{% elsif ghes or ghae %}
- **Unternehmen**: Du musst ein {% data variables.product.prodname_enterprise %}-Websiteadministrator sein.
{% endif %}
