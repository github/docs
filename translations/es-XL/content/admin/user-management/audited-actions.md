---
title: Acciones auditadas
intro: Puedes buscar el registro de auditoría para una gran variedad de acciones.
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
---

#### Autenticación

|                               Nombre | Descripción                                                                                                              |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------------ |
|                `oauth_access.create` | Un [Token de acceso de OAuth][] fue [generado][generate token] para la cuenta de un usuario.                             |
|               `oauth_access.destroy` | Un [Token de acceso de OAuth][] se eliminó de la cuenta de un usuario.                                                   |
|          `oauth_application.destroy` | Una [Aplicación de OAuth][] se eliminó de la cuenta de un usuario o de una organización.                                 |
|     `oauth_application.reset_secret` | Se restableció una [clave secreta de una aplicación de OAuth][].                                                         |
|         `oauth_application.transfer` | Una [aplicación de OAuth][] se transfirió de una cuenta de usuario o de organización a otra.                             |
|                  `public_key.create` | Una clave SSH se [agregó][add key] a una cuenta de usuario o una [llave de implementación][] se agregó a un repositorio. |
|                  `public_key.delete` | Una clave SSH se eliminó de una cuenta de usuario o una [llave de implementación][] se eliminó de un repositorio.        |
|                  `public_key.update` | La clave SSH de una cuenta de usuario o la llave de implementación de un [repositorio][] se actualizó.                   |
|  `two_factor_authentication.enabled` | [Se habilitó la autenticación de dos factores][2fa] para una cuenta de usuario.                                          |
| `two_factor_authentication.disabled` | [Se inhabilitó la autenticación de dos factores][2fa] para una cuenta de usuario.                                        |

#### Ganchos

|                Nombre | Descripción                                         |
| ---------------------:| --------------------------------------------------- |
|         `hook.create` | Se agregó un enlace nuevo a un repositorio.         |
| `hook.config_changed` | Se cambió la configuración de un enlace.            |
|        `hook.destroy` | Se eliminó un enlace.                               |
| `hook.events_changed` | Se cambiaron los eventos configurados de un enlace. |

#### Ajustes de configuración de la instancia

|                                                  Nombre | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `business.update_member_repository_creation_permission` | Un administrador del sitio restringe la creación de repositorios en las organizaciones de la instancia. Para obtener más información, consulta "[Restringir la creación de repositorios en tu instancia](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)."                                                                                                                                                                |
|               `business.clear_members_can_create_repos` | Un administrador del sitio elimina una restricción de creación de repositorios en las organizaciones de la instancia. Para obtener más información, consulta "[Restringir la creación de repositorios en tu instancia](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)."                                                                                                                                                  |
|           `enterprise.config.lock_anonymous_git_access` | Un administrador del sitio bloquea el acceso de lectura anónimo de Git para evitar que los administradores del repositorio cambien las configuraciones existentes de acceso de lectura anónimo de Git para los repositorios de la instancia. Para obtener más información, consulta "[Evitar que los usuarios cambien el acceso de lectura anónimo de Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."      |
|         `enterprise.config.unlock_anonymous_git_access` | Un administrador del sitio desbloquea el acceso de lectura anónimo de Git para permitir que los administradores del repositorio cambien las configuraciones existentes de acceso de lectura anónimo de Git para los repositorios de la instancia. Para obtener más información, consulta "[Evitar que los usuarios cambien el acceso de lectura anónimo de Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)." |

#### Propuestas y solicitudes de extracción

|                               Nombre | Descripción                                                                                                                                                              |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                       `issue.update` | Cambió el texto del cuerpo de un problema (comentario inicial).                                                                                                          |
|               `issue_comment.update` | Cambió un comentario sobre un problema (diferente al inicial).                                                                                                           |
| `pull_request_review_comment.delete` | Se detectó un comentario en una solicitud de extracción.                                                                                                                 |
|                      `issue.destroy` | Se eliminó un problema del repositorio. Para obtener más información, consulta "[Eliminar un problema](/enterprise/{{ currentVersion }}/user/articles/deleting-an-issue)." |

