---
title: Syncing license usage between GitHub Enterprise Server and GitHub Enterprise Cloud
intro: 'You can sync license usage from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} to view all license usage across your enterprise in one place and ensure that people with accounts in both environments only consume one user license.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
---

## About synchronization of license usage

{% data reusables.enterprise-licensing.about-license-sync %}

If you allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can sync license usage between your enterprise accounts automatically. Automatic synchronization ensures that you see up-to-date license details on {% data variables.product.prodname_dotcom_the_website %}. If you don't want to allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can manually sync license usage by uploading a file from {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}.

For more information about licenses and usage for {% data variables.product.prodname_ghe_server %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

## Automatically syncing license usage

Mithilfe von {% data variables.product.prodname_github_connect %} können Sie die Anzahl und Nutzung der Benutzerlizenzen automatisch zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} synchronisieren. Weitere Informationen finden Sie unter „[Automatische Synchronisierung von Benutzerlizenzen zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} aktivieren](/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)“.

## Manually syncing license usage

Auf {% data variables.product.prodname_ghe_server %} können Sie eine JSON-Datei herunterladen und die Datei auf {% data variables.product.prodname_ghe_cloud %} hochladen, um die Nutzung der Benutzerlizenzen zwischen den zwei Bereitstellungen manuell zu synchronisieren.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Klicken Sie unter „Quick links“ (Schnellzugriff) auf **Export license usage** (Lizenznutzung exportieren), um eine Datei herunterzuladen, in der Ihre aktuelle Lizenznutzung auf {% data variables.product.prodname_ghe_server %} enthalten ist. ![Link zum Exportieren der Lizenznutzung](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. Klicke in der linken Seitenleiste auf **Enterprise licensing** (Enterprise-Lizenzierung). !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. Klicke unter "Enterprise Server-Instanzen" auf **Servernutzung hinzufügen**. ![Link zum Hochladen der GitHub Enterprise Server-Nutzung](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Laden Sie die JSON-Datei hoch, die Sie von {% data variables.product.prodname_ghe_server %} heruntergeladen haben.![„Drag and drop or select a file to upload“ (Hochzuladende Datei per Drag-and-Drop auswählen oder suchen)](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
