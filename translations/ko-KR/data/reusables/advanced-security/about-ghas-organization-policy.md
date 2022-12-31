---
ms.openlocfilehash: 4bc89b700a85a017fb789b9481606931365268ab
ms.sourcegitcommit: 605b619588c51336f3ffe9d13c68503ae45cbfc6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: "148013837"
---
{% ifversion fpt 또는 ghec 또는 ghes %} {% 데이터 variables.product.company_short %}은(는) {% 데이터 variables.product.prodname_advanced_security %}에 대한 요금을 커밋자 단위로 청구합니다. 자세한 내용은 "[{% 데이터 variables.product.prodname_GH_advanced_security %}에 대한 라이선스 관리](/billing/managing-licensing-for-github-advanced-security)"를 참조하세요. {% elsif ghes %} 자세한 내용은 "[엔터프라이즈에 대한 {% 데이터 variables.product.prodname_GH_advanced_security %} 관리](/admin/advanced-security)"를 참조하세요. {% endif %}

리포지토리 관리자가 조직의 리포지토리에서 {% data variables.product.prodname_advanced_security %}에 대한 기능을 사용하도록 설정할 수 있는지 여부를 제어하는 정책을 적용할 수 있습니다. 엔터프라이즈 계정이 소유한 모든 조직 또는 선택한 개별 조직에 대해 정책을 구성할 수 있습니다.

조직에 대해 {% data variables.product.prodname_advanced_security %}를 허용하지 않으면 리포지토리 관리자가 추가 리포지토리에 대해 {% data variables.product.prodname_advanced_security %} 기능을 사용하도록 설정할 수 없지만 기능이 이미 활성화된 리포지토리의 기능을 사용하지 않도록 설정하지는 않습니다. {% data variables.product.prodname_advanced_security %} 기능의 구성에 대한 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)” 또는 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.
