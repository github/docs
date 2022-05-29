---
title: Tags do Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'A API de tags do Git permite ler e escrever objetos de tags no banco de dados do Git em {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de tags do Git

Uma tag do Git é semelhante a uma [Referência do Git](/rest/reference/git#refs), mas o commit do Git para o qual ela aponta nunca muda. As tags do Git são úteis quando você deseja apontar para versões específicas. Esses pontos de extremidade permitem ler e escrever [tags dos objetos](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) em seu banco de dados Git em {% data variables.product.product_name %}. A API de tags do Git é compatível apenas com [objetos de tags anotadas](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), não tags leves.
