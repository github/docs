---
title: Commits do Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'A API de commits do Git permite que você leia e grave objetos de commit no banco de dados do Git no {% data variables.product.product_name %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063479'
---
## Sobre a API de Commits do Git

Um commit do Git é um instantâneo da hierarquia ([árvore do Git](/rest/reference/git#trees)) e do conteúdo dos arquivos ([blob do Git](/rest/reference/git#blobs)) em um repositório Git. Esses pontos de extremidade permitem que você leia e grave [objetos de commit](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) no banco de dados do Git no {% data variables.product.product_name %}.
