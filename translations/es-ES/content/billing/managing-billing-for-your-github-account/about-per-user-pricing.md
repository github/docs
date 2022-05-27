---
title: Acerca del precio por usuario
intro: '{% ifversion fpt or ghec %}For organizations{% ifversion ghec %} and enterprises{% endif %}, your {% else %}Your {% endif %}bill begins with the number of licensed seats you choose.'
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
---

## Acerca del precio por usuario

{% ifversion fpt %}
Las organizaciones nuevas en {% data variables.product.prodname_dotcom_the_website %} pueden crear proyectos públicos y de código abierto con {% data variables.product.prodname_free_team %} o mejorar a un producto de pago con precios por usuario. Para obtener más información, consulta las secciones "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" y "[Actualizar tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

Las organizaciones que usan una suscripción paga antes del 11 de mayo de 2016 pueden elegir permanecer en su plan existente por repositorio o cambiar al precio por usuario. {% data variables.product.company_short %} te notificará doce meses antes de que cualquier cambio a tu suscripción sea obligatorio. Para obtener más información sobre cómo cambiar tu suscripción, consulta "[Actualizar tu {% data variables.product.prodname_dotcom %} suscripción](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)".

{% else %}

The foundation of your bill is the number of standard licensed seats that you choose for your{% ifversion ghec %} organization or{% endif %} enterprise.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you can synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} environments. For more information, see "[About licenses for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

In addition to licensed seats, your bill may include other charges, such as {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."
{% endif %}

## People that consume a license

Each person consumes one license, and {% data variables.product.company_short %} identifies individuals by primary email address.

{% data variables.product.company_short %} cobra por las siguientes personas.

{%- ifversion ghec %}
- Propietarios de empresas que son miembros o propietarios de por lo menos una organización en dichas empresas
{%- endif %}
- Miembros de las organizaciones, incluyendo a los propietarios
- Colaboradores externos en repositorios privados{% ifversion ghec %} o internos{% endif %} que le pertenezcan a tu organización, excluyendo las bifurcaciones
- Cualquiera con una invitación pendiente para convertirse en un propietario o miembro de una organización
- Cualquiera con una invitación pendiente para convertirse en colaborador externo en los repositorios privados{% ifversion ghec %} o internos{% endif %} que le pertenezcan a tu organización, excluyendo las bifurcaciones
{%- ifversion ghec %}
- Cada usuario de cualquier instancia de {% data variables.product.prodname_ghe_server %} que despliegues
{%- endif %}
- Usuarios inactivos

{% data variables.product.company_short %} no cobra por las siguientes personas.

{%- ifversion ghec %}
- Los propietarios de empresas que no sean miembros ni propietarios de por lo menos una organización de la empresa
- Los gerentes de facturación de las empresas
{%- endif %}
- Los gerentes de facturación de las organizaciones{% ifversion ghec %} para las organizaciones individuales de {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Cualquiera con una invitación pendiente para convertirse en gerente de facturación{% ifversion ghec %} de una empresa u{% endif %} organización
- Cualquiera con una invitación pendiente para convertirse en colaborador externo en un repositorio público que le pertenezca a tu organización
{%- ifversion ghes %}
- Usuarios suspendidos
{%- endif %}

{% note %}

**Nota**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}

For more information, see {% ifversion not fpt %}"[Roles in an enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" or {% endif %}"[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data variables.product.company_short %} counts each {% ifversion not fpt %}member or {% endif %}outside collaborator once for billing purposes, even if the user account has {% ifversion not fpt %}membership in multiple organizations in an enterprise or {% endif %}access to multiple repositories owned by your organization. Para obtener más información sobre los colaboradores externos, consulta la sección "[Agregar colaboradores externos a los repositorios de tu organización](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion ghes %}Suspended users are not counted when calculating the number of licensed users consuming seats. For more information, see "[Suspending and unsuspending users](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users)."{% endif %}

Dormant users do occupy a seat license.{% ifversion ghes %} As such, you can choose to suspend dormant users to release user licenses.{% endif %} For more information, see "[Managing dormant users](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)."

## Acerca de los cambios a tu suscripción

{% ifversion fpt %}

Puedes cambiar tu suscripción de {% data variables.product.prodname_dotcom %} en cualquier momento.

### Acerca de los cambios para las organizaciones que tienen planes por usuario

{% endif %}

You can add more licensed seats to your {% ifversion fpt or ghec %} organization{% endif %}{% ifversion ghec %} or{% endif %}{% ifversion ghec or ghes %} enterprise{% endif %} at any time. If you pay for more seats than are being used, you can also reduce the number of seats.{% ifversion fpt %} For more information, see "[Upgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" and "[Downgrading your {% data variables.product.prodname_dotcom %} subscription](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)."

Si tienes dudas sobre tu suscripción, contacta al{% data variables.contact.contact_support %}.

Para seguir apoyando las capacidades de colaboración de tu equipo, puedes mejorar a {% data variables.product.prodname_ghe_cloud %}, lo cual incluye características como el inicio de sesión único de SAML y la auditoría avanzada. {% data reusables.enterprise.link-to-ghec-trial %}

Para obtener más información sobre los precios por usuario para {% data variables.product.prodname_ghe_cloud %}, consulta [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

Si utilizas una cuenta empresarial de {% data variables.product.prodname_dotcom_the_website %} y tienes dudas sobre los cambios a tu suscripción, contacta a {% data variables.contact.contact_enterprise_sales %}.

{% endif %}
{% ifversion ghec %}

Si utilizas una organización individual de {% data variables.product.prodname_ghe_cloud %}, puedes mejorar tu suscripción o bajarla de nivel. Para obtener más información, consulta la sección "[Mejorar tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription)" o "[Bajar de categoría tu suscripción de {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription)". Si tienes dudas sobre tu suscripción, contacta al{% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### Acerca de los cambios para las organizaciones con planes por repositorio

Puedes actualizar o bajar de categoría entre planes pagos heredados en los parámetros de facturación de tu organización. Cuando haces la mejora a un plan con más repositorios privados, {% data variables.product.company_short %} inmediatamente mueve tu cuenta a tu plan nuevo y te cobra la diferencia del precio, prorrateado por la cantidad de días restantes en tu ciclo de facturación.

Cuando bajas de categoría a un plan pago heredado con menos repositorios privados, tu nuevo plan entrará en vigencia en tu próxima fecha de facturación. Si tienes más repositorios privados de los que permite tu nuevo plan, tus repositorios privados se bloquearán cuando tu nuevo plan entre en vigencia. Para reducir la cantidad de repositorios privados, puedes hacer que algunos de tus repositorios privados sean públicos o puedes clonar tus repositorios privados localmente y eliminar las copias en {% data variables.product.prodname_dotcom %}.

{% endif %}

## Leer más

{%- ifversion not fpt %}
- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
{%- endif %}
- "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
