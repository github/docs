---
title: Prüfungen auf automatische Updates aktivieren
intro: 'Sie können Prüfungen auf automatische Updates aktivieren, sodass {% data variables.product.product_location %} nach der neuesten {% data variables.product.prodname_ghe_server %}-Version sucht und diese herunterlädt.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
---

Wenn ein Upgrade-Pakete für {% data variables.product.product_location %} automatisch heruntergeladen wird, wird in einer Meldung angezeigt, dass Sie ein Upgrade von {% data variables.product.prodname_ghe_server %} durchführen können. Pakete werden auf {% data variables.product.product_location %} in das Verzeichnis `/var/lib/ghe-updates` heruntergeladen. Weitere Informationen finden Sie unter „[Upgrade von {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server)“.

Wenn für ein Upgrade ein Hotpatch verfügbar ist, wird die Datei `.hpkg` automatisch heruntergeladen. In der Managementkonsole können Sie festlegen, dass der Hotpatch sofort installiert wird. Alternativ können Sie festlegen, dass seine Installation für einen späteren Zeitpunkt geplant wird. Weitere Informationen finden Sie unter „[Upgrade mit einem Hotpatch](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)“.

{% tip %}

**Tipp:** Zum Aktivieren von Prüfungen auf automatische Updates muss {% data variables.product.product_location %} eine Verbindung zu `https://github-enterprise.s3.amazonaws.com` herstellen können.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. Klicken Sie auf **Yes, automatically check for updates** (Ja, automatisch nach Updates suchen). ![Schaltfläche zum Aktivieren automatischer Updates](/assets/images/enterprise/management-console/enable_updates_button.png)
{% data reusables.enterprise_management_console.save-settings %}

Überprüfen Sie das Banner auf der Registerkarte „Updates“, um zu sehen, ob Ihre Instanz aktuell ist.

![Banner mit Ihrer GitHub Enterprise Server-Version](/assets/images/enterprise/management-console/up-to-date-banner.png)

Unter „**Logs**“ (Protokolle) können Sie den Status der neuesten Prüfung auf Updates anzeigen.

![Protokolle für das Update](/assets/images/enterprise/management-console/update-log.png)
