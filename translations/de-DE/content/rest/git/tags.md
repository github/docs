---
title: Git-Tags
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'Verwende die REST-API, um mit Tagobjekten in deiner Git-Datenbank in {% data variables.product.product_name %} zu interagieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0d0a10afabf100cb34a0061585b87b17d5afc416
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192889'
---
## Informationen zu Git-Tags

Ein Git-Tag ähnelt einem [Git-Verweis](/rest/reference/git#refs), doch der Git-Commit, auf den es verweist, ändert sich nie. Git-Tags sind hilfreich, wenn du auf bestimmte Releases verweisen möchtest. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Tagobjekten](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) in deine Git-Datenbank auf {% data variables.product.product_name %}. Die API unterstützt nur [annotierte Tagobjekte](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags), keine Lightweight-Tags.
