---
title: GPGキー
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

`public_key` レスポンスフィールドで返されるデータは、GPG 形式のキーではありません。 ユーザが GPG キーをアップロードすると、そのキーは解析され、暗号化された公開鍵が抽出、保存されます。 この暗号鍵が、このページの API によって返されるものです。 この鍵は、GPG のようなプログラムで直接使用するには適していません。
