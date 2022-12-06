---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113740"
---
### 사용자에 따라 검색

`actor` 한정자는 작업을 수행한 사람에 따라 이벤트의 범위를 지정할 수 있습니다. 예를 들면 다음과 같습니다.

  * `actor:octocat`는 `octocat`에서 수행하는 모든 이벤트를 찾습니다.
  * `actor:octocat actor:hubot`은 `octocat` 및 `hubot`에서 수행하는 모든 이벤트를 찾습니다.
  * `-actor:hubot`은 `hubot`에서 수행하는 모든 이벤트를 제외합니다.

{% data variables.product.product_name %} 사용자 이름만 사용할 수 있으며 개인의 실명은 사용할 수 없습니다.
