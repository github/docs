---
title: "Anzeigen deiner GitHub\_Copilot-Nutzung"
intro: 'Du kannst dir ansehen, wie viele Benutzer in allen Organisationen deines Unternehmens Zugriff auf {% data variables.product.prodname_copilot %} haben.'
product: '{% data reusables.gated-features.copilot-billing %}'
miniTocMaxHeadingLevel: 3
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_copilot %} in their enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
shortTitle: View your usage
ms.openlocfilehash: 9b481cfd11a3c96ce98175d3b30e3b26889c4148
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193288'
---
## Informationen zu deiner {% data variables.product.prodname_copilot %}-Nutzung

Du kannst dir Nutzungsinformationen für {% data variables.product.prodname_copilot %} ansehen – entweder für dein Unternehmen (aufgeschlüsselt nach Organisation) oder für deine Organisation (aufgeschlüsselt nach Status der Arbeitsplatzzuweisung). Auf Unternehmensebene umfassen diese Informationen die Anzahl der in den einzelnen Organisationen zugewiesenen Arbeitsplätze sowie die Gesamtausgaben für die einzelnen Organisationen im aktuellen Abrechnungszyklus. Auf Organisationsebene umfassen diese Informationen die Gesamtanzahl von Arbeitsplätzen, die aus dem vorherigen Abrechnungszyklus übernommenen Arbeitsplätze, die während des aktuellen Zyklus hinzugefügten neuen Arbeitsplätze und die am Ende des aktuellen Zyklus zu entfernenden Arbeitsplätze. 

Wenn ein Organisationsadministrator während des aktuellen Abrechnungszyklus mindestens einen Arbeitsplatz zugewiesen hat, wird in den Informationen auf Unternehmensebene eine Dezimalzahl für die Arbeitsplätze angezeigt. Hat die Organisation also beispielsweise den Abrechnungszyklus mit drei zugewiesenen Arbeitsplätzen begonnen und nach der Hälfte des Zyklus einen zusätzlichen Arbeitsplatz zugewiesen, werden in den Informationen zur Arbeitsplatznutzung 3,5 Arbeitsplätze angezeigt. Die „3“ stellt die zu Beginn des Zyklus zugewiesenen Arbeitsplätze dar. Bei der „0,5“ handelt es sich um den zusätzlichen Arbeitsplatz, der nach der Hälfte des Zyklus zugewiesen wurde. 

In den Ausgabeninformationen werden die Gesamtausgaben für jede Organisation im aktuellen Abrechnungszyklus angezeigt. Zur Berechnung der Gesamtausgaben für die Organisation im aktuellen Zyklus wird in der Regel die Anzahl zugewiesener Arbeitsplätze mit den Kosten pro Arbeitsplatz (19 USD pro Sitz und Monat) multipliziert. Wenn dem gleichen Organisationsmitglied ein Arbeitsplatz in mehreren Organisationen zugewiesen ist, wird diese Arbeitsplatznutzung in den einzelnen Organisationen widergespiegelt. Da dies dem Unternehmen allerdings nur einmal in Rechnung gestellt wird, werden die Ausgaben für das Organisationsmitglied nur in der Organisation widerspiegelt, in der dem Mitglied der erste Arbeitsplatz zugewiesen wurde.

## Anzeigen deiner Nutzung für {% data variables.product.prodname_copilot_for_business %}

### Auf Unternehmensebene

{% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Unter „Monatliche {% data variables.product.prodname_copilot_short %}-Nutzung“ ist deine {% data variables.product.prodname_copilot %}-Nutzung aufgeschlüsselt.
    - Unter „Arbeitsplatznutzung“ findest du die Gesamtanzahl der derzeit pro Organisation zugewiesenen Arbeitsplätze. Arbeitsplätze, die während des aktuellen Abrechnungszyklus zugewiesen wurden, sind als Dezimalzahl angegeben.
    - Unter „Ausgaben“ kannst du dir die Gesamtkosten von {% data variables.product.prodname_copilot_for_business %} für den aktuellen Abrechnungszyklus pro Organisation ansehen.

   ![Screenshot: Seite mit der {% data variables.product.prodname_copilot %}-Nutzung](/assets/images/help/copilot/monthly-usage-enterprise.png)

### Auf Organisationsebene

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Zugriff“ der Randleiste auf **{% octicon "credit-card" aria-label="The credit card icon" %} Abrechnung und Pläne**.
1. Unter „{% data variables.product.prodname_copilot_short %}“ findest du die Aufschlüsselung deiner {% data variables.product.prodname_copilot %}-Nutzung sowie anstehende Änderungen in deiner Organisation.
 
   ![Screenshot: Seite mit der Arbeitsplatznutzung von {% data variables.product.prodname_copilot %} auf Organisationsebene](/assets/images/help/copilot/org-level-seat-view.png)
