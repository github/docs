---
ms.openlocfilehash: 5adfb74ac2eb64e2716c68382db44b69e46ff7f4
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 04/07/2022
ms.locfileid: "141525414"
---
## <a name="contents"></a>Содержимое

Эти конечные точки API позволяют создавать, изменять и удалять содержимое в кодировке Base64 в репозитории. Чтобы запросить необработанный формат или отрисованный HTML (если он поддерживается), используйте пользовательские типы мультимедиа для содержимого репозитория.

### <a name="custom-media-types-for-repository-contents"></a>Пользовательские типы мультимедиа для содержимого репозитория

[Файлы сведений](/rest/reference/repos#get-a-repository-readme), [файлы](/rest/reference/repos#get-repository-content) и [символические ссылки](/rest/reference/repos#get-repository-content) поддерживают следующие пользовательские типы мультимедиа:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Используйте тип мультимедиа `.raw` для получения содержимого файла.

Для файлов разметки, таких как Markdown или AsciiDoc, можно получить отрисованный HTML-код с помощью типа мультимедиа `.html`. Языки разметки отрисовываются в HTML с помощью [библиотеки разметки](https://github.com/github/markup) с открытым кодом.

[Все объекты](/rest/reference/repos#get-repository-content) поддерживают следующий пользовательский тип мультимедиа:

    application/vnd.github.VERSION.object

Используйте параметр типа `object`мультимедиа для получения содержимого в согласованном формате объекта независимо от типа содержимого. Например, вместо массива объектов для каталога ответ будет объектом с атрибутом `entries`, содержащим массив объектов.

Дополнительные сведения об использовании типов мультимедиа в API см. [здесь](/rest/overview/media-types).