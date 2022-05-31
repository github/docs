---
title: Referências do Git
shortTitle: Referências
intro: 'A API de referências do Git permite ler e escrever referências para o banco de dados do Git em {% data variables.product.product_name %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## Sobre a API de referências do Git

Uma referência do Git (`git ref`) é um arquivo que contém um hash SHA-1 do commit do Git. Ao fazer referência a um commit do Git, você pode usar a referência do Git, que é um nome fácil de lembrar, em vez do hash. A referência do Git pode ser reescrita para apontar para um novo commit. Uma branch é uma referência Git que armazena o novo hash de commit do Git. Estes pontos de extremidade permitem ler e escrever [referências](https://git-scm.com/book/en/v1/Git-Internals-Git-References) para o seu banco de dados do Git em {% data variables.product.product_name %}.
