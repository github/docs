---
title: Сортировка результатов поиска
intro: 'Вы можете сортировать результаты [{% data variables.product.product_name %}](/articles/searching-on-github) с помощью меню "Сортировка" или путем добавления квалификатора `sort` в запрос.'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/sorting-search-results
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b2c01cdb1bc1df9d4ae4247886b1471211b2714b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118968'
---
Используйте меню "Сортировка", чтобы отсортировать результаты по релевантности, количеству звездочек, количеству вилок и времени обновления элементов.

  ![Меню с параметрами для сортировки результатов поиска](/assets/images/help/search/repo-search-sort.png)

Для сортировки по взаимодействиям, реакциям, дате создания, дате фиксации или времени обновления элементов можно добавить в поисковый запрос квалификатор `sort`.

## Сортировка по взаимодействиям

Квалификатор `sort:interactions` позволяет сортировать по наибольшему объединенному количеству реакций и комментариев.

| Квалификатор  | Пример
| ------------- | -------------
| `sort:interactions` либо `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наибольшему объединенному количеству реакций и комментариев.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наименьшему объединенному количеству реакций и комментариев.

## Сортировка по реакциям

Квалификатор `sort:reactions` позволяет сортировать по количеству или типу реакций.

| Квалификатор  | Пример
| ------------- | -------------
| `sort:reactions` либо `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наибольшему количеству реакций.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным в порядке возрастания количества реакций (от наименьшего к большему).
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наибольшему количеству поставленных одобрений (:+1:).
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наибольшему количеству поставленных неодобрений (:-1:).
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наибольшему количеству поставленных улыбок (:smile:).
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наибольшему количеству поставленных "ура" (:tada:).
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) соответствует проблемам в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по наибольшему количеству поставленных сердечек (:heart:).

## Сортировка по дате создания

Квалификатор `sort:author-date` позволяет сортировать по дате создания в порядке убывания или возрастания.

| Квалификатор  | Пример
| ------------- | -------------
| `sort:author-date` либо `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) соответствует фиксациям, содержащим слово "feature", в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по дате создания в порядке убывания.
| `sort:author-date-asc` | [ **`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) соответствует фиксациям, содержащим слово "feature", в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по дате создания в порядке возрастания.

## Сортировка по дате фиксации

Квалификатор `sort:committer-date` позволяет сортировать по дате фиксации в порядке убывания или возрастания.

| Квалификатор  | Пример
| ------------- | -------------
| `sort:committer-date` либо `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) соответствует фиксациям, содержащим слово "feature", в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по дате фиксации в порядке убывания.
| `sort:committer-date-asc` | [ **`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) соответствует фиксациям, содержащим слово "feature", в репозиториях, принадлежащих {% data variables.product.product_name %}, отсортированным по дате фиксации в порядке возрастания.

## Сортировка по дате обновления

Квалификатор `sort:updated` позволяет сортировать по времени обновления элементов.

| Квалификатор  | Пример
| ------------- | -------------
| `sort:updated` либо `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) соответствует репозиториям, содержащим слово "feature," отсортированным по дате обновления, начиная с ближайшей даты.
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) соответствует репозиториям, содержащим слово "feature," отсортированным по дате обновления, начиная с самой отдаленной даты.

## Дополнительные материалы

- [Сведения о поиске в {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
- [Фильтрация и поиск проблем и запросов на вытягивание](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)
