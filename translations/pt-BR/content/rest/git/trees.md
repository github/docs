---
title: Árvores do Git
shortTitle: Trees
allowTitleToDifferFromFilename: true
intro: 'Use a API REST para interagir com objetos de árvore em seu banco de dados Git no {% data variables.product.product_name %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193046'
---
## Sobre as árvores de Git

Um objeto da árvore do Git cria a hierarquia entre arquivos em um repositório do Git. Você pode usar o objeto da árvore do Git para criar a relação entre diretórios e os arquivos que eles contêm. Esses pontos de extremidade permitem que você leia e grave [objetos de árvore](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects) no banco de dados do Git no {% data variables.product.product_name %}.
