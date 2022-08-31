---
title: Solucionar problemas de uso de licencia para GitHub Enterprise
intro: Puedes solucionar los problemas con el uso de licencia para tu empresa si auditas los reportes de licencia.
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Solucionar el uso de licencia
---

## Acerca del uso de licencia inesperado

Si la cantidad de licencias consumidas para tu empresa es inesperada, puedes revisar tu reporte de licencias consumidas para auditar tu uso de licencia en todos los despliegues y suscripciones de tu empresa. Para obtener más información, consulta la sección "[Ver el uso de licencia para GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" y "[Ver la suscripción y el uso de tu cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)".

Si encuentras errores, puedes intentar solucionar los problemas de los pasos.

Por razones de privacidad, los propietarios de las empresas no pueden acceder directamente a los detalles de las cuentas de usuario a menos de que utilices {% data variables.product.prodname_emus %}.

## Acerca del cálculo de licencias consumidas

{% data variables.product.company_short %} factura por cada persona que utilice despliegues de {% data variables.product.prodname_ghe_server %}, que sea miembro de una de tus organizaciones en {% data variables.product.prodname_ghe_cloud %} o que sea un {% data variables.product.prodname_vs_subscriber %}. Para obtener más información sobre las personas de tu empresa que consumen licencias, consulta la sección "[Acerca de los precios por usuario](/billing/managing-billing-for-your-github-account/about-per-user-pricing)".

Para que cada usuario consuma una sola plaza sin importar cuántos despliegues utilicen, debes sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta la sección "[Sincronizar el uso de licencia entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

Después de que sincronizas el uso de licencia, {% data variables.product.prodname_dotcom %} empata las cuentas de usuario en {% data variables.product.prodname_ghe_server %} con las cuentas de usuario en {% data variables.product.prodname_ghe_cloud %} por dirección de correo electrónico.

Primero, revisa la dirección de correo electrónico principal de cada usuario en {% data variables.product.prodname_ghe_server %}. Después, intenta empatar dicha dirección con la de correo electrónico para una cuenta de usuario de {% data variables.product.prodname_ghe_cloud %}. Si tu empresa utiliza el SSO de SAML, primero hay que verificar los siguientes atributos de SAML para las direcciones de correo electrónco.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `nombre de usuario`
- `ID del nombre`
- `emails`

Si no hay ninguna dirección de correo electrónico en estos atributos que empate con la dirección primaria en {% data variables.product.prodname_ghe_server %} o si tu empresa no utiliza el SSO de SAML, entonces podemos verificar cada una de las direcciones de correo electrónico verificadas de los usuarios en {% data variables.product.prodname_ghe_cloud %}. Para obtener más información sobre la verificación de las direcciones de correo electrónico de {% data variables.product.prodname_dotcom_the_website %}, consulta la sección "[Verificar tu dirección de correo electrónico](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

## Campos en los archivos de licencia consumidos

El reporte de uso de licencia en {% data variables.product.prodname_dotcom_the_website %} y el archivo de uso de licencia exportado de {% data variables.product.prodname_ghe_server %} incluyen varios campos para ayudarte a solucionar los problemas de uso de licencia para tu empresa.

### Reporte de uso de licencia de {% data variables.product.prodname_dotcom_the_website %} (archivo CSV)

El reporte de uso de licencia para tu empresa es un archivo CSV que contiene la siguiente información sobre los miembros de tu empresa. Algunos campos son específicos para tu despliegue de {% data variables.product.prodname_ghe_cloud %} (GHEC), ambientes conectados de {% data variables.product.prodname_ghe_server %} (GHES) o para tus suscripciones de {% data variables.product.prodname_vs %} (VSS) con GitHub Enterprise.

