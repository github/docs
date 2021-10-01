---
title: Verificar o aprobar un dominio para tu organización
intro: 'Puedes verificar tu propiedad de dominios con {% data variables.product.company_short %} para confirmar la identidad de tu organización. También puedes aprobar los dominios a los cuales {% data variables.product.company_short %} puede enviar notificaciones de correo electrónico para los miembros de tu organización.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  fpt: '*'
  ghes: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verificar o aprobar un dominio
---

## Acerca de la verificación de dominios

Después de verificar la propiedad de los dominios de tu organización, se mostrará un distintivo "Verified" (Verificado) en el perfil de la organización. {% ifversion fpt %}If your organization is on {% data variables.product.prodname_ghe_cloud %} and has agreed to the Corporate Terms of Service, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. For more information, see "[About your organization's profile page](/articles/about-your-organization-s-profile/)" and "<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Upgrading to the Corporate Terms of Service</a>."{% endif %}

{% ifversion fpt %}If your organization is owned by an enterprise account, a{% elsif ghes %}A{% endif %} "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owner. {% ifversion fpt %}For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion fpt %}On {% data variables.product.prodname_ghe_cloud %}, after verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. Para obtener más información, consulta la sección "[Restringir las notificaciones por correo electrónico para tu organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)". {% data reusables.enterprise.link-to-ghec-trial %}{% endif %}

## Acerca de la probación de dominios

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Después de que apruebas dominios para tu organización, puedes restringir las notificaciones por correo electrónico de toda la actividad dentro de la organización para que solo lleguen a las direcciones de correo electrónico verificadas dentro de los dominios aprobados o verificados. Para obtener más información, consulta la sección "[Restringir las notificaciones por correo electrónico para tu organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

Los propietarios de empresas no pueden ver qué miembros de las organizaciones o direcciones de correo electrónico reciben notificaciones dentro de los dominios aprobados.

Los propietarios de las empresas también pueden aprobar dominios adicionales para las organizaciones que pertenezcan a la empresa. {% ifversion fpt %}For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."{% endif %}{% ifversion ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}

## Verificar un dominio para tu organización

Para verificar un dominio, debes tener acceso apra modificar registros de dominio con tu servicio de hospedaje de dominios.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Espera a que cambie la configuración de tu DNS, lo cual puede llevar hasta 72 horas. Puedes confirmar que tu configuración de DNS cambió si ejecutas el comando `dig` en la línea de comandos, reemplazando `ORGANIZATION` con el nombre de tu organización y `example.com` con el dominio que te gustaría verificar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Después de confirmar, tu registro de TXT se agrega a tu DNS, sigue los pasos uno a tres que se mencionan anteriormente para navegar a los dominios verificados y aprobados de tu organización.
{% data reusables.organizations.continue-verifying-domain %}
11. Como alternativa, una vez que la insignia "Verified" (Verificado) es visible en la página de perfil de tu organización, puedes eliminar la entrada de TXT desde el registro de DNS en tu servicio de alojamiento de dominio. ![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)

## Aprobar un dominio para tu organización

{% ifversion fpt or ghes > 3.1 %}

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## Eliminar un dominio verificado o aprobado

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. A la derecha del dominio a eliminar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Borrar**. !["Borrar" para un dominio](/assets/images/help/organizations/domains-delete.png)
