---
title: GraphQL을 사용하여 호출 형성
intro: GraphQL API에 인증하는 방법을 알아본 다음 쿼리 및 변형을 만들고 실행하는 방법을 알아봅니다.
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Form calls with GraphQL
ms.openlocfilehash: 2b3a54415b563a8b07eecd21638b5f9c662a3d7c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094163'
---
## GraphQL을 사용하여 인증

{% data reusables.user-settings.graphql-classic-pat-only %}

GraphQL 서버와 통신하려면 올바른 범위의 {% 데이터 variables.product.pat_generic %}이(가) 필요합니다.

"[{% 데이터 만들기 variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"의 단계에 따라 토큰을 만듭니다. 필요한 범위는 요청하려는 데이터 형식에 따라 달라집니다. 예를 들어 사용자 데이터를 요청하려면 **사용자** 범위를 선택합니다. 리포지토리 정보에 액세스해야 하는 경우 적절한 **리포지토리** 범위를 선택합니다.

{% ifversion fpt or ghec %}

[GraphQL Explorer](/graphql/guides/using-the-explorer) 동작과의 일치를 확인하려면 다음 범위를 요청합니다.

{% else %}

권장되는 범위는 다음과 같습니다.

{% endif %}


```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

API는 리소스에 특정 범위가 필요한지를 알려줍니다.

## GraphQL 엔드포인트

REST API에는 많은 엔드포인트가 있는 반면, GraphQL API에는 단일 엔드포인트가 있습니다.

<pre>{% data variables.product.graphql_url_pre %}</pre>

어떤 작업을 수행하든 엔드포인트는 일정하게 유지됩니다.

## GraphQL과 통신

GraphQL 작업은 여러 줄 JSON으로 구성되므로 GitHub에서는 [Explorer](/graphql/guides/using-the-explorer)를 사용하여 GraphQL을 호출할 것을 권장합니다. cURL 또는 다른 HTTP 말하기 라이브러리를 사용할 수도 있습니다.

REST에서 [HTTP 동사](/rest#http-verbs)는 수행되는 작업을 결정합니다. GraphQL에서는 쿼리를 수행하든 변형을 수행하든 관계없이 JSON으로 인코딩된 본문을 제공하므로, HTTP 동사는 `POST`입니다. 엔드포인트에 대한 간단한 `GET`인 [내적 검사 쿼리](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)는 예외입니다. GraphQL과 REST에 대한 자세한 내용은 “[REST에서 GraphQL로 마이그레이션](/graphql/guides/migrating-from-rest-to-graphql)”을 참조하세요.

cURL을 사용하여 GraphQL을 쿼리하려면 JSON 페이로드로 `POST` 요청을 수행합니다. 페이로드에는 `query`라는 문자열이 포함되어야 합니다.

```shell
curl -H "Authorization: bearer TOKEN" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**참고**: `"query"`의 문자열 값은 줄 바꿈 문자를 이스케이프해야 하며, 그렇게 하지 않으면 스키마가 이를 올바르게 구문 분석하지 않습니다. `POST` 본문의 경우 외부 큰따옴표와 이스케이프된 내부 큰따옴표를 사용합니다.

{% endtip %}

### 쿼리 및 변형 작업 정보

GitHub GraphQL API에서 허용되는 두 가지 유형의 작업은 _쿼리_ 및 _변형_ 입니다. GraphQL과 REST를 비교하면 쿼리는 `GET` 요청처럼 작동하고 변형은 `POST`/`PATCH`/`DELETE`처럼 작동합니다. [변형 이름](/graphql/reference/mutations)은 어떤 수정이 실행되는지를 결정합니다.

속도 제한에 대한 자세한 내용은 “[GraphQL 리소스 제한 사항](/graphql/overview/resource-limitations)”을 참조하세요.

쿼리 및 변경은 몇 가지 중요한 차이점이 있지만 비슷한 형식을 공유합니다.

### 쿼리 정보

