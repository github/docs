---
title: Поиск вики-сайтов
intro: 'Можно выполнять поиск вики-сайтов в {% data variables.product.product_name %} и использовать квалификаторы поиска вики-сайта в любом сочетании, чтобы уточнить результаты.'
redirect_from:
  - /articles/searching-wikis
  - /github/searching-for-information-on-github/searching-wikis
  - /github/searching-for-information-on-github/searching-on-github/searching-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: da73bcaa13c718be9840483e2a34c4b90ba96e63
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118856'
---
Вы можете искать вики-сайты глобально по всему {% data variables.product.product_name %} или в определенном репозитории или организации. Дополнительные сведения см. в разделе [Сведения о поиске в {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% data reusables.search.syntax_tips %}

## Поиск в репозиториях пользователя или организации

Чтобы найти вики-страницы из всех репозиториев, принадлежащих определенному пользователю или организации, используйте квалификатор `user` или `org`. Чтобы найти вики-страницы из определенного репозитория, используйте квалификатор `repo`.

| Квалификатор        | Пример
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) соответствует вики-страницам из репозиториев, принадлежащих @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) соответствует wiki в репозиториях, принадлежащих организации GitHub.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) соответствует вики-страницам из репозитория "gibberish" @defunkt.

## Поиск по заголовку вики-страницы или основному тексту

Квалификатор `in` ограничивает поиск по заголовку вики-страницы или основному тексту. Без квалификатора выполняется поиск как по заголовку, так и по основному тексту.

| Квалификатор        | Пример
| ------------- | -------------
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) соответствует заголовкам вики-страниц со словом "usage".
| `in:body` | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) соответствует вики-страницам со словом "installation" в основном тексте.

## Поиск по дате последнего обновления

Квалификатор `updated` соответствует вики-страницам, которые последний раз обновлялись в указанном диапазоне дат.

{% data reusables.search.date_gt_lt %}

| Квалификатор        | Пример
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) соответствует вики-страницам со словом "usage", которые последний раз обновлялись после 01.01.2016.

## Дополнительные материалы

- [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
