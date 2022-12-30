---
title: GitHub 서비스 교체
intro: '사용되지 않는 {% data variables.product.prodname_dotcom %} 서비스에 여전히 의존하고 있는 경우 서비스 후크를 웹후크로 마이그레이션하는 방법을 알아봅니다.'
redirect_from:
  - /guides/replacing-github-services
  - /v3/guides/automating-deployments-to-integrators
  - /v3/guides/replacing-github-services
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ddbe9552b1520f2238e531afca06e449ba2f2ff8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112423'
---
웹후크와 통합을 위해 GitHub 서비스를 더 이상 사용하지 않습니다. 이 가이드는 GitHub 서비스에서 웹후크로 전환하는 데 도움이 됩니다. 이 공지에 대한 자세한 내용은 [블로그 게시물](https://developer.github.com/changes/2018-10-01-denying-new-github-services)을 참조하세요.

{% note %}

메일 서비스의 대안으로 이제 리포지토리에 푸시하기 위해 메일 알림 사용을 시작할 수 있습니다. 커밋 전자 메일 알림을 구성하는 방법을 알아보려면 “[리포지토리에 푸시하기 위한 전자 메일 알림 정보](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)”를 참조하세요.

{% endnote %}

## 사용 중단 타임라인

- **2018년 10월 1일**: GitHub에서 사용을 중단하여 사용자가 서비스를 설치할 수 있게 되었습니다. GitHub.com 사용자 인터페이스에서 GitHub 서비스를 제거했습니다.
- **2019년 1월 29일**: 메일 서비스의 대안으로 이제 리포지토리에 푸시하기 위해 메일 알림 사용을 시작할 수 있습니다. 커밋 전자 메일 알림을 구성하는 방법을 알아보려면 “[리포지토리에 푸시하기 위한 전자 메일 알림 정보](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)”를 참조하세요.
- **2019년 1월 31일**: GitHub에서는 GitHub.com에 설치된 서비스의 이벤트 배달을 중지합니다.

## GitHub 서비스 배경

GitHub 서비스(서비스 후크라고도 함)는 GitHub가 [`github-services` 리포지토리](https://github.com/github/github-services)를 통해 통합자 서비스의 일부를 호스팅하는 레거시 통합 방법입니다. GitHub에서 수행된 작업이 이러한 서비스를 트리거하면 해당 서비스를 사용하여 GitHub 외부에서 작업을 트리거할 수 있습니다.

{% ifversion ghes %}
## GitHub 서비스를 사용하는 리포지토리 찾기
어플라이언스에서 GitHub 서비스를 사용하는 리포지토리를 식별하는 데 도움이 되는 명령줄 스크립트를 제공합니다. 자세한 내용은 [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report)를 참조하세요.{% endif %}

## GitHub 서비스와 웹후크

GitHub 서비스와 웹후크의 주요 차이점은 다음과 같습니다.
- **구성**: GitHub 서비스에는 서비스별 구성 옵션이 있지만 웹후크는 URL 및 이벤트 집합을 지정하여 구성하기만 하면 됩니다.
- **사용자 지정 논리**: GitHub 서비스에는 단일 이벤트 처리의 일부로 여러 작업으로 응답하는 사용자 지정 논리가 있을 수 있지만 웹후크에는 사용자 지정 논리가 없습니다.
- **요청 유형**: GitHub 서비스는 HTTP 및 비 HTTP 요청을 만들 수 있지만 웹후크는 HTTP 요청만 만들 수 있습니다.

## 서비스를 웹후크로 바꾸기

GitHub 서비스를 웹후크로 바꾸려면:

1. [이 목록](/webhooks/#events)에서 구독해야 하는 관련 웹후크 이벤트를 식별합니다.

2. 현재 GitHub Services를 사용하는 방법에 따라 구성을 변경합니다.

   - **GitHub 앱**: 앱의 사용 권한 및 구독 이벤트를 업데이트하여 관련 웹후크 이벤트를 받도록 앱을 구성합니다.
   - **OAuth 앱**: 사용자를 대신하여 관련 이벤트를 관리하기 위해 `repo_hook` 및/또는 `org_hook` 범위를 요청합니다.
   - **GitHub 서비스 공급자**: 사용자에게 전송된 관련 이벤트를 사용하여 웹후크를 수동으로 구성하도록 요청하거나, 이 기회에 기능을 관리하는 앱을 빌드할 수 있습니다. 자세한 내용은 “[앱 정보](/apps/about-apps/)”를 참조하세요.

3. GitHub 외부에서 추가 구성을 이동합니다. 일부 GitHub 서비스에는 GitHub 내의 구성 페이지에서 추가적인 사용자 지정 구성이 필요합니다. 서비스에서 이러한 작업을 수행하는 경우 이 기능을 애플리케이션으로 이동하거나 해당되는 경우 GitHub 또는 OAuth 앱에 의존해야 합니다.

## {% data variables.product.prodname_ghe_server %} 지원

- **{% data variables.product.prodname_ghe_server %} 2.17**: {% data variables.product.prodname_ghe_server %} 릴리스 2.17 이상에서 관리자가 서비스를 설치할 수 있도록 더 이상 허용하지 않습니다. 관리자는 {% data variables.product.prodname_ghe_server %} 릴리스 2.17~2.19에서 기존 서비스 후크를 계속 수정하고 서비스 후크를 받을 수 있습니다. 전자 메일 서비스의 대안으로 {% data variables.product.prodname_ghe_server %} 2.17 이상에서 리포지토리에 푸시하는 데 전자 메일 알림을 사용할 수 있습니다. 자세한 내용은 [이 블로그 게시물](https://developer.github.com/changes/2019-01-29-life-after-github-services)을 참조하세요.
- **{% data variables.product.prodname_ghe_server %} 2.20**: {% data variables.product.prodname_ghe_server %} 릴리스 2.20 이상에서 설치된 모든 서비스의 이벤트 배달을 중지합니다.

{% data variables.product.prodname_ghe_server %} 2.17 릴리스는 관리자가 GitHub 서비스를 설치하도록 허용하지 않는 첫 번째 릴리스입니다. {% data variables.product.prodname_ghe_server %} 2.20 릴리스까지는 기존 GitHub 서비스만 지원합니다. 또한 2019년 10월 1일까지 {% data variables.product.prodname_ghe_server %}에서 실행되는 GitHub 서비스에 대한 중요한 패치는 허용합니다.

## 도움을 받아 마이그레이션

궁금한 사항이 있는 경우 [문의하기](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation)를 이용해 주세요.

대략적인 개요로, 마이그레이션 프로세스에는 일반적으로 다음이 포함됩니다.
  - 제품이 GitHub 서비스를 사용하는 방법과 위치를 식별합니다.
  - 일반 웹후크로 이동하기 위해 구성해야 하는 해당 웹후크 이벤트를 식별합니다.
  - [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) 또는 [{% data variables.product.prodname_github_apps %}. {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/)를 사용하여 디자인을 구현하는 것이 기본입니다. {% data variables.product.prodname_github_apps %}이 기본인 이유에 대해 자세히 알아보려면 “[{% data variables.product.prodname_github_apps %}으로 전환하는 이유](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)”를 참조하세요.
