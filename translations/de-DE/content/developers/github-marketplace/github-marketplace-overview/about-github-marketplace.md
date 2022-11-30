---
title: Informationen zu GitHub Marketplace
intro: 'Hier erfährst du mehr über {% data variables.product.prodname_marketplace %}, wo du deine Apps und Aktionen öffentlich für alle Benutzer*innen von {% data variables.product.product_name %} freigeben kannst.'
redirect_from:
  - /apps/marketplace/getting-started
  - /marketplace/getting-started
  - /developers/github-marketplace/about-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 5a722d35fb74607b9200a1fe30d804df44330cea
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089731'
---
[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) verbindet dich mit Entwicklern, die ihre {% data variables.product.prodname_dotcom %}-Workflows erweitern und verbessern möchten. Du kannst kostenlose und kostenpflichtige Tools für Entwickler auflisten, die in {% data variables.product.prodname_marketplace %} verwendet werden sollen. {% data variables.product.prodname_marketplace %} bietet Entwicklern zwei Arten von Tools: {% data variables.product.prodname_actions %} und Apps, und jedes Tool erfordert unterschiedliche Schritte zum Hinzufügen zu {% data variables.product.prodname_marketplace %}.

## GitHub-Aktionen

{% data reusables.actions.actions-not-verified %}

Informationen zum Veröffentlichen von {% data variables.product.prodname_actions %} in {% data variables.product.prodname_marketplace %} findest du unter [Veröffentlichen von Aktionen in GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace).

## Apps

Jeder kann seine Apps kostenlos auf {% data variables.product.prodname_marketplace %} freigeben, aber nur Organisationen können in ihrem Besitz befindliche Apps verkaufen. 

Um kostenpflichtige Pläne für deine App zu veröffentlichen und ein Marketplace-Badge anzuzeigen, musst du den Prozess der Herausgeberüberprüfung durchlaufen. Weitere Informationen findest du unter [Anwenden der Herausgeberüberprüfung für deine Organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) oder [Anforderungen für das Auflisten einer App](/developers/github-marketplace/requirements-for-listing-an-app).

Sobald die Organisation die Anforderungen erfüllt, können Personen mit Besitzerberechtigungen in der Organisation kostenpflichtige Pläne für jede ihrer Apps veröffentlichen. Jede App mit einem kostenpflichtigen Plan durchläuft auch einen finanziellen Onboardingprozess, um Zahlungen zu ermöglichen.

Um Apps mit kostenlosen Plänen zu veröffentlichen, musst du nur die allgemeinen Anforderungen für das Auflisten jeder App erfüllen. Weitere Informationen findest du unter [Anforderungen für alle GitHub Marketplace-Einträge](/developers/github-marketplace/requirements-for-listing-an-app#requirements-for-all-github-marketplace-listings).

### Neu bei Apps?

Wenn du eine App für {% data variables.product.prodname_marketplace %} erstellen möchtest, aber noch keine Erfahrung mit {% data variables.product.prodname_github_apps %} oder {% data variables.product.prodname_oauth_apps %} hast, dann informiere dich unter [Erstellen von {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps) oder [Erstellen von {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps).

### {% data variables.product.prodname_github_apps %} im Vergleich zu {% data variables.product.prodname_oauth_apps %}

{% data reusables.marketplace.github_apps_preferred %}, obwohl du sowohl OAuth- als auch {% data variables.product.prodname_github_apps %} in {% data variables.product.prodname_marketplace %} auflisten kannst. Weitere Informationen findest du unter [Unterschiede zwischen {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/) und [Migrieren von {% data variables.product.prodname_oauth_apps %} zu {% data variables.product.prodname_github_apps %}](/apps/migrating-oauth-apps-to-github-apps/).

## Übersicht zum Veröffentlichen einer App im {% data variables.product.prodname_marketplace %}

Nach der Erstellung kannst du deine App im {% data variables.product.prodname_marketplace %} veröffentlichen, um sie für andere Benutzer freizugeben. Der Prozess im Überblick:

1. Überprüfe deine App sorgfältig, um sicherzustellen, dass sie sich in anderen Repositorys wie erwartet verhält und den Richtlinien für bewährte Methoden entspricht. Weitere Informationen findest du unter [Bewährte Methoden für die Sicherheit von Apps](/developers/github-marketplace/security-best-practices-for-apps) und [Anforderungen für das Auflisten einer App](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience).

1. Füge der App Webhook-Ereignisse hinzu, um Benutzerabrechnungsanforderungen nachzuverfolgen. Weitere Informationen über die {% data variables.product.prodname_marketplace %}-API, Webhook-Ereignisse und Abrechnungsanforderungen findest du unter [Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

1. Erstelle einen {% data variables.product.prodname_marketplace %}-Angebotsentwurf. Weitere Informationen findest du unter [Entwerfen eines Angebots für deine App](/developers/github-marketplace/drafting-a-listing-for-your-app).

1. Füge einen Preisplan hinzu. Weitere Informationen findest du unter [Festlegen von Preisplänen für deinen Eintrag](/developers/github-marketplace/setting-pricing-plans-for-your-listing).

1. Lese und akzeptiere die Bestimmungen der [{% data variables.product.prodname_marketplace %}-Entwicklervereinbarung](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement).

1. Übermittle deinen Eintrag zur Veröffentlichung in {% data variables.product.prodname_marketplace %}. Weitere Informationen findest du unter [Übermitteln deines Angebots zur Veröffentlichung](/developers/github-marketplace/submitting-your-listing-for-publication).

## Überprüfen der Akzeptanz deiner App

Du kannst auf Metriken und Transaktionen für deinen Eintrag zugreifen. Weitere Informationen finden Sie unter

- [Anzeigen von Metriken für deinen Eintrag](/developers/github-marketplace/viewing-metrics-for-your-listing)
- [Anzeigen von Transaktionen für deinen Eintrag](/developers/github-marketplace/viewing-transactions-for-your-listing)

## Support kontaktieren 

Richte Fragen zu {% data variables.product.prodname_marketplace %} bitte direkt an {% data variables.contact.contact_support %}.
