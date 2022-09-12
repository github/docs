---
title: "Acerca de la facturación de GitHub Advanced\_Security"
intro: 'Si quieres utilizar las características de la {% data variables.product.prodname_GH_advanced_security %}{% ifversion fpt or ghec %} en un repositorio privado o interno{% endif %}, necesitas una licencia {% ifversion fpt %} para tu empresa{% endif %}.{% ifversion fpt or ghec %} Estas características se encuentran disponibles de forma gratuita para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
ms.openlocfilehash: 09e7634b5ab0ace00c847f9db9faf229fc8e840e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066934'
---
## Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}

Si quieres utilizar las características de la {% data variables.product.prodname_GH_advanced_security %} en cualquier repositorio diferente de un repositorio público en {% data variables.product.prodname_dotcom_the_website %}, necesitarás una licencia de la {% data variables.product.prodname_GH_advanced_security %}, disponible con {% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %}. Para más información sobre {% data variables.product.prodname_GH_advanced_security %}, vea "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

Para obtener más información sobre la facturación de {% data variables.product.prodname_GH_advanced_security %}, consulta la [documentación {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% elsif ghec %}

Si quieres utilizar las características de la {% data variables.product.prodname_GH_advanced_security %} en cualquier repositorio diferente a los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}, necesitarás una licencia de {% data variables.product.prodname_GH_advanced_security %}. Para más información sobre {% data variables.product.prodname_GH_advanced_security %}, vea "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% elsif ghes %}

Puedes poner a disposición de los usuarios algunas características adicionales para la seguridad de código si compras y cargas una licencia de la {% data variables.product.prodname_GH_advanced_security %}. Para más información sobre {% data variables.product.prodname_GH_advanced_security %}, vea "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.advanced-security.license-overview %}

Para debatir sobre el licenciamiento de {% data variables.product.prodname_GH_advanced_security %} para tu empresa, contacta a {% data variables.contact.contact_enterprise_sales %}.

## Acerca de los números de confirmante para {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-committer-numbers-ghec-ghes %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.advanced-security.managing-license-usage-ghec-ghes %}

{% endif %}

Puedes requerir políticas para permitir o dejar de permitir que las organizaciones que pertenecen a tu cuenta empresarial utilicen la {% data variables.product.prodname_advanced_security %}. Para más información, vea "[Aplicación de directivas para {% data variables.product.prodname_advanced_security %} en la empresa]({% ifversion fpt %}/enterprise-cloud@latest/{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

{% ifversion fpt or ghes or ghec %}

Para más información sobre cómo ver el uso de las licencias, vea "[Visualización del uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% endif %}

## Entender el uso del confirmador activo

La siguiente línea de tiempo de ejemplo demuestra cómo el conteo de confirmador activo para la {% data variables.product.prodname_GH_advanced_security %} podría cambiar con el tiempo en una empresa. Para cada mes, encontrarás eventos junto con el conteo de confirmante resultante.

| Date | Eventos del mes | Confirmantes totales | 
| :- | :- | -: | 
| <nobr>15 de abril</nobr> | Un miembro de la empresa habilita {% data variables.product.prodname_GH_advanced_security %} para el repositorio **X**. El repositorio **X** tiene 50 creadores de confirmaciones en los últimos 90 días. | **50** | 
| <nobr>1 de mayo</nobr> | El desarrollador **A** deja al equipo trabajando en el repositorio **X**. Las contribuciones del desarrollador **A** siguen contando durante 90 días. | **50** | **50** |
| <nobr>1 de agosto</nobr> | Las contribuciones del desarrollador **A** ya no cuentan para las licencias necesarias, porque han transcurrido 90 días. | <sub>_50 - 1_</sub></br>**49** | 
| <nobr>15 de agosto</nobr> | Un miembro de la empresa habilita {% data variables.product.prodname_GH_advanced_security %} para un segundo repositorio, **Y**. En los últimos 90 días, un total de 20 desarrolladores han contribuido a ese repositorio. De esos 20 desarrolladores, 10 también han trabajado en el repositorio **X** y no necesitan licencias adicionales. | <sub>_49 + 10_</sub><br/>**59** | 
| <nobr>16 de agosto</nobr> | Un miembro de la empresa deshabilita {% data variables.product.prodname_GH_advanced_security %} para el repositorio **X**. De los 49 desarrolladores que trabajaban en el repositorio **X**, 10 todavía trabajan en el repositorio **Y**, que tiene un total de 20 desarrolladores que han contribuido en los últimos 90 días. | <sub>_49 - 29_</sub><br/>**20** |

{% note %}

**Nota:** Un usuario se marcará como activo cuando sus confirmaciones se inserten en cualquier rama de un repositorio, incluso si se han creado hace más de 90 días.

{% endnote %}

## Sacar el mayor provecho de la {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.getting-the-most-from-your-license %}

{% endif %}
