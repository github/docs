---
ms.openlocfilehash: e264eacc4226a90eb80980c2b19f48dc7c1889c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879571"
---
작업에 대한 자체 호스팅 실행기를 지정하려면 자체 호스팅 실행기 레이블을 사용하여 워크플로 파일에서 `runs-on`을 구성합니다.

모든 자체 호스팅 실행기에는 `self-hosted` 레이블이 있습니다. 이 레이블만 사용하면 자체 호스팅 실행기가 선택됩니다. 운영 체제 또는 아키텍처와 같은 특정 조건을 충족하는 실행기를 선택하려면 `self-hosted`(먼저 나열되어야 함)로 시작하고 필요에 따라 추가 레이블을 포함하는 레이블 배열을 제공하는 것이 좋습니다. 레이블 배열을 지정하면 지정한 모든 레이블이 있는 실행기에서 작업이 큐에 대기됩니다.

`self-hosted` 레이블이 필요하지는 않지만 자체 호스팅 실행기를 사용할 때 이 레이블을 지정하여 작업이 의도치 않게 현재 또는 미래의 {% data variables.product.prodname_dotcom %} 호스팅 실행기를 지정하지 않도록 하는 것이 좋습니다.
