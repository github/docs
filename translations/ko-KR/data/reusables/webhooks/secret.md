---
ms.openlocfilehash: 3dcfb143f7ac70db7c1a197304c83a5b75642749
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878529"
---
웹후크 비밀을 설정하면 페이로드 URL로 전송된 `POST` 요청이 {% data variables.product.product_name %}에서 전송되었는지 확인할 수 있습니다. 비밀을 설정하면 웹후크 `POST` 요청에서 {% ifversion fpt or ghes or ghec %}`X-Hub-Signature` 및 `X-Hub-Signature-256` 헤더{% elsif ghae %}`X-Hub-Signature-256` 헤더{% endif %}를 받게 됩니다. 서명 헤더가 있는 비밀을 사용하여 웹후크 페이로드를 보호하는 방법에 대한 자세한 내용은 “[웹후크 보안](/webhooks/securing/)”을 참조하세요.
