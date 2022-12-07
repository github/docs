---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062974"
---
{%- ifversion fpt %} Abhängigkeitsreviews sind für öffentliche Repositorys aktiviert. Abhängigkeitsreviews sind auch in privaten Repositorys im Besitz von Organisationen verfügbar, die {% data variables.product.prodname_ghe_cloud %} verwenden und über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen.

{%- elsif ghec %} Abhängigkeitsreviews sind in {% data variables.product.product_name %} für öffentliche Repositorys enthalten. Um Abhängigkeitsreviews in privaten Repositorys zu verwenden, die sich im Besitz von Organisationen befinden, musst du über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen.

{%- elsif ghes %} Abhängigkeitsreviews sind für Repositorys im Besitz von Organisationen in {% data variables.product.product_name %} verfügbar. Dieses Feature erfordert eine Lizenz für {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} Abhängigkeitsreviews sind für Repositorys im Besitz von Organisationen in {% data variables.product.product_name %} verfügbar. Dies ist ein {% data variables.product.prodname_GH_advanced_security %}-Feature (kostenlos während der Betaphase).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
