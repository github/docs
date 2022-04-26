---
title: ユーザのブロック
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

Organization に対するブロック呼び出しを実行するには、呼び出しの認証に使用するトークンに `admin:org` が必要です。 それがない場合には、`HTTP 404` が返されます。
