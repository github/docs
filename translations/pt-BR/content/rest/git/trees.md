---
title: Árvores do Git
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'A API de árvores do Git permite que você leia e grave objetos de árvore no banco de dados do Git no {% data variables.product.product_name %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884466'
---
## Sobre a API de Árvores do Git

Um objeto da árvore do Git cria a hierarquia entre arquivos em um repositório do Git. Você pode usar o objeto da árvore do Git para criar a relação entre diretórios e os arquivos que eles contêm. Esses pontos de extremidade permitem que você leia e grave [objetos de árvore](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) no banco de dados do Git no {% data variables.product.product_name %}.
