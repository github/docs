---
title: Acciones auditadas
intro: Puedes buscar el registro de auditoría para una gran variedad de acciones.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Security
---

## Autenticación

| Acción                               | Descripción                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `oauth_access.create`                | Un [Token de acceso de OAuth][] fue [generado][generate token] para la cuenta de un usuario.                             |
| `oauth_access.destroy`               | Un [Token de acceso de OAuth][] se eliminó de la cuenta de un usuario.                                                   |
| `oauth_application.destroy`          | Una [Aplicación de OAuth][] se eliminó de la cuenta de un usuario o de una organización.                                 |
| `oauth_application.reset_secret`     | Se restableció una [clave secreta de una aplicación de OAuth][].                                                         |
| `oauth_application.transfer`         | Una [aplicación de OAuth][] se transfirió de una cuenta de usuario o de organización a otra.                             |
| `public_key.create`                  | Una clave SSH se [agregó][add key] a una cuenta de usuario o una [llave de implementación][] se agregó a un repositorio. |
| `public_key.delete`                  | Una clave SSH se eliminó de una cuenta de usuario o una [llave de implementación][] se eliminó de un repositorio.        |
| `public_key.update`                  | Se actualizó una llave SSH de una cuenta de usuario o una [llave de despliegue][] de un repositorio.{% ifversion ghes %}
| `two_factor_authentication.enabled`  | [Se habilitó la autenticación de dos factores][2fa] para una cuenta de usuario.                                          |
| `two_factor_authentication.disabled` | Se inhabilitó la [Autenticación bifactorial][2fa] para una cuenta de usuario.{% endif %}

{% ifversion ghes %}
## {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

## Ganchos

| Acción                | Descripción                                         |
| --------------------- | --------------------------------------------------- |
| `hook.create`         | Se agregó un enlace nuevo a un repositorio.         |
| `hook.config_changed` | Se cambió la configuración de un enlace.            |
| `hook.destroy`        | Se eliminó un enlace.                               |
| `hook.events_changed` | Se cambiaron los eventos configurados de un enlace. |

## Configuración de ajustes de empresa

