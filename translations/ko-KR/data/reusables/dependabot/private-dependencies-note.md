---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145138744"
---
보안 또는 버전 업데이트를 실행할 때 일부 에코시스템은 원본의 모든 종속성을 확인하여 업데이트에 성공했는지 확인할 수 있어야 합니다. 매니페스트 또는 잠금 파일에 프라이빗 종속성이 포함된 경우 {% data variables.product.prodname_dependabot %}은 해당 종속성이 호스트된 위치에 액세스할 수 있어야 합니다. 조직 소유자는 동일한 조직 내 프로젝트의 종속성이 포함된 프라이빗 리포지토리에 대한 액세스 권한을 {% data variables.product.prodname_dependabot %}에 부여할 수 있습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)”를 참조하세요. 리포지토리의 _dependabot.yml_ 구성 파일에서 프라이빗 레지스트리에 대한 액세스를 구성할 수 있습니다. 자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)”을 참조하세요.
