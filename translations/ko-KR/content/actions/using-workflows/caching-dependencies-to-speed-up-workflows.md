---
title: 워크플로 속도를 높이기 위한 종속성 캐싱
shortTitle: Cache dependencies
intro: 워크플로를 더 빠르고 효율적으로 만들기 위해 종속성 및 일반적으로 재사용되는 기타 파일에 대한 캐시를 만들고 사용할 수 있습니다.
redirect_from:
  - /github/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows
  - /actions/configuring-and-managing-workflows/caching-dependencies-to-speed-up-workflows
  - /actions/guides/caching-dependencies-to-speed-up-workflows
  - /actions/advanced-guides/caching-dependencies-to-speed-up-workflows
versions:
  feature: actions-caching
type: tutorial
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 380fe568e950a4dc388e8f811ecebd12f242c5df
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164382'
---
## 캐싱 워크플로 종속성 정보

워크플로 실행은 한 실행에서 다른 실행으로 동일한 출력 또는 다운로드된 종속성을 다시 사용하는 경우가 많습니다. 예를 들어 Maven, Gradle, npm 및 Yarn과 같은 패키지 및 종속성 관리 도구는 다운로드한 종속성의 로컬 캐시를 유지합니다.

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %}에서 호스트되는 실행기에서의 작업은 깨끗한 실행기 이미지에서 시작되며 매번 종속성을 다운로드해야 하므로 네트워크 사용률이 증가하고 런타임이 길어지고 비용이 증가합니다. {% endif %}종속성과 같은 파일을 다시 만드는 데 걸리는 시간을 단축하기 위해 {% data variables.product.prodname_dotcom %}은 워크플로에서 자주 사용하는 종속성을 캐시할 수 있습니다.

