---
title: GitHub 코드 검색(베타) 구문 이해
intro: '특수 코드 한정자, 정규식 및 부울 작업을 사용하여 원하는 결과에 대한 검색 쿼리를 작성할 수 있습니다.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 098da2b7fe8a8c5466805c583e6b029b5b9b58c1
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160065'
---
{% note %}

**참고:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## 새 코드 검색(베타) 쿼리 구조 정보

이 문서의 검색 구문은 새 코드 검색(베타)이 사용하도록 설정된 코드 검색에만 적용됩니다. {% data reusables.search.non-code-search-explanation %}

검색 쿼리는 검색할 텍스트와 검색 범위를 좁히는 한정자로 구성된 검색어로 구성됩니다. 

한정자 없는 용어는 파일의 콘텐츠 또는 파일 경로와 일치합니다. 

예를 들어, 다음과 같은 쿼리가 있습니다.

```
http-push
```

위의 쿼리는 라는 용어`http-push`가 없더라도 파일`docs/http-push.txt`과 일치합니다. 또한 이라는 용어`http-push`가 포함된 경우 라는 `example.txt` 파일과 일치합니다. 

공백으로 구분된 여러 용어를 입력하여 두 용어를 모두 충족하는 문서를 검색할 수 있습니다. 

예를 들어, 다음과 같은 쿼리가 있습니다.

```
sparse index
```

검색 결과에는 용어 `sparse` 와 `index`를 모두 포함하는 모든 문서가 순서대로 포함됩니다. 예를 들어 이 파일은 를 포함하는 `SparseIndexVector`파일, 구`index for sparse trees`가 있는 파일 및 라는 용어`sparse`가 포함된 파일 `index.txt` 과 일치합니다.  

