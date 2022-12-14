---
title: 처음부터 새 조직 만들기
intro: 리포지토리에 세분화된 액세스 권한을 적용하는 조직을 만듭니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - Organizations
  - Teams
shortTitle: Create new organization
ms.openlocfilehash: d9443aa84964fcc1202fee41d95800cf8e9ccd4c
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878791'
---
처음부터 새 조직을 만들 때는 연결된 리포지토리가 없습니다. 조직에 리포지토리를 추가하는 방법에 대한 자세한 내용은 “[새 리포지토리 만들기](/articles/creating-a-new-repository)” 및 “[리포지토리 전송](/articles/transferring-a-repository)”을 참조하세요.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. 프롬프트에 따라 조직을 만듭니다. {% ifversion fpt or ghec %}팀에서 사용 가능한 플랜에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 제품](/articles/githubs-products)”을 참조하세요.{% endif %}

## 추가 참고 자료

{% ifversion fpt or ghec %}
- “[청구 메일 설정](/articles/setting-your-billing-email)”{% endif %}
- “[조직 정보](/articles/about-organizations)”
