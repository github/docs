---
title: Сравнение фиксаций
intro: 'Вы можете сравнивать состояние репозитория между ветвями, тегами, фиксациями, вилками и датами.'
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137099'
---
Чтобы сравнить разные версии репозитория, добавьте `/compare`в его путь.

Мы продемонстрируем возможности сравнения, изучив страницу сравнения для [вилки репозитория Linguist](https://github.com/octocat/linguist) по адресу [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

Представление сравнения каждого репозитория содержит два раскрывающихся меню: `base` и `compare`.

`base` следует считать отправной точкой сравнения, а `compare` — конечной. Во время сравнения всегда можно изменить `base` и `compare`, нажав кнопку **Изменить**.

## Сравнение ветвей

Наиболее распространенным способом сравнения является сравнение ветвей, например при запуске нового запроса на вытягивание. При запуске [нового запроса на вытягивание](/articles/creating-a-pull-request) вы всегда будете переходить в представление сравнения ветвей.

Для сравнения ветвей можно выбрать имя ветви в раскрывающемся меню `compare` в верхней части страницы.

Ниже приведен пример [сравнения между двумя ветвями](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Сравнение тегов

При сравнении тегов выпуска вы увидите изменения в репозитории с момента последнего выпуска. Дополнительные сведения см. в статье [Сравнение выпусков](/github/administering-a-repository/comparing-releases).

Для сравнения тегов можно выбрать имя тега в раскрывающемся меню `compare` в верхней части страницы.

Ниже приведен пример [сравнения между двумя тегами](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

## Сравнение фиксаций

Вы также можете сравнить две произвольные фиксации в репозитории или ее вилки на {% data variables.product.prodname_dotcom %} в рамках прямого (двухстороннего) сравнения.

Чтобы быстро сравнить две фиксации или идентификаторы объектов Git (OID) непосредственно друг с другом на {% data variables.product.prodname_dotcom %}, измените URL-адрес страницы "Сравнение изменений" репозитория.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Дополнительные сведения о других вариантах сравнения см. в разделе [Двух- и трехстороннее сравнение](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons).

## Сравнение вилок

Вы можете сравнить базовый репозиторий с любым ответвленным репозиторием. Это представление, которое отображается, когда пользователь выполняет запрос на вытягивание в проекте.

Для сравнения ветвей в разных репозиториях указывайте перед именем ветви имя пользователя. Например, укажите `octocat:main` для `base` и `octo-org:main` для `compare`, чтобы сравнить ветвь `main` репозиториев, принадлежащих `octocat` и `octo-org` соответственно.

Ниже приведен пример [сравнения между двумя репозиториями](https://github.com/github/linguist/compare/master...octocat:master).

## Сравнение фиксаций

Git использует нотацию `^`, чтобы обозначить "одну фиксацию до".

Эту нотацию можно использовать для сравнения одной фиксации или ветви с ее непосредственными предшественниками. Например, `96d29b7^^^^^` указывает пять фиксаций до `96d29b7`, поскольку здесь пять символов `^`. Если ввести `96d29b7^^^^^` в ветви `base` и `96d29b7` в ветви `compare` будут сравниваться пять фиксаций до `96d29b7` с фиксацией `96d29b7`.

Ниже приведен пример [сравнения с использованием нотации `^`](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

## Дополнительные материалы

- [Изменение базовой ветви запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)
