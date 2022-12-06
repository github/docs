---
title: 코드 검색
intro: '{% data variables.product.product_name %}에서 코드를 검색하고 이러한 코드 검색 한정자를 임의로 조합하여 결과의 범위를 좁힐 수 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160221'
---
{% ifversion github-code-search %} {% note %}

  **참고:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} 자세한 내용은 “[GitHub 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”를 참조하세요.

해당 코드 검색 한정자를 사용하여 코드만 검색할 수 있습니다. 리포지토리, 사용자 또는 커밋에 대한 검색 한정자는 코드를 검색할 때 작동하지 않습니다.

{% data reusables.search.syntax_tips %}

## 코드 검색에 대한 고려 사항

코드 검색의 복잡성으로 인해 검색 수행 방법에 대한 몇 가지 제한 사항이 있습니다.

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- [포크](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)의 코드는 포크에 부모 리포지토리보다 더 많은 별이 있는 경우에만 검색할 수 있습니다. 부모 리포지토리보다 별 수가 적은 포크는 코드 검색을 위해 인덱싱되지 **않습니다**. 검색 결과에 부모보다 많은 별이 있는 포크를 포함하려면 `fork:true` 또는 `fork:only`를 쿼리에 추가해야 합니다. 자세한 내용은 “[포크에서 검색](/search-github/searching-on-github/searching-in-forks)”을 참조하세요.
- 코드 검색의 경우 기본 분기만 인덱싱됩니다.{% ifversion fpt or ghec %}
- 384KB 미만인 파일만 검색할 수 있습니다.{% else %}* 5MB 미만인 파일만 검색할 수 있습니다.
- 각 파일의 처음 500KB만 검색할 수 있습니다.{% endif %}
- 최대 4,000개의 프라이빗{% ifversion ghec or ghes or ghae %} 및 내부{% endif %} 리포지토리를 검색할 수 있습니다. 이러한 4,000개 리포지토리는 사용자가 액세스할 수 있는 처음 10,000개 프라이빗{% ifversion ghec or ghes or ghae %} 및 내부{% endif %} 리포지토리 중 가장 최근에 업데이트된 리포지토리가 됩니다.
- 파일이 500,000개 미만인 리포지토리만 검색할 수 있습니다.{% ifversion fpt or ghec %}
- 활동이 있거나 작년에 검색 결과에 반환된 리포지토리만 검색할 수 있습니다.{% endif %}
- [`filename`](#search-by-filename) 검색을 제외하고, 소스 코드를 검색할 때에는 항상 검색어를 하나 이상 포함해야 합니다. 예를 들어 [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults)는 유효하지 않지만 [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults)는 유효합니다.
- 검색 결과에는 동일한 파일의 두 조각이 표시될 수 있지만 파일 내에 더 많은 결과가 있을 수 있습니다.
- 다음 와일드카드 문자를 검색 쿼리의 일부로 사용할 수 없습니다. <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. 검색 시 해당 기호는 무시됩니다.

## 파일 콘텐츠 또는 파일 경로로 검색

`in` 한정자를 사용하면 소스 코드 파일 콘텐츠, 파일 경로 또는 둘 다로 검색을 제한할 수 있습니다. 이 한정자를 생략하면 파일 콘텐츠만 검색됩니다.

| 한정자  | 예제
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code)은 파일 콘텐츠에 “octocat”이 있는 코드를 찾습니다.
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code)는 파일 경로에 “octocat”이 있는 코드를 찾습니다.
| | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code)는 파일 콘텐츠 또는 파일 경로에 “octocat”이 있는 코드를 찾습니다.

## 사용자 또는 조직의 리포지토리 내에서 검색

특정 사용자 또는 조직이 소유한 모든 리포지토리에서 코드를 검색하려면 `user` 또는 `org` 한정자를 사용하면 됩니다. 특정 리포지토리에서 코드를 검색하려면 `repo` 한정자를 사용하면 됩니다.

