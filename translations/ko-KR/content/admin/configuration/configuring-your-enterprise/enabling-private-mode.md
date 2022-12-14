---
title: 프라이빗 모드 사용 설정
intro: '프라이빗 모드에서 {% data variables.product.prodname_ghe_server %}를 사용하려면 모든 사용자가 로그인하여 설치에 액세스해야 합니다.'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 865c446155dc184269ed8a0b6c1161ba7e6eed5d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097817'
---
{% 데이터 variables.location.product_location %}이(가) 인터넷을 통해 공개적으로 액세스할 수 있는 경우 프라이빗 모드를 사용하도록 설정해야 합니다. 프라이빗 모드에서는 사용자가 `git://`을 통해 리포지토리를 익명으로 복제할 수 없습니다. 기본 제공 인증도 사용 설정된 경우 관리자는 새 사용자를 초대하여 인스턴스에 계정을 만들어야 합니다. 자세한 내용은 "[기본 제공 인증 구성](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)"을 참조하세요.

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

프라이빗 모드를 사용하도록 설정하면 인증되지 않은 Git 작업(및 {% 데이터 variables.location.product_location %}에 대한 네트워크 액세스 권한이 있는 모든 사용자)이 익명 Git 읽기 액세스를 사용하도록 설정된 인스턴스에서 공용 리포지토리의 코드를 읽도록 허용할 수 있습니다. 자세한 내용은 “[관리자가 퍼블릭 리포지토리에 대한 익명 Git 읽기 액세스를 활성화할 수 있도록 허용](/enterprise/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)”을 참조하세요.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
4. **프라이빗 모드** 를 선택합니다.
  ![프라이빗 모드를 사용 설정하기 위한 확인란](/assets/images/enterprise/management-console/private-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
