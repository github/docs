---
title: Sicherheitsmeldungen für angreifbare Abhängigkeiten auf GitHub Enterprise Server aktivieren
intro: 'Sie können zwischen {{ site.data.variables.product.product_location_enterprise }} und {{ site.data.variables.product.prodname_ghe_cloud }} eine Verbindung herstellen und Sicherheitsmeldungen für angreifbare Abhängigkeiten in Repositorys auf Ihrer Instanz aktivieren.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site-Administratoren für {{ site.data.variables.product.prodname_ghe_server }} , die auch Inhaber der angeschlossenen Organisation oder des angeschlossenen Unternehmenskontos in der {{ site.data.variables.product.prodname_ghe_cloud }} sind, können Sicherheitswarnungen für ungeschützte Abhängigkeiten auf {{ site.data.variables.product.prodname_ghe_server }} aktivieren.'
versions:
  enterprise-server: '*'
---

### About alerts for vulnerable dependencies on {{ site.data.variables.product.prodname_ghe_server }}

{{ site.data.reusables.repositories.tracks-vulnerabilities }} For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

Sie können zwischen {{ site.data.variables.product.product_location_enterprise }} und {{ site.data.variables.product.prodname_dotcom_the_website }} eine Verbindung herstellen, dann die Schwachstellendaten mit Ihrer Instanz synchronisieren und Sicherheitsmeldungen in Repositorys generieren, die eine angreifbare Abhängigkeit aufweisen.

Nachdem Sie {{ site.data.variables.product.product_location_enterprise }} mit {{ site.data.variables.product.prodname_dotcom_the_website }} verbunden und Sicherheitsmeldungen für angreifbare Abhängigkeiten aktiviert haben, werden die Schwachstellendaten stündlich von {{ site.data.variables.product.prodname_dotcom_the_website }} mit Ihrer Instanz synchronisiert. Sie können die Schwachstellendaten auch jederzeit manuell synchronisieren. Es werden weder Code noch Informationen zu Code von {{ site.data.variables.product.product_location_enterprise }} auf {{ site.data.variables.product.prodname_dotcom_the_website }} hochgeladen.

Wenn {{ site.data.variables.product.product_location_enterprise }} Informationen zu einer Schwachstelle empfängt, werden die Repositorys in Ihrer Instanz identifiziert, welche die betroffene Version der Abhängigkeit verwenden. Zudem werden Sicherheitsmeldungen an Inhaber und Personen gesendet, die in diesen Repositorys über Administratorzugriff verfügen. Sie können anpassen, wie sie Sicherheitsmeldungen empfangen möchten. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)."

### Sicherheitsmeldungen für angreifbare Abhängigkeiten auf {{ site.data.variables.product.prodname_ghe_server }} aktivieren

Bevor Sie Sicherheitsmeldungen für angreifbare Abhängigkeiten auf {{ site.data.variables.product.product_location_enterprise }} aktivieren, müssen Sie {{ site.data.variables.product.product_location_enterprise }} mit {{ site.data.variables.product.prodname_dotcom_the_website }} verbinden. Weitere Informationen finden Sie unter „[{{ site.data.variables.product.prodname_ghe_server }} mit {{ site.data.variables.product.prodname_ghe_cloud }} verbinden](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)“.

{% if currentVersion ver_gt "enterprise-server@2.20" %} We recommend configuring security alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive security alerts as usual.{% endif %}

{{ site.data.reusables.enterprise_site_admin_settings.sign-in }}
2. Aktivieren Sie in der Verwaltungsshell die Sicherheitsmeldungen für angreifbare Abhängigkeiten auf {{ site.data.variables.product.product_location_enterprise }}:
 ``` shell
$ ghe-dep-graph-enable
```
3. Kehren Sie zu {{ site.data.variables.product.prodname_ghe_server }} zurück.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled without notifications**. Optionally, to enable alerts with notifications, select **Enabled with notifications**.{% else %}
5. Verwenden Sie unter „Repositories can be scanned for vulnerabilities“ (Repositorys können auf Schwachstellen überprüft werden) das Dropdownmenü, und wählen Sie **Enabled** (Aktiviert) aus.
{% endif %}
   ![Dropdownmenü zum Aktivieren der Überprüfung von Repositorys auf Schwachstellen](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### Angreifbare Abhängigkeiten auf {{ site.data.variables.product.prodname_ghe_server }} anzeigen

Sie können alle Schwachstellen in {{ site.data.variables.product.product_location_enterprise }} anzeigen und Schwachstellendaten von {{ site.data.variables.product.prodname_dotcom_the_website }} manuell synchronisieren, um die Liste zu aktualisieren.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
2. Klicken Sie auf der linken Seitenleiste auf **Vulnerabilities** (Schwachstellen). ![Registerkarte „Vulnerabilities“ (Schwachstellen) auf der Seitenleiste für Websiteadministratoren](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Klicken Sie zum Synchronisieren von Schwachstellendaten auf **Sync Vulnerabilities now** (Schwachstellen jetzt synchronisieren). ![Schaltfläche „Sync vulnerabilities now“ (Schwachstellen jetzt synchronisieren)](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
