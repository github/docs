---
title: Git trees
shortTitle: Árboles
allowTitleToDifferFromFilename: true
intro: 'The Git trees API lets you read and write tree objects to your Git database on {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git trees API

Un objeto de árbol de Git crea la jerarquía entre archivos para un repositorio de Git. Puedes utilizar el objeto de árbol de Git para crear una relación entre directorios y entre los archivos que contienen. Estas terminales te permiten leer y escribir [objetos de árbol](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects)en tu base de datos de Git en {% data variables.product.product_name %}.
