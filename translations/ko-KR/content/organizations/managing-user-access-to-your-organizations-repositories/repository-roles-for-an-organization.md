---
title: 조직의 리포지토리 역할
intro: 세분화된 역할을 할당하여 조직의 각 리포지토리에 대한 액세스를 사용자 지정하여 필요한 기능 및 작업에 대한 액세스 권한을 사용자에게 부여할 수 있습니다.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/repository-permission-levels-for-an-organization-early-access-program
  - /articles/repository-permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization
  - /organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Repository roles
ms.openlocfilehash: 474c431aa6df0a942dcf377d256a0ce76ad2a0f8
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120737'
---
## 조직의 리포지토리 역할

조직 구성원, 외부 협력자 및 사용자 팀에 역할을 할당하여 조직이 소유한 리포지토리에 대한 다양한 수준의 액세스 권한을 부여할 수 있습니다. 사용자가 필요한 것 이상으로 프로젝트에 대한 더 많은 액세스 권한을 부여하지 않고도 프로젝트에서 각 사용자나 팀의 기능에 가장 잘 맞는 역할을 선택합니다.

최소한의 액세스부터 최대한의 액세스에 이르기까지 조직 리포지토리에 대한 역할은 다음과 같습니다.
- **읽기**: 프로젝트를 보거나 논의하려는 비코드 기여자에게 사용하는 것이 좋습니다.
- **심사**: 쓰기 권한 없이 문제 및 끌어오기 요청을 사전에 관리해야 하는 기여자에게 사용하는 것이 좋습니다.
- **쓰기**: 프로젝트에 적극적으로 푸시하는 기여자에게 사용하는 것이 좋습니다.
- **유지 관리**: 리포지토리를 관리해야 하는 프로젝트 관리자에게 사용하는 것이 좋으며 중요하거나 안전하지 않은 작업에 대한 액세스 권한은 없습니다.
- **관리**: 보안 관리 또는 리포지토리 삭제와 같은 중요하고 안전하지 않은 작업을 포함하여 프로젝트에 대한 모든 권한이 필요한 사용자에게 사용하는 것이 좋습니다.

{% ifversion fpt %} 조직에서 {% data variables.product.prodname_ghe_cloud %}를 사용하는 경우 사용자 지정 리포지토리 역할을 만들 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 "[조직의 사용자 지정 리포지토리 역할 관리](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)"를 참조하세요.
{% elsif ghec or ghes > 3.4 or ghae > 3.4 %} 사용자 지정 리포지토리 역할을 만들 수 있습니다. 자세한 내용은 “[조직의 사용자 지정 리포지토리 역할 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”를 참조하세요.
{% endif %}

조직 소유자는 조직의 리포지토리에 액세스할 때 조직의 모든 구성원에게 적용되는 기본 권한을 설정할 수 있습니다. 자세한 내용은 "[조직에 대한 기본 권한 설정](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)"을 참조하세요.

조직 소유자는 조직 전체에서 특정 설정 및 작업에 대한 액세스를 추가로 제한하도록 선택할 수도 있습니다. 특정 설정 관련 옵션에 대한 자세한 내용은 "[조직 설정 관리](/articles/managing-organization-settings)"를 참조하세요.

조직 수준 설정을 관리하는 것 외에도 조직 소유자는 조직 소유의 모든 리포지토리에 대한 관리자 액세스 권한을 가집니다. 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

{% warning %}

**경고:** 다른 사용자가 리포지토리에 배포 키를 추가하는 경우 프라이빗 키가 있는 사용자는 나중에 조직에서 제거되더라도 (키 설정에 따라) 리포지토리에서 읽거나 리포지토리에 쓸 수 있습니다.

{% endwarning %}

## 각 역할에 대한 권한

{% ifversion fpt %} 아래 나열된 기능 중 일부는 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직으로 제한됩니다. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghes or ghec %} {% note %}

**참고:** 보안 기능을 사용하는 데 필요한 역할은 아래 "[보안 기능에 대한 액세스 요구 사항](#access-requirements-for-security-features)"에 나열되어 있습니다.

{% endnote %} {% endif %}

