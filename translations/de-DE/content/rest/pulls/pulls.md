---
title: Pulls
intro: 'Mit der Pulls-API kannst du Pull Requests auflisten, anzeigen, bearbeiten, erstellen und sogar mergen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 80e4a5a5257a8f2615b402567f91daa9e68a0077
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109100'
---
## Informationen zur Pull Request-API

Mit der Pull Request-API kannst du Pull Requests auflisten, anzeigen, bearbeiten, erstellen und sogar mergen. Kommentare zu Pull Requests können über die [Issue-Kommentar-API](/rest/reference/issues#comments) verwaltet werden.

Jeder Pull Request ist ein Issue, aber nicht jedes Issue ist ein Pull Request. Aus diesem Grund erflgen „gemeinsame“ Aktionen für beide Features, z. B. das Ändern von zugewiesenen Personen, Bezeichnungen und Meilensteinen, über die [Issues-API](/rest/reference/issues).

### Benutzerdefinierte Medientypen für Pull Requests

Die folgenden Medientypen werden für Pull Requests unterstützt.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

Weitere Informationen findest du unter [Benutzerdefinierte Medientypen](/rest/overview/media-types).

Wenn ein Diff beschädigt ist, wende dich an {% data variables.contact.contact_support %}. Füge den Repositorynamen und die Pull Request-ID in deine Nachricht ein.

### Linkbeziehungen

Pull Requests weisen diese möglichen Linkbeziehungen auf:

Name | BESCHREIBUNG
-----|-----------|
`self`| Der API-Speicherort dieses Pull Requests.
`html`| Der HTML-Speicherort dieses Pull Requests.
`issue`| Der API-Speicherort des [Issues](/rest/reference/issues) dieses Pull Requests.
`comments`| Der API-Speicherort der [Issue-Kommentare](/rest/reference/issues#comments) dieses Pull Requests.
`review_comments`| Der API-Speicherort der [Review-Kommentare](/rest/reference/pulls#comments) dieses Pull Requests.
`review_comment`| Die [URL-Vorlage](/rest#hypermedia), um den API-Speicherort für einen [Review-Kommentar](/rest/reference/pulls#comments) im Repository dieses Pull Requests zu erstellen.
`commits`|Der API-Speicherort der [Commits](#list-commits-on-a-pull-request) dieses Pull Requests.
`statuses`| Der API-Speicherort der [Commit-Status](/rest/reference/commits#commit-statuses) dieses Pull Requests, d. h. der Status des Branches `head`.
