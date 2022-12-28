---
title: Prüfungen auf automatische Updates aktivieren
intro: 'Du kannst Prüfungen auf automatische Updates aktivieren, sodass {% data variables.product.product_location %} nach der neuesten {% data variables.product.prodname_ghe_server %}-Version sucht und diese herunterlädt.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: c566dc54958cc7d4f26a9279ea3bf8a76aafa636
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331888'
---
Wenn ein Upgradepaket für {% data variables.product.product_location %} automatisch heruntergeladen wird, erhältst du eine Meldung, dass ein Upgrade von {% data variables.product.prodname_ghe_server %} durchgeführt werden kann. Pakete werden in das Verzeichnis `/var/lib/ghe-updates` auf {% data variables.product.product_location %} heruntergeladen. Weitere Informationen findest du unter [Upgrade für {% data variables.product.prodname_ghe_server %} durchführen](/enterprise/admin/guides/installation/upgrading-github-enterprise-server).

Wenn für ein Upgrade ein Hotpatch verfügbar ist, wird die Datei `.hpkg` automatisch heruntergeladen. In der Managementkonsole kannst du festlegen, dass der Hotpatch sofort installiert wird. Alternativ kannst du festlegen, dass seine Installation für einen späteren Zeitpunkt geplant wird. Weitere Informationen findest du unter [Upgrade mit einem Hotpatch](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch).

{% tip %}

**Tipp**: Um Überprüfungen auf automatische Updates zu aktivieren, muss {% data variables.product.product_location %} dazu in der Lage sein, eine Verbindung mit `https://github-enterprise.s3.amazonaws.com` herzustellen.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Klicke auf **Ja, automatisch nach Updates suchen**.
![Schaltfläche zum Aktivieren automatischer Updates](/assets/images/enterprise/management-console/enable_updates_button.png) {% data reusables.enterprise_management_console.save-settings %}

Überprüfe das Banner auf der Registerkarte „Updates“, um zu sehen, ob deine Instanz aktuell ist.

![Banner mit deiner GitHub Enterprise Server-Version](/assets/images/enterprise/management-console/up-to-date-banner.png)

Unter **Protokolle** kannst du den Status der neuesten Überprüfung auf Updates anzeigen.

![Protokolle für das Update](/assets/images/enterprise/management-console/update-log.png)
