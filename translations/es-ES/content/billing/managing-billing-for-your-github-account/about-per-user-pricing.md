---
title: Acerca del precio por usuario
intro: 'Con los cobros por usuario, las organizaciones {% ifversion ghec %}y empresas {% endif %}pagan con base en el tamaño de su equipo para acceder a la colaboración avanzada y herramientas de administración para los equipos y, opcionalmente, a los controles de seguridad, cumplimiento y despliegue.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
---

## Acerca del precio por usuario

Las organizaciones nuevas en {% data variables.product.prodname_dotcom_the_website %} pueden crear proyectos públicos y de código abierto con {% data variables.product.prodname_free_team %} o mejorar a un producto de pago con precios por usuario. Para obtener más información, consulta las secciones "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" y "[Actualizar tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% ifversion ghec %}Los precios por usuario aplican a todas las organizaciones que pertenecen a tu empresa en {% data variables.product.prodname_dotcom_the_website %} y a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %}, las cuales no sean parte de una empresa. Cada{% elsif fpt %}costo por usuario significa que, en cada{% endif %} ciclo de facturación, {% data variables.product.company_short %} cobra por cada miembro o colaborador externo dentro de tu organización{% ifversion ghec %} o empresa{% endif %}. También pagarás por cada miembro pendiente o colaborador externo que aún no haya aceptado una invitación. {% data variables.product.company_short %} no cobra por los miembros con rol de administrador de facturación{% ifversion ghec %} ni por los propietarios de la empresa que no sean también miembros de por lo menos una organización en la empresa{% endif %}. Para obtener más información, consulta la sección {% ifversion ghec %}"[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" o {% endif %}{% ifversion fpt or ghec %}"[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".{% endif %}

{% data variables.product.company_short %} cuenta cada {% ifversion ghec %}miembro o {% endif %}colaborador externo una sola vez para propósitos de facturación, incluso si la persona tiene una {% ifversion ghec %}membrecía en varias organizaciones dentro de una empresa o si tiene {% endif %}acceso a varios repositorios que pertenezcan a tu organización.

Para obtener más información sobre los colaboradores externos, consulta la sección "[Agregar colaboradores externos a los repositorios de tu organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion ghec %}

Si despliegas {% data variables.product.prodname_ghe_server %}, tu uso ya incluirá licencias para cada usuario en tu instancia. Para obtener más información sobre los servicios adicionales y la facturación de {% data variables.product.prodname_ghe_cloud %}, consulta la sección "[Acerca de la facturación para tu empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)".

{% elsif fpt %}

Las organizaciones que usan una suscripción paga antes del 11 de mayo de 2016 pueden elegir permanecer en su plan existente por repositorio o cambiar al precio por usuario. {% data variables.product.company_short %} te notificará doce meses antes de que cualquier cambio a tu suscripción sea obligatorio. Para obtener más información sobre cómo cambiar tu suscripción, consulta "[Actualizar tu {% data variables.product.prodname_dotcom %} suscripción](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% endif %}

## Resumen de los precios por usuario

{% data reusables.billing.per-user-pricing-reference %}

## Acerca de los cambios a tu suscripción

{% ifversion fpt %}

Puedes cambiar tu suscripción de {% data variables.product.prodname_dotcom %} en cualquier momento.

### Acerca de los cambios para las organizaciones que tienen planes por usuario

{% endif %}

Puedes agregar más usuarios a tu organización{% ifversion ghec %} o empresa en cualquier momento{% endif %}. Si pagas más usuarios de los que están activos actualmente, también puedes reducir la cantidad de usuarios de pago.{% ifversion fpt %} Para obtener más información, consulta las secciones "[Actualizar tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" y "[Bajar de nivel tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)".

Si tienes dudas sobre tu suscripción, contacta al{% data variables.contact.contact_support %}.

Para seguir apoyando las capacidades de colaboración de tu equipo, puedes mejorar a {% data variables.product.prodname_ghe_cloud %}, lo cual incluye características como el inicio de sesión único de SAML y la auditoría avanzada. {% data reusables.enterprise.link-to-ghec-trial %}

Para obtener más información sobre los precios por usuario para {% data variables.product.prodname_ghe_cloud %}, consulta [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% elsif ghec %}

Si utilizas una cuenta empresarial de {% data variables.product.prodname_dotcom_the_website %} y tienes dudas sobre los cambios a tu suscripción, contacta a {% data variables.contact.contact_enterprise_sales %}.

Si utilizas una organización individual de {% data variables.product.prodname_ghe_cloud %}, puedes mejorar tu suscripción o bajarla de nivel. Para obtener más información, consulta la sección "[Mejorar tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" o "[Bajar de categoría tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)". Si tienes dudas sobre tu suscripción, contacta al{% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Acerca de los cambios para las organizaciones con planes por repositorio

Puedes actualizar o bajar de categoría entre planes pagos heredados en los parámetros de facturación de tu organización. Cuando haces la mejora a un plan con más repositorios privados, {% data variables.product.company_short %} inmediatamente mueve tu cuenta a tu plan nuevo y te cobra la diferencia del precio, prorrateado por la cantidad de días restantes en tu ciclo de facturación.

Cuando bajas de categoría a un plan pago heredado con menos repositorios privados, tu nuevo plan entrará en vigencia en tu próxima fecha de facturación. Si tienes más repositorios privados de los que permite tu nuevo plan, tus repositorios privados se bloquearán cuando tu nuevo plan entre en vigencia. Para reducir la cantidad de repositorios privados, puedes hacer que algunos de tus repositorios privados sean públicos o puedes clonar tus repositorios privados localmente y eliminar las copias en {% data variables.product.prodname_dotcom %}.

{% endif %}

## Leer más

{%- ifversion ghec %}
- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
{%- endif %}
- "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
