---
title: Ein Ticket einreichen
intro: 'You can submit a support ticket using the {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} or{% endif %} the support portal.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Support
---
### Informationen zum Absenden eines Tickets

Bevor Sie ein Ticket absenden, sollten Sie hilfreiche Informationen für den {% data variables.contact.github_support %} sammeln und einen Ansprechpartner auswählen. Weitere Informationen finden Sie unter „[Absenden eines Tickets vorbereiten](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)“.

{% if enterpriseServerVersions contains currentVersion %}
After submitting your support request and optional diagnostic information,
{% data variables.contact.github_support %} may ask you to download and share a support bundle with us. Weitere Informationen finden Sie unter „[Daten für den {% data variables.contact.github_support %} bereitstellen](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)“.

### Ticket über das {% data variables.contact.enterprise_portal %} einreichen

1. Rufen Sie das {% data variables.contact.contact_enterprise_portal %} auf.
5. Klicke auf **Submit a Ticket** (Ticket einreichen) ![Ein Ticket beim Enterprise-Support-Team einreichen](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Ein Ticket über Dein Firmenkonto einreichen

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. Klicke in der linken Seitenleiste auf **Enterprise licensing** (Enterprise-Lizenzierung). !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Klicke unter „{% data variables.product.prodname_enterprise %} Help“ (Hilfe für {% data variables.product.prodname_enterprise %}), auf **{% data variables.contact.enterprise_support %} Portal**. ![Link zum Navigieren zur Enterprise-Support-Seite](/assets/images/enterprise/support/enterprise-support-link.png)
5. Klicke auf **Submit a Ticket** (Ticket einreichen) ![Ein Ticket beim Enterprise-Support-Team einreichen](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Ticket über die {% data variables.product.product_name %}-{% data variables.enterprise.management_console %} absenden

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. Wenn Sie die Diagnose in Ihr Supportticket aufnehmen möchten, klicken Sie unter „Diagnostics“ (Diagnose) auf **Download diagnostic info** (Diagnoseinformationen herunterladen) und speichern Sie die Datei lokal ab. Die Datei können Sie später an Ihr Supportticket anhängen. ![Schaltfläche zum Herunterladen der Diagnoseinformationen](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. Klicken Sie unter „Open Support Request“ (Supportanfrage erstellen) auf **New support request** (Neue Supportanfrage). ![Schaltfläche zum Erstellen einer Supportanfrage](/assets/images/enterprise/management-console/open-support-request.png)
5. Klicke auf **Submit a Ticket** (Ticket einreichen) ![Ein Ticket beim Enterprise-Support-Team einreichen](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
14. Um die Diagnose in Ihr Supportticket aufzunehmen, klicken Sie auf **Add file** (Datei hinzufügen) und hängen Sie dann die von Ihnen heruntergeladene Diagnosedatei an. ![Schaltfläche „Add file“ (Datei hinzufügen)](/assets/images/enterprise/support/support-ticket-add-file.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}
7. Klicke auf **Submit** (Einreichen).

{% endif %}
{% if currentVersion == "github-ae@latest" %}
### Ticket über das {% data variables.contact.ae_azure_portal %} absenden

Commercial customers can submit a support request in the {% data variables.contact.contact_ae_portal %}. Government customers should use the [Azure portal for government customers](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). For more information, see [Create an Azure support request](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) in the Microsoft documentation.

{% endif %}

### Weiterführende Informationen

- "[About {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[About {% data variables.contact.premium_support %} for {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."{% endif %}
