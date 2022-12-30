---
title: Wiki-Inhalte bearbeiten
intro: Du kannst Bilder und Links zu Inhalten in deinem Wiki hinzufügen und einige unterstützte MediaWiki-Formate verwenden.
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 0afae4335dbf6ff78c0b0e1a2bef4cebed637a5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578940'
---
## Links hinzufügen

In Wikis kannst du Links mit dem standardmäßig von deiner Webseite unterstützten Markup oder mit der MediaWiki-Syntax erstellen. Beispiel:

- Wenn Seiten mit Markdown gerendert werden, lautet die Linksyntax `[Link Text](full-URL-of-wiki-page)`.
- Bei der MediaWiki-Syntax lautet die Linksyntax `[[nameofwikipage|Link Text]]`.

## Hinzufügen von Bildern

Wikis können Bilder im PNG-, JPEG- und GIF-Format anzeigen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Navigiere über die Wiki-Seitenleiste zu der Seite, die geändert werden soll, und klicke dann auf **Edit** (Bearbeiten).
4. Klicke auf der Wiki-Symbolleiste auf **Image** (Bild).
   ![Schaltfläche „Wiki Add image“ (Bild zu Wiki hinzufügen)](/assets/images/help/wiki/wiki_add_image.png)
5. Gib im Dialogfeld „Insert Image“ (Bild einfügen) die Bild-URL und den alt-Text ein. Letzterer wird von Suchmaschinen und Bildschirmlesern genutzt werden.
6. Klicken Sie auf **OK**.

### Auf Bilder in einem Repository verknüpfen

Du kannst ein Bild in einem Repository auf {% data variables.product.product_name %} verknüpfen, indem du die URL im Browser kopierst und sie als Pfad für das Bild verwendest. Die Einbindung eines Bildes in einem Wiki mit Markdown sieht in etwa wie folgt aus:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## Hinzufügen mathematischer Ausdrücke und Diagramme{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## Unterstützte MediaWiki-Formate

Die MediaWiki-Syntax ist in gewissem Umfang immer verfügbar – unabhängig davon, mit welcher Markupsprache deine Wikiseite geschrieben wurde.
- Links ([außer AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Horizontale Regeln über `---`
- Kürzelentitäten (z. B. `&delta;` oder `&euro;`)

Aus Sicherheits- und Leistungsgründen werden einige Syntaxen nicht unterstützt.
- [Transklusion](https://www.mediawiki.org/wiki/Transclusion)
- Definitionslisten
- Indentation
- Inhaltsverzeichnis
