---
title: Testen der App
intro: 'GitHub empfiehlt, deine App mit APIs und Webhooks zu testen, bevor du dein Angebot an {% data variables.product.prodname_marketplace %} übermittelst. So kannst du dafür sorgen, dass bei deinen Kunden keine Probleme auftreten. Bevor ein*e Onboardingexpert*in deine App genehmigt, muss dafür gesorgt sein, dass diese den Abrechnungsflow ordnungsgemäß ausführt.'
redirect_from:
  - /apps/marketplace/testing-apps-apis-and-webhooks
  - /apps/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps
  - /developers/github-marketplace/testing-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: c542f5bd46e4555a4459c669e2f9d75e29b63ffe
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145102840'
---
## Testen von Apps

Du kannst Eintragsentwürfe für den {% data variables.product.prodname_marketplace %} verwenden, um alle Abrechnungsflows zu simulieren. Ein Eintrag im Entwurfszustand bedeutet, dass er noch nicht für die Genehmigung übermittelt wurde. Alle Einkäufe, die du mit einem Eintragsentwurf für den {% data variables.product.prodname_marketplace %} tätigst, führen _nicht_ zu tatsächlichen Transaktionen, und GitHub belastet deine Kreditkarte nicht. Beachte, dass du nur Einkäufe für Pläne simulieren kannst, die im Entwurfseintrag veröffentlicht wurden, und nicht für Pläne im Entwurfsstadium. Weitere Informationen findest du unter [Entwerfen eines Eintrags für deine App](/developers/github-marketplace/drafting-a-listing-for-your-app) und [Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

### Verwenden einer Entwicklungs-App mit einem Entwurfseintrag zum Testen von Änderungen

Ein {% data variables.product.prodname_marketplace %}-Eintrag kann nur einer einzelnen App-Registrierung zugeordnet werden, und jede App kann nur auf ihren eigenen {% data variables.product.prodname_marketplace %}-Eintrag zugreifen. Aus diesen Gründen wird empfohlen, eine separate Entwicklungs-App mit derselben Konfiguration wie deine Produktions-App zu konfigurieren und einen _Entwurf_ des {% data variables.product.prodname_marketplace %}-Eintrags zu erstellen, den du zum Testen verwenden kannst. Der Angebotsentwurf für den {% data variables.product.prodname_marketplace %} ermöglicht es dir, Änderungen zu testen, ohne dadurch aktive Benutzer*innen deiner Produktions-App zu beeinträchtigen. Du musst deinen Entwicklungseintrag für den {% data variables.product.prodname_marketplace %} nie übermitteln, da du ihn nur zum Testen verwendest.

Da du nur Eintragsentwürfe für den {% data variables.product.prodname_marketplace %} für öffentliche Apps erstellen kannst, musst du deine Produktions-App veröffentlichen. Öffentliche Apps können nicht außerhalb der veröffentlichten {% data variables.product.prodname_marketplace %}-Einträge gefunden werden, solange du die App-URL nicht freigibst. Ein Marketplace-Eintrag im Entwurfszustand ist nur für die Besitzer*innen der App sichtbar.

Wenn du über eine Entwicklungs-App mit einem Eintragsentwurf verfügst, kannst du ihn verwenden, um Änderungen an deiner App zu testen, während du die Integration mit der {% data variables.product.prodname_marketplace %}-API und den -Webhooks durchführst.

{% warning %}

Tätige keine Testkäufe mit einer App, die auf dem {% data variables.product.prodname_marketplace %} aktiv ist.

{% endwarning %}

### Simulieren von Marketplace-Kaufereignissen

Deine Testszenarios erfordern möglicherweise das Einrichten von Angebotsplänen, die kostenlose Testversionen und das Wechseln zwischen kostenlosen und kostenpflichtigen Abonnements beinhalten. Da Herabstufungen und Stornierungen erst mit dem nächsten Abrechnungszeitraum wirksam werden, stellt GitHub ein Feature nur für Entwickler*innen bereit, um „Ausstehende Änderung anwenden“ für `changed` zu erzwingen und `cancelled`-Aktionen zu planen, die sofort wirksam werden. Du kannst auf **Ausstehende Änderung anwenden** für Apps mit _Entwürfen_ von Marketplace-Einträgen unter https://github.com/settings/billing#pending-cycle: zugreifen.

![Ausstehende Änderung anwenden](/assets/images/github-apps/github-apps-apply-pending-changes.png)

## Testen von APIs

Für die meisten API-Endpunkte des {% data variables.product.prodname_marketplace %} werden auch Stub-API-Endpunkte bereitgestellt, die hart codierte, falsche Daten zurückgeben, die du zum Testen verwenden kannst. Um Stub-Daten zu erhalten, musst du Stub-URLs angeben, die `/stubbed` in der Route enthalten, z. B. `/user/marketplace_purchases/stubbed`. Eine Liste der Endpunkte, die diesen Ansatz mit Stub-Daten unterstützen, findest du unter [{% data variables.product.prodname_marketplace %}-Endpunkte](/rest/reference/apps#github-marketplace).

## Testen von Webhooks

GitHub bietet Tools zum Testen deiner bereitgestellten Nutzdaten. Weitere Informationen findest du unter [Testen von Webhooks](/webhooks/testing/).