공백으로 구분된 여러 용어를 검색하는 것은 검색 `hello AND world`과 동일합니다. 와 같은 `hello OR world`다른 부울 작업도 새 코드 검색(베타)에서 지원됩니다. 부울 작업에 대한 자세한 내용은 "[부울 작업 사용"을 참조하세요.](#using-boolean-operations)

새 코드 검색(베타)은 공백을 포함하여 정확한 문자열 검색도 지원합니다. 자세한 내용은 "[정확한 일치 쿼리"를 참조하세요](#query-for-an-exact-match).

및 `language:` `path:`와 같은 `repo:`특수 한정자를 사용하여 코드 검색 범위를 좁힐 수 있습니다. 새 코드 검색(베타)에서 사용할 수 있는 한정자에 대한 자세한 내용은 "[한정자 사용"을 참조하세요.](#using-qualifiers)

백슬라이쉬의 식을 둘러서 검색에서 정규식을 사용할 수도 있습니다. 정규식 사용에 대한 자세한 내용은 "[정규식 사용"을 참조하세요.](#using-regular-expressions)

## 정확한 일치 항목 쿼리

공백을 포함하여 정확한 문자열을 검색하려면 문자열을 따옴표로 묶을 수 있습니다. 예:

```
"sparse index"
```

따옴표가 포함된 구를 검색하려면 백슬래시를 사용하여 따옴표를 이스케이프할 수 있습니다. 예를 들어 정확한 문자열 `name = "tensorflow"`을 찾으려면 다음을 검색할 수 있습니다.

```
"name = \"tensorflow\""
```

예를 들어 한정자에서 따옴표 붙은 문자열을 사용할 수도 있습니다.

```
path: git language: "protocol buffers"
```

## 부울 작업 사용

새 코드 검색(베타)은 부울 식을 지원합니다. , 및 `OR``NOT` 연산`AND`자를 사용하여 검색어를 결합할 수 있습니다.

기본적으로 공백으로 구분된 인접 용어는 연산자를 `AND` 사용하는 것과 같습니다. 예를 들어 검색 쿼리 `sparse index` 는 와 동일합니다 `sparse AND index`. 즉, 검색 결과에는 용어 `sparse` 와 `index`를 모두 포함하는 모든 문서가 순서대로 포함됩니다.

한 용어 또는 다른 용어가 포함된 문서를 검색하려면 연산자를 `OR` 사용할 수 있습니다. 예를 들어 다음 쿼리는 또는 `index`를 포함하는 문서와 `sparse` 일치합니다.

```
sparse OR index
```

검색 결과에서 파일을 제외하려면 연산자를 `NOT` 사용할 수 있습니다. 예를 들어 디렉터리에서 `__testing__` 파일을 제외하려면 다음을 검색할 수 있습니다.

```
"fatal error" NOT path:__testing__
```

괄호를 사용하여 더 복잡한 부울 식을 표현할 수 있습니다. 예:

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## 한정자 사용

특수 키워드를 사용하여 검색을 한정할 수 있습니다.
- [리포지토리 한정자](#repository-qualifier)
- [조직 및 사용자 한정자](#organization-and-user-qualifiers)
- [언어 한정자](#language-qualifier)
- [경로 한정자](#path-qualifier)
- [기호 한정자](#symbol-qualifier)
- [콘텐츠 한정자](#content-qualifier)
- [한정자입니다.](#is-qualifier)

### 리포지토리 한정자

리포지토리 내에서 검색하려면 한정자를 `repo:` 사용합니다. 소유자를 포함하여 전체 리포지토리 이름을 제공해야 합니다. 예:

```
repo:github/linguist
```

리포지토리 집합 내에서 검색하려면 여러 `repo:` 한정자를 부울 연산 `OR`자 와 결합할 수 있습니다. 예를 들면 다음과 같습니다.

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

**참고:** 새 코드 검색 베타는 현재 리포지토리 이름에 대한 정규식 또는 부분 일치를 지원하지 않으므로 한정자가 작동하려면 전체 리포지토리 이름(사용자 접두사 포함) `repo:` 을 입력해야 합니다.

{% endnote %}

### 조직 및 사용자 한정자

조직 내에서 파일을 검색하려면 한정자를 `org:` 사용합니다. 예:

```
org:github
```

개인 계정 내에서 파일을 검색하려면 한정자를 `user:` 사용합니다. 예를 들면 다음과 같습니다.

```
user:octocat
```

{% note %}

**참고:** 새 코드 검색 베타는 현재 조직 또는 사용자 이름에 대한 정규식 또는 부분 일치를 지원하지 않으므로 한정자가 작동하려면 전체 조직 또는 사용자 이름을 입력해야 합니다.

{% endnote %}


### 언어 한정자

특정 언어로 범위를 좁히려면 한정자를 `language:` 사용합니다. 예: 

```
language: ruby OR language:cpp OR language:csharp
```

지원되는 언어 이름의 전체 목록은 [github/linguist](https://github.com/github/linguist)[의 languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)을 참조하세요. 기본 설정 언어가 목록에 없는 경우 끌어오기 요청을 열어 추가할 수 있습니다.

### 경로 한정자

파일 경로 내에서 검색하려면 한정자를 `path:` 사용합니다. 그러면 해당 파일 경로의 아무 곳에나 용어가 포함된 파일과 일치합니다. 예를 들어 경로에 용어 `unit_tests` 가 포함된 파일을 찾으려면 다음을 사용합니다.

```
path:unit_tests
```
 위의 쿼리는 및 `src/docs/unit_tests.md` 와 일치합니다. 둘 다 `src/unit_tests/my_test.py` 경로의 어딘가에 포함되기 `unit_test` 때문에 입니다. 

 경로의 일부가 아닌 특정 파일 이름만 일치하려면 정규식을 사용할 수 있습니다.

 ```
 path:/(^|\/)README\.md$/
 ```
`.` 는 정규식에 대해 특별한 의미가 있으므로 파일 이름의 이스케 `.` 이프됩니다. 정규식 사용에 대한 자세한 내용은 "[정규식 사용"을 참조하세요.](#using-regular-expressions)

<br>

한정자에서 `path:` 일부 제한된 glob 식을 사용할 수도 있습니다.

예를 들어 확장 `txt`명 를 사용하여 파일을 검색하려면 다음을 사용할 수 있습니다.

```
path:*.txt
```
<br>
디렉터리 내에서 JavaScript 파일을 검색하려면 다음을 `src` 사용할 수 있습니다.

```
path:src/*.js
```

- 기본적으로 glob 식은 경로의 시작 부분에 고정되지 않으므로 위의 식은 여전히 와 같은 `app/src/main.js`경로와 일치합니다. 그러나 식을 접두사로 `/`지정하면 시작에 고정됩니다. 예:

    ```
    path:/src/*.js
    ```
- `*` 는 문자와 `/` 일치하지 않으므로 위의 예제에서는 모든 결과가 디렉터리의 직접 하위 항목 `src` 이 됩니다. 하위 디렉터리 내에서 일치하기 위해 결과에 와 같은 `/src/app/testing/utils/example.js`깊이 중첩된 파일이 포함되도록 을 사용할 `**`수 있습니다. 예:

    ```
    path:/src/**/*.js
    ```
<br>

전역 문자를 사용할 `?` 수도 있습니다. 예를 들어 경로 `file.aac` 또는 `file.abc`을 일치하려면 다음을 사용할 수 있습니다.

```
path:*.a?c
```
<br>
또는 `?`와 같은 `*` 특수 문자가 포함된 파일 이름을 검색하려면 따옴표 붙은 문자열만 사용합니다.

```
path:"file?"
```

glob 식은 따옴표 붙은 문자열에 대해 사용하지 않도록 설정되므로 위의 쿼리는 리터럴 문자열 `file?`을 포함하는 경로만 일치합니다. 

### 기호 한정자

한정자를 사용하여 코드에서 함수 또는 클래스 정의와 같은 기호 정의를 검색할 `symbol:` 수 있습니다. 기호 검색은 오픈 소스 [트리 시터](https://github.com/tree-sitter) 파서 에코시스템을 사용하여 코드를 구문 분석하는 데 기반하므로 추가 설정 또는 빌드 도구 통합이 필요하지 않습니다.

예를 들어 라는 `WithContext`기호를 검색하려면

```
language:go symbol:WithContext
```

일부 언어에서는 접두사(예: 클래스 이름의 접두사)를 사용하여 기호를 검색할 수 있습니다. 예를 들어 구조체`Maint`의 메서드 `deleteRows` 에 대해 Go를 사용하는지 또는 `symbol:Maint::deleteRows` Rust에서 검색 `symbol:Maint.deleteRows` 할 수 있습니다.

기호 한정자를 사용하여 정규식을 사용할 수도 있습니다. 예를 들어 다음 쿼리는 형식에 대해 Rust에서 구현한 변환을 찾습니다 `String` .

```
language:rust symbol:/^String::to_.*/
```

이 한정자는 참조가 아닌 정의만 검색하며, 모든 기호 형식이나 언어가 아직 완전히 지원되지는 않습니다. 기호 추출은 다음 언어에 대해 지원됩니다. 

- C#
- Python
- Go
- Java
- JavaScript
- TypeScript
- PHP
- 프로토콜 버퍼
- Ruby
- Rust

우리는 더 많은 언어에 대한 지원을 추가하기 위해 노력하고 있습니다. 이러한 노력에 기여하려면 기호 검색의 기반이 되는 오픈 소스 [Tree-sitter](https://github.com/tree-sitter) 파서 에코시스템에서 언어에 대한 지원을 추가할 수 있습니다.

### 콘텐츠 한정자

기본적으로 맨손 용어는 경로와 파일 콘텐츠를 모두 검색합니다. 파일 경로가 아닌 파일의 콘텐츠와 엄격하게 일치하도록 검색을 제한하려면 한정자를 `content:` 사용합니다. 예:

```
content:README.md
```

이 쿼리는 라는 `README.md`파일과 일치하는 것이 아니라 라는 용어`README.md`가 포함된 파일만 일치합니다. 

### 한정자입니다.

문서 속성을 기준으로 필터링하려면 한정자를 `is:` 사용할 수 있습니다. 현재 이 한정자에서 지원되는 유일한 값은 이며, 이 값은 `archived`검색을 보관된 리포지토리로 제한합니다. 예:

```
path:/MIT.txt is:archived
```

한정자는 `is:` 연산자를 사용하여 `NOT` 반전할 수 있습니다. 보관하지 않은 리포지토리를 검색하려면 다음을 검색할 수 있습니다.

```
log4j NOT is:archived
```

## 정규식 사용

새 코드 검색(베타)은 코드에서 패턴을 검색하는 정규식을 지원합니다. 백 슬래시에서 regex를 둘러싸고 많은 한정자 내에서뿐만 아니라 맨손 검색 용어로 정규식을 사용할 수 있습니다. 

예를 들어 정규식을 `sparse.*index`검색하려면 다음을 사용합니다.

```
/sparse.*index/
```

정규식 내에서 슬래시를 이스케이프해야 합니다. 예를 들어 디렉터리 내에서 `App/src` 파일을 검색하려면 다음을 사용합니다.

```
/^App\/src\//
```
