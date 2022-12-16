---
ms.openlocfilehash: 1dd9305ca2b7cb3e8d25d697de8ae3a83e0c46bb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: "148183979"
---
| Nom de la catégorie | Description
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | Contient des activités liées à un compte d’organisation.
| `advisory_credit`   | Contient des activités liées au crédit d’un contributeur pour un avis de sécurité dans les données {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [À propos des avis de sécurité {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories) ».
{%- endif %} | `artifact` | Contient des activités liées aux artefacts d’exécution de workflow {% data variables.product.prodname_actions %}.
{%- ifversion audit-log-streaming %} | `audit_log_streaming` | Contient des activités liées aux journaux d’audit de streaming pour les organisations dans un compte d’entreprise.
{%- endif %} {%- ifversion fpt or ghec %} | `billing` |Contient des activités liées à la facturation d’une organisation.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business`  | Contient des activités liées aux paramètres métier d’une entreprise.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | Contient les activités liées à {% data variables.product.prodname_GH_advanced_security %} dans une entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning` | Contient les activités relatives à l’{% data variables.product.prodname_secret_scanning %} dans une entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | Contient les activités relatives aux modèles personnalisés pour l’{% data variables.product.prodname_secret_scanning %} dans une entreprise.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | Contient les activités relatives à la fonctionnalité de protection des poussées de l’{% data variables.product.prodname_secret_scanning %} dans une entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning_push_protection_custom_message` | Contient les activités relatives au message personnalisé affiché quand la protection des poussées est déclenchée dans une entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
{%- endif %} | `checks` | Contient des activités liées aux suites de vérifications et exécutions.
{%- ifversion fpt or ghec %} | `codespaces` | Contient des activités liées aux codespaces d’une organisation.
{%- endif %} | `commit_comment` | Contient des activités liées à la mise à jour ou à la suppression des commentaires de validation.
{%- ifversion ghes %} | `config_entry` |  Contient des activités liées aux paramètres de configuration. Ces événements sont visibles uniquement dans le journal d’audit de l’administrateur de site.
{%- endif %} | `dependabot_alerts`  | Contient les activités de configuration au niveau de l’organisation pour les {% data variables.product.prodname_dependabot_alerts %} dans les référentiels existants. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) ».
| `dependabot_alerts_new_repos`   | Contient des activités de configuration au niveau de l’organisation pour {% data variables.product.prodname_dependabot_alerts %} dans des nouveaux référentiels créés dans l’organisation.
| `dependabot_repository_access` | Contient des activités liées aux référentiels privés d’une organisation {% data variables.product.prodname_dependabot %} auxquels l’accès est autorisé.
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates` | Contient les activités de configuration au niveau de l’organisation pour les {% data variables.product.prodname_dependabot_security_updates %} dans les dépôts existants. Pour plus d’informations, consultez « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates) ».
| `dependabot_security_updates_new_repos` | Contient des activités de configuration au niveau de l’organisation pour {% data variables.product.prodname_dependabot_security_updates %} pour les nouveaux référentiels créés dans l’organisation.
{%- endif %} | `dependency_graph` | Contient des activités de configuration au niveau de l’organisation pour les graphes des dépendances pour les dépôts. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».
| `dependency_graph_new_repos`  | Contient des activités de configuration au niveau de l’organisation pour les nouveaux référentiels créés dans l’organisation.
{%- ifversion fpt or ghec %} | `discussion` | Contient des activités liées aux discussions d’équipe.
| `discussion_comment` | Contient des activités liées aux commentaires publiés dans les discussions sur une page d’équipe.
| `discussion_post`   | Contient des activités liées aux discussions publiées sur une page d’équipe.
| `discussion_post_reply`   | Contient des activités liées aux réponses aux discussions publiées sur une page d’équipe.
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | Contient des activités liées à {% data variables.product.prodname_github_connect %}.
| `enterprise` | Contient des activités liées aux paramètres d’entreprise.
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | Contient des activités liées aux domaines d’entreprise vérifiés.
| `enterprise_installation` | Contient des activités liées aux {% data variables.product.prodname_github_app %} associés à une connexion d’entreprise {% data variables.product.prodname_github_connect %}.
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | Contient des activités liées aux environnements {% data variables.product.prodname_actions %}.
{%- endif %} {%- ifversion ghae %} | `external_group` | Contient des activités liées aux groupes Okta.
| `external_identity` | Contient des activités liées à un utilisateur dans un groupe Okta.
{%- endif %} | `gist` | Contient des activités liées aux Gists.
| `hook` | Contient toutes les activités liées aux webhooks.
| `integration` | Contient des activités liées aux intégrations dans un compte.
| `integration_installation` | Contient des activités liées aux intégrations installées dans un compte.
| `integration_installation_request`  | Contient des activités liées aux demandes des membres de l’organisation pour que les propriétaires approuvent les intégrations à utiliser dans l’organisation.
{%- ifversion ghec or ghae %} | `ip_allow_list`   | Contient des activités liées à l’activation ou à la désactivation de la liste d’autorisation des adresses IP pour une organisation.
| `ip_allow_list_entry`   | Contient des activités liées à la création, à la suppression et à la modification d’une entrée de la liste d’autorisation des adresses IP pour une organisation.
{%- endif %} | `issue`  | Contient des activités liées à l’épinglage, au transfert ou à la suppression d’un problème dans un référentiel.
| `issue_comment` | Contient des activités liées à l’épinglage, au transfert ou à la suppression des commentaires de problème.
| `issues` | Contient des activités liées à l’activation ou à la désactivation de la création de problème pour une organisation.
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | Contient des activités liées à la signature du Contrat du développeur {% data variables.product.prodname_marketplace %}.
| `marketplace_listing` | Contient des activités liées à la liste des applications dans {% data variables.product.prodname_marketplace %}.
{%- endif %} | `members_can_create_pages`   | Contient des activités liées à la gestion de la publication des sites {% data variables.product.prodname_pages %} pour les référentiels de l’organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization). »
| `members_can_create_private_pages` | Contient des activités liées à la gestion de la publication de sites privés {% data variables.product.prodname_pages %} pour les référentiels de l’organisation.
| `members_can_create_public_pages` | Contient des activités liées à la gestion de la publication des sites publiques {% data variables.product.prodname_pages %} pour les référentiels de l’organisation.
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | Contient des activités liées à l’activation ou à la désactivation de la création de référentiels pour une organisation.
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | Contient des activités de configuration au niveau de l’organisation permettant aux membres de l’organisation d’afficher les insights sur les dépendances.
| `migration` | Contient des activités liées au transfert de données à partir d’un emplacement *source* (comme une organisation {% data variables.product.prodname_dotcom_the_website %} ou une instance {% data variables.product.prodname_ghe_server %}) vers une instance {% data variables.product.prodname_ghe_server %} *cible*.
{%- endif %} | `oauth_access` | Contient des activités liées aux jetons d’accès OAuth.
| `oauth_application` | Contient toutes les activités liées aux applications OAuth.
{%- ifversion fpt or ghec %} | `oauth_authorization` | Contient des activités liées à l’autorisation des applications OAuth.
{%- endif %} | `org`   | Contient des activités liées à l’appartenance à l’organisation.
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | Contient des activités liées à l’autorisation des informations d’identification pour l’authentification unique SAML.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | Contient des activités liées aux modèles personnalisés pour l’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning) ».
| `org.secret_scanning_push_protection` | Contient des activités liées aux modèles personnalisés d’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
{%- endif %} | `organization_default_label` | Contient des activités liées aux étiquettes par défaut pour les référentiels d’une organisation.
{%- ifversion fpt or ghec or ghes %} | `organization_domain` | Contient des activités liées aux domaines d’organisation vérifiés.
| `organization_projects_change` | Contient des activités liées aux tableaux de projet à l’échelle de l’organisation dans une entreprise.
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | Contient des activités liées aux domaines personnalisés vérifiés pour {% data variables.product.prodname_pages %}.
| `payment_method`  |  Contient des activités liées à la façon dont une organisation paie {% data variables.product.prodname_dotcom %}.
| `prebuild_configuration` | Contient des activités liées aux configurations de prébuild pour {% data variables.product.prodname_github_codespaces %}.
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` |Contient des activités liées aux environnements de hooks de pré-réception.
| `pre_receive_hook` | Contient des activités liées aux hooks de pré-réception.
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | Contient des activités liées à l’activation du mode privé pour une entreprise.
{%- endif %} | `private_repository_forking` | Contient des activités liées à l’autorisation des duplications (forks) de référentiels privés et internes, pour un référentiel, une organisation ou une entreprise.
{%- ifversion fpt or ghec %} | `profile_picture`   | Contient des activités liées à l’image de profil d’une organisation.
{%- endif %} | `project` | Contient des activités liées aux tableaux de projet.
| `project_field` | Contient des activités liées à la création et à la suppression de champs dans un tableau de projet.
| `project_view` | Contient des activités liées à la création et à la suppression d’affichages dans un tableau de projet.
| `protected_branch` | Contient des activités liées aux branches protégées.
| `public_key` | Contient des activités liées aux clés SSH et aux clés de déploiement.
| `pull_request` | Contient des activités liées aux demandes de tirage.
| `pull_request_review` | Contient des activités liées aux révisions de demande de tirage (pull request).
| `pull_request_review_comment` | Contient des activités liées aux commentaires de révision de demande de tirage (pull request).
| `repo` | Contient des activités liées aux dépôts appartenant à une organisation.
{%- ifversion fpt or ghec %} | `repository_advisory` | Contient des activités au niveau du référentiel liées aux avis de sécurité {% data variables.product.prodname_advisory_database %}.  Pour plus d’informations, consultez « [À propos des avis de sécurité {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories) ».
| `repository_content_analysis`   | Contient des activités liées à [l’activation ou à la désactivation de l’utilisation des données pour un référentiel privé](/articles/about-github-s-use-of-your-data).
| `repository_dependency_graph`   | Contient des activités au niveau du référentiel liées à l’activation ou à la désactivation du graphique de dépendance pour un référentiel privé {% ifversion fpt or ghec %} {% endif %}. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».
{%- endif %} | `repository_image` | Contient des activités liées aux images d’un référentiel.
| `repository_invitation` | Contient des activités liées aux invitations à rejoindre un référentiel.
| `repository_projects_change` | Contient des activités liées à l’activation de projets pour un référentiel ou pour tous les référentiels d’une organisation.
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning`  | Contient des activités au niveau du référentiel liées à l’analyse des secrets. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | Contient des activités liées aux modèles personnalisés d’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning) ». {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | Contient des activités liées aux modèles personnalisés d’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | Contient des activités liées au fait d’autoriser des membres de l’organisation à modifier les visibilités des référentiels pour l’organisation.
{%- endif %} | `repository_vulnerability_alert`   | Contient des activités liées aux [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | Contient des activités de configuration au niveau du dépôt pour les {% data variables.product.prodname_dependabot_alerts %}.
| `required_status_check` | Contient des activités liées aux vérifications d’état requises pour les branches protégées.
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | Contient des activités liées à la restriction des notifications par e-mail aux domaines approuvés ou vérifiés pour une entreprise.
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | Contient des activités liées aux [rôles de dépôt personnalisés](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning`   | Contient des activités de configuration au niveau de l’organisation pour l’analyse des secrets dans les référentiels existants. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| `secret_scanning_new_repos` | Contient des activités de configuration au niveau de l’organisation liées à l’analyse des secrets pour les référentiels créés dans l’organisation.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | Contient des activités liées à l’inscription et à la suppression des clés de sécurité.
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors`  | Contient des événements liés aux boutons Parrainer (consultez « [Affichage d’un bouton de sponsor dans votre référentiel](/articles/displaying-a-sponsor-button-in-your-repository) »).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | Contient des activités liées à une autorité de certification SSH dans une organisation ou une entreprise.
| `ssh_certificate_requirement` | Contient des activités liées à l’obligation pour les membres d’utiliser des certificats SSH pour accéder aux ressources de l’organisation.
{%- endif %}{% ifversion sso-redirect %} | `sso_redirect` | Contient des activités liées à la redirection automatique des utilisateurs vers la connexion (consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users) »).{% endif %} | `staff` | Contient des activités liées à un administrateur de site effectuant une action.
| `team` | Contient des activités liées aux équipes d’une organisation.
| `team_discussions` | Contient des activités liées à la gestion des discussions d’équipe d’une organisation.
{%- ifversion ghec %} | `team_sync_tenant` |Contient des activités liées à la synchronisation d’équipe avec un fournisseur d’identité pour une entreprise ou une organisation.
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | Contient des activités liées à l’authentification à 2 facteurs.
{%- endif %} | `user` | Contient des activités liées aux utilisateurs d’une organisation ou entreprise.
{%- ifversion ghec or ghes %} | `user_license` | Contient des activités liées à un utilisateur occupant un siège sous licence et faisant partie d’une entreprise.
{%- endif %} | `workflows`   | Contient des activités liées aux workflows {% data variables.product.prodname_actions %}.
