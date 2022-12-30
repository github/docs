---
title: Commits do Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Use a API REST para interagir com objetos commit em seu banco de dados Git no {% data variables.product.product_name %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192622'
---
## Sobre commits do Git

Um commit do Git é um instantâneo da hierarquia ([árvore do Git](/rest/reference/git#trees)) e do conteúdo dos arquivos ([blob do Git](/rest/reference/git#blobs)) em um repositório Git. Esses pontos de extremidade permitem que você leia e grave [objetos de commit](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) no banco de dados do Git no {% data variables.product.product_name %}.
