---
title: Verwalten Ihres Ausgabenlimits für GitHub Actions
intro: 'Du kannst ein Ausgabenlimit für {% data variables.product.prodname_actions %} festlegen.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Organizations
  - Spending limits
  - User account
shortTitle: Spending limits for Actions
ms.openlocfilehash: c1bd595a866b9e48fa4e82ebe93718328514fad9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085804'
---
## Über Ausgabenlimits für {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} Weitere Informationen zu den Preisen für die Nutzung von {% data variables.product.prodname_actions %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

{% ifversion ghec %} Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_actions %} über die im Konto enthaltenen Beträge hinaus zu aktivieren und zu bezahlen. Weitere Informationen findest du unter [Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

Sobald du ein anderes Ausgabenlimit als 0 $ festlegst, bist du für alle vorhandenen Überschreitungen im aktuellen Abrechnungszeitraum verantwortlich. Wenn Dein Unternehmen beispielsweise {% data variables.product.prodname_team %} verwendet, keine Überschreitungen zulässt, und Workflow-Artefakte erstellt, die Deinen Speicherverbrauch für den Monat von 1,9 GB auf 2,1 GB erhöht, wirst Du leicht mehr Speicher als die 2 GB nutzen, die Dein Produkt enthält.

Da du keine Überschreitungen aktiviert hast, schlägt dein nächster Versuch, ein Workflowartefakt zu erstellen, fehl. Du wirst keine Rechnung für die Überschreitung um 0,1 GB für diesen Monat erhalten. Wenn du jedoch Überschreitungen aktivierst, enthält deine erste Rechnung die 0,1 GB Überschreitung des aktuellen Abrechnungszeitraums sowie alle weiteren hinzukommenden Überschreitungen.

## Verwalten des Ausgabenlimits für {% data variables.product.prodname_actions %} für dein persönliches Konto

Jeder Benutzer kann das Ausgabenlimit für {% data variables.product.prodname_actions %} für sein eigenes persönliches Konto verwalten.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## Das Ausgabenlimit für {% data variables.product.prodname_actions %} für Deine Organisation verwalten

Organisationsinhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_actions %} für eine Organisation verwalten.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Das Ausgabenlimit für {% data variables.product.prodname_actions %} für Dein Enterprise-Konto verwalten

Enterprise-Inhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_actions %} für ein Enterprise-Konto verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Klicke oberhalb von „Monatliche Nutzung von {% data variables.product.prodname_actions %} und Paketen“ auf **Ausgabenlimit**.
  ![Registerkarte „Ausgabenlimit“](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Verwalten von E-Mail-Benachrichtigungen zur Nutzung und zum Ausgabenlimit
{% data reusables.billing.email-notifications %}
