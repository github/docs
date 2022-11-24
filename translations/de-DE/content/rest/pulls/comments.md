---
title: Pull-Request-Review-Kommentare
shortTitle: Review comments
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6d49aa3d5bca7f74a21c1cce32cecd38abe9366d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067730'
---
## Informationen zur API für Pull Request-Review-Kommentare

Pull Request-Review-Kommentare sind Kommentare zu einem Teil des vereinheitlichten Formats, der während einer Pull Request-Review vorgenommen wurde. Commit- und Issue-Kommentare unterscheiden sich von Pull Request-Review-Kommentaren. Du wendest Commit-Kommentare direkt auf einen Commit an und du wendest Issue-Kommentare an, ohne auf einen Teil des vereinheitlichten Formats zu verweisen. Weitere Informationen findest du unter [Erstellen eines Commit-Kommentars](/rest/reference/commits#create-a-commit-comment) und [Erstellen eines Issue-Kommentars](/rest/reference/issues#create-an-issue-comment).

### Benutzerdefinierte Medientypen für Pull Request-Review-Kommentare

Dies sind die unterstützten Medientypen für Pull Request-Review-Kommentare.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Weitere Informationen findest du unter [Benutzerdefinierte Medientypen](/rest/overview/media-types).
