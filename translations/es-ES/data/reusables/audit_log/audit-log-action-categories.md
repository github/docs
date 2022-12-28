---
ms.openlocfilehash: 1dd9305ca2b7cb3e8d25d697de8ae3a83e0c46bb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: "148183984"
---
| Nombre de la categoría | Descripción
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | Contiene las actividades relacionadas con una cuenta de la organización.
| `advisory_credit`   | Contiene las actividades relacionadas con darle crédito a un contribuyente por una asesoría de seguridad en la {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta "[Acerca de los avisos de seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
{%- endif %} | `artifact` | Contiene las actividades relacionadas con los artefactos de ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}.
{%- ifversion audit-log-streaming %} | `audit_log_streaming` | Contiene las actividades relacionadas con la transmisión de registros de auditoría para las organizaciones de una cuenta empresarial.
{%- endif %} {%- ifversion fpt or ghec %} | `billing` | Contiene las actividades relacionadas con la facturación de una organización.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business`  | Contiene las actividades relacionadas con la configuración de negocio de una empresa.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | Contiene actividades relacionadas con {% data variables.product.prodname_GH_advanced_security %} en una empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning` | Contiene actividades relacionadas con {% data variables.product.prodname_secret_scanning %} en una empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | Contiene actividades relacionadas con patrones personalizados para {% data variables.product.prodname_secret_scanning %} en una empresa.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | Contiene actividades relacionadas con la característica de protección de inserción de {% data variables.product.prodname_secret_scanning %} en una empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
| `business_secret_scanning_push_protection_custom_message` | Contiene actividades relacionadas con el mensaje personalizado que se muestra cuando se desencadena la protección de inserción en una empresa. Para obtener más información, consulta "[Administración de características de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".
{%- endif %} | `checks`   | Contiene las actividades relacionadas con la comprobación de conjuntos de pruebas y ejecuciones.
{%- ifversion fpt or ghec %} | `codespaces` | Contiene las actividades relacionadas con los codespaces de una organización.
{%- endif %} | `commit_comment` | Contiene las actividades relacionadas con la actualización o eliminación de comentarios de confirmación.
{%- ifversion ghes %} | `config_entry` |  Contiene actividades relacionadas con las opciones de configuración. Estos eventos solo son visibles en el registro de auditoría del administrador del sitio.
{%- endif %} | `dependabot_alerts` | Contiene actividades de configuración a nivel de organización para {% data variables.product.prodname_dependabot_alerts %} en los repositorios existentes. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".
| `dependabot_alerts_new_repos`   | Contiene las actividades de configuración a nivel de organización para las {% data variables.product.prodname_dependabot_alerts %} en los repositorios nuevos que se crearon en la organización.
| `dependabot_repository_access` | Contiene las actividades relacionadas con los repositorios privados de una organización para los que {% data variables.product.prodname_dependabot %} tiene permiso de acceso.
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates`   | Contiene actividades de configuración a nivel de organización para {% data variables.product.prodname_dependabot_security_updates %} en los repositorios existentes. Para obtener más información, consulta "[Configuración de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".
| `dependabot_security_updates_new_repos` | Contiene las actividades de configuración a nivel de organización para {% data variables.product.prodname_dependabot_security_updates %} para los repositorios nuevos que se crean en ella.
{%- endif %} | `dependency_graph` | Contiene las actividades de configuración a nivel de organización para los gráficos de dependencias de los repositorios. Para obtener más información, consulta "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| `dependency_graph_new_repos`  | Contiene las actividades de configuración a nivel de organización para los repositorios nuevos que se crean en ella.
{%- ifversion fpt or ghec %} | `discussion` | Contiene las actividades relacionadas con los debates de equipo.
| `discussion_comment` | Contiene las actividades relacionadas con los comentarios publicados en los debates de una página de equipo.
| `discussion_post`   | Contiene las actividades relacionadas con los debates publicados en una página de equipo.
| `discussion_post_reply`   | Contiene las actividades relacionadas con las respuestas a los debates publicados en una página de equipo.
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | Contiene las actividades relacionadas con {% data variables.product.prodname_github_connect %}.
| `enterprise` | Contiene las actividades relacionadas con la configuración de la empresa.
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | Contiene las actividades relacionadas con los dominios verificados de la empresa.
| `enterprise_installation` | Contiene las actividades relacionadas con las {% data variables.product.prodname_github_app %} asociadas con una conexión empresarial de {% data variables.product.prodname_github_connect %}.
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | Contiene las actividades relacionadas con los entornos de {% data variables.product.prodname_actions %}.
{%- endif %} {%- ifversion ghae %} | `external_group` | Contiene las actividades relacionadas con los grupos de Okta.
| `external_identity` | Contiene las actividades relacionadas con un usuario de un grupo de Okta.
{%- endif %} | `gist` | Contiene actividades relacionadas con Gists.
| `hook` | Contiene las actividades relacionadas con los webhooks.
| `integration` | Contiene las actividades relacionadas con las integraciones de una cuenta.
| `integration_installation` | Contiene las actividades relacionadas con las integraciones instaladas en una cuenta.
| `integration_installation_request`  | Contiene las actividades relacionadas con las solicitudes de los miembros de una organización para que los propietarios aprueben integraciones para su uso en la organización.
{%- ifversion ghec or ghae %} | `ip_allow_list`   | Contiene las actividades relacionadas con la habilitación o deshabilitación de la lista de direcciones IP permitidas de una organización.
| `ip_allow_list_entry`   | Contiene las actividades relacionadas con la creación, eliminación y edición de una entrada en una lista de direcciones IP permitidas de una organización.
{%- endif %} | `issue`  | Contiene las actividades relacionadas con el anclaje, transferencia o eliminación de una propuesta en un repositorio.
| `issue_comment` | Contiene las actividades relacionadas con el anclaje, transferencia o eliminación de comentarios de propuestas.
| `issues` | Contiene las actividades relacionadas con la habilitación o deshabilitación de la creación de propuestas para una organización.
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | Contiene las actividades relacionadas con la firma del Acuerdo para desarrolladores de {% data variables.product.prodname_marketplace %}.
| `marketplace_listing` | Contiene las actividades relacionadas con la publicación de aplicaciones en {% data variables.product.prodname_marketplace %}.
{%- endif %} | `members_can_create_pages`   | Contiene las actividades relacionadas con la administración de la publicación de sitios de {% data variables.product.prodname_pages %} para repositorios de la organización. Para obtener más información, consulta "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
| `members_can_create_private_pages` | Contiene las actividades relacionadas con la administración de la publicación de sitios de {% data variables.product.prodname_pages %} privados para repositorios de la organización.
| `members_can_create_public_pages` | Contiene las actividades relacionadas con la administración de la publicación de sitios de {% data variables.product.prodname_pages %} públicos para repositorios de la organización.
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | Contiene las actividades relacionadas con la habilitación o deshabilitación de la creación de repositorios para una organización.
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | Contiene las actividades de configuración a nivel de organización que permiten a los miembros de la organización ver la información sobre dependencias.
| `migration` | Contiene las actividades relacionadas con la transferencia de datos desde una ubicación de *origen* (como, por ejemplo, una organización de {% data variables.product.prodname_dotcom_the_website %} o una instancia de {% data variables.product.prodname_ghe_server %}) a una instancia de {% data variables.product.prodname_ghe_server %} de *destino*.
{%- endif %} | `oauth_access` | Contiene las actividades relacionadas con los tokens de acceso de OAuth.
| `oauth_application` | Contiene las actividades relacionadas con las aplicaciones de OAuth.
{%- ifversion fpt or ghec %} | `oauth_authorization` | Contiene las actividades relacionadas con la autorización de aplicaciones de OAuth.
{%- endif %} | `org`   | Contiene las actividades relacionadas con la pertenencia a la organización.
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | Contiene las actividades relacionadas con la autorización de credenciales para su uso con el inicio de sesión único de SAML.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | Contiene las actividades relacionadas con los patrones personalizados para el análisis de secretos de una organización. Para obtener más información, consulta "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".
| `org.secret_scanning_push_protection` | Contiene las actividades relacionadas con los patrones personalizados de análisis de secretos de una organización. Para obtener más información, consulta "[Protección de inserciones para el análisis de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %} | `organization_default_label` | Contiene las actividades relacionadas con las etiquetas predeterminadas para los repositorios de una organización.
{%- ifversion fpt or ghec or ghes %} | `organization_domain` | Contiene las actividades relacionadas con los dominios verificados de una organización.
| `organization_projects_change` | Contiene las actividades relacionadas con los paneles de proyecto de toda la organización de una empresa.
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | Contiene las actividades relacionadas con los dominios personalizados verificados para {% data variables.product.prodname_pages %}.
| `payment_method`  | Contiene las actividades relacionadas con cómo una organización paga {% data variables.product.prodname_dotcom %}.
| `prebuild_configuration` | Contiene las actividades relacionadas con las configuraciones precompiladas para {% data variables.product.prodname_github_codespaces %}.
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` | Contiene las actividades relacionadas con los entornos de enlace previo a la recepción.
| `pre_receive_hook` | Contiene las actividades relacionadas con los enlaces previos a la recepción.
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | Contiene las actividades relacionadas con la habilitación del modo privado para una empresa.
{%- endif %} | `private_repository_forking` | Contiene las actividades relacionadas con la habilitación de bifurcaciones de repositorios privados e internos para un repositorio, organización o empresa.
{%- ifversion fpt or ghec %} | `profile_picture`   | Contiene las actividades relacionadas con la imagen de perfil de una organización.
{%- endif %} | `project` | Contiene las actividades relacionadas con los paneles de proyecto.
| `project_field` | Contiene las actividades relacionadas con la creación y eliminación de campos en un panel de proyecto.
| `project_view` | Contiene las actividades relacionadas con la creación y eliminación de vistas en un panel de proyecto.
| `protected_branch` | Contiene las actividades relacionadas con las ramas protegidas.
| `public_key` | Contiene las actividades relacionadas con las claves SSH y las claves de implementación.
| `pull_request` | Contiene las actividades relacionadas con las solicitudes de incorporación de cambios.
| `pull_request_review` | Contiene las actividades relacionadas con las revisiones de solicitudes de incorporación de cambios.
| `pull_request_review_comment` | Contiene las actividades relacionadas con los comentarios de revisión de las solicitudes de incorporación de cambios.
| `repo` | Contiene las actividades relacionadas con los repositorios que pertenecen a una organización.
{%- ifversion fpt or ghec %} | `repository_advisory` | Contiene las actividades a nivel de repositorio relacionadas con las asesorías de seguridad en la {% data variables.product.prodname_advisory_database %}.  Para obtener más información, consulta "[Acerca de los avisos de seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
| `repository_content_analysis`   | Contiene las actividades relacionadas con la [habilitación o deshabilitación del uso de datos para un repositorio privado](/articles/about-github-s-use-of-your-data).
| `repository_dependency_graph`   | Contiene las actividades a nivel de repositorio relacionadas con la habilitación o deshabilitación del gráfico de dependencias para un repositorio {% ifversion fpt or ghec %}privado{% endif %}. Para obtener más información, consulta "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{%- endif %} | `repository_image` | Contiene actividades relacionadas con imágenes de un repositorio.
| `repository_invitation` | Contiene actividades relacionadas con invitaciones para unirse a un repositorio.
| `repository_projects_change` | Contiene las actividades relacionadas con la habilitación de proyectos para un repositorio o para todos los repositorios de una organización.
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning`  | Contiene las actividades a nivel de repositorio relacionadas con el análisis de secretos. Para obtener más información, consulta "[Acerca del análisis de secretos](/github/administering-a-repository/about-secret-scanning)".
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | Contiene las actividades relacionadas con los patrones personalizados de análisis de secretos de un repositorio. Para más información, vea "[Definición de patrones personalizados para el análisis de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | Contiene las actividades relacionadas con los patrones personalizados de análisis de secretos de un repositorio. Para obtener más información, consulta "[Protección de inserciones para el análisis de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | Contiene las actividades relacionadas con la habilitación de los miembros de la organización para cambiar las visibilidades de los repositorios de la organización.
{%- endif %} | `repository_vulnerability_alert`   | Contiene las actividades relacionadas con [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | Contiene las actividades de configuración en el nivel de repositorio para {% data variables.product.prodname_dependabot_alerts %}.
| `required_status_check` | Contiene las actividades relacionadas con las comprobaciones de estado necesarias para las ramas protegidas.
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | Contiene las actividades relacionadas con la restricción de las notificaciones de correo electrónico en los dominios aprobados o comprobados de una empresa.
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | Contiene las actividades relacionadas con los [roles de repositorio personalizados](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning`   | Contiene las actividades de configuración a nivel de organización para el análisis de secretos en los repositorios existentes. Para obtener más información, consulta "[Acerca del análisis de secretos](/github/administering-a-repository/about-secret-scanning)".
| `secret_scanning_new_repos` | Contiene las actividades de configuración a nivel de organización para el análisis de secretos para los repositorios nuevos que se crean en ella.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | Contiene las actividades relacionadas con el registro y eliminación de claves de seguridad.
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors`  | Contiene los eventos relacionados con los botones de patrocinio (consulta "[Mostrar un botón de patrocinio en el repositorio](/articles/displaying-a-sponsor-button-in-your-repository)").
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | Contiene las actividades relacionadas con una autoridad de certificación SSH en una organización o empresa.
| `ssh_certificate_requirement` | Contiene las actividades relacionadas con la necesidad de que los miembros usen certificados SSH para acceder a los recursos de la organización.
{%- endif %}{% ifversion sso-redirect %} | `sso_redirect` | Contiene actividades relacionadas con el redireccionamiento automático de los usuarios para iniciar sesión (consulta "[Aplicación de directivas para la configuración de seguridad de tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)"). {% endif %} | `staff` | Contiene actividades relacionadas con un administrador de sitio que realiza una acción.
| `team` | Contiene las actividades relacionadas con los equipos de una organización.
| `team_discussions` | Contiene las actividades relacionadas con la administración de debates de equipo para una organización.
{%- ifversion ghec %} | `team_sync_tenant` | Contiene las actividades relacionadas con la sincronización de equipos con un IdP para una empresa u organización.
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | Contiene las actividades relacionadas con la autenticación en dos fases.
{%- endif %} | `user` | Contiene las actividades relacionadas con los usuarios de una empresa u organización.
{%- ifversion ghec or ghes %} | `user_license` | Contiene las actividades relacionadas con el hecho de que un usuario ocupe un puesto con licencia en una empresa y sea miembro de ella.
{%- endif %} | `workflows`   | Contiene las actividades relacionadas con los flujos de trabajo de {% data variables.product.prodname_actions %}.
