---
title: Git-Verweise
shortTitle: References
intro: 'Die Git-Verweise-API ermöglicht dir auf {% data variables.product.product_name %} das Lesen und Schreiben von Verweisen aus deiner und in deine Git-Datenbank.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 60f76710e14a754f9508f0919c94b9fbe57d21e1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093054'
---
## Informationen zur Git-Verweise-API

Ein Git-Verweis (`git ref`) ist eine Datei, die einen Git-SHA-1-Commithash enthält. Wenn du auf einen Git-Commit verweist, kannst du anstelle des Hashs den Git-Verweis verwenden, dessen Name leichter zu merken ist. Der Git-Verweis kann neu geschrieben werden, um auf einen neuen Commit zu verweisen. Ein Branch ist ein Git-Verweis, der den neuen Git-Commithash speichert. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Verweisen](https://git-scm.com/book/en/v1/Git-Internals-Git-References) in deine Git-Datenbank auf {% data variables.product.product_name %}.
