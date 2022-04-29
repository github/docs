---
title: Git tags
shortTitle: Etiquetas
allowTitleToDifferFromFilename: true
intro: 'The Git tags API lets you read and write tag objects to your Git database on {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git tags API

Una etiqueta de git es similar a una [referencia de Git](/rest/reference/git#refs), pero la confirmación de Git a la que apunta jamás cambia. Las etiquetas de git son útiles cuando quieres apuntar a algún lanzamiento específico. Estas terminales te permiten leer y escribir [objetos de etiquetas](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags)en tu base de datos de Git en {% data variables.product.product_name %}. La API de etiquetas de Git son compatibles únicamente con los [objetos de etiqueta anotados](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), no con etiquetas ligeras.
