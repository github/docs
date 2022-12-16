---
title: 팀 멤버
allowTitleToDifferFromFilename: true
shortTitle: Members
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9f2e4a1bee298bddf1d1712c78b2bac41f15c27e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879001'
---
## 팀 멤버 API 정보

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %} {% note %}

**참고:** 조직의 IdP(ID 공급자)를 사용하여 팀에 대한 팀 동기화를 설정한 경우 팀 멤버 자격을 변경하는 데 API를 사용하려고 하면 오류가 표시됩니다. IdP에서 그룹 멤버 자격을 관리할 수 있는 액세스 권한이 있는 경우 ID 공급자를 통해 GitHub 팀 멤버 자격을 관리할 수 있습니다. 그러면 조직에서 팀 멤버가 자동으로 추가 및 제거됩니다. 자세한 내용은 “[ID 공급자와 GitHub 간에 팀 동기화](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”를 참조하세요.

{% endnote %}

{% endif %}