#### Organizaciones

|             Nombre | Descripción                                                                                                                                                                                                                     |
| ------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | Un usuario inició una tarea en segundo plano para eliminar una organización.                                                                                                                                                    |
|       `org.delete` | Se eliminó una organización con una tarea de segundo plano iniciada por un usuario.                                                                                                                                             |
|    `org.transform` | Una cuenta de usuario se convirtió en una organización. Para obtener más información, consulta [Convertir un usuario en una organización](/enterprise/{{ currentVersion}}/user/articles/converting-a-user-into-an-organization/). |

#### Ramas protegidas

|                                                             Nombre | Descripción                                                                                            |
| ------------------------------------------------------------------:| ------------------------------------------------------------------------------------------------------ |
|                                          `protected_branch.create` | La protección de rama está habilitada para una rama.                                                   |
|                                         `protected_branch.destroy` | La protección de rama está inhabilitada para una rama.                                                 |
|                           `protected_branch.update_admin_enforced` | La protección de rama es obligatoria para los administradores de repositorios.                         |
|                `protected_branch.update_require_code_owner_review` | El cumplimiento de la revisión obligatoria del propietario del código está actualizado para una rama.  |
|                           `protected_branch.dismiss_stale_reviews` | El cumplimiento de las solicitudes de extracción en espera descartadas está actualizado para una rama. |
|  `protected_branch.update_signature_requirement_enforcement_level` | El cumplimiento de la firma de confirmación obligatoria está actualizado para una rama.                |
|   `protected_branch.update_pull_request_reviews_enforcement_level` | El cumplimiento de la revisión obligatoria de solicitud de extracción está actualizado para una rama.  |
| `protected_branch.update_required_status_checks_enforcement_level` | El cumplimiento de las verificaciones de estado obligatorias está actualizado para una rama.           |
|                             `protected_branch.rejected_ref_update` | Se rechaza el intento de actualización de una rama.                                                    |
|                                 `protected_branch.policy_override` | Un administrador de repositorios anula el requisito de protección de una rama.                         |

#### Repositorios

|                                     Nombre | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                              `repo.access` | Un repositorio privado se volvió público, o un repositorio público se volvió privado.                                                                                                                                                                                                                                                                                                                                                            |
|                             `repo.archive` | Se archivó un repositorio. Para obtener más información, consulta [Archivar y dejar de archivar repositorios](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/).                                                                                                                                                                                                                              |
|                          `repo.add_member` | Se agregó un colaborador a un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                       |
|                              `repo.config` | Un administrador de sitio bloqueó los empujes forzados. Para obtener más información, consulta [Bloquear los empujes forzados para un repositorio](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/) para un repositorio.                                                                                                                                                                   |
|                              `repo.create` | Se creó un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                             `repo.destroy` | Se eliminó un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                       `repo.remove_member` | Se eliminó un colaborador de un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                     |
|                              `repo.rename` | Se renombró un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                            `repo.transfer` | Un usuario aceptó una solicitud para recibir un repositorio transferido.                                                                                                                                                                                                                                                                                                                                                                         |
|                      `repo.transfer_start` | Un usuario envió una solicitud para transferir un repositorio a otro usuario u organización.                                                                                                                                                                                                                                                                                                                                                     |
|                           `repo.unarchive` | Un repositorio dejó de estar archivado. Para obtener más información, consulta [Archivar y dejar de archivar repositorios](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/).                                                                                                                                                                                                                 |
| `repo.config.disable_anonymous_git_access` | El acceso de lectura anónimo de Git está inhabilitado para un repositorio público. Para obtener más información, consulta "[Habilitar acceso de lectura anónimo de Git para un repositorio](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)."                                                                                                                                                  |
|  `repo.config.enable_anonymous_git_access` | El acceso de lectura anónimo de Git está habilitado para un repositorio público. Para obtener más información, consulta "[Habilitar acceso de lectura anónimo de Git para un repositorio](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)."                                                                                                                                                    |
|    `repo.config.lock_anonymous_git_access` | La configuración del acceso de lectura anónimo de Git para un repositorio está bloqueada, lo cual evita que los administradores de repositorios cambien (habiliten o deshabiliten) esta configuración. Para obtener más información, consulta "[Evitar que los usuarios cambien el acceso de lectura anónimo de Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."     |
|  `repo.config.unlock_anonymous_git_access` | La configuración del acceso de lectura anónimo de Git para un repositorio está desbloqueada, lo cual permite que los administradores del repositorio cambien (habiliten o inhabiliten) esta configuración. Para obtener más información, consulta "[Evitar que los usuarios cambien el acceso de lectura anónimo de Git](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)." |

