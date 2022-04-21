---
title: Etiquetas
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

Las etiquetas de git son útiles cuando quieres apuntar a algún lanzamiento específico. Estas terminales te permiten leer y escribir [objetos de etiquetas](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)en tu base de datos de Git en {% data variables.product.product_name %}. La API de etiquetas de Git son compatibles únicamente con los [objetos de etiqueta anotados](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), no con etiquetas ligeras.
