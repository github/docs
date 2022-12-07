---
title: LDAP
intro: 'LDAP API를 사용하여 {% data variables.product.product_name %} 사용자 또는 팀과 연결된 LDAP 항목 또는 새 동기화 큐 간의 계정 관계를 업데이트할 수 있습니다.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f8a78c4f685c516b9fe7c47b28914eedd41710f2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098966'
---
LDAP 매핑 엔드포인트를 사용하면 사용자 또는 팀이 매핑하는 DN(고유 이름)을 업데이트할 수 있습니다. LDAP 엔드포인트는 {% data variables.product.product_name %} 어플라이언스가 [LDAP 동기화를 사용하도록 설정된](/enterprise/admin/authentication/using-ldap) 경우에만 일반적으로 유효합니다. [사용자에 대한 LDAP 매핑 업데이트](#update-ldap-mapping-for-a-user) 엔드포인트는 LDAP 동기화가 사용하지 않도록 설정된 경우에도 LDAP를 사용할 때 사용할 수 있습니다.

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}
