---
title: Solución de problemas del uso de licencias de GitHub Enterprise
intro: 'Con la auditoría de informes de licencias, puedes solucionar problemas relacionados con el uso de licencias de tu empresa.'
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: 8595aaad929e534ebbd474270f3e01f87113b5ec
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179945'
---
## Acerca del uso inesperado de licencias

Si el número de licencias consumidas de la empresa es inesperado, puedes revisar el informe de licencias consumidas para auditar el uso de licencias en todas las implementaciones y suscripciones empresariales. Para obtener más información, consulta «[Visualización del uso de licencias de GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)» y «[Visualización de la suscripción y el uso de la cuenta empresarial](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)».

Si detectas algún error, puedes llevar a cabo pasos para solucionar los problemas.

Por motivos de privacidad, los propietarios de la empresa no pueden acceder directamente a los detalles de las cuentas de usuario a menos que uses {% data variables.product.prodname_emus %}.

## Acerca del cálculo de licencias consumidas

Si un usuario cumple una o varias de las condiciones siguientes, {% data variables.product.company_short %} factura al usuario.

- El usuario utiliza implementaciones de {% data variables.product.prodname_ghe_server %}.
- El usuario es miembro de una de las organizaciones en {% data variables.product.prodname_ghe_cloud %}.
- El usuario tiene acceso de escritura a uno de los repositorios privados de tu organización.
- Si el usuario es un {% data variables.visual_studio.prodname_vs_subscriber %}.

Las invitaciones para estos roles consumirán una licencia hasta que se acepte o expire la invitación. Para obtener más información sobre las personas de la empresa que consumen una licencia, consulta «[Acerca de los precios por usuario](/billing/managing-billing-for-your-github-account/about-per-user-pricing)».

Para que cada usuario consuma un solo puesto, independientemente del número de implementaciones que use, debes sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulte "[Sincronizar el uso de licencias de usuario manualmente entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

Después de sincronizar el uso de licencias, {% data variables.product.prodname_dotcom %} empareja las cuentas de usuario en {% data variables.product.prodname_ghe_server %} con las cuentas de usuario en {% data variables.product.prodname_ghe_cloud %} mediante la dirección de correo electrónico.

En primer lugar, comprobamos la dirección de correo electrónico principal de cada usuario en {% data variables.product.prodname_ghe_server %}. A continuación, intentamos hacer coincidir esa dirección con la dirección de correo electrónico de una cuenta de usuario en {% data variables.product.prodname_ghe_cloud %}. Si tu empresa usa el inicio de sesión único (SSO) de SAML, primero comprobamos los siguientes atributos de SAML para las direcciones de correo electrónico.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

Si no se encuentra ninguna dirección de correo electrónico en estos atributos que coincida con la dirección de correo electrónico principal en {% data variables.product.prodname_ghe_server %}, o si tu empresa no usa el SSO de SAML, comprobamos cada una de las direcciones de correo electrónico del usuario verificadas en {% data variables.product.prodname_ghe_cloud %}. Para más información sobre la comprobación de direcciones de correo electrónico en {% data variables.product.prodname_dotcom_the_website %}, vea "[Comprobación de la dirección de correo electrónico](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

## Campos de los archivos de licencias consumidas

El informe de uso de licencias de {% data variables.product.prodname_dotcom_the_website %} y el archivo exportado de uso de licencias de {% data variables.product.prodname_ghe_server %} incluyen varios campos que te ayudarán a solucionar los problemas relacionados con el uso de licencias de tu empresa. 

### Informe de uso de licencias de {% data variables.product.prodname_dotcom_the_website %} (archivo CSV)

El informe de uso de licencias de la empresa es un archivo CSV que contiene la información siguiente sobre los miembros de la empresa. Algunos campos son específicos de la implementación de la {% data variables.product.prodname_ghe_cloud %} (GHEC), los entornos conectados de {% data variables.product.prodname_ghe_server %} (GHES) o las suscripciones de {% data variables.product.prodname_vs %} (VSS) con GitHub Enterprise.

