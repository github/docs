---
title: Типы мультимедиа
intro: 'Сведения о типах носителей для указания формата данных, которые необходимо использовать.'
redirect_from:
  - /v3/media
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: d93ba31647967f2f3a38dd47c5cc6d8a623c6c6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681128'
---
Настраиваемые типы мультимедиа используются в API, чтобы потребители могли выбирать формат данных, которые они хотят получить. Это делается путем добавления следующих типов (одного или нескольких) в заголовок `Accept` при создании запроса. Типы мультимедиа связаны с конкретными ресурсами, что позволяет изменять их независимо друг от друга и обеспечить поддержку форматов, которые не поддерживают другие ресурсы.

Все типы мультимедиа {% data variables.product.product_name %} выглядят следующим образом:

    application/vnd.github.param[+json]

Основные типы мультимедиа, поддерживаемые API:

    application/vnd.github+json
    application/json

{% note %}

**Примечание.** В прошлом мы рекомендовали включить `v3` в заголовок `Accept`. Это больше не требуется и не повлияет на запросы API.

{% endnote %}

Если вы указываете свойство (например, full, raw и т. п.), поместите его после `github`:

    application/vnd.github.raw+json

## Свойства текста комментария

Текст комментария можно написать в [GitHub Flavored Markdown][gfm]. Все API [проблем](/rest/reference/issues), [комментариев к проблеме](/rest/reference/issues#comments), [комментариев к запросу на вытягивание](/rest/reference/pulls#comments) и [комментариев gist](/rest/reference/gists#comments) принимают одни и те же типы мультимедиа, перечисленные далее.

### Raw

    application/vnd.github.raw+json

Возвращает необработанный текст в разметке Markdown. Ответ будет включать `body`. Используется по умолчанию, если вы не передаете определенный тип мультимедиа.

### Текст

    application/vnd.github.text+json

Возвращает только текстовое представление разметки Markdown. Ответ будет включать `body_text`.

### HTML

    application/vnd.github.html+json

Возвращает HTML-представление, преобразованное из разметки Markdown. Ответ будет включать `body_html`.

### Полное

    application/vnd.github.full+json

Возвращает представления в виде необработанных данных, текста и HTML. Ответ будет включать `body`, `body_text` и `body_html`.

## Свойства BLOB-объекта Git

При [получении BLOB-объекта](/rest/reference/git#get-a-blob) разрешены следующие типы мультимедиа.

### JSON

    application/vnd.github+json
    application/json

Возвращает JSON-представление BLOB-объекта с `content` в виде строки в кодировке base64. Используется по умолчанию, если ничего не передается.

### Raw

    application/vnd.github.raw

Возвращает необработанные данные BLOB-объекта.

## Фиксации, сравнение фиксаций и запросы на вытягивание

[API фиксаций](/rest/reference/repos#commits) и [API запросов на вытягивание](/rest/reference/pulls) поддерживают форматы [diff][git-diff] и [patch][git-patch].

### diff

    application/vnd.github.diff

### Исправление

    application/vnd.github.patch

### sha

    application/vnd.github.sha

## Содержимое репозитория

### Raw

    application/vnd.github.raw

Возвращает необработанное содержимое файла. Используется по умолчанию, если вы не передаете определенный тип мультимедиа.

### HTML

    application/vnd.github.html

Для файлов разметки, таких как Markdown или AsciiDoc, можно получить отрисованный HTML-код с помощью типа мультимедиа `.html`. Языки разметки отрисовываются в HTML с помощью [библиотеки разметки](https://github.com/github/markup) с открытым кодом.

## Gist

### Raw

    application/vnd.github.raw

Возвращает необработанное содержимое gist. Используется по умолчанию, если вы не передаете определенный тип мультимедиа.

### base64

    application/vnd.github.base64

Перед отправкой содержимое gist шифруется в кодировке Base64. Это может быть полезно, если gist содержит недопустимые последовательности UTF-8.

[gfm]:http://github.github.com/github-flavored-markdown/
[git-diff]: http://git-scm.com/docs/git-diff
[git-patch]: http://git-scm.com/docs/git-format-patch
[hypermedia]: /rest#hypermedia
[versions]: /developers/overview/about-githubs-apis
