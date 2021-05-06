---
title: Verificar el dominio de tu cuenta empresarial
intro: 'Puedes confirmar la identidad de las organizaciones que le pertenecen a tu cuenta empresarial si verificas la propiedad de tus nombres de dominio con {% data variables.product.company_short %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: Los propietarios de las empresas pueden verificar los dominios de su cuenta empresarial.
redirect_from:
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
topics:
  - empresa
---

### Acerca de la verificación de dominios

Puedes confirmar que tu empresa controle los sitios web y direcciones de correo electrónico que se listan en los perfiles de cualquier organización que le pertenezca a tu cuenta empresarial si verificas los dominios. Los dominios que se verifiquen para una cuenta empresarial aplicarán a todas las organizaciones que le pertenezcan a dicha cuenta, y los propietarios de las organizaciones podrán verificar dominios adicionales para éstas. Para obtener más información, consulta la sección "[Verificar el dominio de tu organización](/organizations/managing-organization-settings/verifying-your-organizations-domain)".

Después de que verificas la propiedad de los dominios de tus cuentas empresariales, se mostrará una insignia de "Verificado" en el perfil de cada organización que liste el dominio en su perfil. {% data reusables.organizations.verified-domains-details %}

Los propietarios de las organizaciones podrán verificar la identidad de los miembros de éstas si visualizan la dirección de correo electrónico de cada miembro dentro del dominio verificado.

Después de que verificas los dominios para tu cuenta empresarial, puedes restringir las notificaciones de correo electrónico a los dominios verificados para todas las organizaciones que le pertenezcan a tu cuenta empresarial. Para obtener más información, consulta la sección "[Restringir las notificaciones de correo electrónico para tu cuenta empresarial a los dominios aprobados](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains)".

Incluso si no restringieras las notificaciones para la cuenta empresarial, si un propietario de la organización restringió las notificaciones de correo electrónico para ella, sus miembros podrán recibir notificaciones de cualquier dominio verificado para la cuenta empresarial, adicionalmente a cualquier dominio verificado para la organización. Para obtener más información acerca de la restricción de notificaciones para una organización, consulta la sección "[Restringir las notificaciones de correo electrónico a un dominio aprobado](/organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain)".

### Verificar el dominio de tu cuenta empresarial

Para verificar el dominio de tu cuenta empresarial, debes tener acceso para modificar los registros del dominio con tu servicio de hospedaje de dominios.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. Haz clic en **Add a domain (Agregar un dominio)**. ![Botón para agregar un dominio](/assets/images/help/enterprises/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Espera a que cambie la configuración de tu DNS, lo cual puede llevar hasta 72 horas. Puedes confirmar que tu configuración de DNS cambió si ejecutas el comando `dig` en la línea de comandos, reemplazando `ENTERPRISE-ACCOUNT` con el nombre de tu cuenta empresarial, y `example.com` con el dominio que te gustaría verificar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
{% data reusables.organizations.continue-verifying-domain %}
1. Opcionalmente, después de que la insignia de "Verificado" se pueda ver en el perfil de tus organizaciones, borra la entrada de TxT del registro de DNS en tu servicio de hospedaje de dominio. ![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)