| 리포지토리 작업 | 읽기 | 심사 | 쓰기 | 유지 관리 | Admin |
|:---|:---:|:---:|:---:|:---:|:---:|
| 리포지토리에 대한 [개인](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository), [팀](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository) 및 [외부 협력자](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) 액세스 관리 | | | | | **✔️** |
| 개인 또는 팀의 할당된 리포지토리에서 끌어오기 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 개인 또는 팀의 할당된 리포지토리 포크 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 자신의 댓글 편집 및 삭제 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 문제 열기 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 자신이 연 문제 닫기 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 자신이 닫은 문제 다시 열기 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 할당된 문제 발생 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 팀의 할당된 리포지토리 포크에서 끌어오기 요청 보내기 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [끌어오기 요청에 리뷰 제출](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [필요한 검토를 사용하여 끌어오기 요청의 변경 내용 승인 또는 요청](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews) | | | **✔️** | **✔️** | **✔️** |
| 끌어오기 요청에 [제안된 변경 내용 적용](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) | | | **✔️** | **✔️** | **✔️** |
| 게시된 릴리스 보기 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [GitHub Actions 워크플로 실행](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run) 보기 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| 퍼블릭 리포지토리에서 Wiki 편집 | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| 프라이빗 리포지토리에서 Wiki 편집 | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [악의적 콘텐츠 또는 스팸 콘텐츠 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| 레이블 적용/해제 | | **✔️** | **✔️** | **✔️** | **✔️** |
| 레이블 만들기;편집;삭제 | | | **✔️** | **✔️** | **✔️** |
| 모든 문제 및 끌어오기 요청 닫기, 다시 열기 및 할당 | | **✔️** | **✔️** | **✔️** | **✔️** |
| [끌어오기 요청에서 자동 병합 사용 및 사용 안 함](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | | | **✔️** | **✔️** | **✔️** |
| 마일스톤 적용 |  | **✔️** | **✔️** | **✔️** | **✔️** |
| [중복 문제 및 끌어오기 요청](/articles/about-duplicate-issues-and-pull-requests) 표시| | **✔️** | **✔️** | **✔️** | **✔️** |
| [끌어오기 요청 검토](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) 요청 | | **✔️** | **✔️** | **✔️** | **✔️** |
| [끌어오기 요청](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) 병합 | | | **✔️** | **✔️** | **✔️** |
| 개인 또는 팀의 할당된 리포지토리에 푸시(쓰기) | | | **✔️** | **✔️** | **✔️** |
| 커밋, 끌어오기 요청 및 문제에 대한 모든 사용자의 댓글 편집 및 삭제 | | | **✔️** | **✔️** | **✔️** |
| [사용자의 댓글 숨기기](/communities/moderating-comments-and-conversations/managing-disruptive-comments) | | | **✔️** | **✔️** | **✔️** |
| [대화 잠금](/communities/moderating-comments-and-conversations/locking-conversations) | | | **✔️** | **✔️** | **✔️** |
| 문제 이전(자세한 내용은 "[다른 리포지토리로 문제 이전](/articles/transferring-an-issue-to-another-repository)" 참조) |  | | **✔️** | **✔️** | **✔️** |
| [리포지토리의 지정된 코드 소유자 역할 수행](/articles/about-code-owners) | | | **✔️** | **✔️** | **✔️** |
| [초안 끌어오기 요청을 검토 준비 완료로 표시](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [끌어오기 요청을 초안으로 변환](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request) | | | **✔️** | **✔️** | **✔️** |
| [상태 검사](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) 만들기 | | | **✔️** | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [GitHub Actions 워크플로](/actions/automating-your-workflow-with-github-actions/) 만들기, 편집, 실행, 다시 실행 및 취소 | | | **✔️** | **✔️** | **✔️** |{% endif %}
| 릴리스 만들기 및 편집 | | | **✔️** | **✔️** | **✔️** |
| 초안 릴리스 보기 | | | **✔️** | **✔️** | **✔️** |
| 리포지토리의 설명 편집 | | | | **✔️** | **✔️** |{% ifversion fpt or ghae or ghec %}
| [패키지 보기 및 설치](/packages/publishing-and-managing-packages) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [패키지 게시](/packages/publishing-and-managing-packages/publishing-a-package) | | | **✔️** | **✔️** | **✔️** |
| [패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package) | | |  |  | **✔️** | {% endif %}
| [토픽](/articles/classifying-your-repository-with-topics) 관리 | | | | **✔️** | **✔️** |
| Wiki 사용 및 Wiki 편집자 제한 | | | | **✔️** | **✔️** |
| 프로젝트 보드 사용 | | | | **✔️** | **✔️** |
| [끌어오기 요청 병합](/articles/configuring-pull-request-merges) 구성 | | | | **✔️** | **✔️** |
| [{% data variables.product.prodname_pages %}에 대한 원본 게시](/articles/configuring-a-publishing-source-for-github-pages) 구성 | | | | **✔️** | **✔️** |
| [분기 보호 규칙 관리](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule) | | | | | **✔️** |
| [보호된 분기에 푸시](/articles/about-protected-branches) | | | | **✔️** | **✔️** |
| 승인 검토가 없는 경우에도 보호된 분기에서 끌어오기 요청 병합 | | | | | **✔️** |{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %}
| [태그 보호 규칙](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)과 일치하는 태그 만들기 | | | | **✔️** | **✔️** |
| [태그 보호 규칙](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/configuring-tag-protection-rules)과 일치하는 태그 삭제 | | | | | **✔️** |{% endif %}
| [리포지토리 소셜 카드 만들기 및 편집](/articles/customizing-your-repositorys-social-media-preview) | | | | **✔️** | **✔️** |{% ifversion fpt or ghec %}
| [리포지토리에서 상호 작용](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) 제한| | | | **✔️** | **✔️** |{% endif %}
| 문제 삭제("[문제 삭제](/articles/deleting-an-issue)" 참조) | | | | | **✔️** |
| [리포지토리에 대한 코드 소유자 정의](/articles/about-code-owners) | | | | | **✔️** |
| 팀에 리포지토리 추가(자세한 내용은 "[조직 리포지토리에 대한 팀 액세스 관리](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#giving-a-team-access-to-a-repository)" 참조) | | | | | **✔️** |
| [리포지토리에 대한 외부 협력자 액세스 관리](/articles/adding-outside-collaborators-to-repositories-in-your-organization) | | | | | **✔️** |
| [리포지토리의 표시 유형 변경](/articles/restricting-repository-visibility-changes-in-your-organization) | | | | | **✔️** |
| 리포지토리를 템플릿으로 만들기("[템플릿 리포지토리 만들기](/articles/creating-a-template-repository)" 참조) | | | | | **✔️** |
| 리포지토리의 설정 변경 | | | | | **✔️** |
| 리포지토리에 대한 팀 및 협력자 액세스 관리 | | | | | **✔️** |
| 리포지토리의 기본 분기 편집 | | | | | **✔️** |
| 리포지토리의 기본 분기 이름 바꾸기("[분기 이름 바꾸기](/github/administering-a-repository/renaming-a-branch)" 참조) | | | | | **✔️** |
| 리포지토리의 기본 분기가 아닌 분기 이름 바꾸기("[분기 이름 바꾸기](/github/administering-a-repository/renaming-a-branch)" 참조) | | | **✔️** | **✔️** | **✔️** |
| 웹후크 관리 및 키 배포 | | | | | **✔️** |{% ifversion fpt or ghec %}
| [프라이빗 리포지토리에 대한 데이터 사용 설정 관리](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) | | | | | **✔️** |{% endif %}
| [리포지토리에 대한 포크 정책 관리](/github/administering-a-repository/managing-the-forking-policy-for-your-repository) | | | | | **✔️** |
| [리포지토리를 조직으로 이전](/articles/restricting-repository-creation-in-your-organization) | | | | | **✔️** |
| [리포지토리를 삭제 또는 조직 외부로 이전](/articles/setting-permissions-for-deleting-or-transferring-repositories) | | | | | **✔️** |
| [리포지토리 보관](/articles/about-archiving-repositories) | | | | | **✔️** |{% ifversion fpt or ghec %}
| 스폰서 단추 표시("[리포지토리에 스폰서 단추 표시](/articles/displaying-a-sponsor-button-in-your-repository)" 참조) | | | | | **✔️** |{% endif %}
| Jira 또는 Zendesk와 같은 외부 리소스에 대한 자동 링크 참조 만들기("[외부 리소스를 참조하도록 자동 링크 구성](/articles/configuring-autolinks-to-reference-external-resources)" 참조) | | | | | **✔️** |{% ifversion discussions %}
| 리포지토리에서 [{% data variables.product.prodname_discussions %} 사용](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) | | | | **✔️** | **✔️** |
| {% data variables.product.prodname_discussions %}에 대한 [범주 만들기 및 편집](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions) | | | | **✔️** | **✔️** |
| [토론을 다른 범주로 이동](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| 새 리포지토리로 [토론 이전](/discussions/managing-discussions-for-your-community/managing-discussions)| | | **✔️** | **✔️** | **✔️** |
| [고정된 토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [문제를 일괄 토론으로 변환](/discussions/managing-discussions-for-your-community/managing-discussions) | | | **✔️** | **✔️** | **✔️** |
| [토론 잠금 및 잠금 해제](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [개별적으로 문제를 토론으로 변환](/discussions/managing-discussions-for-your-community/moderating-discussions) | | **✔️** | **✔️** | **✔️** | **✔️** |
| [새 토론 만들기 및 기존 토론에 댓글 작성](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [토론 삭제](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion) | | **✔️** | | **✔️** | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| [codespace](/codespaces/about-codespaces) 만들기 | | | **✔️** | **✔️** | **✔️** |{% endif %}

### 보안 기능에 대한 액세스 요구 사항

이 섹션에서는 {% data variables.product.prodname_advanced_security %} 기능과 같은 보안 기능에 필요한 액세스 권한을 확인할 수 있습니다.

| 리포지토리 작업 | 읽기 | 심사 | 쓰기 | 유지 관리 | Admin |
|:---|:---:|:---:|:---:|:---:|:---:| 
| 리포지토리의 [안전하지 않은 종속성에 대해 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)을 받습니다. | | | | | **✔️** |
| [{% data variables.product.prodname_dependabot_alerts %} 해제](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository) | | | | | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [보안 경고를 받을 추가 사용자 또는 팀 지정](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}
| [보안 공지](/code-security/security-advisories/about-github-security-advisories) 만들기 | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %} <!--Not available for FPT-->
| {% data variables.product.prodname_GH_advanced_security %} 기능에 대한 액세스 권한 관리(“[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)” 참조) | | | | | **✔️** |{% endif %}{% ifversion fpt or ghec %}<!--Set at site-level for GHES and GHAE-->
| 프라이빗 리포지토리에 대한 [종속성 그래프 사용](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) | | | | | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| [종속성 검토 보기](/code-security/supply-chain-security/about-dependency-review) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |{% endif %}
| [끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 보기](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests) | **✔️** | **✔️** | **✔️** | **✔️** | **✔️** |
| [{% data variables.product.prodname_code_scanning %} 경고 나열, 해제 및 삭제](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository) | | | **✔️** | **✔️** | **✔️** |
| [리포지토리에서 {% data variables.product.prodname_secret_scanning %} 경고 보기 및 해제](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% ifversion ghes or ghae or ghec %}<!--Not available for FPT-->
| [{% data variables.product.prodname_secret_scanning %} 경고 해결, 해지 또는 다시 열기](/github/administering-a-repository/managing-alerts-from-secret-scanning) | | | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️**{% ifversion not ghae %}<sup>[1]</sup>{% endif %} | **✔️** |{% endif %}{% ifversion ghes or ghae or ghec %}
| 리포지토리에서 [{% data variables.product.prodname_secret_scanning %} 경고를 받을 추가 사용자 또는 팀 지정](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) | | | | | **✔️** |{% endif %}

[1] 리포지토리 작성자 및 유지 관리자는 자신의 커밋에 대한 경고 정보만 볼 수 있습니다.

## 추가 참고 자료

- "[조직의 리포지토리에 대한 액세스 권한 관리](/articles/managing-access-to-your-organization-s-repositories)"
- “[조직의 리포지토리에 외부 협력자 추가](/articles/adding-outside-collaborators-to-repositories-in-your-organization)”
- “[조직의 프로젝트 보드 권한](/articles/project-board-permissions-for-an-organization)”
