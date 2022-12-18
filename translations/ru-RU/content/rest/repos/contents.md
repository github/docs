---
title: Содержимое репозитория
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: 'Эти конечные точки API позволяют создавать, изменять и удалять содержимое в кодировке Base64 в репозитории.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: fd3619faeb8ccaeaa70e8a2be050881b4a169b64
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181319'
---
## Сведения об API содержимого репозитория

Чтобы запросить необработанный формат или отрисованный HTML (если он поддерживается), используйте пользовательские типы мультимедиа для содержимого репозитория.

### Пользовательские типы мультимедиа для содержимого репозитория

[Файлы сведений](/rest/reference/repos#get-a-repository-readme), [файлы](/rest/reference/repos#get-repository-content) и [символические ссылки](/rest/reference/repos#get-repository-content) поддерживают следующие пользовательские типы мультимедиа:

    application/vnd.github.raw
    application/vnd.github.html

Используйте тип мультимедиа `.raw` для получения содержимого файла.

Для файлов разметки, таких как Markdown или AsciiDoc, можно получить отрисованный HTML-код с помощью типа мультимедиа `.html`. Языки разметки отрисовываются в HTML с помощью [библиотеки разметки](https://github.com/github/markup) с открытым кодом.

[Все объекты](/rest/reference/repos#get-repository-content) поддерживают следующий пользовательский тип мультимедиа:

    application/vnd.github.object

Используйте параметр типа `object`мультимедиа для получения содержимого в согласованном формате объекта независимо от типа содержимого. Например, вместо массива объектов для каталога ответ будет объектом с атрибутом `entries`, содержащим массив объектов.

Дополнительные сведения об использовании типов мультимедиа в API см. [здесь](/rest/overview/media-types).
