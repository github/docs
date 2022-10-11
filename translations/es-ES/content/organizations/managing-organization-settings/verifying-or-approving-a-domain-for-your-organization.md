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
  free-pro-team: '*'
  enterprise-server: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
---

### Acerca de la verificación de dominios

Después de verificar la propiedad de los dominios de tu organización, se mostrará un distintivo "Verified" (Verificado) en el perfil de la organización. Si tu organización está en {% data variables.product.prodname_ghe_cloud %} y ha aceptado los Términos de servicio corporativos, los propietarios de la organización podrán verificar la identidad de los miembros de la organización al ver la dirección de correo electrónico de cada miembro dentro del dominio verificado. Para obtener más información, consulta "[Acerca de la página de perfil de tu organización](/articles/about-your-organization-s-profile/)" y "[Actualizar a los Términos de servicio corporativos](/articles/upgrading-to-the-corporate-terms-of-service)."

Si tu organización le pertenece a una cuenta empresarial, se mostrará una "insignia verificada" en el perfil de tu organización para cualquier dominio verificado en dicha cuenta, adicinalmente a cualquier dominio verificado para la organización. Los propietarios de las organizaciones pueden ver cualquier dominio que haya verificado o aprobado el propietario de la empresa y pueden editar los dominios si el propietario de la organización es también uno de los propietarios de la empresa. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)".

{% data reusables.organizations.verified-domains-details %}

En {% data variables.product.prodname_ghe_cloud %}, después de verificar la propiedad del dominio de tu organización, puedes restringir las notificaciones por correo electrónico para la organización a ese dominio. Para obtener más información, consulta la sección "[Restringir las notificaciones por correo electrónico para tu organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

### Acerca de la probación de dominios

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Después de que apruebas dominios para tu organización, puedes restringir las notificaciones por correo electrónico de toda la actividad dentro de la organización para que solo lleguen a las direcciones de correo electrónico verificadas dentro de los dominios aprobados o verificados. Para obtener más información, consulta la sección "[Restringir las notificaciones por correo electrónico para tu organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

Los propietarios de empresas no pueden ver qué miembros de las organizaciones o direcciones de correo electrónico reciben notificaciones dentro de los dominios aprobados.

Los propietarios de las empresas también pueden aprobar dominios adicionales para las organizaciones que pertenezcan a la empresa. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)".

### Verificar un dominio para tu organización

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

### Aprobar un dominio para tu organización

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

### Eliminar un dominio verificado o aprobado

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. A la derecha del dominio a eliminar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Borrar**. !["Borrar" para un dominio](/assets/images/help/organizations/domains-delete.png)
