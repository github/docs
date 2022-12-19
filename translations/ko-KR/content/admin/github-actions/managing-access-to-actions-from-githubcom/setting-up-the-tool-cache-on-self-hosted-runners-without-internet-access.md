---
title: 인터넷에 액세스할 수 없는 자체 호스팅 실행기에서 도구 캐시 설정
intro: 인터넷에 액세스하지 않고 자체 호스팅 실행기에서 포함된 `actions/setup` 작업을 사용하려면 먼저 워크플로에 대한 실행기 도구 캐시를 채워야 합니다.
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
ms.openlocfilehash: fe1b070880db8353064f1be5a26b0a63a5e92cf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529298'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 포함된 설정 작업 및 실행기 도구 캐시 정보

{% data reusables.actions.enterprise-no-internet-actions %}

{% data variables.product.prodname_dotcom %}에서 작성된 대부분의 공식 작업은 자동으로 {% data variables.product.product_name %}와 번들됩니다. 그러나 인터넷에 액세스할 수 없는 자체 호스팅 실행기가 포함된 `actions/setup-LANGUAGE` 작업(예: `setup-node`)을 사용하려면 몇 가지 구성이 필요합니다.

`actions/setup-LANGUAGE` 작업은 일반적으로 필요한 환경 이진 파일을 실행기 도구 캐시에 다운로드하기 위해 인터넷에 액세스할 수 있어야 합니다. 인터넷에 액세스할 수 없는 자체 호스팅 실행기는 이진 파일을 다운로드할 수 없으므로 실행기의 도구 캐시를 수동으로 채워야 합니다.

{% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.prodname_dotcom %} 호스팅 실행기의 도구 캐시를 아티팩트로 업로드하는 {% data variables.product.prodname_actions %} 워크플로를 실행하여 실행기 도구 캐시를 채울 수 있습니다. 그런 다음, 인터넷 연결이 끊긴 자체 호스팅 실행기에서 아티팩트를 전송하고 추출할 수 있습니다.

{% note %}

**참고:** 운영 체제와 아키텍처가 동일한 자체 호스팅 실행기에서만 {% data variables.product.prodname_dotcom %} 호스팅 실행기의 도구 캐시를 사용할 수 있습니다. 예를 들어 `ubuntu-22.04` {% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용하여 도구 캐시를 생성하는 경우 자체 호스팅 실행기는 64비트 Ubuntu 22.04 머신이어야 합니다. {% data variables.product.prodname_dotcom %}에서 호스트되는 실행기에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기 정보](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)”를 참조하세요.

{% endnote %}

## 필수 조건

* 자체 호스팅 실행기에 필요한 개발 환경을 결정합니다. 다음 예제에서는 Node.js 버전 10과 12를 사용하여 `setup-node` 작업용 도구 캐시를 채우는 방법을 보여 줍니다.
* 워크플로를 실행하는 데 사용할 수 있는 {% data variables.product.prodname_dotcom_the_website %}의 리포지토리에 대한 액세스 권한
* 도구 캐시 폴더를 채울 자체 호스팅 실행기의 파일 시스템에 대한 액세스 권한

## 자체 호스팅 실행기용 도구 캐시 채우기

1. {% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.prodname_actions %} 워크플로를 실행하는 데 사용할 수 있는 리포지토리로 이동합니다.
1. 리포지토리의 `.github/workflows` 폴더에 {% data variables.product.prodname_dotcom %} 호스팅 실행기의 도구 캐시가 포함된 아티팩트를 업로드하는 새 워크플로 파일을 만듭니다.

   다음 예제에서는 Node.js 버전 10과 12에서 `setup-node` 작업을 사용하여 Ubuntu 22.04 환경용 도구 캐시를 업로드하는 워크플로를 보여 줍니다.

   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 10
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```
1. 워크플로 실행에서 도구 캐시 아티팩트를 다운로드합니다. 아티팩트 다운로드 방법에 대한 지침은 “[워크플로 아티팩트 다운로드](/actions/managing-workflow-runs/downloading-workflow-artifacts)”를 참조하세요.
1. 도구 캐시 아티팩트를 자체 호스팅 실행기로 전송하고 로컬 도구 캐시 디렉터리에 추출합니다. 기본 도구 캐시 디렉터리는 `RUNNER_DIR/_work/_tool`입니다. 실행기에서 아직 작업을 처리하지 않은 경우 `_work/_tool` 디렉터리를 만들어야 할 수도 있습니다.

    위 예제에서 업로드된 도구 캐시 아티팩트를 추출하면 자체 호스팅 실행기에 다음 예제와 유사한 디렉터리 구조가 있습니다.

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

인터넷에 액세스할 수 없는 자체 호스팅 실행기에서 이제 `setup-node` 작업을 사용할 수 있습니다. 문제가 있는 경우 워크플로에 맞는 도구 캐시를 채웠는지 확인합니다. 예를 들어 `setup-python` 작업을 사용해야 하는 경우 사용할 Python 환경으로 도구 캐시를 채워야 합니다.
