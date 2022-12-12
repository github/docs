---
title: 하위 도메인 격리 사용
intro: '하위 도메인 격리를 설정하여 사용자가 제공한 콘텐츠를 {% data variables.product.prodname_ghe_server %} 어플라이언스의 다른 부분과 안전하게 분리할 수 있습니다.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: 6ce23de3646d3ca3f4523ec7716907f8b5430564
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193099'
---
## 하위 도메인 격리 정보

하위 도메인 격리는 교차 사이트 스크립팅 및 기타 관련 취약성을 완화합니다. 자세한 내용은 Wikipedia에서 “[교차 사이트 스크립팅](http://en.wikipedia.org/wiki/Cross-site_scripting)”을 참조하세요. {% data variables.location.product_location %}에서 하위 도메인 격리를 사용하도록 설정하는 것이 좋습니다.

하위 도메인 격리를 사용하도록 설정하면 {% data variables.product.prodname_ghe_server %}가 여러 경로를 하위 도메인으로 바꿉니다. 하위 도메인 격리를 사용하도록 설정한 후 `http(s)://HOSTNAME/raw/`와 같이 사용자가 제공하는 일부 콘텐츠에 대한 이전 경로에 액세스하려고 하면 `404` 오류를 반환할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.3-7-new-subdomains %}

| 하위 도메인 격리가 없는 경로  | 하위 도메인 격리가 있는 경로   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` | | `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` | {%- ifversion ghes < 3.7 %} | `http(s)://HOSTNAME/render/` | `http(s)://render.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` | | `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` | {%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` | {%- endif %} {%- ifversion ghes > 3.4 %} | 지원되지 않는 | `https://containers.HOSTNAME/` | {%- endif %}

## 필수 조건

{% data reusables.enterprise_installation.disable-github-pages-warning %}

하위 도메인 격리를 사용하도록 설정하기 전에 새 도메인에 대한 네트워크 설정을 구성해야 합니다.

- IP 주소 대신 유효한 도메인 이름을 호스트 이름으로 지정합니다. 자세한 내용은 “[호스트 이름 구성](/enterprise/admin/guides/installation/configuring-a-hostname)”을 참조하세요.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- 위에 나열된 하위 도메인에 대해 와일드카드 DNS(Domain Name System) 레코드 또는 개별 DNS 레코드를 설정합니다. 각 하위 도메인에 대해 여러 레코드를 만들 필요가 없도록 서버의 IP 주소를 가리키는 `*.HOSTNAME`에 대한 A 레코드를 만드는 것이 좋습니다.
- `HOSTNAME`과 와일드카드 도메인 `*.HOSTNAME`에 대한 SAN(주체 대체 이름)을 사용하여 `*.HOSTNAME`에 대한 와일드카드 TLS(전송 계층 보안) 인증서를 가져옵니다. 예를 들어 호스트 이름이 `github.octoinc.com`인 경우 일반 이름 값이 `*.github.octoinc.com`으로 설정되고, SAN 값은 `github.octoinc.com` 및 `*.github.octoinc.com`으로 설정된 인증서를 가져옵니다.
- 어플라이언스에서 TLS를 사용 자세한 내용은 “[TLS 구성](/enterprise/admin/guides/installation/configuring-tls/)”을 참조하세요.

## 하위 도메인 격리 사용

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. **하위 도메인 격리(권장)** 를 선택합니다.
  ![하위 도메인 격리를 사용하도록 설정하기 위한 확인란](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
