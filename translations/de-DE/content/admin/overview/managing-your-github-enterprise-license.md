---
title: Deine Lizenz für GitHub Enterprise verwalten
intro: 'Du kannst Deine {% data variables.product.prodname_enterprise %}-Lizenz anzeigen, verwalten und aktualisieren.'
redirect_from:
  - /enterprise/admin/installation/managing-your-github-enterprise-license
  - /enterprise/admin/categories/licenses/
  - /enterprise/admin/articles/license-files/
  - /enterprise/admin/installation/about-license-files/
  - /enterprise/admin/articles/downloading-your-license/
  - /enterprise/admin/installation/downloading-your-license/
  - /enterprise/admin/articles/upgrading-your-license/
  - /enterprise/admin/installation/updating-your-license/
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/overview/managing-your-github-enterprise-license
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Informationen zu {% data variables.product.prodname_enterprise %}-Lizenzen

Wenn Sie {% data variables.product.prodname_enterprise %} kaufen oder verlängern, erhalten Sie eine Lizenzdatei zum Validieren Ihrer Anwendung. Eine Lizenzdatei hat ein Ablaufdatum und bestimmt die Anzahl der Benutzerlizenzen, die Du auf {% data variables.product.prodname_enterprise %} hinzufügen kannst. Nachdem Sie {% data variables.product.prodname_enterprise %} heruntergeladen und installiert haben, wird die Anwendung durch das Hochladen der Lizenzdatei zu Ihrer Verwendung entsperrt. For more information about downloading {% data variables.product.prodname_enterprise %}, see the [{% data variables.product.prodname_enterprise %} Releases](https://enterprise.github.com/releases/) website. For information about setting up {% data variables.product.product_location %}, see "[Setting up a {% data variables.product.prodname_enterprise %} instance](/admin/installation/setting-up-a-github-enterprise-server-instance)."


Du kannst die in Deiner {% data variables.product.prodname_enterprise %}-Lizenz enthaltene Lizenz Benutzern in {% data variables.product.product_location_enterprise %} und einem {% data variables.product.prodname_ghe_cloud %}-Unternehmenskonto zuordnen. Wenn Sie einen Benutzer zu einer der Umgebungen hinzufügen, nimmt er eine Lizenz in Anspruch. Wenn ein Benutzer Konten in beiden Umgebungen hat, muss Deine primäre E-Mail-Adresse in {% data variables.product.prodname_enterprise %} die gleiche sein wie Deine verifizierte E-Mail-Adresse in {% data variables.product.prodname_ghe_cloud %}, um nur eine Lizenz zu verwenden. Du kannst die Anzahl und Nutzung der Lizenzen zwischen den Umgebungen synchronisieren.

Wenn Ihre {% data variables.product.prodname_ghe_server %}-Lizenz abläuft, ist es Ihnen nicht möglich, über einen Webbrowser oder Git auf {% data variables.product.product_location_enterprise %} zuzugreifen. Bei Bedarf können Sie Befehlszeilenprogramme zum Sichern Ihrer gesamten Daten verwenden. Weitere Informationen finden Sie unter „[Backups auf Ihrer Appliance konfigurieren](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)“. Wenn Du Fragen zur Erneuerung Deiner Lizenz hast, kontaktiere {% data variables.contact.contact_enterprise_sales %}.

You can download your {% data variables.product.prodname_ghe_server %} license from your [enterprise account](https://enterprise.github.com/download). Weitere Informationen findest Du unter „[Deine {% data variables.product.prodname_enterprise %}-Lizenz verwalten](/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server).“

### Neue Lizenz auf {% data variables.product.prodname_ghe_server %} hochladen


Nach dem Kauf einer neuen Lizenz oder einem Upgrade einer bestehenden Lizenz von {% data variables.contact.contact_enterprise_sales %} musst Du Deine neue Lizenzdatei herunterladen und dann die Datei auf {% data variables.product.prodname_ghe_server %} hochladen, um Deine neuen Benutzerlizenzen zu entsperren.

Wenn Du Benutzerlizenzen erneuern oder zu {% data variables.product.prodname_enterprise %} hinzufügen möchtest, kontaktiere {% data variables.contact.contact_enterprise_sales %}. Ihre neue Lizenzdatei steht sofort nach dem Abschluss Ihrer Bestellung zum Download zur Verfügung.

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. Klicke in der linken Seitenleiste auf **Enterprise licensing** (Enterprise-Lizenzierung). !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Under "Enterprise Server Instances", click {% octicon "download" aria-label="The download icon" %} to download your license file. ![GitHub Enterprise Server-Lizenz herunterladen](/assets/images/help/business-accounts/download-ghes-license.png)
5. Log into your
{% data variables.product.prodname_ghe_server %} instance as a site administrator.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
12. Klicken Sie unter „Quick links“ (Schnellzugriff) auf **Update license** (Lizenz aktualisieren). ![Lizenz-Link aktualisieren](/assets/images/enterprise/business-accounts/update-license-link.png)
13. Klicke zum Auswählen Deiner Lizenz auf **Lizenzdatei** oder ziehe Deine Lizenzdatei auf **Lizenzdatei**. ![Lizenzdatei hochladen](/assets/images/enterprise/management-console/upload-license.png)
14. Klicke **Upload**. ![Begin upload](/assets/images/enterprise/management-console/begin-upload.png)

{% if enterpriseVersion ver_lt "enterprise-server@3.0" %}If the web UI for {% data variables.product.prodname_ghe_server %} doesn't reflect your updated license immediately, see "[Troubleshooting](#troubleshooting)."{% endif %}

### Lizenznutzung anzeigen

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. Klicke in der linken Seitenleiste auf **Enterprise licensing** (Enterprise-Lizenzierung). !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Überprüfe Deine aktuelle {% data variables.product.prodname_enterprise %}-Lizenz sowie verbrauchte und verfügbare Benutzerlizenzen. {% if currentVersion ver_gt "enterprise-server@3.0" %}If your license includes {% data variables.product.prodname_GH_advanced_security %}, you can review your total seat use as well as a per-organization breakdown of committers. For more information, see "[Managing {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security)."{% endif %}

### Nutzung der Benutzerlizenzen mit {% data variables.product.prodname_ghe_cloud %} automatisch synchronisieren

Mithilfe von {% data variables.product.prodname_github_connect %} können Sie die Anzahl und Nutzung der Benutzerlizenzen automatisch zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} synchronisieren. Weitere Informationen finden Sie unter „[Automatische Synchronisierung von Benutzerlizenzen zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} aktivieren](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)“.

