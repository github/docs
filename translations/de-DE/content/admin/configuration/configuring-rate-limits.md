---
title: Begrenzungen konfigurieren
intro: 'Mithilfe der {% data variables.enterprise.management_console %} können Sie Begrenzungen für {% data variables.product.prodname_ghe_server %} festlegen.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Begrenzungen für {% data variables.product.prodname_enterprise_api %} aktivieren

Die Aktivierung von Begrenzungen auf {% data variables.product.prodname_enterprise_api %} kann verhindern, dass einzelne oder nicht authentifizierte Benutzer Ressourcen übermäßig verwenden. For more information, see "[Rate Limiting](/enterprise/{{ page.version }}/v3/#rate-limiting)."

{% if currentVersion ver_gt "enterprise-server@2.21" %}
You can exempt a list of users from API rate limits using the `ghe-config` utility in the administrative shell. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-config)."
{% endif %}

{% note %}

**Hinweis:** In der {% data variables.enterprise.management_console %} wird der Zeitraum (pro Minute oder pro Stunde) für jede Begrenzung aufgelistet.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Wählen Sie **Enable API Rate Limiting** (API-Durchsatzratenbegrenzung aktivieren) unter „Rate Limiting“ (Durchsatzratenbegrenzung) aus. ![Kontrollkästchen zum Aktivieren der API-Durchsatzratenbegrenzung](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Geben Sie die Begrenzungen für authentifizierte und nicht authentifizierte Anforderungen für jede API ein, oder akzeptieren Sie die vorab ausgefüllten Standardbegrenzungen.
{% data reusables.enterprise_management_console.save-settings %}

### Missbrauchsbegrenzungen aktivieren

Durch das Festlegen von Missbrauchsbegrenzungen wird das allgemeine Dienstniveau von {% data variables.product.product_location %} geschützt.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Wählen Sie **Enable Abuse Rate Limiting** (Missbrauchsbegrenzung aktivieren) unter „Rate Limiting“ (Durchsatzratenbegrenzung) aus. ![Kontrollkästchen zum Aktivieren der Missbrauchsbegrenzung](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png)
3. Geben Sie die Begrenzungen für „Total Requests“ (Gesamtanforderungen), „CPU Limit“ (CPU-Begrenzung) und „CPU Limit for Searching“ (CPU-Begrenzung für Suchvorgänge) ein, oder akzeptieren Sie die vorab ausgefüllten Standardbegrenzungen.
{% data reusables.enterprise_management_console.save-settings %}

### Git-Begrenzungen aktivieren

Sie können Git-Begrenzungen pro Repository-Netzwerk oder pro Benutzer-ID anwenden. Git-Begrenzungen werden in gleichzeitigen Vorgängen pro Minute ausgedrückt und sind basierend auf der aktuellen CPU-Auslastung adaptiv.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Wählen Sie **Enable Git Rate Limiting** (Git-Durchsatzratenbegrenzung aktivieren) unter „Rate Limiting“ (Durchsatzratenbegrenzung) aus. ![Kontrollkästchen zum Aktivieren der Git-Durchsatzratenbegrenzung](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Geben Sie die Begrenzungen für die jeweiligen Repository-Netzwerke oder Benutzer-IDs ein. ![Felder für Repository-Netzwerk- und Benutzer-ID-Begrenzungen](/assets/images/enterprise/management-console/example-git-rate-limits.png)
{% data reusables.enterprise_management_console.save-settings %}
