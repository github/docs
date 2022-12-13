---
title: Verwalten von GitHub Mobile für dein Unternehmen
intro: 'Du kannst entscheiden, ob Personen mit {% data variables.product.prodname_mobile %} eine Verbindung mit {% data variables.product.product_location %} herstellen können.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: f46673c16611a7f1ced6d0476c6ad3d79807f6d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062267'
---
## Informationen zu {% data variables.product.prodname_mobile %}

Mit {% data variables.product.prodname_mobile %} können Personen nach erfolgreicher Authentifizierung von einem mobilen Gerät aus die Arbeit in {% data variables.product.product_location %} bewerten, verwalten und zusammenarbeiten. {% data reusables.mobile.about-mobile %} Weitere Informationen findest du unter [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile).

Du kannst Personen die Verwendung von {% data variables.product.prodname_mobile %} zur Authentifizierung bei {% data variables.product.product_location %} und zum Zugriff auf die Daten deiner Instanz erlauben oder verbieten. Standardmäßig ist {% data variables.product.prodname_mobile %}{% ifversion ghes > 3.3 %} für Personen aktiviert, die {% data variables.product.product_location %} verwenden.{% else %} nicht für Personen aktiviert, die {% data variables.product.product_location %} verwenden. Um die Verbindung mit deiner Instanz mittels {% data variables.product.prodname_mobile %} zuzulassen, musst du das Feature für deine Instanz aktivieren.{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

**Hinweis:** Wenn du auf {% data variables.product.prodname_ghe_server %} 3.4.0 oder höher aktualisierst und nicht zuvor {% data variables.product.prodname_mobile %} deaktiviert oder aktiviert hast, wird {% data variables.product.prodname_mobile %} standardmäßig aktiviert. Wenn du zuvor {% data variables.product.prodname_mobile %} für deine Instanz deaktiviert oder aktiviert hast, wird deine Einstellung nach dem Upgrade beibehalten. Weitere Informationen zum Upgrade deiner Instanz findest du unter [Upgrade von {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server).

{% endnote %} {% endif %}

## Aktivieren oder Deaktivieren von {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. Klicke auf der linken Randleiste auf **Mobil**.
  ![„Mobil“ in der linken Randleiste für die {% data variables.product.prodname_ghe_server %}-Verwaltungskonsole](/assets/images/enterprise/management-console/click-mobile.png)
1. Aktiviere oder deaktiviere unter „GitHub Mobile" die Option **GitHub Mobile Apps aktivieren**.
  ![Kontrollkästchen für „GitHub Mobile Apps aktivieren“ in der {% data variables.product.prodname_ghe_server %}-Verwaltungskonsole](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}
