---
title: Verificar el dominio de tu organización
intro: 'Puedes verificar los dominios controlados por tu organización para confirmar la identidad de tu organización en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

### Acerca de la verificación de dominios

Para verificar dominios en {% data variables.product.product_name %}, debes tener permisos de propietario en la organización. Para obtener más información, consulta "[Niveles de permisos para una organización](/articles/permission-levels-for-an-organization)". También necesitarás acceso para modificar los registros de dominio con tu servicio de alojamiento de dominio.

Después de verificar la propiedad de los dominios de tu organización, se mostrará un distintivo "Verified" (Verificado) en el perfil de la organización. Si tu organización está en {% data variables.product.prodname_ghe_cloud %} y ha aceptado los Términos de servicio corporativos, los propietarios de la organización podrán verificar la identidad de los miembros de la organización al ver la dirección de correo electrónico de cada miembro dentro del dominio verificado. Para obtener más información, consulta "[Acerca de la página de perfil de tu organización](/articles/about-your-organization-s-profile/)" y "[Actualizar a los Términos de servicio corporativos](/articles/upgrading-to-the-corporate-terms-of-service)."

Si tu organización le pertenece a una cuenta empresarial, se mostrará una "insignia verificada" en el perfil de tu organización para cualquier dominio verificado en dicha cuenta, adicinalmente a cualquier dominio verificado para la organización. Para obtener más información, consulta la sección "[Verificar el dominio de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)".

{% data reusables.organizations.verified-domains-details %}

En {% data variables.product.prodname_ghe_cloud %}, después de verificar la propiedad del dominio de tu organización, puedes restringir las notificaciones por correo electrónico para la organización a ese dominio. Para obtener más información, consulta "[Restringir las notificaciones por correo electrónico a un dominio aprobado](/articles/restricting-email-notifications-to-an-approved-domain)".

### Verificar el dominio de tu organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Haz clic en **Add a domain (Agregar un dominio)**. ![Botón para agregar un dominio](/assets/images/help/organizations/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Espera a que cambie la configuración de tu DNS, lo cual puede llevar hasta 72 horas. Puedes confirmar que tu configuración de DNS cambió si ejecutas el comando `dig` en la línea de comandos, reemplazando `ORGANIZATION` con el nombre de tu organización y `example.com` con el dominio que te gustaría verificar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
8. Después de confirmar que tu registro de TXT se agregó en tu DNS, desplázate hasta la pestaña Verified domains (Dominios verificados) en las configuraciones de tu organización. Puedes seguir los pasos anteriores uno a cuatro para ubicar la pestaña Dominios verificados. ![Página de configuraciones de dominios verificados con dominio pendiente](/assets/images/help/organizations/pending-domain-verification.png)
{% data reusables.organizations.continue-verifying-domain %}
11. Como alternativa, una vez que la insignia "Verified" (Verificado) es visible en la página de perfil de tu organización, puedes eliminar la entrada de TXT desde el registro de DNS en tu servicio de alojamiento de dominio. ![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)
