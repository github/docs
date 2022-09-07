---
title: Blobs de Git
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'La API de blobs de Git te permite crear y obtener un blob de Git (BLOB: Objeto binario grande, por sus siglas en inglés), el cual es el tipo de objeto que se utiliza para almacenar el contenido de cada archivo en un repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Acerca de la API de blobs de Git

Un blob (objeto binario grande, por sus siglas en inglés) de Git es el tipo de objeto que se utiliza para almacenar el contenido de cada archivo en un repositorio. El hash SHA-1 del archivo se calcula y almacena en el objeto del blob. Estas terminales te permiten leer y escribir [objetos de blob](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects) en tu base de datos de Git en {% data variables.product.product_name %}. Los blobs aprovechan [estos tipos de medios personalizados](#custom-media-types-for-blobs). Puedes leer más acerca del uso de tipos de medios en la API [aquí](/rest/overview/media-types).

### Tipos de medios personalizados para los blobs

Estos son los tipos de medios compatibles para los blobs.

    application/json
    application/vnd.github.VERSION.raw

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".
