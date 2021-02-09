---
title: Abonnement und Nutzung für Dein Enterprise-Konto anzeigen
intro: 'Du kannst das aktuelle Abonnement, die Lizenznutzung, die Rechnungen, den Zahlungsverlauf und andere Abrechnungsinformationen für Dein Enterprise-Konto anzeigen.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise-Inhaber und Abrechnungsmanager können auf alle Abrechnungseinstellungen für Enterprise-Konen zugreifen und diese verwalten.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zur Abrechnung für Enterprise-Konten

Enterprise-Konten sind derzeit für {% data variables.product.prodname_enterprise %}-Kunden verfügbar, die per Rechnung bezahlen. Die Abrechnung für alle Organisationen und {% data variables.product.prodname_ghe_server %}-Instanzen, die mit Deinem Enterprise-Konto verbunden sind, wird in eine einzige Rechnung für alle Deine bezahlten {% data variables.product.prodname_dotcom_the_website %}-Dienste zusammengefasst (inklusive bezahlte Lizenzen in Organisationen, {% data variables.large_files.product_name_long %}-Datenpakete und Abonnements für {% data variables.product.prodname_marketplace %}-Apps).

For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

### Abonnement und Nutzung für Dein Enterprise-Konto anzeigen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "User
{% if currentVersion == "free-pro-team@latest" %}Licenses{% else %}licenses{% endif %}", view your total licenses, number of consumed licenses, and your subscription expiration date.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Lizenz- und Abonnementinformationen in Enterprise-Abrechnungseinstellungen](/assets/images/enterprise/enterprises/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a {% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} file with license details{% if currentVersion == "free-pro-team@latest" %}, to the right of "User Licenses"{% endif %}, click **View {% if currentVersion == "free-pro-team@latest" %}details{% elsif enterpriseServerVersions contains currentVersion %}users{% endif %}** or {% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Export license usage**{% endif %}.{% if currentVersion == "free-pro-team@latest" %} !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
