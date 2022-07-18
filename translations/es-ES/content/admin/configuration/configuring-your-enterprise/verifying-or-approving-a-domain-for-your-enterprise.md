---
title: Verificar o aprobar un dominio para tu empresa
shortTitle: Verificar o aprobar un dominio
intro: 'Puedes verificar tu propiedad de dominios con {% data variables.product.company_short %} para confirmar la identidad de las organizaciones que pertenecen a tu cuenta empresarial. Tambien puedes aprobar los dominios en donde los miembros de la organización pueden recibir notificaciones por correo electrónico.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
---

## Acerca de la verificación de dominios

Puedes confirmar que tu empresa controle los sitios web y direcciones de correo electrónico que se listan en los perfiles de cualquier organización que le pertenezca a tu cuenta empresarial si verificas los dominios. Los dominios verificados para una cuenta empresarial aplican a cada organización que pertenezca a la cuenta empresarial.

Después de que verificas la propiedad de los dominios de tus cuentas empresariales, se mostrará una insignia de "Verificado" en el perfil de cada organización que liste el dominio en su perfil. {% data reusables.organizations.verified-domains-details %}

Para los dominios configurados a nivel empresarial, los propietarios empresariales pueden verificar la identidad de los miembros organizaconales viendo la dirección de correo electrónico de cada miembro dentro del dominio verificado. Los propietarios de las empresas también pueden ver una lista de miembros empresariales que no tienen una dirección de correo electrónico de un dominio verificado asociada con su cuenta de usuario en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Ver a los miembros sin un a dirección de correo electrónico desde un dominio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".

Después de que verificas los dominios para tu cuenta empresarial, puedes restringir las notificaciones de correo electrónico a los dominios verificados para todas las organizaciones que le pertenezcan a tu cuenta empresarial. Para obtener más información, consulta la sección "[Restringir las notificaciones por correo electrónico para tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".

Incluso si no restringieras las notificaciones por correo electrónico para la cuenta empresarial, en caso de que un propietario de organización lo haya hecho, los miembros de dicha organización podrán recibir notificaciones en cualquier dominio que la empresa haya verificado o aprobado para la cuenta empresarial adicionalmente a cualquier dominio que se haya verificado o aprobado previamente para la organización. Para obtener más información sobre cómo restringir las notificaciones de una organización, consulta la sección "[Restringir las notificaciones por correo electrónico para tu organización](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)".

Los propietarios de organización también pueden verificar dominios adicionales para sus organizaciones. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

## Acerca de la aprobación de dominios

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Después de que apruebas los dominios en tu cuenta empresarial, puedes restringir las notificaciones por correo electrónico para la actividad dentro de esta a los usuarios con direcciones de correo electrónico verificadas dentro de los dominios aprobados o verificados. Para obtener más información, consulta la sección "[Restringir las notificaciones por correo electrónico para tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)".

{% ifversion ghec %}Para recibir notificaciones por correo electrónico, el propietario de la cuenta de usuario debe verificar la dirección de correo electrónico en {% data variables.product.product_name %}. Para obtener más información, consulta "[Verificar tu dirección de correo electrónico](/github/getting-started-with-github/verifying-your-email-address)".{% endif %}

Los propietarios de la organización no pueden ver la dirección de correo electrónico ni qué cuenta de usuario está asociada con alguna de ellas desde un dominio aprobado.

Los propietarios de organización también pueden aprobar dominios adicionales para sus organizaciones. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

## Verificar un dominio para tu cuenta empresarial

Para verificar el dominio de tu cuenta empresarial, debes tener acceso para modificar los registros del dominio con tu servicio de hospedaje de dominios.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Espera a que cambie la configuración de tu DNS, lo cual puede llevar hasta 72 horas. Puedes confirmar que tu configuración de DNS cambió si ejecutas el comando `dig` en la línea de comandos, reemplazando `ENTERPRISE-ACCOUNT` con el nombre de tu cuenta empresarial, y `example.com` con el dominio que te gustaría verificar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Después de confirmar, tu registro de TXT se agrega a tu DNS, sigue los pasos uno a cuatro, los cuales se explican anteriormente, para navegar a los dominios aprobados y verificados de tu cuenta empresarial.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. Opcionalmente, después de que la insignia de "Verificado" se pueda ver en el perfil de tus organizaciones, borra la entrada de TxT del registro de DNS en tu servicio de hospedaje de dominio. ![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)

## Aprobar un dominio para tu cuenta empresarial

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## Eliminar un dominio verificado o aprobado

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. A la derecha del dominio a eliminar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y luego en **Borrar**. !["Borrar" para un dominio](/assets/images/help/organizations/domains-delete.png)
