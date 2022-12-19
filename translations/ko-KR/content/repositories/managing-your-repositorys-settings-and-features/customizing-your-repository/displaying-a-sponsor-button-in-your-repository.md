---
title: 리포지토리에 스폰서 단추 표시
intro: 리포지토리에 스폰서 단추를 추가하여 오픈 소스 프로젝트에 대한 자금 조달 옵션의 가시성을 높일 수 있습니다.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147558344'
---
## FUNDING 파일 정보

기본 분기의 리포지토리의 `.github` 폴더에서 _FUNDING.yml_ 파일을 편집하여 스폰서 단추를 구성할 수 있습니다. {% data variables.product.prodname_sponsors %}, 외부 자금 조달 플랫폼 또는 사용자 지정 자금 조달 URL에 스폰서 개발자를 포함하도록 단추를 구성할 수 있습니다. {% data variables.product.prodname_sponsors %}에 대한 자세한 내용은 “[GitHub 스폰서 정보](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)”를 참조하세요.

외부 자금 조달 플랫폼당 하나의 사용자 이름, 패키지 이름 또는 프로젝트 이름과 최대 4개의 사용자 지정 URL을 추가할 수 있습니다. {% data variables.product.prodname_sponsors %}에 1개의 조직과 최대 4명의 스폰서 개발자를 추가할 수 있습니다. 다음 구문을 사용하여 새 줄에 각 플랫폼을 추가합니다.

플랫폼 | Syntax
-------- | -----
[LFX 멘토링(이전의 CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` 또는 `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
사용자 지정 URL | `custom: LINK1` 또는 `custom: [LINK1, LINK2, LINK3, LINK4]`

Tidelift의 경우 다음 플랫폼 이름이 포함된 `platform-name/package-name` 구문을 사용합니다.

언어 | 플랫폼 이름
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

다음은 _FUNDING.yml_ 파일의 예입니다.
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**참고:** 배열의 사용자 지정 URL에 `:`가 포함된 경우 URL을 따옴표로 래핑해야 합니다. 예: `"https://www.paypal.me/octocat"`.

{% endnote %}

조직 또는 개인 계정의 기본 스폰서 단추를 만들 수 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요.

{% note %}

자금 조달 링크는 오픈 소스 프로젝트가 지역 사회에서 직접 재정 지원을 받을 수 있는 방법을 제공합니다. 광고, 정치, 지역 사회 또는 자선 단체 지원과 같은 다른 목적을 위한 자금 조달 링크의 사용을 지원하지 않습니다. 의도한 사용이 지원되는지 여부에 대한 질문이 있는 경우 {% data variables.contact.contact_support %}에 문의하세요.

{% endnote %}

## 리포지토리에 스폰서 단추 표시

관리자 권한이 있는 모든 사용자는 리포지토리에서 스폰서 단추를 사용하도록 설정할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 기능에서 **스폰서쉽** 을 선택합니다.
  ![스폰서쉽을 사용하도록 설정하는 확인란](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. "스폰서쉽"에서 **스폰서 설정 단추** 또는 **자금 조달 링크 재정의** 를 클릭합니다.
  ![스폰서 단추를 설정하는 단추](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. 파일 편집기에서 _FUNDING.yml_ 파일의 지침에 따라 자금 조달 위치에 대한 링크를 추가합니다.
  ![FUNDING 파일을 편집하여 자금 조달 위치에 링크 추가](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 추가 참고 자료
- "[오픈 소스 기여자의 {% data variables.product.prodname_sponsors %} 정보](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)"
- {% data variables.product.prodname_blog %}의 "[{% data variables.product.prodname_sponsors %} 팀 관련 FAQ](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)"
