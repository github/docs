---
title: Gist
intro: 'API Gists позволяет авторизованному пользователю перечислять, создавать, обновлять и удалять общедоступные объекты gist на сайте GitHub.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 47961c5dfeeb5f320bbac67ffb0573c31709bd5b
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181327'
---
## Сведения об API Gist

API Gist позволяет просматривать и изменять gist. Дополнительные сведения о gist см. в разделе [Редактирование и предоставление доступа к содержимому с помощью gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists).

### Аутентификация

Можно читать общедоступные gist {% ifversion ghae or ghes %}и создавать их для анонимных пользователей без токена.{% else %} анонимно, но для создания gist необходимо выполнить вход в GitHub.{% endif %} Для чтения или записи gist от имени пользователя вам потребуется область OAuth Gist и токен. Дополнительные сведения см. в разделе [Области для приложений OAuth](/developers/apps/scopes-for-oauth-apps).

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Усечение

API Gist предоставляет до одного мегабайта содержимого для каждого файла в gist. Каждый файл, возвращаемый для gist через API, имеет ключ с именем `truncated`. Если `truncated` имеет значение `true`, это значит, что файл имеет слишком большой размер и в `content` возвращена только часть содержимого.

Если требуется полное содержимое файла, можно выполнить запрос `GET` к URL-адресу, указанному в `raw_url`. Имейте в виду, что для файлов размером более десяти мегабайт необходимо клонировать gist по URL-адресу, предоставленному `git_pull_url`.

Помимо усечения содержимого определенного файла, весь список файлов может быть усечен, если общее число файлов превышает 300. Если ключ верхнего уровня `truncated` имеет значение `true`, в списке файлов возвращены только первые 300 файлов. Если нужно получить все файлы gist, необходимо клонировать gist через URL-адрес, предоставленный `git_pull_url`.

### Пользовательские типы мультимедиа для gist

Ниже приведены поддерживаемые типы мультимедиа для получения содержимого gist.

    application/vnd.github.raw
    application/vnd.github.base64

Дополнительные сведения см. в разделе [Типы носителей](/rest/overview/media-types).
