---
title: Git-Blobs
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: Mit der Git-Blob-API kannst du einen Git-Blob ( Binary Large Object) erstellen und abrufen. Dieser Objekttyp wird zum Speichern des Inhalts der einzelnen Dateien in einem Repository verwendet.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e815b7d7ea3d63ced4c486605891a10dcb870176
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060618'
---
## Informationen zur Git-Blob-API

Ein Git-Blob (Binary Large Object) ist der Objekttyp, der zum Speichern des Inhalts jeder Datei in einem Repository verwendet wird. Der SHA-1-Hash der Datei wird berechnet und im Blobobjekt gespeichert. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Blobobjekten](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects) in deine Git-Datenbank auf {% data variables.product.product_name %}. Blobs nutzen [diese benutzerdefinierten Medientypen](#custom-media-types-for-blobs). Weitere Informationen zur Verwendung von Medientypen in der API findest du [hier](/rest/overview/media-types).

### Benutzerdefinierte Medientypen für Blobs

Dies sind die unterstützten Medientypen für Blobs.

    application/json
    application/vnd.github.VERSION.raw

Weitere Informationen findest du unter [Medientypen](/rest/overview/media-types).
