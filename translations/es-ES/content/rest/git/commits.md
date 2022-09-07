---
title: Git commits
shortTitle: Confirmaciones
allowTitleToDifferFromFilename: true
intro: 'The Git commits API lets you read and write commit objects to your Git database on {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git commits API

Una confirmación de Git es una impresión de pantalla de la jerarquía ([árbol de Git](/rest/reference/git#trees)) y del contenido de los archivos ([blob de Git](/rest/reference/git#blobs)) en un reposiotorio de Git. These endpoints allow you to read and write [commit objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) to your Git database on {% data variables.product.product_name %}.
