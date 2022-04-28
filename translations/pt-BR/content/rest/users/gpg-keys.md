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

Os dados retornados no campo de resposta `public_key` não são uma chave com formato GPG. Quando um usuário faz o upload de uma chave GPG, ela é analisada e a chave pública criptográfica é extraída e armazenada. Essa chave criptográfica é o que é retornado pelas APIs nesta página. Esta chave não é adequada para ser usada diretamente por programas como o GPG.
