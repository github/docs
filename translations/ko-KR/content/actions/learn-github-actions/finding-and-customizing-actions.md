---
title: 작업 찾기 및 사용자 지정
shortTitle: Find and customize actions
intro: '작업은 워크플로를 구동하는 구성 요소입니다. 워크플로는 커뮤니티에서 만든 작업을 포함할 수 있으며 애플리케이션의 리포지토리 내에서 직접 고유한 작업을 만들 수도 있습니다. 이 가이드에서는 작업을 검색, 사용 및 사용자 지정하는 방법을 보여 줍니다.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Fundamentals
ms.openlocfilehash: 87557d4e057d1886d01e978adf56cdc71a390fdf
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009461'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

워크플로에서 사용하는 작업은 다음 위치에서 정의될 수 있습니다.

- 워크플로 파일과 동일한 리포지토리{% ifversion internal-actions %}
- 워크플로에 대한 액세스를 허용하도록 구성된, 동일한 엔터프라이즈 계정의 내부 리포지토리{% endif %}
- 임의 퍼블릭 리포지토리
- Docker Hub에 게시된 Docker 컨테이너 이미지

{% data variables.product.prodname_marketplace %}는 {% data variables.product.prodname_dotcom %} 커뮤니티에서 만든 작업을 찾을 수 있는 중앙 위치입니다.{% ifversion fpt or ghec %} [{% data variables.product.prodname_marketplace %} 페이지](https://github.com/marketplace/actions/)에서 작업을 범주로 필터링할 수 있습니다. {% endif %}

{% data reusables.actions.enterprise-marketplace-actions %}

{% ifversion fpt or ghec %}

## 워크플로 편집기에서 Marketplace 작업 찾아보기

리포지토리의 워크플로 편집기에서 직접 작업을 검색하고 찾아볼 수 있습니다. 사이드바에서 특정 작업을 검색하고, 추천 작업을 보고, 추천 범주를 찾아볼 수 있습니다. 작업이 {% data variables.product.prodname_dotcom %} 커뮤니티에서 받은 별 수도 볼 수 있습니다.

1. 리포지토리에서 편집할 워크플로 파일로 이동합니다.
1. 워크플로 편집기를 열려면 파일 뷰의 오른쪽 위에서 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다.
   ![워크플로 파일 편집 단추](/assets/images/help/repository/actions-edit-workflow-file.png)
1. 편집기 오른쪽에 있는 {% data variables.product.prodname_marketplace %} 사이드바를 사용하여 작업을 찾습니다. {% octicon "verified" aria-label="The verified badge" %} 배지가 있는 작업은 {% data variables.product.prodname_dotcom %}에서 작업 작성자를 파트너 조직으로 확인했음을 나타냅니다.
   ![Marketplace 워크플로 사이드바](/assets/images/help/repository/actions-marketplace-sidebar.png)

## 워크플로에 작업 추가

워크플로 파일에서 작업을 참조하여 워크플로에 작업을 추가할 수 있습니다. 

{% data variables.product.prodname_actions %} 워크플로에서 참조된 작업을 워크플로가 포함된 리포지토리의 종속성 그래프에 표시된 종속성으로 볼 수 있습니다. 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요.

{% ifversion fpt 또는 ghec 또는 ghes > 3.4 또는 ghae > 3.4 %}

{% note %}

**참고:** 보안을 강화하기 위해 {% data variables.product.prodname_actions %}에서 작업 리디렉션은 더 이상 사용되지 않습니다. 즉, 작업 리포지토리의 소유자 또는 이름이 변경되면 이전 이름으로 해당 작업을 사용하는 모든 워크플로가 실패합니다.

{% endnote %}

{% endif %}

### {% data variables.product.prodname_marketplace %}에서 작업 추가

작업 목록 페이지에는 작업 버전 및 작업을 사용하는 데 필요한 워크플로 구문이 포함되어 있습니다. 작업이 업데이트되는 경우에도 워크플로를 안정적으로 유지하기 위해 워크플로 파일에서 Git 또는 Docker 태그 번호를 지정하여 사용할 작업 버전을 참조할 수 있습니다.

1. 워크플로에서 사용할 작업으로 이동합니다.
1. “설치”에서 {% octicon "clippy" aria-label="The edit icon" %}을 클릭하여 워크플로 구문을 복사합니다.
   ![작업 목록 보기](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. 구문을 워크플로에 새 단계로 붙여넣습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”을 참조하세요.
1. 작업에 입력을 제공해야 하는 경우 워크플로에서 입력을 설정합니다. 작업에 필요할 수 있는 입력에 대한 자세한 내용은 “[작업에서 입력 및 출력 사용](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)”을 참조하세요.

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### 동일한 리포지토리에서 작업 추가

워크플로 파일이 작업을 사용하는 곳과 동일한 리포지토리에서 작업이 정의된 경우 워크플로 파일에서 `{owner}/{repo}@{ref}` 또는 `./path/to/dir` 구문을 사용하여 작업을 참조할 수 있습니다.

리포지토리 파일 구조 예제:

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

워크플로 파일 예제:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

`action.yml` 파일은 작업에 대한 메타데이터를 제공하는 데 사용됩니다. “[GitHub Actions에 대한 메타데이터 구문](/actions/creating-actions/metadata-syntax-for-github-actions)”에서 이 파일의 내용에 대해 알아봅니다.

### 다른 리포지토리에서 작업 추가

작업이 워크플로 파일과 다른 리포지토리에서 정의된 경우 워크플로 파일에서 `{owner}/{repo}@{ref}` 구문을 사용하여 작업을 참조할 수 있습니다.

퍼블릭 리포지토리{% ifversion internal-actions %} 또는 워크플로에 대한 액세스를 허용하도록 구성된 내부 리포지토리에 작업을 저장해야 합니다. 자세한 내용은 “[엔터프라이즈와 작업 및 워크플로 공유](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)”를 참조하세요.{% else %}에 작업을 저장해야 합니다.{% endif %}

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: {% data reusables.actions.action-setup-node %}
```

### Docker Hub의 컨테이너 참조

작업이 Docker Hub에 게시된 Docker 컨테이너 이미지에서 정의된 경우 워크플로 파일에서 `docker://{image}:{tag}` 구문을 사용하여 작업을 참조해야 합니다. 코드와 데이터를 보호하려면 워크플로에서 사용하기 전에 Docker Hub의 Docker 컨테이너 이미지 무결성을 확인하는 것이 좋습니다.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

Docker 작업의 몇 가지 예제는 [Docker-image.yml 워크플로](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) 및 “[Docker 컨테이너 작업 만들기](/articles/creating-a-docker-container-action)”를 참조하세요.


## 사용자 지정 작업의 릴리스 관리 사용

커뮤니티 작업의 작성자는 태그, 분기 또는 SHA 값을 사용하여 작업 릴리스를 관리할 수 있습니다. 종속성과 마찬가지로, 작업 업데이트 자동 수락을 편하게 받아들이는지에 따라 사용할 작업 버전을 지정해야 합니다.

워크플로 파일에서 작업 버전을 지정합니다. 릴리스 관리 방법에 대한 자세한 내용과 사용할 태그, 분기 또는 SHA 값을 보려면 작업 설명서를 확인하세요.

{% note %}

**참고:** 타사 작업을 사용하는 경우 SHA 값을 사용하는 것이 좋습니다. 자세한 내용은 “[GitHub Actions의 보안 강화](/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions)”를 참조하세요.

{% endnote %}

### 태그 사용

태그는 주 버전과 부 버전 간에 전환할 시기를 결정하는 데 유용하지만 더 일시적이며 유지 관리자가 이동하거나 삭제할 수 있습니다. 다음 예제에서는 `v1.0.1`로 태그가 지정된 작업을 대상으로 지정하는 방법을 보여 줍니다.

```yaml
steps:
  - uses: actions/javascript-action@v1.0.1
```

### SHA 사용

더 안정적인 버전 관리가 필요한 경우 작업 버전과 연결된 SHA 값을 사용해야 합니다. SHA는 변경할 수 없으므로 태그 또는 분기보다 더 안정적입니다. 그러나 이 방법을 사용하는 경우 중요한 버그 수정과 보안 업데이트를 비롯한 작업 업데이트를 자동으로 받지 않습니다. 약식 값이 아닌 커밋의 전체 SHA 값을 사용해야 합니다. 다음 예제에서는 작업의 SHA를 대상으로 지정합니다.

```yaml
steps:
  - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### 분기 사용

작업의 대상 분기를 지정하면 항상 해당 분기의 현재 버전이 실행됩니다. 분기 업데이트에 호환성이 손상되는 변경이 포함된 경우 이 방법은 문제를 일으킬 수 있습니다. 다음 예제에서는 `@main` 분기를 대상으로 지정합니다.

```yaml
steps:
  - uses: actions/javascript-action@main
```

자세한 내용은 “[작업의 릴리스 관리 사용](/actions/creating-actions/about-actions#using-release-management-for-actions)”을 참조하세요.

## 작업에서 입력 및 출력 사용

작업이 입력을 수락하거나 요구하고 사용할 수 있는 출력을 생성하는 경우가 많습니다. 예를 들어 작업에서 파일 경로, 레이블 이름 또는 작업 처리의 일부로 사용할 기타 데이터를 지정하도록 요구할 수 있습니다.

작업의 입력과 출력을 보려면 리포지토리의 루트 디렉터리에 있는 `action.yml` 또는 `action.yaml`을 확인합니다.

이 예제 `action.yml`에서 `inputs` 키워드는 `file-path`라는 필수 입력을 정의하고, 지정되지 않은 경우에 사용되는 기본값을 포함합니다. `outputs` 키워드는 결과를 찾을 위치를 알려주는 `results-file` 출력을 정의합니다.

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% ifversion ghae %}

## {% data variables.product.prodname_ghe_managed %}에서 포함된 작업 사용

기본적으로 {% data variables.product.prodname_ghe_managed %}에서는 {% data variables.product.prodname_dotcom %}에서 작성된 공식 작업을 대부분 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %}에서 작업 사용](/admin/github-actions/using-actions-in-github-ae)”을 참조하세요.
{% endif %}

## 다음 단계

{% data variables.product.prodname_actions %}에 대해 계속 알아보려면 “[{% data variables.product.prodname_actions %}의 필수 기능](/actions/learn-github-actions/essential-features-of-github-actions)”을 참조하세요.
