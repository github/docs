---
title: Anzeigen des Bereitstellungsverlaufs
intro: Zeige aktuelle und frühere Bereitstellungen für dein Repository an.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: View deployment history
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: 2941d8de6af3b7505a3c05a6b15436d32becea9b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091387'
---
Du kannst Bereitstellungen über {% data variables.product.prodname_actions %} und Umgebungen oder mit der REST-API und Drittanbieter-Apps bereitstellen. {% ifversion fpt or ghae ghes > 3.0 or ghec %} Weitere Informationen zur Verwendung von Umgebungen zum Bereitstellen mit {% data variables.product.prodname_actions %} findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/using-environments-for-deployment). {% endif %}Weitere Informationen zu Bereitstellungen mit der REST-API findest du unter [Repositorys](/rest/reference/repos#deployments).

Klicke auf der Homepage deines Repositorys auf **Umgebungen**, um aktuelle und frühere Bereitstellungen anzuzeigen.
{% ifversion ghae %} ![Umgebungen](/assets/images/enterprise/2.22/environments-sidebar.png){% else %} ![Umgebungen](/assets/images/environments-sidebar.png){% endif %}

Auf der Seite „Bereitstellungen“ wird die letzte aktive Bereitstellung jeder Umgebung für dein Repository angezeigt. Wenn die Bereitstellung eine Umgebungs-URL enthält, wird neben der Bereitstellung eine Schaltfläche **Bereitstellung anzeigen** angezeigt, die auf die URL verweist.

Das Aktivitätsprotokoll zeigt den Bereitstellungsverlauf für deine Umgebungen. Standardmäßig weist nur die neueste Bereitstellung für eine Umgebung den Status `Active` auf, alle zuvor aktiven Bereitstellungen haben den Status `Inactive`. Weitere Informationen zur automatischen Inaktivierung von Bereitstellungen findest du unter [Inaktive Bereitstellungen](/rest/reference/deployments#inactive-deployments).

Du kannst auch die REST-API verwenden, um Informationen zu Bereitstellungen abzurufen. Weitere Informationen findest du unter [Repositorys](/rest/reference/repos#deployments).
