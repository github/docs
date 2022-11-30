---
ms.openlocfilehash: 038896fa537c7cc3ea3fa95e903900a9eb8f3db7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145917063"
---
끌어오기 요청에서 **다시 지정 및 병합** 옵션을 사용하는 경우 커밋 서명 확인 없이 헤드 분기의 커밋이 기본 분기에 추가된다는 점에 유의해야 합니다. 이 옵션을 사용하면 {% data variables.product.prodname_dotcom %}는 원래 커밋의 데이터와 콘텐츠를 사용하여 수정된 커밋을 만듭니다. 즉, {% data variables.product.prodname_dotcom %}는 이 커밋을 실제로 만들지 않았으므로 일반 시스템 사용자로 서명할 수 없습니다. {% data variables.product.prodname_dotcom %}는 커밋자의 프라이빗 서명 키에 액세스할 수 없으므로 사용자를 대신하여 커밋에 서명할 수 없습니다.

이에 대한 해결 방법은 로컬로 다시 지정 및 병합한 다음 변경 내용을 끌어오기 요청의 기본 분기로 푸시하는 것입니다.
