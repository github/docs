---
title: Git blobs
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'The Git blob API lets you create and get a Git blob (binary large object), the object type used to store the contents of each file in a repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git blob API

Um blob (objeto binário grande) do Git é o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório. O hash SHA-1 do arquivo é calculado e armazenado no objeto do blob. Estes pontos de extremidade permitem ler e escrever [objetos do blob](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects) em seu banco de dados d Git em {% data variables.product.product_name %}. Os blobs aproveitam [esses tipos de mídia personalizados](#custom-media-types-for-blobs). Você pode ler mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).

### Tipos de mídia personalizados para os blobs

Estes são os tipos de mídia compatíveis com blobs.

    application/json
    application/vnd.github.VERSION.raw

Para obter mais informações, consulte "[Tipos de mídia](/rest/overview/media-types)".
