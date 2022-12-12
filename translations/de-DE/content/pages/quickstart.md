---
title: Schnellstartanleitung für GitHub Pages
intro: 'Du kannst mit {% data variables.product.prodname_pages %} einige Open-Source-Projekte vorstellen, einen Blog hosten oder sogar deinen Lebenslauf freigeben. Dieser Leitfaden hilft dir bei der Erstellung deiner nächsten Website.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: d82ba5899bb3b98efbd5b69672472ef0d39e2353
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643861'
---
## Einführung

{% data variables.product.prodname_pages %} sind über {% data variables.product.product_name %} gehostete und veröffentlichte öffentliche Webseiten. Am schnellsten geht es, wenn du den Jekyll Theme Chooser benutzt, um ein vorgefertigtes Design zu laden. Anschließend kannst du deinen {% data variables.product.prodname_pages %}-Inhalt und das Format ändern.

Dieser Leitfaden führt dich durch das Erstellen einer Benutzerwebsite unter `username.github.io`.

## Erstellen deiner Website

{% data reusables.repositories.create_new %}
1. Gib `username.github.io` als Repositorynamen ein. Ersetze `username` durch deinen {% data variables.product.prodname_dotcom %}-Benutzernamen. Wenn dein Benutzername beispielsweise `octocat` lautet, sollte der Repositoryname `octocat.github.io` sein.
   ![Repositorynamensfeld](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Wähle unter „Erstellen und Bereitstellen“ unter „Quelle“ die Option **Aus einem Branch bereitstellen** aus.
1. Wähle unter „Erstellen und Bereitstellen“ unter „Branch“ im Dropdownmenü **Keine** oder **Branch** eine Veröffentlichungsquelle aus.

   ![Dropdownmenü zum Auswählen einer Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-drop-down.png)
1. Öffne optional die Datei `README.md` deines Repositorys. In die `README.md`-Datei schreibst du den Inhalt deiner Website. Du kannst die Datei bearbeiten oder den Standardinhalt vorerst beibehalten.
1. Besuche auf `username.github.io` deine neue Website. **Hinweis**: Nach dem Pushen der Änderung an {% data variables.product.product_name %} kann es bis zu 10 Minuten dauern, bis die Änderungen an deiner Website veröffentlicht werden.

## Ändern des Titels und der Beschreibung

Standardmäßig lautet der Titel deiner Website `username.github.io`. Du kannst den Titel ändern, indem du die `_config.yml`-Datei in deinem Repository bearbeitest. Du kannst auch eine Beschreibung für deine Website hinzufügen.

1. Klicke auf die Registerkarte **Code** deines Repositorys.
1. Klicke in der Dateiliste auf `_config.yml`, um die Datei zu öffnen.
1. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, um die Datei zu bearbeiten.
1. Die `_config.yml`-Datei enthält bereits eine Zeile, die das Design für deine Website angibt. Füge eine neue Zeile mit `title:` gefolgt von dem gewünschten Titel hinzu. Füge eine neue Zeile mit `description:` gefolgt von der gewünschten Beschreibung hinzu. Beispiel:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. Wenn du mit der Bearbeitung der Datei fertig bist, klicke auf **Änderungen committen**.

## Nächste Schritte

Weitere Informationen zum Hinzufügen zusätzlicher Seiten zu deiner Website findest du unter [Hinzufügen von Inhalten zu deiner GitHub Pages-Website mit Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites).

Weitere Informationen zum Einrichten einer {% data variables.product.prodname_pages %}-Website mit Jekyll findest du unter [Informationen zu GitHub Pages und Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).
