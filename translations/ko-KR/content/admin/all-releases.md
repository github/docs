---
title: GitHub Enterprise 서버 릴리스
intro: '{% data variables.product.company_short %}는 새 버전의 {% data variables.product.product_name %}를 정기적으로 릴리스합니다. 지원되는 버전을 검토하고, 사용 중단 날짜를 확인하고, 배포한 릴리스에 대한 설명서를 찾아볼 수 있습니다.'
allowTitleToDifferFromFilename: true
versions:
  ghes: '*'
topics:
  - Enterprise
  - Upgrades
shortTitle: Releases
ms.openlocfilehash: 85b0848f77b12920ba853bc674327392b6a89389
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062908'
---
## {% data variables.product.product_name %} 릴리스 정보

{% data reusables.enterprise.constantly-improving %} {% data variables.product.company_short %}는 4가지 최신 기능 릴리스를 지원합니다. 자세한 내용은 “[새 릴리스로의 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”를 참조하세요.

[릴리스 정보](/admin/release-notes)에서 각 릴리스의 새로운 기능을 확인할 수 있으며 {% data variables.product.prodname_docs %}에서 모든 릴리스에 대한 관리자 및 사용자 설명서를 볼 수 있습니다. 설명서를 읽을 때 제품을 반영하는 버전을 선택해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.

## 현재 지원되는 릴리스

{% data variables.product.company_short %}는 {% data variables.product.product_name %}의 다음 릴리스를 지원합니다. 최신 릴리스에 대한 자세한 내용은 [{% data variables.product.prodname_enterprise %}](https://github.com/enterprise) 웹 사이트를 참조하세요.

| 버전 | 해제 | 사용 중단 | 릴리스 정보 | 설명서 |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.supported %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 릴리스 정보](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} 설명서](/enterprise-server@{{version}}) | {%- endfor %}

## 사용되지 않는 릴리스

{% data variables.product.company_short %}는 사용되지 않는 버전에 대한 설명서를 제공하지만 설명서를 유지 관리하거나 업데이트하지는 않습니다.

| 버전 | 해제 | 사용 중단 | 릴리스 정보 | 설명서 |
| :- | :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesWithNewFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 릴리스 정보](/enterprise-server@{{version}}/admin/release-notes) | [{{version}} 설명서](/enterprise-server@{{version}}) | {%- endfor %} {%- for version in enterpriseServerReleases.deprecatedReleasesWithLegacyFormat %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 릴리스 정보](https://enterprise.github.com/releases/series/{{version}}) | [{{version}} 설명서](/enterprise/{{version}}) | {%- endfor %}

### 사용되지 않는 개발자 설명서

{% data variables.product.company_short %}는 2.17 릴리스까지 별도의 사이트에서 {% data variables.product.product_name %}에 대한 개발자 설명서를 호스트했습니다. {% data variables.product.company_short %}는 버전 2.16 이하에 대한 개발자 설명서를 계속 제공하지만 설명서를 유지 관리하거나 업데이트하지는 않습니다.

| 버전 | 해제 | 사용 중단 | 개발자 설명서 |
| :- | :- | :- | :- |
{%- for version in enterpriseServerReleases.deprecatedReleasesOnDeveloperSite %} | {{version}} | {{enterpriseServerReleases.dates[version].releaseDate}} | {{enterpriseServerReleases.dates[version].deprecationDate}} | [{{version}} 개발자 설명서](https://developer.github.com/enterprise/{{version}}) | {%- endfor %}
