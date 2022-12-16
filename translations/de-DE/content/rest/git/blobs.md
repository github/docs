---
title: Git-Blobs
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'Verwende die REST-API, um mit einem Git-Blob (Binary Large Object) zu interagieren. Git-Blob ist der Objekttyp, der zum Speichern des Inhalts jeder Datei in einem Repository verwendet wird.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b29c69d2635e20720d23aad62c7aa88984cff984
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192721'
---
## Informationen zu Git-Blobs

Ein Git-Blob (Binary Large Object) ist der Objekttyp, der zum Speichern des Inhalts jeder Datei in einem Repository verwendet wird. Der SHA-1-Hash der Datei wird berechnet und im Blobobjekt gespeichert. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Blobobjekten](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) in deine Git-Datenbank auf {% data variables.product.product_name %}. Blobs nutzen [diese benutzerdefinierten Medientypen](#custom-media-types-for-blobs). Weitere Informationen zur Verwendung von Medientypen in der API findest du [hier](/rest/overview/media-types).

### Benutzerdefinierte Medientypen für Blobs

Dies sind die unterstützten Medientypen für Blobs.

    application/json
    application/vnd.github.raw

Weitere Informationen findest du unter [Medientypen](/rest/overview/media-types).
