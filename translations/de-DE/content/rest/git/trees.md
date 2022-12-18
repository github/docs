---
title: Git-Strukturen
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'Die Git-Strukturen-API ermöglicht dir auf {% data variables.product.product_name %} das Lesen und Schreiben von Strukturobjekten aus deiner und in deine Git-Datenbank.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8c13e6c74f334152d67433ab9a90f7dac663b3d6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884469'
---
## Informationen zur Git-Struktur-API

Ein Git-Strukturobjekt erstellt die Hierarchie zwischen Dateien in einem Git-Repository. Du kannst das Git-Strukturobjekt verwenden, um die Beziehung zwischen Verzeichnissen und den darin enthaltenen Dateien zu erstellen. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Strukturobjekten](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) in deine Git-Datenbank auf {% data variables.product.product_name %}.
