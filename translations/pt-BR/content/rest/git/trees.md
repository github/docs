---
title: Árvores do Git
shortTitle: Árvores
allowTitleToDifferFromFilename: true
intro: 'A API de árvores do Git permite que você leia e escreva objetos em seu banco de dados Git em {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de árvores do Git

Um objeto da árvore do Git cria a hierarquia entre arquivos em um repositório do Git. Você pode usar o objeto da árvore do Git para criar a relação entre diretórios e os arquivos que eles contêm. Estes pontos de extremidade permitem que você leia e escreva [objetos de árvore](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) em seu banco de dados do Git em {% data variables.product.product_name %}.
