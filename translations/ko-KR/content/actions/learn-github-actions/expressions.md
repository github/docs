---
title: 식
shortTitle: Expressions
intro: 워크플로 및 작업에서 식을 평가할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 1e88b76358bfb9ff7d3e9c9d965cc6b76e829bb2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098854'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 식 정보

식을 사용하여 워크플로 파일에서 환경 변수를 프로그래밍 방식으로 설정하고 컨텍스트에 액세스할 수 있습니다. 식은 리터럴 값, 컨텍스트에 대한 참조 또는 함수의 조합일 수 있습니다. 연산자를 사용하여 리터럴, 컨텍스트 참조, 함수를 결합할 수 있습니다. 컨텍스트에 대한 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

식은 일반적으로 워크플로 파일에서 조건부 `if` 키워드와 함께 사용하여 단계를 실행해야 하는지 여부를 결정합니다. `if` 조건이 `true`인 경우 단계가 실행됩니다.

특정 구문을 사용하여 {% data variables.product.prodname_dotcom %}에게 식을 문자열로 처리하는 대신 평가하도록 지시해야 합니다.

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} 조건에 대한 `if` 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”을 참조하세요.

{% data reusables.actions.context-injection-warning %}

#### `if` 조건의 식 예제

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### 환경 변수 설정 예제

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## 리터럴

식의 일부로 `boolean`, `null`, `number` 또는 `string` 데이터 형식을 사용할 수 있습니다.

| 데이터 형식 | 리터럴 값 |
|-----------|---------------|
| `boolean` | `true` 또는 `false` |
| `null`    | `null` |
| `number`  | JSON에서 지원하는 모든 숫자 형식입니다. |
| `string`  | `{% raw %}${{{% endraw %}` 및 `{% raw %}}}{% endraw %}`에 문자열을 묶을 필요가 없습니다. 그러나 문자열을 묶는 경우 문자열 주위에 작은따옴표(`'`)를 사용해야 합니다. 리터럴 작은따옴표를 사용하려면 추가 작은따옴표(`''`)를 사용하여 리터럴 작은따옴표를 이스케이프합니다. 큰따옴표(`"`)로 래핑하면 오류가 throw됩니다. |

#### 예제

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## 연산자

| 연산자    | 설명 |
| ---         | ---         |
| `( )`       | 논리적 그룹화 |
| `[ ]`       | 인덱스
| `.`         | 속성 참조 해제 |
| `!`         | Not |
| `<`         | 보다 작음 |
| `<=`        | 작거나 같음 |
| `>`         | 보다 큼 |
| `>=`        | 크거나 같음 |
| `==`        | 같음 |
| `!=`        | 같지 않음 |
| `&&`        | and |
|  <code>\|\|</code> | 또는 |

{% data variables.product.prodname_dotcom %}는 느슨한 동등 비교를 수행합니다.

* 형식이 일치하지 않으면 {% data variables.product.prodname_dotcom %}은 형식을 숫자로 강제 변환합니다. {% data variables.product.prodname_dotcom %}는 이러한 변환을 사용하여 데이터 형식을 숫자로 캐스팅합니다.

  | 형식    | 결과 |
  | ---     | ---    |
  | Null    | `0` |
  | 부울 | `true``1`를 반환합니다 <br /> `false``0`를 반환합니다 |
  | String  | 모든 유효한 JSON 숫자 형식에서 구문 분석됩니다. 그렇지 않으면 `NaN`입니다. <br /> 참고: 빈 문자열이 `0`을 반환합니다. |
  | 배열   | `NaN` |
  | Object  | `NaN` |
* 하나의 `NaN`을 다른 `NaN`와 비교해도 `true`가 나오지 않습니다. 자세한 내용은 “[NaN Mozilla 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)”를 참조하세요.
* {% data variables.product.prodname_dotcom %}는 문자열을 비교할 때 대/소문자를 무시합니다.
* 개체와 배열은 동일한 인스턴스일 때만 동일하게 간주됩니다.

## Functions

{% data variables.product.prodname_dotcom %}은 식에서 사용할 수 있는 기본 제공 함수 집합을 제공합니다. 일부 함수는 값을 문자열로 캐스팅하여 비교를 수행합니다. {% data variables.product.prodname_dotcom %}는 이러한 변환을 사용하여 데이터 형식을 문자열로 캐스팅합니다.

