---
title: GPG Keys
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

在 `public_key` 响应字段中返回的数据不是 GPG 格式化的密钥。 当用户上传 GPG 密钥时，将对密钥进行剖析，然后提取并存储加密公钥。 此加密密钥是本页面上的 API 所返回的密钥。 此密钥不适合直接用于 GPG 等程序。
