---
title: GitHub Pages 사이트에 대한 Jekyll 빌드 오류 정보
intro: 'Jekyll이 로컬로 또는 {% data variables.product.product_name %}에서 {% data variables.product.prodname_pages %} 사이트를 빌드하는 동안 오류가 발생하면 자세한 정보가 포함된 에러 메시지를 받게 됩니다.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages
  - /articles/generic-jekyll-build-failures
  - /articles/about-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Jekyll build errors for Pages
ms.openlocfilehash: c435d7857239ae4a8b1a09c86e10fe12b248a4b2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147648241'
---
## Jekyll 빌드 오류 정보

{% ifversion pages-custom-workflow %}분기에서 게시하는 경우 {% else %}경우에 따라{% endif %} 사이트 게시 원본으로 변경 내용을 푸시한 후 {% data variables.product.prodname_pages %}이(가) 사이트를 빌드하려고 시도하지 않는 경우가 있습니다.{% ifversion fpt or ghec %}
- 변경 내용을 푸시한 사람이 메일 주소를 인증하지 않았습니다. 자세한 내용은 “[메일 주소 인증](/articles/verifying-your-email-address)”을 참조하세요.{% endif %}
- 배포 키를 사용하여 푸시하고 있습니다. 사이트의 리포지토리에 대한 푸시를 자동화하려는 경우 컴퓨터 사용자를 대신 설정할 수 있습니다. 자세한 내용은 “[배포 키 관리](/developers/overview/managing-deploy-keys#machine-users)”를 참조하세요.
- 게시 원본을 빌드하도록 구성되지 않은 CI 서비스를 사용하고 있습니다. 예를 들어 Travis CI는 안전한 목록에 `gh-pages` 분기를 추가하지 않는 한 분기를 빌드하지 않습니다. 자세한 내용은 Travis CI의 “[빌드 사용자 지정](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)” 또는 CI 서비스의 설명서를 참조하세요.

{% note %}

**참고:** {% data variables.product.product_name %}에 변경 내용을 푸시한 후 사이트 변경 내용이 게시되려면 최대 10분이 걸릴 수 있습니다.

{% endnote %}

{% ifversion build-pages-with-actions %} Jekyll이 사이트 빌드를 시도하고 오류가 발생하면 빌드 오류 메시지가 표시됩니다.
{% else %} Jekyll이 사이트 빌드를 시도하고 오류가 발생하면 빌드 오류 메시지가 표시됩니다. Jekyll 빌드 오류 메시지는 두 가지 주요 유형이 있습니다.
- “페이지 빌드 경고” 메시지는 빌드가 성공적으로 완료되었음을 의미하지만 향후 문제를 방지하기 위해 변경 작업을 수행해야 할 수 있습니다.
- “페이지 빌드 실패” 메시지는 빌드를 완료하지 못했음을 의미합니다. Jekyll이 실패 이유를 검색할 수 있는 경우 이를 설명하는 오류 메시지가 표시됩니다.
{% endif %}

빌드 오류 문제 해결에 대한 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트에 대한 Jekyll 빌드 오류 문제 해결](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)”을 참조하세요.

{% ifversion build-pages-with-actions %}
## {% data variables.product.prodname_actions %}를 사용하여 Jekyll 빌드 오류 메시지 보기

기본적으로 {% data variables.product.prodname_pages %} 사이트는 다른 CI 도구를 사용하도록 {% data variables.product.prodname_pages %} 사이트를 구성하지 않은 한 {% data variables.product.prodname_actions %} 워크플로 실행으로 빌드되고 배포됩니다. 잠재적 빌드 오류를 찾으려면 리포지토리의 워크플로 실행을 검토하여 {% data variables.product.prodname_pages %} 사이트에 대한 워크플로 실행을 검사할 수 있습니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”를 참조하세요.  오류가 발생할 경우 워크플로를 다시 실행하는 방법에 대한 자세한 내용은 “[워크플로 및 작업 다시 실행](/actions/managing-workflow-runs/re-running-workflows-and-jobs)”을 참조하세요.
{% endif %}

{% ifversion build-pages-with-actions %}{% else %}
## {% data variables.product.product_name %}에서 리포지토리의 빌드 실패 보기

