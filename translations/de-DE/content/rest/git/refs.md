---
title: Git-Verweise
shortTitle: References
intro: 'Verwende die REST-API, um mit Verweisen in deiner Git-Datenbank in {% data variables.product.product_name %} zu interagieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c248685d867fff1835018f0b3021536a8a968168
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192897'
---
## Informationen zu Git-Verweisen

Ein Git-Verweis (`git ref`) ist eine Datei, die einen Git-SHA-1-Commithash enthält. Wenn du auf einen Git-Commit verweist, kannst du anstelle des Hashs den Git-Verweis verwenden, dessen Name leichter zu merken ist. Der Git-Verweis kann neu geschrieben werden, um auf einen neuen Commit zu verweisen. Ein Branch ist ein Git-Verweis, der den neuen Git-Commithash speichert. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Verweisen](https://git-scm.com/book/en/v2/Git-Internals-Git-References) in deine Git-Datenbank auf {% data variables.product.product_name %}.
