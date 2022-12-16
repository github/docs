---
title: Git-Strukturen
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'Verwende die REST-API, um mit Strukturobjekten in deiner Git-Datenbank in {% data variables.product.product_name %} zu interagieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ecd3781bbc78fff8b2d75f25b16d303081a7d605
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193049'
---
## Informationen zu Git-Strukturen

Ein Git-Strukturobjekt erstellt die Hierarchie zwischen Dateien in einem Git-Repository. Du kannst das Git-Strukturobjekt verwenden, um die Beziehung zwischen Verzeichnissen und den darin enthaltenen Dateien zu erstellen. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Strukturobjekten](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects) in deine Git-Datenbank auf {% data variables.product.product_name %}.