| Acción                                                  | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion ghes > 3.0 or ghae-next %}
| `business.advanced_security_policy_update`              | Un adminsitrador de sitio crea, actualiza o elimina una política para la {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta la sección "[Requerir políticas para la {% data variables.product.prodname_advanced_security %} en tu empresa](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)".{% endif %}
| `business.clear_members_can_create_repos`               | Un administrador de sitio elimina una restricción para la creación de repositorios en las organizciones de la empresa. Para obtener más información, consulta la sección "[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".{% ifversion ghes > 3.1 %}
| `business.referrer_override_enable`                     | Un administrador de sitio habilita la anulación de la política del referente. Para obtener más información, consulta la sección "[Configurar la política del referente para tu empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".                                                                                                                                                     |
| `business.referrer_override_disable`                    | Un administrador de sitio inhabilita la anulación de la política del referente. Para obtener más información, consulta la sección "[Configurar la política del referente para tu empresa](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)".{% endif %}
| `business.update_member_repository_creation_permission` | Un administrador de sitio restringe la creación de repositorios en las organizaciones de la empresa. Para obtener más información, consulta la sección "[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".{% ifversion ghes %}
| `enterprise.config.lock_anonymous_git_access`           | Un administrador de sitio bloquea el acceso de lectura anónima a Git para prevenir que los administradores de repositorio cambien dicha configuración para los repositorios de la empresa. Para obtener más información consulta la sección "[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".              |
| `enterprise.config.unlock_anonymous_git_access`         | Un administrador de sitio desbloquea el acceso de lectura anónima a Git para permitir que los administradores de repositorio cambien dicha configuración en los repositorios de la empresa. Para obtener más información, consulta la sección "[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)".{% endif %}

{% ifversion ghae %}

## Listas de IP permitidas

|                                     Nombre | Descripción                                                                                                       |
| ------------------------------------------:| ----------------------------------------------------------------------------------------------------------------- |
|               `ip_allow_list_entry.create` | Se agregó una dirección IP a una lista de IP permitidas.                                                          |
|               `ip_allow_list_entry.update` | Se cambió una dirección IP o su descripción.                                                                      |
|              `ip_allow_list_entry.destroy` | Se borró una dirección IP de una lista de IP permitidas.                                                          |
|                     `ip_allow_list.enable` | Se habilitó una lista de IP permitidas.                                                                           |
|  `ip_allow_list.enable_for_installed_apps` | Se habilitó una lista de IP permitidas para las {% data variables.product.prodname_github_apps %} instaladas.   |
|                    `ip_allow_list.disable` | Se inhabilitó una lista de IP permitidas.                                                                         |
| `ip_allow_list.disable_for_installed_apps` | Se inhabilitó una lista de IP permitidas para las {% data variables.product.prodname_github_apps %} instaladas. |

{% endif %}

## Problemas

| Acción                 | Descripción                                                                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issue.update`         | Cambió el texto del cuerpo de un problema (comentario inicial).                                                                                                             |
| `issue_comment.update` | Cambió un comentario sobre un problema (diferente al inicial).                                                                                                              |
| `issue.destroy`        | Se eliminó un problema del repositorio. Para obtener más información, consulta la sección "[Borrar una propuesta](/github/managing-your-work-on-github/deleting-an-issue)". |

## Organizaciones

| Acción             | Descripción                                                                                                                                                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | Un usuario inició una tarea en segundo plano para eliminar una organización.                                                                                                                                                                                          |
| `org.delete`       | Un job en segundo plano que inició un usuario ocasionó que una organización se borrara.{% ifversion not ghae %}
| `org.transform`    | Una cuenta de usuario se convirtió en una organización. Para obtener más información, consulta la sección "[Convertir a un usuario en una organización](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)".{% endif %}

## Solicitudes de cambios

| Acción | Descripción| | :- | :- |{% ifversion ghes > 3.1 or ghae-next %} | `pull_request.create` | Se creó una solicitud de cambios. Para obtener más información, consulta la sección"[Crear una solicitud de extracción](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)." | | `pull_request.close` | Se cerró una solicitud de cambios sin haberse fusionado. Para obtener más información, consulta la sección "[Cerrar una solicitud de cambios](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)". | | `pull_request.reopen` | Se volvió a abrir una solicitud de cambios después de haberla cerrado previamente. | | `pull_request.merge` | Se fusionó una solicitud de cambios. Para obtener más información, consulta "[Fusionar una solicitud de extracción](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)". | | `pull_request.indirect_merge` | Se consideró a una solicitud de cambios como fusionada porque las confirmaciones de esta se fusionaron en la rama destino. | | `pull_request.ready_for_review` | Se marcó a una solicitud de cambios como lista para revisión. Para obtener más información, consulta la sección "[Cambiar el estado de una solicitud de extracción](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)". | | `pull_request.converted_to_draft` | Se convirtió a una solicitud de cambios en borrador. Para obtener más información, consulta la sección "[Cambiar el estado de una solicitud de extracción](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)". | | `pull_request.create_review_request` | Se solicitó una revisión en una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de las revisiones de las solicitudes de extracción](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request.remove_review_request` | Se eliminó una solicitud de revisión de una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de las revisiones de las solicitudes de extracción](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request_review.submit` | Se emitió una revisión para una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de las revisiones de las solicitudes de extracción](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request_review.dismiss` | Se descartó una revisión en una solicitud de cambios. Para obtener más información, consulta "[Descartar una revisión de solicitud de extracción](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)". | | `pull_request_review.delete` | Se eliminó una revisión en una solicitud de cambios. | | `pull_request_review_comment.create` | Se agregó un comentario de revisión a una solicitud de cambios. Para obtener más información, consulta la sección "[Acerca de las revisiones de las solicitudes de extracción](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)". | | `pull_request_review_comment.update` | Se cambió un comentario de revisión en una solicitud de cambios. |{% endif %} | `pull_request_review_comment.delete` | Se borró un comentario de revisión en una solicitud de cambios. |

## Ramas protegidas

| Acción                                                             | Descripción                                                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `protected_branch.create`                                          | La protección de rama está habilitada para una rama.                                                   |
| `protected_branch.destroy`                                         | La protección de rama está inhabilitada para una rama.                                                 |
| `protected_branch.update_admin_enforced`                           | La protección de rama es obligatoria para los administradores de repositorios.                         |
| `protected_branch.update_require_code_owner_review`                | Se atualiza la imposición de las revisiones requeridas de los propietarios del código en una rama.     |
| `protected_branch.dismiss_stale_reviews`                           | El cumplimiento de las solicitudes de extracción en espera descartadas está actualizado para una rama. |
| `protected_branch.update_signature_requirement_enforcement_level`  | El cumplimiento de la firma de confirmación obligatoria está actualizado para una rama.                |
| `protected_branch.update_pull_request_reviews_enforcement_level`   | El cumplimiento de la revisión obligatoria de solicitud de extracción está actualizado para una rama.  |
| `protected_branch.update_required_status_checks_enforcement_level` | El cumplimiento de las verificaciones de estado obligatorias está actualizado para una rama.           |
| `protected_branch.rejected_ref_update`                             | Se rechaza el intento de actualización de una rama.                                                    |
| `protected_branch.policy_override`                                 | Un administrador de repositorios anula el requisito de protección de una rama.                         |

## Repositorios

| Acción                                     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.access`                              | La visbilidad de un repositorio cambió a privado{% ifversion ghes %}, público,{% endif %} o interno.                                                                                                                                                                                                                                                                                                                                                                       |
| `repo.archived`                            | Se archivó un repositorio. Para obtener más información, consulta la sección "[Archivar un repositorio de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".                                                                                                                                                                                                                               |
| `repo.add_member`                          | Se agregó un colaborador a un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `repo.config`                              | Un administrador de sitio bloqueó los empujes forzados. Para obtener más información, consulta [Bloquear los empujes forzados para un repositorio](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/) para un repositorio.                                                                                                                                                                                           |
| `repo.create`                              | Se creó un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `repo.destroy`                             | Se eliminó un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `repo.remove_member`                       | Se eliminó un colaborador de un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `repo.rename`                              | Se renombró un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `repo.transfer`                            | Un usuario aceptó una solicitud para recibir un repositorio transferido.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `repo.transfer_start`                      | Un usuario envió una solicitud para transferir un repositorio a otro usuario u organización.                                                                                                                                                                                                                                                                                                                                                                               |
| `repo.unarchived`                          | Un repositorio dejó de estar archivado. Para obtener más información, consulta la sección "[Archivar un repositorio de {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)".{% ifversion ghes %}
| `repo.config.disable_anonymous_git_access` | El acceso de lectura anónima de Git se encuentra inhabilitado para un repositorio. Para obtener más información, consulta la sección "[Habilitar el acceso de lectura anónima en Git para un repositorio](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".                                                                                                                                                            |
| `repo.config.enable_anonymous_git_access`  | El acceso de lectura anónima de Git se encuentra habilitado para un repositorio. Para obtener más información, consulta la sección "[Habilitar el acceso de lectura anónima en Git para un repositorio](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".                                                                                                                                                              |
| `repo.config.lock_anonymous_git_access`    | La configuración del acceso de lectura anónimo de Git para un repositorio está bloqueada, lo cual evita que los administradores de repositorios cambien (habiliten o deshabiliten) esta configuración. Para obtener más información, consulta la sección "[Prevenir que los usuarios cambien el acceso de lectura anónimo de Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".                |
| `repo.config.unlock_anonymous_git_access`  | La configuración del acceso de lectura anónimo de Git para un repositorio está desbloqueada, lo cual permite que los administradores del repositorio cambien (habiliten o inhabiliten) esta configuración. Para obtener más información, consulta la sección "[Prevenir que los usuarios cambien el acceso de lectura anónimo de Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)".{% endif %}

## Herramientas del admin del sitio

| Acción               | Descripción                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo` | Un administrador del sitio inhabilitó el acceso a un repositorio y a todas sus bifurcaciones.                                   |
| `staff.enable_repo`  | Un administrador del sitio volvió a habilitar el acceso a un repositorio y a todas sus bifurcaciones.                           |
| `staff.fake_login`   | Un administrador del sitio inició sesión en {% data variables.product.product_name %} como otro usuario.                        |
| `staff.repo_unlock`  | Un administrador del sitio desbloqueó (obtuvo acceso total de manera temporaria) uno de los repositorios privados del usuario.  |
| `staff.unlock`       | Un administrador del sitio desbloqueó (obtuvo acceso total de manera temporaria) todos los repositorios privados de un usuario. |

## Equipos

| Acción                    | Descripción                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| `team.create`             | Se agregó una cuenta de usuario o repositorio a un equipo.                                |
| `team.delete`             | A user account or repository was removed from a team.{% ifversion ghes or ghae %}
| `team.demote_maintainer`  | Se bajó de categoría a un usuario de mantenedor de equipo a miembro de equipo.{% endif %}
| `team.destroy`            | Se borró un equipo.{% ifversion ghes or ghae %}
| `team.promote_maintainer` | Se promovió a un usuario de miembro de equipo a mantenedor de equipo.{% endif %}

## Usuarios

| Acción                          | Descripción                                                                                                                                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `user.add_email`                | Se agregó una dirección de correo electrónico a una cuenta de usuario.                                                                                                                                 |
| `user.async_delete`             | Se inició un job asincrónico para destruir una cuenta de usuario, lo cual finalmente activó a `user.delete`.{% ifversion ghes %}
| `user.change_password`          | Un usuario cambió su contraseña.{% endif %}
| `user.create`                   | Se creó una cuenta de usuario nueva.                                                                                                                                                                   |
| `user.delete`                   | Se destruyó una cuenta de usuario mediante una tarea asincrónica.                                                                                                                                      |
| `user.demote`                   | Se disminuyó el nivel de un administrador del sitio a cuenta de usuario común.                                                                                                                         |
| `user.destroy`                  | Un usuario borró su cuenta, lo cual activó a `user.async_delete`.{% ifversion ghes %}
| `user.failed_login`             | Un usuario intentó registrarse con un nombre de usuario, contraseña o código de autenticación de dos factores incorrecto.                                                                              |
| `user.forgot_password`          | Un usuario solicitó el restablecimiento de una contraseña a través de la página de inicio de sesión.{% endif %}
| `user.login`                    | Un usuario inició sesión.{% ifversion ghes or ghae %}
| `user.mandatory_message_viewed` | Un usuario vió un mensaje mandatorio (consulta "[Personalizar los mensajes de usuario](/admin/user-management/customizing-user-messages-for-your-enterprise)" para obtener más detalles) | {% endif %}
| `user.promote`                  | Se ascendió una cuenta de usuario común a administrador del sitio.                                                                                                                                     |
| `user.remove_email`             | Se eliminó una dirección de correo electrónico de una cuenta de usuario.                                                                                                                               |
| `user.rename`                   | Se cambió un nombre de usuario.                                                                                                                                                                        |
| `user.suspend`                  | Un administrador de sitio suspendió una cuenta de usuario.{% ifversion ghes %}
| `user.two_factor_requested`     | Se solicitó a un usuario ingresar un código de autenticación bifactorial.{% endif %}
| `user.unsuspend`                | Un administrador del sitió dejó de suspender una cuenta de usuario.                                                                                                                                    |

{% ifversion ghes > 3.1 or ghae-issue-1157 %}
## Flujos de trabajo

{% data reusables.actions.actions-audit-events-workflow %}
{% endif %}

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [llave de implementación]: /guides/managing-deploy-keys/#deploy-keys
  [llave de despliegue]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [Token de acceso de OAuth]: /developers/apps/authorizing-oauth-apps
  [Aplicación de OAuth]: /guides/basics-of-authentication/#registering-your-app
  [clave secreta de una aplicación de OAuth]: /guides/basics-of-authentication/#registering-your-app
  [aplicación de OAuth]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