#### Herramientas del admin del sitio

|               Nombre | Descripción                                                                                                                     |
| --------------------:| ------------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo` | Un administrador del sitio inhabilitó el acceso a un repositorio y a todas sus bifurcaciones.                                   |
|  `staff.enable_repo` | Un administrador del sitio volvió a habilitar el acceso a un repositorio y a todas sus bifurcaciones.                           |
|   `staff.fake_login` | Un administrador del sitio inició sesión en {% data variables.product.prodname_enterprise %} como otro usuario.            |
|  `staff.repo_unlock` | Un administrador del sitio desbloqueó (obtuvo acceso total de manera temporaria) uno de los repositorios privados del usuario.  |
|       `staff.unlock` | Un administrador del sitio desbloqueó (obtuvo acceso total de manera temporaria) todos los repositorios privados de un usuario. |

#### Equipos

|         Nombre | Descripción                                                  |
| --------------:| ------------------------------------------------------------ |
|  `team.create` | Se agregó una cuenta de usuario o repositorio a un equipo.   |
|  `team.delete` | Se eliminó una cuenta de usuario o repositorio de un equipo. |
| `team.destroy` | Se eliminó un equipo.                                        |

#### Usuarios

|                      Nombre | Descripción                                                                                                               |
| ---------------------------:| ------------------------------------------------------------------------------------------------------------------------- |
|            `user.add_email` | Se agregó una dirección de correo electrónico a una cuenta de usuario.                                                    |
|         `user.async_delete` | Se inició una tarea sincrónica para destruir una cuenta de usuario, lo que finalmente disparó `user.delete`.              |
|      `user.change_password` | Un usuario cambió su contraseña.                                                                                          |
|               `user.create` | Se creó una cuenta de usuario nueva.                                                                                      |
|               `user.delete` | Se destruyó una cuenta de usuario mediante una tarea asincrónica.                                                         |
|               `user.demote` | Se disminuyó el nivel de un administrador del sitio a cuenta de usuario común.                                            |
|              `user.destroy` | Un usuario eliminó su cuenta, lo que disparó `user.async_delete`.                                                         |
|         `user.failed_login` | Un usuario intentó registrarse con un nombre de usuario, contraseña o código de autenticación de dos factores incorrecto. |
|      `user.forgot_password` | Un usuario solicitó un restablecimiento de contraseña a través de la página de inicio de sesión.                          |
|                `user.login` | Un usuario inició sesión.                                                                                                 |
|              `user.promote` | Se ascendió una cuenta de usuario común a administrador del sitio.                                                        |
|         `user.remove_email` | Se eliminó una dirección de correo electrónico de una cuenta de usuario.                                                  |
|               `user.rename` | Se cambió un nombre de usuario.                                                                                           |
|              `user.suspend` | Un administrador del sitio suspendió una cuenta de usuario.                                                               |
| `user.two_factor_requested` | Se solicitó un código de autenticación de dos factores a un usuario.                                                      |
|            `user.unsuspend` | Un administrador del sitió dejó de suspender una cuenta de usuario.                                                       |

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [llave de implementación]: /guides/managing-deploy-keys/#deploy-keys
  [repositorio]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [Token de acceso de OAuth]: /v3/oauth/
  [Aplicación de OAuth]: /guides/basics-of-authentication/#registering-your-app
  [clave secreta de una aplicación de OAuth]: /guides/basics-of-authentication/#registering-your-app
  [aplicación de OAuth]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
