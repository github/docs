---
ms.openlocfilehash: 0d73e17e61dc0848a42a18a7e1811b43e541b6a4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061300"
---
1. “실행기” 아래 목록에서 실행기를 찾습니다. 실행기가 그룹에 있는 경우 {% octicon "chevron-down" aria-label="The downwards chevron" %} 아이콘을 클릭하여 목록을 확장합니다.
1. 제거하려는 실행기 옆에 있는 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭한 다음 **Remove**(제거)를 클릭합니다.

    ![자체 호스팅 실행기 설정 제거](/assets/images/help/settings/actions-runner-remove.png)
1. 자체 호스팅 실행기를 제거하는 지침이 표시됩니다. 여전히 액세스할 수 있는지 여부에 따라 다음 단계 중 하나를 완료하여 실행기를 제거합니다.

    * **실행기 컴퓨터에 액세스할 수 있는 경우:** 컴퓨터 운영 체제의 화면 지침에 따라 제거 명령을 실행합니다. 지침에는 필요한 URL 및 자동으로 생성된 시간 제한 토큰이 포함됩니다.

        제거 명령은 다음 작업을 수행합니다.

        * {% data variables.product.product_name %}에서 실행기를 제거합니다.
        * 컴퓨터에서 자체 호스팅 실행기 애플리케이션 구성 파일을 제거합니다.
        * 대화형 모드에서 실행되지 않는 경우 구성된 서비스를 제거합니다.

    * **컴퓨터에 액세스할 수 없는 경우:** **Yes, force remove this runner**(예, 이 실행기를 강제로 제거합니다)를 클릭하여 {% data variables.product.product_name %}에서 강제로 실행기를 제거합니다.
