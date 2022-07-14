---
title: Revisar tu registro de seguridad
intro: 'Puedes revisar la bitácora de seguridad de tu cuenta personal para entender mejor las acciones que has realizado y las que otros han realizado, las cuales te involucran.'
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
shortTitle: Registro de seguridad
---

## Acceder a tu registro de seguridad

La bitácora de seguridad lista todas las acciones que se llevaron a cabo en los últimos 90 días.

{% data reusables.user-settings.access_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. En la sección de "Archivos" de la barra lateral, haz clic en **{% octicon "log" aria-label="The log icon" %} Bitácora de seguridad**.
{% else %}
1. En la barra lateral de la configuración de usuario, da clic en **Registro de Seguridad**. ![Pestaña de registro de seguridad](/assets/images/help/settings/audit-log-tab.png)
{% endif %}

## Buscar tu registro de seguridad

{% data reusables.audit_log.audit-log-search %}

### Búsqueda basada en la acción realizada

Tus acciones activan los eventos que se listan en tu bitácora de seguridad. Las acciones se agrupan en las siguientes categorías:

| Nombre de la categoría                                                                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |{% ifversion fpt or ghec %}
| [`facturación`](#billing-category-actions)                                             | Contiene todas las actividades relacionadas con tu información de facturación.                                                                                                                                                                                                                                                                                                                                                             |
| [`codespaces`](#codespaces-category-actions)                                           | Contains all activities related to {% data variables.product.prodname_github_codespaces %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)".                                                                                                                                                                |
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contiene todas las actividades relacionadas con la firma del Acuerdo del programador de {% data variables.product.prodname_marketplace %}.                                                                                                                                                                                                                                                                                                 |
| [`marketplace_listing`](#marketplace_listing-category-actions)                         | Contiene todas las actividades relacionadas con el listado de aplicaciones en {% data variables.product.prodname_marketplace %}.{% endif %}
| [`oauth_access`](#oauth_access-category-actions)                                       | Contiene todas las actividades relacionadas con las [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) con las que te hayas conectado.{% ifversion fpt or ghec %}
| [`payment_method`](#payment_method-category-actions)                                   | Contiene todas las actividades relacionadas con el pago de tu suscripción de {% data variables.product.prodname_dotcom %}.{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                 | Contiene todas las actividades relacionadas con tu foto de perfil.                                                                                                                                                                                                                                                                                                                                                                         |
| [`project`](#project-category-actions)                                                 | Contiene todas las actividades relacionadas con los tableros de proyecto.                                                                                                                                                                                                                                                                                                                                                                  |
| [`public_key`](#public_key-category-actions)                                           | Contiene todas las actividades relacionadas con [tus claves SSH públicas](/articles/adding-a-new-ssh-key-to-your-github-account).                                                                                                                                                                                                                                                                                                          |
| [`repo`](#repo-category-actions)                                                       | Contiene todas las actividades relacionadas con los repositorios que te pertenecen.{% ifversion fpt or ghec %}
| [`sponsors`](#sponsors-category-actions)                                               | Contiene todos los eventos relacionados con {% data variables.product.prodname_sponsors %} y los botones de patrocinio (consulta las secciones "[Acerca de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)" y "[Mostrar el botón de patrocinio en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% ifversion ghes or ghae %}
| [`equipo`](#team-category-actions)                                                     | Contiene todas las actividades relacionadas con los equipos de los cuales formas parte.{% endif %}{% ifversion not ghae %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions)             | Contiene todas las actividades relacionadas con la [autenticación bifactorial](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %}
| [`usuario`](#user-category-actions)                                                    | Contiene todas las actividades relacionadas con tu cuenta.                                                                                                                                                                                                                                                                                                                                                                                 |

{% ifversion fpt or ghec %}

## Exportar tu registro de seguridad

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## Acciones de la bitácora de seguridad

Un resumen de algunas de las acciones más frecuentes que se registran como eventos en la bitácora de seguridad.

{% ifversion fpt or ghec %}

### acciones de la categoría `billing`

| Acción                                              | Descripción                                                                                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type (cambiar tipo de facturación)` | Se activa cuando [cambias la manera de pagar](/articles/adding-or-editing-a-payment-method) para {% data variables.product.prodname_dotcom %}. |
| `change_email (cambiar correo electrónico)`         | Se activa cuando [cambias tu dirección de correo electrónico](/articles/changing-your-primary-email-address).                                  |

### acciones de la categoría `codespaces`

| Acción                               | Descripción                                                                                                                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create (crear)`                     | Se activa cuando [creas un codespace](/github/developing-online-with-codespaces/creating-a-codespace).                                                                                                                           |
| `resume`                             | Se activa cuando reanudas un codespace suspendido.                                                                                                                                                                               |
| `delete`                             | Se activa cuando [borras un codespace](/github/developing-online-with-codespaces/deleting-a-codespace).                                                                                                                          |
| `manage_access_and_security`         | Se activa cuando actualizas [los repositorios a los que puede acceder un codespace](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).                                                      |
| `trusted_repositories_access_update` | Se activa cuando cambias los [ajustes de acceso y seguridad para {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces) en tu cuenta personal. |

### acciones de la categoría `marketplace_agreement_signature`

| Acción           | Descripción                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| `create (crear)` | Se activa cuando firmas el {% data variables.product.prodname_marketplace %} Acuerdo del programador. |

### acciones de la categoría `marketplace_listing`

| Acción                        | Descripción                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `aprobar`                     | Se activa cuando se aprueba tu lista para ser incluida en {% data variables.product.prodname_marketplace %}. |
| `create (crear)`              | Se activa cuando creas una lista para tu app en {% data variables.product.prodname_marketplace %}.           |
| `delist (quitar de la lista)` | Se activa cuando se elimina tu lista de {% data variables.product.prodname_marketplace %}.                   |
| `redraft`                     | Se activa cuando tu lista se vuelve a colocar en estado de borrador.                                         |
| `reject (rechazar)`           | Se activa cuando no se acepta la inclusión de tu lista en {% data variables.product.prodname_marketplace %}. |

{% endif %}

### Acciones de la categoría `oauth_authorization`

| Acción               | Descripción                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create (crear)`     | Se activa cuando [obtienes acceso a una {% data variables.product.prodname_oauth_app %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).                                                                                                                                                                                                  |
| `destroy (destruir)` | Se activa cuando [revocas un acceso a {% data variables.product.prodname_oauth_app %} a de tu cuenta](/articles/reviewing-your-authorized-integrations){% ifversion fpt or ghae or ghes > 3.2 or ghec %} y cuando [las autorizaciones se revocan o vencen](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).{% else %}.{% endif %}

{% ifversion fpt or ghec %}

### acciones de la categoría `payment_method`

| Acción           | Descripción                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `create (crear)` | Se activa cuando se agrega un método de pago nuevo, como una tarjeta de crédito nueva o una cuenta de PayPal. |
| `actualización`  | Se activa cuando se actualiza un método de pago existente.                                                    |

{% endif %}

### acciones de la categoría `profile_picture`

| Acción          | Descripción                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| `actualización` | Se activa cuando [estableces o actualizas tu foto de perfil](/articles/setting-your-profile-picture/). |

### acciones de la categoría `project`

| Acción                   | Descripción                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `access (acceder)`       | Se activa cuando se modifica la visibilidad de un tablero de proyecto.                                                       |
| `create (crear)`         | Se activa cuando se crear un tablero de proyecto.                                                                            |
| `rename (renombrar)`     | Se activa cuando se renombra un tablero de proyecto.                                                                         |
| `actualización`          | Se activa cuando se actualiza un tablero de proyecto.                                                                        |
| `delete`                 | Se activa cuando se elimina un tablero de proyecto.                                                                          |
| `link`                   | Se activa cuando un repositorio se vincula a un tablero de proyecto.                                                         |
| `unlink (desvincular)`   | Se activa cuando se anula el enlace a un repositorio desde un tablero de proyecto.                                           |
| `update_user_permission` | Se activa cuando se agrega o elimina un colaborador externo a un tablero de proyecto o cuando se cambia su nivel de permiso. |

### acciones de la categoría `public_key`

| Acción           | Descripción                                                                                                                                                                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create (crear)` | Se activa cuando [agregas una llave SSH pública a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}](/articles/adding-a-new-ssh-key-to-your-github-account). |
| `delete`         | Se activa cuando [eliminas una llave SSH pública a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}](/articles/reviewing-your-ssh-keys).                    |

### acciones de la categoría `repo`

| Acción                                                                                  | Descripción                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access (acceder)`                                                                      | Se activa cuando un repositorio que te pertenece se [cambia de "privado" a "público"](/articles/making-a-private-repository-public) (o viceversa).                                                                                                                                                                                             |
| `add_member (agregar miembro)`                                                          | Se activa cuando se invita a un {% data variables.product.product_name %} usuario {% ifversion fpt or ghec %}[a tener acceso de colaboración](/articles/inviting-collaborators-to-a-personal-repository){% else %}[otorgado el acceso de colaboración](/articles/inviting-collaborators-to-a-personal-repository){% endif %} a un repositorio. |
| `add_topic (agregar tema)`                                                              | Se activa cuando un propietario del repositorio [agrega un tema](/articles/classifying-your-repository-with-topics) a un repositorio.                                                                                                                                                                                                          |
| `archived (archivado)`                                                                  | Se activa cuando un propietario del repositorio [archiva un repositorio](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access (configurar inhabilitar el acceso de git anónimo)` | Se activa cuando [se inhabilita el acceso de lectura de Git anónimo](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.                                                                                                                                                                 |
| `config.enable_anonymous_git_access (configurar habilitar acceso de git anónimo)`       | Se activa cuando [se habilita el acceso de lectura de Git anónimo](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.                                                                                                                                                                   |
| `config.lock_anonymous_git_access (configurar bloquear acceso de git anónimo)`          | Se activa cuando se bloquea el parámetro de acceso de lectura de Git anónimo [de un repositorio](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).                                                                                                                                           |
| `config.unlock_anonymous_git_access (configurar desbloquear acceso de git anónimo)`     | Se activa cuando se desbloquea el parámetro de acceso de lectura de Git anónimo [de un repositorio](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create (crear)`                                                                        | Se activa cuando [se crea un repositorio nuevo](/articles/creating-a-new-repository).                                                                                                                                                                                                                                                          |
| `destroy (destruir)`                                                                    | Se activa cuando [se elimina un repositorio](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `inhabilitar`                                                                           | Se activa cuando un repositorio se inhabilita (por ejemplo, por [fondos insuficientes](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip`                                                                          | Se activa cuando se descarga un archivo ZIP o TAR de un repositorio.                                                                                                                                                                                                                                                                           |
| `habilitar`                                                                             | Se activa cuando se vuelve a habilitar un repositorio.{% endif %}
| `remove_member (eliminar miembro)`                                                      | Se activa cuando se elimina {% data variables.product.product_name %} un usuario [de un repositorio como colaborador](/articles/removing-a-collaborator-from-a-personal-repository).                                                                                                                                                           |
| `remove_topic (eliminar tema)`                                                          | Se activa cuando un propietario del repositorio elimina un tema de un repositorio.                                                                                                                                                                                                                                                             |
| `rename (renombrar)`                                                                    | Se activa cuando [se renombra un repositorio](/articles/renaming-a-repository).                                                                                                                                                                                                                                                                |
| `transferencia`                                                                         | Se activa cuando [se transfiere un repositorio](/articles/how-to-transfer-a-repository).                                                                                                                                                                                                                                                       |
| `transfer_start (comienzo de transferencia)`                                            | Se activa cuando está por ocurrir una transferencia de repositorio.                                                                                                                                                                                                                                                                            |
| `unarchived (desarchivado)`                                                             | Se activa cuando un administrador del repositorio desarchiva un repositorio.                                                                                                                                                                                                                                                                   |

{% ifversion fpt or ghec %}
### acciones de la categoría `sponsors`

| Acción                                                                                                            | Descripción                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom_amount_settings_change`                                                                                   | Se activa cuando habilitas o inhabilitas las cantidades personalizadas o cuando cambias la cantidad personalizada sugerida (consulta la secicón "[Administrar tus niveles de patrocinio](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")                                             |
| `repo_funding_links_file_action (acción de archivo de enlaces de financiamiento del repositorio)`                 | Se activa cuando cambias el archivo FUNDING de tu repositorio (consulta "[Mostrar un botón de patrocinador en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)")                                                                                                                                                 |
| `sponsor_sponsorship_cancel (cancelación del patrocinio del patrocinador)`                                        | Se activa cuando cancelas un patrocinio (consulta "[Bajar de categoría un patrocinio](/articles/downgrading-a-sponsorship)")                                                                                                                                                                                                              |
| `sponsor_sponsorship_create (creación de un patrocinio de patrocinador)`                                          | Se activa cuando patrocinas una cuenta (consulta la sección "[Patrocinar a un contribuyente de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")                                                                                                                                     |
| `sponsor_sponsorship_payment_complete`                                                                            | Se activa después de que patrocinas una cuenta y se procesa tu pago (consulta la sección "[Patrocinar a un contribuyente de código abierto](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")                                                                                                        |
| `sponsor_sponsorship_preference_change (cambio de preferencia de patrocinio de patrocinador)`                     | Se activa cuando cambias si deseas recibir actualizaciones por correo electrónico de un programador patrocinado o no (consulta la sección "[Administrar tu patrocinio](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")                                                                                         |
| `sponsor_sponsorship_tier_change (cambiar nivel de patrocinio de patrocinador)`                                   | Se activa cuando subes o bajas de categoría tu patrocinio (consulta "[Subir de categoría un patrocinio](/articles/upgrading-a-sponsorship)" y "[Bajar de categoría un patrocinio](/articles/downgrading-a-sponsorship)")                                                                                                                  |
| `sponsored_developer_approve (aprobación de programador patrocinado)`                                             | Se activa cuando tu cuenta de {% data variables.product.prodname_sponsors %} se aprueba (consulta la sección "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")                        |
| `sponsored_developer_create (creación de programador patrocinado)`                                                | Se activa cuando tu cuenta de {% data variables.product.prodname_sponsors %} se crea (consulta la sección "[Configurar a {% data variables.product.prodname_sponsors %} para tu cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")                         |
| `sponsored_developer_disable`                                                                                     | Se activa cuando se inhabilita tu cuenta de {% data variables.product.prodname_sponsors %}
| `sponsored_developer_redraft`                                                                                     | Se activa cuando tu cuenta de {% data variables.product.prodname_sponsors %} se devuelve a un estado de borrador desde un estado aprobado                                                                                                                                                                                                 |
| `sponsored_developer_profile_update (actualización del perfil de programador patrocinado)`                        | Se activa cuando editas tu perfil de desarrollador patrocinado (consulta la sección "[Editar tus detalles de perfil para {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")                                                     |
| `sponsored_developer_request_approval (aprobación de solicitud de programador patrocinado)`                       | Se activa cuando emites tu solicitud de {% data variables.product.prodname_sponsors %} para su aprobación (consulta la sección "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")      |
| `sponsored_developer_tier_description_update (actualización de descripción del nivel de programador patrocinado)` | Se activa cuando cambias la descripción de un nivel de patrocinio (consulta la sección "[Administrar tus niveles de patrocinio](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")                                                                                                               |
| `sponsored_developer_update_newsletter_send (envío de boletín de actualización del programador patrocinado)`      | Se activa cuando envías una actualización de correo electrónico a tus patrocinadores (consulta la sección "[Contactar a tus patrocinadores](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")                                                                                                          |
| `waitlist_invite_sponsored_developer (invitación a la lista de espera de programadores patrocinados)`             | Se activa cuando te invitan a unirte a {% data variables.product.prodname_sponsors %} desde la lista de espera (consulta la sección "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)") |
| `waitlist_join (incorporación a la lista de espera)`                                                              | Se activa cuando te unes a la lista de espera para convertirte en un desarrollador patrocinado (consulta la sección "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")                 |
{% endif %}

{% ifversion fpt or ghec %}
### acciones de la categoría `successor_invitation`

| Acción           | Descripción                                                                                                                                                                                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`         | Se activa cuando aceptas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
| `cancel`         | Se activa cuando cancelas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
| `create (crear)` | Se activa cuando creas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")    |
| `decline`        | Se activa cuando rechazas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
| `revoke`         | Se activa cuando revocas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta personal](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
{% endif %}

{% ifversion ghes or ghae %}

### acciones de la categoría `team`

| Acción                                     | Descripción                                                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member (agregar miembro)`             | Se activa cuando un miembro de una organización a la que perteneces te [agrega a un equipo](/articles/adding-organization-members-to-a-team).        |
| `add_repository (agregar repositorio)`     | Se activa cuando se le otorga el control de un repositorio a un equipo del que eres miembro.                                                         |
| `create (crear)`                           | Se activa cuando se crea un equipo nuevo en una organización a la que perteneces.                                                                    |
| `destroy (destruir)`                       | Se activa cuando un equipo del que eres miembro se elimina de la organización.                                                                       |
| `remove_member (eliminar miembro)`         | Se activa cuando un miembro de una organización se [elimina de un equipo](/articles/removing-organization-members-from-a-team) del que eres miembro. |
| `remove_repository (eliminar repositorio)` | Se activa cuando un repositorio deja de estar bajo el control de un equipo.                                                                          |

{% endif %}

{% ifversion not ghae %}
### acciones de la categoría `two_factor_authentication`

| Acción                    | Descripción                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `enabled (habilitado)`    | Se activa cuando se habilita la [autenticación de dos factores](/articles/securing-your-account-with-two-factor-authentication-2fa). |
| `disabled (inhabilitado)` | Se activa cuando se inhabilita la autenticación de dos factores.                                                                     |
{% endif %}

### acciones de la categoría `user`

| Acción                                                                                                                                                                                                                       | Descripción                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_email (agregar correo electrónico)`                                                                                                                                                                                     | Se activa cuando                                                                                                                                                                                                                                      |
| {% ifversion not ghae %}[agregas una dirección de correo electrónico nueva](/articles/changing-your-primary-email-address){% else %}agregas una dirección de correo electrónico nueva{% endif %}.{% ifversion fpt or ghec %} |                                                                                                                                                                                                                                                       |
| `codespaces_trusted_repo_access_granted`                                                                                                                                                                                     | Se activa cuando [permites que los codespaces que creas para que un repositorio accedan a otros repositorios que le pertenecen a tu cuenta personal](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).          |
| `codespaces_trusted_repo_access_revoked`                                                                                                                                                                                     | Se activa cuando [dejas de permitir que los codespaces que creas para que un repositorio accedan a otros repositorios que le pertenecen a tu cuenta personal](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). |{% endif %}
| `create (crear)`                                                                                                                                                                                                             | Se activa cuando creas una cuenta personal nueva.{% ifversion not ghae %}
| `change_password (cambiar contraseña)`                                                                                                                                                                                       | Se activa cuando cambias tu contraseña.                                                                                                                                                                                                               |
| `forgot_password (olvidé la contraseña)`                                                                                                                                                                                     | Se activa cuando pides [un restablecimiento de contraseña](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count (ocultar conteo de contribuciones privadas)`                                                                                                                                               | Se activa cuando [ocultas contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).                                                                                                          |
| `login`                                                                                                                                                                                                                      | Se activa cuando inicias sesión en {% data variables.product.product_location %}.{% ifversion ghes or ghae %}


`mandatory_message_viewed`   | Se activa cuando ves un mensaje obligatorio (consulta la sección "[Personalizar los mensajes de usuario](/admin/user-management/customizing-user-messages-for-your-enterprise)" para obtener más detalles) | |{% endif %}| | `failed_login` | Se activa cuando fallas en ingresar con éxito. | `remove_email` | Se activa cuando eliminas una dirección de correo electrónico. | `rename` | Se activa cuando vuelves a nombrar tu cuenta.{% ifversion fpt or ghec %} | `report_content` | Se activa cuando [reportas una propuesta o solicitud de cambios o un comentario en una propuesta, solicitud de cambios o confirmación](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %} | `show_private_contributions_count` | Se activa cuando [publicitas contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% ifversion not ghae %} | `two_factor_requested` | Se activa cuando {% data variables.product.product_name %} te pide tu [código de autenticación bifactorial](/articles/accessing-github-using-two-factor-authentication).{% endif %}

### acciones de la categoría `user_status`

| Acción               | Descripción                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actualización`      | Se activa cuando estableces o cambias el estado en tu perfil. Para obtener más información, consulta "[Configurar un estado](/articles/personalizing-your-profile/#setting-a-status)". |
| `destroy (destruir)` | Se activa cuando eliminas el estado de tu perfil.                                                                                                                                      |
