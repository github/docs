---
title: Testinstanz einrichten
intro: 'Sie können eine *Testinstanz* verwenden, um Änderungen zu testen, bevor sie auf {% data variables.product.product_location %} angewendet werden. So können Sie eine Testinstanz beispielsweise verwenden, um neue {% data variables.product.prodname_ghe_server %}-Updates zu testen oder das Importieren von Migrationsdaten zu üben.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
---
{% tip %}

**Tipp:** Sie können Ihre vorhandene {% data variables.product.prodname_enterprise %}-Lizenzdatei wiederverwenden, sofern die Testinstanz nicht für die Produktion verwendet wird.

{% endtip %}

Zum sorgfältigen Testen einer {% data variables.product.prodname_ghe_server %}-Appliance müssen Sie die externen Systeme in Betracht ziehen, die mit ihr interagieren. Zu den bei Tests zu berücksichtigenden Faktoren zählen u. a.

  - Authentifizierung, insbesondere bei Verwendung eines externen Authentifizierungsanbieters,
  - Integration in ein externes Ticketsystem,
  - Integration in einen CI-Server,
  - externe Skripts oder Software, welche die {% data variables.product.prodname_enterprise_api %} verwenden,
  - externer SMTP-Server für E-Mail-Benachrichtigungen.

1. Führen Sie mithilfe von {% data variables.product.prodname_enterprise_backup_utilities %} ein Backup Ihrer Produktionsinstanz durch. Weitere Informationen finden Sie im Abschnitt „Informationen zu {% data variables.product.prodname_enterprise_backup_utilities %}“ unter „[Backups auf Ihrer Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)“.
2. Richten Sie eine neue Instanz ein, die als Ihre Staging-Umgebung fungiert. Sie können dieselben Leitfäden zum Bereitstellen und Installieren Ihrer Testinstanz verwenden, die Sie für Ihre Produktionsinstanz verwenden. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %}-Instanz einrichten](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)“.
3. Stellen Sie Ihr Backup auf Ihrer Testinstanz wieder her. Weitere Informationen finden Sie im Abschnitt „Backup wiederherstellen“ unter „[Backups auf Ihrer Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)“.

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Weiterführende Informationen

- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
