---
title: Просмотр истории изменений вики-сайта
intro: 'Так как вики-сайты являются репозиториями Git, каждое изменение, которое вы вносите, будет фиксацией, которую можно просмотреть.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145092426'
---
## Просмотр журнала вики-сайта

Журнал вики-сайта содержит следующие сведения:
- пользователь, внесший изменение;
- предоставленное им сообщение о фиксации;
- время внесения изменения.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. С помощью боковой панели вики-сайта перейдите на страницу, историю которой нужно просмотреть.
4. В верхней части вики-сайта щелкните ссылку на редакцию.
   ![Ссылка на редакцию вики-сайта](/assets/images/help/wiki/wiki_revision_link.png)

## Просмотр предыдущего содержимого

В таблице журнала вики-сайта можно щелкнуть [хэш SHA-1](http://en.wikipedia.org/wiki/SHA-1) (последовательность букв и цифр справа), чтобы увидеть вики-страницу в том состоянии, в каком она была в определенный момент времени.

![Число SHA вики-сайта](/assets/images/help/wiki/wiki_sha_number.png)

## Сравнение двух редакций

1. Выберите две строки, которые требуется сравнить.
2. В верхней части таблицы журнала нажмите кнопку **Сравнить редакции**.
   ![Кнопка для сравнения редакций вики-сайта](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Вы увидите различия: какие строки были добавлены, удалены и изменены.

## Отмена предыдущих изменений

Отменять изменения можно только при наличии разрешения на изменение вики-сайта.

1. Выберите строку, которую требуется отменить.
2. В верхней части таблицы журнала нажмите кнопку **Сравнить редакции**.
   ![Кнопка для сравнения редакций вики-сайта](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Вы увидите различия: какие строки были добавлены, удалены и изменены.
   ![Различия между редакциями вики-сайта](/assets/images/help/wiki/wiki_revision_diff.png)
4. Чтобы отменить новые изменения, нажмите кнопку **Отменить изменения**.
   ![Кнопка для отмены изменений на вики-сайте](/assets/images/help/wiki/wiki_revert_changes.png)
