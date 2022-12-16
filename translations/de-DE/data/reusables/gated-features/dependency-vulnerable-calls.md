---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145102011"
---
{%- ifversion fpt %} Die Erkennung anfälliger Aufrufe ist für öffentliche Repositorys aktiviert. Diese Analyse ist auch in privaten Repositorys verfügbar, die Organisationen gehören, die {% data variables.product.prodname_ghe_cloud %} verwenden und über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen.

{%- elsif ghec %} Die Erkennung von anfälligen Aufrufen ist in {% data variables.product.product_name %} für öffentliche Repositorys enthalten. Um anfällige Aufrufe in privaten Repositorys von Organisationen zu erkennen, muss deine Organisation über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen.

{%- elsif ghes > 3.5 %} Die Erkennung anfälliger Aufrufe ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar. Dieses Feature erfordert eine Lizenz für {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae-issue-6076 %} Die Erkennung anfälliger Aufrufe ist für organisationseigene Repositorys in {% data variables.product.product_name %} verfügbar. Dies ist ein {% data variables.product.prodname_GH_advanced_security %}-Feature (kostenlos während der Betaphase).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
