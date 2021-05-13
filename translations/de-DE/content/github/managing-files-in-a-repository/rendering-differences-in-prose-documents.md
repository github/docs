---
title: Unterschiede in Dokumenten mit Fließtext rendern
redirect_from:
  - /articles/rendering-differences-in-prose-documents
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Commits und Pull Requests an Fließtextdokumenten unterstützen die Darstellung dieser Dokumente im *Quell-* und im *gerenderten* Format.

In der Quellansicht wird der eingegebene Rohtext angezeigt. In der gerenderten Ansicht wird der Text dagegen so angezeigt, wie er gerendert auf {% data variables.product.product_name %} aussehen würde. Beispielsweise wird fett ausgezeichneter Text in der Quellansicht in Markdown `**fett**` dargestellt, in der gerenderten Ansicht dagegen als **fett**.

Das Rendering von Fließtext wird für gerenderte Dokumente unterstützt, die von [github/markup](https://github.com/github/markup) unterstützt werden:

* Markdown
* AsciiDoc
* Textile
* ReStructured Text
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Papiersymbol zum Anzeigen gerenderter Dokumente mit Fließtext](/assets/images/help/repository/rendered_prose_diff.png)

Zum Anzeigen der im Zuge eines Commits vorgenommenen Änderungen an einem Dokument klicke auf das Symbol {% octicon "file" aria-label="The paper icon" %}.

![Änderungen an gerendertem Fließtext](/assets/images/help/repository/rendered_prose_changes.png)

### Attributänderungen visualisieren

Zu Attributänderungen, die im Gegensatz zu Worten im gerenderten Dokument nicht sichtbar werden, geben wir gerne einen Toolhinweis. Beispielsweise erhältst Du bei der Änderung einer Link-URL von einer Website zu einer anderen einen Toolhinweis wie diesen:

![Attributänderungen an gerendertem Fließtext](/assets/images/help/repository/prose_diff_attributes.png)

### Kommentare zu Änderungen

[Kommentare zu Commits](/articles/commenting-on-differences-between-files) können nur zu Dateien in der *Quellansicht* Zeile für Zeile hinzugefügt werden.

### Zu Headern verknüpfen

Wie bei [anderen gerenderten Dokumenten mit Fließtext](/articles/about-readmes) wird ein Linksymbol erstellt, sobald Du den Mauszeiger über einen Dokumentheader bewegst. Du kannst die Leser Deines gerenderten Fließtextes über Links zu bestimmten Abschnitten leiten.

### Komplexe Unterschiede anzeigen

Einige Pull Requests umfassen sehr viele Änderungen an großen und komplexen Dokumenten. When the changes take too long to analyze, {% data variables.product.product_name %} can't always produce a rendered view of the changes. If this happens, you'll see an error message when you click the rendered button.

![Message when view can't be rendered](/assets/images/help/repository/prose_diff_rendering.png)

Jedoch kannst Du die Änderungen auch in der Quellansicht analysieren und kommentieren.

### HTML-Elemente anzeigen

Gerenderte Ansichten der Commits an HTML-Dokumenten werden nicht direkt unterstützt. In einigen Formaten wie Markdown kannst Du beliebig HTML im Dokument einbetten. Wenn diese Dokumente in {% data variables.product.product_name %} dargestellt werden, kann ein Teil dieser eingebetteten HTML in einer Vorschau angezeigt werden, manch andere HTML (wie ein eingebettetes YouTube-Video) hingegen nicht.

Im Allgemeinen zeigen gerenderte Ansichten von Dokumentänderungen, die eingebettete HTML enthalten, diejenigen Änderungen an den Elementen an, die in der {% data variables.product.product_name %}-Ansicht des Dokuments unterstützt werden. Aus Gründen der Vollständigkeit sollten Änderungen an Dokumenten, die eingebettete HTML enthalten, immer sowohl in der gerenderten als auch in der Quellansicht überprüft werden.
