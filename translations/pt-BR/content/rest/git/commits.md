---
title: Commits do Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'A API de commits do Git permite ler e escrever objetos de commit no banco de dados do seu Git em {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre A API de commits do Git

Um commit do Git é um instantâneo da hierarquia ([árvore do Git](/rest/reference/git#trees)) e o conteúdo dos arquivos ([Blob do Git](/rest/reference/git#blobs)) em um repositório do Git. Estes pontos de extremidade permitem ler e escrever [objetos de commit](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) no seu banco de dados do Git em {% data variables.product.product_name %}.
