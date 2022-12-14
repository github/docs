---
title: Поиск репозиториев
intro: 'Можно выполнять поиск репозиториев на {% data variables.product.product_name %}, ограничивая список результатов с помощью квалификаторов поиска репозиториев.'
redirect_from:
  - /articles/searching-repositories
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
  - /github/searching-for-information-on-github/searching-on-github/searching-for-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search for repositories
ms.openlocfilehash: da0ba88187dc4a8f8be5a8050644aab8321f420f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098636'
---
Вы можете искать репозитории глобально по всем данным {% variables.location.product_location %}, или искать репозитории в определенной организации. Дополнительные сведения см. в разделе [Поиск в {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

Чтобы включить вилки в результаты поиска, необходимо добавить в запрос оператор `fork:true` или `fork:only`. Дополнительные сведения см. в разделе [Поиск в вилках](/search-github/searching-on-github/searching-in-forks).

{% data reusables.search.syntax_tips %}

## Поиск по имени репозитория, описанию или содержимому файла сведений

Квалификатор `in` ограничивает поиск по таким параметрам, как имя репозитория, описание репозитория, разделы и содержимое файлов README, в любом сочетании. Если этот квалификатор не указан, поиск выполняется только в именах, описаниях и разделах репозиториев.

| Квалификатор  | Пример
| ------------- | -------------
| `in:name` | Запросу [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) соответствуют репозитории со словом "jquery" в имени.
| `in:description`  | Запросу [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) соответствуют репозитории со словом "jquery" в имени или описании.
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) отбирает репозитории, у которых есть метка раздела "jquery".
| `in:readme` | Запросу [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) соответствуют репозитории с упоминанием слова "jquery" в файле сведений.
| `repo:owner/name` | Запросу [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) соответствует определенное имя репозитория.

## Поиск по содержимому репозитория

Репозиторий можно найти по содержимому его файла сведений с помощью квалификатора `in:readme`. Дополнительные сведения см. в статье [О файлах README](/github/creating-cloning-and-archiving-repositories/about-readmes).

За исключением `in:readme`, другие способы поиска репозиториев по их содержимому невозможны. Для поиска определенного файла или содержимого в репозитории можно использовать средство поиска файлов или квалификаторы поиска кода. Дополнительные сведения см. в разделах [Поиск файлов в {% data variables.product.prodname_dotcom %}](/search-github/searching-on-github/finding-files-on-github) и [Поиск кода](/search-github/searching-on-github/searching-code).

| Квалификатор  | Пример
| ------------- | -------------
| `in:readme` | Запросу [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) соответствуют репозитории с упоминанием слова "octocat" в файле сведений.

## Поиск в репозиториях пользователя или организации

Для поиска во всех репозиториях, принадлежащих определенному пользователю или организации, можно использовать квалификатор `user` или `org`.

| Квалификатор  | Пример
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | Запросу [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) соответствуют репозитории пользователя @defunkt с более чем 100 вилками.
| <code>org:<em>ORGNAME</em></code> | Запросу [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) соответствуют репозитории из GitHub.

## Поиск по размеру репозитория

Квалификатор `size` служит для поиска репозиториев определенного размера (в килобайтах), который уточняется с помощью квалификаторов "больше", "меньше" и квалификатора диапазона. Для получения дополнительной информации см. раздел [Основные сведения о различных ролях](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Квалификатор  | Пример
| ------------- | -------------
| <code>size:<em>n</em></code> | Запросу [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) соответствуют репозитории размером ровно 1 МБ.
| | Запросу [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) соответствуют репозитории размером не менее 30 МБ.
| | Запросу [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) соответствуют репозитории размером менее 50 КБ.
| | Запросу [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) соответствуют репозитории размером от 50 до 120 КБ.

## Поиск по количеству подписчиков

Вы можете фильтровать репозитории по количеству подписанных на них пользователей, используя квалификатор `followers` с уточняющими квалификатором "больше", "меньше" и квалификатором диапазона. Для получения дополнительной информации см. раздел [Основные сведения о различных ролях](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Квалификатор        | Пример
| ------------- | -------------
| <code>followers:<em>n</em></code> | Запросу [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) соответствуют репозитории, в которых упоминается слово "node", с 10 000 подписчиков или более.
| | Запросу [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) соответствуют репозитории, в которых упоминаются слова "styleguide linter", с 1–10 подписчиками.

## Поиск по количеству вилок

Квалификатор `forks` указывает количество вилок, которое должно быть у репозитория, с помощью уточняющих квалификаторов "больше", "меньше" и квалификатором диапазона. Для получения дополнительной информации см. раздел [Основные сведения о различных ролях](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Квалификатор  | Пример
| ------------- | -------------
| <code>forks:<em>n</em></code> | Запросу [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) соответствуют репозитории ровно с пятью вилками.
| | Запросу [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) соответствуют репозитории не менее чем с 205 вилками.
| | Запросу [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) соответствуют репозитории менее чем с 90 вилками.
| | Запросу [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) соответствуют репозитории с количеством вилок от 10 до 20.

## Поиск по количеству звездочек

Вы можете искать репозитории по количеству имеющихся у них звездочек, используя квалификаторы "больше", "меньше" и квалификатор диапазона. Дополнительные сведения см. в разделах [Сохранение репозиториев со звездочками](/github/getting-started-with-github/saving-repositories-with-stars) и [Основные сведения о синтаксисе поиска](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Квалификатор  | Пример
| ------------- | -------------
| <code>stars:<em>n</em></code> | Запросу [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) соответствуют репозитории ровно с 500 звездочками.
| | Запросу [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) соответствуют репозитории с количеством звездочек от 10 до 20, размер которых меньше 1000 КБ.
| | Запросу [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) соответствуют репозитории на PHP с по крайней мере 500 звездочками, включая вилки.

## Поиск по времени создания или последнего обновления репозитория

Репозитории можно фильтровать по времени создания или последнего обновления. Для фильтрации по времени создания репозитория можно использовать квалификатор `created`; чтобы узнать, когда репозиторий был в последний раз обновлен, можно использовать квалификатор `pushed`. Квалификатор `pushed` возвращает список репозиториев, отсортированный по времени последней фиксации в любой ветви репозитория.

Оба квалификатора принимают дату в качестве параметра. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор  | Пример
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | Запросу [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) соответствуют репозитории со словом "webos", созданные до 2011 года.
| <code>pushed:<em>YYYY-MM-DD</em></code> | Запросу [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) соответствуют репозитории со словом "css", в которые были отправлены изменения после января 2013 года.
| | Запросу [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) соответствуют репозитории со словом "case", в которые были отправлены изменения 6 марта 2013 года или позднее и которые являются вилками.

## Поиск по языку

Вы можете искать репозитории по языку кода в них.

| Квалификатор  | Пример
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | Запросу [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) соответствуют репозитории со словом "rails", написанные на JavaScript.

## Поиск по теме

Вы можете найти все репозитории, отнесенные к определенной теме. Дополнительные сведения см. в разделе [Классификация репозиториев по темам](/github/administering-a-repository/classifying-your-repository-with-topics).

| Квалификатор  | Пример
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | Запросу [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) соответствуют репозитории, которые были отнесены к теме "Jekyll".

## Поиск по количеству тем

Вы можете искать репозитории по количеству тем, примененных к репозиториям, с помощью квалификатора `topics` и уточняющих квалификаторов "больше", "меньше" и квалификатора диапазона. Дополнительные сведения см. в разделах [Классификация репозиториев по темам](/github/administering-a-repository/classifying-your-repository-with-topics) и [Основные сведения о синтаксисе поиска](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Квалификатор  | Пример
| ------------- | -------------
| <code>topics:<em>n</em></code> | Запросу [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) соответствуют репозитории с пятью темами.
| | Запросу [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) соответствуют репозитории с более чем тремя темами.

{% ifversion fpt or ghes or ghec %}

## Поиск по лицензии

Вы можете искать репозитории по типу лицензии. Для фильтрации репозиториев по определенной лицензии или семейству лицензий необходимо использовать ключевое слово license. Дополнительные сведения см. в разделе [Лицензирование репозитория](/github/creating-cloning-and-archiving-repositories/licensing-a-repository).

| Квалификатор  | Пример
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | Запросу [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) соответствуют репозитории, лицензируемые на условиях Apache License 2.0.

{% endif %}

## Фильтрация по видимости репозитория

Результаты поиска можно отфильтровать по видимости репозиториев. Дополнительные сведения см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Квалификатор | Пример | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | Запросу `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) соответствуют общедоступные репозитории, принадлежащие {% data variables.product.company_short %}.{% endif %}{% ifversion ghes or ghec or ghae %} | Запросу `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) соответствуют доступные вам внутренние репозитории, содержащие слово "test".{% endif %} | Запросу `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) соответствуют доступные вам частные репозитории, содержащие слово "pages".

{% ifversion fpt or ghec %}

## Поиск в зависимости от того, является ли репозиторий зеркальным

Вы можете искать зеркальные репозитории, размещенные в другом месте, или репозитории, не являющиеся зеркальными. Дополнительные сведения см. в разделе [Способы участия в создании открытого кода в {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).

| Квалификатор  | Пример
| ------------- | -------------
| `mirror:true` | Запросу [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) соответствуют репозитории, которые являются зеркальными и содержат слово "GNOME".
|  `mirror:false` | Запросу [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) соответствуют репозитории, которые не являются зеркальными и содержат слово "GNOME".

{% endif %}

## Поиск в зависимости от того, является ли репозиторий архивным

Вы можете искать репозитории в зависимости от того, являются ли они архивными. Дополнительные сведения см. в разделе [Архивирование репозиториев](/repositories/archiving-a-github-repository/archiving-repositories).

| Квалификатор  | Пример
| ------------- | -------------
| `archived:true` | Запросу [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) соответствуют репозитории, которые являются архивными и содержат слово "GNOME".
|  `archived:false` | Запросу [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) соответствуют репозитории, которые не являются архивными и содержат слово "GNOME".

{% ifversion fpt or ghec %}

## Поиск по количеству проблем с метками `good first issue` или `help wanted`

Вы можете искать репозитории с минимальным количеством проблем с метками `help-wanted` или `good-first-issue` с помощью квалификаторов `help-wanted-issues:>n` и `good-first-issues:>n`. Дополнительные сведения см. в разделе [Содействие внесению полезных вкладов в разработку проекта с помощью меток](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels).

| Квалификатор  | Пример
| ------------- | -------------
| `good-first-issues:>n` | Запросу [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) соответствуют репозитории, содержащие слово "javascript", с более чем двумя проблемами с меткой `good-first-issue`.
| `help-wanted-issues:>n`|Запросу [**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) соответствуют репозитории, содержащие слово "React", с более чем четырьмя проблемами с меткой `help-wanted`.

## Поиск по возможности спонсирования

Вы можете искать репозитории, владельцев которых можно спонсировать на {% data variables.product.prodname_sponsors %}, с помощью квалификатора `is:sponsorable`. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors).

Вы можете искать репозитории с файлом финансирования с помощью квалификатора `has:funding-file`. Дополнительные сведения см. в разделе [Сведения о файлах FUNDING](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files).

| Квалификатор  | Пример
| ------------- | -------------
| `is:sponsorable` | Запросу [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) соответствуют репозитории, владельцы которых имеют профиль {% data variables.product.prodname_sponsors %}.
| `has:funding-file` | Запросу [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) соответствуют репозитории с файлом FUNDING.yml.

{% endif %}

## Дополнительные материалы

- [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
- [Поиск в вилках](/search-github/searching-on-github/searching-in-forks)
