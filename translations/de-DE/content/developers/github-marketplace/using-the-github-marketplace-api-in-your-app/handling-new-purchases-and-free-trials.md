---
title: Behandeln neuer Käufe und kostenloser Testperioden
intro: 'Wenn ein Kunde einen kostenpflichtigen Plan, eine kostenlose Testversion oder die kostenlose Version deiner {% data variables.product.prodname_marketplace %}-App erwirbt, wird der [`marketplace_purchase`-Ereigniswebhook](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) mit der `purchased`-Aktion ausgelöst, der den Kaufprozess startet.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
ms.openlocfilehash: b0c1cf055d912cd83e2167bfcbd0136a2644b1aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089627'
---
{% warning %}

Wenn du eine {% data variables.product.prodname_github_app %} in {% data variables.product.prodname_marketplace %} anbietest, muss deine App Benutzer anhand des OAuth-Autorisierungsflows identifizieren. Du musst keine separate {% data variables.product.prodname_oauth_app %} zur Unterstützung dieses Flows einrichten. Weitere Informationen findest du unter [Identifizieren und Autorisieren von Benutzer*innen für {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

{% endwarning %}

## Schritt 1: Anfängliches Kauf- und Webhookereignis

Bevor ein Kunde deine {% data variables.product.prodname_marketplace %} -App kauft, wählt er einen [Angebotsplan](/marketplace/selling-your-app/github-marketplace-pricing-plans/) aus. Er wählt außerdem aus, ob die App über das persönliche Konto oder ein Organisationskonto erworben werden soll.

Der Kunde schließt den Kauf ab, indem er auf **Complete order and begin installation** (Bestellung abschließen und Installation beginnen) klickt.

{% data variables.product.product_name %} sendet dann den [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase)-Webhook mit der `purchased`-Aktion an deine App.

Lies das `effective_date`- und `marketplace_purchase`-Objekt aus dem `marketplace_purchase`-Webhook, um festzustellen, welchen Plan der Kunde gekauft hat, wann der Abrechnungszeitraum beginnt und wann der nächste Abrechnungszeitraum beginnt.

Wenn deine App eine kostenlose Testperiode bietet, lies das `marketplace_purchase[on_free_trial]`-Attribut aus dem Webhook. Lautet der Wert `true`, muss deine App das Startdatum der kostenlosen Testperiode (`effective_date`) und das Datum, an dem die kostenlose Testperiode endet (`free_trial_ends_on`), nachverfolgen. Verwende das `free_trial_ends_on`-Datum, um die verbleibenden Tage der kostenlosen Testperiode auf der Benutzeroberfläche deiner App anzuzeigen. Dies kann entweder in einem Banner oder auf der [Benutzeroberfläche für die Abrechnung](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui) erfolgen. Informationen zum Behandeln von Kündigungen vor Ablauf einer kostenlosen Testperiode findest du unter [Behandeln von Plankündigungen](/developers/github-marketplace/handling-plan-cancellations). Informationen dazu, wie bei einer kostenlosen Testperiode nach deren Ablauf zu einem kostenpflichtigen Plan gewechselt wird, findest du unter [Behandeln von Planänderungen](/developers/github-marketplace/handling-plan-changes).

Unter [{% data variables.product.prodname_marketplace %}-Webhookereignisse](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) findest du ein Beispiel für die `marketplace_purchase`-Ereignisnutzdaten.

## Schritt 2: Installation

Wenn es sich bei deiner App um eine {% data variables.product.prodname_github_app %} handelt, fordert {% data variables.product.product_name %} den Kunden auf, beim Kauf auszuwählen, auf welche Repositorys die App zugreifen kann. {% data variables.product.product_name %} installiert dann die App in dem vom Kunden ausgewählten Konto und gewährt Zugriff auf die ausgewählten Repositorys.

Wenn du eine **Setup-URL** in deinen {% data variables.product.prodname_github_app %}-Einstellungen angegeben hast, leitet {% data variables.product.product_name %} den Kunden an diesem Punkt zu dieser URL um. Wenn du keine Setup-URL angibst, kannst du keine Käufe deiner {% data variables.product.prodname_github_app %} handhaben.

{% note %}

**Hinweis:** Die **Setup-URL** ist in den {% data variables.product.prodname_github_app %} -Einstellungen als optional angegeben, ist jedoch ein Pflichtfeld, wenn du deine App in {% data variables.product.prodname_marketplace %} anbieten möchtest.

{% endnote %}

Wenn es sich bei deiner App um eine {% data variables.product.prodname_oauth_app %} handelt, wird sie von {% data variables.product.product_name %} nirgendwo installiert. Stattdessen leitet {% data variables.product.product_name %} den Kunden an die **Installations-URL** um, die du in deinem [{% data variables.product.prodname_marketplace %}-Angebot](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls) angegeben hast.

Wenn ein Kunde eine {% data variables.product.prodname_oauth_app %} kauft, leitet {% data variables.product.product_name %} den Kunden an die von Dir ausgewählte URL (Setup-URL oder Installations-URL) um, und die URL enthält den vom Kunden ausgewählten Preisplan als Abfrageparameter: `marketplace_listing_plan_id`.

## Schritt 3: Authorization

Wenn ein Kunde deine App kauft, musst du ihn durch den OAuth-Autorisierungsflow leiten:

* Falls es sich bei deiner App um eine {% data variables.product.prodname_github_app %} handelt, beginnst du den Autorisierungsflow, sobald {% data variables.product.product_name %} den Kunden an die **Setup-URL** umleitet. Führe die Schritte unter [Identifizieren und Autorisieren von Benutzer*innen für {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) aus.

* Falls es sich bei deiner App um eine {% data variables.product.prodname_oauth_app %} handelt, beginnst du den Autorisierungsflow, sobald {% data variables.product.product_name %} den Kunden an die **Installations-URL** umleitet. Führe die Schritte unter [Autorisieren von {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/) aus.

Bei beiden App-Typen besteht der erste Schritt darin, den Kunden an [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize) umzuleiten.

Nachdem der Kunde die Autorisierung abgeschlossen hat, erhält deine App ein OAuth-Zugriffstoken für den Kunden. Du brauchst dieses Token im nächsten Schritt.

{% note %}

**Hinweis:** Wenn du einen Kunden für eine kostenlose Testperiode autorisierst, gewähre ihm denselben Zugriff, den er auch im kostenpflichtigen Plan haben würde.  Nach Ablauf des Testzeitraums wird die Version in den kostenpflichtigen Plan umgewandelt.

{% endnote %}

## Schritt 4. Bereitstellen von Kundenkonten

Deine App muss ein Kundenkonto für alle neuen Käufe bereitstellen. Verwende das Zugriffstoken, das du für den Kunden in [Schritt 3: Autorisierung](#step-3-authorization) erhalten hast, und rufe den Endpunkt [Auflisten von Abonnements für den authentifizierten Benutzer](/rest/reference/apps#list-subscriptions-for-the-authenticated-user) auf. Die Antwort enthält die `account`-Informationen des Kunden und gibt an, ob er sich in einer kostenlosen Testperiode befindet (`on_free_trial`). Verwende diese Informationen, um die Einrichtung und Bereitstellung abzuschließen.

{% data reusables.marketplace.marketplace-double-purchases %}

Wenn der Kauf für eine Organisation und pro Benutzer erfolgt, kannst du den Kunden auffordern auszuwählen, welche Organisationsmitglieder Zugriff auf die erworbene App haben.

Du kannst anpassen, auf welche Weise Organisationsmitglieder Zugriff auf deine App erhalten. Hier sind einige Vorschläge angegeben:

**Pauschalpreise:** Wenn der Kauf für eine Organisation mit Pauschalpreisen erfolgt, kann deine App [alle Mitglieder der Organisation über die API abrufen](/rest/reference/orgs#list-organization-members) und den Organisationsadministrator auffordern auszuwählen, welche Mitglieder über bezahlte Benutzer auf Integratorseite verfügen.

**Preise pro Einheit:** Eine Methode zur Bereitstellung von Arbeitsplätzen pro Einheit besteht darin, den Benutzern die Möglichkeit zu geben, beim Anmelden bei der App einen Arbeitsplatz zu belegen. Sobald der Kunde den Schwellenwert für die Anzahl von Arbeitsplätzen erreicht, kann deine App den Benutzer darüber benachrichtigen, dass ein Upgrade über {% data variables.product.prodname_marketplace %} erfolgen muss.