| Campo | Descripción
| ----- | -----------
| github_com_login | Nombre de usuario de la cuenta GHEC del usuario
| github_com_name | Nombre para mostrar de la cuenta GHEC del usuario
| github_com_profile | Dirección URL de la página de perfil del usuario en GHEC
| github_com_user   | Si el usuario tiene o no una cuenta en GHEC |
| github_com_member_roles | Para cada una de las organizaciones a las que pertenece el usuario en GHEC, nombre de la organización y rol del usuario en esa organización (`Owner` o `Member`), separados por dos puntos<br><br>Organizaciones delimitadas por comas |
| github_com_enterprise_role | Puede ser `Owner`, `Member` o `Outside collaborator`
| github_com_verified_domain_emails | Todas las direcciones de correo electrónico asociadas a la cuenta GHEC del usuario que coinciden con los dominios verificados de la empresa |
| github_com_saml_name_id | Nombre de usuario de SAML |
| github_com_orgs_with_pending_invites | Todas las invitaciones pendientes de la cuenta GHEC del usuario para unirse a organizaciones dentro de tu empresa |
| license_type | Puede ser `Visual Studio subscription` o `Enterprise`
| enterprise_server_user| Si el usuario tiene al menos una cuenta en GHES o ninguna |
| enterprise_server_primary_emails | Las direcciones de correo electrónico principales asociadas a cada una de las cuentas GHES del usuario |
| enterprise_server_user_ids | Para cada una de las cuentas GHES del usuario, el Id. de usuario de la cuenta
| total_user_accounts | El número total de cuentas que tiene la persona en GHEC y GHES
| visual_studio_subscription_user | Si el usuario es un {% data variables.visual_studio.prodname_vs_subscriber %} o no. |
| visual_studio_subscription_email | Dirección de correo electrónico asociada a la VSS del usuario |
| visual_studio_license_status | Si la licencia de Visual Studio se ha emparejado con un usuario {% data variables.product.company_short %} o no |

Si un {% data variables.visual_studio.prodname_vs_subscriber %} aún no es miembro de al menos una organización de la empresa, se incluirá en el informe con el estado de invitación pendiente y no aparecerá ningún valor en el campo "Nombre" o "Vínculo del perfil".

### Uso de licencias exportado de {% data variables.product.prodname_ghe_server %} (archivo JSON)

El uso de licencias de {% data variables.product.prodname_ghe_server %} es un archivo JSON que suele usarse al realizar una sincronización manual de las licencias de usuario entre implementaciones de {% data variables.product.prodname_ghe_server %} y la {% data variables.product.prodname_ghe_cloud %}. El archivo contiene la siguiente información específica del entorno de {% data variables.product.prodname_ghe_server %}.

| Campo | Descripción
| ----- | -----------
| Características | Características de {% data variables.product.prodname_github_connect %} que están habilitadas en la instancia de {% data variables.product.prodname_ghe_server %}, con la fecha y hora de su habilitación.
| Nombre de host | Nombre de host de tu instancia de {% data variables.product.prodname_ghe_server %}.
| Solo HTTP | Indica si la Seguridad de la capa de transporte (TLS) está habilitada y configurada en tu instancia de {% data variables.product.prodname_ghe_server %}. Puede ser `True` o `False`. 
| Licencia | Hash de tu licencia de {% data variables.product.prodname_ghe_server %}.
| Clave pública | Parte de la clave pública de tu licencia de {% data variables.product.prodname_ghe_server %}.
| Id. de servidor | UUID generado para tu instancia de {% data variables.product.prodname_ghe_server %}.
| Versión | Versión de tu instancia de {% data variables.product.prodname_ghe_server %}.

## Solución de problemas relacionados con las licencias consumidas

Para asegurarse de que cada usuario solo consume un único puesto para diferentes implementaciones y suscripciones, prueba los pasos de solución de problemas siguientes.

1. Para ayudar a identificar a los usuarios que consumen varios puestos, si tu empresa usa dominios verificados para {% data variables.product.prodname_ghe_cloud %}, revisa la lista de miembros de la empresa que no tienen una dirección de correo electrónico de un dominio verificado asociado a su cuenta en {% data variables.product.prodname_dotcom_the_website %}. Por lo general, estos son los usuarios que consumen erróneamente más de un puesto con licencia. Para obtener más información, consulta "[Visualización de miembros sin una dirección de correo electrónico de un dominio verificado](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)".

   {% note %}

  **Nota:** Para facilitar la solución de problemas, recomendamos que uses dominios verificados con tu cuenta de empresa en {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Comprobación o aprobación de un dominio para la empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)".

  {% endnote %}
1. Después de identificar a los usuarios que consumen varios puestos, asegúrate de que la misma dirección de correo electrónico esté asociada a todas las cuentas del usuario. Para obtener más información sobre qué direcciones de correo electrónico deben coincidir, consulta «[Acerca del cálculo de licencias consumidas](#about-the-calculation-of-consumed-licenses)».
1. Si una dirección de correo electrónico se ha actualizado recientemente o se ha verificado para corregir un error de coincidencia, consulta la marca de tiempo del último trabajo de sincronización de licencias. Si un trabajo no se ha ejecutado después de que se haya realizado la corrección, desencadena manualmente un nuevo trabajo. Para obtener más información, consulta "[Sincronización del uso de licencias entre GitHub Enterprise Server y la Nube de GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

Si te queda alguna duda sobre las licencias consumidas después de consultar esta información para la solución de problemas, puedes ponerte en contacto con el {% data variables.contact.github_support %} a través del {% data variables.contact.contact_enterprise_portal %}.
