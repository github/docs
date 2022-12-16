---
title: GitHub 패키지 소개
intro: '{% data variables.product.prodname_registry %}는 지정된 사용자에 대해 비공개로{% ifversion ghae %} 또는 엔터프라이즈에 대해 내부적으로{% else %}또는 공개적으로{% endif %} 소프트웨어 패키지를 호스트하고 패키지를 프로젝트에 종속성으로 사용할 수 있도록 하는 소프트웨어 패키지 호스팅 서비스입니다.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introduction
ms.openlocfilehash: 1ad319ead16f10186b330f876ccaa83bc44bdbcd
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193027'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## {% data variables.product.prodname_registry %} 정보

{% data variables.product.prodname_registry %}는 컨테이너, 기타 종속성 등을 포함하여 패키지를 호스트하고 관리하기 위한 플랫폼입니다. {% data variables.product.prodname_registry %}는 원본 코드와 패키지를 한 곳에 결합하여 통합 권한 관리{% ifversion fpt or ghec %} 및 청구{% endif %}를 제공하므로 {% data variables.product.product_name %}에서 소프트웨어 개발을 중앙 집중화할 수 있습니다.

{% data variables.product.prodname_registry %}를 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, {% data variables.product.prodname_actions %}, 웹후크와 통합하여 코드, CI 및 배포 솔루션을 포함하는 엔드투엔드 DevOps 워크플로를 만들 수 있습니다.

{% data variables.product.prodname_registry %}는 npm, RubyGems, Apache Maven, Gradle, Docker, NuGet 등 일반적으로 사용되는 패키지 관리자를 위한 다양한 패키지 레지스트리를 제공합니다. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}의 {% data variables.product.prodname_container_registry %}는 컨테이너에 최적화되며 Docker 및 OCI 이미지를 지원합니다.{% endif %} {% data variables.product.prodname_registry %}가 지원하는 다양한 패키지 레지스트리에 관한 자세한 내용은 “[{% data variables.product.prodname_registry %} 레지스트리 작업](/packages/working-with-a-github-packages-registry)”을 참조하세요.

{% ifversion fpt or ghec %}

![컨테이너 레지스트리, RubyGems, npm, Apache Maven, NuGet, Gradle 등에 대한 패키지 지원을 보여 주는 다이어그램](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Docker 레지스트리, RubyGems, npm, Apache Maven, Gradle, NuGet, Docker 등에 대한 패키지 지원을 보여 주는 다이어그램](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

{% data variables.product.product_name %}에서 라이선스, 다운로드 통계, 버전 기록 등의 메타데이터뿐만 아니라 패키지의 추가 정보도 볼 수 있습니다. 자세한 내용은 “[패키지 보기](/packages/manage-packages/viewing-packages)”를 참조하세요.

{% ifversion ghes %}

{% data variables.product.product_name %}의 {% data variables.product.prodname_registry %} 구성에 대한 자세한 내용은 “[엔터프라이즈용 {% data variables.product.prodname_registry %} 시작](/admin/packages/getting-started-with-github-packages-for-your-enterprise)”을 참조하세요.

{% endif %}

### 패키지 권한 및 표시 여부 개요

|                    |        |
|--------------------|--------------------|
| 사용 권한        | {% ifversion packages-registries-v2 %} 패키지에 대한 권한은 패키지가 호스트되는 리포지토리에서 상속되거나 특정 사용자 또는 조직 계정에 대해 정의될 수 있습니다. 일부 레지스트리는 리포지토리에서 상속된 권한만 지원합니다. 이러한 레지스트리 목록은 "[{% data variables.product.prodname_registry %}에 대한 권한 정보"를 참조하세요](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages). 패키지 액세스에 대한 자세한 내용은 "[패키지의 액세스 제어 및 표시 유형 구성"을 참조하세요](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility). {% else %}각 패키지는 패키지가 호스트되는 리포지토리의 권한을 상속합니다. <br> <br> 예를 들어, 리포지토리의 읽기 권한이 있는 사용자는 프로젝트에서 패키지를 종속성으로 설치할 수 있으며, 쓰기 권한이 있는 사용자는 누구나 새 패키지 버전을 게시할 수 있습니다.{% endif %} |
| 가시 거리         | {% data reusables.package_registry.public-or-private-packages %} |

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_registry %} 요금 청구 정보

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} 자세한 내용은 “[{% data variables.product.prodname_registry %}에 대한 청구 정보](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)”를 참조하세요.

