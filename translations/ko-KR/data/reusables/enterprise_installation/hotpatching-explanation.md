---
ms.openlocfilehash: ce812488ecd4946b03d1a89e87c7d664b8b2d833
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148094083"
---
핫패치를 사용하여 {% 데이터 variables.product.prodname_ghe_server %}을(를) 최신 패치 릴리스로 업그레이드할 수 있습니다.

핫패칭을 사용하여 최신 패치 릴리스로 업그레이드할 수 있지만 기능 릴리스는 업그레이드할 수 없습니다. 예를 들어 `2.10.1`에서 `2.10.5`로 업그레이드는 동일한 기능 시리즈에 있으므로 가능하지만 `2.10.9`에서 `2.11.0`으로 업그레이드는 다른 기능 시리즈에 있으므로 불가능합니다.

핫패치는 일반적으로 재부팅이 필요하지 않습니다. 핫패치에 재부팅이 필요한 경우 {% 데이터 variables.product.product_name %} 릴리스 정보는 요구 사항을 나타냅니다.

핫패치에는 구성 실행이 필요하므로 {% 데이터 variables.location.product_location %}의 일부 또는 모든 서비스에 대해 짧은 기간 동안 오류가 발생하거나 응답하지 않습니다. 핫패치를 설치하는 동안 유지 관리 모드를 사용하도록 설정할 필요는 없지만 이렇게 하면 오류 또는 시간 제한 대신 유지 관리 페이지가 표시됩니다. 자세한 내용은 “[유지 관리 모드 사용 및 예약](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)”을 참조하세요.
