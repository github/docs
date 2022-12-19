---
title: Informationen zur Abrechnung für Codespaces
shortTitle: About billing
intro: Sieh dir die Preise an und erfahre, wie du die {% data variables.product.prodname_codespaces %} -brechnung für deine Organisation verwalten kannst.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Billing
ms.openlocfilehash: bb2b22ce9f34122656134076d4d1e5b49b86e3ce
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381075"
---
## <a name="-data-variablesproductprodname_codespaces--pricing"></a>{% data variables.product.prodname_codespaces %} pricing

Die Nutzung von {% data variables.product.prodname_codespaces %} wird für alle Organisations- und Unternehmenskonten auf {% data variables.product.prodname_team %} und {% data variables.product.prodname_enterprise %} berechnet, die keine kostenlosen Minuten oder Speicher umfassen. Für persönliche Konten wird die Nutzung von {% data variables.product.prodname_codespaces %} derzeit nicht berechnet. 

Die Nutzung von {% data variables.product.prodname_codespaces %} wird gemäß den Maßeinheiten in der folgenden Tabelle berechnet:

| Produkt             | SKU      | Unit of measure | Preis |
| ------------------- | -------- | --------------- | ----- |
| Codespaces Compute  |  Zwei Kerne  | 1 Stunde          | 0,18 USD |
|                     |  Vier Kerne  | 1 Stunde          | 0,36 USD |
|                     |  Acht Kerne  | 1 Stunde          | 0,72 USD |
|                     |  16 Kerne | 1 Stunde          | 1,44 USD |
|                     |  32 Kerne | 1 Stunde          | 2,88 USD |
| Codespaces Storage  |  Storage | 1 GB/Monat      | 0,07 USD |

## <a name="about-billing-for--data-variablesproductprodname_codespaces-"></a>Informationen zur Abrechnung für {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

Für deine {% data variables.product.prodname_codespaces %}-Nutzung gelten das bestehende Rechnungsdatum, die Zahlungsmethode und die Quittung deines Kontos. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %} Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_codespaces %} zu aktivieren und zu bezahlen. Weitere Informationen findest du unter „[Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)“.
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### <a name="billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>Abrechnung für {% data variables.product.prodname_codespaces %}-Prebuilds


{% data reusables.codespaces.billing-for-prebuilds %} 

## <a name="setting-a-spending-limit"></a>Festlegen eines Ausgabenlimits

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Informationen zum Verwalten und Ändern des Ausgabenlimits deines Kontos findest du unter „[Verwalten des Ausgabenlimits für {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)“.

{% data reusables.codespaces.exporting-changes %}

## <a name="limiting-the-choice-of-machine-types"></a>Einschränken der Auswahl von Computertypen

Beim Erstellen eines Codespaces wird standardmäßig der Computertyp mit den geringsten gültigen Ressourcen verwendet. Benutzer können jedoch möglicherweise einen Computertyp mit mehr Ressourcen auswählen. Sie können dies beim Erstellen eines Codespaces tun, oder sie können den Computertyp eines vorhandenen Codespaces ändern. Weitere Informationen findest du unter „[Erstellen eines Codespaces](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)“ und „[Ändern des Computertyps für den Codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)“.

Wenn ein Computertyp mit mehr Ressourcen ausgewählt wird, wirkt sich dies wie oben gezeigt auf die Kosten pro Minute für diesen Codespace aus. 

Organisationsbesitzer können eine Richtlinie erstellen, um die Computertypen einzuschränken, die Benutzern zur Verfügung stehen. Weitere Informationen findest du unter [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

## <a name="how-billing-is-handled-for-forked-repositories"></a>Behandlung der Abrechnung für geforkte Repositorys

{% data variables.product.prodname_codespaces %} können nur in Organisationen verwendet werden, in denen ein Besitzer definiert wurde, für den Abrechnungen erstellt werden können. Der Organisation werden nur Gebühren berechnet, wenn der Benutzer Mitglied oder Mitarbeiter ist. Andernfalls kann er keinen Codespace erstellen. 

Ein Benutzer in einer privaten Organisation kann beispielsweise ein Repository innerhalb dieser Organisation forken und anschließend einen Codespace verwenden, der der Organisation in Rechnung gestellt wird. Dies ist der Fall, weil die Organisation der Besitzer des übergeordneten Repositorys ist, das den Zugriff des Benutzers, das geforkte Repository und den Codespace entfernen kann.
  
## <a name="how-billing-is-handled-when-a-repository-is-transferred"></a>Behandlung der Abrechnung beim Transfer eines Repositorys

Die Nutzung wird pro Stunde berechnet und gemeldet. Als solches zahlst du für jede Nutzung, wenn sich ein Repository innerhalb deiner Organisation befindet. Wenn ein Repository aus deiner Organisation transferiert wird, werden alle Codespaces in diesem Repository im Rahmen des Transfers entfernt.

## <a name="what-happens-when-users-are-removed"></a>Was geschieht, wenn Benutzer entfernt werden?

Wenn ein Benutzer aus einer Organisation oder einem Repository entfernt wird, werden seine Codespaces automatisch gelöscht. 
