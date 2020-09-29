---
title: Verificar el dominio de tu organización
intro: 'Puedes verificar los dominios controlados por tu organización para confirmar la identidad de tu organización en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

Para verificar dominios en {% data variables.product.product_name %}, debes tener permisos de propietario en la organización. Para obtener más información, consulta "[Niveles de permiso para una organización](/articles/permission-levels-for-an-organization)". También necesitarás acceso para modificar los registros de dominio con tu servicio de alojamiento de dominio.

Después de verificar la propiedad de los dominios de tu organización, se mostrará un distintivo "Verified" (Verificado) en el perfil de la organización. Si tu organización está en {% data variables.product.prodname_ghe_cloud %} y ha aceptado los Términos de servicio corporativos, los propietarios de la organización podrán verificar la identidad de los miembros de la organización al ver la dirección de correo electrónico de cada miembro dentro del dominio verificado. Para obtener más información, consulta "[Acerca de la página de perfil de tu organización](/articles/about-your-organization-s-profile/)" y "[Actualizar a los Términos de servicio corporativos](/articles/upgrading-to-the-corporate-terms-of-service)."

Para mostrar una insignia de "Verificado", el sitio web y la información de correo electrónico que se muestran en el perfil de tu organización deben coincidir con el o los dominios verificados. Si el sitio web y la dirección de correo electrónico que se muestran en el perfil de tu organización se alojan en un dominio diferente, debes verificar ambos dominios.

{% note %}

**Nota:** si la dirección de correo electrónico y el sitio web que se muestran en el perfil de tu organización utilizan variantes del mismo dominio, debes verificar ambas variantes. Por ejemplo, si el perfil de tu organización muestra el sitio web `www.example.com` y la dirección de correo electrónico `info@example.com`, deberías verificar tanto `www.example.com` como `example.com`.

{% endnote %}

En {% data variables.product.prodname_ghe_cloud %}, después de verificar la propiedad del dominio de tu organización, puedes restringir las notificaciones por correo electrónico para la organización a ese dominio. Para obtener más información, consulta "[Restringir las notificaciones por correo electrónico a un dominio aprobado](/articles/restricting-email-notifications-to-an-approved-domain)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Haz clic en **Add a domain (Agregar un dominio)**. ![Botón para agregar un dominio](/assets/images/help/organizations/add-a-domain-button.png)
6. En el campo dominio, escribe el dominio que deseas verificar, después haz clic en **Add domain (Agregar dominio)**. ![Campo para agregar un dominio](/assets/images/help/organizations/add-domain-field.png)
7. Sigue las instrucciones dentro de **Add a DNS TXT record (Agregar un registro TXT de DNS)** para crear un registro TXT de DNS con tu servicio de alojamiento de dominio. Puede demorar hasta 72 horas para que tu configuración de DNS cambie. Una vez que la configuración de DNS ha cambiado, continúa al paso siguiente. ![Instrucciones para crear un registro txt de DNS](/assets/images/help/organizations/create-dns-txt-record-instructions.png)

   {% tip %}

   **Sugerencia:** puedes confirmar que tu configuración de DNS ha cambiado al ejecutar el comando `dig` en la línea de comando. En el comando de ejemplo, reemplaza `ORGANIZATION` por el nombre de tu organización y `example.com` por el dominio que deseas verificar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.

   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```

   {% endtip %}

8. Después de confirmar que tu registro de TXT se agregó en tu DNS, desplázate hasta la pestaña Verified domains (Dominios verificados) en las configuraciones de tu organización. Puedes seguir los pasos anteriores uno a cuatro para ubicar la pestaña Dominios verificados. ![Página de configuraciones de dominios verificados con dominio pendiente](/assets/images/help/organizations/pending-domain-verification.png)
9. Al lado del dominio que está pendiente de verificación, haz clic en el {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, después haz clic en **Continue verifying (Continuar verificando)**. ![Botón para continuar verificando](/assets/images/help/organizations/continue-verifying-domain.png)
10. Haz clic en **Verify domain (Verificar dominio)**. ![Botón para verificar dominio](/assets/images/help/organizations/verify-domain-final-button.png)
11. Como alternativa, una vez que la insignia "Verified" (Verificado) es visible en la página de perfil de tu organización, puedes eliminar la entrada de TXT desde el registro de DNS en tu servicio de alojamiento de dominio. ![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)
