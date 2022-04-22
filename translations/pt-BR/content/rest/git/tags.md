---
title: Tags
intro: 'A Git tag is similar to a [Git reference](/rest/reference/git#refs), but the Git commit that it points to never changes.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

As tags do Git são úteis quando você deseja apontar para versões específicas. Esses pontos de extremidade permitem ler e escrever [tags dos objetos](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) em seu banco de dados Git em {% data variables.product.product_name %}. A API de tags do Git é compatível apenas com [objetos de tags anotadas](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), não tags leves.
