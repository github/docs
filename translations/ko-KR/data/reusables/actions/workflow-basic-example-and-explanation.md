---
ms.openlocfilehash: 53dbd22ad351ec7a1abc92107b366ecd8c71a3a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064540"
---
## 예제 워크로드 만들기

{% data variables.product.prodname_actions %}는 YAML 구문을 사용하여 워크플로를 정의합니다.  각 워크플로는 코드 리포지토리의 `.github/workflows` 디렉터리에 별도의 YAML 파일로 저장됩니다.

리포지토리에서 코드가 푸시될 때마다 일련의 명령을 자동으로 트리거하는 예제 워크플로를 만들 수 있습니다. 이 워크플로에서 {% data variables.product.prodname_actions %}는 푸시된 코드를 체크 아웃하고 [bats](https://www.npmjs.com/package/bats) 테스트 프레임워크를 설치하고, 기본 명령 `bats -v`를 실행하여 bats 버전을 출력합니다.

1. 리포지토리에서 워크플로 파일을 저장할 `.github/workflows/` 디렉터리를 만듭니다.
1. `.github/workflows/` 디렉터리에서 `learn-github-actions.yml`이라는 새 파일을 만들고 다음 코드를 추가합니다.

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. 변경 내용을 커밋하고 {% data variables.product.prodname_dotcom %} 리포지토리에 푸시합니다.

이제 새 {% data variables.product.prodname_actions %} 워크플로 파일이 리포지토리에 설치되고, 누군가가 리포지토리에 변경 내용을 푸시할 때마다 자동으로 실행됩니다. 워크플로의 실행 기록에 관한 세부 정보를 보려면 “[워크플로 실행에 대한 작업 보기](#viewing-the-activity-for-a-workflow-run)”를 참조하세요.

## 워크플로 파일 이해

YAML 구문을 사용하여 워크플로 파일을 만드는 방법의 이해를 돕기 위해 이 섹션에서는 소개 예제의 각 줄에 대해 설명합니다.

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>선택 사항 - {% data variables.product.prodname_dotcom %} 리포지토리의 작업 탭에 표시되는 워크플로 이름입니다.
  <em></em>
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
이 워크플로의 트리거를 지정합니다. 이 예제에서는 <code>push</code> 이벤트를 사용하므로 누군가가 리포지토리에 변경 내용을 푸시하거나 끌어오기 요청을 병합할 때마다 워크플로 실행이 트리거됩니다.  모든 분기에 대한 푸시로 트리거됩니다. 특정 분기, 경로 또는 태그에 푸시할 때만 실행되는 구문의 예제는 “<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">{% data variables.product.prodname_actions %}의 워크플로 구문</a>”을 참조하세요.
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
<code>learn-github-actions</code> 워크플로에서 실행되는 모든 작업을 그룹화합니다.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
<code>check-bats-version</code>이라는 작업을 정의합니다. 자식 키는 작업의 속성을 정의합니다.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
Ubuntu Linux 실행기의 최신 버전에서 실행되도록 작업을 구성합니다. 즉, GitHub에서 호스트된 새 가상 머신에서 작업이 실행됩니다. 다른 실행기를 사용하는 구문 예제는 “<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">{% data variables.product.prodname_actions %}의 워크플로 구문</a>”을 참조하세요.
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
<code>check-bats-version</code> 작업에서 실행되는 모든 단계를 그룹화합니다. 이 섹션 아래에 중첩된 각 항목은 별도의 작업 또는 셸 스크립트입니다.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
<code>uses</code> 키워드는 이 단계에서 <code>actions/checkout</code> 작업의 <code>v3</code>를 실행하도록 지정합니다. 이 작업은 리포지토리를 실행기로 체크 아웃하여 스크립트 또는 코드에 대한 기타 작업(예: 빌드 및 테스트 도구)을 실행할 수 있도록 합니다. 워크플로가 리포지토리의 코드에 대해 실행될 때마다 체크 아웃 작업을 사용해야 합니다.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
이 단계에서는 <code>{% data reusables.actions.action-setup-node %}</code> 작업을 사용하여 지정된 버전의 Node.js를 설치합니다(이 예제에서는 v14 사용). 이렇게 하면 <code>node</code> 및 <code>npm</code> 명령이 모두 <code>PATH</code>에 배치됩니다.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
<code>run</code> 키워드는 실행기에서 명령을 실행하도록 작업에 지시합니다. 이 예제에서는 <code>npm</code>을 사용하여 <code>bats</code> 소프트웨어 테스트 패키지를 설치합니다.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
최종적으로, 소프트웨어 버전을 출력하는 매개 변수와 함께 <code>bats</code> 명령을 실행합니다.
</td>
</tr>
</table>

### 워크플로 파일 시각화

아래 다이어그램에서, 방금 만든 워크플로 파일 및 {% data variables.product.prodname_actions %} 구성 요소가 계층 구조로 구성된 방식을 확인할 수 있습니다. 각 단계는 단일 작업 또는 셸 스크립트를 실행합니다. 1단계와 2단계는 작업을 실행하는 반면, 3단계와 4단계는 셸 스크립트를 실행합니다. 워크플로에 대해 미리 빌드된 작업을 더 찾으려면 “[작업 찾기 및 사용자 지정](/actions/learn-github-actions/finding-and-customizing-actions)”을 참조하세요.

![워크플로 개요](/assets/images/help/images/overview-actions-event.png)

## 워크플로 실행에 대한 작업 보기

워크플로가 트리거되면 워크플로를 실행하는 워크플로 실행이 만들어집니다. 워크플로 실행이 시작된 후 {% data variables.product.prodname_dotcom %}에서 실행 진행률 시각화 그래프를 확인하고 각 단계의 작업을 볼 수 있습니다.

{% data reusables.repositories.navigate-to-repo %}
1. 리포지토리 이름 아래에 있는 **작업** 을 클릭합니다.

   ![리포지토리로 이동](/assets/images/help/images/learn-github-actions-repository.png)
1. 왼쪽 사이드바에서 확인할 워크플로를 클릭합니다.

   ![워크플로 결과 스크린샷](/assets/images/help/images/learn-github-actions-workflow.png)
1. “워크플로 실행”에서 확인할 실행의 이름을 클릭합니다.

   ![워크플로 실행 스크린샷](/assets/images/help/images/learn-github-actions-run.png)
1. **작업** 또는 시각화 그래프에서 보려는 작업을 클릭합니다.

   ![작업 선택](/assets/images/help/images/overview-actions-result-navigate.png)
1. 각 단계의 결과를 봅니다.

   ![워크플로 실행 세부 정보 스크린샷](/assets/images/help/images/overview-actions-result-updated-2.png)
