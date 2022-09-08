---
title: Comentários das revisões de pull request
shortTitle: Review comments
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6d49aa3d5bca7f74a21c1cce32cecd38abe9366d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067727'
---
## Sobre a API de comentários de revisão de solicitação pull

Os comentários de revisão de pull request são comentários em uma parte do diff unificado feitos durante uma revisão de pull request. Comentários de commit e comentários de problemas são são diferentes dos comentários de revisão de pull request. Você aplica comentários de submissão diretamente para um commit e aplica comentários de problema sem fazer referência a uma parte do diff unificado. Para obter mais informações, confira "[Criar um comentário sobre um commit](/rest/reference/commits#create-a-commit-comment)" e "[Criar um comentário sobre um problema](/rest/reference/issues#create-an-issue-comment)".

### Tipos de mídia personalizados para comentários de revisão de pull request

Estes são os tipos de mídia compatíveis com os comentários de revisão de pull request.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para obter mais informações, confira "[Tipos de mídia personalizados](/rest/overview/media-types)".