GraphQL 쿼리는 지정한 데이터만 반환합니다. 쿼리를 구성하려면 [스칼라](/graphql/reference/scalars)만 반환할 때까지 [필드 내의 필드](/graphql/guides/introduction-to-graphql#field)(_중첩된 하위 필드_ 라고도 함)를 지정해야 합니다.

쿼리는 다음과 같이 구성됩니다.

<pre>query {
  JSON-OBJECT-TO-RETURN
}</pre>

실제 예제는 “[예제 쿼리](#example-query)”를 참조하세요.

### 변형 정보

변형을 형성하려면 다음 세 가지를 지정해야 합니다.

1. _변형 이름_. 수행하려는 수정의 유형입니다.
2. _입력 개체_. _입력 필드_ 로 구성된, 서버로 보내려는 데이터입니다. 이것을 변형 이름에 인수로서 전달합니다.
3. _페이로드 개체_. _반환 필드_ 로 구성된, 서버로부터 반환하려는 데이터입니다. 이것을 변형 이름의 본문으로서 전달합니다.

변형은 다음과 같이 구성됩니다.

<pre>mutation {
  MUTATION-NAME(input: {MUTATION-NAME-INPUT!}) {
    MUTATION-NAME-PAYLOAD
  }
}</pre>

이 예제에서 입력 객체는 `MutationNameInput`, 페이로드 객체는 `MutationNamePayload`입니다.

[변형](/graphql/reference/mutations) 참조에서, 나열된 _입력 필드_ 는 입력 개체로서 전달하는 것입니다. 나열된 _반환 필드_ 는 페이로드 개체로서 전달하는 것입니다.

실제 예제는 “[예제 변형](#example-mutation)”을 참조하세요.

## 변수 사용

[변수](https://graphql.github.io/learn/queries/#variables)는 쿼리를 더욱 동적이고 강력하게 만들 수 있으며 변형 입력 개체를 전달할 때 복잡성을 줄일 수 있습니다.

{% note %}

**참고**: Explorer를 사용하는 경우 별도의 [쿼리 변수 창](/graphql/guides/using-the-explorer#using-the-variable-pane)에 변수를 입력하고 JSON 개체 앞에 단어 `variables`를 포함하지 마세요.

{% endnote %}

다음은 단일 변수를 사용하는 예제 쿼리입니다.

```graphql
query($number_of_repos:Int!) {
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

변수를 사용하는 세 단계가 있습니다.

1. `variables` 개체에서 작업 외부의 변수를 정의합니다.

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  개체는 유효한 JSON이어야 합니다. 이 예제에서는 간단한 `Int` 변수 형식을 보여 주지만, 입력 개체와 같은 더 복잡한 변수 형식을 정의할 수 있습니다. 여기에서 여러 변수를 정의할 수도 있습니다.

2. 변수를 인수로서 작업에 전달합니다.

  ```graphql
  query($number_of_repos:Int!){
  ```

  인수는 키-값 쌍이며, 여기서 키는 `$`로 시작하는 _이름_(예: `$number_of_repos`)이고 값은 _형식_(예: `Int`)입니다. 형식이 필요한지 여부를 나타내는 `!`를 추가합니다. 여러 변수를 정의한 경우 여기에 여러 인수로서 포함합니다.

3. 작업 내에서 변수를 사용합니다.

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  이 예제에서는 변수를 검색할 리포지토리의 수로 대체합니다. GraphQL은 강력한 입력을 적용하기 때문에 2단계에서 형식을 지정합니다.

이 프로세스는 쿼리 인수를 동적으로 만듭니다. 이제 단순히 `variables` 개체의 값을 변경하고 쿼리의 나머지를 동일하게 유지할 수 있습니다.

변수를 인수로서 사용하면 쿼리를 변경하지 않고도 `variables` 개체의 값을 동적으로 업데이트할 수 있습니다.

## 예제 쿼리

좀 더 복잡한 쿼리를 살펴보고 이 정보를 컨텍스트에 배치해 보겠습니다.

다음 쿼리는 `octocat/Hello-World` 리포지토리를 조회하고, 가장 최근에 종료된 20개의 이슈를 찾고, 각 이슈의 제목, URL, 처음 5개 레이블을 반환합니다.

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

컴퍼지션을 한 줄씩 살펴보기:

* `query {`

  서버의 데이터를 수정하는 것이 아니라 데이터를 읽고자 하므로, `query`는 루트 작업입니다. 작업을 지정하지 않으면 `query`가 기본값이기도 합니다.

* `repository(owner:"octocat", name:"Hello-World") {`

  쿼리를 시작하기 위해 [`repository`](/graphql/reference/objects#repository) 개체를 찾으려고 합니다. 스키마 유효성 검사에 따르면 이 개체에 `owner` 및 `name` 인수가 필요합니다.

* `issues(last:20, states:CLOSED) {`

  리포지토리의 모든 이슈를 설명하기 위해 `issues` 개체를 호출합니다. `repository`에서 단일 `issue`를 쿼리할 수 있지만, 그렇게 할 경우 반환하려는 이슈의 번호를 알아야 하고 이를 인수로서 제공해야 합니다.

  `issues` 개체에 대한 몇 가지 세부 정보:

  - [문서](/graphql/reference/objects#repository)에 따르면 이 개체의 형식은 `IssueConnection`입니다.
  - 스키마 유효성 검사에 따르면 이 개체에는 결과의 `last` 또는 `first` 숫자가 인수로서 필요합니다. 이 예제에서는 `20`을 사용합니다.
  - 또한 [문서](/graphql/reference/objects#repository)에 따르면 이 개체는 `OPEN` 또는 `CLOSED` 값을 허용하는 [`IssueState`](/graphql/reference/enums#issuestate) 열거형인 `states` 인수를 허용합니다. 종료된 이슈만 찾으려면 `states` 키에 `CLOSED` 값을 제공합니다.

* `edges {`

  `IssueConnection` 형식을 가지고 있으므로 `issues`가 연결임을 알고 있습니다. 개별 이슈에 대한 데이터를 검색하려면 `edges`를 통해 노드에 액세스해야 합니다.

* `node {`

  여기서는 에지 끝에서 노드를 검색합니다. [`IssueConnection` 문서](/graphql/reference/objects#issueconnection)에 따르면 `IssueConnection` 형식 끝에 있는 노드는 `Issue` 개체입니다.

* 이제 `Issue` 개체를 검색하고 있다는 것을 알게 되었으므로 [문서](/graphql/reference/objects#issue)를 살펴보고 반환할 필드를 지정할 수 있습니다.

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  여기서 `Issue` 개체의 `title`, `url`, `labels` 필드를 지정합니다.

  `labels` 필드의 형식은 [`LabelConnection`](/graphql/reference/objects#labelconnection)입니다. `issues` 개체와 마찬가지로 `labels`도 연결이므로 해당 에지를 연결된 노드인 `label` 개체로 이동해야 합니다. 노드에서, 반환하려는 `label` 개체 필드(이 경우 `name`)를 지정할 수 있습니다.

Octocat의 {% ifversion not ghae %}퍼블릭{% endif %} `Hello-World` 리포지토리에서 이 쿼리를 실행하면 많은 레이블이 반환되지는 않습니다. 레이블을 사용하는 자체 리포지토리 중 하나에서 실행해 보면 차이를 확인할 수 있을 것입니다.

## 예제 변형

변형에는 쿼리를 먼저 수행해야만 알 수 있는 정보가 필요한 경우가 많습니다. 이 예제에서는 두 개의 작업을 보여 줍니다.

1. 이슈 ID를 가져오기 위한 쿼리.
2. 이슈에 이모지 반응을 추가하기 위한 변형.

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

이름(이 예제에서는 `FindIssueID` 및 `AddReactionToIssue`)을 지정하면 동일한 Explorer 창에 쿼리와 변형을 포함할 수 있지만, 작업은 GraphQL 엔드포인트에 대한 별도의 호출로 실행됩니다. 변형과 동시에 쿼리를 수행할 수 없거나 그 반대의 경우도 마찬가지입니다.

{% endtip %}

예제를 하나 살펴보겠습니다. 간단한 작업처럼 보입니다. 이슈에 이모지 반응을 추가합니다.

그렇다면 쿼리로 시작해야 하는지 어떻게 알 수 있을까요? 아직 하지 않았습니다.

서버의 데이터를 수정하려고 하므로(이슈에 이모지 연결) 유용한 변형을 찾기 위해 스키마를 검색하는 것으로 시작합니다. 참조 문서는 다음 설명과 함께 [`addReaction`](/graphql/reference/mutations#addreaction) 변형을 보여 줍니다. `Adds a reaction to a subject.` 완벽합니다!

변형에 대한 문서에는 세 개의 입력 필드가 나열됩니다.

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

`!`는 `subjectId`와 `content`가 필수 필드임을 나타냅니다. 필수 `content`는 의미가 있습니다. 반응을 추가하려고 하므로 사용할 이모지 지정해야 합니다.

하지만 `subjectId`가 왜 필요한가요? `subjectId`가 어떤 리포지토리의 어떤 이슈에 반응해야 하는지 식별하는 유일한 방법이기 때문입니다. 

`ID`를 얻기 위해 쿼리를 사용하여 이 예제를 시작합니다.

쿼리를 한 줄씩 살펴보겠습니다.

* `query FindIssueID {`

  여기서는 쿼리를 수행하고 이름을 `FindIssueID`로 지정합니다. 쿼리에 이름을 지정하는 것은 선택 사항입니다. 변형과 동일한 Explorer 창에 포함할 수 있도록 여기서는 이름을 지정합니다.

* `repository(owner:"octocat", name:"Hello-World") {`

  `repository` 개체를 쿼리하고 `owner` 및 `name` 인수를 전달하여 리포지토리를 지정합니다.

* `issue(number:349) {`

  `issue` 개체를 쿼리하고 `number` 인수를 전달하여 반응할 이슈를 지정합니다.

* `id`

  여기에서 `https://github.com/octocat/Hello-World/issues/349`의 `id`를 검색하여 `subjectId`로 전달합니다.

쿼리를 실행하여 `id`: `MDU6SXNzdWUyMzEzOTE1NTE=`를 가져옵니다.

{% tip %}

**참고**: 쿼리에서 반환되는 `id`가 변형에서 `subjectID`로서 전달할 값입니다. 문서나 스키마 내적 검사는 이 관계를 나타내지 않습니다. 이를 파악하려면 이름 뒤에 있는 개념을 이해해야 합니다.

{% endtip %}

ID를 알고 있으면 다음과 같이 변형을 진행할 수 있습니다.

* `mutation AddReactionToIssue {`

  여기서는 변형을 수행하고 이름을 `AddReactionToIssue`로 지정합니다. 쿼리와 마찬가지로 변형에 이름을 지정하는 것도 선택 사항입니다. 쿼리와 동일한 Explorer 창에 포함할 수 있도록 여기서는 이름을 지정합니다.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  다음 줄을 살펴보겠습니다.

  - `addReaction`은 변형의 이름입니다.
  - `input`은 필수 인수 키입니다. 변형에 대해서는 항상 `input`입니다.
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}`는 필수 인수 키입니다. 변형에 대해서는 항상 입력 필드(이 경우 `subjectId` 및 `content`)로 구성된 [입력 개체](/graphql/reference/input-objects)(따라서 중괄호)입니다.

  콘텐츠에 사용할 값을 어떻게 알 수 있나요? [`addReaction` 문서](/graphql/reference/mutations#addreaction)에 따르면 `content` 필드에는 [`ReactionContent`](/graphql/reference/enums#reactioncontent) 형식이 있는데, GitHub 이슈에서는 특정 이모지 반응만 지원되므로 이것은 [열거형](/graphql/reference/enums)입니다. 다음은 반응에 허용되는 값입니다(일부 값은 해당 이모지 이름과 다름).

  {% data reusables.repositories.reaction_list %}

* 호출의 나머지는 페이로드 개체로 구성됩니다. 여기서는 변형을 수행한 후 서버에서 반환하도록 할 데이터를 지정합니다. 이러한 줄은 [`addReaction` 문서](/graphql/reference/mutations#addreaction)에서 오는 것이며, 다음 세 가지 가능한 반환 필드가 있습니다.

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  이 예제에서는 필수 하위 필드(각각 `content` 및 `id`)가 있는 두 개의 필수 필드(`reaction` 및 `subject`)를 반환합니다.

변형을 실행할 때 응답은 다음과 같습니다.

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

정말 간단하죠. 사용자 이름을 찾으려면 :tada:를 마우스로 가리키고 [이슈에 대한 반응](https://github.com/octocat/Hello-World/issues/349)을 확인하세요.

마지막으로, 입력 개체에 여러 필드를 전달하면 구문이 다루기 어려워질 수 있습니다. 필드를 [변수](#working-with-variables)로 이동하면 도움이 될 수 있습니다. 변수를 사용하여 원래 변형을 다시 작성하는 방법은 다음과 같습니다.

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

이전 예제에서 `content` 필드 값(변형에서 직접 사용됨)에는 `HOORAY` 주위에 따옴표가 없지만, 변수에 사용될 때는 따옴표가 있는 것을 알 수 있습니다. 그 이유는 다음과 같습니다.
* 변형에서 직접 `content`를 사용하는 경우, 스키마는 값이 문자열이 아니라 _열거형_ 인 [`ReactionContent`](/graphql/reference/enums#reactioncontent) 형식일 것으로 예상합니다. 따옴표는 문자열에 예약되어 있으므로 열거형 값 주위에 따옴표를 추가하면 스키마 유효성 검사에서 오류가 발생합니다.
* 변수에서 `content`를 사용하는 경우, 변수 섹션은 유효한 JSON이어야 하므로 따옴표가 필요합니다. 스키마 유효성 검사는 실행 중에 변수가 변형으로 전달될 때 `ReactionContent` 형식을 올바르게 해석합니다.

열거형과 문자열 간의 차이점에 대한 자세한 내용은 [공식 GraphQL 사양](https://graphql.github.io/graphql-spec/June2018/#sec-Enums)을 참조하세요.

{% endnote %}

## 추가 참고 자료

GraphQL 호출을 구성할 때 할 수 있는 작업이 훨씬 더 많습니다. 다음에 살펴볼 내용은 아래와 같습니다.

* [페이지 매김](https://graphql.org/learn/pagination/)
* [조각](https://graphql.org/learn/queries/#fragments)
* [인라인 조각](https://graphql.org/learn/queries/#inline-fragments)
* [지시문](https://graphql.org/learn/queries/#directives)
