---
title: Комментарии к проверке запроса на вытягивание
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067733'
---
## Сведения об API комментариев к проверке запросов на вытягивание

Комментарии к проверке запросов на вытягивание — это комментарии к части расхождений, оставленные при проверке запроса на вытягивание. Комментарии к фиксациям и проблемам отличаются от комментариев к проверке запросов на вытягивание. Комментарии к фиксациям применяются непосредственно к фиксации, а комментарии к проблемам не включают ссылку на соответствующую часть расхождений. Дополнительные сведения см. в разделах [Создание комментария к фиксации](/rest/reference/commits#create-a-commit-comment) и [Создание комментария к проблеме](/rest/reference/issues#create-an-issue-comment).

### Пользовательские типы носителей для комментариев к проверке запросов на вытягивание

Это поддерживаемые типы носителей для комментариев к проверке запросов на вытягивание.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Дополнительные сведения см. в статье [Пользовательские типы фиксации](/rest/overview/media-types).
