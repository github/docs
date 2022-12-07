---
title: 타사 CLI 작업 개발
shortTitle: CLI setup action
intro: '{% data variables.product.prodname_actions %} 실행기에서 CLI를 설정하는 작업을 개발하는 방법을 알아봅니다.'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
ms.openlocfilehash: c839faa63efd0f8b7f5ab78a81107d27ab93e1c4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090482'
---
## 소개

{% data variables.product.prodname_actions %} 실행기에서 구성된 CLI 환경을 통해 사용자가 서버에 액세스할 수 있는 방법을 제공하는 작업을 작성할 수 있습니다.

작업은 다음을 수행해야 합니다.

- 사용자가 설치할 CLI 버전을 간단하게 지정할 수 있도록 합니다.
- 여러 운영 체제를 지원합니다.
- 효율적인 방식으로 실행하여 런타임 및 관련 비용을 최소화합니다.
- {% data variables.product.product_name %} 호스트 및 자체 호스트 실행기에서 작업합니다.
- 가능하면 커뮤니티 도구를 활용합니다.

이 문서에서는 CLI의 특정 버전을 검색하고, 설치하고, 경로에 추가하고, (선택적으로) 캐시하는 작업을 작성하는 방법을 보여 줍니다. 이러한 유형의 작업(도구를 설정하는 작업)은 종종 `setup-$TOOL`라고 명명됩니다. 

## 필수 조건

사용자 지정 작업을 작성하는 방법을 이해하고 있어야 합니다. 자세한 내용은 “[사용자 지정 작업 정보](/actions/creating-actions/about-custom-actions)”를 참조하세요. 사용자 지정 작업을 작성하는 방법에 대한 자세한 가이드는 “[JavaScript 작업 만들기](/actions/creating-actions/creating-a-javascript-action)”를 참조하세요.

## 예제

다음 스크립트는 사용자 지정 버전을 입력으로 가져와서 특정 버전의 CLI를 다운로드 및 추출한 다음, 경로에 CLI를 추가하는 방법을 보여 줍니다.

{% data variables.product.prodname_dotcom %}는 작업을 만드는 데 도움이 되는 패키지 세트인 [`actions/toolkit`](https://github.com/actions/toolkit)을 제공합니다. 이 예시에서는 [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 및 [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache) 패키지를 사용합니다.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

이 스크립트를 사용하려면 `getDownloadURL`을 CLI를 다운로드하는 함수로 바꿉니다. 또한 `version` 입력을 허용하고 이 스크립트를 실행하는 작업 메타데이터 파일(`action.yml`)을 만들어야 합니다. 작업을 만드는 방법에 대한 자세한 내용은 “[JavaScript 작업 만들기](/actions/creating-actions/creating-a-javascript-action)”를 참조하세요.

이 작업을 설정하는 방법에 대한 전체 예제는 [example-setup-gh](https://github.com/github-developer/example-setup-gh)를 참조하세요.

## 추가 참고 자료

이 패턴은 여러 작업에 사용됩니다. 자세한 내용은 다음을 참조하세요.

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