| 한정자  | 예제
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code)는 <em>.rb</em>로 끝나는 @defunkt에서 코드를 찾습니다.
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code)는 <em>.js</em>로 끝나는 GitHub에서 코드를 찾습니다.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code)는 <em>.as</em>로 끝나는 @mozilla의 shumway 프로젝트에서 코드를 찾습니다.

## 파일 위치로 검색

`path` 한정자를 사용하여 리포지토리의 특정 위치에 있는 소스 코드를 검색할 수 있습니다. `path:/`를 사용하여 리포지토리의 루트 수준에 있는 파일을 검색합니다. 또는 디렉터리 이름 또는 디렉터리 경로를 지정하여 해당 디렉터리 또는 해당 하위 디렉터리 내에 있는 파일을 검색합니다.

| 한정자  | 예제
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code)는 리포지토리의 루트 수준에 “octocat”이라는 단어가 있는 _readme_ 파일을 찾습니다.
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code)은 <em>cgi-bin</em> 디렉터리 또는 해당 하위 디렉터리에 “form”이라는 단어가 있는 Perl 파일을 찾습니다.
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [ **`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code)는 <em>app/public</em> 디렉터리 또는 해당 하위 디렉터리에 “console”이라는 단어가 있는 JavaScript 파일을 찾습니다(해당 파일이 <em>app/public/js/form-validators</em>에 있더라도 검색됨).

## 언어로 검색

작성된 언어를 기준으로 코드를 검색할 수 있습니다. `language` 한정자는 언어 이름 또는 별칭일 수 있습니다. 지원되는 언어와 해당 이름 및 별칭의 전체 목록은 [github/linguist 리포지토리](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code)은 XML로 표시되어 있고, 정확히 100바이트이며, “element”라는 단어가 있는 코드를 찾습니다.
| | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code)는 SCSS로 표시되어 있고 “display”라는 단어가 있는 코드를 찾습니다.
| | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code)은 Markdown으로 표시된 모든 @mozilla의 리포지토리에서 코드를 찾습니다.

## 파일 크기로 검색

`size` 한정자를 사용하여 코드가 있는 파일의 크기를 기준으로 소스 코드를 검색할 수 있습니다. `size` 한정자는 [보다 큼, 보다 작음 및 범위 한정자](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)를 사용하여 코드가 있는 파일의 바이트 크기를 기준으로 결과를 필터링합니다.

| 한정자  | 예제
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code)은 “function”이라는 단어가 있고, Python으로 작성되었으며, 10KB를 초과하는 파일에 있는 코드를 찾습니다.

## 파일 이름으로 검색

`filename` 한정자는 특정 파일 이름을 사용하는 코드 파일을 찾습니다. 파일 찾기를 사용하여 리포지토리에서 파일을 찾을 수도 있습니다. 자세한 내용은 “[GitHub에서 파일 찾기](/search-github/searching-on-github/finding-files-on-github)”를 참조하세요.

| 한정자  | 예제
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code)는 “linguist”라는 파일을 찾습니다.
| | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code)는 “commands”라는 단어가 있는 *.vimrc* 파일을 찾습니다.
| | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code)는 *test* 디렉터리 내의 *test_helper* 라는 Ruby 파일을 찾습니다.

## 파일 확장명으로 검색

`extension` 한정자는 특정 파일 확장명을 사용하는 코드 파일을 찾습니다.

| 한정자  | 예제
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code)은 <em>cgi-bin</em>에서 “form”이라는 단어와 <em>.pm</em> 파일 확장명이 있는 코드를 찾습니다.
| | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code)는 .css로 끝나고, “icon”이라는 단어가 있으며, 200KB를 초과하는 파일을 찾습니다.

## 추가 참고 자료

- “[검색 결과 정렬](/search-github/getting-started-with-searching-on-github/sorting-search-results/)”
- “[포크에서 검색](/search-github/searching-on-github/searching-in-forks)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_dotcom %}에서 코드 탐색](/github/managing-files-in-a-repository/navigating-code-on-github)”{% endif %}
