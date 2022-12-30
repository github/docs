---
ms.openlocfilehash: 9007a7541d3ee57656a975af1bf430673c796d09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145121460"
---
apex 도메인을 사용자 지정 도메인으로 사용하는 경우 `www` 하위 도메인도 설정하는 것이 좋습니다. DNS 공급자를 통해 각 도메인 유형에 대해 올바른 레코드를 구성하는 경우 {% data variables.product.prodname_pages %}는 도메인 간에 리디렉션을 자동으로 만듭니다. 예를 들어 `www.example.com`을 사이트의 사용자 지정 도메인으로 구성하고 apex 및 `www` 도메인에 대해 설정된 {% data variables.product.prodname_pages %} DNS 레코드가 있는 경우 `example.com`은 `www.example.com`으로 리디렉션됩니다. 자동 리디렉션은 `www` 하위 도메인에만 적용됩니다. 자동 리디렉션은 다른 하위 도메인(예: `blog`)에 적용되지 않습니다.
