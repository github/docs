---
title: Wiki-Inhalte bearbeiten
intro: Du kannst Bilder und Links zu Inhalten zu Deinem Wiki hinzufügen und unterstützte MediaWiki-Formate verwenden.
redirect_from:
  - /articles/adding-links-to-wikis/
  - /articles/how-do-i-add-links-to-my-wiki/
  - /articles/how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/how-do-i-add-images-to-my-wiki/
  - /articles/adding-images-to-wikis/
  - /articles/supported-mediawiki-formats/
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

### Links hinzufügen

In Wikis kannst Du Links mit dem standardmäßig von Deiner Webseite unterstützten Markup oder mit der MediaWiki-Syntax erstellen. Ein Beispiel:

- Wenn Deine Seiten mit Markdown formatiert sind, ist die Link-Syntax `[Link Text](full-URL-of-wiki-page)`.
- Wenn Du die MediaWiki-Syntax verwenden, ist die Link-Syntax `[[Link Text|nameofwikipage]]`.

### Bilder hinzufügen

Wikis können Bilder im PNG-, JPEG- und GIF-Format anzeigen.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Navigiere über die Wiki-Seitenleiste zu der Seite, die Du ändern möchtest, und klicke dann auf **Edit** (Bearbeiten).
4. Klicke auf der Wiki-Symbolleiste auf **Image** (Bild). ![Schaltfläche „Wiki Add image" (Bild zu Wiki hinzufügen)](/assets/images/help/wiki/wiki_add_image.png)
5. Gib im Dialogfeld „Insert Image“ (Bild einfügen) die Bild-URL und den alt-Text ein. Letzterer wird von Suchmaschinen und Bildschirmlesern genutzt werden.
6. Klicke auf **OK**.

#### Auf Bilder in einem Repository verknüpfen

Du kannst auf ein Bild verknüpfen, das in einem Repository auf {% data variables.product.product_name %} gespeichert ist, indem Du die URL im Browser kopierst und sie als Pfad für das Bild verwendest. Die Einbindung eines Bildes in einem Wiki mit Markdown sieht in etwa wie folgt aus:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

### Unterstützte MediaWiki-Formate

Unabhängig davon, in welcher Markup-Sprache Deine Wiki-Seite geschrieben wurde, wird eine bestimmte MediaWiki-Syntax immer für Dich verfügbar sein.
- Links ([mit Ausnahme von Asciidoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- horizontale Regeln über `---`
- Kürzel (wie `&delta;` oder `&euro;`)

Aus Sicherheits- und Leistungsgründen werden einige Syntaxen nicht unterstützt.
- [Transklusion](https://www.mediawiki.org/wiki/Transclusion)
- Definitionslisten
- Einrückung
- Inhaltsverzeichnis
