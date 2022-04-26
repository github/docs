---
title: Review Comments
intro: Os comentários de revisão de pull request são comentários em uma parte do diff unificado feitos durante uma revisão de pull request.
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

Comentários de commit e comentários de problemas são são diferentes dos comentários de revisão de pull request. Você aplica comentários de submissão diretamente para um commit e aplica comentários de problema sem fazer referência a uma parte do diff unificado. Para obter mais informações, consulte "[Criar um comentário de commit](/rest/reference/commits#create-a-commit-comment)" e "[Criar um comentário de problema](/rest/reference/issues#create-an-issue-comment)".

### Tipos de mídia personalizados para comentários de revisão de pull request

Estes são os tipos de mídia compatíveis com os comentários de revisão de pull request.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para obter mais informações, consulte "[tipos de mídia personalizados](/rest/overview/media-types)".