### Manuelle Synchronisierung der Benutzerlizenz-Nutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}

Auf {% data variables.product.prodname_ghe_server %} können Sie eine JSON-Datei herunterladen und die Datei auf {% data variables.product.prodname_ghe_cloud %} hochladen, um die Nutzung der Benutzerlizenzen zwischen den zwei Bereitstellungen manuell zu synchronisieren.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Under "Quick links", to download a file containing your current license usage on
{% data variables.product.prodname_ghe_server %}, click **Export license usage**.
  ![Link zum Exportieren der Lizenznutzung](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. Klicke in der linken Seitenleiste auf **Enterprise licensing** (Enterprise-Lizenzierung). !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. Klicke unter "Enterprise Server-Instanzen" auf **Servernutzung hinzufügen**. ![Link zum Hochladen der GitHub Enterprise Server-Nutzung](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Laden Sie die JSON-Datei hoch, die Sie von {% data variables.product.prodname_ghe_server %} heruntergeladen haben.![„Drag and drop or select a file to upload“ (Hochzuladende Datei per Drag-and-Drop auswählen oder suchen)](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)

{% if currentVersion ver_lt "enterprise-server@3.0" %}

### Problemlösungen

In some scenarios, the web UI for {% data variables.product.prodname_ghe_server %} may not immediately reflect your new license. You can force the system to detect the license by restarting two system services.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Restart the services for Git authentication and the HTTP server.

    {% warning %}

    **Warning**: Running the following command will result in a few minutes of user-facing downtime for {% data variables.product.prodname_ghe_server %}. Run the command with care.

    {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
1. After {% data variables.product.prodname_ghe_server %} returns you to a prompt, try accessing {% data variables.product.prodname_ghe_server %} via the command line or web UI again.

{% endif %}
