---
title: Acerca del precio por usuario
intro: '{% ifversion fpt or ghec %}En el caso de las organizaciones{% ifversion ghec %} y las empresas{% endif %}, tu {% else %}Tu {% endif %}factura empieza con el número de puestos con licencia que elijas.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
ms.openlocfilehash: 037e0e0cfbb04552a370cf8fd0f3e05c2e09423f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910842'
---
## Acerca del precio por usuario

{% ifversion fpt %} Las organizaciones nuevas en {% data variables.product.prodname_dotcom_the_website %} pueden crear proyectos públicos y de código abierto con {% data variables.product.prodname_free_team %} o actualizar a un producto de pago con precios por usuario. Para obtener más información, consulte "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" y "[Actualización de la suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

Las organizaciones que usan una suscripción paga antes del 11 de mayo de 2016 pueden elegir permanecer en su plan existente por repositorio o cambiar al precio por usuario. {% data variables.product.company_short %} te notificará doce meses antes de que cualquier cambio a tu suscripción sea obligatorio. Para obtener más información sobre cómo cambiar de suscripción, consulte "[Actualización de la suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% else %}

La base de la factura es el número de puestos con licencia estándar que elijas para tu{% ifversion ghec %} organización o{% endif %} empresa.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

A fin de asegurarte de que el mismo usuario no consume más de una licencia para varias implementaciones empresariales, puedes sincronizar el uso de licencias entre los entornos de {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta "[Acerca de las licencias para GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

Además de los puestos con licencia, la factura puede incluir otros cargos, como {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta "[Acerca de la facturación de la empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".
{% endif %}

## Personas que consumen una licencia

Cada persona consume una licencia y {% data variables.product.company_short %} las identifica por la dirección de correo electrónico principal.

{% data variables.product.company_short %} factura a las siguientes personas.

{%- ifversion ghec %}
- Los propietarios de empresas que son miembros o propietarios de al menos una organización de la empresa {%- endif %}
- Miembros de la organización, incluidos los propietarios
- Colaboradores externos en repositorios privados{% ifversion ghec %} o internos{% endif %} propiedad de su organización, excepto las bifurcaciones
- Cualquier persona con una invitación pendiente para convertirse en propietario o miembro de la organización
- Cualquier persona con una invitación pendiente para convertirse en colaborador externo en repositorios privados{% ifversion ghec %} o internos{% endif %} propiedad de su organización, excepto las bifurcaciones {%- ifversion ghec %}
- Los usuarios de cualquier instancia de {% data variables.product.prodname_ghe_server %} que implementes {%- endif %}
- Usuarios inactivos

{% data variables.product.company_short %} no factura a ninguna de las personas siguientes.

{%- ifversion ghec %}
- Los propietarios de la empresa que no son miembros o propietarios de al menos una organización de la empresa
- Gerentes de facturación de empresas {%- endif %}
- Gerentes de facturación de la organización{% ifversion ghec %} para organizaciones individuales en {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Cualquier persona con una invitación pendiente para convertirse en un gerente de facturación de la organización{% ifversion ghec %} o de la empresa{% endif %}
- Cualquier persona con una invitación pendiente para convertirse en colaborador externo en un repositorio público propiedad de su organización {%- ifversion ghes %}
- Usuarios suspendidos {%- endif %}

{% note %}

**Nota**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}

Para obtener más información, consulta {% ifversion not fpt %}"[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) o {% endif %}"[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data variables.product.company_short %} cuenta cada {% ifversion not fpt %}miembro o {% endif %}colaborador externo una sola vez para propósitos de facturación, incluso si la cuenta de usuario tiene una {% ifversion not fpt %}pertenencia en varias organizaciones dentro de una empresa o {% endif %}acceso a varios repositorios que pertenezcan a tu organización. Para obtener más información sobre los colaboradores externos, consulte "[Agregar colaboradores externos a repositorios de la organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion ghes %}Los usuarios suspendidos no se cuentan a la hora de calcular el número de usuarios con licencia que consumen puestos. Para obtener más información, consulta "[Suspensión y anulación de la suspensión de usuarios](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)".{% endif %}

Los usuarios inactivos ocupan una licencia de puesto.{% ifversion ghes %} Por lo tanto, puedes optar por suspender a los usuarios inactivos para liberar licencias de usuario.{% endif %} Para obtener más información, consulta "[Administración de usuarios inactivos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)".

## Acerca de los cambios a tu suscripción

{% ifversion fpt %}

Puedes cambiar tu suscripción de {% data variables.product.prodname_dotcom %} en cualquier momento.

### Acerca de los cambios para las organizaciones que tienen planes por usuario

{% endif %}

Puedes agregar más puestos con licencia a tu {% ifversion fpt or ghec %} organización {% endif %}{% ifversion ghec %} o{% endif %}{% ifversion ghec or ghes %} empresa{% endif %} en cualquier momento. Si pagas por más puestos de los que se están usando, también puedes reducir el número de puestos.{% ifversion fpt %} Para obtener más información, consulta "[Actualización de la suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" y "[Cambio a una suscripción inferior de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)".

Si tienes dudas sobre tu suscripción, contacta al{% data variables.contact.contact_support %}.

Para reforzar aún más la capacidad de colaboración de tu equipo, puedes mejorar a {% data variables.product.prodname_ghe_cloud %}, que incluye características como el inicio de sesión único de SAML y las auditorías avanzadas. {% data reusables.enterprise.link-to-ghec-trial %}

Para obtener más información sobre los precios por usuario de {% data variables.product.prodname_ghe_cloud %}, consulte [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

Si utilizas una cuenta empresarial de {% data variables.product.prodname_dotcom_the_website %} y tienes dudas sobre los cambios a tu suscripción, contacta a {% data variables.contact.contact_enterprise_sales %}.

{% endif %} {% ifversion ghec %}

Si utilizas una organización individual de {% data variables.product.prodname_ghe_cloud %}, puedes mejorar tu suscripción o bajarla de nivel. Para obtener más información, consulte "[Actualización de la suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) o "[Cambiar a una suscripción inferior de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)". Si tienes dudas sobre tu suscripción, contacta al{% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Acerca de los cambios para las organizaciones con planes por repositorio

Puedes actualizar o bajar de categoría entre planes pagos heredados en los parámetros de facturación de tu organización. Cuando haces la mejora a un plan con más repositorios privados, {% data variables.product.company_short %} inmediatamente mueve tu cuenta a tu plan nuevo y te cobra la diferencia del precio, prorrateado por la cantidad de días restantes en tu ciclo de facturación.

Cuando bajas de categoría a un plan pago heredado con menos repositorios privados, tu nuevo plan entrará en vigencia en tu próxima fecha de facturación. Si tienes más repositorios privados de los que permite tu nuevo plan, tus repositorios privados se bloquearán cuando tu nuevo plan entre en vigencia. Para reducir la cantidad de repositorios privados, puedes hacer que algunos de tus repositorios privados sean públicos o puedes clonar tus repositorios privados localmente y eliminar las copias en {% data variables.product.prodname_dotcom %}.

{% endif %}

## Información adicional

{%- ifversion not fpt %}
- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)" {%- endif %}
- "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
