---
title: 팀 동기화
intro: '팀 동기화 API를 사용하면 {% data variables.product.product_name %} 팀과 외부 IdP(ID 공급자) 그룹 간의 연결을 관리할 수 있습니다.'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3b445a8f3d608fa743ef9b6c0bc0bd980194be9e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099109'
---
## 팀 동기화 API 정보

이 API를 사용하려면 인증된 사용자가 팀 유지 관리자이거나 팀과 연결된 조직의 소유자여야 합니다. 인증에 사용하는 토큰도 IdP(SSO) 공급자와 함께 사용할 수 있는 권한을 부여받아야 합니다. 자세한 내용은 "[SAML Single Sign-On 조직에서 사용할 {% 데이터 variables.product.pat_generic %}에 대한 권한 부여](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)"를 참조하세요.

팀 동기화를 사용하여 IdP를 통해 GitHub 팀 구성원을 관리할 수 있습니다. 팀 동기화 API를 사용하려면 팀 동기화를 사용하도록 설정해야 합니다. 자세한 내용은 “[ID 공급자와 GitHub 간에 팀 동기화](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”를 참조하세요.

{% note %}

**참고:** 팀 동기화 API는 {% data variables.product.prodname_emus %}와 함께 사용할 수 없습니다. {% 데이터 variables.enterprise.prodname_emu_org %}을(를) 관리하는 방법에 대한 자세한 내용은 "[외부 그룹 API](/enterprise-cloud@latest/rest/reference/teams#external-groups)"를 참조하세요.

{% endnote %}
