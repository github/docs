---
title: Blob
intro: Git Blob（二进制大对象）是用于将每个文件的内容存储在仓库中的对象类型。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

文件的 SHA-1 哈希在 Blob 对象中计算和存储。 这些端点允许您在 {% data variables.product.product_name %} 上的 Git 数据库中读取和写入 [blob 对象](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects)。 Blob 使用[这些自定义媒体类型](#custom-media-types-for-blobs)。 您可以在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。

### Blob 的自定义媒体类型

以下是 blob 支持的媒体类型。

    application/json
    application/vnd.github.VERSION.raw

更多信息请参阅“[媒体类型](/rest/overview/media-types)”。
