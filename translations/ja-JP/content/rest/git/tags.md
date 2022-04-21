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

Git tags are helpful when you want to point to specific releases. These endpoints allow you to read and write [tag objects](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) to your Git database on {% data variables.product.product_name %}. The Git tags API only supports [annotated tag objects](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), not lightweight tags.
