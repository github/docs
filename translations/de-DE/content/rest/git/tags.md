---
title: Git-Tags
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'Die Git-Tags-API ermöglicht dir auf {% data variables.product.product_name %} das Lesen und Schreiben von Tagobjekten aus deiner und in deine Git-Datenbank.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d0ba994be564467d3b84744e6618417b927828aa
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131398'
---
## Informationen zur API für Git-Tags

Ein Git-Tag ähnelt einem [Git-Verweis](/rest/reference/git#refs), doch der Git-Commit, auf den es verweist, ändert sich nie. Git-Tags sind hilfreich, wenn du auf bestimmte Releases verweisen möchtest. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Tagobjekten](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) in deine Git-Datenbank auf {% data variables.product.product_name %}. Die API für Git-Tags unterstützt nur [annotierte Tagobjekte](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), keine Lightweight-Tags.
