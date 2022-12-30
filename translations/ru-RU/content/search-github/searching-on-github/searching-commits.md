---
title: Поиск фиксаций
intro: 'Можно выполнять поиск фиксаций в {% data variables.product.product_name %} и использовать квалификаторы поиска фиксаций в любом сочетании, чтобы уточнить результаты.'
redirect_from:
  - /articles/searching-commits
  - /github/searching-for-information-on-github/searching-commits
  - /github/searching-for-information-on-github/searching-on-github/searching-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2dc35c96805e175bef1ed1ec1898d48e50de6042
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118904'
---
Вы можете искать фиксации глобально по всей системе {% data variables.product.product_name %} или искать фиксации в определенном репозитории или организации. Дополнительные сведения см. в разделе [Сведения о поиске в {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

Поиск фиксаций выполняется только в [ветви по умолчанию](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) в репозитории.

{% data reusables.search.syntax_tips %}

## Поиск в сообщениях о фиксации

Вы можете найти фиксации, содержащие определенные слова в сообщении. Например, [**исправление опечатки**](https://github.com/search?q=fix+typo&type=Commits) соответствует фиксациям со словами "исправление" и "опечатки".

## Поиск по автору или пользователю, выполнившему фиксацию

Вы можете найти фиксации определенного пользователя с помощью квалификаторов `author` или `committer`.

| Квалификатор  | Пример
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) соответствует фиксациям, созданным автором @defunkt.
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) соответствует фиксациям, созданным пользователем @defunkt.

Квалификаторы `author-name` и `committer-name` соответствуют фиксациям по имени автора или пользователя, выполнившего фиксацию.

| Квалификатор  | Пример
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**Author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) соответствует фиксации wanstrath в имени автора.
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) соответствует фиксации wanstrath в имени пользователя, выполнившего фиксацию.

Квалификаторы `author-email` и `committer-email` соответствуют фиксациям по полному адресу электронной почты автора или пользователя, выполнившего фиксацию.

| Квалификатор  | Пример
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) соответствует фиксациям, созданным автором chris@github.com.
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) соответствует фиксациям, созданным пользователем, выполнившим фиксацию chris@github.com.

## Поиск по дате создания или фиксации

Используйте квалификаторы `author-date` и `committer-date` для сопоставления фиксаций, созданных автором или выполненных пользователем в указанном диапазоне дат.

{% data reusables.search.date_gt_lt %}

| Квалификатор  | Пример
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) соответствует фиксациям, созданным до 01.01.2016.
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) соответствует фиксациям, выполненным после 01.01.2016.

## Фильтрация фиксаций слияния

Квалификатор `merge` фильтрует фиксации слияния.

| Квалификатор  | Пример
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) соответствует фиксациям слияния.
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) соответствует фиксациям без слияния.

## Поиск по хэшу

Квалификатор `hash` сопоставляет фиксации с указанным хэшем SHA-1.

| Квалификатор  | Пример
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) соответствует фиксациям с хэшем `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Поиск по родительскому элементу

Квалификатор `parent` соответствует фиксациям, родительский элемент которых имеет указанный хэш SHA-1.

| Квалификатор  | Пример
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) соответствует дочерним элементам фиксаций с хэшем `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Поиск по дереву

Квалификатор `tree` соответствует фиксациям с указанным хэшем дерева Git SHA-1.

| Квалификатор  | Пример
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) соответствует фиксациям, ссылающимся на хэш дерева `99ca967`.

## Поиск в репозиториях пользователя или организации

Для поиска фиксаций во всех репозиториях, принадлежащих определенному пользователю или организации, можно использовать квалификатор `user` или `org`. Для поиска фиксаций в определенном репозитории используйте квалификатор `repo`.

| Квалификатор  | Пример
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) соответствует сообщениям о фиксации со словом gibberish в репозиториях, принадлежащих @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) соответствует сообщениям о фиксации со словом test в репозиториях, принадлежащих @github.
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) сопоставляет сообщения о фиксации со словом language в репозитории gibberish, принадлежащему @defunkt.

## Фильтрация по видимости репозитория

Квалификатор `is` сопоставляет фиксации из репозиториев с указанной видимостью. Дополнительные сведения см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Квалификатор  | Пример
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) соответствует фиксациям с общедоступными репозиториями.
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) соответствует фиксациям с внутренними репозиториями.
{%- endif %} | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) соответствует фиксациям с частными репозиториями.

## Дополнительные материалы

- [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