| Campo                                    | Descripción                                                                                                                                                                                                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| github_com_login                       | El nombre de usuario para la cuenta de GHEC del usuario                                                                                                                                                                                                        |
| github_com_name                        | El nombre para mostrar de la cuenta de GHEC del usuario                                                                                                                                                                                                        |
| github_com_profile                     | La URL para la página de perfil del usuario en GHEC                                                                                                                                                                                                            |
| github_com_user                        | Si el usuario tiene una cuenta en GHEC o no                                                                                                                                                                                                                    |
| github_com_member_roles                | Para cada una de las organizaciones a las cuales pertenece el usuario en GHEC, el nombre de organización y el rol del usuario en dicha organización (`Owner` o `Member`) separado por dos puntos <br><br>Las organizaciones se delimitan con comas |
| github_com_enterprise_role             | Puede ser una de entre: `Owner`, `Member`, o `Outside collaborator`                                                                                                                                                                                            |
| github_com_verified_domain_emails    | Todas las direcciones de correo electrónico asociadas con la cuenta de GHEC del usuario que empaten con los dominios verificados de tu empresa                                                                                                                 |
| github_com_saml_name_id              | El nombre de usuario de SAML                                                                                                                                                                                                                                   |
| github_com_orgs_with_pending_invites | Todas las invitaciones pendientes para que la cuenta de GHEC del usuario se una a organizaciones dentro de tu empresa                                                                                                                                          |
| license_type                             | Puede ser una de entre: `Visual Studio subscription` o `Enterprise`                                                                                                                                                                                            |
| enterprise_server_user                 | Si el usuario tiene por lo menos una cuenta en GHES o no                                                                                                                                                                                                       |
| enterprise_server_primary_emails       | Las direcciones de correo electrónico principales asociadas con cada una de las cuentas de GHES del usuario                                                                                                                                                    |
| enterprise_server_user_ids             | La ID de usuario de cada una de las cuentas de GHES del usuario                                                                                                                                                                                                |
| total_user_accounts                    | La cantidad total de cuentas que tiene la persona tanto en GHEC como en GHES                                                                                                                                                                                   |
| visual_studio_subscription_user        | Si el usuario es un {% data variables.product.prodname_vs_subscriber %} o no                                                                                                                                                                                 |
| visual_studio_subscription_email       | La dirección de correo electrónico asociada con el VSS del usuario                                                                                                                                                                                             |
| visual_studio_license_status           | Si la licencia de Visual Studio empató con un usuario de {% data variables.product.company_short %} o no                                                                                                                                                       |

Los {% data variables.product.prodname_vs_subscriber %}es que aún no son miembros de por lo menos una organización en tu empresa se incluirán en el reporte con un estado de invitación pendiente y serán valores faltantes para el campo de "Nombre" o "Enlace de perfil".

### Uso de licencia de {% data variables.product.prodname_ghe_server %} exportada (archivo JSON)

Tu uso de licencia de {% data variables.product.prodname_ghe_server %} es un archivo de JSON que se utiliza habitualmente al realizar una sincronización manual de licencias de usuario entre despliegues de {% data variables.product.prodname_ghe_server %} y de {% data variables.product.prodname_ghe_cloud %}. El archivo contiene la siguiente información específica para tu ambiente de {% data variables.product.prodname_ghe_server %}.

| Campo           | Descripción                                                                                                                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Características | Las características de {% data variables.product.prodname_github_connect %} que están habilitadas en tu instancia de {% data variables.product.prodname_ghe_server %} y la fecha y hora de la habilitación. |
| Host name       | El nombre de host de tu instancia de {% data variables.product.prodname_ghe_server %}.                                                                                                                        |
| HTTP only       | Si se habilitó y configuró la Seguridad de Capa de Transporte (TLS) en tu instancia de {% data variables.product.prodname_ghe_server %}. Puede ser uno de entre: `True` o `False`.                            |
| Licencia        | Un hash de tu licencia {% data variables.product.prodname_ghe_server %}.                                                                                                                                      |
| Public key      | La parte pública de la clave de tu licencia {% data variables.product.prodname_ghe_server %}.                                                                                                                 |
| Server ID       | La UUID generada para tu instancia de {% data variables.product.prodname_ghe_server %}.                                                                                                                       |
| Versión         | La versión de tu instancia de {% data variables.product.prodname_ghe_server %}.                                                                                                                               |

## Solucionar problemas de las licencias consumidas

Para garantizar que cada usuario solo consume una sola plaza para los diversos despliegues y suscripciones, intenta tomas los siguientes pasos.

1. Para ayudar a identificar a los usuarios que están consumiendo varias plazas, si tu empresa utiliza los dominios verificados para {% data variables.product.prodname_ghe_cloud %}, revisa la lista de miembros empresariales que no tienen una dirección de correo electrónico de un dominio verificado y asociado con su cuenta en {% data variables.product.prodname_dotcom_the_website %}. A menudo, estos son los usuarios que consumen más de una plaza con licencia por error. Para obtener más información, consulta la sección "[Ver a los miembros sin un a dirección de correo electrónico desde un dominio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".

   {% note %}

  **Nota:** Para facilitar la solución de problemas, te recomendamos utilizar dominios verificados con tu cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

  {% endnote %}
1. Después de que identifiques a los usuarios que están consumiendo varias plazas, asegúrate de que la misma dirección de correo electrónico esté asociada con todas las cuentas de usuario. Para obtener más información sobre qué direcciones de correo electrónico deben coincidir, consulta la sección "[Acerca del cálculo de las licencias consumidas](#about-the-calculation-of-consumed-licenses)".
1. Si se actualizó o verificó recientemente una dirección de correo electrónico para corregir un desajuste, ve la marca de tiempo del último job de sincronización de licencia. Si un job no se ha ejecutado desde que se realizó la corrección, activa un job nuevo manualmente. Para obtener más información, consulta la sección "[Sincronizar el uso de licencia entre GitHub Enterprise Server y GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

Si aún tienes preguntas sobre tus licencias consumidas después de revisar la información de solución de problemas anterior, puedes contactar a {% data variables.contact.github_support %} a través del {% data variables.contact.contact_enterprise_portal %}.
