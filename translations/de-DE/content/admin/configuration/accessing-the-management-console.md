---
title: Accessing the management console
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console/
  - /enterprise/admin/articles/management-console-for-emergency-recovery/
  - /enterprise/admin/articles/web-based-management-console/
  - /enterprise/admin/categories/management-console/
  - /enterprise/admin/articles/accessing-the-management-console/
  - /enterprise/admin/guides/installation/web-based-management-console/
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
---

### Informationen zur {% data variables.enterprise.management_console %}

{% data variables.enterprise.management_console %} für grundlegende Verwaltungsaktivitäten verwenden:
- **Initial setup** (Ersteinrichtung): Durchlaufen Sie beim ersten Start von {% data variables.product.product_location %} den Ersteinrichtungsprozess. Rufen Sie dazu in Ihrem Browser die IP-Adresse Ihrer {% data variables.product.product_location %} auf.
- **Configuring basic settings for your instance** (Grundlegende Einstellungen für Ihre Instanz konfigurieren): Auf der Seite „Settings“ (Einstellungen) können Sie DNS, den Hostnamen, SSL, die Benutzerauthentifizierung, E-Mail, Überwachungsdienste und die Protokollweiterleitung konfigurieren.
- **Scheduling maintenance windows**: Take {% data variables.product.product_location %} offline while performing maintenance using the {% data variables.enterprise.management_console %} or administrative shell.
- **Troubleshooting** (Fehlerbehebung): Generieren Sie ein Support-Bundle, oder zeigen Sie allgemeine Diagnoseinformationen an.
- **License management** (Lizenzverwaltung): Zeigen Sie Ihre {% data variables.product.prodname_enterprise %}-Lizenz an, oder aktualisieren Sie sie.

Sie können jederzeit mithilfe der IP-Adresse von {% data variables.product.product_location %} auf die {% data variables.enterprise.management_console %} zugreifen, selbst wenn sich die Instanz im Wartungsmodus befindet oder wenn ein kritischer Anwendungsfehler oder eine falsche Hostnamen- oder SSL-Konfiguration vorliegt.

Verwenden Sie das während der Ersteinrichtung von {% data variables.product.product_location %} festgelegte Administratorpasswort, um auf die {% data variables.enterprise.management_console %} zuzugreifen. Zudem müssen Sie auf Port 8443 eine Verbindung zum Host der virtuellen Maschine herstellen können. Wenn Sie Probleme haben, auf {% data variables.enterprise.management_console %} zuzugreifen, sollten Sie die Konfigurationen für die Zwischenfirewall und für die Sicherheitsgruppe überprüfen.

### Auf die {% data variables.enterprise.management_console %} als ein Websiteadministrator zugreifen

The first time that you access the {% data variables.enterprise.management_console %} as a site administrator, you must upload your {% data variables.product.prodname_enterprise %} license file to authenticate into the app. For more information, see "[Managing your {% data variables.product.prodname_enterprise %} license](/enterprise/{{ currentVersion }}/admin/guides/installation/managing-your-github-enterprise-license)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}

### Auf die {% data variables.enterprise.management_console %} als ein nicht authentifizierter Benutzer zugreifen

1. Besuchen Sie diese URL in Ihrem Browser, und ersetzen Sie `hostname` durch Ihren tatsächlichen {% data variables.product.prodname_ghe_server %}-Hostnamen oder durch Ihre tatsächliche -IP-Adresse.
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

### {% data variables.enterprise.management_console %} nach fehlerhaften Anmeldeversuchen entsperren

Die {% data variables.enterprise.management_console %} wird nach zehn fehlerhaften Anmeldeversuchen gesperrt, die in der Zeitspanne von zehn Minuten vorgenommen wurden. Sie müssen auf die automatische Entsperrung des Anmeldebildschirms warten, bevor Sie versuchen können, sich erneut anzumelden. Der Anmeldebildschirm wird automatisch entsperrt, wenn im Zeitraum der letzten zehn Minuten weniger als zehn fehlerhafte Anmeldeversuche vorlagen. Der Zähler wird nach einer erfolgreichen Anmeldung zurückgesetzt.

Führen Sie an der Verwaltungsshell den Befehl `ghe-reactivate-admin-login` aus, um die {% data variables.enterprise.management_console %} sofort zu entsperren. Weitere Informationen finden Sie unter „[Befehlszeilenprogramme](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)“ und „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)“.
