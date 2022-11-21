---
title: 시작 워크플로 사용
shortTitle: Use starter workflows
intro: '{% data variables.product.product_name %}는 다양한 언어 및 도구에 대한 시작 워크플로를 제공합니다.'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
  - /actions/guides/setting-up-continuous-integration-using-workflow-templates
  - /actions/learn-github-actions/using-workflow-templates
  - /actions/learn-github-actions/using-starter-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
ms.openlocfilehash: ac901f30b94dbeb65aaa2f513048e793de35a53f
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009545'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 시작 워크플로 정보

{% data variables.product.product_name %}는 다양한 언어 및 도구에 대한 시작 워크플로를 제공합니다. 리포지토리에서 워크플로를 설정할 때 {% data variables.product.product_name %}는 리포지토리의 코드를 분석하고 리포지토리의 언어 및 프레임워크에 따라 워크플로를 권장합니다. 예를 들어 [Node.js](https://nodejs.org/en/)를 사용하는 경우 {% data variables.product.product_name %}는 Node.js 패키지를 설치하고 테스트를 실행하는 시작 워크플로 파일을 제안합니다.{% ifversion actions-starter-template-ui %} 검색 및 필터링을 통해 관련 시작 워크플로를 찾을 수 있습니다.{% endif %}

{% data reusables.actions.starter-workflow-categories %}

조직과 공유할 시작 워크플로를 만들 수도 있습니다. 시작 워크플로는 {% data variables.product.product_name %}에서 제공하는 시작 워크플로와 함께 표시됩니다. 자세한 내용은 “[조직의 시작 워크플로 만들기](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)”를 참조하세요.

## 시작 워크플로 사용

리포지토리에 대한 쓰기 권한이 있는 사용자는 CI/CD 또는 기타 자동화를 위해 {% data variables.product.prodname_actions %} 시작 워크플로를 설정할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 리포지토리에 워크플로가 이미 있는 경우 **새 워크플로** 를 클릭합니다.
1. "{% ifversion actions-starter-template-ui %}워크플로 선택{% else %}워크플로 템플릿 선택{% endif %}" 페이지에 권장되는 시작 워크플로가 표시됩니다. 사용할 시작 워크플로를 찾은 다음, {% ifversion actions-starter-template-ui %}**구성**{% else %}**이 워크플로 설정** 을 클릭합니다{% endif %}. {% ifversion actions-starter-template-ui %} 원하는 시작 워크플로를 찾을 수 있도록 키워드를 검색하거나 범주별로 필터링할 수 있습니다.{% endif %}

   {% ifversion actions-starter-template-ui %}![이 워크플로 구성](/assets/images/help/settings/actions-create-starter-workflow-updated-ui.png){% else %}![이 워크플로 설정](/assets/images/help/settings/actions-create-starter-workflow.png){% endif %}
1. 시작 워크플로에 추가 설정 단계를 자세히 설명하는 주석이 포함된 경우 다음 단계를 수행합니다. 대부분의 시작 워크플로에는 해당하는 가이드가 있습니다. 자세한 내용은 [{% data variables.product.prodname_actions %} 가이드](/actions/guides)를 참조하세요.
1. 일부 시작 워크플로는 비밀을 사용합니다. 예를 들면 {% raw %}`${{ secrets.npm_token }}`이 있습니다{% endraw %}. 시작 워크플로에서 비밀을 사용하는 경우 비밀 이름에 설명된 값을 리포지토리에 비밀로 저장합니다. 자세한 내용은 “[암호화된 비밀](/actions/reference/encrypted-secrets)”을 참조하세요.
1. 필요에 따라 추가 변경 사항을 적용합니다. 예를 들어 워크플로가 실행될 때 변경할 `on` 값을 변경하고자 할 수 있습니다.
1. **커밋 시작** 을 클릭합니다.
1. 커밋 메시지를 작성하고 기본 분기에 직접 커밋할지 아니면 끌어오기 요청을 열지 결정합니다.

## 추가 참고 자료

- “[연속 통합 정보](/articles/about-continuous-integration)”
- “[워크플로 실행 관리](/actions/managing-workflow-runs)”
- “[모니터링 및 문제 해결 정보](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)”
- “[{% data variables.product.prodname_actions %}에 대해 알아보기](/actions/learn-github-actions)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_actions %}에 대한 청구 관리](/billing/managing-billing-for-github-actions)” {% endif %}
