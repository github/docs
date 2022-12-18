---
ms.openlocfilehash: 7b5452bfa6c1045b67060a24acdb2875d4266242
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109744"
---
{%- ifversion fpt or ghec or ghes > 3.6 %} 14일 넘게 {% data variables.product.prodname_actions %}에 연결되지 않은 경우 자체 호스트 실행기는 {% data variables.product.product_name %}에서 자동으로 제거됩니다.  
1일 넘게 {% data variables.product.prodname_actions %}에 연결되지 않은 경우 임시 자체 호스트 실행기는 {% data variables.product.product_name %}에서 자동으로 제거됩니다.  
{%- elsif ghae or ghes < 3.7 %} 30일 넘게 {% data variables.product.prodname_actions %}에 연결되지 않은 경우 자체 호스트 실행기는 {% data variables.product.product_name %}에서 자동으로 제거됩니다.  
{%- endif %}
