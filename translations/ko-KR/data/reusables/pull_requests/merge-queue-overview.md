---
ms.openlocfilehash: 9960ade469b1d52c0f880067e4dd449082b190c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145090896"
---
병합 큐는 모든 필수 분기 보호 검사에 통과하도록 하면서 끌어오기 요청이 사용 중인 대상 분기에 병합되는 속도를 높일 수 있습니다.

끌어오기 요청이 필요한 모든 분기 보호 검사를 통과한 후 리포지토리에 대한 쓰기 액세스 권한이 있는 사용자가 해당 끌어오기 요청을 병합 큐에 추가할 수 있습니다.

병합 큐는 {% data variables.product.prodname_actions %}를 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}](/actions/)”를 참조하세요.
