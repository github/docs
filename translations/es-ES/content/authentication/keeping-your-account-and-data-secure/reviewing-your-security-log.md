---
title: Revisar tu registro de seguridad
intro: 'Puedes revisar el registro de seguridad de tu cuenta personal para entender mejor las acciones que has realizado y las que otros han realizado, las cuales te involucran.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Security log
ms.openlocfilehash: af0c238e3bda40874ed09d6afb402cc6934e7c4b
ms.sourcegitcommit: 5b0becac9098ab45c2204882d719f5cf17bfff18
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120851'
---
## Acceder a tu registro de seguridad

La bitácora de seguridad lista todas las acciones que se llevaron a cabo en los últimos 90 días.

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. En la sección "Archivos" de la barra lateral, haga clic en **{% octicon "log" aria-label="The log icon" %} Registro de seguridad**.
{% else %}
1. En la barra lateral de configuración del usuario, haga clic en **Registro de seguridad**.
  ![Pestaña Registro de seguridad](/assets/images/help/settings/audit-log-tab.png) {% endif %}

## Buscar tu registro de seguridad

{% data reusables.audit_log.audit-log-search %}

### Búsqueda basada en la acción realizada

Tus acciones activan los eventos que se listan en tu bitácora de seguridad. Las acciones se agrupan en las siguientes categorías:

