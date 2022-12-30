---
title: Medientypen
intro: 'Hier erfährst du mehr über Medientypen, um das Format der Daten anzugeben, die du nutzen möchtest.'
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681125'
---
In der API werden benutzerdefinierte Medientypen verwendet, damit Consumer das Format der Daten auswählen können, die sie empfangen möchten. Dies erfolgt durch Hinzufügen eines oder mehrerer der folgenden Typen zum `Accept`-Header, wenn du eine Anforderung vornehmen. Medientypen sind ressourcenspezifisch, sodass sie unabhängig voneinander geändert werden können und Formate unterstützen, die von anderen Ressourcen nicht unterstützt werden.

Alle {% data variables.product.product_name %}-Medientypen sehen wie folgt aus:

    application/vnd.github.param[+json]

Die einfachsten Medientypen, die von der API unterstützt werden, sind:

    application/vnd.github+json
    application/json

{% note %}

**Hinweis:** In der Vergangenheit wurde empfohlen, `v3` in den `Accept`-Header einzufügen. Dies ist nicht mehr erforderlich und hat keine Auswirkungen auf API-Anforderungen.

{% endnote %}

Wenn du eine Eigenschaft (wie full oder raw unten) festlegst, füge diese nach `github` ein:

    application/vnd.github.raw+json

## Eigenschaften des Kommentartexts

Der Textkörper eines Kommentars kann in [GitHub Flavored Markdown][gfm] geschrieben werden, [Probleme](/rest/reference/issues), [Problemkommentare](/rest/reference/issues#comments), [Pull Request-Kommentare](/rest/reference/pulls#comments) und die [Gist-Kommentar](/rest/reference/gists#comments)-APIs akzeptieren alle dieselben Medientypen:

### Raw

    application/vnd.github.raw+json

Gibt den unformatierten Markdown-Text zurück. Die Antwort enthält `body`. Dies ist der Standardwert, wenn du keinen bestimmten Medientyp übergibst.

### Text

    application/vnd.github.text+json

Gibt nur eine Textdarstellung des Markdown-Texts zurück. Die Antwort enthält `body_text`.

### HTML

    application/vnd.github.html+json

Gibt HTML zurück, das aus dem Markdown des Texts gerendert wird. Die Antwort enthält `body_html`.

### Vollständig

    application/vnd.github.full+json

Gibt Raw-, Text- und HTML-Darstellungen zurück. Die Antwort enthält `body`, `body_text` und `body_html`:

## Git-Blobeigenschaften

Die folgenden Medientypen sind beim [Abrufen eines Blobs](/rest/reference/git#get-a-blob) zulässig:

### JSON

    application/vnd.github+json
    application/json

Gibt die JSON-Darstellung des Blobs mit `content` als eine base64-codierten Zeichenfolge zurück. Dies ist der Standardwert, wenn nichts übergeben wird.

### Raw

    application/vnd.github.raw

Gibt die unformatierten Blobdaten zurück.

## Commits, Commitvergleich und Pull Requests

Die [Commits-API](/rest/reference/repos#commits) und [Pull Request-API](/rest/reference/pulls) unterstützen [diff][git-diff]- und [patch][git-patch]-Formate:

### diff

    application/vnd.github.diff

### patch

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## Repository-Inhalt

### Raw

    application/vnd.github.raw

Gibt die unformatierten Inhalte einer Datei zurück. Dies ist der Standardwert, wenn du keinen bestimmten Medientyp übergibst.

### HTML

    application/vnd.github.html

Für Markupdateien wie Markdown oder AsciiDoc kannst du den gerenderten HTML-Code mithilfe des Medientyps `.html` abrufen. Markupsprachen werden mit unserer Open-Source-[Markup-Bibliothek](https://github.com/github/markup) in HTML gerendert.

## Gists

### Raw

    application/vnd.github.raw

Gibt die unformatierten Inhalte eines Gists zurück. Dies ist der Standardwert, wenn du keinen bestimmten Medientyp übergibst.

### base64

    application/vnd.github.base64

Die Gist-Inhalte werden base64-codiert, bevor sie gesendet werden. Dies kann nützlich sein, wenn dein Gist ungültige UTF-8-Sequenzen enthält.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
