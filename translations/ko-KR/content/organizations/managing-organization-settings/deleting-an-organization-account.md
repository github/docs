---
title: 조직 계정 삭제
intro: '조직을 삭제하면 모든 리포지토리, 프라이빗 리포지토리의 포크, wiki, 문제, 끌어오기 요청, 프로젝트 또는 조직 페이지도 삭제됩니다. {% ifversion fpt or ghec %}청구가 종료되고 90일이 지나면 새 사용자 또는 조직 계정에서 조직 이름을 사용할 수 있습니다.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
ms.openlocfilehash: 3d01844cca5247bf9f2704832632bbbe814150ed
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098526'
---
{% ifversion fpt or ghec %} {% tip %}

**팁**: 유료 구독을 취소하려면 조직 및 콘텐츠를 삭제하는 대신 [조직을 {% data variables.product.prodname_free_team %}(으)로 다운그레이드](/articles/downgrading-your-github-subscription)할 수 있습니다.

{% endtip %}

{% endif %}

## 1. 조직 콘텐츠 백업

{% ifversion not ghes %} 조직을 삭제한 후에는 {% data variables.product.company_short %}에서 **콘텐츠를 복원할 수 없습니다**. 따라서 {% else %}이전{% endif %} 전에 조직을 삭제하려면 계정에서 모든 리포지토리, 위키, 문제, 프로젝트 보드의 복사본이 있는지 확인합니다.

{% ifversion ghes %} {% note %}

**참고:** 필요한 경우 {% 데이터 variables.location.product_location %}의 사이트 관리자가 삭제된 조직을 부분적으로 복원할 수 있습니다. 자세한 내용은 “[삭제된 조직 복원](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)”을 참조하세요.

{% endnote %} {% endif %}

## 2. 조직 삭제

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 조직의 설정 페이지 아래쪽에서 **이 조직 삭제** 를 클릭합니다.
   ![이 조직 삭제 단추](/assets/images/help/settings/settings-organization-delete.png)
