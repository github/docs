---
ms.openlocfilehash: 0ea67362c541ed183fec256765d5bb9d1fd18e3c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109353"
---
{%- ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} ist für alle öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %} verfügbar. {% data variables.product.prodname_code_scanning_capc %} ist auch für private organisationseigene Repositorys verfügbar, die {% data variables.product.prodname_ghe_cloud %} nutzen und im Besitz einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} sind.

{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} ist für alle öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %} verfügbar. Zur Verwendung von {% data variables.product.prodname_code_scanning %} in einem privaten organisationseigenen Repository musst du über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen.

{%- elsif ghes %} {% data variables.product.prodname_code_scanning_capc %} ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar. Dieses Feature erfordert eine Lizenz für {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} {% data variables.product.prodname_code_scanning_capc %} ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar. Dies ist ein {% data variables.product.prodname_GH_advanced_security %}-Feature (kostenlos während der Betaphase).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
