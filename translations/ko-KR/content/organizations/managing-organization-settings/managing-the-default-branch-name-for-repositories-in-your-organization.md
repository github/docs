---
title: 조직의 리포지토리에 대한 기본 분기 이름 관리
intro: '{% 데이터 variables.location.product_location %}에서 구성원이 조직에서 만드는 리포지토리의 기본 분기 이름을 설정할 수 있습니다.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
ms.openlocfilehash: 8919fa3b2aa512f97e81393a7f311b0677436f43
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098040'
---
## About the default branch name

조직의 구성원이 조직에 새 리포지토리를 만들 때 리포지토리에는 기본 분기인 분기 하나가 포함됩니다. 조직의 멤버가 만드는 새 리포지토리의 기본 분기에 {% data variables.product.product_name %}가 사용하는 이름을 변경할 수 있습니다. 기본 분기에 대한 자세한 내용은 “[분기 정보](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”를 참조하세요.

{% data reusables.branches.change-default-branch %}

엔터프라이즈 소유자가 엔터프라이즈의 기본 분기 이름에 대한 정책을 적용한 경우 조직의 기본 분기 이름을 설정할 수 없습니다. 대신 개별 리포지토리의 기본 분기를 변경할 수 있습니다. 자세한 내용은 {% ifversion fpt %}“[엔터프라이즈에서 리포지토리 관리 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)”{% else %}“[엔터프라이즈에서 리포지토리 관리 정책 적용](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name)”{% endif %} 및 “[기본 분기 변경](/github/administering-a-repository/changing-the-default-branch)”을 참조하세요.

## 기본 분기 이름 설정

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
3. “리포지토리 기본 분기”에서 **지금 기본 분기 이름 변경** 을 클릭합니다.
    ![재정의 단추](/assets/images/help/organizations/repo-default-name-button.png)
4. 새 분기에 사용하려는 기본 이름을 입력합니다.
    ![기본 이름을 입력하기 위한 텍스트 상자](/assets/images/help/organizations/repo-default-name-text.png)
5. **업데이트** 를 클릭합니다.
    ![업데이트 단추](/assets/images/help/organizations/repo-default-name-update.png)

## 추가 참고 자료

- “[리포지토리의 기본 분기 이름 관리](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)”
