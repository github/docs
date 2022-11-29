---
title: Запросы данных
intro: 'API вытягивания позволяет перечислять запросы на вытягивание, а также просматривать, изменять, создавать и даже объединять их.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b140c41062e4fea4c1cb1299b23de774963913af
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181322'
---
## Сведения об API вытягивания

API запросов на вытягивание позволяет перечислять запросы на вытягивание, а также просматривать, изменять, создавать и даже объединять их. Для управления комментариями к запросам на вытягивание используется [API комментариев к проблемам](/rest/reference/issues#comments).

Каждый запрос на вытягивание является проблемой, но не каждая проблема является запросом на вытягивание. По этой причине "общие" для них действия, такие как управление уполномоченными, метками и вехами, предоставляются в [API проблем](/rest/reference/issues).

### Пользовательские типы мультимедиа для запросов на вытягивание

Это поддерживаемые типы мультимедиа для запросов на вытягивание.

    application/vnd.github.raw+json
    application/vnd.github.text+json
    application/vnd.github.html+json
    application/vnd.github.full+json
    application/vnd.github.diff
    application/vnd.github.patch

Дополнительные сведения см. в статье [Пользовательские типы фиксации](/rest/overview/media-types).

Если различие повреждено, обратитесь в {% data variables.contact.contact_support %}. В сообщении укажите имя репозитория и идентификатор запроса на вытягивание.

### Ссылочные связи

Запросы на вытягивание имеют следующие ссылочные связи:

Имя | Описание
-----|-----------|
`self`| Расположение API этого запроса на вытягивание.
`html`| Расположение HTML этого запроса на вытягивание.
`issue`| Расположение API [проблемы](/rest/reference/issues) этого запроса на вытягивание.
`comments`| Расположение API [комментариев к проблеме](/rest/reference/issues#comments) этого запроса на вытягивание.
`review_comments`| Расположение API [комментариев к проверке](/rest/reference/pulls#comments) этого запроса на вытягивание.
`review_comment`| [Шаблон URL-адреса](/rest#hypermedia) для создания расположения API для [комментария к проверке](/rest/reference/pulls#comments) в репозитории этого запроса на вытягивание.
`commits`|Расположение API [фиксаций](#list-commits-on-a-pull-request) этого запроса на вытягивание.
`statuses`| Расположение API [состояний фиксации](/rest/reference/commits#commit-statuses) этого запроса на вытягивание, то есть состояний его ветви `head`.
