---
title: Dein Ausgabenlimit für GitHub Packages verwalten
intro: 'Du kannst ein Ausgabenlimit für {% data variables.product.prodname_registry %} festlegen.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - Packages
  - Spending limits
  - User account
shortTitle: Your spending limit
ms.openlocfilehash: 0919283804124e2e925793dd3d4969b80f46ed30
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884149'
---
## Über Ausgabenlimits für {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %}

{% data reusables.actions.actions-packages-set-spending-limit %} Weitere Informationen zu den Preisen für die Nutzung von {% data variables.product.prodname_registry %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% ifversion ghec %} Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_registry %} über die im Konto enthaltenen Beträge hinaus zu aktivieren und zu bezahlen. Weitere Informationen findest du unter [Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

Sobald du ein anderes Ausgabenlimit als 0 $ festlegst, bist du für alle vorhandenen Überschreitungen im aktuellen Abrechnungszeitraum verantwortlich. Wenn Dein Unternehmen beispielsweise {% data variables.product.prodname_team %} verwendet, keine Überschreitungen zulässt, und Workflow-Artefakte erstellt, die Deinen Speicherverbrauch für den Monat von 1,9 GB auf 2,1 GB erhöht, wird die Veröffentlichung leicht mehr Speicher als die 2 GB nutzen, die Dein Produkt enthält.

Da Du keine Überschreitungen zugelassen hast, wird Dein nächster Versuch, eine Version des Pakets zu veröffentlichen, fehlschlagen. Du wirst keine Rechnung für die Überschreitung um 0,1 GB für diesen Monat erhalten. Wenn du jedoch Überschreitungen aktivierst, enthält deine erste Rechnung die 0,1 GB Überschreitung des aktuellen Abrechnungszeitraums sowie alle weiteren hinzukommenden Überschreitungen.

## Verwalten des Ausgabenlimits für {% data variables.product.prodname_registry %} für dein persönliches Konto

Jeder Benutzer kann das Ausgabenlimit für {% data variables.product.prodname_registry %} für sein eigenes persönliches Konto verwalten.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %}

## Das Ausgabenlimit für {% data variables.product.prodname_registry %} für Deine Organisation verwalten

Organisationsinhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_registry %} für eine Organisation verwalten.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-actions-packages %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Das Ausgabenlimit für {% data variables.product.prodname_registry %} für Dein Enterprise-Konto verwalten

Enterprise-Inhaber und Abrechnungsmanager können das Ausgabenlimit von {% data variables.product.prodname_registry %} für ein Enterprise-Konto verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Klicke oberhalb von „Monatliche Nutzung von {% data variables.product.prodname_actions %} und Paketen“ auf **Ausgabenlimit**.
  ![Registerkarte „Ausgabenlimit“](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Verwalten von E-Mail-Benachrichtigungen zur Nutzung und zum Ausgabenlimit
{% data reusables.billing.email-notifications %}