| Nombre de categoría | Descripción |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Contiene todas las actividades relacionadas con la información de facturación.
| [`codespaces`](#codespaces-category-actions) | Contiene todas las actividades relacionadas con {% data variables.product.prodname_github_codespaces %}. Para más información, vea "[Acerca de {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)".
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contiene todas las actividades relacionadas con la firma del Acuerdo del desarrollador de {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contiene todas las actividades relacionadas con la oferta de aplicaciones en {% data variables.product.prodname_marketplace %}.{% endif %} | [`oauth_access`](#oauth_access-category-actions) | Contiene todas las actividades relacionadas con las [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) a las que te has conectado.{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Contiene todas las actividades relacionadas con el pago de la suscripción de {% data variables.product.prodname_dotcom %}.{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Contiene las actividades relacionadas con {% data variables.product.pat_v2 %}. Para obtener más información, consulta "[Creación de {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)".{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Contiene todas las actividades relacionadas con la imagen de perfil.
| [`project`](#project-category-actions) | Contiene todas las actividades relacionadas con los paneles de proyecto.
| [`public_key`](#public_key-category-actions) | Contiene todas las actividades relacionadas con [las claves SSH públicas](/articles/adding-a-new-ssh-key-to-your-github-account).
| [`repo`](#repo-category-actions) | Contiene todas las actividades relacionadas con los repositorios de su propiedad.{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Contiene todos los eventos relacionados con {% data variables.product.prodname_sponsors %} y botones de patrocinador (vea "[Acerca de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)" y "[Representación de un botón de patrocinador en el repositorio](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | Contiene todas las actividades relacionadas con los equipos de los que forma parte.{% endif %}{% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | Contiene todas las actividades relacionadas con la [autenticación en dos fases](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %} | [`user`](#user-category-actions) | Contiene todas las actividades relacionadas con la cuenta.

{% ifversion fpt or ghec %}

## Exportar tu registro de seguridad

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## Acciones de la bitácora de seguridad

Un resumen de algunas de las acciones más frecuentes que se registran como eventos en la bitácora de seguridad.

{% ifversion fpt or ghec %}

### Acciones de la categoría `billing`

| Acción | Descripción
|------------------|-------------------
| `change_billing_type` | Se desencadena al [cambiar la forma de pagar](/articles/adding-or-editing-a-payment-method) por {% data variables.product.prodname_dotcom %}.
| `change_email` | Se desencadena al [cambiar la dirección de correo electrónico](/articles/changing-your-primary-email-address).

### Acciones de la categoría `codespaces`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena al [crear un codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Se activa cuando reanudas un codespace suspendido.
| `delete` | Se desencadena al [eliminar un codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `manage_access_and_security` | Se desencadena al actualizar [los repositorios a los que tiene acceso un codespace](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `trusted_repositories_access_update` | Se desencadena al cambiar la [configuración de acceso y seguridad de {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces) de la cuenta personal.

### Acciones de la categoría `marketplace_agreement_signature`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando firmas el {% data variables.product.prodname_marketplace %} Acuerdo del programador.

### Acciones de la categoría `marketplace_listing`

| Acción | Descripción
|------------------|-------------------
| `approve` | Se activa cuando se aprueba tu lista para ser incluida en {% data variables.product.prodname_marketplace %}.
| `create` | Se activa cuando creas una lista para tu app en {% data variables.product.prodname_marketplace %}.
| `delist` | Se activa cuando se elimina tu lista de {% data variables.product.prodname_marketplace %}.
| `redraft` | Se activa cuando tu lista se vuelve a colocar en estado de borrador.
| `reject` | Se activa cuando no se acepta la inclusión de tu lista en {% data variables.product.prodname_marketplace %}.

{% endif %}

### Acciones de la categoría `oauth_authorization`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena al [conceder acceso a una {% data variables.product.prodname_oauth_app %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `destroy` | Se desencadena al [revocar el acceso de una {% data variables.product.prodname_oauth_app %} a la cuenta](/articles/reviewing-your-authorized-integrations) y cuando [se revocan las autorizaciones o expiran](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

{% ifversion fpt or ghec %}

### Acciones de la categoría `payment_method`

| Acción | Descripción
|------------------|-------------------
| `create` | Se activa cuando se agrega un nuevo método de pago, como una tarjeta de crédito o una cuenta de PayPal nueva.
| `update` | Se activa cuando se actualiza un método de pago existente.

{% endif %}

{% ifversion pat-v2 %}

### Acciones de la categoría `personal_access_token`

| Acción | Descripción
|------------------|-------------------
| `access_granted` | Se desencadena cuando a un {% data variables.product.pat_v2 %} que has creado se le concede acceso a los recursos.
| `access_revoked` | Se desencadena cuando se revoca un {% data variables.product.pat_v2 %} que has creado. El token sigue pudiendo leer los recursos públicos de la organización.
| `create` | Se desencadena cuando se crea un {% data variables.product.pat_v2 %}.
| `credential_regenerated` | Se desencadena cuando se regenera un {% data variables.product.pat_v2 %}.
| `destroy` | Se desencadena cuando se elimina un {% data variables.product.pat_v2 %}.
| `request_cancelled` | Se desencadena cuando se cancela una solicitud pendiente para que el {% data variables.product.pat_v2 %} acceda a los recursos de la organización.
| `request_created` | Se desencadena cuando se crea un{% data variables.product.pat_v2 %} para acceder a los recursos de la organización y esta requiere aprobación antes de que un {% data variables.product.pat_v2 %} pueda acceder a los recursos de la organización.
| `request_denied` | Se desencadena cuando se deniega una solicitud para que el {% data variables.product.pat_v2 %} acceda a los recursos de la organización. Para obtener más información, consulta "[Administración de solicitudes de {% data variables.product.pat_generic %} en la organización](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)".

{% endif %}

### Acciones de la categoría `profile_picture`

| Acción | Descripción
|------------------|-------------------
| `update` | Se desencadena al [establecer o actualizar la imagen de perfil](/articles/setting-your-profile-picture/).

### Acciones de la categoría `project`

| Acción | Descripción
|--------------------|---------------------
| `access` | Se activa cuando se modifica la visibilidad de un tablero de proyecto.
| `create` | Se activa cuando se crea un tablero de proyecto.
| `rename` | Se activa cuando se renombra un tablero de proyecto.
| `update` | Se activa cuando se actualiza un tablero de proyecto.
| `delete` | Se activa cuando se elimina un tablero de proyecto.
| `link`   | Se activa cuando un repositorio se vincula a un tablero de proyecto.
| `unlink` | Se activa cuando se anula el enlace a un repositorio desde un tablero de proyecto.
| `update_user_permission` | Se activa cuando se agrega o elimina un colaborador externo a un tablero de proyecto o cuando se cambia su nivel de permiso.

### Acciones de la categoría `public_key`

| Acción | Descripción
|------------------|-------------------
| `create` | Se desencadena al [agregar una nueva clave SSH pública a la cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/adding-a-new-ssh-key-to-your-github-account).
| `delete` | Se desencadena cuando [se elimina una clave SSH pública de la cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/reviewing-your-ssh-keys).

### Acciones de la categoría `repo`

| Acción | Descripción
|------------------|-------------------
| `access` | Se desencadena cuando se cambia un repositorio que posee [de "privado" a "público"](/articles/making-a-private-repository-public) (o viceversa).
| `add_member` | Se desencadena cuando a un usuario de {% data variables.product.product_name %} {% ifversion fpt or ghec %}[se le invita para tener acceso de colaboración](/articles/inviting-collaborators-to-a-personal-repository){% else %}[se le acceso de colaboración](/articles/inviting-collaborators-to-a-personal-repository){% endif %} a un repositorio.
| `add_topic` | Se desencadena cuando el propietario de un repositorio [agrega un tema](/articles/classifying-your-repository-with-topics) a un repositorio.
| `archived` | Se desencadena cuando el propietario de un repositorio [archiva un repositorio](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Se desencadena cuando el [acceso de lectura de Git anónimo está deshabilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.
| `config.enable_anonymous_git_access` | Se desencadena cuando el [acceso de lectura de Git anónimo está habilitado](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.
| `config.lock_anonymous_git_access` | Se desencadena cuando [la configuración de acceso de lectura de Git anónimo](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) de un repositorio está bloqueada.
| `config.unlock_anonymous_git_access` | Se desencadena cuando [la configuración de acceso de lectura de Git anónimo](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) de un repositorio está desbloqueada.{% endif %}
| `create` | Se desencadena cuando [se crea un repositorio](/articles/creating-a-new-repository).
| `destroy` |  Se desencadena cuando [se elimina un repositorio](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Se desencadena cuando se deshabilita un repositorio (por ejemplo, por [fondos insuficientes](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | Se desencadena cuando se descarga un archivo ZIP o TAR de un repositorio.
| `enable` | Se activa cuando se vuelve a habilitar un repositorio.{% endif %}
| `remove_member` | Se desencadena cuando un usuario de {% data variables.product.product_name %} se [quita de un repositorio como colaborador](/articles/removing-a-collaborator-from-a-personal-repository).
| `remove_topic` | Se activa cuando un propietario del repositorio elimina un tema de un repositorio.
| `rename` | Se desencadena cuando [se cambia el nombre de un repositorio](/articles/renaming-a-repository).
| `staff_unlock` | Se desencadena cuando el propietario de una empresa o {% data variables.contact.github_support %} (con permiso de un administrador del repositorio) desbloquea temporalmente el repositorio. No se cambia la visibilidad del repositorio.
| `transfer` | Se desencadena cuando [se transfiere un repositorio](/articles/how-to-transfer-a-repository).
| `transfer_start` | Se activa cuando está por ocurrir una transferencia de repositorio.
| `unarchived` | Se activa cuando un administrador del repositorio desarchiva un repositorio.

{% ifversion fpt or ghec %}
### Acciones de la categoría `sponsors`

| Acción | Descripción
|------------------|-------------------
| `custom_amount_settings_change` | Se desencadena al habilitar o deshabilitar importes personalizados, o bien al cambiar el importe personalizado sugerido (vea "[Administración de los niveles de patrocinio](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Se desencadena al cambiar el archivo FUNDING en el repositorio (vea "[Representación de un botón de patrocinador en el repositorio](/articles/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Se desencadena al cancelar un patrocinio (vea "[Cambio de un patrocinio a una versión anterior](/articles/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Se desencadena al patrocinar una cuenta (vea "[Patrocinio de un colaborador de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_payment_complete` | Se desencadena después de patrocinar una cuenta y procesar el pago (vea "[Patrocinio de un colaborador de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Se desencadena al cambiar si recibe actualizaciones de correo electrónico de un desarrollador patrocinado (vea "[Administración del patrocinio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Se desencadena al actualizar o cambiar el patrocinio a una versión anterior (consulta "[Actualización de un patrocinio](/articles/upgrading-a-sponsorship)" y "[Cambio de un patrocinio a una versión anterior](/articles/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Se desencadena cuando se aprueba la cuenta de {% data variables.product.prodname_sponsors %} (vea "[Configuración de {% data variables.product.prodname_sponsors %} para la cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_create` | Se desencadena cuando se crea la cuenta de {% data variables.product.prodname_sponsors %} (vea "[Configuración de {% data variables.product.prodname_sponsors %} para la cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_disable` | Se activa cuando se inhabilita tu cuenta de {% data variables.product.prodname_sponsors %}
| `sponsored_developer_redraft` | Se activa cuando tu cuenta de {% data variables.product.prodname_sponsors %} se devuelve a un estado de borrador desde un estado aprobado
| `sponsored_developer_profile_update` | Se desencadena al editar el perfil de desarrollador patrocinado (vea "[Edición de los detalles del perfil para {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Se desencadena cuando se envía la aplicación de {% data variables.product.prodname_sponsors %} para su aprobación (vea "[Configuración de {% data variables.product.prodname_sponsors %} para la cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_tier_description_update` | Se desencadena al cambiar la descripción de un nivel de patrocinio (consulta "[Administración de los niveles de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Se desencadena al enviar una actualización por correo electrónico a los patrocinadores (consulta "[Contacto con los patrocinadores](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Se desencadena cuando se le invita a unirse a {% data variables.product.prodname_sponsors %} desde la lista de espera (vea "[Configuración de {% data variables.product.prodname_sponsors %} para la cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `waitlist_join` | Se desencadena cuando se une a la lista de espera para convertirse en desarrollador patrocinado (cea "[Configuración de {% data variables.product.prodname_sponsors %} para la cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
{% endif %}

{% ifversion fpt or ghec %}
### Acciones de la categoría `successor_invitation`

| Acción | Descripción
|------------------|-------------------
| `accept` | Se desencadena al aceptar una invitación de sucesión (vea "[Mantenimiento de la continuidad de la propiedad de los repositorios de la cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `cancel` | Se desencadena al cancelar una invitación de sucesión (vea "[Mantenimiento de la continuidad de la propiedad de los repositorios de la cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `create` | Se desencadena al crear una invitación de sucesión (vea "[Mantenimiento de la continuidad de la propiedad de los repositorios de la cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `decline` | Se desencadena al declinar una invitación de sucesión (vea "[Mantenimiento de la continuidad de la propiedad de los repositorios de la cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `revoke` | Se desencadena al revocar una invitación de sucesión (vea "[Mantenimiento de la continuidad de la propiedad de los repositorios de la cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
{% endif %}

{% ifversion ghes or ghae %}

### Acciones de la categoría `team`

| Acción | Descripción
|------------------|-------------------
| `add_member` | Se desencadena cuando un miembro de una organización a la que pertenece [le agrega a un equipo](/articles/adding-organization-members-to-a-team).
| `add_repository` | Se activa cuando se le otorga el control de un repositorio a un equipo del que eres miembro.
| `create` | Se activa cuando se crea un equipo nuevo en una organización a la que perteneces.
| `destroy` | Se activa cuando un equipo del que eres miembro se elimina de la organización.
| `remove_member` | Se desencadena cuando un miembro de una organización se [quita de un equipo](/articles/removing-organization-members-from-a-team) del que forma parte.
| `remove_repository` | Se activa cuando un repositorio deja de estar bajo el control de un equipo.

{% endif %}

{% ifversion not ghae %}
### Acciones de la categoría `two_factor_authentication`

| Acción | Descripción
|------------------|-------------------
| `enabled` | Se desencadena la habilitar la [autenticación en dos fases](/articles/securing-your-account-with-two-factor-authentication-2fa).
| `disabled` | Se activa cuando se inhabilita la autenticación de dos factores.
{% endif %}

### Acciones de la categoría `user`

| Acción | Descripción
|--------------------|---------------------
| `add_email` | Se desencadena cuando {% ifversion not ghae %}[agrega una nueva dirección de correo electrónico](/articles/changing-your-primary-email-address){% else %}agrega una nueva dirección de correo electrónico{% endif %}.{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | Se desencadena cuando [permites que los codespaces que creas para que un repositorio accedan a otros repositorios propiedad de la cuenta personal](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `codespaces_trusted_repo_access_revoked` | Se desencadena cuando [impides que los codespaces que creas para que un repositorio accedan a otros repositorios propiedad de la cuenta personal](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). {% endif %}
| `create` | Se desencadena al crear una cuenta personal.{% ifversion not ghae %}
| `change_password` | Se activa cuando cambias tu contraseña.
| `forgot_password` | Se desencadena cuando solicita [un restablecimiento de contraseña](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count` | Se desencadena cuando [oculta las colaboraciones privadas en el perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `login` | Se desencadena cuando se inicia sesión en {% data variables.location.product_location %}.{% ifversion ghes or ghae %}.
`mandatory_message_viewed`   | Se desencadena al ver un mensaje obligatorio (vea "[Personalización de mensajes de usuario](/admin/user-management/customizing-user-messages-for-your-enterprise)" para más información) | {% endif %}
| `failed_login` | Se activa cuando no puedes iniciar sesión con éxito.
| `remove_email` | Se activa cuando eliminas una dirección de correo electrónico.
| `rename` | Se desencadena al cambiar el nombre de la cuenta.{% ifversion fpt or ghec %}
| `report_content` | Se desencadena al [notificar una incidencia o una solicitud de incorporación de cambios, o un comentario sobre una incidencia, solicitud de incorporación de cambios o confirmación](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}
| `show_private_contributions_count` | Se desencadena al [publicitar colaboraciones privadas en el perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% ifversion not ghae %}
| `two_factor_requested` | Se desencadena cuando {% data variables.product.product_name %} le pide el [código de autenticación en dos fases](/articles/accessing-github-using-two-factor-authentication).{% endif %}

### Acciones de la categoría `user_status`

| Acción | Descripción
|--------------------|---------------------
| `update` | Se activa cuando estableces o cambias el estado en tu perfil. Para más información, vea "[Establecimiento de un estado](/articles/personalizing-your-profile/#setting-a-status)".
| `destroy` | Se activa cuando eliminas el estado de tu perfil.
