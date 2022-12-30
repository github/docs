---
title: Verwalten des Ausgabenlimits für GitHub Codespaces
intro: 'Du kannst ein Ausgabenlimit für {% data variables.product.prodname_github_codespaces %} festlegen.'
shortTitle: Spending limit
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces
ms.openlocfilehash: 87dd5204bb41ddaef911562cfb4662125e04139a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160297'
---
## Informationen zum Ausgabenlimit für {% data variables.product.prodname_github_codespaces %}

{% data reusables.codespaces.codespaces-free-for-personal-intro %} Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.codespaces-spending-limit-requirement %} {% data reusables.codespaces.codespaces-monthly-billing %} 

Nachdem das Ausgabenlimit erreicht wurde, kannst du keine neuen Codespaces mehr erstellen und auch keine vorhandenen Codespaces starten. Alle vorhandenen Codespaces, die noch ausgeführt werden, werden in kurzer Zeit heruntergefahren, aber die Nutzung wird nach Erreichen des Ausgabenlimits nicht in Rechnung gestellt.

{% ifversion ghec %}
## Verwenden deines Azure-Abonnements
Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_github_codespaces %} zu aktivieren und zu bezahlen. Weitere Informationen findest du unter [Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

## Verwalten des Ausgabenlimits für {% data variables.product.prodname_github_codespaces %} für dein persönliches Konto

Du kannst ein Ausgabenlimit für die {% data variables.product.prodname_github_codespaces %} für dein eigenes persönliches Konto festlegen.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

## Verwalten des Ausgabenlimits für {% data variables.product.prodname_github_codespaces %} für dein Organisationskonto

Organisationsinhaber und Abrechnungsmanager können das Ausgabenlimit für {% data variables.product.prodname_github_codespaces %} für eine Organisation verwalten.

{% note %}

**Hinweis:** Organisationen, die sich im Besitz eines Unternehmenskontos befinden, können kein eigenes Ausgabenlimit angeben, da dies in den Unternehmenseinstellungen angegeben ist.

{% endnote %}

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Verwalten des Ausgabenlimits für {% data variables.product.prodname_github_codespaces %} für dein Unternehmenskonto

Unternehmensinhaber und Abrechnungsmanager können das Ausgabenlimit für {% data variables.product.prodname_github_codespaces %} für ein Unternehmenskonto verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Klicke auf **Ausgabenlimit**.

   ![Registerkarte „Ausgabenlimit“](/assets/images/help/settings/spending-limit-tab-enterprise.png)

{% data reusables.codespaces.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## Exportieren von Änderungen bei Erreichen des Ausgabenlimits

{% data reusables.codespaces.exporting-changes %}

## Verwalten von E-Mail-Benachrichtigungen zur Nutzung und zum Ausgabenlimit

E-Mail-Benachrichtigungen werden an Kontobesitzer und Abrechnungsmanager gesendet, wenn die Ausgaben 75 %, 90 % und 100 % des Ausgabenlimits eines Kontos erreichen. 

Du kannst diese Benachrichtigungen jederzeit deaktivieren, indem du ans untere Ende der Seite „Abrechnung und Pläne/Monatliche Ausgabenlimits“ navigierst und das Kontrollkästchen **Warnungen zu Ausgabenlimits** deaktivierst.

Nur für persönliche Konten kannst du auch E-Mail-Benachrichtigungen deaktivieren, die gesendet werden, wenn du 75 %, 90 % und 100 % der in deinem persönlichen Konto enthaltenen kostenlosen Nutzung verwendet hast. Deaktiviere hierzu das Kontrollkästchen **Warnungen für eingeschlossene Ressourcen**.

![Screenshot der Einstellungen für E-Mail-Benachrichtigungen zur Abrechnung](/assets/images/help/codespaces/codespaces-spending-limit-notifications.png)

## Weiterführende Themen

- [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
- [Verwalten der Kosten von {% data variables.product.prodname_github_codespaces %} in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
