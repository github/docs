---
title: Git-Commits
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Verwende die REST-API, um mit Commitobjekten in deiner Git-Datenbank in {% data variables.product.product_name %} zu interagieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 07813929bac1dc0ff6093b302449f1f7beb905c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192625'
---
## Informationen zu Git-Commits

Ein Git-Commit ist eine Momentaufnahme der Hierarchie ([Git-Struktur](/rest/reference/git#trees)) und der Inhalte der Dateien ([Git-Blob](/rest/reference/git#blobs)) in einem Git-Repository. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Commitobjekten](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) in deine Git-Datenbank auf {% data variables.product.product_name %}.