사이트 리포지토리의 **설정** 탭에서 {% data variables.product.product_name %}의 사이트에 대한 빌드 실패(빌드 경고는 아님)를 볼 수 있습니다.
{% endif %}

## Jekyll 빌드 오류 메시지 로컬 보기

{% data variables.product.product_name %}에 변경 내용을 푸시하기 전에 명령줄에서 빌드 오류 메시지를 확인하고 빌드 실패를 해결할 수 있도록 사이트를 로컬로 테스트하는 것이 좋습니다. 자세한 내용은 “[Jekyll을 사용하여 로컬로 {% data variables.product.prodname_pages %} 사이트 테스트](/articles/testing-your-github-pages-site-locally-with-jekyll)”를 참조하세요.

## 끌어오기 요청에서 Jekyll 빌드 오류 메시지 보기

{% ifversion pages-custom-workflow %}분기에서 게시하는 경우 {% data variables.product.product_name %}에서 게시 원본을 업데이트하기 위해 끌어오기 요청을 만들 {% else %}때{% endif %}, 끌어오기 요청의 **확인** 탭에서 빌드 오류 메시지를 볼 수 있습니다. 자세한 내용은 “[상태 검사 정보](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)”를 참조하세요.

{% ifversion pages-custom-workflow %}사용자 지정 {% data variables.product.prodname_actions %} 워크플로를 사용하여 게시하는 경우 끌어오기 요청에서 빌드 오류 메시지를 보려면 `pull_request` 트리거에서 실행되도록 워크플로를 구성해야 합니다. 이렇게 하면 워크플로가 `pull_request` 이벤트에 의해 트리거된 경우 배포 단계를 건너뛰는 것이 좋습니다. 이렇게 하면 끌어오기 요청의 변경 내용을 사이트에 배포하지 않고도 빌드 오류를 볼 수 있습니다. 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows#pull_request)” 및 “[수식](/actions/learn-github-actions/expressions)”을 참조하세요.{% endif %}

## 메일로 Jekyll 빌드 오류 보기

{% ifversion pages-custom-workflow %}분기에서 게시하는 경우 {% data variables.product.product_name %}에서 게시 원본으로 변경 내용을 푸시할 {% else %}때{% endif %} {% data variables.product.prodname_pages %}에서 사이트 빌드를 시도합니다. 빌드에 실패하면 기본 메일 주소로 메일을 받게 됩니다. {% data reusables.pages.build-failure-email-server %}

{% ifversion pages-custom-workflow %}사용자 지정 {% data variables.product.prodname_actions %} 워크플로우를 사용하여 게시하는 경우 끌어오기 요청의 빌드 오류에 대한 메일을 받으려면 `pull_request` 트리거에서 실행되도록 워크플로우를 구성해야 합니다. 이렇게 하면 워크플로가 `pull_request` 이벤트에 의해 트리거된 경우 배포 단계를 건너뛰는 것이 좋습니다. 이렇게 하면 끌어오기 요청의 변경 내용을 사이트에 배포하지 않고도 빌드 오류를 볼 수 있습니다. 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows#pull_request)” 및 “[수식](/actions/learn-github-actions/expressions)”을 참조하세요.{% endif %}

## 타사 CI 서비스를 사용하여 끌어오기 요청에서 Jekyll 빌드 오류 메시지 보기

[Travis CI](https://travis-ci.org/)와 같은 타사 서비스를 구성하여 각 커밋 후에 오류 메시지를 표시할 수 있습니다.

1. 아직 수행하지 않은 경우 다음 콘텐츠와 함께 게시 원본의 루트에 _Gemfile_ 이라는 파일을 추가합니다.
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. 선택한 테스트 서비스에 대한 사이트의 리포지토리를 구성합니다. 예를 들어 [Travis CI](https://travis-ci.org/)를 사용하려면 게시 원본의 루트에 _.travis.yml_ 이라는 파일을 다음 콘텐츠와 함께 추가합니다.
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. 타사 테스트 서비스를 사용하여 리포지토리를 활성화해야 할 수 있습니다. 자세한 내용은 테스트 서비스의 설명서를 참조하세요.
