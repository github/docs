---
ms.openlocfilehash: 91884dc1aa5c5b0b3d32593edfb1927e6c75592f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145110833"
---
{%- ifversion fpt %} La detección de llamadas vulnerables está habilitada en los repositorios públicos. Este análisis también se encuentra disponible en los repositorios privados pertenecientes a organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y que tienen una licencia para {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %} La detección de llamadas vulnerables se incluye en {% data variables.product.product_name %} para los repositorios públicos. Para detectar llamadas vulnerables en los repositorios privados que pertenecen a las organizaciones, tu organización debe tener una licencia para {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes > 3.5 %} La detección de llamadas vulnerables está disponible para los repositorios que pertenecen a organizaciones en {% data variables.product.product_name %}. Esta característica requiere una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae-issue-6076 %} La detección de llamadas vulnerables está disponible para los repositorios que pertenecen a organizaciones en {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
