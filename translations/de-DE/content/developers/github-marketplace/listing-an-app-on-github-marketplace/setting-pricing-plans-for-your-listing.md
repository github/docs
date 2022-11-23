---
title: Festlegen des Tarifs für deine Listing
intro: 'Wenn du deine App auf dem {% data variables.product.prodname_marketplace %} zur Verfügung stellst, kannst du sie entweder als kostenlosen Dienst bereitstellen oder zum Kaufen anbieten. Wenn du deine App zum Kaufen anbietest, kannst du verschiedene Tarife für unterschiedliche Featureebenen erstellen.'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /developers/github-marketplace/setting-pricing-plans-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Set listing pricing plans
ms.openlocfilehash: bc8d84a55c9597da051ab11752dd7e412761d5d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089668'
---
## Informationen zum Festlegen von Tarifen

{% data variables.product.prodname_marketplace %} bietet verschiedene Arten von Tarifen. Weitere Informationen findest du unter [Tarife für {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps).

Um einen kostenpflichtigen Tarif für deine App anzubieten, muss sie sich im Besitz einer Organisation befinden, die den Prozess zur Herausgeberüberprüfung durchlaufen hat und bestimmte Kriterien erfüllt. Weitere Informationen findest du unter [Beantragen der Herausgeberüberprüfung für deine Organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) und [Anforderungen für das Eintragen einer App im {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/).

Wenn deine App bereits mit einem kostenpflichtigen Tarif veröffentlicht wurde und du ein überprüfter Herausgeber bist, kannst du auf der Seite „Einen Tarif bearbeiten“ in den App-Eintragseinstellungen für den Marketplace einen neuen kostenpflichtigen Tarif veröffentlichen. 

![Schaltfläche zum Veröffentlichen dieses Tarifs](/assets/images/marketplace/publish-this-plan-button.png)

Wenn deine App bereits mit einem kostenpflichtigen Tarif veröffentlicht wurde, du jedoch noch kein überprüfter Herausgeber bist, kannst du keinen neuen kostenpflichtigen Tarif veröffentlichen, bis du überprüft wurdest. Weitere Informationen darüber, wie du ein überprüfter Herausgeber wirst, findest du unter [Beantragen der Herausgeberüberprüfung für deine Organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).

## Informationen zum Speichern von Tarifen

Du kannst Tarifentwürfe und veröffentlichte Tarife speichern. Wenn du deine {% data variables.product.prodname_marketplace %}-Listing nicht zur Genehmigung eingereicht hast, wird ein veröffentlichter Tarif genauso wie ein Tarifentwurf behandelt, bis die Listing genehmigt und im {% data variables.product.prodname_marketplace %} angezeigt wird. Mit Tarifentwürfen kannst du neue Tarife erstellen und speichern, ohne sie auf deiner Listingseite im {% data variables.product.prodname_marketplace %} zu veröffentlichen. Sobald du einen Tarif in einer veröffentlichten Listing veröffentlicht hast, können Kunden diesen sofort erwerben. Du kannst bis zu zehn Tarife veröffentlichen.

Anleitungen zur Rechnungsstellung an Kunden findest du unter [Rechnungsstellung an Kunden](/developers/github-marketplace/billing-customers).

## Erstellen von Tarifen

Klicke in der linken Seitenleiste auf deiner [{% data variables.product.prodname_marketplace %}-Listingseite](https://github.com/marketplace/manage) auf **Pläne und Preise**, um einen Tarif für deine {% data variables.product.prodname_marketplace %}-Listing zu erstellen. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.prodname_marketplace %}-Listingentwurfs](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/).

Wenn du auf **Neuer Tarifentwurf** klickst, wird ein Formular angezeigt, anhand dessen du deinen Tarif anpassen kannst. Du musst die folgenden Felder konfigurieren, um einen Tarif zu erstellen:

- **Tarifname**: Der Name des Tarifs wird auf der Angebotsseite der App im {% data variables.product.prodname_marketplace %} angezeigt. Du kannst den Namen deines Tarifs an den Ressourcen des Tarifs, der Größe des Unternehmens, für das der Tarif gedacht ist, oder an allem anderen ausrichten, was du möchtest.

- **Preismodelle**: Es gibt drei Arten von Tarifen: Kostenlose, pauschale und einheitsbasierte Tarife. Bei allen Tarife müssen neue Kauf- und Stornierungsereignisse über die Marketplace-API verarbeitet werden. Für kostenpflichtige Tarife gilt außerdem Folgendes:

  - Du musst sowohl für monatliche als auch für jährliche Abonnements einen Preis in US-Dollar festlegen.
  - Deine App muss Änderungen am Tarif verarbeiten.
  - Du musst die Überprüfung beantragen, um eine Listing mit einem kostenpflichtigem Tarif zu veröffentlichen.
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  Weitere Informationen findest du unter [Tarife für {% data variables.product.prodname_marketplace %}-Apps](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps) und [Verwenden der {% data variables.product.prodname_marketplace %}-API in deiner App](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app).

- **Verfügbar für**: {% data variables.product.prodname_marketplace %}-Tarife können von **persönlichen Konten und Organisationskonten**, **nur von persönlichen Konten** oder **nur von Organisationskonten** genutzt werden. Wenn dein Tarif beispielsweise pro Einheit abgerechnet wird und mehrere Arbeitsplätze bietet, würdest du **Nur Organisationskonten** auswählen, da keine Möglichkeit besteht, Personen in einer Organisation über ein persönliches Konto Arbeitsplätze zuzuweisen.

- **Kurzbeschreibung**: Schreibe eine kurze Zusammenfassung der Daten zum Tarif. In der Beschreibung kann die Art des Kunden, für den der Tarif vorgesehen ist, oder die im Tarif erhaltenen Ressourcen angegeben werden.

- **Stichpunkte**: Du kannst bis zu vier Stichpunkte aufschreiben, in denen weitere Einzelheiten zu deinem Tarif aufgeführt sind. In diesen Stichpunkten können die Anwendungsfälle deiner App oder genauere Angaben zu den im Tarif enthaltenen Ressourcen oder Features aufgeführt werden.

{% data reusables.marketplace.free-plan-note %}

## Ändern eines Tarifs für eine {% data variables.product.prodname_marketplace %}-Listing

Du kannst einen Tarif für deine {% data variables.product.prodname_marketplace %}-Listing entfernen, wenn er nicht mehr benötigt wird oder du die Preisdetails anpassen musst.

![Schaltfläche zum Entfernen des Tarifs](/assets/images/marketplace/marketplace_remove_this_plan.png)

Sobald du einen Tarif für eine App veröffentlichst, die bereits im {% data variables.product.prodname_marketplace %} verfügbar ist, kannst du den Tarif nicht mehr ändern. Stattdessen musst du den Tarif entfernen und einen neuen erstellen. Kunden, die den entfernten Tarif bereits erworben haben, können ihn weiter verwenden, bis sie ihn kündigen und zu einem neuen Tarif wechseln. Weitere Informationen zu Tarifen findest du unter [{% data variables.product.prodname_marketplace %}-Tarife](/marketplace/selling-your-app/github-marketplace-pricing-plans/).

Sobald du einen Tarif entfernst, können Benutzer*innen deine App nicht mehr über diesen Tarif erwerben. Für die bereits vorhandenen Benutzer*innen des entfernten Tarifs bleibt dieser Tarif bestehen, bis sie ihr Abonnement kündigen.

{% note %}

**Hinweis:** {% data variables.product.product_name %} kann Benutzer nicht aus einem entfernten Tarif entfernen. Du kannst eine Kampagne durchführen, um Benutzer*innen dazu zu bewegen, vom entfernten Tarif ein Upgrade oder Downgrade auf einen neuen Tarif vorzunehmen.

{% endnote %}

Du kannst kostenlose Testversionen von GitHub Marketplace deaktivieren, ohne den Tarif zu entfernen. Dadurch kannst du jedoch in Zukunft keine kostenlosen Testversionen dieses Tarifs veröffentlichen. Wenn du die kostenlosen Testversionen eines Tarifs deaktivierst, können bereits registrierte Benutzer*innen die kostenlose Testphase abschließen.

Nach dem Entfernen eines Tarifs kannst du einen neuen Tarif mit demselben Namen wie der entfernte Tarif erstellen. Wenn du beispielsweise einen „Pro“-Tarif anbietest, aber den Pauschalpreis ändern musst, kannst du den „Pro“-Tarif entfernen und einen neuen „Pro“-Tarif erstellen, bei dem der Preis aktualisiert wurde. Benutzer*innen können den neuen Tarif sofort erwerben.

Wenn du kein überprüfter Herausgeber bist, kannst du den Tarif für deine App nicht ändern. Weitere Informationen darüber, wie du ein überprüfter Herausgeber wirst, findest du unter [Beantragen der Herausgeberüberprüfung für deine Organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization).
