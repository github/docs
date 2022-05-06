---
title: Git commits
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'The Git commits API lets you read and write commit objects to your Git database on {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Git commits API

Um commit do Git é um instantâneo da hierarquia ([árvore do Git](/rest/reference/git#trees)) e o conteúdo dos arquivos ([Blob do Git](/rest/reference/git#blobs)) em um repositório do Git. These endpoints allow you to read and write [commit objects](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) to your Git database on {% data variables.product.product_name %}.
