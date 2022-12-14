---
title: Entwerfen eines Angebots für deine App
intro: 'Wenn du ein Angebot für den {% data variables.product.prodname_marketplace %} erstellst, speichert GitHub ihn im Entwurfsmodus, bis du die App zur Genehmigung abschickst. Dein Angebot zeigt Kunden, wie sie deine App verwenden können.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089692'
---
## Erstellen eines neuen {% data variables.product.prodname_marketplace %}-Angebotsentwurfs

Du kannst nur Angebotsentwürfe für Apps erstellen, die öffentlich sind. Bevor du deinen Angebotsentwurf erstellst, kannst du die folgenden Richtlinien zum Schreiben und Konfigurieren von Einstellungen in deinem {% data variables.product.prodname_marketplace %}-Angebot lesen:

* [Schreiben von {% data variables.product.prodname_marketplace %}-Angebotsbeschreibungen](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [Festlegen eines Preisplans für ein {% data variables.product.prodname_marketplace %}-Angebot](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [Konfigurieren des {% data variables.product.prodname_marketplace %}-Webhooks](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

Zum Erstellen eines {% data variables.product.prodname_marketplace %}-Angebots gehst du folgendermaßen vor:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. Klicke auf der linken Seitenleiste entweder auf **OAuth Apps** oder auf **GitHub Apps**, je nach App, die du {% data variables.product.prodname_marketplace %} hinzufügst.

  {% note %}

  **Hinweis**: Du kannst ein Angebot auch hinzufügen, indem du zu https://github.com/marketplace/new navigierst, deine verfügbaren Apps anzeigst und auf **Angebotsentwurf erstellen** klickst.

  {% endnote %}

  ![Auswahl des App-Typs](/assets/images/settings/apps_choose_app.png)

4. Wähle die App aus, die du {% data variables.product.prodname_marketplace %} hinzufügen möchtest.
![App-Auswahl für {% data variables.product.prodname_marketplace %}-Angebot](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. Nachdem du einen neuen Angebotsentwurf erstellt hast, wird Dir eine Übersicht der Abschnitte angezeigt, die du aufrufen musst, bevor dein {% data variables.product.prodname_marketplace %}-Angebot fertig gestellt ist.
![GitHub Marketplace-Angebot](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**Hinweis:** Es wird empfohlen, im Abschnitt „Kontaktdaten“ deines Angebots einzelne E-Mail-Adressen anstelle von Gruppen-E-Mail-Adressen wie z. B. support@domain.com zu verwenden. GitHub nutzt diese E-Mail-Adressen, um Dich über Aktualisierungen von {% data variables.product.prodname_marketplace %}, die sich auf dein Angebot auswirken könnten, neue Featurereleases, Marketingmöglichkeiten und Auszahlungen zu informieren sowie Dir Informationen über Konferenzen und Sponsoring zukommen zu lassen.

{% endnote %}

## Bearbeiten deines Angebots

Nachdem du einen {% data variables.product.prodname_marketplace %}-Angebotsentwurf erstellt hast, kannst du jederzeit zurückkehren und Informationen in deinem Angebot ändern. Ist deine App bereits genehmigt und in {% data variables.product.prodname_marketplace %} enthalten, kannst du die Informationen und Bilder in deinem Angebot bearbeiten, jedoch keine bereits veröffentlichten Preispläne ändern. Informationen findest du unter [Festlegen eines Preisplans für ein {% data variables.product.prodname_marketplace %}-Angebot](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/).

## Übermitteln deiner App

Nachdem du dein {% data variables.product.prodname_marketplace %}-Angebot fertig gestellt hast, kannst du es auf der Seite **Overview** (Übersicht) zur Überprüfung übermitteln. Du musst die [{% data variables.product.prodname_marketplace %}-Entwicklervereinbarung](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/) lesen und akzeptieren. Anschließend kannst du auf **Submit for review** (Zur Überprüfung übermitteln) klicken. Nachdem du deine App zur Überprüfung übermittelt hast,nimmt ein Onboarding-Experte Kontakt mit Dir auf und gibt Dir zusätzliche Informationen zum Onboardingprozess.

## Entfernen eines {% data variables.product.prodname_marketplace %}-Angebots

Wenn du deine App nicht mehr in {% data variables.product.prodname_marketplace %} anbieten möchtest, wende Dich an {% data variables.contact.contact_support %}, um dein Angebot zu entfernen.
