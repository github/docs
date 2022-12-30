---
ms.openlocfilehash: 0ea67362c541ed183fec256765d5bb9d1fd18e3c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109352"
---
{%- ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} доступно во всех открытых репозиториях на {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_code_scanning_capc %} также доступно в частных репозиториях, принадлежащих организациям, которые используют {% data variables.product.prodname_ghe_cloud %} и имеют лицензию на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} доступно во всех открытых репозиториях на {% data variables.product.prodname_dotcom_the_website %}. Чтобы использовать {% data variables.product.prodname_code_scanning %} в частном репозитории, принадлежащем организации, необходима лицензия на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %} {% data variables.product.prodname_code_scanning_capc %} доступно в репозиториях, принадлежащих организациям, в {% data variables.product.product_name %}. Для этой функции требуется лицензия на {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_code_scanning_capc %} доступно в репозиториях, принадлежащих организациям, в {% data variables.product.product_name %}. Это функция входит в состав {% data variables.product.prodname_GH_advanced_security %} (на этапе бета-версии предоставляется бесплатно).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