| 형식    | 결과 |
| ---     | ---    |
| Null    | `''` |
| 부울 | `'true'` 또는 `'false'` |
| 숫자  | 10진수 형식, 큰 숫자의 지수 |
| 배열   | 배열이 문자열로 변환되지 않음 |
| Object  | 개체가 문자열로 변환되지 않음 |

### 포함

`contains( search, item )`

`search`에 `item`이 포함된 경우 `true`를 반환합니다. `search`가 배열이면 이 함수는 `item`이 배열의 요소인 경우 `true`를 반환합니다. `search`이 문자열이면 이 함수는 `item`이 `search`의 하위 문자열인 경우 `true`를 반환합니다. 이 함수는 대/소문자를 구분하지 않습니다. 값을 문자열로 캐스팅합니다.

#### 문자열을 사용하는 예제

`contains('Hello world', 'llo')`는 `true`을 반환합니다.

#### 개체 필터를 사용하는 예제

`contains(github.event.issue.labels.*.name, 'bug')`은 이벤트와 관련된 문제에 “버그” 레이블이 있는 경우 `true`를 반환합니다.

자세한 내용은 “[개체 필터](#object-filters)”를 참조하세요.

#### 문자열 배열과 일치하는 예제

`github.event_name == "push" || github.event_name == "pull_request"`를 쓰는 대신 `fromJson()`과 함께 `contains()`를 사용하여 문자열 배열에 `item`이 포함되어 있는지 확인할 수 있습니다.

예를 들어 `contains(fromJson('["push", "pull_request"]'), github.event_name)`은 `github.event_name`이 “push” 또는 “pull_request”인 경우 `true`를 반환합니다.

### startswith

`startsWith( searchString, searchValue )`

`searchString`이 `searchValue`로 시작하면 `true`를 반환합니다. 이 함수는 대/소문자를 구분하지 않습니다. 값을 문자열로 캐스팅합니다.

#### 예제

`startsWith('Hello world', 'He')`는 `true`을 반환합니다.

### endsWith

`endsWith( searchString, searchValue )`

`true`이 `searchString`으로 끝나면 `searchValue`를 반환합니다. 이 함수는 대/소문자를 구분하지 않습니다. 값을 문자열로 캐스팅합니다.

#### 예제

`endsWith('Hello world', 'ld')`는 `true`을 반환합니다.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

`string`의 값을 `replaceValueN` 변수로 바꿉니다. `string`의 변수는 `{N}` 구문을 사용하여 지정됩니다. 여기서 `N`은 정수입니다. `replaceValue` 및 `string`을 하나 이상 지정해야 합니다. 사용할 수 있는 변수(`replaceValueN`)의 최대값은 없습니다. 이중 중괄호를 사용하여 중괄호를 이스케이프합니다.

#### 예제

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

‘Hello Mona the Octocat’을 반환합니다.

#### 중괄호 이스케이프 예제

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

'{Hello Mona the Octocat!}'을 반환합니다.

### join

`join( array, optionalSeparator )`

`array`의 값은 배열 또는 문자열일 수 있습니다. 모든 `array` 값이 문자열에 연결됩니다. `optionalSeparator`를 제공하면 연결된 값 사이에 삽입됩니다. 그렇지 않으면 기본 구분 기호인 `,`가 사용됩니다. 값을 문자열로 캐스팅합니다.

#### 예제

`join(github.event.issue.labels.*.name, ', ')`은 ‘버그, 도움 요청’을 반환할 수 있습니다.

### toJSON

`toJSON(value)`

`value`의 자동 서식 지정 JSON 표현을 반환합니다. 이 함수를 사용하여 컨텍스트에 제공된 정보를 디버그할 수 있습니다.

#### 예제

`toJSON(job)`은 `{ "status": "Success" }`를 반환할 수 있습니다.

### fromJSON

`fromJSON(value)`

`value`에 대한 JSON 객체 또는 JSON 데이터 형식을 반환합니다. 이 함수를 사용하여 JSON 개체를 평가된 식으로 제공하거나 문자열에서 환경 변수를 변환할 수 있습니다.

#### JSON 개체를 반환하는 예제

이 워크플로는 한 작업에서 JSON 매트릭스를 설정하고 출력 및 `fromJSON`을 사용하여 다음 작업으로 전달합니다.

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - id: set-matrix{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "matrix={\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
{%- endif %}{% raw %}
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### JSON 데이터 형식을 반환하는 예제

이 워크플로는 `fromJSON`을 사용하여 환경 변수를 문자열에서 부울 또는 정수로 변환합니다.

{% raw %}
```yaml
name: print
on: push
env:
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - continue-on-error: ${{ fromJSON(env.continue) }}
        timeout-minutes: ${{ fromJSON(env.time) }}
        run: echo ...
```
{% endraw %}

### hashFiles

`hashFiles(path)`

`path` 패턴과 일치하는 파일 세트에 대한 단일 해시를 반환합니다. 쉼표로 구분된 단일 `path` 패턴 또는 여러 `path` 패턴을 제공할 수 있습니다. `path`은 `GITHUB_WORKSPACE` 디렉터리에 상대적이며 `GITHUB_WORKSPACE` 내부의 파일만 포함할 수 있습니다. 이 함수는 일치하는 각 파일에 대한 개별 SHA-256 해시를 계산한 다음 해당 해시를 사용하여 파일 집합에 대한 최종 SHA-256 해시를 계산합니다. `path` 패턴이 파일과 일치하지 않으면 빈 문자열을 반환합니다. SHA-256에 대한 자세한 내용은 “[SHA-2](https://en.wikipedia.org/wiki/SHA-2)”를 참조하세요.

패턴 일치 문자를 사용하여 파일 이름을 일치시킬 수 있습니다. 패턴 일치는 Windows에서 대/소문자를 구분하지 않습니다. 지원되는 패턴 일치 문자에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet)”을 참조하세요.

#### 단일 패턴을 사용하는 예제

리포지토리의 모든 `package-lock.json` 파일과 일치합니다.

`hashFiles('**/package-lock.json')`

#### 여러 패턴이 있는 예제

리포지토리에 있는 모든 `package-lock.json` 및 `Gemfile.lock` 파일에 대한 해시를 만듭니다.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt 또는 ghes > 3.3 또는 ghae > 3.3 또는 ghec %}
## 상태 검사 함수

다음 상태 검사 함수를 `if` 조건의 식으로 사용할 수 있습니다. 이러한 함수 중 하나를 포함하지 않는 한 `success()` 기본 상태 검사가 적용됩니다. `if` 조건에 대한 자세한 내용은 “[GitHub Actions 워크플로 구문](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)” 및 “[GitHub 복합 작업에 대한 메타데이터 구문](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)”을 참조하세요.
{% else %}
## 확인 함수
다음 상태 검사 함수를 `if` 조건의 식으로 사용할 수 있습니다. 이러한 함수 중 하나를 포함하지 않는 한 `success()` 기본 상태 검사가 적용됩니다. `if` 조건에 대한 자세한 내용은 “[GitHub Actions에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)”을 참조하세요.
{% endif %}

### 성공

이전 단계가 실패하거나 취소되지 않은 경우 `true`를 반환합니다.

#### 예제

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### always

취소된 경우에도 단계가 항상 실행되고 `true`가 반환되도록 합니다. 심각한 실패로 인해 작업이 실행되지 않을 경우 작업 또는 단계가 실행되지 않습니다. 예를 들어 원본을 가져오지 못한 경우입니다.

#### 예제

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### 취소됨

워크플로가 취소된 경우 `true`를 반환합니다.

#### 예제

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### 실패

작업의 이전 단계가 실패하면 `true`를 반환합니다. 종속 작업 체인이 있는 경우 상위 작업이 실패하면 `failure()`가 `true`를 반환합니다.

#### 예제

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### 조건이 있는 오류

실패 후 실행할 단계에 대한 추가 조건을 포함할 수 있지만 상태 확인 기능이 포함되지 않은 `if` 조건에 자동으로 적용되는 `success()`의 기본 상태 확인을 재정의하려면 `failure()`를 계속 포함해야 합니다.

##### 예제

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## 개체 필터

`*` 구문을 사용하여 필터를 적용하고 컬렉션에서 일치하는 항목을 선택할 수 있습니다.

예를 들어 `fruits`라는 개체의 배열을 고려합니다.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

`fruits.*.name` 필터는 `[ "apple", "orange", "pear" ]` 배열을 반환합니다.

개체의 `*` 구문을 사용할 수도 있습니다. 예를 들어 `vegetables`라는 개체가 있다고 가정합니다.

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

`vegetables.*.ediblePortions` 필터는 다음으로 계산할 수 있습니다.

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

개체는 순서를 유지하지 않으므로 출력 순서를 보장할 수 없습니다.
