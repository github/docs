---
title: 페이지 매김을 사용하여 트래버싱
intro: 페이지 매김을 사용하여 검색 API를 사용하는 몇 가지 예제를 통해 응답을 관리하는 방법을 살펴봅니다.
redirect_from:
- /guides/traversing-with-pagination
- /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- API
shortTitle: Traverse with pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 92173dffdf2c50bdcd2b10fa42ef634683a3e149
ms.sourcegitcommit: d1d7ccc513192fdd0fc27bb49dc9c85108119b91
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179531"
---
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API는 개발자가 사용할 수 있는 방대한 정보를 제공합니다.
대부분의 경우 _너무 많은_ 정보를 요청하고 있다는 사실을 알게 될 수도 있으며 서버를 만족스럽게 유지하기 위해 API는 자동으로 [요청된 항목에 페이지를 매깁니다](/rest/overview/resources-in-the-rest-api#pagination).

이 가이드에서는 Search API를 호출하고 페이지 매김을 사용하여 결과를 반복합니다. [platform-samples][platform samples] 리포지토리에서 이 프로젝트에 대한 전체 소스 코드를 찾을 수 있습니다.

{% data reusables.rest-api.dotcom-only-guide-note %}



## 페이지 매김의 기본 사항

우선 페이지가 매겨진 항목 수신에 대한 몇 가지 사실을 아는 것이 중요합니다.


1. 다른 API 호출은 다른 기본값으로 응답합니다. 예를 들어, [퍼블릭 리포지토리 나열](/rest/reference/repos#list-public-repositories)에 대한 호출은 30개 세트의 페이지를 매긴 항목을 제공하는 반면, GitHub Search API에 대한 호출은 100개 세트의 항목을 제공합니다.
2. 받을 항목 수(최대 100개)를 지정할 수 있습니다.
3. 하지만, 기술적인 이유로 모든 엔드포인트가 동일하게 동작하는 것은 아닙니다. 예를 들어, [이벤트](/rest/reference/activity#events)를 통해 받을 항목의 최대값을 설정할 수 없습니다.
특정 엔드포인트에 대해 페이지를 매긴 결과를 처리하는 방법에 대한 설명서를 읽어보세요.

{% note %}

**참고**: 항상 링크 헤더에 포함된 URL을 사용해야 합니다. 사용자 고유의 URL을 추측하거나 구성하지 마세요.

{% endnote %}


### Link 헤더

응답 헤더에는 페이지 매김에 대한 정보가 포함됩니다. 헤더에 대한 자세한 내용은 "[REST API 시작"을](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers) 참조하세요. 응답 헤더를 얻으려면 요청에 플래그를 `-I` 포함합니다. 다음은 그 예입니다.

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

플래그는 `-I` 응답 헤더만 반환합니다. 응답이 페이지를 매긴 경우 응답 헤더에는 헤더가 `link` 포함됩니다. 헤더는 다음과 같이 표시됩니다.

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

또는

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### 페이지 매김 유형

{% data variables.product.company_short %}의 API는 페이지 기반 페이지 매김과 커서 기반 페이지 매김의 두 가지 페이지 매김 메서드를 사용합니다. 헤더에 가 `link` 포함된 `page`경우 작업은 페이지 기반 페이지 매김을 사용합니다. 헤더에 `link` 및 `after`가 포함된 `before` 경우 작업은 커서 기반 페이지 매김을 사용합니다.


#### 페이지 기반 페이지 매김

페이지 기반 페이지 매김에 대한 링크 헤더는 이전, 다음, 첫 번째 및 마지막 페이지에 대한 정보를 알려줍니다. 특정 페이지를 요청하지 않은 경우 응답은 기본적으로 첫 번째 페이지로 설정되고 첫 번째 페이지와 이전 페이지에 대한 정보는 생략됩니다.

예를 들어 페이지를 지정하지 않은 요청의 경우 이 헤더는 `2` 다음 페이지가 이고 마지막 페이지는 임을 `511`명시합니다.

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

예를 들어 5페이지를 지정한 요청의 경우 이 헤더는 `4`이전 페이지가 이고, 다음 페이지는 `6`이고, 마지막 페이지는 이고, 첫 번째 페이지는 `511`입니다 `1`.

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### 커서 기반 페이지 매김

커서 페이지 매김은 페이지를 탐색하기 위해 용어 `before` 및 `after` 를 사용합니다. `rel="next"`데이터 `rel="prev"` 집합의 커서 지점을 표시하고 페이지 및 `after` 현재 페이지 `before` 로 이동하는 참조를 제공합니다.  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

이 예제 `rel=next` 에서는 다음 페이지가 다음 위치에 있다고 말합니다.

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```




### 페이지 매김 사용

#### 커서 기반 페이지 매김

커서 기반 페이지 매김을 사용하려면 및 `after`용어를 사용해야 합니다`before`. 및 를 `after`사용하여 `before` 탐색하려면 위에서 생성된 링크 헤더를 curl 요청에 복사합니다.

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```

위의 예제에서는 결과 페이지와 다음 요청을 만드는 데 사용할 수 있는 새 헤더 정보를 생성합니다. `rel="next"` 는 결과의 다음 페이지를 제공합니다. `rel="prev"` 는 결과의 이전 페이지를 제공합니다. 여기서 출력의 중요한 부분은 수동으로 변환하지 않고 링크 헤더를 생성해야 한다는 것입니다. 다음 출력에서 전체 링크를 복사합니다.

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

페이지 기반 페이지 매김과 달리 결과는 응답의 마지막 페이지 번호를 반환하지 않습니다.

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
커서 기반 페이지 매김은 데이터 집합에 참조 지점을 만들므로 총 결과 수를 계산할 수 없습니다.


#### 페이지 기반 페이지 매김

페이지 기반 페이지 매김을 사용하여 탐색하려면 매개 변수를 `page` 전달합니다. 기본적으로 `page`는 항상 `1`에서 시작합니다. 다음 예제에서는 검색 API Mozilla 프로젝트에 구를 사용하여 `addClass`curl 요청을 했습니다. 1에서 시작하는 대신 14페이지로 이동할 수 있습니다. 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

HTTP 요청의 링크 헤더를 제외한 은 다음과 같습니다.

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

이 예제에서는 가 `rel="next"` 15이고 가 `rel="last"` 34입니다. 하지만 이제 몇 가지 추가 정보가 있습니다. `rel="first"`는 _첫 번째_ 페이지의 URL을 나타내며, 더 중요한 정보는 `rel="prev"`를 통해 이전 페이지의 페이지 번호를 알 수 있습니다. 이 정보를 사용하여 사용자가 API 호출의 첫 번째, 이전, 다음 또는 마지막 결과 목록 간에 이동할 수 있는 일부 UI를 구성할 수 있습니다.


### 받은 항목 수 변경

#### 페이지 기반 페이지 매김

`per_page` 매개 변수를 전달하여 각 페이지에서 반환할 항목 수를 최대 100개까지 지정할 수 있습니다. `addClass`에 대해 50개 항목을 요청해 보겠습니다.

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

헤더 응답에 대한 다음과 같은 기능에 주목하세요.

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

짐작할 수 있듯이 `rel="last"` 정보는 마지막 페이지가 이제 20임을 나타냅니다. 이는 결과에 대해 페이지당 추가 정보를 요청하기 때문입니다.

#### 커서 기반 페이지 매김

커서 기반 페이지 매김에 `per_page` 대한 매개 변수를 전달할 수도 있습니다. 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=&per_page=50
```

## 정보 사용

페이지 매김으로 작업하기 위해 하위 수준의 curl 호출을 하고 싶지 않으므로 위에서 설명한 모든 작업을 수행하는 간단한 Ruby 스크립트를 작성해 보겠습니다.

언제나처럼 먼저 [GitHub의 Octokit.rb][octokit.rb] Ruby 라이브러리가 필요하고 [{% data variables.product.pat_generic %}][personal token]에 전달합니다.

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

다음으로 Octokit의 `search_code` 메서드를 사용하여 검색을 실행합니다. `curl`을 사용하는 것과 달리 결과 수를 즉시 검색할 수도 있으므로 다음과 같이 수행합니다.

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

이제 링크 헤더의 `page=34>; rel="last"` 정보와 유사한 마지막 페이지의 번호를 살펴보겠습니다. Octokit.rb는 "[하이퍼미디어 링크 관계][hypermedia-relations]"라는 구현을 통해 페이지 매김 정보를 지원합니다.
자세한 내용은 설명하지는 않겠지만 `results` 변수의 각 요소에는 `rels`라는 해시가 있으며, 여기에는 어떤 결과에 있는지에 따라 `:next`, `:last`, `:first` 및 `:prev`에 대한 정보를 포함할 수 있습니다. 이러한 관계에는 `rels[:last].href`를 호출하여 결과 URL에 대한 정보도 포함됩니다.

이제 마지막 결과의 페이지 번호를 파악하여 사용자에게 이 모든 정보를 제공합니다.

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

마지막으로 결과를 반복해 보겠습니다. 루프 `for i in 1..number_of_pages.to_i`를 사용하여 이 작업을 수행할 수 있지만 대신 `rels[:next]` 헤더를 따라 각 페이지에서 정보를 검색해 보겠습니다. 간단히 하기 위해 각 페이지에서 첫 번째 결과의 파일 경로를 살펴보겠습니다. 이렇게 하려면 루프가 필요합니다. 모든 루프의 끝에서 `rels[:next]` 정보를 따라 다음 페이지의 데이터 세트를 검색합니다.
이 루프는 사용할 `rels[:next]` 정보가 없을 때 종료됩니다(즉, `rels[:last]`에 있음). 다음과 비슷하게 표시될 수 있습니다.

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Octokit.rb를 사용하면 페이지당 항목 수를 변경하는 것이 매우 간단합니다. 초기 클라이언트 구성에 `per_page` 옵션 해시를 전달하기만 하면 됩니다. 그 후에는 코드가 그대로 유지되어야 합니다.

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## 페이지 매김 링크 구성

일반적으로 페이지 매김 사용의 목표는 가능한 모든 결과를 연결하는 것이 아니라 다음과 같은 탐색 세트를 생성하는 것입니다.

![페이지 매김 링크 샘플](/assets/images/pagination_sample.png)

그러면 어떤 결과가 나올지 마이크로 버전으로 요약해 보겠습니다.

위의 코드에서 첫 번째 호출의 페이지가 매겨진 결과에서 `number_of_pages`를 가져올 수 있다는 것을 이미 알고 있습니다.

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

여기에서 숫자 상자의 보기 좋은 ASCII 표현을 구성할 수 있습니다.
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

난수를 생성하여 사용자가 이러한 상자 중 하나를 클릭하는 것을 시뮬레이션해 보겠습니다.

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

이제 페이지 번호가 있으므로 Octokit를 사용하여 `:page` 옵션을 전달하여 해당 개별 페이지를 명시적으로 검색할 수 있습니다.

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

멋지게 만들고 싶다면 뒤로(`<<`) 및 앞으로(`>>`) 요소에 대한 링크를 생성하기 위해 이전 및 다음 페이지를 가져올 수도 있습니다.

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits
