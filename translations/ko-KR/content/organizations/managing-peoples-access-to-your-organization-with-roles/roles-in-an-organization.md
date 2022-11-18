---
title: 조직의 역할
intro: 조직 소유자는 조직에서 서로 다른 사용 권한 집합을 제공하는 개인 및 팀에 역할을 할당할 수 있습니다.
redirect_from:
  - /articles/permission-levels-for-an-organization-early-access-program
  - /articles/permission-levels-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization
  - /organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Roles in an organization
ms.openlocfilehash: c6c345e3d1f0fb2c49aa55e79346bc4ac6567885
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159175'
---
## 역할 정보
{% data reusables.organizations.about-roles %}

리포지토리 수준 역할은 다양한 수준의 리포지토리 액세스 권한을 조직 멤버, 외부 협력자 및 사용자로 구성된 팀에 부여합니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

팀 수준 역할은 팀을 관리할 수 있는 권한을 부여하는 역할입니다. 팀 유지 관리자 역할을 팀의 개별 멤버에게 부여하여 팀에 대한 많은 관리 권한을 멤버에게 부여할 수 있습니다. 자세한 내용은 “[팀 멤버에 팀 유지 관리자 역할 할당](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”을 참조하세요.

조직 수준 역할은 조직과 조직의 리포지토리, 팀 및 설정을 관리하기 위해 개인 또는 팀에 할당할 수 있는 권한 세트입니다. 조직 수준에서 사용할 수 있는 모든 역할에 대한 자세한 내용은 "[조직 역할 정보](#about-organization-roles)"를 참조하세요.

## 조직 역할 정보

개인 또는 팀을 다양한 조직 수준 역할에 할당하여 조직 및 해당 리소스에 대한 멤버의 액세스를 제어할 수 있습니다. 각 역할에 포함된 개별 권한에 대한 자세한 내용은 "[조직 역할에 대한 권한](#permissions-for-organization-roles)"을 참조하세요.

{% ifversion enterprise-owner-join-org %} 엔터프라이즈 계정에서 조직을 소유하고 있는 경우 엔터프라이즈 소유자는 모든 역할로 조직에 참가하도록 선택할 수 있습니다. 자세한 내용은 “[엔터프라이즈가 소유한 조직에서 역할 관리](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”를 참조하세요.
{% endif %}

### 조직 소유자
조직 소유자는 조직에 대한 완전한 관리 액세스 권한을 갖습니다. 이 역할은 조직에서 두 명 이하로 제한해야 합니다. 자세한 내용은 "[조직에 대한 소유권 연속성 유지 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)"를 참조하세요.

### 조직 멤버
조직의 사용자에 대한 기본 비관리 역할은 조직 멤버입니다. 기본적으로 조직 멤버는 리포지토리 및 프로젝트 보드를 만들 수 있는 권한을 포함하여 다양한 권한을 갖습니다.

{% ifversion fpt or ghec %}
### 조직 중재자
중재자는 멤버로서의 권한 외에도 비 멤버 기여자를 차단 및 차단 해제하고, 상호 작용 제한을 설정하고, 조직이 소유한 퍼블릭 리포지토리에서 댓글을 숨길 수 있는 조직 멤버입니다. 자세한 내용은 “[조직의 조정자 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)”를 참조하세요.

### 청구 관리자
청구 관리자는 결제 정보와 같은 조직의 청구 설정을 관리할 수 있는 사용자입니다. 이는 조직의 멤버가 일반적으로 청구 리소스에 액세스할 수 없는 경우에 유용한 옵션입니다. 자세한 내용은 "[조직에 청구 관리자 추가](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)"를 참조하세요.

{% endif %}

{% ifversion security-managers %}
### 보안 관리자

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

조직에 보안 팀이 있는 경우 보안 관리자 역할을 사용하여 조직에 필요한 최소한의 액세스 권한을 팀 멤버에게 부여할 수 있습니다. 자세한 내용은 "[조직의 보안 관리자 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)"를 참조하세요.
{% endif %}
### {% data variables.product.prodname_github_app %} 관리자
기본적으로 조직 소유자만 조직에서 소유한 {% data variables.product.prodname_github_apps %}의 설정을 관리할 수 있습니다. 추가 사용자가 조직에서 소유한 {% data variables.product.prodname_github_apps %}를 관리할 수 있도록 소유자는 {% data variables.product.prodname_github_app %} 관리자 권한을 해당 사용자에게 부여할 수 있습니다.

사용자를 조직의 {% data variables.product.prodname_github_app %} 관리자로 지정하는 경우 조직에서 소유한 일부 또는 전체 {% data variables.product.prodname_github_apps %}의 설정을 관리할 수 있는 액세스 권한을 부여할 수 있습니다. 자세한 내용은 다음을 참조하세요.

- "[조직에서 GitHub App 관리자 추가](/articles/adding-github-app-managers-in-your-organization)"
- "[조직에서 GitHub App 관리자 제거](/articles/removing-github-app-managers-from-your-organization)"

### 외부 협력자
리포지토리에 대한 액세스를 허용하면서 조직의 데이터를 안전하게 유지하기 위해 *외부 협력자* 를 추가할 수 있습니다. {% data reusables.organizations.outside_collaborators_description %}

## 조직 역할에 대한 권한

{% ifversion fpt %} 아래에 나열된 기능 중 일부는 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직으로 제한됩니다. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

{% ifversion fpt or ghec %}
<!-- Free/Pro/Team and GHEC versions have extra columns for Moderators and Billing managers-->

| 조직 권한 | 소유자 | 멤버 | 중재자 | 청구 관리자 | 보안 관리자 |
|:------------------------|:------:|:-------:|:----------:|:----------------:|:-----------------:|
| 리포지토리 만들기("[조직에서 리포지토리 만들기 제한](/articles/restricting-repository-creation-in-your-organization)" 참조) | **X** | **X** | **X** |  | **X**  |
| 청구 정보 보기 및 편집 | **X** |  |  | **X** |  |
| 조직에 참가할 사용자 초대 | **X** |  |  |  |  |
| 조직 참가에 대한 초대 편집 및 취소 | **X** |  |  |  |  |
| 조직에서 멤버 제거 | **X** |  |  |  |  |
| 이전 멤버를 조직에 복구 | **X** |  |  |  |  |
| **모든 팀** 에서 사용자 추가 및 제거 | **X** |  |  |  |  |
| 조직 멤버를 *팀 유지 관리자* 로 승격 | **X** |  |  |  |  |
| 코드 검토 할당 구성("[팀에 대한 코드 검토 할당 관리](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)" 참조) | **X** |  |  |  |  |
| 예약된 미리 알림 설정("[끌어오기 요청에 대한 예약된 미리 알림 관리](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)" 참조) | **X** |  |  |  |  |
| **모든 리포지토리** 에 협력자 추가 | **X** |  |  |  |  |
| 조직 감사 로그에 액세스 | **X** |  |  |  |  |
| 조직의 프로필 페이지 편집("[조직 프로필 정보](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)" 참조) | **X** |  |  |  |  |{% ifversion ghec %}
| 조직의 도메인 확인("[조직의 도메인 확인](/articles/verifying-your-organization-s-domain)" 참조) | **X** |  |  |  |  |
| 이메일 알림을 확인되거나 승인된 도메인으로 제한("[조직에 대한 이메일 알림 제한](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)" 참조) | **X** |  |  |  |  |{% endif %}
| **모든 팀** 삭제 | **X** |  |  |  |  |
| 모든 리포지토리를 포함하여 조직 계정 삭제 | **X** |  |  |  |  |
| 팀 만들기("[조직에서 팀 만들기 권한 설정](/articles/setting-team-creation-permissions-in-your-organization)" 참조) | **X** | **X** | **X** |  | **X**  |
| [조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** |  |  |  |  |
| 프로젝트 보드 만들기("[조직에 대한 프로젝트 보드 권한](/articles/project-board-permissions-for-an-organization)" 참조) | **X** | **X** | **X** |  | **X**  |
| 모든 조직 멤버 및 팀 보기 | **X** | **X** | **X** |  | **X**  |
| @mention 표시되는 팀 | **X** | **X** | **X** |  | **X**  |
| *팀 유지 관리자* 를 만들 수 있음 | **X** | **X** | **X** |  | **X** |{% ifversion ghec %}
| 조직 인사이트 보기("[조직에 대한 인사이트 보기](/articles/viewing-insights-for-your-organization)" 참조) | **X** | **X** | **X** |  | **X**  |{% endif %}
| 공개 팀 토론 보기 및 **모든 팀** 에 게시("[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)" 참조) | **X** | **X** | **X** |  | **X**  |
| 비공개 팀 토론 보기 및 **모든 팀** 에 게시("[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)" 참조) | **X** |  |  |  |  |
| **모든 팀** 에서 팀 토론 편집 및 삭제("[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments)" 참조) | **X** |  |  |  |  |
| 조직에 대한 팀 토론 사용 안 함("[조직에 대한 팀 토론 사용 안 함](/articles/disabling-team-discussions-for-your-organization)" 참조) | **X** |  |  |  |  |
| 쓰기 가능한 커밋, 끌어오기 요청 및 문제에 대한 댓글 숨기기("[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)" 참조) | **X** | **X** | **X** |  | **X** |
| _모든_ 커밋, 끌어오기 요청 및 문제에 대한 댓글 숨기기("[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)" 참조) | **X** |  | **X** |  | **X** |
| 비 멤버 기여자 차단 및 차단 해제("[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)" 참조) | **X** |  | **X** |  |  |
| 퍼블릭 리포지토리에서 특정 사용자에 대한 상호 작용 제한("[조직에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)" 참조) | **X** |  | **X** |  |  |{% ifversion ghec %}
| 조직 종속성 인사이트 보기 관리("[조직의 종속성 인사이트 표시 여부 변경](/articles/changing-the-visibility-of-your-organizations-dependency-insights)" 참조) | **X** |  |  |  |  |{% endif %}
| **모든 팀** 에서 팀 프로필 사진을 설정("[팀 프로필 사진 설정](/articles/setting-your-team-s-profile-picture)" 참조) | **X** |  |  |  |  |
| 스폰서 계정 및 조직의 스폰서쉽 관리("[오픈 소스 기여자 후원](/sponsors/sponsoring-open-source-contributors)" 참조) | **X** |  |  | **X** | **X**  |
| 스폰서 계정의 이메일 업데이트 관리("[조직에서 후원하는 계정의 업데이트 관리](/organizations/managing-organization-settings/managing-updates-from-accounts-your-organization-sponsors)" 참조) | **X** |  |  |  |  |
| 다른 조직에 대한 스폰서쉽 특성 지정(자세한 내용은 "[조직에 대한 스폰서쉽 특성 지정](/sponsors/sponsoring-open-source-contributors/attributing-sponsorships-to-your-organization)" 참조) | **X** |  |  |  |  |
| 조직의 리포지토리에서 {% data variables.product.prodname_pages %} 사이트 게시 관리("[조직에 대한 {% data variables.product.prodname_pages %} 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" 참조) | **X** |  |  |  |  |
| 보안 및 분석 설정 관리("[조직에 대한 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" 참조) | **X** |  |  |  | **X** |
| 조직의 보안 개요 보기("[보안 개요 정보](/code-security/security-overview/about-the-security-overview)"참조) | **X** |  |  |  | **X** |{% ifversion ghec %}
| [SAML Single Sign On](/articles/about-identity-and-access-management-with-saml-single-sign-on) 사용 및 적용 | **X** |  |  |  |  |
| [조직에 대한 사용자의 SAML 액세스 관리](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) | **X** |  |  |  |  |
| 조직의 SSH 인증 기관 관리("[조직의 SSH 인증 기관 관리](/articles/managing-your-organizations-ssh-certificate-authorities)" 참조) | **X** |  |  |  |  |{% endif %}
| 리포지토리 전송 | **X** |  |  |   |  |
| {% data variables.product.prodname_marketplace %} 앱 구매, 설치, 청구 관리 및 취소 | **X** |  |  |  |  |
| {% data variables.product.prodname_marketplace %}에서 앱 나열 | **X** |  |  |  |  |
| 조직의 모든 리포지토리에 대해 안전하지 않은 종속성에 대한 [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) 받기 | **X** |  |  |  | **X** |
| {% data variables.product.prodname_dependabot_security_updates %} 관리("[{% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) 정보" 참조) | **X** |  |  |  | **X** |
| [포크 정책 관리](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) | **X** |  |  |  |  |
| [조직의 퍼블릭 리포지토리에서 작업 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) | **X** |  |  |  |  |
| 조직의 *모든 리포지토리* 끌어오기(읽기) | **X** |  |  |  | **X** |
| 조직의 *모든 리포지토리* 밀어넣기(쓰기) 및 복제(복사) | **X** |  |  |  |  |
| 조직 멤버를 [외부 협력자](#outside-collaborators)로 변환 | **X** |  |  |  |  |
| [조직 리포지토리에 액세스할 수 있는 사용자 보기](/articles/viewing-people-with-access-to-your-repository) | **X** |  |  |  |  |{% ifversion ghec %}
| [조직 리포지토리에 액세스할 수 있는 사용자 목록 내보내기](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** |  |  |  |  |{% endif %}
| 기본 분기 이름 관리("[조직의 리포지토리에 대한 기본 분기 이름 관리](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)" 참조) | **X** |  |  |  |  |
| 기본 레이블 관리("[조직의 리포지토리에 대한 기본 레이블 관리](/articles/managing-default-labels-for-repositories-in-your-organization)" 참조) | **X** |  |  |  |  |{% ifversion ghec %}
| 팀 동기화 사용("[조직에 대한 팀 동기화 관리](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" 참조) | **X** |  |  |  |  |{% endif %}
| 조직에서 끌어오기 요청 검토 관리("[조직에서 끌어오기 요청 검토 관리](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)" 참조) | **X** |  |  |  |  |

{% elsif ghes or ghae %}
<!-- GHES 3.3+ and eventual GHAE release don't have the extra columns for Moderators and Billing managers. -->

| 조직 작업 | 소유자 | 멤버 | 보안 관리자 |
|:--------------------|:------:|:-------:|:-------:|
| 조직에 참가할 사용자 초대 | **X** |  |  |
| 조직 참가에 대한 초대 편집 및 취소 | **X** |  |  |
| 조직에서 멤버 제거 | **X** | | |  |
| 이전 멤버를 조직에 복구 | **X** | | |  |
| **모든 팀** 에서 사용자 추가 및 제거 | **X** |  |  |
| 조직 멤버를 *팀 유지 관리자* 로 승격 | **X** |  |  |
| 코드 검토 할당 구성("[팀에 대한 코드 검토 할당 관리](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)" 참조) | **X** |  |  |
| **모든 리포지토리** 에 협력자 추가 | **X** |  |  |
| 조직 감사 로그에 액세스 | **X** |  |  |
| 조직의 프로필 페이지 편집("[조직 프로필 정보](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)" 참조) | **X** |  |  |{% ifversion ghes %}
| 조직의 도메인 확인("[조직의 도메인 확인](/articles/verifying-your-organization-s-domain)" 참조) | **X** |  |  |
| 이메일 알림을 확인되거나 승인된 도메인으로 제한("[조직에 대한 이메일 알림 제한](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)" 참조) | **X** |  |  |{% endif %}
| **모든 팀** 삭제 | **X** |  |  |
| 모든 리포지토리를 포함하여 조직 계정 삭제 | **X** |  |  |
| 팀 만들기("[조직에서 팀 만들기 권한 설정](/articles/setting-team-creation-permissions-in-your-organization)" 참조) | **X** | **X** | **X**  |
| 모든 조직 멤버 및 팀 보기 | **X** | **X** | **X**  |
| @mention 표시되는 팀 | **X** | **X** | **X**  |
| *팀 유지 관리자* 를 만들 수 있음 | **X** | **X** | **X**  |
| 리포지토리 전송 | **X** | |  |
| 보안 및 분석 설정 관리("[조직에 대한 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" 참조) | **X** | | **X** |{% ifversion ghes %}
| 조직의 보안 개요 보기("[보안 개요 정보](/code-security/security-overview/about-the-security-overview)" 참조) | **X** | | **X** |{% endif %}{% ifversion ghes %}
| {% data variables.product.prodname_dependabot_security_updates %} 관리("[{% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) 정보" 참조) | **X** | | **X** |{% endif %}
| 조직의 SSH 인증 기관 관리("[조직의 SSH 인증 기관 관리](/articles/managing-your-organizations-ssh-certificate-authorities)" 참조) | **X** |  |  |
| 프로젝트 보드 만들기("[조직에 대한 프로젝트 보드 권한](/articles/project-board-permissions-for-an-organization)" 참조) | **X** | **X** | **X** |
| 공개 팀 토론 보기 및 **모든 팀** 에 게시("[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)" 참조) | **X** | **X** | **X**  |
| 비공개 팀 토론 보기 및 **모든 팀** 에 게시("[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)" 참조) | **X** |  |  |
| **모든 팀** 에서 팀 토론 편집 및 삭제(자세한 내용은 "[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments)" 참조) | **X** |  |  |  |
| 커밋, 끌어오기 요청 및 문제에 대한 댓글 숨기기("[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)" 참조) | **X** | **X** | **X**  |
| 조직에 대한 팀 토론 사용 안 함("[조직에 대한 팀 토론 사용 안 함](/articles/disabling-team-discussions-for-your-organization)" 참조) | **X** |  |  |
| **모든 팀** 에서 팀 프로필 사진을 설정("[팀 프로필 사진 설정](/articles/setting-your-team-s-profile-picture)" 참조) | **X** |  |  |{% ifversion ghes %}
| 조직의 리포지토리에서 {% data variables.product.prodname_pages %} 사이트 게시 관리("[조직에 대한 {% data variables.product.prodname_pages %} 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" 참조) | **X** | |  |{% endif %}
| [조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| 조직의 *모든 리포지토리* 끌어오기(읽기) | **X** | | **X** |
| 조직의 *모든 리포지토리* 밀어넣기(쓰기) 및 복제(복사) | **X** | |  |
| 조직 멤버를 [외부 협력자](#outside-collaborators)로 변환 | **X** | |  |
| [조직 리포지토리에 액세스할 수 있는 사용자 보기](/articles/viewing-people-with-access-to-your-repository) | **X** | |  |
| [조직 리포지토리에 액세스할 수 있는 사용자 목록 내보내기](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |  |
| 기본 레이블 관리("[조직의 리포지토리에 대한 기본 레이블 관리](/articles/managing-default-labels-for-repositories-in-your-organization)" 참조) | **X** | |  |{% ifversion pull-request-approval-limit %}
| 조직에서 끌어오기 요청 검토 관리("[조직에서 끌어오기 요청 검토 관리](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)" 참조) | **X** |  | |  |{% endif %}
{% ifversion ghae %}| IP 허용 목록 관리("[엔터프라이즈에 대한 네트워크 트래픽 제한](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |  |{% endif %}

{% else %}
<!-- GHES and GHAE older versions don't have columns for Moderators, Billing managers or Security managers. -->

| 조직 작업 | 소유자 | 멤버 |
|:--------------------|:------:|:-------:|
| 조직에 참가할 사용자 초대 | **X** |  |
| 조직 참가에 대한 초대 편집 및 취소 | **X** |  |
| 조직에서 멤버 제거 | **X** | | |
| 이전 멤버를 조직에 복구 | **X** | | |
| **모든 팀** 에서 사용자 추가 및 제거 | **X** |  |  
| 조직 멤버를 *팀 유지 관리자* 로 승격 | **X** |  |
| 코드 검토 할당 구성("[팀에 대한 코드 검토 설정 관리](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)" 참조) | **X** |  |
| **모든 리포지토리** 에 협력자 추가 | **X** |  |
| 조직 감사 로그에 액세스 | **X** |  |
| 조직의 프로필 페이지 편집("[조직 프로필 정보](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile)" 참조) | **X** |  |  |{% ifversion ghes %}
| 조직의 도메인 확인("[조직의 도메인 확인](/articles/verifying-your-organization-s-domain)" 참조) | **X** |  |
| 이메일 알림을 확인되거나 승인된 도메인으로 제한("[조직에 대한 이메일 알림 제한](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)" 참조) | **X** |  |{% endif %}
| **모든 팀** 삭제 | **X** |  |
| 모든 리포지토리를 포함하여 조직 계정 삭제 | **X** |  |
| 팀 만들기("[조직에서 팀 만들기 권한 설정](/articles/setting-team-creation-permissions-in-your-organization)" 참조) | **X** | **X** |
| 모든 조직 멤버 및 팀 보기 | **X** | **X** |
| @mention 표시되는 팀 | **X** | **X** |
| *팀 유지 관리자* 를 만들 수 있음 | **X** | **X** |
| 리포지토리 전송 | **X** | |
| 조직의 SSH 인증 기관 관리("[조직의 SSH 인증 기관 관리](/articles/managing-your-organizations-ssh-certificate-authorities)" 참조) | **X** |  |
| 프로젝트 보드 만들기("[조직에 대한 프로젝트 보드 권한](/articles/project-board-permissions-for-an-organization)" 참조) | **X** | **X** | |
| 공개 팀 토론 보기 및 **모든 팀** 에 게시("[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)" 참조) | **X** | **X** |  |
| 비공개 팀 토론 보기 및 **모든 팀** 에 게시("[팀 토론 정보](/organizations/collaborating-with-your-team/about-team-discussions)" 참조) | **X** |  |  |
| **모든 팀** 에서 팀 토론 편집 및 삭제(자세한 내용은 "[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments)" 참조) | **X** |  |  |
| 커밋, 끌어오기 요청 및 문제에 대한 댓글 숨기기("[문제성 댓글 관리](/communities/moderating-comments-and-conversations/managing-disruptive-comments/#hiding-a-comment)" 참조) | **X** | **X** | **X** |
| 조직에 대한 팀 토론 사용 안 함("[조직에 대한 팀 토론 사용 안 함](/articles/disabling-team-discussions-for-your-organization)" 참조) | **X** |  |  |
| **모든 팀** 에서 팀 프로필 사진을 설정("[팀 프로필 사진 설정](/articles/setting-your-team-s-profile-picture)" 참조) | **X** |  |  |{% ifversion ghes %}
| 조직의 리포지토리에서 {% data variables.product.prodname_pages %} 사이트 게시 관리("[조직에 대한 {% data variables.product.prodname_pages %} 사이트 게시 관리](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)" 참조) | **X** | |{% endif %}
| [조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy) | **X** | | |
| 조직의 *모든 리포지토리* 끌어오기(읽기), 밀어넣기(쓰기) 및 복제(복사) | **X** | |
| 조직 멤버를 [외부 협력자](#outside-collaborators)로 변환 | **X** | |
| [조직 리포지토리에 액세스할 수 있는 사용자 보기](/articles/viewing-people-with-access-to-your-repository) | **X** | |
| [조직 리포지토리에 액세스할 수 있는 사용자 목록 내보내기](/articles/viewing-people-with-access-to-your-repository/#exporting-a-list-of-people-with-access-to-your-repository) | **X** | |
| 기본 레이블 관리("[조직의 리포지토리에 대한 기본 레이블 관리](/articles/managing-default-labels-for-repositories-in-your-organization)" 참조) | **X** | |
{% ifversion ghae %}| IP 허용 목록 관리("[엔터프라이즈에 대한 네트워크 트래픽 제한](/admin/configuration/restricting-network-traffic-to-your-enterprise)") | **X** | |{% endif %}

{% endif %}

## 추가 참고 자료

- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
- “[조직의 프로젝트 보드 권한](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)”
