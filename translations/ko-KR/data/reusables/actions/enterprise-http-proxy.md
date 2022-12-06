---
ms.openlocfilehash: 4efb2b0e214ee93dc8815055b005e11ea29534bb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107679"
---
{% data variables.location.product_location %}에 **구성된 HTTP 프록시 서버** 가 있는 경우:

  - **HTTP 프록시 제외** 목록에 `localhost` 및 `127.0.0.1`을 추가해야 합니다.
  - 외부 스토리지 위치를 라우팅할 수 없는 경우 외부 스토리지 URL도 제외 목록에 추가해야 합니다.

  프록시 설정 변경에 대한 자세한 내용은 “[아웃바운드 웹 프록시 서버 구성](/admin/configuration/configuring-an-outbound-web-proxy-server)”을 참조하세요.
