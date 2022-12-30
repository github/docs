---
title: Поиск измененных методов и функций в запросе на вытягивание
intro: 'Предлагаемые изменения метода или функции можно быстро найти в запросе на вытягивание в файлах *GO*, *JS*, *TS*, *PY*, *PHP* и *RB*.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139193'
---
Любой пользователь с доступом на чтение к репозиторию может просмотреть сводный список изменений функций и методов в определенных файлах запроса на вытягивание.

Сводный список методов и функций создается из следующих поддерживаемых типов файлов:
  - Go
  - JavaScript (включает Typescript, Flow и другие типы JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. В списке запросов на вытягивание щелкните запрос на вытягивание, в котором вы хотите найти измененные функции и методы.
{% data reusables.repositories.changed-files %}
4. Чтобы просмотреть сводный список измененных функций и методов, нажмите кнопку **Перейти к...** . ![Раскрывающееся меню "Перейти к"](/assets/images/help/pull_requests/jump-to-menu.png)
5. Выберите измененную функцию или метод в раскрывающемся меню. Можно также ввести имя функции или метода для фильтрации результатов.
  ![Фильтрация функций и методов](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Примечание.** Если ожидаемые функции или методы не отображаются, убедитесь, что код компилируется и не содержит ошибок. В раскрывающемся меню отображаются только функции и методы, измененные в этом запросе на вытягивание и находящиеся в файлах *.go*, *.js*, *.ts*, *.py*, *.php* и *.rb*.

 {% endnote %}

6. Вы будете перенаправлены в первую строку выбранной функции или метода.
 ![Просмотр измененных функций или методов в файлах](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## Дополнительные материалы

- [Сравнение ветвей в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)
- [Фильтрация файлов в запросе на вытягивание по типу файла](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)
