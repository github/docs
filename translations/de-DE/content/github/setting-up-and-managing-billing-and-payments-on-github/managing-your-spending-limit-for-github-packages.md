---
title: Dein Ausgabenlimit für GitHub Packages verwalten
intro: 'Du kannst ein Ausgabenlimit für {% data variables.product.prodname_registry %} festlegen.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### Über Ausgabenlimits für {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

Du kannst ein höheres Ausgabenlimit festlegen oder für einige Konten unbegrenzte Ausgaben zulassen. Wenn Du für Deine Organisation oder Dein Enterprise-Konto per Rechnung bezahlst, kannst Du für Überschreitungen im Voraus bezahlen, um ein höheres Ausgabenlimit festzulegen. Das Ausgabenlimit gilt für deine kombinierten Überschreitungen für {% data variables.product.prodname_registry %} und {% data variables.product.prodname_actions %}. Weitere Informationen zur Preisgestaltung für {% data variables.product.prodname_registry %}-Nutzung findest du unter „[Über die Abrechnung für {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

Sobald Du ein Ausgabenlimit von über 0 $ gesetzt hast, bist Du für alle Überschreitungen verantwortlich, die in der Vergangenheit aufgetreten sind. Wenn Dein Unternehmen beispielsweise {% data variables.product.prodname_team %} verwendet, keine Überschreitungen zulässt, und Workflow-Artefakte erstellt, die Deinen Speicherverbrauch für den Monat von 1,9 GB auf 2,1 GB erhöht, wird die Veröffentlichung leicht mehr Speicher als die 2 GB nutzen, die Dein Produkt enthält.

Da Du keine Überschreitungen zugelassen hast, wird Dein nächster Versuch, eine Version des Pakets zu veröffentlichen, fehlschlagen. Du wirst keine Rechnung für die Überschreitung um 0,1 GB für diesen Monat erhalten. Wenn Du jedoch Überschreitungen in einem zukünftigen Monat aktivierst, wird Deine erste Rechnung die 0,1 GB Überschreitung der Vergangenheit enthalten, zusätzlich zu allen Überschreitungen für den aktuellen Abrechnungszeitraum.

### Das Ausgabenlimit für {% data variables.product.prodname_registry %} für Dein Benutzerkonto verwalten

Jeder kann das Ausgabenlimit für {% data variables.product.prodname_registry %} für sein eigenes Benutzerkonto verwalten.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Das Ausgabenlimit für {% data variables.product.prodname_registry %} für Deine Organisation verwalten

Organisationsinhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_registry %} für eine Organisation verwalten.

Wenn Du Dein Organisationskonto per Rechnung bezahlst, kannst Du das Ausgabenlimit für dieses Konto auf {% data variables.product.product_name %} nicht verwalten. Wenn Du Repositorys im Besitz Deiner Organisation erlauben willst, {% data variables.product.prodname_registry %} über die in ihren Konten enthaltenen Speicher oder Datenübertragungen hinaus zu benutzen, kannst Du für Überschreitungen im Voraus bezahlen. Da Überschreitungen im Voraus bezahlt werden müssen, kannst Du keine unbegrenzten Ausgaben für Konten aktivieren, die per Rechnung bezahlt werden. Dein Ausgabenlimit beträgt 150 % des Betrags, den Du im Voraus bezahlt hast. Wenn Du Fragen hast, [wende Dich an unser Kundendienstteam](https://enterprise.github.com/contact).

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Das Ausgabenlimit für {% data variables.product.prodname_registry %} für Dein Enterprise-Konto verwalten

Enterprise-Inhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_registry %} für ein Enterprise-Konto verwalten.

{% data reusables.package_registry.spending-limit-enterprise-account %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Under "
{% data variables.product.prodname_actions %} and Packages monthly usage", click **Cost management**.
  ![Registerkarte „Cost Management" (Kostenverwaltung)](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
