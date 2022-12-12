---
ms.openlocfilehash: 3e32ef8b3fc53f1818f1d09b8461aa00e50f200c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145110676"
---
<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %} 엔터프라이즈에 {% data variables.product.prodname_GH_advanced_security %}에 대한 라이선스가 있는 경우 {% data variables.product.product_name %}의 조직 소유 리포지토리에서 {% data variables.product.prodname_secret_scanning_GHAS_caps %}를 사용할 수 있습니다.

{%- elsif ghae %} {% data variables.product.prodname_secret_scanning_caps %}는 {% data variables.product.product_name %}의 조직 소유 리포지토리에서 사용할 수 있습니다. 이것은 {% data variables.product.prodname_GH_advanced_security %} 기능입니다(베타 릴리스 중 무료).

{%- endif %} {% ifversion not ghae %}자세한 내용은 “[GitHub 제품](/articles/githubs-products)”을 참조하세요.{% endif %}
