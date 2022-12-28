---
title: Examen du journal d’audit de votre organisation
intro: 'Le journal d’audit permet aux administrateurs de l’organisation d’examiner rapidement les actions effectuées par les membres de votre organisation. Il comprend des informations telles que l’auteur, la nature et la date d’exécution de l’action.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
ms.openlocfilehash: 430cf928f91cad2851c9ad0c661f159177866463
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180676'
---
## Accès au journal d’audit

Le journal d’audit liste les événements déclenchés par les activités qui affectent votre organisation au cours du mois en cours et des six mois précédents. Seuls les propriétaires peuvent accéder au journal d’audit d’une organisation.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Recherche dans le journal d’audit

{% data reusables.audit_log.audit-log-search %}

### Recherche basée sur l’action effectuée

Pour rechercher des événements spécifiques, utilisez le qualificateur `action` dans votre requête. Les actions listées dans le journal d’audit sont regroupées dans les catégories suivantes :

| Nom de catégorie | Description |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | Contient toutes les activités liées à votre compte d’organisation.{% endif %}{% ifversion fpt or ghec %} | [`advisory_credit`](#advisory_credit-category-actions) | Contient toutes les activités liées au crédit d’un contributeur pour un avis de sécurité dans la {% data variables.product.prodname_advisory_database %}. Pour plus d’informations, consultez « [À propos des avis de sécurité {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories) ».{% endif %}{% ifversion pat-v2%} | [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | Contient des activités liées à la stratégie d’approbation de votre organisation pour les {% data variables.product.pat_v2 %}. Pour plus d’informations, consultez « [Définition d’une stratégie {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) ».{% endif %}{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Contient toutes les activités liées à la facturation de votre organisation.{% endif %}{% ifversion fpt or ghec %} | [`business`](#business-category-actions) | Contient des activités liées aux paramètres métier pour une entreprise. |{% endif %}{% ifversion fpt or ghec %} | [`codespaces`](#codespaces-category-actions) | Contient toutes les activités liées aux codespaces de votre organisation. |{% endif %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | Contient des activités de configuration au niveau de l’organisation pour {% data variables.product.prodname_dependabot_alerts %} dans des dépôts existants. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ».
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Contient des activités de configuration au niveau de l’organisation pour les {% data variables.product.prodname_dependabot_alerts %} dans les dépôts créés dans l’organisation.{% ifversion fpt or ghec or ghes %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | Contient des activités de configuration au niveau de l’organisation pour les {% data variables.product.prodname_dependabot_security_updates %} dans les dépôts existants. Pour plus d’informations, consultez « [Configuration des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates) ».
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | Contient des activités de configuration au niveau de l’organisation pour les {% data variables.product.prodname_dependabot_security_updates %} pour les dépôts créés dans l’organisation.{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | Contient des activités de configuration au niveau de l’organisation pour les graphes de dépendances pour les dépôts. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | Contient des activités de configuration au niveau de l’organisation pour les dépôts créés dans l’organisation.{% endif %} | [`discussion_post`](#discussion_post-category-actions) | Contient toutes les activités liées aux discussions publiées sur une page d’équipe.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | Contient toutes les activités liées aux réponses aux discussions publiées sur une page d’équipe.{% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | Contient des activités liées aux paramètres d’entreprise. |{% endif %} | [`hook`](#hook-category-actions) | Contient toutes les activités liées aux webhooks.
| [`integration_installation`](#integration_installation-category-actions) | Contient des activités liées aux intégrations installées dans un compte. | | [`integration_installation_request`](#integration_installation_request-category-actions) | Contient toutes les activités liées aux demandes des membres de l’organisation pour que les propriétaires approuvent les intégrations à utiliser dans l’organisation. |{% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | Contient des activités liées à l’activation ou à la désactivation de la liste verte d’IP pour une organisation.
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | Contient des activités liées à la création, à la suppression et à la modification d’une entrée de liste verte d’IP pour une organisation.{% endif %} | [`issue`](#issue-category-actions) | Contient des activités liées à la suppression d’un problème. {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contient toutes les activités liées à la signature du Contrat du développeur {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contient toutes les activités liées au listage des applications dans la {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | Contient toutes les activités liées à la gestion de la publication de sites {% data variables.product.prodname_pages %} pour les dépôts de l’organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization). » | {% endif %} | [`org`](#org-category-actions) | Contient des activités liées à l’appartenance à l’organisation.{% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | Contient toutes les activités liées à l’autorisation des informations d’identification à utiliser avec l’authentification unique SAML.{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | Contient des activités au niveau de l’organisation liées aux modèles personnalisés d’analyse des secrets. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning) ». {% endif %} | [`organization_default_label`](#organization_default_label-category-actions) | Contient toutes les activités liées aux étiquettes par défaut pour les dépôts de votre organisation.
| [`oauth_application`](#oauth_application-category-actions) | Contient toutes les activités liées aux applications OAuth.
| [`packages`](#packages-category-actions) | Contient toutes les activités liées à {% data variables.product.prodname_registry %}.{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Contient toutes les activités liées à la façon dont votre organisation paie pour GitHub.{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Contient les activités liées aux {% data variables.product.pat_v2 %} dans votre organisation. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ». {% endif %} | [`profile_picture`](#profile_picture-category-actions) | Contient toutes les activités liées à l’image de profil de votre organisation.
| [`project`](#project-category-actions) | Contient toutes les activités liées aux tableaux de projet.
| [`protected_branch`](#protected_branch-category-actions) | Contient toutes les activités liées aux branches protégées.
| [`repo`](#repo-category-actions) | Contient des activités liées aux dépôts appartenant à votre organisation.{% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) | Contient des activités au niveau du dépôt liées aux avis de sécurité dans la {% data variables.product.prodname_advisory_database %}.  Pour plus d’informations, consultez « [À propos des avis de sécurité {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories) ».
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | Contient toutes les activités liées à [l’activation ou à la désactivation de l’utilisation des données pour un dépôt privé](/articles/about-github-s-use-of-your-data).{% endif %}{% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | Contient des activités au niveau du dépôt liées à l’activation ou à la désactivation du graphe de dépendances pour un dépôt {% ifversion fpt or ghec %}privé{% endif %}. Pour plus d’informations, consultez « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».{% endif %}{% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | Contient des activités au niveau du dépôt liées à l’analyse des secrets. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ». {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | Contient des activités au niveau du dépôt liées aux modèles personnalisés d’analyse des secrets. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning) ». {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | Contient des activités au niveau du dépôt liées aux modèles personnalisés d’analyse des secrets. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ». {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | Contient toutes les activités liées aux [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | Contient des activités de configuration au niveau du dépôt pour les {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | Contient toutes les activités liées aux [rôles de dépôt personnalisés](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | Contient des activités de configuration au niveau de l’organisation pour l’analyse des secrets dans les dépôts existants. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Contient des activités de configuration au niveau de l’organisation liées à l’analyse des secrets pour les dépôts créés dans l’organisation. {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Contient tous les événements liés aux boutons de sponsor (voir « [Affichage d’un bouton de sponsor dans votre dépôt](/articles/displaying-a-sponsor-button-in-your-repository) »){% endif %} | [`team`](#team-category-actions) | Contient toutes les activités liées aux équipes de votre organisation.
| [`team_discussions`](#team_discussions-category-actions) | Contient des activités liées à la gestion des discussions d’équipe d’une organisation.
| [`workflows`](#workflows-category-actions) | Contient les activités liées aux workflows {% data variables.product.prodname_actions %}.

Vous pouvez rechercher des ensembles d’actions spécifiques à l’aide de ces termes. Par exemple :

  * `action:team` recherche tous les événements regroupés dans la catégorie team.
  * `-action:hook` exclut tous les événements de la catégorie webhook.

Chaque catégorie a un ensemble d’actions associées sur lesquelles vous pouvez filtrer. Par exemple :

  * `action:team.create` recherche tous les événements ayant impliqué la création d’une équipe.
  * `-action:hook.events_changed` exclut tous les événements ayant impliqué la modification des événements sur un webhook.

### Recherche basée sur l’heure de l’action

Utilisez le qualificateur `created` pour filtrer les événements du journal d’audit en fonction du moment où ils se sont produits. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Par exemple :

  * `created:2014-07-08` recherche tous les événements qui se sont produits le 8 juillet 2014.
  * `created:>=2014-07-08` recherche tous les événements qui se sont produits le 8 juillet 2014 ou après cette date.
  * `created:<=2014-07-08` recherche tous les événements qui se sont produits le 8 juillet 2014 ou avant cette date.
  * `created:2014-07-01..2014-07-31` recherche tous les événements qui se sont produits en juillet 2014.

{% note %}

**Remarque** : Le journal d’audit contient des données pour le mois en cours et tous les jours des six mois précédents.

{% endnote %}

### Rechercher basée sur l’emplacement

À l’aide du qualificateur `country`, vous pouvez filtrer les événements du journal d’audit en fonction du pays d’origine. Vous pouvez utiliser le code court à deux lettres ou le nom complet d’un pays. Gardez à l’esprit que les pays dont le nom contient des espaces doivent être placés entre guillemets. Par exemple :

  * `country:de` recherche tous les événements qui se sont produits en Allemagne.
  * `country:Mexico` recherche tous les événements qui se sont produits au Mexique.
  * `country:"United States"` recherche tous les événements qui se sont produits aux États-Unis.

{% ifversion fpt or ghec %}
## Exportation du journal d’audit

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## Utilisation de l’API de journal d’audit

{% ifversion fpt %}

Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent interagir avec le journal d’audit à l’aide de l’API GraphQL et de l’API REST. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

Vous pouvez interagir avec le journal d’audit à l’aide de l’API GraphQL{% ifversion fpt or ghec %} ou de l’API REST{% endif %}. {% ifversion read-audit-scope %} Vous pouvez utiliser l’étendue `read:audit_log` pour accéder au journal d’audit via les API.{% endif %}

{% ifversion ghec %}

{% note %}

**Remarque :** Pour utiliser l’API de journal d’audit, votre organisation doit utiliser {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### Utilisation de l’API GraphQL

{% endif %}

Pour garantir la sécurité de votre propriété intellectuelle et assurer la conformité de votre organisation, vous pouvez utiliser l’API GraphQL de journal d’audit pour conserver des copies de vos données de journal d’audit et superviser : {% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} Notez que vous ne pouvez pas récupérer les événements Git avec l’API GraphQL. Pour récupérer des événements Git, utilisez plutôt l’API REST. Pour plus d’informations, consultez « [Actions de catégorie `git`](#git-category-actions) ».
{% endif %}

La réponse GraphQL peut inclure des données allant jusqu’à 90 à 120 jours.

Par exemple, vous pouvez effectuer une demande GraphQL pour afficher tous les nouveaux membres de l’organisation ajoutés à votre organisation. Pour plus d’informations, consultez le « [Journal d’audit de l’API GraphQL](/graphql/reference/interfaces#auditentry/) ».

{% ifversion ghec %}

### En utilisant l’API REST

Pour garantir la sécurité de votre propriété intellectuelle et assurer la conformité de votre organisation, vous pouvez utiliser l’API REST de journal d’audit pour conserver des copies de vos données de journal d’audit et superviser : {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

Par défaut, seuls les événements des trois derniers mois sont retournés. Pour inclure des événements plus anciens, vous devez spécifier un horodatage dans votre requête.

Pour plus d’informations sur l’API REST de journal d’audit, consultez « [Organisations](/rest/reference/orgs#get-the-audit-log-for-an-organization) ».

{% endif %} {% endif %}

## Actions du journal d’audit

Voici un aperçu des actions les plus courantes enregistrées comme événements dans le journal d’audit.

{% ifversion fpt or ghec %}
### Actions de la catégorie `account`

| Action | Description
|------------------|-------------------
| `billing_plan_change` | Déclenchée quand le [cycle de facturation](/articles/changing-the-duration-of-your-billing-cycle) d’une organisation change.
| `plan_change` | Déclenchée quand l’[abonnement](/articles/about-billing-for-github-accounts) d’une organisation change.
| `pending_plan_change` | Déclenchée quand un propriétaire d’organisation ou un gestionnaire de facturation [annule un abonnement payant ou fait passer un abonnement payant à un niveau inférieur](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/).
| `pending_subscription_change` | Déclenchée quand un [essai gratuit de {% data variables.product.prodname_marketplace %} démarre ou expire](/articles/about-billing-for-github-marketplace/).
{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `advisory_credit`

| Action | Description
|------------------|-------------------
| `accept` | Déclenchée quand quelqu’un accepte un crédit pour un avis de sécurité. Pour plus d’informations, consultez « [Modification d’un avis de sécurité](/github/managing-security-vulnerabilities/editing-a-security-advisory) ».
| `create` | Déclenchée quand l’administrateur d’un avis de sécurité ajoute une personne à la section de crédit.
| `decline` | Déclenchée quand quelqu’un refuse un crédit pour un avis de sécurité.
| `destroy` | Déclenchée quand l’administrateur d’un avis de sécurité supprime une personne de la section de crédit.
{% endif %}

{% ifversion pat-v2 %}

### Actions de la catégorie `auto_approve_personal_access_token_requests`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand l’organisation doit approuver des {% data variables.product.pat_v2 %} avant que les jetons puissent accéder aux ressources de l’organisation. Pour plus d’informations, consultez « [Définition d’une stratégie {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) ».
| `enable` | Déclenchée quand des {% data variables.product.pat_v2 %} peuvent accéder aux ressources de l’organisation sans approbation préalable. Pour plus d’informations, consultez « [Définition d’une stratégie {% data variables.product.pat_generic %} pour votre organisation](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization) ».

{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `billing`

| Action | Description
|------------------|-------------------
| `change_billing_type` | Déclenchée quand votre organisation [change la façon dont elle paie pour {% data variables.product.prodname_dotcom %}](/articles/adding-or-editing-a-payment-method).
| `change_email` | Déclenchée quand l’[adresse e-mail de facturation](/articles/setting-your-billing-email) de votre organisation change.
{% endif %}

### Actions de la catégorie `business`

| Action | Description |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Déclenchée quand le paramétrage de l’exigence des approbations pour les workflows provenant de duplications (forks) publiques est modifié pour une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise) »{% endif %} | `set_actions_retention_limit` | Déclenchée quand la période de conservation des journaux et des artefacts {% data variables.product.prodname_actions %} est changée pour une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise) ».{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Déclenchée quand la stratégie pour les workflows sur les duplications de dépôt privé est changée. Pour plus d’informations, consultez « {% ifversion fpt or ghec%}[Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Autorisation des workflows pour les duplications de dépôt privé](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %} ».{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `codespaces`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand un utilisateur [crée un codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Déclenchée quand un utilisateur reprend un codespace suspendu.
| `delete` | Déclenchée quand un utilisateur [supprime un codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `create_an_org_secret` | Déclenchée quand un utilisateur crée un [secret pour {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) au niveau de l’organisation.
| `update_an_org_secret` | Déclenchée quand un utilisateur met à jour un [secret pour {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) au niveau de l’organisation.
| `remove_an_org_secret` | Déclenchée quand un utilisateur supprime un [secret pour {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) au niveau de l’organisation.
| `manage_access_and_security` | Déclenchée quand un utilisateur met à jour [les dépôts auxquels un codespace peut accéder](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{% endif %}

### Actions de la catégorie `dependabot_alerts`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts {% ifversion fpt or ghec %}privés {% endif %}existants. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active les {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts {% ifversion fpt or ghec %}privés {% endif %}existants.

### Actions de la catégorie `dependabot_alerts_new_repos`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive les {% data variables.product.prodname_dependabot_alerts %} pour tous les nouveaux dépôts {% ifversion fpt or ghec %}privés{% endif %}. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active les {% data variables.product.prodname_dependabot_alerts %} pour tous les nouveaux dépôts {% ifversion fpt or ghec %}privés{% endif %}.

{% ifversion fpt or ghec or ghes %}
### Actions de la catégorie `dependabot_security_updates`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive les {% data variables.product.prodname_dependabot_security_updates %} pour tous les dépôts existants. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active les {% data variables.product.prodname_dependabot_security_updates %} pour tous les dépôts existants.

### Actions de la catégorie `dependabot_security_updates_new_repos`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive les {% data variables.product.prodname_dependabot_security_updates %} pour tous les nouveaux dépôts. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active les {% data variables.product.prodname_dependabot_security_updates %} pour tous les nouveaux dépôts.
{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `dependency_graph`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive le graphe de dépendances pour tous les dépôts existants. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active le graphe de dépendances pour tous les dépôts existants.

### Actions de la catégorie `dependency_graph_new_repos`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive le graphe de dépendances pour tous les nouveaux dépôts. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active le graphe de dépendances pour tous les nouveaux dépôts.
{% endif %}

### Actions de la catégorie `discussion_post`

| Action | Description
|------------------|-------------------
| `update` | Déclenchée quand [un billet de discussion d’équipe est modifié](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Déclenchée quand [un billet de discussion d’équipe est supprimé](/articles/managing-disruptive-comments/#deleting-a-comment).

### Actions de la catégorie `discussion_post_reply`

| Action | Description
|------------------|-------------------
| `update` | Déclenchée quand [une réponse à un billet de discussion d’équipe est modifiée](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Déclenchée quand [une réponse à un billet de discussion d’équipe est supprimée](/articles/managing-disruptive-comments/#deleting-a-comment).

{% ifversion fpt or ghes or ghec %}
### Actions de la catégorie `enterprise`

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `environment`

| Action | Description
|------------------|-------------------
| `create_actions_secret` | Déclenchée lorsqu’un secret est créé dans un environnement. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/reference/environments#environment-secrets).
| `delete` | Déclenchée lorsqu’un environnement est supprimé. Pour plus d’informations, consultez [« Suppression d’un environnement »](/actions/reference/environments#deleting-an-environment).
| `remove_actions_secret` |  Déclenchée lorsqu’un secret est supprimé d’un environnement. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/reference/environments#environment-secrets).
| `update_actions_secret` | Déclenchée lorsqu’un secret dans un environnement est mis à jour. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/reference/environments#environment-secrets).
{% endif %}

{% ifversion ghae %}
### Actions de la catégorie `external_group`

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### Actions de la catégorie `external_identity`

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `git`

{% note %}

**Remarque :** Pour accéder aux événements Git dans le journal d’audit, vous devez utiliser l’API REST de journal d’audit. L’API REST de journal d’audit est disponible uniquement pour les utilisateurs de {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Organisations](/rest/reference/orgs#get-the-audit-log-for-an-organization) ».

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Action  | Description
|---------|----------------------------
| `clone` | Déclenchée quand un dépôt est cloné.
| `fetch` | Déclenchée quand des modifications sont extraites d’un dépôt.
| `push`  | Déclenchée quand des modifications sont poussées (push) vers un dépôt.

{% endif %}

### Actions de la catégorie `hook`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand [un nouveau hook est ajouté](/articles/creating-webhooks) à un dépôt appartenant à votre organisation.
| `config_changed` | Déclenchée quand la configuration d’un hook existant est modifiée.
| `destroy` | Déclenchée quand un hook existant est supprimé d’un dépôt.
| `events_changed` | Déclenchée quand les événements sur un hook sont modifiés.

### Actions de la catégorie `integration_installation`

| Action | Description
|--------|-------------
| `contact_email_changed` | Un e-mail de contact pour une intégration a été modifié.
| `create` | Une intégration a été installée.
| `destroy` | Une intégration a été désinstallée.
| `repositories_added` | Des dépôts ont été ajoutés à une intégration.
| `repositories_removed` | Des dépôts ont été supprimés d’une intégration.
{%- ifversion fpt or ghec %} | `suspend` | Une intégration a été suspendue.
| `unsuspend` | Une intégration a été rétablie.
{%- endif %} | `version_updated` | Les autorisations pour une intégration ont été mises à jour.

### Actions de la catégorie `integration_installation_request`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand un membre d’organisation demande à un propriétaire d’organisation d’installer une intégration à utiliser dans l’organisation.
| `close` | Déclenchée quand une demande d’installation d’une intégration à utiliser dans une organisation est approuvée ou refusée par un propriétaire d’organisation ou est annulée par le membre d’organisation qui a ouvert la demande.

{% ifversion ghec or ghae %}
### Actions de la catégorie `ip_allow_list`

| Action | Description
|------------------|-------------------
| `enable` | Déclenchée quand une liste verte d’IP est activée pour une organisation.
| `disable` | Déclenchée quand une liste verte d’IP est désactivée pour une organisation.
| `enable_for_installed_apps` | Déclenchée quand une liste verte d’IP est activée pour les {% data variables.product.prodname_github_apps %} installées.
| `disable_for_installed_apps` | Déclenchée quand une liste verte d’IP est désactivée pour les {% data variables.product.prodname_github_apps %} installées.

### Actions de la catégorie `ip_allow_list_entry`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand une adresse IP est ajoutée à une liste verte d’IP.
| `update` | Déclenchée quand une adresse IP ou sa description est changée.
| `destroy` | Déclenchée quand une adresse IP est supprimée d’une liste verte d’IP.
{% endif %}

### Actions de la catégorie `issue`

| Action | Description
|------------------|-------------------
| `destroy`        | Déclenchée quand un propriétaire d’organisation ou une personne disposant d’autorisations d’administrateur dans un dépôt supprime un problème d’un dépôt appartenant à l’organisation.

{% ifversion fpt or ghec %}

### Actions de la catégorie `marketplace_agreement_signature`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand vous signez le contrat de développeur {% data variables.product.prodname_marketplace %}.

### Actions de la catégorie `marketplace_listing`

| Action | Description
|------------------|-------------------
| `approve` | Déclenchée quand votre référencement est approuvé pour {% data variables.product.prodname_marketplace %}.
| `create` | Déclenchée quand vous créez un référencement pour votre application dans {% data variables.product.prodname_marketplace %}.
| `delist` | Déclenchée quand votre référencement est supprimé de {% data variables.product.prodname_marketplace %}.
| `redraft` | Déclenchée quand votre référencement revient à l’état de brouillon.
| `reject` | Déclenchée quand votre référencement n’est pas accepté pour {% data variables.product.prodname_marketplace %}.

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Actions de la catégorie `members_can_create_pages`

Pour plus d’informations, consultez « [Gestion de la publication de sites {% data variables.product.prodname_pages %} pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization). »

| Action | Description |
| :- | :- |
| `enable` | Déclenchée quand un propriétaire d’organisation active la publication de sites {% data variables.product.prodname_pages %} pour les dépôts de l’organisation. |
| `disable` | Déclenchée quand un propriétaire d’organisation désactive la publication de sites {% data variables.product.prodname_pages %} pour les dépôts de l’organisation. |

{% endif %}

### Actions de la catégorie `oauth_application`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand une {% data variables.product.prodname_oauth_app %} est créée.
| `destroy` | Déclenchée quand une {% data variables.product.prodname_oauth_app %} existante est supprimée.
| `reset_secret` | Déclenchée quand la clé secrète client d’une {% data variables.product.prodname_oauth_app %} est réinitialisée.
| `revoke_tokens` | Déclenchée quand les jetons utilisateur d’une {% data variables.product.prodname_oauth_app %} sont révoqués.
| `transfer` |  Déclenchée quand une {% data variables.product.prodname_oauth_app %} existante est transférée à une nouvelle organisation.

### Actions de la catégorie `org`

| Action | Description
|------------------|-------------------
| `add_member` | Déclenchée quand un utilisateur rejoint une organisation.
| `advanced_security_policy_selected_member_disabled` | Déclenchée quand un propriétaire d’entreprise empêche l’activation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour les dépôts appartenant à l’organisation. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Déclenchée quand un propriétaire d’entreprise autorise l’activation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour les dépôts appartenant à l’organisation. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | Déclenchée quand un administrateur d’organisation [crée une exportation du journal d’audit de l’organisation](#exporting-the-audit-log). Si l’exportation inclut une requête, le journal indique la requête utilisée et le nombre d’entrées du journal d’audit correspondant à cette requête.
| `block_user` | Déclenchée quand un propriétaire d’organisation [bloque l’accès d’un utilisateur aux dépôts de l’organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Déclenchée quand une invitation d’organisation est révoquée. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est créé pour une organisation. Pour plus d’informations, consultez « [Création de secrets chiffrés pour une organisation](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization) ».{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | Déclenchée quand un propriétaire [désactive les restrictions d’accès d’une {% data variables.product.prodname_oauth_app %}](/articles/disabling-oauth-app-access-restrictions-for-your-organization) pour votre organisation.{% ifversion ghec %}
| `disable_saml` | Déclenchée quand un administrateur d’organisation désactive l’authentification unique SAML pour une organisation.{% endif %}{% endif %}
| `disable_member_team_creation_permission` | Déclenchée quand un propriétaire d’organisation limite la création d’équipe aux propriétaires. Pour plus d’informations, consultez « [Définition des autorisations de création d’équipe dans votre organisation](/articles/setting-team-creation-permissions-in-your-organization) ». |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Déclenchée quand un propriétaire désactive une exigence d’authentification à 2 facteurs pour tous les membres{% ifversion fpt or ghec %}, gestionnaires de facturation{% endif %} et collaborateurs externes dans une organisation.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | Déclenchée quand un propriétaire [active les restrictions d’accès d’une {% data variables.product.prodname_oauth_app %}](/articles/enabling-oauth-app-access-restrictions-for-your-organization) pour votre organisation.{% ifversion ghec %}
| `enable_saml` | Déclenchée quand un administrateur d’organisation [active l’authentification unique SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) pour une organisation.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | Déclenchée quand un propriétaire d’organisation autorise les membres à créer des équipes. Pour plus d’informations, consultez « [Définition des autorisations de création d’équipe dans votre organisation](/articles/setting-team-creation-permissions-in-your-organization) ». |{% ifversion not ghae %}
| `enable_two_factor_requirement` | Déclenchée quand un propriétaire exige une authentification à 2 facteurs pour tous les membres{% ifversion fpt or ghec %}, gestionnaires de facturation{% endif %} et collaborateurs externes dans une organisation.{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | Déclenchée quand [un nouvel utilisateur a été invité à rejoindre votre organisation](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
| `oauth_app_access_approved` | Déclenchée quand un propriétaire [accorde à une {% data variables.product.prodname_oauth_app %} l’accès à une organisation](/articles/approving-oauth-apps-for-your-organization/).
| `oauth_app_access_denied` | Déclenchée quand un propriétaire [désactive l’accès déjà approuvé d’une {% data variables.product.prodname_oauth_app %}](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) à votre organisation.
| `oauth_app_access_requested` | Déclenchée quand un membre d’organisation demande à un propriétaire d’accorder à une {% data variables.product.prodname_oauth_app %} l’accès à votre organisation.{% endif %}
{%- ifversion ghec %} | `org.transfer` | Déclenchée lorsqu’une organisation est transférée entre des comptes d’entreprise. Pour plus d'informations, consultez « [Transfert d'une organisation entre des comptes d'entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts) ».
{%- endif %} | `register_self_hosted_runner` | Déclenchée lorsqu’un nouvel exécuteur auto-hébergé est inscrit. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à une organisation](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization) ».
| `remove_actions_secret` | Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est supprimé.{% ifversion fpt or ghec %} | `remove_billing_manager` | Déclenchée lorsqu’un [propriétaire supprime un responsable de facturation d’une organisation](/articles/removing-a-billing-manager-from-your-organization/) ou lorsqu’une [authentification à 2 facteurs est requise dans une organisation](/articles/requiring-two-factor-authentication-in-your-organization) et qu’un responsable de facturation n’utilise pas 2FA ou désactive 2FA. |{% endif %} | `remove_member` | Déclenchée quand un [propriétaire supprime un membre d’une organisation](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} ou quand l’[authentification à 2 facteurs est requise dans une organisation](/articles/requiring-two-factor-authentication-in-your-organization) et qu’un membre d’organisation ne l’utilise pas ou la désactive{% endif %}. Déclenchée également quand un [membre d’organisation se supprime](/articles/removing-yourself-from-an-organization/) d’une organisation.| | `remove_outside_collaborator` | Déclenchée quand un propriétaire supprime un collaborateur externe d’une organisation{% ifversion not ghae %} ou [l’authentification à 2 facteurs est exigée dans une organisation](/articles/requiring-two-factor-authentication-in-your-organization) et un collaborateur externe ne l’utilise pas ou la désactive{% endif %}. | | `remove_self_hosted_runner` | Déclenchée lorsqu’un exécuteur auto-hébergé est supprimé. Pour plus d’informations, consultez « [Suppression d’un exécuteur d’une organisation](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization) ». {% ifversion ghec %} | `revoke_external_identity` | Déclenchée quand un propriétaire d’organisation révoque l’identité liée d’un membre. Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) ».
| `revoke_sso_session` | Déclenchée quand un propriétaire d’organisation révoque la session SAML d’un membre. Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) ». {% endif %} | `runner_group_created` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est créé. Pour plus d’informations, consultez « [Création d’un groupe d’exécuteurs auto-hébergés pour une organisation](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization) ».
| `runner_group_removed` | Déclenchée lorsqu’un groupe d’exécuteurs auto-hébergés est supprimé. Pour plus d’informations, consultez « [Suppression d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) ».
| `runner_group_updated` | Déclenchée lorsque la configuration d’un groupe d’exécuteurs auto-hébergés est modifiée. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `runner_group_runners_added` | Déclenchée lorsqu’un exécuteur auto-hébergé est ajouté à un groupe. Pour plus d’informations, consultez [Déplacement d’un exécuteur auto-hébergé vers un groupe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runner_removed` | Déclenchée lorsque l’API REST est utilisée pour supprimer un exécuteur auto-hébergé d’un groupe. Pour plus d’informations, consultez « [Supprimer un exécuteur auto-hébergé d’un groupe pour une organisation](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) ».
| `runner_group_runners_updated`| Déclenchée lors de la mise à jour de la liste des membres d’un groupe d’exécuteurs. Pour plus d’informations, consultez « [Définir des exécuteurs auto-hébergés dans un groupe pour une organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) ».
{%- ifversion code-security-audit-log-events %} | `secret_scanning_push_protection_custom_message_disabled` | Déclenchée quand un propriétaire ou un administrateur d’organisation désactive le message personnalisé déclenché par une tentative d’envoi (push) vers un dépôt protégé des envois. Pour plus d’informations, consultez « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization) ».
| `secret_scanning_push_protection_custom_message_enabled` | Déclenchée quand un propriétaire ou un administrateur d’organisation active le message personnalisé déclenché par une tentative d’envoi (push) vers un dépôt protégé des envois. Pour plus d’informations, consultez « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization) ».
| `secret_scanning_push_protection_custom_message_updated` | Déclenchée quand un propriétaire ou un administrateur d’organisation met à jour le message personnalisé déclenché par une tentative d’envoi (push) vers un dépôt protégé des envois. Pour plus d’informations, consultez « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization) ».
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `secret_scanning_push_protection_disable ` | Déclenchée quand une personne ou un propriétaire d’organisation disposant d’un accès administrateur à l’organisation désactive la protection contre les envois pour la recherche de secrets. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
| `secret_scanning_push_protection_enable ` | Déclenchée quand un propriétaire de l’organisation ou une personne disposant d’un accès administrateur à l’organisation active la protection contre les envois pour {% data variables.product.prodname_secret_scanning %}. {%- endif %} | `self_hosted_runner_online` | Déclenchée quand l’application d’exécuteur est démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `self_hosted_runner_offline` | Déclenchée quand l’application de l’exécuteur est arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».{% ifversion fpt or ghes or ghec %} | `self_hosted_runner_updated` | Déclenchée quand l’application de l’exécuteur est mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) ».{% endif %}{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Déclenchée quand le paramètre pour exiger des approbations pour les workflows à partir de duplications publiques est modifié pour une organisation. Pour plus d’informations, consultez « [Exiger l’approbation des workflows à partir de duplications publiques](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks) ».{% endif %} | `set_actions_retention_limit` | Déclenchée quand la période de conservation des artefacts et des journaux {% data variables.product.prodname_actions %} est modifiée. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise) ».{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Déclenchée quand la stratégie pour les workflows sur les duplications de dépôt privé est changée. Pour plus d’informations, consultez « [Activation des workflows pour les duplications de dépôt privé](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks) ».{% endif %}{% ifversion fpt or ghec %} | `unblock_user` | Déclenchée quand un propriétaire d’organisation [débloque un utilisateur d’une organisation](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %}{% ifversion fpt or ghes or ghec %} | `update_actions_secret` | Déclenchée quand un secret {% data variables.product.prodname_actions %} est mis à jour.{% endif %} | `update_new_repository_default_branch_setting` | Déclenchée quand un propriétaire change le nom de la branche par défaut pour les nouveaux dépôts de l’organisation. Pour plus d’informations, consultez « [Gestion du nom de branche par défaut pour les dépôts de votre organisation](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization) ».
| `update_default_repository_permission` | Déclenchée quand un propriétaire change le niveau d’autorisation du dépôt par défaut pour les membres de l’organisation.
| `update_member` | Déclenchée quand un propriétaire change le rôle d’une personne de propriétaire en membre ou de membre en propriétaire.
| `update_member_repository_creation_permission` | Déclenchée quand un propriétaire modifie l’autorisation de créer un dépôt pour les membres de l’organisation.{% ifversion fpt or ghec %} | `update_saml_provider_settings` | Déclenchée quand les paramètres du fournisseur SAML d’une organisation sont mis à jour.
| `update_terms_of_service` | Déclenchée quand une organisation passe des conditions d’utilisation du service Standard aux conditions d’utilisation Entreprise. Pour plus d’informations, consultez « [Mise à niveau vers les conditions d’utilisation Entreprise](/articles/upgrading-to-the-corporate-terms-of-service) ».{% endif %}

{% ifversion ghec %}
### Actions de la catégorie `org_credential_authorization`

| Action | Description
|------------------|-------------------
| `grant` | Déclenchée quand un membre [autorise des informations d’identification pour une utilisation avec l’authentification unique SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `deauthorized` | Déclenchée quand un membre [supprime l’autorisation d’informations d’identification pour une utilisation avec l’authentification unique SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `revoke` | Déclenchée quand un propriétaire [révoque des informations d’identification autorisées](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Actions de la catégorie `org_secret_scanning_custom_pattern`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand un modèle personnalisé est publié pour l’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization) ».
| `update` | Déclenchée quand les modifications apportées à un modèle personnalisé sont enregistrées pour l’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern) ».
| `delete` | Déclenchée quand un modèle personnalisé est supprimé de l’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern) ».

{% endif %}
### Actions de la catégorie `organization_default_label`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand une étiquette par défaut est créée.
| `update` | Déclenchée quand une étiquette par défaut est modifiée.
| `destroy` | Déclenchée quand une étiquette par défaut est supprimée.

### Actions de la catégorie `packages`

| Action | Description |
|--------|-------------|
| `package_version_published` | Déclenchée quand une version de package est publiée. |
| `package_version_deleted` | Déclenché lorsqu’une version spécifique du package est supprimée. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».
| `package_deleted` | Déclenché lorsqu’un package entier est supprimé. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».
| `package_version_restored` | Déclenché lorsqu’une version spécifique du package est supprimée. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».
| `package_restored` | Déclenché lorsqu’un package entier est restauré. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».

{% ifversion fpt or ghec %}

### Actions de la catégorie `payment_method`

| Action | Description
|------------------|-------------------
| `create` |  Déclenchée quand un nouveau mode de paiement est ajouté, par exemple une nouvelle carte de crédit ou un compte PayPal.
| `update` | Déclenchée quand un mode de paiement existant est mis à jour.

{% endif %}

{% ifversion pat-v2 %}

### Actions de la catégorie `personal_access_token`

| Action | Description
|------------------|-------------------
| `access_granted` | Déclenchée quand l’accès aux ressources de l’organisation est accordé à un {% data variables.product.pat_v2 %}. Pour plus d’informations, consultez « [Gestion des demandes pour {% data variables.product.pat_generic %} dans votre organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization) ».
| `access_revoked` | Déclenchée quand l’accès aux ressources de l’organisation par un {% data variables.product.pat_v2 %} est révoqué. Le jeton peut néanmoins toujours lire les ressources publiques de l’organisation. Pour plus d’informations, consultez « [Révision et révocation de {% data variables.product.pat_generic %} dans votre organisation](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization) ».
| `request_cancelled` | Déclenchée quand un membre de l’organisation annule une demande pour que son {% data variables.product.pat_v2 %} accède aux ressources de l’organisation.
| `request_created` | Déclenchée quand un membre de l’organisation crée un {% data variables.product.pat_v2 %} pour accéder aux ressources de l’organisation et que l’organisation exige une approbation avant qu’un {% data variables.product.pat_v2 %} puisse accéder aux ressources de l’organisation. Pour plus d’informations, consultez « [Gestion des demandes pour {% data variables.product.pat_generic %} dans votre organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization) ».
| `request_denied` | Déclenchée quand une demande pour qu’un {% data variables.product.pat_v2 %} accès aux ressources de l’organisation est refusée. Pour plus d’informations, consultez « [Gestion des demandes pour {% data variables.product.pat_generic %} dans votre organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization) ».

{% endif %}

### Actions de la catégorie `profile_picture`
| Action | Description
|------------------|-------------------
| update | Déclenchée quand vous définissez ou mettez à jour l’image de profil de votre organisation.

### Actions de la catégorie `project`

| Action | Description
|--------------------|---------------------
| `create` | Déclenchée quand un tableau de projet est créé.
| `link` | Déclenchée quand un dépôt est lié à un tableau de projet.
| `rename` | Déclenchée quand un tableau de projet est renommé.
| `update` | Déclenchée quand un tableau de projet est mis à jour.
| `delete` | Déclenchée quand un tableau de projet est supprimé.
| `unlink` | Déclenchée quand un dépôt est dissocié d’un tableau de projet.
| `update_org_permission` | Déclenchée quand l’autorisation de niveau de base pour tous les membres d’une organisation est changée ou supprimée. |
| `update_team_permission` | Déclenchée quand le niveau d’autorisation de tableau de projet d’une équipe est changé ou qu’une équipe est ajoutée à un tableau de projet ou supprimée d’un tableau de projet. |
| `update_user_permission` | Déclenchée quand un membre d’organisation ou un collaborateur externe est ajouté à un tableau de projet ou supprimé d’un tableau de projet ou que son niveau d’autorisation a changé.|

### Actions de la catégorie `protected_branch`

| Action | Description
|--------------------|---------------------
| `create ` | Déclenchée quand la protection de branche est activée sur une branche.
| `destroy` | Déclenchée quand la protection de branche est désactivée sur une branche.
| `update_admin_enforced ` | Déclenchée quand la protection de branche est appliquée pour les administrateurs de dépôt.
| `update_require_code_owner_review ` | Déclenchée quand l’application de l’exigence de revue par le propriétaire de code est mise à jour sur une branche.
| `dismiss_stale_reviews ` | Déclenchée quand l’application de l’abandon des demandes de tirage (pull request) périmées est mise à jour sur une branche.
| `update_signature_requirement_enforcement_level ` | Déclenchée quand l’application de l’exigence de la signature de commit est mise à jour sur une branche.
| `update_pull_request_reviews_enforcement_level ` | Déclenchée quand l’application de l’exigence de revue des demandes de tirage est mise à jour sur une branche. Peut être `0`(désactivée) `1`(non-administrateurs), `2`(tout le monde).
| `update_required_status_checks_enforcement_level ` | Déclenchée quand l’application de l’exigence des vérifications d’état est mise à jour sur une branche.
| `update_strict_required_status_checks_policy` | Déclenchée quand l’exigence qu’une branche soit à jour avant la fusion est changée.
| `rejected_ref_update ` | Déclenchée quand une tentative de mise à jour de branche est rejetée.
| `policy_override ` | Déclenchée quand une exigence de protection de branche est remplacée par un administrateur de dépôt.
| `update_allow_force_pushes_enforcement_level ` | Déclenchée quand les poussées forcées sont activées ou désactivées pour une branche protégée.
| `update_allow_deletions_enforcement_level ` | Déclenchée quand la suppression de branche est activée ou désactivée pour une branche protégée.
| `update_linear_history_requirement_enforcement_level ` | Déclenchée quand l’exigence de l’historique linéaire des commits est activée ou désactivée pour une branche protégée.

### Actions de la catégorie `pull_request`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand une demande de tirage est créée.
| `close` | Déclenchée quand une demande de tirage est fermée sans être fusionnée.
| `reopen` | Déclenchée quand une demande de tirage est rouverte après avoir été fermée.
| `merge` | Déclenchée quand une demande de tirage est fusionnée.
| `indirect_merge` | Déclenchée quand une demande de tirage est considérée comme fusionnée, car ses commits sont fusionnés dans la branche cible.
| `ready_for_review` | Déclenchée quand une demande de tirage est marquée comme prête pour révision.
| `converted_to_draft` | Déclenchée quand une demande de tirage est convertie en brouillon.
| `create_review_request` | Déclenchée quand une révision est demandée.
| `remove_review_request` | Déclenchée quand une demande de révision est supprimée.

### Actions de la catégorie `pull_request_review`

| Action | Description
|------------------|-------------------
| `submit` | Déclenchée quand une révision est soumise.
| `dismiss` | Déclenchée quand une révision est ignorée.
| `delete` | Déclenchée quand une révision est supprimée.

### Actions de la catégorie `pull_request_review_comment`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand un commentaire de révision est ajouté.
| `update` | Déclenchée quand un commentaire de révision est changé.
| `delete` | Déclenchée quand un commentaire de révision est supprimé.

### Actions de la catégorie `repo`

| Action | Description
|------------------|-------------------
| `access` | Déclenchée quand un utilisateur [change la visibilité](/github/administering-a-repository/setting-repository-visibility) d’un dépôt dans l’organisation.
| `actions_enabled` | Déclenchée lorsque {% data variables.product.prodname_actions %} est activé pour un dépôt. Visible à l’aide de l’interface utilisateur. Cet événement n’est pas inclus quand vous accédez au journal d’audit à l’aide de l’API REST. Pour plus d’informations, consultez « [Utilisation de l’API REST](#using-the-rest-api) ».
| `add_member` | Déclenchée quand un utilisateur accepte une [invitation à avoir un accès en collaboration à un dépôt](/articles/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Déclenchée quand un administrateur de dépôt [ajoute une rubrique](/articles/classifying-your-repository-with-topics) à un dépôt.
| `advanced_security_disabled` | Déclenchée quand un administrateur de dépôt désactive les fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour le dépôt. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ».
| `advanced_security_enabled` | Déclenchée quand un administrateur de dépôt active les fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour le dépôt. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ».
| `archived` | Déclenchée quand un administrateur de dépôt [archive un dépôt](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Déclenchée quand [l’accès en lecture Git anonyme est désactivé](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) dans un dépôt public.
| `config.enable_anonymous_git_access` | Déclenchée quand [l’accès en lecture Git anonyme est activé](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) dans un dépôt public.
| `config.lock_anonymous_git_access` | Déclenchée quand [le paramètre d’accès en lecture Git anonyme](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) d’un dépôt est verrouillé.
| `config.unlock_anonymous_git_access` | Déclenchée quand [le paramètre d’accès en lecture Git anonyme](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) d’un dépôt est déverrouillé.{% endif %}
| `create` | Déclenchée quand [un dépôt est créé](/articles/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |Déclenchée lorsqu’un secret {% data variables.product.prodname_actions %} est créé pour un dépôt. Pour plus d’informations, consultez « [Création de secrets chiffrés pour un dépôt](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) ».{% endif %}
| `destroy` | Déclenchée quand [un dépôt est supprimé](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Déclenchée quand un dépôt est désactivé (par exemple, en raison de [fonds insuffisants](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | Déclenchée quand un dépôt est réactivé.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | Déclenchée quand un secret {% data variables.product.prodname_actions %} est supprimé.{% endif %}
| `remove_member` | Déclenchée quand un utilisateur est [supprimé d’un dépôt en tant que collaborateur](/articles/removing-a-collaborator-from-a-personal-repository).
| `register_self_hosted_runner` | Déclenchée lorsqu’un nouvel exécuteur auto-hébergé est inscrit. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à un dépôt](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository) ».
| `remove_self_hosted_runner` | Déclenchée lorsqu’un exécuteur auto-hébergé est supprimé. Pour plus d’informations, consultez « [Suppression d’un exécuteur d’un dépôt](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository) ».
| `remove_topic` | Déclenchée quand un administrateur de dépôt supprime une rubrique d’un dépôt.
| `rename` | Déclenchée quand [un dépôt est renommé](/articles/renaming-a-repository).
| `self_hosted_runner_online` | Déclenchée lorsque l’application de l’exécuteur est démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `self_hosted_runner_offline` | Déclenchée lorsque l’application de l’exécuteur est arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Déclenchée lorsque l’application de l’exécuteur est mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) »{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Déclenchée quand le paramètre d’exigence d’approbation pour les workflows issus de duplications publiques est changé. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks) ».{% endif %}
| `set_actions_retention_limit` | Déclenchée quand la période de conservation des artefacts et journaux de {% data variables.product.prodname_actions %} est changée. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) ».{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Déclenchée quand la stratégie pour les workflows sur les duplications de dépôt privé est changée. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks) ».{% endif %}
| `staff_unlock` | Déclenchée lorsqu’un propriétaire d’entreprise ou {% data variables.contact.github_support %} (avec l’autorisation d’un administrateur de référentiel) a temporairement déverrouillé le référentiel. La visibilité du référentiel n’a pas changé.
| `transfer` | Déclenchée quand [un dépôt est transféré](/articles/how-to-transfer-a-repository).
| `transfer_start` | Déclenchée quand un transfert de dépôt est sur le point de se produire.
| `unarchived` | Déclenchée quand un administrateur de dépôt désarchive un dépôt.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | Déclenchée quand un secret {% data variables.product.prodname_actions %} est mis à jour.{% endif %}

{% ifversion fpt or ghec %}

### Actions de la catégorie `repository_advisory`

| Action | Description
|------------------|-------------------
| `close` | Déclenchée quand quelqu’un ferme un avis de sécurité. Pour plus d’informations, consultez « [À propos des avis de sécurité {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories) ».
| `cve_request` | Déclenchée quand quelqu’un demande un numéro CVE (Common Vulnerabilities and Exposures) auprès de {% data variables.product.prodname_dotcom %} pour un avis de sécurité à l’état de brouillon.
| `github_broadcast` | Déclenchée quand {% data variables.product.prodname_dotcom %} rend un avis de sécurité public dans la {% data variables.product.prodname_advisory_database %}.
| `github_withdraw` | Déclenchée quand {% data variables.product.prodname_dotcom %} retire un avis de sécurité publié par erreur.
| `open` | Déclenchée quand quelqu’un ouvre un avis de sécurité à l’état de brouillon.
| `publish` | Déclenchée quand quelqu’un publie un avis de sécurité.
| `reopen` | Déclenchée quand quelqu’un rouvre un avis de sécurité à l’état de brouillon.
| `update` | Déclenchée quand quelqu’un modifie un avis de sécurité publié ou à l’état de brouillon.

### Actions de la catégorie `repository_content_analysis`

| Action | Description
|------------------|-------------------
| `enable` | Déclenchée quand une personne ou un propriétaire d’organisation disposant d’un accès administrateur au dépôt [active les paramètres d’utilisation des données pour un dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `disable` | Déclenchée quand une personne ou un propriétaire d’organisation disposant d’un accès administrateur au dépôt [désactive les paramètres d’utilisation des données pour un dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

{% endif %}{% ifversion fpt or ghec %}

### Actions de la catégorie `repository_dependency_graph`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt désactive le graphe de dépendances pour un dépôt{% ifversion fpt or ghec %} privé{% endif %}. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».
| `enable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt active le graphe de dépendances pour un dépôt{% ifversion fpt or ghec %} privé{% endif %}.

{% endif %}{% ifversion ghec or ghes or ghae %}
### Actions de la catégorie `repository_secret_scanning`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt désactive l’analyse des secrets pour un dépôt. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| `enable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt active l’analyse des secrets pour un dépôt.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Actions de la catégorie `repository_secret_scanning_custom_pattern`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand un modèle personnalisé est publié pour l’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository) ».
| `update` | Déclenchée quand les modifications apportées à un modèle personnalisé sont enregistrées pour l’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern) ».
| `delete` | Déclenchée quand un modèle personnalisé est supprimé de l’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern) ».

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Actions de la catégorie `repository_secret_scanning_push_protection`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt désactive l’analyse des secrets pour un dépôt. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
| `enable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt active l’analyse des secrets pour un dépôt.

{% endif %}
### Actions de la catégorie `repository_vulnerability_alert`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand {% data variables.product.product_name %} crée une alerte {% data variables.product.prodname_dependabot %} pour un dépôt qui utilise une dépendance vulnérable. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ».
| `dismiss` | Déclenchée quand une personne ou un propriétaire d’organisation disposant d’un accès administrateur au dépôt ignore une alerte {% data variables.product.prodname_dependabot %} concernant une dépendance vulnérable.
| `resolve` | Déclenchée quand une personne disposant d’un accès en écriture à un dépôt pousse des modifications pour mettre à jour et résoudre une vulnérabilité dans une dépendance de projet.
{% ifversion fpt or ghec %}
### Actions de la catégorie `repository_vulnerability_alerts`

| Action | Description
|------------------|-------------------
| `authorized_users_teams` | Déclenchée quand une personne ou un propriétaire d’organisation disposant d’autorisations d’administrateur sur le dépôt met à jour la liste des personnes ou équipes autorisées à recevoir des {% data variables.product.prodname_dependabot_alerts %} dans le référentiel. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) ».
| `disable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt désactive les {% data variables.product.prodname_dependabot_alerts %}.
| `enable` | Déclenchée quand une personne ou un propriétaire de dépôt disposant d’un accès administrateur au dépôt active les {% data variables.product.prodname_dependabot_alerts %}.

{% endif %}{% ifversion custom-repository-roles %}
### Actions de la catégorie `role`
| Action | Description
|------------------|-------------------
|`create` | Déclenchée quand un propriétaire d’organisation crée un rôle de dépôt personnalisé. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
|`destroy` | Déclenchée quand un propriétaire d’organisation supprime un rôle de dépôt personnalisé. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
|`update` | Déclenchée quand un propriétaire d’organisation modifie un rôle de dépôt personnalisé existant. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».

{% endif %} {% ifversion ghec or ghes or ghae %}
### Actions de la catégorie `secret_scanning`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive l’analyse des secrets pour tous les dépôts{% ifversion ghec %} privés ou internes{% endif %} existants. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active l’analyse des secrets pour tous les dépôts{% ifversion ghec %} privés ou internes{% endif %} existants.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### Actions de la catégorie `secret_scanning_alert`

| Action | Description
|------------------|-------------------
| `create` | Déclenché lorsque {% data variables.product.prodname_dotcom %} détecte un secret exposé et crée une alerte d’{% data variables.product.prodname_secret_scanning %}. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning) ».
| `reopen` | Déclenché lorsqu’un utilisateur rouvre une alerte d’{% data variables.product.prodname_secret_scanning %}.
| `resolve` | Déclenché lorsqu’un utilisateur résout une alerte d’{% data variables.product.prodname_secret_scanning %}.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### Actions de la catégorie `secret_scanning_new_repos`

| Action | Description
|------------------|-------------------
| `disable` | Déclenchée quand un propriétaire d’organisation désactive l’analyse des secrets pour tous les nouveaux dépôts{% ifversion ghec %} privés ou internes{% endif %}. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active l’analyse des secrets pour tous les nouveaux dépôts{% ifversion ghec %} privés ou internes{% endif %}.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### Actions de la catégorie `secret_scanning_push_protection`

| Action | Description
|------------------|-------------------
| `bypass` | Déclenché lorsqu’un utilisateur contourne la protection d’envoi sur un secret détecté par l’analyse des secrets. Pour plus d’informations, consultez « [Contournement de la protection push pour un secret](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret) ».
{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `sponsors`

| Action | Description
|------------------|-------------------
| `custom_amount_settings_change` | Déclenchée quand vous activez ou désactivez des montants personnalisés, ou quand vous modifiez le montant personnalisé suggéré (consultez « [Gestion de vos niveaux de parrainage](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers) »)
| `repo_funding_links_file_action` | Déclenchée quand vous modifiez le fichier FUNDING dans votre dépôt (consultez « [Affichage d’un bouton de sponsor dans votre dépôt](/articles/displaying-a-sponsor-button-in-your-repository) »)
| `sponsor_sponsorship_cancel` | Déclenchée quand vous annulez un parrainage (consultez « [Déclassement d’un parrainage](/articles/downgrading-a-sponsorship) »)
| `sponsor_sponsorship_create` | Déclenchée quand vous parrainez un compte (consultez « [Parrainage d’un contributeur open source](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor) »)
| `sponsor_sponsorship_payment_complete` | Déclenchée quand vous avez parrainé un compte et que votre paiement a été traité (consultez « [Parrainage d’un contributeur open source](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor) »)
| `sponsor_sponsorship_preference_change` | Déclenchée quand vous changez votre choix de recevoir des mises à jour d’un compte parrainé par e-mail (consultez « [Gestion de votre parrainage](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship) »)
| `sponsor_sponsorship_tier_change` | Déclenchée quand vous mettez à niveau ou déclassez votre parrainage (consultez « [Mise à niveau d’un parrainage](/articles/upgrading-a-sponsorship) » et « [Déclassement d’un parrainage](/articles/downgrading-a-sponsorship) »)
| `sponsored_developer_approve` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} est approuvé (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) »)
| `sponsored_developer_create` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} est créé (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) »)
| `sponsored_developer_disable` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} est désactivé
| `sponsored_developer_redraft` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} repasse de l’état approuvé à l’état de brouillon
| `sponsored_developer_profile_update` | Déclenchée quand vous modifiez votre profil d’organisation parrainée (consultez « [Modification de vos informations de profil pour {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors) »)
| `sponsored_developer_request_approval` | Déclenchée quand vous faites une demande d’approbation auprès de {% data variables.product.prodname_sponsors %} (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) »)
| `sponsored_developer_tier_description_update` | Déclenchée quand vous modifiez la description d’un niveau de parrainage (consultez « [Gestion de vos niveaux de parrainage](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers) »)
| `sponsored_developer_update_newsletter_send` | Déclenchée quand vous envoyez une mise à jour par e-mail à vos sponsors (consultez « [Contacter vos sponsors](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors) »)
| `waitlist_invite_sponsored_developer` | Déclenchée quand vous êtes sur la liste d’attente et que vous êtes invité à rejoindre {% data variables.product.prodname_sponsors %} (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) »)
| `waitlist_join` | Déclenchée quand vous rejoignez la liste d’attente pour devenir organisation parrainée (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) »)
{% endif %}

### Actions de la catégorie `team`

| Action | Description
|------------------|-------------------
| `add_member` | Déclenchée quand un membre d’une organisation est [ajouté à une équipe](/articles/adding-organization-members-to-a-team).
| `add_repository` | Déclenchée quand le contrôle d’un dépôt est donné à une équipe.
| `change_parent_team` | Déclenchée quand une équipe enfant est créée ou que [le parent d’une équipe enfant est changé](/articles/moving-a-team-in-your-organization-s-hierarchy).
| `change_privacy` | Déclenchée quand le niveau de confidentialité d’une équipe est changé.
| `create` | Déclenchée quand une équipe est créée.
| `demote_maintainer` | Déclenchée quand un utilisateur est rétrogradé de gestionnaire d’équipe à membre de l’équipe. Pour plus d’informations, consultez « [Attribution du rôle de gestionnaire d’équipe à un membre de l’équipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member) ».
| `destroy` | Déclenchée quand une équipe est supprimée de l’organisation.
| `team.promote_maintainer` | Déclenchée quand un utilisateur est promu de membre de l’équipe à gestionnaire d’équipe. Pour plus d’informations, consultez « [Attribution du rôle de gestionnaire d’équipe à un membre de l’équipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member) ».
| `remove_member` | Déclenchée quand un membre d’une organisation est [supprimé d’une équipe](/articles/removing-organization-members-from-a-team).
| `remove_repository` | Déclenchée quand un dépôt n’est plus sous le contrôle d’une équipe.

### Actions de la catégorie `team_discussions`

| Action | Description
|---|---|
| `disable` | Déclenchée quand un propriétaire d’organisation désactive les discussions d’équipe pour une organisation. Pour plus d’informations, consultez « [Désactivation des discussions d’équipe pour votre organisation](/articles/disabling-team-discussions-for-your-organization) ».
| `enable` | Déclenchée quand un propriétaire d’organisation active les discussions d’équipe pour une organisation.

### Actions de la catégorie `workflows`

{% data reusables.actions.actions-audit-events-workflow %}
## Pour aller plus loin

- « [Sécurisation de votre organisation](/articles/keeping-your-organization-secure) »{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {%- ifversion fpt or ghec %}
- « [Exportation des informations sur les membres de votre organisation](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization) »{% endif %} {%- endif %}
