---
title: Codespaces에 대한 포트 전달 문제 해결
intro: 공통 포트 전달 문제에 대한 문제 해결 단계입니다.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Port forwarding
ms.openlocfilehash: 3b4a8af53b7c4ab28f30ed3c8b4b73c45c6a47e6
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090377"
---
codespace 내에서 실행되는 애플리케이션이 포트를 콘솔에 출력하면 {% data variables.product.prodname_codespaces %}이(가) localhost URL 패턴을 검색하고 포트를 자동으로 전달합니다. 자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요.

포트가 자동으로 전달되지 않으면 수동으로 전달할 수 있습니다. 자세한 내용은 “[포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)”을 참조하세요.

포트 전달이 설정된 경우 다음을 확인합니다.

- 알림을 사용하거나 터미널에서 URL을 클릭하여 전달된 포트를 엽니다. 브라우저를 통해 codespace에 연결된 경우 예를 들어 로컬 머신에 `localhost:8000`을 입력하면 작동하지 않습니다.
- 애플리케이션이 codespace 내에서 계속 실행되고 있는지 확인합니다. 비활성 기간 후에 codespace가 중지된 경우 codespace가 다시 시작되면 애플리케이션을 다시 시작해야 합니다.

일반적으로 전달된 포트를 공개적으로 또는 리포지토리를 소유한 조직 내에서 액세스할 수 있도록 만들 수 있습니다. 자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요. 퍼블릭 또는 조직 표시 여부에 대한 옵션 중 하나 또는 둘 다를 사용할 수 없는 경우 이는 조직 수준 정책이 구성되었음을 나타냅니다. 자세한 내용은 “[전달된 포트의 표시 여부 제한](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)”을 참조하세요.