{% endif %}

## 지원되는 클라이언트 및 형식
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %}는 이미 친숙한 네이티브 패키지 도구 명령을 사용하여 패키지 버전을 게시하고 설치합니다.
### 패키지 레지스트리 지원

| 언어 | Description | 패키지 형식 | 패키지 클라이언트 |
| --- | --- | --- | --- |
| JavaScript | Node 패키지 관리자 | `package.json`  | `npm` |
| Ruby |  RubyGems 패키지 관리자 | `Gemfile` |  `gem` |
| Java | Apache Maven 프로젝트 관리 및 종합 도구 | `pom.xml` |  `mvn` |
| Java | Java에 대한 Gradle 빌드 자동화 도구 | `build.gradle` 또는 `build.gradle.kts`  | `gradle`  |
| .NET | .NET에 대한 NuGet 패키지 관리 | `nupkg`  |  `dotnet` CLI |
| 해당 없음 | Docker 컨테이너 관리 | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

**참고:** Docker 레지스트리를 사용하도록 설정하는 경우 하위 도메인 격리를 사용하도록 설정하는 것이 좋습니다. 자세한 내용은 “[하위 도메인 격리 사용](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)”을 참조하세요.

{% endnote %}

{% endif %}

{% data variables.product.prodname_registry %}에서 사용할 패키지 클라이언트를 구성하는 방법에 관한 자세한 내용은 “[{% data variables.product.prodname_registry %} 레지스트리 작업](/packages/working-with-a-github-packages-registry)”을 참조하세요.

{% ifversion fpt or ghec %} Docker 및 {% data variables.product.prodname_container_registry %}에 관한 자세한 내용은 “[컨테이너 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)”을 참조하세요.
{% endif %}
## {% data variables.product.prodname_registry %} 인증

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## 패키지 관리

{% data variables.product.product_name %} 사용자 인터페이스{% ifversion fpt or ghec %} 또는 REST API를 사용하여 패키지를 삭제할 수 있습니다. 자세한 내용은 "[패키지 삭제 및 복원" 및](/packages/learn-github-packages/deleting-and-restoring-a-package) "[{% data variables.product.prodname_registry %} API](/rest/reference/packages)"를 참조하세요. {% else %}. {% endif %} {% data reusables.package_registry.about-graphql-support %}

GraphQL API를 사용하여 프라이빗 패키지를 쿼리하고 삭제하는 경우 {% data variables.product.pat_v1 %}에 인증하는 데 사용하는 것과 동일한 {% data variables.product.prodname_registry %}을(를) 사용해야 합니다.

자세한 내용은 {% ifversion ghes or ghae %}“[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)” 및 {% endif %}“[GraphQL을 사용하여 호출 형성](/graphql/guides/forming-calls-with-graphql)”을 참조하세요.

패키지가 게시되거나 업데이트되는 경우와 같은 패키지 관련 이벤트를 구독하도록 웹후크를 구성할 수 있습니다. 자세한 내용은 “[`package` 웹후크 이벤트](/webhooks/event-payloads/#package)”를 참조하세요.

## 고객 지원팀에 연락

{% ifversion fpt or ghec %} {% data variables.product.prodname_registry %}에 대한 피드백 또는 기능 요청이 있는 경우 [{% data variables.product.prodname_github_community %} 토론](https://github.com/orgs/community/discussions/categories/actions-and-packages)을 사용합니다.

다음 경우에는 [연락처 양식](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)을 사용하여 {% data variables.contact.github_support %}에 {% data variables.product.prodname_registry %}에 관해 문의하세요.

* 설명서와 상반되는 것이 나타납니다.
* 모호하거나 명확하지 않은 오류가 발생합니다.
* 게시된 패키지에는 GDPR 위반, API 키 또는 개인 식별 정보와 같은 중요한 데이터가 포함됩니다.

{% else %} {% data variables.product.prodname_registry %}에 대한 지원이 필요한 경우 사이트 관리자에게 문의하세요.

{% endif %}
