---
title: GitHub Enterprise 관리
intro: 이러한 엔드포인트를 사용하여 엔터프라이즈를 관리할 수 있습니다.
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
  - /rest/reference/enterprise-admin
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: Enterprise administration
children:
  - /admin-stats
  - /announcement
  - /audit-log
  - /billing
  - /code-security-and-analysis
  - /global-webhooks
  - /ldap
  - /license
  - /management-console
  - /org-pre-receive-hooks
  - /orgs
  - /pre-receive-environments
  - /pre-receive-hooks
  - /repo-pre-receive-hooks
  - /users
  - /scim
ms.openlocfilehash: 0711dad622e4c7932db192bb17e1bb845e9c0610
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094539'
---
{% ifversion fpt or ghec %}

{% note %}

**참고:** 이 문서는 {% data variables.product.prodname_ghe_cloud %}에 적용됩니다. {% data variables.product.prodname_ghe_managed %} 또는 {% data variables.product.prodname_ghe_server %} 버전을 보려면 **{% data ui.pages.article_version %}** 드롭다운 메뉴를 사용합니다.

{% endnote %}

{% endif %}

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### 엔드포인트 URL

REST API 엔드포인트{% ifversion ghes %}([관리 콘솔](#management-console) API 엔드포인트 제외){% endif %}에는 다음 URL이 접두사로 추가됩니다.

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} 엔드포인트에 `{enterprise}`가 포함된 경우 엔터프라이즈 설정의 URL에 포함된 엔터프라이즈 계정의 핸들로 `{enterprise}`를 바꿉니다. 예를 들어 엔터프라이즈 계정이 `https://github.com/enterprises/octo-enterprise`에 있는 경우 `{enterprise}`를 `octo-enterprise`로 바꿉니다.
{% endif %}

{% ifversion ghes %} [관리 콘솔](#management-console) API 엔드포인트에는 호스트 이름만 접두사로 추가됩니다.

```shell
http(s)://HOSTNAME/
```
{% endif %} {% ifversion ghae or ghes %}
### 인증

{% data variables.product.product_name %} 설치의 API 엔드포인트는 GitHub.com API와 [동일한 인증 방법](/rest/overview/resources-in-the-rest-api#authentication)을 허용합니다. **[OAuth 토큰](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}([권한 부여 API](/rest/reference/oauth-authorizations#create-a-new-authorization)를 사용하여 만들 수 있음) {% endif %}또는 **[기본 인증](/rest/overview/resources-in-the-rest-api#basic-authentication)** 을 사용하여 인증할 수 있습니다. {% ifversion ghes %} 엔터프라이즈별 엔드포인트에서 사용하는 경우 OAuth 토큰의 [OAuth 범위](/developers/apps/scopes-for-oauth-apps#available-scopes)는 `site_admin`이어야 합니다.{% endif %}

엔터프라이즈 관리 API 엔드포인트는 {% ifversion ghes %}[관리 콘솔 암호](/enterprise/admin/articles/accessing-the-management-console/)가 필요한 [관리 콘솔](#management-console) API를 제외하고 {% endif %}인증된 {% data variables.product.product_name %} 사이트 관리자만 액세스할 수 있습니다.

{% endif %}

{% ifversion ghae or ghes %}
### 버전 정보

엔터프라이즈의 현재 버전은 모든 API의 응답 헤더에 반환됩니다. `X-GitHub-Enterprise-Version: {{currentVersion}}.0`
[메타 엔드포인트](/rest/reference/meta/)를 호출하여 현재 버전을 읽을 수도 있습니다.

{% endif %}
