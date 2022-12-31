---
title: Verwalten von Ausgabenlimits für Codespaces
intro: Du kannst ein Ausgabenlimit für {% data variables.product.prodname_codespaces %} festlegen.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Enterprise
- Organizations
- Spending limits
- User account
- Billing
shortTitle: Spending limits
ms.openlocfilehash: 340dae657304e5a2c9fb31d3a205e0b45f47a7b5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145085784"
---
## <a name="about-spending-limits-for--data-variablesproductprodname_codespaces-"></a>Informationen zu Ausgabenlimits für {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Nachdem das Ausgabenlimit erreicht wurde, kann deine Organisation oder dein Repository keine neuen Codespaces mehr erstellen und auch keine vorhandenen Codespaces starten. Alle vorhandenen Codespaces, die noch ausgeführt werden, werden nicht heruntergefahren. Wenn du das Ausgabenlimit nicht änderst, wird dir der Betrag, der das Limit überschreitet, nicht in Rechnung gestellt.

Weitere Informationen zu den Preisen für die Nutzung von {% data variables.product.prodname_codespaces %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces).

{% ifversion ghec %}
## <a name="using-your-azure-subscription"></a>Verwenden deines Azure-Abonnements
Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_codespaces %} zu aktivieren und zu bezahlen. Weitere Informationen findest du unter [Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-organization"></a>Verwalten des Ausgabenlimits für {% data variables.product.prodname_codespaces %} für deine Organisation

Organisationsinhaber und Abrechnungsmanager können das Ausgabenlimit für {% data variables.product.prodname_codespaces %} für eine Organisation verwalten.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.manage-spending-limit %} {% data reusables.dotcom_billing.monthly-spending-limit-codespaces %} {% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## <a name="managing-the-spending-limit-for--data-variablesproductprodname_codespaces--for-your-enterprise-account"></a>Verwalten des Ausgabenlimits für {% data variables.product.prodname_codespaces %} für dein Unternehmenskonto

Unternehmensinhaber und Abrechnungsmanager können das Ausgabenlimit für {% data variables.product.prodname_codespaces %} für ein Unternehmenskonto verwalten.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Klicke oberhalb von „Monatliche Nutzung von {% data variables.product.prodname_codespaces %}“ auf **Ausgabenlimit**.
  ![Registerkarte „Ausgabenlimit“](/assets/images/help/settings/spending-limit-tab-enterprise.png) {% data reusables.dotcom_billing.monthly-spending-limit %} {% data reusables.dotcom_billing.update-spending-limit %} {% endif %}

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Exportieren von Änderungen bei Erreichen des Ausgabenlimits

{% data reusables.codespaces.exporting-changes %}
## <a name="managing-usage-and-spending-limit-email-notifications"></a>Verwalten von E-Mail-Benachrichtigungen zur Nutzung und zum Ausgabenlimit

E-Mail-Benachrichtigungen werden an Kontobesitzer und Abrechnungsmanager gesendet, wenn die Ausgaben 50 %, 75 %, 90 % und 100 % des Ausgabenlimits deines Kontos erreichen. 

Du kannst diese Benachrichtigungen jederzeit deaktivieren, indem du zum Ende der Seite **Ausgabenlimit** navigierst.

![Screenshot der Einstellungen für E-Mail-Benachrichtigungen zur Abrechnung](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## <a name="further-reading"></a>Weitere Informationsquellen

- [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)
- [Verwalten der Abrechnung für Codespaces in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
