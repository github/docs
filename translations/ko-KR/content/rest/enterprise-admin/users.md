---
title: 사용자
intro: '사용자 관리 API를 사용하면 엔터프라이즈에서 사용자를 일시 중단{% ifversion ghes %}, 승격, 강등{% endif %}{% ifversion ghae %}, 일시 중단 해제{% endif %}할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 890ef28e60a890b57434481e2043576ea526cbe2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097830'
---
*[인증된](/rest/overview/resources-in-the-rest-api#authentication) 사이트 관리자만 사용할 수 있습니다.* 일반 사용자가 액세스하려고 하면 `403` 응답을 수신하게 됩니다.

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
