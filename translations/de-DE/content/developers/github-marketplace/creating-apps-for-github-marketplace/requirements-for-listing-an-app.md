---
title: Anforderungen für das Auflisten einer App
intro: 'Apps im {% data variables.product.prodname_marketplace %} müssen die auf dieser Seite aufgeführten Anforderungen erfüllen, bevor das Angebot veröffentlicht werden kann.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
  - /developers/github-marketplace/requirements-for-listing-an-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Listing requirements
ms.openlocfilehash: 58112d935a77119325dab4ad72c87561d0c00e47
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089772'
---
<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

Die Anforderungen für das Auflisten einer App auf {% data variables.product.prodname_marketplace %} variieren je nachdem, ob du eine kostenlose oder kostenpflichtige App anbieten möchtest.

## Anforderungen für alle {% data variables.product.prodname_marketplace %}-Auflistungen

Alle Auflistungen für {% data variables.product.prodname_marketplace %} müssen für Tools sein, die der {% data variables.product.product_name %}-Community einen Mehrwert bieten. Wenn du deine Auflistung für die Veröffentlichung übermittelst, musst du die Bedingungen der [Vereinbarung für {% data variables.product.prodname_marketplace %}-Entwickler](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement) lesen und akzeptieren.

### Anforderungen an das Benutzererlebnis für alle Apps

Alle Auflistungen müssen die folgenden Anforderungen erfüllen, unabhängig davon, ob sie für eine kostenlose oder kostenpflichtige App sind.

- Auflistungen dürfen Benutzer nicht aktiv von {% data variables.product.product_name %}überzeugen.
- Auflistungen müssen gültige Kontaktinformationen für den Herausgeber enthalten.
- Auflistungen müssen über eine relevante Beschreibung der Anwendung verfügen.
- Auflistungen müssen eine Preisübersicht angeben.
- Apps müssen Kunden einen Mehrwert bieten und die Plattform über die Authentifizierung hinaus integrieren.
- Apps müssen in {% data variables.product.prodname_marketplace %} öffentlich verfügbar sein und können nicht nur in Beta oder auf Einladung verfügbar sein.
- Apps müssen Webhook-Ereignisse eingerichtet haben, um den Herausgeber anhand der {% data variables.product.prodname_marketplace %}-API über Planänderungen oder Stornierungen zu benachrichtigen. Weitere Informationen findest du unter [Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

Weitere Informationen zur Bereitstellung einer guten Kundenerfahrung findest du unter [Bewährte Methoden für Kundenfreundlichkeit für Apps](/developers/github-marketplace/customer-experience-best-practices-for-apps).

### Marken- und Auflistungsanforderungen für alle Apps

- Apps, die GitHub-Logos verwenden, müssen den Richtlinien für {% data variables.product.company_short %} folgen. Weitere Informationen findest du unter [Logos und Nutzung von {% data variables.product.company_short %}](https://github.com/logos).
- Apps müssen über ein Logo, eine Featurekarte und Screenshotbilder verfügen, die den Empfehlungen entsprechen, die in [Schreiben von {% data variables.product.prodname_marketplace %}-Auflistungsbeschreibungen](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/) angegeben werden.
- Auflistungen müssen Beschreibungen enthalten, die gut geschrieben und frei von Grammatikfehlern sind. Anleitungen zum Schreiben deiner Auflistung findest du unter [Schreiben von {% data variables.product.prodname_marketplace %}-Auflistungsbeschreibungen](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/).

Um deine Kunden zu schützen, empfehlen wir dir, auch die bewährten Sicherheitsmethoden zu befolgen. Weitere Informationen findest du unter [Bewährte Methoden für die Sicherheit von Apps](/developers/github-marketplace/security-best-practices-for-apps).

## Überlegungen für kostenlose Apps

{% data reusables.marketplace.free-apps-encouraged %} 

## Anforderungen für kostenpflichtige Apps

Um einen kostenpflichtigen Plan für deine App auf {% data variables.product.prodname_marketplace %} zu veröffentlichen, muss die App einem verifizierten Herausgeber gehören. Weitere Informationen zum Überprüfungsprozess oder Übertragen des Besitzes deiner App findest du unter [Beantragen der Herausgeberüberprüfung für deine Organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).

Wenn deine App bereits veröffentlicht ist und du ein verifizierter Herausgeber bist, kannst du einen neuen kostenpflichtigen Plan aus dem Editor für die Preisübersicht veröffentlichen. Weitere Informationen findest du unter [Festlegen von Preisplänen für deinen Eintrag](/developers/github-marketplace/setting-pricing-plans-for-your-listing).

Um eine kostenpflichtige App zu veröffentlichen (oder eine App, die einen kostenpflichtigen Plan bietet), musst du auch die folgenden Anforderungen erfüllen:

- {% data variables.product.prodname_github_apps %} muss mindestens 100 Installationen aufweisen.
- {% data variables.product.prodname_oauth_apps %} muss mindestens 200 Benutzer aufweisen.
- Alle kostenpflichtigen Apps müssen {% data variables.product.prodname_marketplace %} Kaufereignisse für neue Einkäufe, Upgrades, Downgrades, Stornierungen und kostenlose Testversionen behandeln. Weitere Informationen findest du unter [Abrechnungsanforderungen für kostenpflichtige Apps](#billing-requirements-for-paid-apps) unten.

Wenn du bereit bist, die App auf {% data variables.product.prodname_marketplace %} zu veröffentlichen, musst du die Überprüfung für die App-Auflistung anfordern.

{% note %}

**Hinweis:** {% data reusables.marketplace.app-transfer-to-org-for-verification %} Informationen zum Übertragen einer App in eine Organisation findest du unter [Übermitteln deines Angebots zur Veröffentlichung](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit).

{% endnote %}

## Abrechnungsanforderungen für kostenpflichtige Apps

Deine App muss keine Zahlungen verarbeiten, aber sie muss {% data variables.product.prodname_marketplace %}-Kaufereignisse verwenden, um neue Käufe, Upgrades, Downgrades, Stornierungen und kostenlose Testversionen zu verwalten. Informationen zum Integrieren dieser Ereignisse in deine App findest du unter [Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

Mit der Abrechnungs-API von GitHub können Kunden eine App kaufen, ohne GitHub zu verlassen, und den Dienst auf {% data variables.product.product_location %} mit der Zahlungsmethode bezahlen, die bereits mit ihrem Konto verbunden ist.

- Apps müssen sowohl monatliche als auch jährliche Abrechnungen für kostenpflichtige Abonnements unterstützen.
- Auflistungen können eine beliebige Kombination von kostenlosen und kostenpflichtigen Plänen anbieten. Kostenlose Pläne sind optional, werden aber unterstützt. Weitere Informationen findest du unter [Festlegen eines Preisplans für ein {% data variables.product.prodname_marketplace %}-Angebot](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/).
