---
ms.openlocfilehash: 744983c086ce7f67bb25cd9508e080ceb12ea517
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123180"
---
고객이 플랜을 업그레이드했는데 결제에 실패한 경우 GitHub에서는 {% data variables.product.prodname_marketplace %} 구독을 이전 상태로 되돌립니다. 또한 GitHub에서는 고객에게 실패를 알리는 메일을 보내고 구매를 다시 시도할 수 있도록 허용합니다. 이전 플랜으로 되돌리도록 요청하는 `changed` 작업이 포함된 웹후크가 수신됩니다.
