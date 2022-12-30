---
title: GitHub Actions의 필수 기능
shortTitle: Essential features
intro: '{% data variables.product.prodname_actions %}는 강력하고 동적인 자동화를 빌드하는 데 도움이 되도록 설계되었습니다. 이 가이드에서는 환경 변수, 사용자 지정된 스크립트 등을 포함하는 {% data variables.product.prodname_actions %} 워크플로를 만드는 방법을 보여 줍니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 46a6a33928d9ff4587707972fc26de86c59f9ac6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069002'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

{% data variables.product.prodname_actions %}를 사용하면 애플리케이션 및 팀의 고유한 요구 사항에 맞게 워크플로를 사용자 지정할 수 있습니다. 이 가이드에서는 변수 사용, 스크립트 실행, 작업 간에 데이터 및 아티팩트 공유와 같은 몇 가지 필수 사용자 지정 기술에 대해 설명합니다.

##  워크플로에서 변수 사용

{% data variables.product.prodname_actions %}에는 각 워크플로 실행에 대한 기본 환경 변수가 포함됩니다. 사용자 지정 환경 변수를 사용해야 하는 경우 YAML 워크플로 파일에서 해당 변수를 설정할 수 있습니다. 이 예제에서는 `POSTGRES_HOST`와 `POSTGRES_PORT`로 명명된 사용자 지정 변수를 만드는 방법을 보여 줍니다. 그런 다음 해당 변수를 `node client.js` 스크립트에 사용할 수 있습니다.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

자세한 내용은 “[환경 변수 사용](/actions/configuring-and-managing-workflows/using-environment-variables)”을 참조하세요.

## 워크플로에 스크립트 추가

작업을 사용하여 스크립트 및 셸 명령을 실행할 수 있으며, 이후 할당된 실행기에서 실행됩니다. 이 예제에서는 작업에서 `run` 키워드를 사용하여 실행기에서 `npm install -g bats`를 실행하는 방법을 보여 줍니다.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

예를 들어 스크립트를 작업으로 실행하려면 리포지토리에 스크립트를 저장하고 경로 및 셸 형식을 제공할 수 있습니다.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”을 참조하세요.

## 작업 간에 데이터 공유

작업이 동일한 워크플로의 다른 작업과 공유하려는 파일을 생성하거나 나중에 참조할 수 있도록 파일을 저장하려는 경우 {% data variables.product.prodname_dotcom %}에 아티팩트로 저장할 수 있습니다. 아티팩트는 코드를 빌드하고 테스트할 때 생성되는 파일입니다. 예를 들어 아티팩트는 이진 파일 또는 패키지 파일, 테스트 결과, 스크린샷 또는 로그 파일을 포함할 수 있습니다. 아티팩트는 만들어진 워크플로 실행과 연결되며 다른 작업에서 사용할 수 있습니다. {% data reusables.actions.reusable-workflow-artifacts %}

예를 들어 파일을 만든 다음 아티팩트로 업로드할 수 있습니다.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: output-log-file
          path: output.log
```

별도의 워크플로 실행에서 아티팩트를 다운로드하려면 `actions/download-artifact` 작업을 사용할 수 있습니다. 예를 들어, `output-log-file`이라는 아티팩트를 다운로드할 수 있습니다.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: output-log-file
```

동일한 워크플로 실행에서 아티팩트를 다운로드하려면 업로드 작업이 완료될 때까지 시작되지 않도록 다운로드 작업이 `needs: upload-job-name`을 지정해야 합니다.

아티팩트에 대한 자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)”를 참조하세요.

## 다음 단계

{% data variables.product.prodname_actions %}에 대해 계속 알아보려면 “[복잡한 워크플로 관리](/actions/learn-github-actions/managing-complex-workflows)”를 참조하세요.
