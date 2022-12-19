---
ms.openlocfilehash: 8adf896da9e4748cfaa5d0d0562172af14264f97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138776"
---
버전 업데이트를 처음 사용하면 오래된 종속성이 많을 수 있으며 일부 종속성은 최신 버전보다 많이 이전 버전일 수 있습니다. 사용하면 {% data variables.product.prodname_dependabot %}은 즉시 오래된 종속성을 확인합니다. 업데이트를 구성하는 매니페스트 파일의 수에 따라 구성 파일을 추가한 후 몇 분 내에 버전 업데이트에 대한 새 끌어오기 요청이 표시될 수 있습니다. {% data variables.product.prodname_dependabot %}은 구성 파일의 후속 변경 내용에 대한 업데이트도 실행합니다.

업데이트가 실패한 후 매니페스트 파일을 변경할 때 {% data variables.product.prodname_dependabot %}이 끌어오기 요청을 만들 수도 있습니다. 이는 업데이트 실패를 초래한 종속성 제거와 같은 매니페스트 변경으로 인해 새로 트리거된 업데이트가 성공할 수 있기 때문입니다.

끌어오기 요청을 관리하기 쉽고 검토하기 쉽도록 {% data variables.product.prodname_dependabot %}은 최대 5개의 끌어오기 요청을 발생시키고 종속성을 최신 버전으로 가져오기 시작합니다. 다음으로 예약된 업데이트 전에 첫 번째 끌어오기 요청 중 일부를 병합하는 경우 다음 업데이트에서 나머지 끌어오기 요청이 최대치까지 열립니다. [`open-pull-requests-limit` 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)을 설정하여 열려 있는 끌어오기 요청의 최대 수를 변경할 수 있습니다.
