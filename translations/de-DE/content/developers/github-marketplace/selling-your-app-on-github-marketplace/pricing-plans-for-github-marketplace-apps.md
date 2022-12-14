---
title: Tarife für GitHub Marketplace-Apps
intro: 'Preispläne ermöglichen dir, deine App mit unterschiedlichen Dienstebenen oder Ressourcen bereitzustellen. Du kannst bis zu 10 Preispläne in deiner {% data variables.product.prodname_marketplace %}-Liste anbieten.'
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
  - /developers/github-marketplace/pricing-plans-for-github-marketplace-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Pricing plans for apps
ms.openlocfilehash: e1ab751c26e59ec42e16dc7d9e5c0118dedffbde
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876946'
---
Es gibt kostenlose, pauschale oder einheitsbasierte {% data variables.product.prodname_marketplace %}-Tarife. Die Preise werden in US-Dollar festgelegt, angezeigt und abgerechnet. Kostenpflichtige Tarife sind für Apps verfügbar, die von überprüften Herausgebern veröffentlicht wurden. Weitere Informationen darüber, wie du ein überprüfter Herausgeber wirst, findest du unter [Beantragen der Herausgeberüberprüfung für deine Organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).

Kunden kaufen deine App über eine Zahlungsmethode, die mit ihrem Konto auf {% data variables.product.product_location %} verknüpft ist, ohne dabei {% data variables.product.prodname_dotcom_the_website %} verlassen zu müssen. Du musst keinen Code schreiben, um Abrechnungstransaktionen durchzuführen, aber du musst Ereignisse aus der {% data variables.product.prodname_marketplace %}-API verarbeiten. Weitere Informationen findest du unter [Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

Wenn für die App, die du im {% data variables.product.prodname_marketplace %} anbietest, mehrere Planoptionen verfügbar sind, kannst du die entsprechenden Tarife einrichten. Wenn für deine App beispielsweise zwei Planoptionen verfügbar sind (ein Open-Source-Plan und ein Pro-Plan), dann kannst du einen kostenlosen Tarif für den Open-Source-Plan und einen Pauschaltarif für den Pro-Plan einrichten. Bei jeder {% data variables.product.prodname_marketplace %}-Listing muss ein jährlicher und monatlicher Preis für jeden aufgeführten Plan angegeben werden.

Weitere Informationen zum Erstellen eines Tarifs findest du unter [Einrichten des Tarifs einer {% data variables.product.prodname_marketplace %}-Listing](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/).

{% data reusables.marketplace.free-plan-note %}

## Arten von Tarifen

### Kostenlose Tarife

{% data reusables.marketplace.free-apps-encouraged %}

Kostenlose Tarife sind für Benutzer*innen völlig kostenlos. Wenn du einen kostenlosen Tarif einrichtest, kannst du den Benutzer*innen, die den kostenlosen Tarif verwenden, keine Gebühren für die Verwendung deiner App in Rechnung stellen. Du kannst sowohl kostenlose als auch kostenpflichtige Tarife für deine Listing erstellen.

Alle Apps müssen Ereignisse für neue Käufe und Stornierungen verarbeiten. Apps, die nur mit kostenlosen Tarifen angeboten werden, müssen keine Ereignisse für kostenlose Testversionen, Upgrades oder Downgrades verarbeiten. Weitere Informationen findest du unter [Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

Wenn du einen kostenpflichtigen Tarif zu einer App hinzufügst, die im {% data variables.product.prodname_marketplace %} bereits als kostenloser Dienst verfügbar ist, musst du die Überprüfung der App beantragen und das finanzielle Onboarding durchführen.

### Kostenpflichtige Tarife

Es gibt zwei Arten von kostenpflichtigen Tarifen:

- Bei Pauschaltarifen wird monatlich oder jährlich eine feste Gebühr berechnet.

- Bei einheitsbasierten Tarifen wird monatlich oder jährlich eine feste Gebühr für eine von dir angegebene Einheit berechnet. Eine „Einheit“ kann eine beliebige Instanz sein (z. B. ein Benutzer, ein Arbeitsplatz oder eine Person).

Du kannst auch kostenlose Testversionen anbieten. Dadurch können Kunden kostenlose, vierzehntägige Testversionen von OAuth oder GitHub-Apps ausprobieren. Wenn du einen Marketplace-Tarif einrichtest, kannst du für Pauschaltarife oder einheitsbasierte Tarife eine kostenlose Testversion anbieten.

## Kostenlose Testversionen

Kunden können eine kostenlose Testversion für alle kostenpflichtigen Tarife einer Marketplace-Listing verwenden, für die kostenlose Testversionen verfügbar sind. Kunden können jedoch nicht mehr als eine kostenlose Testversion pro Marketplace-Produkt in Anspruch nehmen.

Kostenlose Testversionen können immer 14 Tage lang verwendet werden. Kunden werden vier Tage vor Ende des Zeitraums (am 11. Tag des kostenlosen Testzeitraums) darüber benachrichtigt, dass der Tarif upgegradet wird. Nach dem Ende der kostenlosen Testversion werden die Kunden automatisch für den Tarif registriert, den sie testen, wenn sie nicht kündigen.

Weitere Informationen findest du unter [Verarbeiten neuer Einkäufe und kostenloser Testversionen](/developers/github-marketplace/handling-new-purchases-and-free-trials/).

{% note %}

**Hinweis:** GitHub erwartet, dass du alle privaten Kundendaten innerhalb von 30 Tagen nach einer gekündigten Testversion löschst, beginnend mit dem Eingang des Stornierungsereignisses.

{% endnote %}
