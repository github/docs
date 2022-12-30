---
title: Verificar o aprobar un dominio para tu organización
intro: 'Puedes verificar tu propiedad de dominios con {% data variables.product.company_short %} para confirmar la identidad de tu organización. También puedes aprobar los dominios a los cuales {% data variables.product.company_short %} puede enviar notificaciones de correo electrónico para los miembros de tu organización.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verify or approve a domain
ms.openlocfilehash: 3cdd2954798e8584d5803ea9254d626d9cb37ee5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061750'
---
## Acerca de la verificación de dominios

Después de verificar la propiedad de los dominios de tu organización, se mostrará un distintivo "Verified" (Verificado) en el perfil de la organización. {% ifversion ghec %} Si tu organización ha aceptado los Términos de servicio corporativos, los propietarios de la organización podrán comprobar la identidad de los miembros de la organización al ver la dirección de correo electrónico de cada miembro dentro del dominio verificado. Para más información, vea "[Acerca de la página de perfil de la organización](/articles/about-your-organization-s-profile/)" y "<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Actualización a los Términos del servicio corporativos</a>".{% endif %}

{% ifversion ghec %}Si tu organización pertenece a una cuenta empresarial, la{% elsif ghes %}Una{% endif %} insignia "Verificada" se mostrará en el perfil de la organización para todos los dominios comprobados de la cuenta empresarial, además de cualquier dominio comprobado de la organización. Los propietarios de las organizaciones pueden ver cualquier dominio que haya verificado o aprobado el propietario de la empresa y pueden editar los dominios si el propietario de la organización es también un propietario de la empresa. Para más información, vea "[Comprobación o aprobación de un dominio para la empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

{% ifversion ghec %} {% note %}

**Nota:** Para comprobar o aprobar dominios, la organización debe usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes %} Después de comprobar la propiedad del dominio de tu organización, puedes restringir las notificaciones por correo electrónico para la organización a ese dominio. Para más información, vea "[Restricción de las notificaciones por correo electrónico para la organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".
{% endif %}

{% ifversion ghec %}También puedes comprobar los dominios personalizados que se utilizan para que {% data variables.product.prodname_pages %} prevenga las adquisiciones de dominio cuando un dominio personalizado permanece configurado pero tu sitio de {% data variables.product.prodname_pages %} está deshabilitado o ya no usa el dominio. Para más información, vea "[Comprobación de un dominio personalizado para {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".{% endif %}

## Acerca de la probación de dominios

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Después de que apruebas dominios para tu organización, puedes restringir las notificaciones por correo electrónico de toda la actividad dentro de la organización para que solo lleguen a las direcciones de correo electrónico verificadas dentro de los dominios aprobados o verificados. Para más información, vea "[Restricción de las notificaciones por correo electrónico para la organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

Los propietarios de empresas no pueden ver qué miembros de las organizaciones o direcciones de correo electrónico reciben notificaciones dentro de los dominios aprobados.

Los propietarios de las empresas también pueden aprobar dominios adicionales para las organizaciones que pertenezcan a la empresa. {% ifversion ghec %}Para obtener más información, consulta "[Comprobación o aprobación de un dominio para tu empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %}{% ifversion ghes %}Para obtener más información, consulta "[Comprobación o aprobación de un dominio para tu empresa](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".{% endif %}

## Verificar un dominio para tu organización

Para verificar un dominio, debes tener acceso apra modificar registros de dominio con tu servicio de hospedaje de dominios.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. Espera a que cambie la configuración de tu DNS, lo cual puede llevar hasta 72 horas. Puede confirmar que la configuración de DNS ha cambiado si ejecuta el comando `dig` en la línea de comandos y reemplaza `ORGANIZATION` por el nombre de la organización y `example.com` por el dominio que quiere comprobar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Después de confirmar, tu registro de TXT se agrega a tu DNS, sigue los pasos uno a tres que se mencionan anteriormente para navegar a los dominios verificados y aprobados de tu organización.
{% data reusables.organizations.continue-verifying-domain %}
11. Como alternativa, una vez que la insignia "Verified" (Verificado) es visible en la página de perfil de tu organización, puedes eliminar la entrada de TXT desde el registro de DNS en tu servicio de alojamiento de dominio.
![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)

## Aprobar un dominio para tu organización

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## Eliminar un dominio verificado o aprobado

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %}
1. A la derecha del dominio que quiera eliminar, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y después en **Eliminar**.
    !["Eliminar" para un dominio](/assets/images/help/organizations/domains-delete.png)
