---
title: Konfigurieren von Anwendungen
intro: 'Du kannst interne Anwendungseinstellungen für {% data variables.product.product_location %} konfigurieren.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: bcc51bdabb5dc0b5ecdd4f77db9246a60c8df496
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106959'
---
## Bildzwischenspeicherung anpassen

Du kannst auswählen, wie lange {% data variables.product.product_location %} Avatare zwischenspeichert. Beim Erhöhen der Cache-Zeit erhöhst du die Zeit, die der Avatar eines Benutzers zum Laden benötigt. Wird die Cachezeit mit einem zu niedrigen Wert konfiguriert, kann dies {% data variables.product.product_location %}-Arbeitsprozesse überlasten. 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. Klicke auf der linken Randleiste auf **Anwendungen**.
![Registerkarte „Anwendungen“ in der Seitenleiste mit den Einstellungen](/assets/images/enterprise/management-console/sidebar-applications.png)
4. Gib unter „Cachezeit für Avatarbild (Sekunden)“ ein, für wie viele Sekunden {% data variables.product.product_location %} Avatarbilder zwischenspeichern soll.
![Formularfeld „Cachezeit für Avatarbild“](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
