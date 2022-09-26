---
ms.openlocfilehash: 285d547af855fed298354ee62716de9e6c168608
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062982"
---
{%- ifversion fpt %} La revisión de dependencias está habilitada en los repositorios públicos. La revisión de dependencias también se encuentra disponible en los repositorios privados que pertenezcan a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y que tienen una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} La revisión de dependencias se incluye en {% data variables.product.product_name %} para los repositorios públicos. Para utilizar la revisión de dependencias en los repositorios privados que pertenecen a las organizaciones, debes tener una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %} La revisión de dependencias está disponible para los repositorios que pertenecen a organizaciones en {% data variables.product.product_name %}. Esta característica requiere una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %} La revisión de dependencias está disponible para los repositorios que pertenecen a organizaciones en {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
