---
title: Automatisch verlinkte Verweise und URLs
intro: 'Verweise auf URLs, Issues, Pull Requests und Commits werden automatisch gekürzt und in Links umgewandelt.'
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Auto linked references
ms.openlocfilehash: 6f6548dbe931a7a6adb809aa4e5616db4358c242
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147419689'
---
## URLs

{% data variables.product.product_name %} erstellt aus Standard-URLs automatisch Links.

`Visit https://github.com`

![Gerenderte automatisch verlinkte URL](/assets/images/help/writing/url-autolink-rendered.png)

Weitere Informationen zum Erstellen von Links findest du unter [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax/#links).

## Issues und Pull Requests

In Unterhaltungen auf {% data variables.product.product_name %} werden Verweise auf Issues und Pull Requests automatisch in verkürzte Links umgewandelt.

{% note %}

**Hinweis**: Automatisch verknüpfte Verweise werden nicht in Wikis oder Dateien in einem Repository erstellt.

{% endnote %}

| Verweistyp | Unformatierter Verweis | Kurzlink |
| --- | --- | --- |
| URL des Issues oder Pull Requests | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` und Nummer des Issues oder des Pull Requests | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` und Nummer des Issues oder des Pull Requests | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` und Nummer des Issues oder Pull Requests | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` und Nummer des Issues oder des Pull Requests | github/linguist#4039 | [github/linguist#4039](https://github.com/github/linguist/pull/4039)

{% ifversion fpt or ghec %} Wenn du auf ein Issue, einen Pull Request oder eine Diskussion in einer Liste verweist, werden anstelle des Verweises Titel und Status angezeigt. Weitere Informationen zu Aufgabenlisten findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).
{% endif %}

## Bezeichnungen
Wenn du auf die URL einer Bezeichnung in Markdown verweist, wird die Bezeichnung automatisch gerendert. Nur Bezeichnungen des gleichen Repositorys werden gerendert. URLs, die auf eine Bezeichnung aus einem anderen Repository verweisen, werden wie eine beliebige [URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls) gerendert.

Du kannst die URL einer Bezeichnung finden, indem du zur Bezeichnungsseite navigierst und auf eine Bezeichnung klickst. Beispielsweise lautet die URL der Bezeichnung „enhancement“ in unserem [öffentlichen Dokumentationsrepository](https://github.com/github/docs/)

```md
https://github.com/github/docs/labels/enhancement
```

## Commit-SHAs

Verweise auf den SHA-Hash eines Commits werden zum Committen auf {% data variables.product.product_name %} automatisch in verkürzte Links umgewandelt.

| Verweistyp | Unformatierter Verweis | Kurzlink |
| --- | --- | --- |
| Commit-URL | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## Benutzerdefinierte automatische Verknüpfungen von externen Ressourcen

{% data reusables.repositories.autolink-references %}

## Weiterführende Themen

- [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)
