---
ms.openlocfilehash: c47a4efc23963dcfa0be69207387cd2d02704aef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878857"
---
리포지토리에 {% data variables.product.prodname_advanced_security %}를 사용하거나 사용하지 않도록 설정하면 {% data variables.product.prodname_dotcom %}에 라이선스 사용에 대한 변경 내용의 개요가 표시됩니다. {% data variables.product.prodname_GH_advanced_security %}에 대한 액세스를 사용하지 않도록 설정하면 “고유한” 커밋자가 사용하는 모든 시트가 해제됩니다.

라이선스 제한을 초과하더라도 {% data variables.product.prodname_GH_advanced_security %}는 이미 사용하도록 설정된 모든 리포지토리에서 계속 작동합니다. 그러나 {% data variables.product.prodname_GH_advanced_security %}를 새 리포지토리에 사용하도록 설정한 조직에서는 기능을 사용하지 않도록 설정하면 리포지토리가 만들어집니다. 또한 기존 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정하는 옵션은 사용할 수 없습니다.{% ifversion fpt or ghec %} 퍼블릭 리포지토리의 표시 여부를 프라이빗으로 변경하면 해당 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}가 비활성화됩니다.{% endif %}

일부 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %}를 사용하지 않도록 설정하거나 라이선스 크기를 늘려 일부 시트를 확보하면 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정하는 옵션이 정상적으로 다시 작동합니다.
