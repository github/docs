| Nombre de la categoría | Descripción |
| ---------------------- | ----------- |
|                        |             |
{%- ifversion fpt or ghec %}
| `account` | Contiene actividades relacionadas con una cuenta de organización. | `advisory_credit`   | Contiene actividades relacionadas con dar crédito a un contribuyente para una asesoría de seguridad en la {% data variables.product.prodname_advisory_database %}. Para obtener más información, consulta la sección "[Acerca de las asesorías de seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)".
{%- endif %}
| `artifact` | Contiene las actividades relacionadas con los artefactos de ejecución de flujo de trabajo de {% data variables.product.prodname_actions %}.
{%- ifversion audit-log-streaming %}
| `audit_log_streaming`  | Contiene actividades relacionadas con transmitir bitácoras de auditoría para las organizaciones en una cuenta empresarial.
{%- endif %}
{%- ifversion fpt or ghec %}
| `billing` | Contiene actividades relacionadas con la facturación de una organización.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `business`  | Contiene actividades relacionadas con los ajustes de negocio para una empresa.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `business`  | Contiene actividades relacionadas con los ajustes de negocio para una empresa.
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `business_secret_scanning_custom_pattern` | Contiene actividades relacionadas con patrones personalizados para el escaneo de secretos en una empresa.
{%- endif %}
| `checks`   | Contiene actividades relacionadas con los conjuntos de verificaciones y ejecuciones.
{%- ifversion fpt or ghec %}
| `codespaces` | Contiene actividades relacionadas con los codespaces de una organización.
{%- endif %}
| `commit_comment` | Contiene actividades relacionadas con actualizar o borrar los comentarios de las confirmaciones.
{%- ifversion ghes %}
| `config_entry` |  Contiene actividades relacionadas con los ajustes de configuración. Estos eventos solo se pueden ver en la bitácora de auditoría del administrador de sitio.
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
| `dependabot_alerts`  | Contiene actividades de configuración a nivel organizacional para las {% data variables.product.prodname_dependabot_alerts %} en los repositorios existentes. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)". | `dependabot_alerts_new_repos`   | Contiene actividades de configuración a nivel organizacional para las {% data variables.product.prodname_dependabot_alerts %} en los repositorios nuevos que se crean en la organización. | `dependabot_repository_access` | Contiene actividades relacionadas con los repositorios privados de una organización a los cuales puede acceder el {% data variables.product.prodname_dependabot %}.
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
| `dependabot_security_updates`   | Contiene actividades de configuración a nivel organizacional para las {% data variables.product.prodname_dependabot_security_updates %} en los repositorios existentes. Para obtener más información, consulta la sección "[Configurar las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)". | `dependabot_security_updates_new_repos` | Contiene actividades de configuración a nivel organizacional para las {% data variables.product.prodname_dependabot_security_updates %} para los repositorios nuevos creados en la organización.
{%- endif %}
| `dependency_graph` | Contiene actividades de configuración a nivel organizacional para las gráficas de dependencia de los repositorios. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)". | `dependency_graph_new_repos`  | Contiene actividades de configuración a nivel organizacional para los repositorios nuevos que se crearon en la organización.
{%- ifversion fpt or ghec %}
| `discussion` | Contiene actividades relacionadas con los debates de equipo. | `discussion_comment` | Contiene actividades relacionadas con los comentarios publicados en los debates de una página de equipo. | `discussion_post`   | Contiene actividades relacionadas con los debates publicados en una página de equipo. | `discussion_post_reply`   | Contiene actividades relacionadas con las respuestas a los debates publicados en una página de equipo.
{%- endif %}
{%- ifversion ghec or ghes %}
| `dotcom_connection` | Contiene actividades relacionadas con {% data variables.product.prodname_github_connect %}. | `enterprise` | Contiene actividades relacionadas con ajustes empresariales.
{%- endif %}
{%- ifversion ghec %}
| `enterprise_domain` | Contiene actividades relacionadas con los dominios empresariales verificados. | `enterprise_installation` | Contiene actividades relacionadas con las {% data variables.product.prodname_github_app %}asociadas con una conexión de empresa de {% data variables.product.prodname_github_connect %}.
{%- endif %}
{%- ifversion fpt or ghec %}
| `environment` | Contiene actividades relacionadas con ambientes de {% data variables.product.prodname_actions %}.
{%- endif %}
{%- ifversion ghae %}
| `external_group` | Contiene actividades relacionadas con grupos de Okta. | `external_identity` | Contiene actividades relacionadas con un usuario en un grupo de Okta.
{%- endif %}
| `gist` | Contiene actividades relacionadas con Gists. | `hook` | Contiene actividades relacionadas con webhooks. | `integration` | Contiene actividades relacionadas con integraciones en una cuenta. | `integration_installation` | Contiene actividades relacionadas con integraciones instaladas en una cuenta. | `integration_installation_request`  | Contiene actividades relacionadas con solicitudes de miembros organizacionales para que los propietarios aprueben integraciones para su uso en la organización.
{%- ifversion ghec or ghae %}
| `ip_allow_list`   | Contiene actividades relacionadas con habilitar o inhabilitar la lista de direcciones IP permitidas en una organización. | `ip_allow_list_entry`   | Contiene actividades relacionadas con la creación, borrado y edición de una lista de direcciones IP permitidas para una organización.
{%- endif %}
| `issue`  | Contiene actividades relacionadas con fijar, transferir o borrar una propuesta en un repositorio. | `issue_comment` | Contiene actividades relacionadas con fijar, transferir o borrar comentarios en las propuestas. | `issues` | Contiene actividades relacionadas con habilitar o inhabilitar la creación de propuestas en una organización.
{%- ifversion fpt or ghec %}
| `marketplace_agreement_signature` | Contiene actividades relacionadas con firmar el Acuerdo de Desarrollador de {% data variables.product.prodname_marketplace %}. | `marketplace_listing` | Contiene actividades relacionadas con listar aplicaciones en {% data variables.product.prodname_marketplace %}.
{%- endif %}
| `members_can_create_pages`   | Contiene actividades relacionadas con administrar la publicación de sitios de {% data variables.product.prodname_pages %} para los repositorios en la organización. Para obtener más información, consulta la sección "[Administrar la publicación de sitios de {% data variables.product.prodname_pages %} para tu organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)". | `members_can_create_private_pages` | Contiene actividades relacionadas con administrar la publicación de sitios privados de {% data variables.product.prodname_pages %} para repositorios en la organización. | `members_can_create_public_pages` | Contiene actividades relacionadas con administrar la publicación de sitios públicos de {% data variables.product.prodname_pages %} para los repositorios en la organización.
{%- ifversion ghec or ghes or ghae %}
| `members_can_delete_repos` | Contiene actividades relacionadas con habilitar o inhabilitar la creación de repositorios para una organización.
{%- endif %}
{%- ifversion fpt or ghec %}
| `members_can_view_dependency_insights` | Contiene actividades de configuración a nivel organizacional que permiten a los miembros organizacionales ver las perspectivas de las dependencias. | `migration` | Contiene actividades relacionadas con transferir datos desde una ubicación *origen* (Tal como una organización de {% data variables.product.prodname_dotcom_the_website %} o una instancia de {% data variables.product.prodname_ghe_server %}) a una instancia *destino* de {% data variables.product.prodname_ghe_server %}.
{%- endif %}
| `oauth_access` | Contiene actividades relacionadas con los tokens de acceso OAuth. | `oauth_application` | Contiene actividades relacionadas con las OAuth Apps.
{%- ifversion fpt or ghec %}
| `oauth_authorization` | Contiene actividades relacionadas con autorizar OAuth Apps.
{%- endif %}
| `org`   | Contiene actividades relacionadas con la membrecía organizacional.
{%- ifversion ghec or ghes or ghae %}
| `org_credential_authorization` | Contiene actividades relacionadas con autorizar credenciales para su uso con el inicio de sesión único de SAML.
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `org_secret_scanning_custom_pattern` | Contiene actividades relacionadas con los patrones personalizados para el escaneo de secretos en una organización. Para obtener más información, consulta la sección "[Definir los patrones personalizados para el escaneo de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". | `org.secret_scanning_push_protection` | Contiene actividades relacionadas con los patrones personalizados del escaneo de secretos en una organización. Para obtener más información, consulta la sección "[Proteger las subidas de información con el escaneo de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %}
| `organization_default_label` | Contiene actividades relacionadas con las etiquetas predeterminadas para los repositorios en una organización.
{%- ifversion fpt or ghec or ghes %}
| `organization_domain` | Contiene actividades relacionadas con dominios organizacionales verificados. | `organization_projects_change` | Contiene actividades relacionadas con tableros de proyecto de toda la organización en una empresa.
{%- endif %}
{%- ifversion fpt or ghec %}
| `pages_protected_domain` | Contiene actividades relacionadas con dominios personalizados verificados para {% data variables.product.prodname_pages %}. | `payment_method`  | Contiene actividades relacionadas con la forma en la que una organización paga por {% data variables.product.prodname_dotcom %}. | `prebuild_configuration` | Contiene actividades relacionadas con configuraciones de precompilación para los {% data variables.product.prodname_github_codespaces %}.
{%- endif %}
{%- ifversion ghes %}
| `pre_receive_environment` | Contiene actividades relacionadas con ambientes de ganchos de pre-recepción. | `pre_receive_hook` | Contains activities related to pre-receive hooks.
{%- endif %}
{%- ifversion ghes %}
| `private_instance_encryption` | Contains activities related to enabling private mode for an enterprise.
{%- endif %}
| `private_repository_forking` | Contains activities related to allowing forks of private and internal repositories, for a repository, organization or enterprise.
{%- ifversion fpt or ghec %}
| `profile_picture`   | Contains activities related to an organization's profile picture.
{%- endif %}
| `project` | Contains activities related to project boards. | `project_field` | Contains activities related to field creation and deletion in a project board. | `project_view` | Contains activities related to view creation and deletion in a project board. | `protected_branch` | Contains activities related to protected branches. | `public_key` | Contains activities related to SSH keys and deploy keys. | `pull_request` | Contains activities related to pull requests. | `pull_request_review` | Contains activities related to pull request reviews. | `pull_request_review_comment` | Contains activities related to pull request review comments. | `repo` | Contains activities related to the repositories owned by an organization.
{%- ifversion fpt or ghec %}
| `repository_advisory` | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}.  Para obtener más información, consulta la sección "[Acerca de las asesorías de seguridad de {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories)". | `repository_content_analysis`   | Contains activities related to [enabling or disabling data use for a private repository](/articles/about-github-s-use-of-your-data). | `repository_dependency_graph`   | Contains repository-level activities related to enabling or disabling the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository. Para obtener más información, consulta la sección "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
{%- endif %}
| `repository_image` | Contains activities related to images for a repository. | `repository_invitation` | Contains activities related to invitations to join a repository. | `repository_projects_change` | Contains activities related to enabling projects for a repository or for all repositories in an organization.
{%- ifversion ghec or ghes or ghae %}
| `repository_secret_scanning`  | Contains repository-level activities related to secret scanning. Para obtener más información, consulta la sección "[Acerca del escaneo de secretos"](/github/administering-a-repository/about-secret-scanning).
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `repository_secret_scanning_custom_pattern` | Contains activities related to secret scanning custom patterns in a repository. Para obtener más información, consulta la sección "[Definir los patrones personalizados para el escaneo de secretos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)". |{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}| | `repository_secret_scanning_push_protection` | Contains activities related to secret scanning custom patterns in a repository. Para obtener más información, consulta la sección "[Proteger las subidas de información con el escaneo de secretos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
{%- endif %}
{%- ifversion fpt or ghec %}
| `repository_visibility_change` | Contains activities related to allowing organization members to change repository visibilities for the organization.
{%- endif %}
| `repository_vulnerability_alert`   | Contains activities related to [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
{%- ifversion fpt or ghec %}
| `repository_vulnerability_alerts` | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot_alerts %}. | `required_status_check` | Contains activities related to required status checks for protected branches.
{%- endif %}
{%- ifversion ghec or ghes %}
| `restrict_notification_delivery` | Contains activities related to the restriction of email notifications to approved or verified domains for an enterprise.
{%- endif %}
{%- ifversion custom-repository-roles %}
| `role` | Contains activities related to [custom repository roles](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `secret_scanning`   | Contains organization-level configuration activities for secret scanning in existing repositories. Para obtener más información, consulta la sección "[Acerca del escaneo de secretos"](/github/administering-a-repository/about-secret-scanning). | `secret_scanning_new_repos` | Contains organization-level configuration activities for secret scanning for new repositories created in the organization.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `security_key` | Contains activities related to security keys registration and removal.
{%- endif %}
{%- ifversion fpt or ghec %}
| `sponsors`  | Contains events related to sponsor buttons (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)").
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `ssh_certificate_authority` | Contains activities related to a SSH certificate authority in an organization or enterprise. | `ssh_certificate_requirement` | Contains activities related to requiring members use SSH certificates to access organization resources.
{%- endif %}
| `staff` | Contains activities related to a site admin performing an action. | `team` | Contains activities related to teams in an organization. | `team_discussions` | Contains activities related to managing team discussions for an organization.
{%- ifversion ghec %}
| `team_sync_tenant` | Contains activities related to team synchronization with an IdP for an enterprise or organization.
{%- endif %}
{%- ifversion fpt or ghes %}
| `two_factor_authentication` | Contains activities related to two-factor authentication.
{%- endif %}
| `user` | Contains activities related to users in an enterprise or organization.
{%- ifversion ghec or ghes %}
| `user_license` | Contains activities related to a user occupying a licensed seat in, and being a member of, an enterprise.
{%- endif %}
| `workflows`   | Contains activities related to {% data variables.product.prodname_actions %} workflows.
