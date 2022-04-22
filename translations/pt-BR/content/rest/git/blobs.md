---
title: Blobs
intro: 'A Git blob (binary large object) is the object type used to store the contents of each file in a repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The file's SHA-1 hash is computed and stored in the blob object. These endpoints allow you to read and write [blob objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects)
to your Git database on {% data variables.product.product_name %}. Blobs leverage [these custom media types](#custom-media-types-for-blobs). You can read more about the use of media types in the API [here](/rest/overview/media-types).

### Custom media types for blobs

These are the supported media types for blobs.

    application/json
    application/vnd.github.VERSION.raw

For more information, see "[Media types](/rest/overview/media-types)."