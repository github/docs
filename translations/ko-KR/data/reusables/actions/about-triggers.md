---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114887"
---
워크플로 트리거는 워크플로를 실행하게 하는 이벤트입니다. 해당 이벤트는 다음과 같습니다.

- 워크플로의 리포지토리에서 발생하는 이벤트
- {% data variables.product.product_name %} 외부에서 발생하고 {% data variables.product.product_name %}에서 `repository_dispatch` 이벤트를 트리거하는 이벤트
- 예약된 시간
- 설명서

예를 들어 리포지토리의 기본 분기로 푸시되거나, 릴리스가 생성되거나, 이슈가 열리면 실행되도록 워크플로를 구성할 수 있습니다.
