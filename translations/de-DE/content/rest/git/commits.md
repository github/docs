---
title: Git-Commits
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Die Git-Commits-API ermöglicht es dir, Commitobjekte in deiner Git-Datenbank auf {% data variables.product.product_name %} zu lesen und in sie zu schreiben.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2b0f1e07134b67be6c00f8bf1c65d9ccf0c2aac5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063482'
---
## Informationen zur API für Git-Commits

Ein Git-Commit ist eine Momentaufnahme der Hierarchie ([Git-Struktur](/rest/reference/git#trees)) und der Inhalte der Dateien ([Git-Blob](/rest/reference/git#blobs)) in einem Git-Repository. Diese Endpunkte ermöglichen dir das Lesen und Schreiben von [Commitobjekten](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) in deine Git-Datenbank auf {% data variables.product.product_name %}.