작업에 대한 종속성을 캐시하려면 {% data variables.product.prodname_dotcom %}의 [`cache` 작업](https://github.com/actions/cache)을 사용할 수 있습니다. 작업은 고유 키로 식별된 캐시를 만들고 복원합니다. 또는 아래에 나열된 패키지 관리자를 캐싱하는 경우 해당 설치-* 작업을 사용하려면 최소한의 구성이 필요하며 종속성 캐시를 만들고 복원합니다.

| 패키지 관리자 | 캐싱에 대한 setup-* 작업 |
|---|---|
| npm, Yarn, pnpm | [setup-node](https://github.com/actions/setup-node#caching-global-packages-data) |
| pip, pipenv, Poetry | [setup-python](https://github.com/actions/setup-python#caching-packages-dependencies) |
| Gradle, Maven | [setup-java](https://github.com/actions/setup-java#caching-packages-dependencies) |
| RubyGems | [setup-ruby](https://github.com/ruby/setup-ruby#caching-bundle-install-automatically) |
| Go `go.sum` | [setup-go](https://github.com/actions/setup-go#caching-dependency-files-and-build-outputs) |

{% warning %}

**경고**: {% ifversion fpt or ghec %}{% data variables.product.prodname_actions %}에서 캐싱을 사용할 때 다음 사항에 유의하세요.

* {% endif %}캐시에 중요한 정보를 저장하지 않는 것이 좋습니다. 예를 들어 중요한 정보에는 캐시 경로의 파일에 저장된 액세스 토큰 또는 로그인 자격 증명이 포함될 수 있습니다. 또한 CLI(명령줄 인터페이스) 프로그램과 마찬가지로 `docker login` 구성 파일에 액세스 자격 증명을 저장할 수 있습니다. 읽기 액세스 권한이 있는 사용자는 리포지토리에서 끌어오기 요청을 만들고 캐시의 콘텐츠에 액세스할 수 있습니다. 리포지토리의 포크는 기본 분기에 끌어오기 요청을 만들고 기본 분기의 캐시에 액세스할 수도 있습니다.
{%- ifversion fpt or ghec %}
* 자체 호스팅 실행기를 사용하는 경우 워크플로 실행의 캐시는 {% data variables.product.company_short %} 소유 클라우드 스토리지에 저장됩니다. 고객 소유 스토리지 솔루션은 {% data variables.product.prodname_ghe_server %}에서만 사용할 수 있습니다.
{%- endif %}

{% endwarning %}

{% data reusables.actions.comparing-artifacts-caching %}

워크플로 실행 아티팩트에 대한 자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”를 참조하세요.

## 캐시 액세스 제한 사항

액세스 제한은 서로 다른 분기 또는 태그 간에 논리적 경계를 만들어 캐시 격리 및 보안을 제공합니다. 워크플로 실행은 현재 분기 또는 기본 분기(일반적으로 )에서 만든 캐시를 복원할 `main`수 있습니다. 워크플로 실행이 끌어오기 요청에 대해 트리거되는 경우 포크된 리포지토리의 기본 분기를 포함하여 기본 분기에서 만든 캐시를 복원할 수도 있습니다. 예를 들어 분기에 `feature-b` 기본 분기 `feature-a`가 있는 경우 끌어오기 요청에서 트리거된 워크플로 실행은 기본 `main` 분기, 기본 `feature-a` 분기 및 현재 `feature-b` 분기에서 만든 캐시에 액세스할 수 있습니다.

워크플로 실행은 자식 분기 또는 형제 분기에 대해 만든 캐시를 복원할 수 없습니다. 예를 들어 자식 `feature-b` 분기에 대해 만든 캐시는 부모 `main` 분기에서 트리거된 워크플로 실행에 액세스할 수 없습니다. 마찬가지로 기본이 있는 분기에 대해 `feature-a` 만든 캐시는 기본 `main` 를 사용하여 해당 형제 `feature-c` 분기에 `main`액세스할 수 없습니다. 워크플로 실행은 다른 태그 이름에 대해 만든 캐시를 복원할 수도 없습니다. 예를 들어 기본이 있는 태그 `release-a` 에 대해 생성된 캐시는 기본 `main` 가 있는 태그 `release-b` `main`에 대해 트리거된 워크플로 실행에 액세스할 수 없습니다.

끌어오기 요청에서 트리거된 워크플로 실행에 의해 캐시가 만들어지면 병합 참조(`refs/pull/.../merge`)에 대한 캐시가 만들어집니다. 이 때문에 캐시는 범위가 제한되며 끌어오기 요청을 다시 실행해야만 복원할 수 있습니다. 기본 분기 또는 해당 기본 분기를 대상으로 하는 다른 끌어오기 요청에 의해 복원할 수 없습니다.

리포지토리에서 여러 워크플로 실행은 캐시를 공유할 수 있습니다. 워크플로 실행의 분기에 대해 만든 캐시는 동일한 리포지토리 및 분기에 대해 다른 워크플로 실행에서 액세스하고 복원할 수 있습니다.

## `cache` 작업 사용

[`cache` 작업](https://github.com/actions/cache)은 사용자가 제공한 `key`를 기반으로 캐시를 복원하려고 시도합니다. 작업이 키와 _정확히_ 일치하는 캐시를 찾으면 작업은 캐시된 파일을 구성한 에 `path` 복원합니다.
필요에 따라 가 기존 캐시와 일치하지 않는 경우 `key` 사용할 목록을 `restore-keys` 제공할 수 있습니다. 목록은 캐시 키와 `restore-keys` _부분적으로_ 일치할 수 있으므로 `restore-keys` 다른 분기에서 캐시를 복원할 때 유용합니다. `restore-keys` 일치에 대한 자세한 내용은 “[캐시 키 일치](#matching-a-cache-key)”를 참조하세요.

제공된 `key`에 정확히 일치하는 항목이 있는 경우 캐시 적중으로 간주됩니다. 제공된 `key`캐시와 정확히 일치하는 캐시가 없는 경우 캐시 누락으로 간주됩니다. 캐시 누락에서 작업이 성공적으로 완료되면 작업이 자동으로 새 캐시를 만듭니다. 새 캐시는 사용자가 제공한 `key`를 사용하고 `path`에서 지정한 파일을 포함합니다. 이 처리 방법에 대한 자세한 내용은 "[캐시 적중 및 누락"을 참조하세요](#cache-hits-and-misses).

기존 캐시의 내용은 변경할 수 없습니다. 대신 새 키를 사용하여 새 캐시를 만들 수 있습니다.


### `cache` 작업에 대한 입력 매개 변수입니다.

- `key`: **필수 사항** 캐시를 저장할 때 생성되는 키와 캐시를 검색하는 데 사용되는 키입니다. 변수, 컨텍스트 값, 정적 문자열 및 함수의 조합일 수 있습니다. 키의 최대 길이는 512자이며 최대 길이보다 키가 길면 작업이 실패합니다.
- `path`: **필수 사항** 캐시하거나 복원할 실행기의 경로입니다.
  - 단일 경로를 지정하거나 별도의 줄에 여러 경로를 추가할 수 있습니다. 예를 들면 다음과 같습니다.

    ```
    - name: Cache Gradle packages
      uses: {% data reusables.actions.action-cache %}
      with:
        path: |
          ~/.gradle/caches
          ~/.gradle/wrapper
    ```
  - 디렉터리 또는 단일 파일을 지정할 수 있으며 GLOB 패턴이 지원됩니다.
  - 절대 경로 또는 작업 영역 디렉터리를 기준으로 상대적인 경로를 지정할 수 있습니다.
- `restore-keys`: **선택적** 대체 복원 키가 포함된 문자열로, 각 복원 키가 새 줄에 배치됩니다. `key`에 대해 캐시 적중이 발생하지 않는 경우 이러한 복원 키는 캐시를 찾고 복원하기 위해 제공된 순서대로 순차적으로 사용됩니다. 예를 들면 다음과 같습니다.

  {% raw %}
  ```yaml
  restore-keys: |
    npm-feature-${{ hashFiles('package-lock.json') }}
    npm-feature-
    npm-
  ```
  {% endraw %}

### `cache` 작업에 대한 출력 매개 변수입니다.

- `cache-hit`: 키에 대한 정확한 일치 항목을 나타내는 부울 값입니다.

### 캐시 적중 및 누락
기존 캐시와 정확히 일치하는 경우 `key` _캐시 적중_ 이라고 하며 작업은 캐시된 파일을 디렉터리로 `path` 복원합니다.

`key`가 기존 캐시와 일치하지 않는 경우 _캐시 누락_ 이라고 하며 작업이 성공적으로 완료되면 자동으로 새 캐시를 만듭니다.

캐시 누락이 발생하면 작업은 지정된 `restore-keys`에서 일치 항목을 검색합니다.

1. `restore-keys`를 입력하면 `cache` 작업은 `restore-keys` 목록과 일치하는 캐시를 순차적으로 검색합니다.
   - 정확히 일치하는 경우 작업은 캐시의 파일을 `path` 디렉터리로 복원합니다.
   - 정확히 일치하는 항목이 없으면 작업은 복원 키의 부분 일치 항목을 검색합니다. 작업이 부분 일치 항목을 찾으면 가장 최근 캐시가 `path` 디렉터리로 복원됩니다.
1. `cache` 작업이 완료되면 작업의 다음 단계가 실행됩니다.
1. 작업이 성공적으로 완료되면 작업은 `path` 디렉터리의 콘텐츠가 포함된 새 캐시를 자동으로 만듭니다.

캐시 일치 프로세스에 대한 자세한 설명은 “[캐시 키 일치](#matching-a-cache-key)”를 참조하세요.

### `cache` 작업을 사용하는 예제

이 예제에서는 `package-lock.json` 파일의 패키지가 변경되거나 실행기 운영 체제가 변경되는 경우 새 캐시를 만듭니다. 캐시 키는 컨텍스트 및 식을 사용하여 실행기의 운영 체제와 `package-lock.json` 파일의 SHA-256 해시를 포함하는 키를 생성합니다.

```yaml{:copy}
name: Caching with npm
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Cache node modules
        id: cache-npm
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
            {% raw %}${{ runner.os }}-build-{% endraw %}
            {% raw %}${{ runner.os }}-{% endraw %}

      - if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
        name: List the state of node modules
        continue-on-error: true
        run: npm list

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm build

      - name: Test
        run: npm test
```

### 컨텍스트를 사용하여 캐시 키 만들기

캐시 키에는 {% data variables.product.prodname_actions %}에서 지원하는 컨텍스트, 함수, 리터럴 및 연산자가 포함될 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)” 및 “[식](/actions/learn-github-actions/expressions)”을 참조하세요.

식을 사용하여 `key`를 만들면 종속성이 변경되는 경우 자동으로 새 캐시를 만들 수 있습니다.

예를 들어 npm `package-lock.json` 파일의 해시를 계산하는 식을 사용하여 `key`를 만들 수 있습니다. 따라서 `package-lock.json` 파일을 구성하는 종속성이 변경되면 캐시 키가 변경되고 새 캐시가 자동으로 만들어집니다.

{% raw %}
```yaml
npm-${{ hashFiles('package-lock.json') }}
```
{% endraw %}

{% data variables.product.prodname_dotcom %}는 `hash "package-lock.json"`라는 식을 평가하여 최종 `key`를 파생합니다.

```yaml
npm-d5ea0750
```

### `cache` 작업의 출력 사용

`cache` 작업의 출력을 사용하여 캐시 적중 또는 누락이 발생했는지 여부에 따라 작업을 수행할 수 있습니다. 지정된 `key`에 대한 캐시와 정확히 일치하는 항목이 발견되면, `cache-hit` 출력이 `true`로 설정됩니다.

위의 예제 워크플로에는 캐시 누락이 발생한 경우 노드 모듈의 상태를 나열하는 단계가 있습니다.

```yaml
- if: {% raw %}${{ steps.cache-npm.outputs.cache-hit != 'true' }}{% endraw %}
  name: List the state of node modules
  continue-on-error: true
  run: npm list
```

## 캐시 키 일치

작업은 `cache` 먼저 워크플로 실행을 포함하는 분기의 캐시 적중 `key` 및 캐시 _버전을_ 검색합니다. 적중이 없으면 및 _버전을_ 검색 `restore-keys` 합니다. 현재 분기에 적중 항목이 없는 경우 작업은 기본 분기 `cache` 에서 동일한 단계를 다시 시도합니다. 검색 중에 범위 제한이 적용됩니다. 자세한 내용은 "[캐시 액세스 제한"을 참조하세요](#restrictions-for-accessing-a-cache).

캐시 버전은 캐시를 만드는 동안 사용되는 및 압축 도구의 `path` 메타데이터를 사용하여 캐시를 스탬프하는 방법입니다. 이렇게 하면 소비 워크플로 실행이 실제로 압축을 풀고 사용할 수 있는 캐시와 고유하게 일치합니다. 자세한 내용은 작업 캐시 설명서의 [캐시 버전을](https://github.com/actions/cache#cache-version) 참조하세요.

`restore-keys`를 사용하면 `key`에 캐시 누락이 있을 때 사용할 대체 복원 키 목록을 지정할 수 있습니다. 가장 구체적인 키부터 정렬된 여러 복원 키를 만들 수 있습니다. `cache` 작업은 순차적으로 `restore-keys`를 검색합니다. 키가 직접 일치하지 않으면 작업은 복원 키가 접두사로 지정된 키를 검색합니다. 복원 키에 대해 여러 부분 일치 항목이 있는 경우 작업은 가장 최근에 만든 캐시를 반환합니다.

### 여러 복원 키를 사용하는 예제

{% raw %}
```yaml
restore-keys: |
  npm-feature-${{ hashFiles('package-lock.json') }}
  npm-feature-
  npm-
```
{% endraw %}

실행기는 다음 `restore-keys`로 확인되는 식을 평가합니다.

{% raw %}
```yaml
restore-keys: |
  npm-feature-d5ea0750
  npm-feature-
  npm-
```
{% endraw %}

복원 키 `npm-feature-`는 문자열 `npm-feature-`로 시작하는 모든 키와 일치합니다. 예를 들어 `npm-feature-fd3052de`와 `npm-feature-a9b253ff` 두 키 모두 복원 키와 일치합니다. 가장 최근 생성 날짜의 캐시가 사용됩니다. 이 예제의 키는 다음 순서로 검색됩니다.

1. **`npm-feature-d5ea0750`** 는 특정 해시와 일치합니다.
1. **`npm-feature-`** 는 `npm-feature-`를 접두사로 사용하는 캐시 키와 일치합니다.
1. **`npm-`** 는 `npm-`를 접두사로 사용하는 모든 캐시 키와 일치합니다.

#### 검색 우선 순위의 예

```yaml
key:
  npm-feature-d5ea0750
restore-keys: |
  npm-feature-
  npm-
```

예를 들어 끌어오기 요청에 `feature` 분기가 포함되어 있고 기본 분기(`main`)를 대상으로 하는 경우 작업은 다음 순서로 `key` 및 `restore-keys`를 검색합니다.

1. `feature` 분기의 `npm-feature-d5ea0750` 키
1. `feature` 분기의 `npm-feature-` 키
1. `feature` 분기의 `npm-` 키
1. `main` 분기의 `npm-feature-d5ea0750` 키
1. `main` 분기의 `npm-feature-` 키
1. `main` 분기의 `npm-` 키

## 사용 제한 및 제거 정책

{% data variables.product.prodname_dotcom %}는 7일 동안 액세스되지 않은 캐시 항목을 제거합니다. 저장할 수 있는 캐시 수에는 제한이 없지만 리포지토리에 있는 모든 캐시의 총 크기는 제한됩니다{% ifversion actions-cache-policy-apis %}. 기본적으로 리포지토리당 제한은 10GB이지만, 이 제한은 엔터프라이즈 소유자 또는 리포지토리 관리자가 설정한 정책에 따라 다를 수 있습니다. {% else %}10GB까지.{% endif %} 

{% data reusables.actions.cache-eviction-process %} {% ifversion actions-cache-ui %} 캐시 제거 프로세스는 캐시가 생성되고 높은 빈도로 삭제되는 캐시 스래싱을 일으킬 수 있습니다. 이를 줄이기 위해 리포지토리에 대한 캐시를 검토하고 특정 워크플로에서 캐싱 제거와 같은 수정 단계를 수행할 수 있습니다. 자세한 내용은 "[캐시 관리"를 참조하세요.](#managing-caches) {% endif %} {% ifversion actions-cache-admin-ui %} 리포지토리의 캐시 크기 제한을 늘릴 수도 있습니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository)”를 참조하세요.

{% elsif actions-cache-policy-api %}

리포지토리 캐시 크기 제한에 대한 정책을 변경하는 방법에 대한 자세한 내용은 "[엔터프라이즈에서 {% data variables.product.prodname_actions %}에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-cache-storage-in-your-enterprise)" 및 "[리포지토리에 대한 {% 데이터 variables.product.prodname_actions %} 설정 관리"를](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-cache-storage-for-a-repository) 참조하세요.

{% endif %}

{% ifversion actions-cache-management %}

## 캐시 관리

{% ifversion actions-cache-ui %}

워크플로에서 만든 캐시를 관리하려면 다음을 수행할 수 있습니다.

- 리포지토리에 대한 모든 캐시 항목 목록을 봅니다.
- 캐시 크기, 생성 시간 또는 마지막으로 액세스한 시간과 같은 특정 메타데이터를 사용하여 캐시 목록을 필터링하고 정렬합니다.
- 리포지토리에서 캐시 항목을 삭제합니다.
- 리포지토리 및 조직에 대한 집계 캐시 사용량을 모니터링합니다.

리포지토리에 대한 캐시를 관리하는 방법에는 여러 가지가 있습니다.

- 아래와 같이 {% data variables.product.prodname_dotcom %} 웹 인터페이스를 사용합니다.
- REST API 사용. 자세한 내용은 "[{% data variables.product.prodname_actions %} Cache](/rest/actions/cache)" REST API 설명서를 참조하세요.
- {% data variables.product.prodname_cli %} 확장을 설치하여 명령줄에서 캐시를 관리합니다. 자세한 내용은 [gh-actions-cache](https://github.com/actions/gh-actions-cache) 확장을 참조하세요.

{% else %}

{% data variables.product.product_name %} REST API를 사용하여 캐시를 관리할 수 있습니다. {% ifversion actions-cache-list-delete-apis %}API를 사용하여 캐시 항목을 나열 및 삭제하고 캐시 사용량을 확인할 수 있습니다.{% elsif actions-cache-management %}현재, API를 사용하여 캐시 사용량을 확인할 수 있습니다. 향후 업데이트에서는 더 많은 기능이 제공될 것으로 예상됩니다.{% endif %} 자세한 내용은 “[{% data variables.product.prodname_actions %} 캐시](/rest/actions/cache)” REST API 설명서를 참조하세요.

{% data variables.product.prodname_cli %} 확장을 설치하여 명령줄에서 캐시를 관리할 수도 있습니다. 확장에 대한 자세한 내용은 [확장 설명서](https://github.com/actions/gh-actions-cache#readme)를 참조하세요. {% data variables.product.prodname_cli %} 확장에 대한 자세한 내용은 "[GitHub CLI 확장 사용](/github-cli/github-cli/using-github-cli-extensions)"을 참조하세요.

{% endif %}

{% ifversion actions-cache-ui %}

### 캐시 항목 보기

웹 인터페이스를 사용하여 리포지토리에 대한 캐시 항목 목록을 볼 수 있습니다. 캐시 목록에서 각 캐시가 사용하는 디스크 공간, 캐시가 만들어진 시기 및 캐시가 마지막으로 사용된 시기를 확인할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. 리포지토리에 대한 캐시 항목 목록을 검토합니다.

   * 특정 분기에 사용되는 캐시 항목을 검색하려면 **분기** 드롭다운 메뉴를 클릭하고 분기를 선택합니다. 캐시 목록에는 선택한 분기에 사용되는 모든 캐시가 표시됩니다.
   * 특정 캐시 키를 사용하여 캐시 항목을 검색하려면 **캐시 필터링** 필드의 구문을 `key: key-name` 사용합니다. 캐시 목록에는 키가 사용된 모든 분기의 캐시가 표시됩니다.

   ![캐시 항목 목록의 스크린샷](/assets/images/help/repository/actions-cache-entry-list.png)

### 캐시 항목 삭제

리포지토리에 액세스할 수 있는 `write` 사용자는 {% data variables.product.prodname_dotcom %} 웹 인터페이스를 사용하여 캐시 항목을 삭제할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.actions-cache-list %}
1. 삭제하려는 캐시 항목의 오른쪽에서 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다. 

   ![캐시 항목 목록의 스크린샷](/assets/images/help/repository/actions-cache-delete.png)

{% endif %}

{% endif %}
