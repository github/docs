---
title: Dein Ausgabenlimit für GitHub Packages verwalten
intro: 'Du kannst ein Ausgabenlimit für {{ site.data.variables.product.prodname_registry }} festlegen.'
product: '{{ site.data.reusables.gated-features.packages }}'
versions:
  free-pro-team: '*'
---

### Über Ausgabenlimits für {{ site.data.variables.product.prodname_registry }}

{{ site.data.reusables.package_registry.packages-billing }}

Du kannst ein höheres Ausgabenlimit festlegen oder für einige Konten unbegrenzte Ausgaben zulassen. Wenn Du für Deine Organisation oder Dein Enterprise-Konto per Rechnung bezahlst, kannst Du für Überschreitungen im Voraus bezahlen, um ein höheres Ausgabenlimit festzulegen. Das Ausgabenlimit gilt für deine kombinierten Überschreitungen für {{ site.data.variables.product.prodname_registry }} und {{ site.data.variables.product.prodname_actions }}. Weitere Informationen zur Preisgestaltung für {{ site.data.variables.product.prodname_registry }}-Nutzung findest du unter „[Über die Abrechnung für {{ site.data.variables.product.prodname_registry }}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

Sobald Du ein Ausgabenlimit von über 0 $ gesetzt hast, bist Du für alle Überschreitungen verantwortlich, die in der Vergangenheit aufgetreten sind. Wenn Dein Unternehmen beispielsweise {{ site.data.variables.product.prodname_team }} verwendet, keine Überschreitungen zulässt, und Workflow-Artefakte erstellt, die Deinen Speicherverbrauch für den Monat von 1,9 GB auf 2,1 GB erhöht, wird die Veröffentlichung leicht mehr Speicher als die 2 GB nutzen, die Dein Produkt enthält.

Da Du keine Überschreitungen zugelassen hast, wird Dein nächster Versuch, eine Version des Pakets zu veröffentlichen, fehlschlagen. Du wirst keine Rechnung für die Überschreitung um 0,1 GB für diesen Monat erhalten. Wenn Du jedoch Überschreitungen in einem zukünftigen Monat aktivierst, wird Deine erste Rechnung die 0,1 GB Überschreitung der Vergangenheit enthalten, zusätzlich zu allen Überschreitungen für den aktuellen Abrechnungszeitraum.

### Das Ausgabenlimit für {{ site.data.variables.product.prodname_registry }} für Dein Benutzerkonto verwalten

Jeder kann das Ausgabenlimit für {{ site.data.variables.product.prodname_registry }} für sein eigenes Benutzerkonto verwalten.

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.user_settings.cost-management-tab }}
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}

### Das Ausgabenlimit für {{ site.data.variables.product.prodname_registry }} für Deine Organisation verwalten

Organisationsinhaber und Abrechnungsmanager können das Ausgabenlimit von {{ site.data.variables.product.prodname_registry }} für eine Organisation verwalten.

Wenn Du Dein Organisationskonto per Rechnung bezahlst, kannst Du das Ausgabenlimit für Dein Enterprise-Konto auf {{ site.data.variables.product.product_name }} nicht verwalten. Wenn Du Repositorys im Besitz Deiner Organisation erlauben willst, {{ site.data.variables.product.prodname_registry }} über die in ihren Konten enthaltenen Speicher oder Datenübertragungen hinaus zu benutzen, kannst Du für Überschreitungen im Voraus bezahlen. Da Überschreitungen im Voraus bezahlt werden müssen, kannst Du keine unbegrenzten Ausgaben für Konten aktivieren, die per Rechnung bezahlt werden. Dein Ausgabenlimit beträgt 150 % des Betrags, den Du im Voraus bezahlt hast. Wenn Du Fragen hast, [wende Dich an unser Kundendienstteam](https://enterprise.github.com/contact).

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.cost-management-tab }}
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}

### Das Ausgabenlimit für {{ site.data.variables.product.prodname_registry }} für Dein Enterprise-Konto verwalten

Enterprise-Inhaber und Abrechnungsmanager können das Ausgabenlimit von {{ site.data.variables.product.prodname_registry }} für ein Enterprise-Konto verwalten.

{{ site.data.reusables.package_registry.spending-limit-enterprise-account }}

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.billing-tab }}
1. Unter „Monatliche Nutzung von {{ site.data.variables.product.prodname_actions }} und Paketen" klicke auf **Cost management** (Kostenmanagement). ![Registerkarte „Cost Management" (Kostenverwaltung)](/assets/images/help/settings/cost-management-tab-enterprise.png)
{{ site.data.reusables.dotcom_billing.monthly-spending-limit }}
{{ site.data.reusables.dotcom_billing.update-spending-limit }}
