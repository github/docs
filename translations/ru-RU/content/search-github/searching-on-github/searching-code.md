---
title: Поиск кода
intro: 'Можно выполнять поиск кода в {% data variables.product.product_name %} и использовать квалификаторы поиска кода в любом сочетании, чтобы уточнить результаты.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
  - /github/searching-for-information-on-github/searching-code
  - /github/searching-for-information-on-github/searching-on-github/searching-code
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 125c17f1050cdb6d1b1d5a3d58d3e513eddce40f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160223'
---
{% ifversion github-code-search %} {% note %}

  **Примечание.** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} Дополнительные сведения см. в разделе [Сведения о поиске на GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

Искать код можно только с использованием квалификаторов поиска кода. Квалификаторы поиска, предназначенные для репозиториев, пользователей или фиксаций, не будут работать при поиске кода.

{% data reusables.search.syntax_tips %}

## Особенности поиска кода

Из-за особой сложности, которую представляет поиск кода, действует ряд ограничений.

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Код в [вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) можно искать, только если вилка имеет больше звездочек, чем родительский репозиторий. Вилки с меньшим количеством звездочек, чем у родительского репозитория, **не** индексируются для поиска кода. Чтобы включить в результаты поиска вилки с большим количеством звездочек, чем у родительского репозитория, необходимо добавить в запрос квалификатор `fork:true` или `fork:only`. Дополнительные сведения см. в разделе [Поиск в вилках](/search-github/searching-on-github/searching-in-forks).
- Для поиска кода индексируется только _ветвь по умолчанию_.{% ifversion fpt or ghec %}
- Поиск возможен только в файлах размером менее 384 КБ.{% else %}* Поиск возможен только в файлах размером менее 5 МБ.
- Поиск осуществляется только в первых 500 КБ каждого файла.{% endif %}
- До 4000 частных{% ifversion ghec or ghes or ghae %} и внутренних репозиториев{% endif %} доступны для поиска. Эти 4000 репозиториев будут последними обновленными из первых 10 000 частных{% ifversion ghec or ghes or ghae %} и внутренних репозиториев{% endif %}, к которым у вас есть доступ.
- Поиск возможен только в репозиториях с менее чем 500 000 файлов.{% ifversion fpt or ghec %}
- Поиск возможен только в репозиториях, в которых осуществлялись действия или которые возвращались в результатах поиска за последний год.{% endif %}
- За исключением поиска по имени файла ([`filename`](#search-by-filename)), при поиске исходного кода обязательно необходимо использовать по крайней мере одно условие поиска. Например, запрос [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) недопустим, а [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) допустим.
- В результатах поиска могут отображать максимум два фрагмента из одного файла, но в файле может быть больше результатов.
- В поисковом запросе нельзя использовать следующие подстановочные знаки: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. При поиске они просто игнорируются.

## Поиск по содержимому файла или пути к файлу

С помощью квалификатора `in` можно ограничить поиск содержимым файла исходного кода, путем к файлу или и тем и другим. Если этот квалификатор не указан, поиск выполняется только в содержимом файла.

| Квалификатор  | Пример
| ------------- | -------------
| `in:file` | Запросу [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) соответствует код со словом "octocat" в содержимом файла.
| `in:path` | Запросу [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) соответствует код со словом "octocat" в пути к файлу.
| | Запросу [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) соответствует код со словом "octocat" в содержимом файла или пути к файлу.

## Поиск в репозиториях пользователя или организации

Для поиска кода во всех репозиториях, принадлежащих определенному пользователю или организации, можно использовать квалификатор `user` или `org`. Для поиска кода в определенном репозитории можно использовать квалификатор `repo`.

| Квалификатор  | Пример
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | Запросу [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) соответствует код из @defunkt с расширением <em>.rb</em>.
| <code>org:<em>ORGNAME</em></code> |Запросу [**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) соответствует код на GitHub с расширением <em>.js</em>.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | Запросу [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) соответствует код из проекта shumway @mozilla с расширением <em>.as</em>.

## Поиск по расположению файла

С помощью квалификатора `path` можно искать исходный код, который находится в определенном расположении в репозитории. Для поиска файлов, расположенных на корневом уровне репозитория, используйте `path:/`. Укажите имя каталога или путь к нему для поиска файлов, находящихся в этом каталоге или в любом из его подкаталогов.

| Квалификатор  | Пример
| ------------- | -------------
| <code>path:/</code> | Запросу [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) соответствуют файлы _сведений_ со словом "octocat", находящиеся на корневом уровне репозитория.
| <code>path:<em>DIRECTORY</em></code> | Запросу [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) соответствуют файлы Perl со словом "form" в каталоге <em>cgi-bin</em> или в любом из его подкаталогов.
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | Запросу [ **`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) соответствуют файлы JavaScript со словом "console" в каталоге <em>app/public</em> или в любом из его подкаталогов (даже если они находятся в <em>app/public/js/form-validators</em>).

## Поиск по языку

Искать код можно по языку, на котором он написан. Квалификатор `language` может указывать название или псевдоним языка. Полный список поддерживаемых языков с именами и псевдонимами см. в [репозитории github/linguist](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

| Квалификатор  | Пример
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | Запросу [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) соответствует код со словом "element", помеченный как XML и содержащий ровно 100 байт.
| | Запросу [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) соответствует код со словом "display", помеченный как SCSS.
| | Запросу [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) соответствует код из всех репозиториев @mozilla, помеченный как Markdown.

## Поиск по размеру файла

С помощью квалификатора `size` можно искать исходный код по размеру файла, в котором он содержится. Для фильтрации результатов по размеру файла, в котором найден код, в байтах с квалификатором `size` используются [квалификаторы "больше", "меньше" и квалификатор диапазона](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Квалификатор  | Пример
| ------------- | -------------
| <code>size:<em>n</em></code> | Запросу [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) соответствует код со словом "function", написанный на Python, в файлах размером более 10 КБ.

## Поиск по имени файла

Квалификатору `filename` соответствуют файлы кода с определенным именем. Файл в репозитории также можно найти с помощью средства поиска файлов. Дополнительные сведения см. в разделе [Поиск файлов на GitHub](/search-github/searching-on-github/finding-files-on-github).

| Квалификатор  | Пример
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | Запросу [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) соответствуют файлы с именем "linguist".
| | Запросу [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) соответствуют файлы *VIMRC* со словом "commands".
| | Запросу [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) соответствуют файлы Ruby с именем *test_helper* в каталоге *test*.

## Поиск по расширению имени файла

Квалификатору `extension` соответствуют файлы кода с определенным расширением имени.

| Квалификатор  | Пример
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | Запросу [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) соответствует код со словом "form" в каталоге <em>cgi-bin</em> с расширением имени файла <em>.pm</em>.
| | Запросу [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) соответствуют файлы размером более 200 КБ, которые имеют расширение CSS и содержат слово "icon".

## Дополнительные материалы

- [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
- [Поиск в вилках](/search-github/searching-on-github/searching-in-forks){% ifversion fpt or ghec %}
- [Навигация по коду на {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github){% endif %}
