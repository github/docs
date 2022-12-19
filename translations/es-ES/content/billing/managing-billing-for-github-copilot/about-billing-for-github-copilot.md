---
title: Acerca de la facturación de GitHub Copilot
intro: 'Si quieres usar {% data variables.product.prodname_copilot %}, necesitas una suscripción para {% data variables.product.prodname_copilot_for_individuals %} en tu cuenta personal o bien necesitas que una organización en {% data variables.product.prodname_ghe_cloud %} con una suscripción para {% data variables.product.prodname_copilot_for_business %} te asigne un puesto.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193434'
---
## Acerca de la facturación para {% data variables.product.prodname_copilot %}

Si quieres usar {% data variables.product.prodname_copilot %}, necesitarás una suscripción para tu cuenta personal de {% data variables.product.prodname_dotcom %} o, si eres miembro de una organización de {% data variables.product.prodname_ghe_cloud %} con una suscripción de {% data variables.product.prodname_copilot_business_short %}, necesitarás que un administrador de la organización te asigne un puesto. Para obtener más información acerca de {% data variables.product.prodname_copilot %}, consulta "[Acerca de {% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot)". 

Para obtener más información sobre la administración de {% data variables.product.prodname_copilot %} mediante {% data variables.product.prodname_ghe_cloud %}, consulta "[Aplicación de políticas para {% data variables.product.prodname_copilot %} en la empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}.{% endif %}"{% ifversion fpt %} en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% endif %}

Antes de iniciar una suscripción de pago para una cuenta personal, puedes configurar una prueba de 60 días para evaluar {% data variables.product.prodname_copilot %}. Para empezar una prueba, deberás elegir un ciclo de facturación mensual o anual, y proporcionar un método de pago. Si no cancelas la prueba antes de que finalice el plazo de 60 días, esta se convertirá automáticamente en una suscripción de pago. Puedes cancelar la prueba de {% data variables.product.prodname_copilot %} en cualquier momento durante los 60 días y no se te cobrará. Si cancelas antes del final de la prueba, seguirás teniendo acceso a {% data variables.product.prodname_copilot %} hasta que finalice el periodo de prueba de 60 días. Para obtener más información, consulta "[Administración de la suscripción de {% data variables.product.prodname_copilot_for_individuals %}](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription)".

## Precios de {% data variables.product.prodname_copilot_for_individuals %}


La suscripción de {% data variables.product.prodname_copilot %} está disponible en un ciclo mensual o anual. Si eliges un período de facturación mensual, se te facturarán 10 USD por mes natural. Si eliges un período de facturación anual, se te facturarán 100 USD al año. Puedes modificar el período de facturación en cualquier momento y la modificación se reflejará desde el inicio del siguiente período de facturación.

Si tienes una suscripción de {% data variables.product.prodname_copilot %} activa y, posteriormente, se te asigna un puesto como parte de una suscripción de {% data variables.product.prodname_copilot_for_business %} en {% data variables.product.prodname_ghe_cloud %}, tu suscripción personal de {% data variables.product.prodname_copilot %} se cancelará automáticamente. Recibirás un reembolso prorrateado por la parte restante del período de facturación actual de la suscripción personal. A continuación, podrás seguir usando {% data variables.product.prodname_copilot %} según las políticas establecidas en el nivel de la empresa o la organización.

Hay disponible una suscripción gratuita de {% data variables.product.prodname_copilot %} para alumnos verificados, profesores y responsables de mantener los repositorios populares de código abierto en {% data variables.product.company_short %}. Si cumples los criterios como responsable de mantener el código abierto, se te notificará automáticamente cuando visites la página de suscripción de {% data variables.product.prodname_copilot %}. Como alumno, si actualmente recibes el {% data variables.product.prodname_student_pack %}, también se te ofrecerá una suscripción gratuita cuando visites la página de suscripción de {% data variables.product.prodname_copilot %}. Para obtener más información sobre el {% data variables.product.prodname_student_pack %}, consulta «[Solicitar acceso al {% data variables.product.prodname_global_campus %} como alumno](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)».

{% ifversion ghec %}
## Precios de {% data variables.product.prodname_copilot_for_business %}

La suscripción de {% data variables.product.prodname_copilot_for_business %} está disponible en un período mensual y tiene un costo de 19 USD por usuario al mes. La facturación de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_ghe_cloud %} se procesa al final de cada período de facturación. 

Los usuarios facturados se calculan en función del número de puestos de {% data variables.product.prodname_copilot %} asignados al principio de un período de facturación o asignados durante el período de facturación. Cualquier puesto asignado a la mitad del período de facturación se prorrateará en función del número de días restantes del período. Cualquier asignación de puestos eliminada durante un período de facturación surtirá efecto desde el principio del período siguiente.

La asignación de puestos de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_ghe_cloud %} se administra mediante administradores de organizaciones a los que se ha concedido acceso a {% data variables.product.prodname_copilot %} en el nivel empresarial. Si eres miembro de varias organizaciones de la misma empresa, se te pueden asignar puestos de {% data variables.product.prodname_copilot %} en más de una organización, pero la empresa solo se facturará una vez. Para obtener más información, consulta "[Configuración de {% data variables.product.prodname_copilot %} en la organización](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)".

La configuración de directiva y la información general de utilización de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_ghe_cloud %} están disponibles en el nivel empresarial. Para obtener más información, consulta "[Aplicación de directivas para {% data variables.product.prodname_copilot %} en la empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)" y "[Visualización de la utilización de {% data variables.product.prodname_copilot %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage)".

{% endif %}
