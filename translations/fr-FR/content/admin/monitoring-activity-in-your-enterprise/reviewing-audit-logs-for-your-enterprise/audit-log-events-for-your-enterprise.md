---
title: Événements du journal d’audit pour votre entreprise
intro: Découvrez les événements de journal d’audit enregistrés pour votre entreprise.
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 5a936791aff8706cd04773bb0f7428cd11f29329
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183947'
---
{% ifversion ghec%}
## À propos des événements du journal d’audit pour votre entreprise

L’étendue des événements qui apparaissent dans le journal d’audit de votre entreprise varie selon que votre entreprise utilise {% data variables.product.prodname_emus %}. Pour plus d’informations sur {% data variables.product.prodname_emus %}, consultez « [À propos de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users) ».

- Si votre entreprise n’utilise pas {% data variables.product.prodname_emus %}, le journal d’audit inclut uniquement les événements liés au compte d’entreprise et aux organisations au sein du compte d’entreprise, que vous trouverez dans cet article.
- Si votre entreprise utilise {% data variables.product.prodname_emus %}, le journal d’audit inclut également les événements utilisateur pour les {% data variables.enterprise.prodname_managed_users %}, par exemple chaque fois que l’utilisateur se connecte à {% data variables.product.product_name %} et les actions qu’il effectue au sein de son compte d’utilisateur. Pour obtenir la liste de ces événements de compte d’utilisateur, consultez « [Examen de votre journal de sécurité](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions) ».
{% endif %}

{%- ifversion fpt or ghec %}
## Actions de la catégorie `account`

| Action | Description
|--------|-------------
| `account.billing_plan_change` | La période de facturation d’une organisation a changé. Pour plus d’informations, consultez « [Changement de la durée de votre période de facturation](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle) ».
| `account.plan_change` | L’abonnement d’une organisation a changé. Pour plus d’informations, consultez « [À propos de la facturation pour les comptes GitHub](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts) ».
| `account.pending_plan_change` | Un propriétaire d’organisation ou un gestionnaire de facturation a annulé un abonnement payant ou a fait passer un abonnement payant à un niveau inférieur. Pour plus d’informations, consultez « [Dans quelle mesure le passage au niveau supérieur ou inférieur affecte-t-il le processus de facturation ?](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process) ».
| `account.pending_subscription_change` | Un essai gratuit de {% data variables.product.prodname_marketplace %} a démarré ou expiré. Pour plus d’informations, consultez « [À propos de la facturation pour GitHub Marketplace](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace) ».
{%- endif %}

{%- ifversion fpt or ghec %}
## Actions de la catégorie `advisory_credit`

| Action | Description
|--------|-------------
| `advisory_credit.accept` | Quelqu’un a accepté un crédit pour un avis de sécurité. Pour plus d’informations, consultez « [Modification d’un avis de sécurité](/github/managing-security-vulnerabilities/editing-a-security-advisory) ».
| `advisory_credit.create` | L’administrateur d’un avis de sécurité a ajouté une personne à la section de crédit.
| `advisory_credit.decline` | Quelqu’un a refusé un crédit pour un avis de sécurité.
| `advisory_credit.destroy` | L’administrateur d’un avis de sécurité a supprimé une personne de la section de crédit.
{%- endif %}

## Actions de la catégorie `artifact`

| Action | Description
|--------|-------------
| `artifact.destroy`    | Un artefact d’exécution de workflow a été supprimé manuellement.

{%- ifversion audit-log-streaming %}
## Actions de la catégorie `audit_log_streaming`

| Action | Description
|--------|-------------
| `audit_log_streaming.check` | Une vérification manuelle du point de terminaison configuré pour le streaming de journaux d’audit a été effectuée.
| `audit_log_streaming.create` | Un point de terminaison a été ajouté pour le streaming de journaux d’audit.
| `audit_log_streaming.update` | Une configuration de point de terminaison a été mise à jour pour le streaming de journaux d’audit. Par exemple, le flux a été suspendu, activé ou désactivé.
| `audit_log_streaming.destroy` | Un point de terminaison du streaming de journaux d’audit a été supprimé.
{%- endif %}

{%- ifversion fpt or ghec %}
## Actions de la catégorie `billing`

| Action | Description
|--------|-------------
| `billing.change_billing_type` | Une organisation a modifié son mode de paiement pour {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Ajout ou modification d’un mode de paiement](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method) ».
| `billing.change_email` | L’adresse e-mail de facturation d’une organisation a changé. Pour plus d’informations, consultez « [Définition de votre e-mail de facturation](/billing/managing-your-github-billing-settings/setting-your-billing-email) ».
{%- endif %}

## Actions de la catégorie `business`

| Action | Description
|--------|-------------
| `business.add_admin` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a été ajouté à une entreprise.
{%- ifversion ghec %} | `business.add_billing_manager` | Un gestionnaire de facturation a été ajouté à une entreprise.
{%- endif %} | `business.add_organization` | Une organisation a été ajoutée à une entreprise.
{%- ifversion ghec %} | `business.add_support_entitlee` | Un droit au support a été ajouté à un membre d’une entreprise. Pour plus d’informations, consultez « [Gestion des droits au support pour votre entreprise](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise) ».
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a créé, mis à jour ou supprimé une stratégie pour {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_advanced_security %} dans votre entreprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise) ».
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | Une invitation à devenir propriétaire{% ifversion ghes %} ou administrateur de site{% endif %} d’une entreprise a été annulée.
| `business.cancel_billing_manager_invitation` | Une invitation à devenir gestionnaire de facturation d’une entreprise a été annulée.
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | Un propriétaire d’entreprise ou un administrateur de site a effacé les paramètres de stratégie {% data variables.product.prodname_actions %} pour une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour GitHub Actions dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise) ».
{%- endif %} | `business.clear_default_repository_permission` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a effacé le paramètre de stratégie d’autorisation de dépôt de base pour une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour les autorisations de dépôt de base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions) ».
| `business.clear_members_can_create_repos`      | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a effacé une restriction sur la création de dépôt dans les organisations de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation) ».
| `business.create`                              | Une entreprise a été créée.
{%- ifversion ghec %} | `business.disable_oidc` | L’authentification unique OIDC a été désactivée pour une entreprise. Pour plus d’informations, consultez « [Configuration d’OIDC pour {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users). »
| `business.disable_saml` | L’authentification unique SAML a été désactivée pour une entreprise.
{%- endif %} | `business.disable_two_factor_requirement` | L’obligation pour les membres d’activer l’authentification à 2 facteurs pour accéder à une entreprise a été désactivée.
{%- ifversion ghec %} | `business.enable_oidc` | L’authentification unique OIDC a été activée pour une entreprise. Pour plus d’informations, consultez « [Configuration d’OIDC pour {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users). »
| `business.enable_saml` | L’authentification unique SAML a été activée pour une entreprise.
{%- endif %} | `business.enable_two_factor_requirement` | L’obligation pour les membres d’activer l’authentification à 2 facteurs pour accéder à une entreprise a été activée.
{%- ifversion ghec %} | `business.enterprise_server_license_download` | Une licence {% data variables.product.prodname_ghe_server %} a été téléchargée.
| `business.import_license_usage` | Les informations d’utilisation des licences ont été importées à partir d’une instance de {% data variables.product.prodname_ghe_server %} vers un compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}.
| `business.invite_admin` | Une invitation à devenir propriétaire{% ifversion ghes %} ou administrateur de site{% endif %} d’une entreprise a été envoyée.
| `business.invite_billing_manager` | Une invitation à devenir gestionnaire de facturation d’une entreprise a été envoyée.
{%- endif %} | `business.members_can_update_protected_branches.clear` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a annulé une stratégie pour autoriser ou non les membres d’une entreprise à mettre à jour des branches protégées sur des dépôts pour des organisations individuelles. Les administrateurs d’organisation peuvent choisir d’autoriser ou non la mise à jour des paramètres des branches protégées.
| `business.members_can_update_protected_branches.disable` | La possibilité pour les membres d’entreprise de mettre à jour les règles de protection de branche a été désactivée. Seuls les propriétaires d’entreprise peuvent mettre à jour des branches protégées.
| `business.members_can_update_protected_branches.enable` | La possibilité pour les membres d’entreprise de mettre à jour les règles de protection de branche a été activée. Les propriétaires et membres d’entreprise peuvent mettre à jour des branches protégées.
| `business.remove_admin` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a été supprimé d’une entreprise.
{%- ifversion ghes %} | `business.referrer_override_enable` | Un propriétaire d’entreprise ou un administrateur de site a activé le remplacement de stratégie de référent. Pour plus d’informations, consultez « [Configuration de la stratégie de référent pour votre entreprise](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise) ».
| `business.referrer_override_disable` | Un propriétaire d’entreprise ou un administrateur de site a désactivé le remplacement de stratégie de référent. Pour plus d’informations, consultez « [Configuration de la stratégie de référent pour votre entreprise](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise) ».
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | Un gestionnaire de facturation a été supprimé d’une entreprise.
| `business.remove_member` | Un membre a été supprimé d’une entreprise.
{%- endif %} | `business.remove_organization` | Une organisation a été supprimée d’une entreprise.
{%- ifversion ghec %} | `business.remove_support_entitlee` | Un droit au support d’un membre d’une entreprise a été supprimé. Pour plus d’informations, consultez « [Gestion des droits au support pour votre entreprise](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise) ».
{%- endif %} | `business.rename_slug` | Le slug de l’URL de l’entreprise a été renommé.
{%- ifversion ghec %} | `business.revoke_external_identity` | L’identité externe d’un membre d’une entreprise a été révoquée.
| `business.revoke_sso_session` | La session d’authentification unique SAML pour un membre d’une entreprise a été révoquée.
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | Le paramètre d’exigence d’approbation pour les workflows issus de duplications (fork) publiques a été modifié pour une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise) ».
{%- endif %} | `business.set_actions_retention_limit` | La période de conservation des artefacts et journaux de {% data variables.product.prodname_actions %} a été modifiée pour une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans une entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise) ».
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | La stratégie pour les workflows sur les duplications de dépôt privé a été modifiée. Pour plus d’informations, consultez « {% ifversion ghec %}[Application de stratégies pour {% data variables.product.prodname_actions %} dans une entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Autorisation des workflows pour les duplications de dépôt privé](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %} ».
{%- endif %} {%- ifversion audit-log-sso-response-events %} |`business.sso_response` | Une réponse d’authentification unique (SSO) SAML a été générée quand un membre a tenté de s’authentifier auprès de votre entreprise. Cet événement est disponible uniquement via le streaming de journaux d’audit et l’API REST.
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | Un propriétaire d’entreprise ou un administrateur de site a mis à jour les paramètres de stratégie {% data variables.product.prodname_actions %} pour une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour GitHub Actions dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise) ».
{%- endif %} | `business.update_default_repository_permission` | Le paramètre d’autorisation de dépôt de base a été mis à jour pour toutes les organisations d’une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour les autorisations de dépôt de base](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions) ».
| `business.update_member_repository_creation_permission` | Le paramètre de création de dépôt a été mis à jour pour une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour la création de dépôt](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation) ».
| `business.update_member_repository_invitation_permission` | Le paramètre de stratégie pour les membres d’entreprise invitant des collaborateurs externes à des dépôts a été mis à jour. Pour plus d’informations, consultez « [Application d’une stratégie pour inviter des collaborateurs externes à des dépôts](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories) ».
{%- ifversion ghec %} | `business.update_saml_provider_settings` | Les paramètres de fournisseur d’authentification unique SAML pour une entreprise ont été mis à jour.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Actions de la catégorie `business_advanced_security`

| Action | Description
|--------|-------------
| `business_advanced_security.disabled` | {% data variables.product.prodname_GH_advanced_security %} a été désactivé pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_advanced_security.enabled` | {% data variables.product.prodname_GH_advanced_security %} a été activé pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_advanced_security.disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} a été désactivé pour les nouveaux dépôts de votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_advanced_security.enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} a été activé pour les nouveaux dépôts de votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».

{% endif %}

{% ifversion code-security-audit-log-events %}

## Actions de la catégorie `business_secret_scanning`

| Action | Description
|--------|-------------
| `business_secret_scanning.disable` | L’{% data variables.product.prodname_secret_scanning_caps %} a été désactivée pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning.enable` | L’{% data variables.product.prodname_secret_scanning_caps %} a été activée pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning.disabled_for_new_repos` | L’{% data variables.product.prodname_secret_scanning_caps %} a été désactivée pour les nouveaux dépôts de votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning.enabled_for_new_repos` | L’{% data variables.product.prodname_secret_scanning_caps %} a été activée pour les nouveaux dépôts de votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Actions de la catégorie `business_secret_scanning_custom_pattern`

Action                        | Description
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | Un modèle personnalisé au niveau de l’entreprise est publié pour l’analyse des secrets. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account) ».
| `business_secret_scanning_custom_pattern.delete` | Un modèle personnalisé au niveau de l’entreprise est supprimé de l’analyse des secrets.
| `business_secret_scanning_custom_pattern.update` | Les modifications apportées à un modèle personnalisé au niveau de l’entreprise sont enregistrées pour l’analyse des secrets.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Actions de la catégorie `business_secret_scanning_push_protection`

| Action | Description
|--------|-------------
| `business_secret_scanning_push_protection.disable` | La protection des poussées pour l’{% data variables.product.prodname_secret_scanning %} a été désactivée pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning_push_protection.enable` | La protection des poussées pour l’{% data variables.product.prodname_secret_scanning %} a été activée pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning_push_protection.disabled_for_new_repos` | La protection des poussées pour l’{% data variables.product.prodname_secret_scanning %} a été désactivée pour les nouveaux dépôts de votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning_push_protection.enabled_for_new_repos` | La protection des poussées pour l’{% data variables.product.prodname_secret_scanning %} a été activée pour les nouveaux dépôts de votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».

{% endif %}

{% ifversion code-security-audit-log-events %}

## Actions de la catégorie `business_secret_scanning_push_protection_custom_message`

| Action | Description
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | Le message personnalisé déclenché par une tentative de poussée vers un dépôt avec protection de poussée a été désactivé pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning_push_protection_custom_message.enable` | Le message personnalisé déclenché par une tentative de poussée vers un dépôt avec protection de poussée a été activé pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».
| `business_secret_scanning_push_protection_custom_message.update` | Le message personnalisé déclenché par une tentative de poussée vers un dépôt avec protection de poussée a été mis à jour pour votre entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».

{% endif %}

## Actions de la catégorie `checks`

| Action | Description
|--------|-------------
| `checks.auto_trigger_disabled` | La création automatique de suites de vérifications a été désactivée sur un dépôt de l’organisation ou de l’entreprise. Pour plus d’informations, consultez « [Mettre à jour les préférences de dépôt pour les suites de vérifications](/rest/reference/checks#update-repository-preferences-for-check-suites) ».
| `checks.auto_trigger_enabled` | La création automatique de suites de vérifications a été activée sur un dépôt de l’organisation ou de l’entreprise. Pour plus d’informations, consultez « [Mettre à jour les préférences de dépôt pour les suites de vérifications](/rest/reference/checks#update-repository-preferences-for-check-suites) ».
{%- ifversion fpt or ghec %} | `checks.delete_logs` | Les journaux d’une suite de vérifications ont été supprimés.
{%- endif %}

{%- ifversion fpt or ghec %}
## Actions de la catégorie `codespaces`

| Action | Description
|--------|-------------
| `codespaces.connect` | Un codespace a été démarré.
| `codespaces.create` | Un utilisateur a [créé un codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `codespaces.destroy` | Un utilisateur a [supprimé un codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `codespaces.allow_permissions` | Un codespace utilisant des autorisations personnalisées à partir de son fichier `devcontainer.json` a été lancé.
| `codespaces.attempted_to_create_from_prebuild` | Une tentative de création d’un codespace à partir d’une prébuild a été effectuée.
| `codespaces.create_an_org_secret` | Un utilisateur a créé un [secret pour {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) au niveau de l’organisation.
| `codespaces.update_an_org_secret` | Un utilisateur a mis à jour un [secret pour {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) au niveau de l’organisation.
| `codespaces.remove_an_org_secret` | Un utilisateur a supprimé un [secret pour {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) au niveau de l’organisation.
| `codespaces.manage_access_and_security` | Un utilisateur a mis à jour [les dépôts auxquels un codespace peut accéder](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{%- endif %}

{%- ifversion fpt or ghec %}
## Actions de la catégorie `commit_comment`

| Action | Description
|--------|-------------
| `commit_comment.destroy` | Un commentaire de commit a été supprimé.
| `commit_comment.update` | Un commentaire de commit a été mis à jour.
{%- endif %}

{%- ifversion ghes %}
## Actions de la catégorie `config_entry`

| Action | Description
|--------|-------------
| `config_entry.create` | Un paramètre de configuration a été créé. Ces événements sont visibles uniquement dans le journal d’audit de l’administrateur de site. Le type d’événements enregistrés s’applique aux éléments suivants :</br>- Paramètres et stratégies d’entreprise</br>- Autorisations et paramètres de l’organisation et du référentiel</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, projet et paramètres de sécurité du code.
| `config_entry.destroy` | Un paramètre de configuration a été supprimé. Ces événements sont visibles uniquement dans le journal d’audit de l’administrateur de site. Le type d’événements enregistrés s’applique aux éléments suivants :</br>- Paramètres et stratégies d’entreprise</br>- Autorisations et paramètres de l’organisation et du référentiel</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, projet et paramètres de sécurité du code.
| `config_entry.update` | Un paramètre de configuration a été modifié. Ces événements sont visibles uniquement dans le journal d’audit de l’administrateur de site. Le type d’événements enregistrés s’applique aux éléments suivants :</br>- Paramètres et stratégies d’entreprise</br>- Autorisations et paramètres de l’organisation et du référentiel</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, projet et paramètres de sécurité du code.
{%- endif %}

## Actions de la catégorie `dependabot_alerts`

| Action | Description
|--------|-------------
| `dependabot_alerts.disable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé les alertes {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts {% ifversion fpt or ghec %}privés {% endif %} existants. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `dependabot_alerts.enable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé les alertes {% data variables.product.prodname_dependabot_alerts %} pour tous les dépôts {% ifversion fpt or ghec %}privés {% endif %} existants.

## Actions de la catégorie `dependabot_alerts_new_repos`

| Action | Description
|--------|-------------
| `dependabot_alerts_new_repos.disable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé les alertes {% data variables.product.prodname_dependabot_alerts %} pour tous les nouveaux dépôts{% ifversion fpt or ghec %} privés{% endif %}. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `dependabot_alerts_new_repos.enable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé les alertes {% data variables.product.prodname_dependabot_alerts %} pour tous les nouveaux dépôts{% ifversion fpt or ghec %} privés{% endif %}.

## Actions de la catégorie `dependabot_repository_access`

| Action | Description
|--------|-------------
| `dependabot_repository_access.repositories_updated` | Les dépôts auxquels {% data variables.product.prodname_dependabot %} peut accéder ont été mis à jour.

{%- ifversion fpt or ghec or ghes %}
## Actions de la catégorie `dependabot_security_updates`

| Action | Description
|--------|-------------
| `dependabot_security_updates.disable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé les {% data variables.product.prodname_dependabot_security_updates %} pour tous les dépôts existants. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `dependabot_security_updates.enable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé les {% data variables.product.prodname_dependabot_security_updates %} pour tous les dépôts existants.

## Actions de la catégorie `dependabot_security_updates_new_repos`

| Action | Description
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé les {% data variables.product.prodname_dependabot_security_updates %} pour tous les nouveaux dépôts. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `dependabot_security_updates_new_repos.enable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé les {% data variables.product.prodname_dependabot_security_updates %} pour tous les nouveaux dépôts.
{%- endif %}

## Actions de la catégorie `dependency_graph`

| Action | Description
|--------|-------------
| `dependency_graph.disable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé le graphe des dépendances pour tous les dépôts existants. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `dependency_graph.enable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé le graphe des dépendances pour tous les dépôts existants.

## Actions de la catégorie `dependency_graph_new_repos`

| Action | Description
|--------|-------------
| `dependency_graph_new_repos.disable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé le graphe des dépendances pour tous les nouveaux dépôts. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».
| `dependency_graph_new_repos.enable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé le graphe des dépendances pour tous les nouveaux dépôts.

{%- ifversion fpt or ghec %}
## Actions de la catégorie `discussion`

| Action | Description
|--------|-------------
| `discussion.destroy` | Une discussion d’équipe a été supprimée.

## Actions de la catégorie `discussion_comment`

| Action | Description
|--------|-------------
| `discussion_comment.destroy` | Un [commentaire sur un billet de discussion d’équipe a été supprimé](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_comment.update` | Un [commentaire sur un billet de discussion d’équipe a été modifié](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).

## Actions de la catégorie `discussion_post`

| Action | Description
|--------|-------------
| `discussion_post.destroy` | Un [billet de discussion d’équipe a été supprimé](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).
| `discussion_post.update` | Un [billet de discussion d’équipe a été modifié](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).

## Actions de la catégorie `discussion_post_reply`

| Action | Description
|--------|-------------
| `discussion_post_reply.destroy` | Une [réponse à un billet de discussion d’équipe a été supprimée](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_post_reply.update` | Une [réponse à un billet de discussion d’équipe a été modifiée](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
{%- endif %}

{%- ifversion ghec or ghes %}
## Actions de la catégorie `dotcom_connection`

| Action | Description
|--------|-------------
| `dotcom_connection.create` | Une connexion {% data variables.product.prodname_github_connect %} à {% data variables.product.prodname_dotcom_the_website %} a été créée.
| `dotcom_connection.destroy` | Une connexion {% data variables.product.prodname_github_connect %} à {% data variables.product.prodname_dotcom_the_website %} a été supprimée.
| `dotcom_connection.token_updated` | Le jeton de connexion {% data variables.product.prodname_github_connect %} pour {% data variables.product.prodname_dotcom_the_website %} a été mis à jour.
| `dotcom_connection.upload_license_usage` | L’utilisation de licences {% data variables.product.prodname_ghe_server %} a été chargée manuellement sur {% data variables.product.prodname_ghe_cloud %}.
| `dotcom_connection.upload_usage_metrics` | Les métriques d’utilisation de {% data variables.product.prodname_ghe_server %} ont été chargées manuellement sur {% data variables.product.prodname_dotcom_the_website %}.
{%- endif %}

## Actions de la catégorie `enterprise`

| Action | Description
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé l’accès en lecture Git anonyme pour les dépôts de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access) ».
| `enterprise.config.enable_anonymous_git_access`   | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé l’accès en lecture Git anonyme pour les dépôts de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access) ».
| `enterprise.config.lock_anonymous_git_access`   | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a verrouillé l’accès en lecture Git anonyme pour empêcher les administrateurs de dépôt de modifier les paramètres d’accès en lecture Git anonyme existants pour les dépôts de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access) ».
| `enterprise.config.unlock_anonymous_git_access` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a déverrouillé l’accès en lecture Git anonyme pour autoriser les administrateurs de dépôt à modifier les paramètres d’accès en lecture Git anonyme existants pour les dépôts de l’entreprise. Pour plus d’informations, consultez « [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access) ».
| `enterprise.register_self_hosted_runner` | Un nouvel exécuteur auto-hébergé {% data variables.product.prodname_actions %} a été enregistré. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à un dépôt](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository) ».
| `enterprise.remove_self_hosted_runner` | Un exécuteur auto-hébergé {% data variables.product.prodname_actions %} a été supprimé. Pour plus d’informations, consultez « [Suppression d’un exécuteur d’un dépôt](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository) ».
| `enterprise.runner_group_created` | Un groupe d’exécuteurs auto-hébergés {% data variables.product.prodname_actions %} a été créé. Pour plus d’informations, consultez « [Création d’un groupe d’exécuteurs auto-hébergés pour une organisation](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization) ».
| `enterprise.runner_group_removed` | Un groupe d’exécuteurs auto-hébergés {% data variables.product.prodname_actions %} a été supprimé. Pour plus d’informations, consultez « [Suppression d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) ».
| `enterprise.runner_group_renamed` | Un groupe d’exécuteurs auto-hébergés {% data variables.product.prodname_actions %} a été renommé. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `enterprise.runner_group_updated` | La configuration d’un groupe d’exécuteurs auto-hébergés {% data variables.product.prodname_actions %} a été modifiée. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `enterprise.runner_group_runner_removed` |  L’API REST a été utilisée pour supprimer un exécuteur auto-hébergé {% data variables.product.prodname_actions %} d’un groupe. Pour plus d’informations, consultez « [Supprimer un exécuteur auto-hébergé d’un groupe pour une organisation](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) ».
| `enterprise.runner_group_runners_added` | Un exécuteur auto-hébergé {% data variables.product.prodname_actions %} a été ajouté à un groupe. Pour plus d’informations, consultez [Déplacement d’un exécuteur auto-hébergé vers un groupe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `enterprise.runner_group_runners_updated`|  La liste des membres d’un groupe d’exécuteurs {% data variables.product.prodname_actions %} a été mise à jour. Pour plus d’informations, consultez « [Définir des exécuteurs auto-hébergés dans un groupe pour une organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) ».
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | La visibilité d’un groupe d’exécuteurs auto-hébergés {% data variables.product.prodname_actions %} a été mise à jour à l’aide de l’API REST. Pour plus d’informations, consultez « [Mise à jour d’un groupe d’exécuteurs auto-hébergés pour une organisation](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization) ».
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | L’application d’exécuteur {% data variables.product.prodname_actions %} a été démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `enterprise.self_hosted_runner_offline` | L’application d’exécuteur {% data variables.product.prodname_actions %} a été arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | L’application d’exécuteur {% data variables.product.prodname_actions %} a été mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) ».
{%- endif %}

{%- ifversion ghec %}
## Actions de la catégorie `enterprise_domain`

| Action | Description
|--------|-------------
| `enterprise_domain.approve` | Un domaine d’entreprise a été approuvé pour une entreprise. Pour plus d’informations, consultez « [Approbation d’un domaine pour votre compte d’entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account) ».
| `enterprise_domain.create` | Un domaine d’entreprise a été ajouté à une entreprise. Pour plus d’informations, consultez « [Vérification d’un domaine pour votre compte d’entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account) ».
| `enterprise_domain.destroy` | Un domaine d’entreprise a été supprimé d’une entreprise. Pour plus d’informations, consultez « [Suppression d’un domaine approuvé ou vérifié](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain) ».
| `enterprise_domain.verify` | Un domaine d’entreprise a été vérifié pour une entreprise. Pour plus d’informations, consultez « [Vérification d’un domaine pour votre compte d’entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account) ».

## Actions de la catégorie `enterprise_installation`

| Action | Description
|--------|-------------
| `enterprise_installation.create` | L’{% data variables.product.prodname_github_app %} associée à une connexion d’entreprise {% data variables.product.prodname_github_connect %} a été créée.
| `enterprise_installation.destroy` | L’{% data variables.product.prodname_github_app %} associée à une connexion d’entreprise {% data variables.product.prodname_github_connect %} a été supprimée.
| `enterprise_installation.token_updated` | Le jeton appartenant à l’{% data variables.product.prodname_github_app %} associée à une connexion d’entreprise {% data variables.product.prodname_github_connect %} a été mis à jour.
{%- endif %}

{%- ifversion fpt or ghec %}
## Actions de la catégorie `environment`

| Action | Description
|--------|-------------
| `environment.add_protection_rule` | Une règle de protection d’environnement {% data variables.product.prodname_actions %} a été créée à l’aide de l’API. Pour plus d’informations, consultez « [Règles de protection d’environnement](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules) ».
| `environment.create_actions_secret` | Un secret a été créé pour un environnement {% data variables.product.prodname_actions %} à l’aide de l’API. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.delete` | Un environnement a été supprimé à l’aide de l’API. Pour plus d’informations, consultez [« Suppression d’un environnement »](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment).
| `environment.remove_actions_secret` | Un secret a été supprimé pour un environnement {% data variables.product.prodname_actions %} à l’aide de l’API. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.remove_protection_rule` | Une règle de protection d’environnement {% data variables.product.prodname_actions %} a été supprimée à l’aide de l’API. Pour plus d’informations, consultez « [Règles de protection d’environnement](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules) ».
| `environment.update_actions_secret` | Un secret a été mis à jour pour un environnement {% data variables.product.prodname_actions %} à l’aide de l’API. Pour plus d’informations, consultez [« Secrets d’environnement »](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.update_protection_rule` | Une règle de protection d’environnement {% data variables.product.prodname_actions %} a été mise à jour à l’aide de l’API. Pour plus d’informations, consultez « [Règles de protection d’environnement](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules) ».
{%- endif %}

{%- ifversion ghae %}
## Actions de la catégorie `external_group`

| Action | Description
|--------|-------------
| `external_group.delete` | Un groupe Okta a été supprimé. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_group.link` | Un groupe Okta a été mappé à une équipe {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_group.provision` | Un groupe Okta a été mappé à une équipe sur {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_group.unlink` | Un groupe Okta a été démappé d’une équipe {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_group.update` | Les paramètres d’un groupe Okta ont été mis à jour. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».

## Actions de la catégorie `external_identity`
| Action | Description
|--------|-------------
| `external_identity.deprovision` | Un utilisateur a été supprimé d’un groupe Okta et a donc été déprovisionné de {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_identity.provision` | Un utilisateur Okta a été ajouté à un groupe Okta et a donc été provisionné à l’équipe mappée sur {% data variables.product.prodname_ghe_managed %}. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
| `external_identity.update` | Les paramètres d’un utilisateur Okta ont été mis à jour. Pour plus d’informations, consultez « [Mappage de groupes Okta à des équipes](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams) ».
{%- endif %}

## Actions de la catégorie `gist`

| Action | Description
|--------|-------------
| `gist.create` | Un gist est créé.
| `gist.destroy` | Un gist est supprimé.
| `gist.visibility_change` | La visibilité d’un gist est modifiée.

{% ifversion git-events-audit-log %}
## Actions de la catégorie `git`

{% ifversion enable-git-events %} Avant de voir les actions de catégorie `git`, vous devez activer les événements Git dans le journal d’audit. Pour plus d’informations, consultez « [Configuration du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log) ».
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| Action | Description
|--------|-------------
| `git.clone` | Un dépôt a été cloné.
| `git.fetch` | Les modifications ont été récupérées (fetch) à partir d’un dépôt.
| `git.push`  | Les modifications ont été poussées (push) sur un dépôt.
{% endif %}

## Actions de la catégorie `hook`

| Action | Description
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | L’état actif d’un hook a été mis à jour.
{%- endif %} | `hook.config_changed`             | La configuration d’un hook a été modifiée.
| `hook.create`                     | Un nouveau hook a été ajouté.
| `hook.destroy`                    | Un hook a été supprimé.
| `hook.events_changed`             | Les événements configurés d’un hook ont été modifiés.

## Actions de la catégorie `integration`

| Action | Description
|--------|-------------
| `integration.create` | Une intégration a été créée.
| `integration.destroy` | Une intégration a été supprimée.
| `integration.manager_added` | Un membre d’une entreprise ou d’une organisation a été ajouté comme gestionnaire d’intégration.
| `integration.manager_removed` | Le statut de gestionnaire d’intégration d’un membre d’une entreprise ou d’une organisation a été supprimé.
| `integration.transfer` | La propriété d’une intégration a été transférée à un autre utilisateur ou une autre organisation.
| `integration.remove_client_secret` | Un secret client pour une intégration a été supprimé.
| `integration.revoke_all_tokens` | La révocation de tous les jetons utilisateur pour une intégration a été demandée.
| `integration.revoke_tokens` | Les jetons pour une intégration ont été révoqués.

## Actions de la catégorie `integration_installation`

| Action | Description
|--------|-------------
| `integration_installation.contact_email_changed` | Un e-mail de contact pour une intégration a été modifié.
| `integration_installation.create` | Une intégration a été installée.
| `integration_installation.destroy` | Une intégration a été désinstallée.
| `integration_installation.repositories_added` | Des dépôts ont été ajoutés à une intégration.
| `integration_installation.repositories_removed` | Des dépôts ont été supprimés d’une intégration.
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | Une intégration a été suspendue.
| `integration_installation.unsuspend` | Une intégration a été rétablie.
{%- endif %} | `integration_installation.version_updated` | Les autorisations pour une intégration ont été mises à jour.

## Actions de la catégorie `integration_installation_request`

| Action | Description
|--------|-------------
| `integration_installation_request.create` | Un membre a demandé à un propriétaire d’installer une intégration à utiliser dans une entreprise ou une organisation.
| `integration_installation_request.close` | Une demande d’installation d’une intégration à utiliser dans une entreprise ou une organisation a été approuvée ou refusée par un propriétaire, ou a été annulée par le membre qui a ouvert la demande.

{%- ifversion ghec or ghae %}
## Actions de la catégorie `ip_allow_list`

| Action | Description
|--------|-------------
| `ip_allow_list.enable`               | Une liste verte d’IP a été activée.
| `ip_allow_list.enable_for_installed_apps` | Une liste verte d’IP a été activée pour les {% data variables.product.prodname_github_apps %} installées.
| `ip_allow_list.disable`              | Une liste verte d’IP a été désactivée.
| `ip_allow_list.disable_for_installed_apps` | Une liste verte d’IP a été désactivée pour les {% data variables.product.prodname_github_apps %} installées.

## Actions de la catégorie `ip_allow_list_entry`

| Action | Description
|--------|-------------
| `ip_allow_list_entry.create` | Une adresse IP a été ajoutée à une liste verte d’IP.
| `ip_allow_list_entry.update` | Une adresse IP ou sa description a été modifiée.
| `ip_allow_list_entry.destroy` | Une adresse IP a été supprimée d’une liste verte d’IP.
{%- endif %}

## Actions de la catégorie `issue`

| Action | Description
|--------|-------------
| `issue.destroy`                      | Un problème a été supprimé du dépôt. Pour plus d’informations, consultez « [Suppression d’un problème](/issues/tracking-your-work-with-issues/deleting-an-issue) ».
| `issue.pinned`                       | Un problème a été épinglé à un dépôt. Pour plus d’informations, consultez « [Épinglage d’un problème à votre dépôt](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository) ».
| `issue.transfer`                     | Un problème a été transféré vers un autre dépôt. Pour plus d’informations, consultez « [Transfert d’un problème vers un autre dépôt](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository) ».
| `issue.unpinned`                     | Un problème a été désépinglé d’un dépôt. Pour plus d’informations, consultez « [Épinglage d’un problème à votre dépôt](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository) ».

## Actions de la catégorie `issue_comment`

| Action | Description
|--------|-------------
| `issue_comment.destroy`  | Un commentaire sur un problème a été supprimé du dépôt.
| `issue_comment.pinned`   | Un commentaire sur un problème a été épinglé à un dépôt.
| `issue_comment.unpinned` | Un commentaire sur un problème a été désépinglé d’un dépôt.
| `issue_comment.update`   | Un commentaire sur un problème (autre que celui d’origine) a été modifié.

## Actions de la catégorie `issues`

| Action | Description
|--------|-------------
| `issues.deletes_disabled` | La possibilité pour les membres d’entreprise de supprimer des problèmes a été désactivée. Les membres ne peuvent pas supprimer de problèmes dans les organisations d’une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour la suppression des problèmes](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues) ».
| `issues.deletes_enabled` | La possibilité pour les membres d’entreprise de supprimer des problèmes a été activée. Les membres peuvent supprimer des problèmes dans n’importe quelle organisation d’une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour la suppression des problèmes](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues) ».
| `issues.deletes_policy_cleared` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a effacé le paramètre de stratégie pour permettre aux membres de supprimer des problèmes dans une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour la suppression des problèmes](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues) ».

{%- ifversion fpt or ghec %}
## Actions de la catégorie `marketplace_agreement_signature`

| Action | Description
|--------|-------------
| `marketplace_agreement_signature.create` | Un utilisateur a signé le contrat de développeur {% data variables.product.prodname_marketplace %} pour le compte d’une organisation.

## Actions de la catégorie `marketplace_listing`

| Action | Description
|--------|-------------
| `marketplace_listing.approve` | Un référencement a été approuvé pour {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.change_category` | Une catégorie pour le référencement d’une application dans {% data variables.product.prodname_marketplace %} a été modifiée.
| `marketplace_listing.create` | Un référencement pour une application dans {% data variables.product.prodname_marketplace %} a été créé.
| `marketplace_listing.delist` | Un référencement a été supprimé de {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.redraft` | Un référencement est revenu à l’état de brouillon.
| `marketplace_listing.reject` | Un référencement n’a pas été accepté pour {% data variables.product.prodname_marketplace %}.
{%- endif %}

## Actions de la catégorie `members_can_create_pages`

| Action | Description
|--------|-------------
| `members_can_create_pages.disable` | La possibilité pour les membres de publier des sites {% data variables.product.prodname_pages %} a été désactivée. Les membres ne peuvent pas publier de sites {% data variables.product.prodname_pages %} dans une organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites GitHub Pages pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ».
| `members_can_create_pages.enable` | La possibilité pour les membres de publier des sites {% data variables.product.prodname_pages %} a été activée. Les membres peuvent publier des sites {% data variables.product.prodname_pages %} dans une organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites GitHub Pages pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ».

## Actions de la catégorie `members_can_create_private_pages`

| Action | Description
|--------|-------------
| `members_can_create_private_pages.disable` | La possibilité pour les membres de publier des sites {% data variables.product.prodname_pages %} privés a été désactivée. Les membres ne peuvent pas publier de sites {% data variables.product.prodname_pages %} privés dans une organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites GitHub Pages pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ».
| `members_can_create_private_pages.enable` |  La possibilité pour les membres de publier des sites {% data variables.product.prodname_pages %} privés a été activée. Les membres peuvent publier des sites {% data variables.product.prodname_pages %} privés dans une organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites GitHub Pages pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ».

## Actions de la catégorie `members_can_create_public_pages`

| Action | Description
|--------|-------------
| `members_can_create_public_pages.disable` |  La possibilité pour les membres de publier des sites {% data variables.product.prodname_pages %} publics a été désactivée. Les membres ne peuvent pas publier de sites {% data variables.product.prodname_pages %} publics dans une organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites GitHub Pages pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ».
| `members_can_create_public_pages.enable` |  La possibilité pour les membres de publier des sites {% data variables.product.prodname_pages %} publics a été activée. Les membres peuvent publier des sites {% data variables.product.prodname_pages %} publics dans une organisation. Pour plus d’informations, consultez « [Gestion de la publication de sites GitHub Pages pour votre organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) ».

{%- ifversion ghec or ghes or ghae %}
## Actions de la catégorie `members_can_delete_repos`

| Action | Description
|--------|-------------
| `members_can_delete_repos.clear` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a effacé le paramètre de stratégie pour la suppression ou le transfert de dépôts dans les organisations d’une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour la suppression et le transfert de dépôt](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer) ».
| `members_can_delete_repos.disable` | La possibilité pour les membres d’entreprise de supprimer des dépôts a été désactivée. Les membres ne peuvent pas supprimer ou transférer de dépôts dans les organisations d’une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour la suppression et le transfert de dépôt](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer) ».
| `members_can_delete_repos.enable` |  La possibilité pour les membres d’entreprise de supprimer des dépôts a été activée. Les membres peuvent supprimer ou transférer des dépôts dans n’importe quelle organisation d’une entreprise. Pour plus d’informations, consultez « [Application d’une stratégie pour la suppression et le transfert de dépôt](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer) ».

## Actions de la catégorie `members_can_view_dependency_insights`

| Action | Description
|--------|-------------
| `members_can_view_dependency_insights.clear` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a effacé le paramètre de stratégie pour la visualisation des insights sur les dépendances dans les organisations d’une entreprise.{% ifversion ghec %} Pour plus d’informations, consultez « [Application d’une stratégie pour la visibilité des insights sur les dépendances](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise) ».{% endif %}
| `members_can_view_dependency_insights.disable` | La possibilité pour les membres d’entreprise de voir les insights sur les dépendances a été désactivée. Les membres ne peuvent pas voir les insights sur les dépendances dans les organisations d’une entreprise.{% ifversion ghec %} Pour plus d’informations, consultez « [Application d’une stratégie pour la visibilité des insights sur les dépendances](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise) ».{% endif %}
| `members_can_view_dependency_insights.enable` |  La possibilité pour les membres d’entreprise de voir les insights sur les dépendances a été activée. Les membres peuvent voir les insights sur les dépendances dans n’importe quelle organisation d’une entreprise.{% ifversion ghec %} Pour plus d’informations, consultez « [Application d’une stratégie pour la visibilité des insights sur les dépendances](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise) ».{% endif %}

## Actions de la catégorie `migration`

| Action | Description
|--------|-------------
| `migration.create` | Un fichier de migration a été créé pour le transfert de données à partir d’un emplacement *source* (par exemple, une organisation {% data variables.product.prodname_dotcom_the_website %} ou une instance de {% data variables.product.prodname_ghe_server %}) vers une instance de {% data variables.product.prodname_ghe_server %} *cible*.
| `migration.destroy_file` | Un fichier de migration pour le transfert de données à partir d’un emplacement *source* (par exemple, une organisation {% data variables.product.prodname_dotcom_the_website %} ou une instance de {% data variables.product.prodname_ghe_server %}) vers une instance de {% data variables.product.prodname_ghe_server %} *cible* a été supprimé.
|  `migration.download` | Un fichier de migration pour le transfert de données à partir d’un emplacement *source* (par exemple, une organisation {% data variables.product.prodname_dotcom_the_website %} ou une instance de {% data variables.product.prodname_ghe_server %}) vers une instance de {% data variables.product.prodname_ghe_server %} *cible* a été téléchargé.
{%- endif %}

## Actions de la catégorie `oauth_access`

| Action | Description
|--------|-------------
`oauth_access.create`   | Un [jeton d’accès OAuth][] a été généré pour un compte d’utilisateur. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».
`oauth_access.destroy`  | Un [jeton d’accès OAuth][] a été supprimé d’un compte d’utilisateur.

  [Jeton d’accès OAuth]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## Actions de la catégorie `oauth_application`

| Action | Description
|--------|-------------
| `oauth_application.create`           | Une [application OAuth][] a été créée pour un compte d’utilisateur ou d’organisation.
| `oauth_application.destroy`          | Une [application OAuth][] a été supprimée d’un compte d’utilisateur ou d’organisation.
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | La clé secrète d’une [application OAuth][] a été générée.
| `oauth_application.remove_client_secret`     | La clé secrète d’une [application OAuth][] a été supprimée.
{%- endif %} | `oauth_application.reset_secret`      | La clé secrète d’une [application OAuth][] a été réinitialisée.
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | La révocation de tous les jetons utilisateur pour une [application OAuth][] a été demandée.
{%- endif %} | `oauth_application.revoke_tokens`     | Les jetons pour une [application OAuth][] ont été révoqués.
| `oauth_application.transfer`          | Une [application OAuth][] a été transférée d’un compte d’utilisateur ou d’organisation vers un autre.
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend`         | Une [application OAuth][] a été rétablie pour un compte d’utilisateur ou d’organisation.
{%- endif %}

  [Application OAuth]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## Actions de la catégorie `oauth_authorization`

| Action | Description
|--------|-------------
| `oauth_authorization.create`          | Une autorisation pour une application OAuth a été créée. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps) ».
| `oauth_authorization.destroy`          | Une autorisation pour une application OAuth a été supprimée. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps) ».
| `oauth_authorization.update`          | Une autorisation pour une application OAuth a été mise à jour. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps) ».
{%- endif %}

## Actions de la catégorie `org`

| Action | Description
|--------|-------------
| `org.accept_business_invitation` | Une invitation envoyée à une organisation pour rejoindre une entreprise a été acceptée. {% ifversion ghec %}Pour plus d’informations, consultez « [Invitation d’une organisation à rejoindre votre compte d’entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account) ».{% endif %}
| `org.add_billing_manager` | Un gestionnaire de facturation a été ajouté à une organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Ajout d’un gestionnaire de facturation à votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization) ».{% endif %}
| `org.add_member` | Un utilisateur a rejoint une organisation.
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} a été désactivé pour les nouveaux dépôts d’une organisation.
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} a été désactivé pour tous les dépôts d’une organisation.
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} a été activé pour les nouveaux dépôts d’une organisation.
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} a été activé pour tous les dépôts d’une organisation.
| `org.advanced_security_policy_selected_member_disabled` | Un propriétaire d’entreprise a empêché l’activation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour les dépôts appartenant à l’organisation. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | Un propriétaire d’entreprise a autorisé l’activation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour les dépôts appartenant à l’organisation. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | Un propriétaire d'organisation a mis à jour les stratégies pour {% data variables.product.prodname_GH_advanced_security %} dans une entreprise. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | Un utilisateur a lancé un travail d'arrière-plan pour supprimer une organisation.
{%- ifversion ghec %} | `org.audit_log_export` | Un propriétaire d’organisation a créé une exportation du journal d’audit de l’organisation. Si l’exportation inclut une requête, le journal indique la requête utilisée et le nombre d’entrées du journal d’audit correspondant à cette requête. Pour plus d’informations, consultez « [Exportation de l’activité du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise) ».
{%- endif %} | `org.block_user` | Un propriétaire d’organisation a bloqué l’accès d’un utilisateur aux dépôts de l’organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Blocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization) ».{% endif %} | `org.cancel_business_invitation` | L’invitation d’une organisation à rejoindre une entreprise a été révoquée. {% ifversion ghec %}Pour plus d’informations, consultez « [Invitation d’une organisation à rejoindre votre compte d’entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account) ».{% endif %} | `org.cancel_invitation` | Une invitation envoyée à un utilisateur pour rejoindre une organisation a été révoquée.
| `org.clear_actions_settings` |  Un propriétaire d’organisation a effacé les paramètres de stratégie {% data variables.product.prodname_actions %} pour une organisation. Pour plus d’informations, consultez « [Gestion des autorisations GitHub Actions pour votre organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization) ».
| `org.clear_default_repository_permission` | Un propriétaire d’organisation a effacé le paramètre de stratégie d’autorisation de dépôt de base pour une organisation. Pour plus d’informations, consultez « [Définition des autorisations de base](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions) ».
| `org.clear_member_team_creation_permission` | Un propriétaire d’organisation a effacé le paramètre de création d’équipe pour une organisation. Pour plus d’informations, consultez « [Définition des autorisations de création d’équipe dans votre organisation](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization) ».
| `org.clear_reader_discussion_creation_permission` | Un propriétaire d’organisation a effacé le paramètre de création de discussion pour une organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Autoriser ou interdire la création de discussions aux utilisateurs avec accès en lecture](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization) ».{% endif %} | `org.clear_members_can_create_repos`                 | Un propriétaire d’organisation a effacé une restriction sur la création de dépôt dans une organisation. Pour plus d’informations, consultez « [Restriction de la création de dépôt dans votre organisation](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization) ».
| `org.clear_members_can_invite_outside_collaborators` | Un propriétaire d’organisation a effacé la stratégie d’invitation de collaborateurs externes pour une organisation. Pour plus d’informations, consultez « [Définition des autorisations pour l’ajout de collaborateurs externes](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators) ».
| `org.clear_new_repository_default_branch_setting`    | Un propriétaire d’organisation a effacé le paramètre de nom de branche par défaut pour les nouveaux dépôts pour une organisation. Pour plus d’informations, consultez « [Définition du nom de la branche par défaut](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name) ».
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted`         | L’accès des {% data variables.product.prodname_github_codespaces %} aux dépôts approuvés a été accordé pour tous les autres dépôts d’une organisation. Pour plus d’informations, consultez « [Gestion de l’accès aux dépôts pour les codespaces de votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces) ».
| `org.codespaces_trusted_repo_access_revoked`         | L’accès des {% data variables.product.prodname_github_codespaces %} aux dépôts approuvés a été révoqué pour tous les autres dépôts d’une organisation. Pour plus d’informations, consultez « [Gestion de l’accès aux dépôts pour les codespaces de votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces) ».
{%- endif %}                                                                                                             | | `org.config.disable_collaborators_only` | La limitation des interactions aux collaborateurs uniquement pour une organisation a été désactivée. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization) ».{% endif %} | `org.config.disable_contributors_only` | La limitation des interactions aux contributeurs antérieurs uniquement pour une organisation a été désactivée. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization) ».{% endif %} | `org.config.disable_sockpuppet_disallowed` | La limitation des interactions aux utilisateurs existants uniquement pour une organisation a été désactivée. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization) ».{% endif %} | `org.config.enable_collaborators_only` | La limitation des interactions aux collaborateurs uniquement pour une organisation a été activée. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization) ».{% endif %} | `org.config.enable_contributors_only` | La limitation des interactions aux contributeurs antérieurs uniquement pour une organisation a été activée. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization) ».{% endif %} | `org.config.enable_sockpuppet_disallowed` | La limitation des interactions aux utilisateurs existants uniquement pour une organisation a été activée. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization) ».{% endif %} | `org.confirm_business_invitation` | L’invitation d’une organisation à rejoindre une entreprise a été confirmée. {% ifversion ghec %}Pour plus d’informations, consultez « [Invitation d’une organisation à rejoindre votre compte d’entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account) ».{% endif %} | `org.create` | Une organisation a été créée. Pour plus d’informations, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | Un secret {% data variables.product.prodname_actions %} a été créé pour une organisation. Pour plus d’informations, consultez « [Création de secrets chiffrés pour une organisation](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization) ».
{%- endif %} | `org.create_integration_secret` | Un secret d’intégration {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou {% data variables.product.prodname_github_codespaces %}{% endif %} a été créé pour une organisation.
| `org.delete`       | Une organisation a été supprimée par un travail en arrière-plan lancé par l’utilisateur.
| `org.disable_member_team_creation_permission` | Un propriétaire d’organisation a limité la création d’équipe aux propriétaires. Pour plus d’informations, consultez « [Définition des autorisations de création d’équipe dans votre organisation](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization) ».
| `org.disable_reader_discussion_creation_permission` | Un propriétaire d’organisation a limité la création de discussion aux utilisateurs disposant au moins d’une autorisation de triage dans une organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Autoriser ou interdire la création de discussions aux utilisateurs avec accès en lecture](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization) »{% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | Les restrictions d’accès des applications tierces pour une organisation ont été désactivées. Pour plus d’informations, consultez « [Désactivation des restrictions d’accès des applications OAuth pour votre organisation](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization) ».
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | Un propriétaire d’organisation a désactivé l’authentification unique SAML pour une organisation.
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | Un propriétaire d’organisation a désactivé une exigence d’authentification à 2 facteurs pour tous les membres{% ifversion fpt or ghec %}, gestionnaires de facturation{% endif %} et collaborateurs externes dans une organisation.
{%- endif %} | `org.display_commenter_full_name_disabled` | Un propriétaire d’organisation a désactivé l’affichage du nom complet d’un commentateur dans une organisation. Les membres ne peuvent pas voir le nom complet de l’auteur d’un commentaire.
| `org.display_commenter_full_name_enabled` | Un propriétaire d’organisation a activé l’affichage du nom complet d’un commentateur dans une organisation. Les membres peuvent voir le nom complet de l’auteur d’un commentaire.
| `org.enable_member_team_creation_permission` | Un propriétaire d’organisation a autorisé les membres à créer des équipes. Pour plus d’informations, consultez « [Définition des autorisations de création d’équipe dans votre organisation](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization) ».
| `org.enable_reader_discussion_creation_permission` | Un propriétaire d’organisation a autorisé les utilisateurs disposant d’un accès en lecture à créer des discussions dans une organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Autoriser ou interdire la création de discussions aux utilisateurs avec accès en lecture](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization) »{% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | Les restrictions d’accès des applications tierces pour une organisation ont été activées. Pour plus d’informations, consultez « [Activation des restrictions d’accès des applications OAuth pour votre organisation](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization) ».
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | Un propriétaire d’organisation a [activé l’authentification unique SAML](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) pour une organisation.
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | Un propriétaire d’organisation exige l’authentification à 2 facteurs pour tous les membres{% ifversion fpt or ghec %}, gestionnaires de facturation{% endif %} et collaborateurs externes dans une organisation.
{%- endif %} | `org.integration_manager_added` | Un propriétaire d’organisation a accordé à un membre un accès lui permettant de gérer toutes les applications GitHub appartenant à une organisation.
| `org.integration_manager_removed` | Un propriétaire d’organisation a retiré à un membre d’une organisation l’accès permettant de gérer toutes les applications GitHub appartenant à l’organisation.
| `org.invite_member` | Un nouvel utilisateur a été invité à rejoindre une organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Invitation d’utilisateurs à rejoindre votre organisation](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization) ».{% endif %} | `org.invite_to_business` | Une organisation a été invitée à rejoindre une entreprise.
| `org.members_can_update_protected_branches.clear` | Un propriétaire d’organisation a annulé une stratégie pour autoriser ou non les membres d’une organisation à mettre à jour des branches protégées sur des dépôts dans une organisation. Les administrateurs d’organisation peuvent choisir d’autoriser ou non la mise à jour des paramètres des branches protégées.
| `org.members_can_update_protected_branches.disable` | La possibilité pour les membres d’entreprise de mettre à jour des branches protégées a été désactivée. Seuls les propriétaires d’entreprise peuvent mettre à jour des branches protégées.
| `org.members_can_update_protected_branches.enable` |  La possibilité pour les membres d’entreprise de mettre à jour des branches protégées a été activée. Les membres d’une organisation peuvent mettre à jour des branches protégées.
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | Un propriétaire [a accordé à une {% data variables.product.prodname_oauth_app %} l’accès à une organisation](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `org.oauth_app_access_denied` | Un propriétaire a [désactivé l’accès déjà approuvé d’une {% data variables.product.prodname_oauth_app %}](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) à une organisation.
| `org.oauth_app_access_requested` | Un membre d’organisation a demandé à un propriétaire d’accorder à une {% data variables.product.prodname_oauth_app %} l’accès à une organisation.
{%- endif %} | `org.recreate` | Une organisation a été restaurée.
| `org.register_self_hosted_runner` | Un nouvel exécuteur auto-hébergé a été enregistré. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à une organisation](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization) ».
| `org.remove_actions_secret` | Un secret {% data variables.product.prodname_actions %} a été supprimé.
| `org.remove_integration_secret` | Un secret d’intégration {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou {% data variables.product.prodname_github_codespaces %}{% endif %} a été supprimé d’une organisation.
| `org.remove_billing_manager` | Un propriétaire a supprimé un gestionnaire de facturation d’une organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Suppression d’un gestionnaire de facturation de votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization) ».{% endif %}{% ifversion not ghae %} Ou [l’authentification à 2 facteurs était exigée dans une organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) et un gestionnaire de facturation ne l’a pas utilisée ou l’a désactivée.{% endif %} | `org.remove_member` | Un [propriétaire a supprimé un membre d’une organisation](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} ou [l’authentification à 2 facteurs était exigée dans une organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) et un membre de l’organisation ne l’utilise pas ou l’a désactivée{% endif %}. Ou un [membre d’une organisation s’est supprimé](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) de l’organisation.
| `org.remove_outside_collaborator` | Un propriétaire a supprimé un collaborateur externe d’une organisation{% ifversion not ghae %} ou [l’authentification à 2 facteurs était exigée dans une organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) et un collaborateur externe ne l’a pas utilisée ou l’a désactivée{% endif %}.
| `org.remove_self_hosted_runner` | Un exécuteur auto-hébergé a été supprimé. Pour plus d’informations, consultez « [Suppression d’un exécuteur d’une organisation](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization) ».
| `org.rename` | Une organisation a été renommée.
| `org.restore_member` | Un membre d’organisation a été restauré. Pour plus d’informations, consultez « [Rétablissement d’un ancien membre de votre organisation](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization) ».
{%- ifversion ghec %} | `org.revoke_external_identity` | Un propriétaire d’organisation a révoqué l’identité liée d’un membre. Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) ».
| `org.revoke_sso_session` | Un propriétaire d’organisation a révoqué la session SAML d’un membre. Pour plus d’informations, consultez « [Affichage et gestion de l’accès SAML d’un membre à votre organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) ».
{%- endif %} | `org.runner_group_created` | Un groupe d’exécuteurs auto-hébergés a été créé. Pour plus d’informations, consultez « [Création d’un groupe d’exécuteurs auto-hébergés pour une organisation](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization) ».
| `org.runner_group_removed` | Un groupe d’exécuteurs auto-hébergés a été supprimé. Pour plus d’informations, consultez « [Suppression d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) ».
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | Un groupe d’exécuteurs auto-hébergés a été renommé. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
{%- endif %} | `org.runner_group_updated` | La configuration d’un groupe d’exécuteurs auto-hébergés a été modifiée. Pour plus d’informations, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) ».
| `org.runner_group_runner_removed` |  L’API REST est utilisée pour supprimer un exécuteur auto-hébergé d’un groupe. Pour plus d’informations, consultez « [Supprimer un exécuteur auto-hébergé d’un groupe pour une organisation](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) ».
| `org.runner_group_runners_added` | Un exécuteur auto-hébergé a été ajouté à un groupe. Pour plus d’informations, consultez [Déplacement d’un exécuteur auto-hébergé vers un groupe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `org.runner_group_runners_updated`|  La liste des membres d’un groupe d’exécuteurs a été mise à jour. Pour plus d’informations, consultez « [Définir des exécuteurs auto-hébergés dans un groupe pour une organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) ».
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | La visibilité d’un groupe d’exécuteurs auto-hébergés a été mise à jour à l’aide de l’API REST. Pour plus d’informations, consultez « [Mise à jour d’un groupe d’exécuteurs auto-hébergés pour une organisation](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization) ».
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | Le message personnalisé déclenché par une tentative de poussée vers un dépôt avec protection de poussée a été désactivé pour votre organisation. Pour plus d’informations, consultez « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization) ».
| `org.secret_scanning_push_protection_custom_message_enabled` | Le message personnalisé déclenché par une tentative de poussée vers un dépôt avec protection de poussée a été activé pour votre organisation. Pour plus d’informations, consultez « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization) ».
| `org.secret_scanning_push_protection_custom_message_updated` | Le message personnalisé déclenché par une tentative de poussée vers un dépôt avec protection de poussée a été mis à jour pour votre organisation. Pour plus d’informations, consultez « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization) ».
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | Un propriétaire ou administrateur d’organisation a désactivé la protection des poussées pour l’analyse des secrets. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
| `org.secret_scanning_push_protection_enable` | Un propriétaire ou administrateur d’organisation a activé la protection des poussées pour l’analyse des secrets.
{%- endif %} | `org.self_hosted_runner_online` | L’application d’exécuteur a été arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `org.self_hosted_runner_offline` | L’application d’exécuteur a été arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | L’application d’exécuteur a été mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) ».
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | Le paramètre d’exigence d’approbation pour les workflows issus de duplications publiques a été modifié pour une organisation. Pour plus d’informations, consultez « [Exiger une approbation pour les workflows issus de duplications publiques](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks) ».
{%- endif %} | `org.set_actions_retention_limit` | La période de conservation des artefacts et journaux de {% data variables.product.prodname_actions %} dans une organisation a été modifiée. Pour plus d’informations, consultez « [Configuration de la période de conservation des artefacts et journaux de {% data variables.product.prodname_actions %} dans votre organisation](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) ».
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | La stratégie pour les workflows sur les duplications de dépôt privé a été modifiée. Pour plus d’informations, consultez « [Autorisation des workflows pour les duplications de dépôt privé](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks) ».
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} | `org.sso_response` | Une réponse d’authentification unique (SSO) SAML a été générée quand un membre a tenté de s’authentifier auprès de votre organisation. Cet événement est disponible uniquement via le streaming de journaux d’audit et l’API REST.
{%- endif %} {%- ifversion ghec %} | `org.transfer` | Une organisation a été transférée entre des comptes d’entreprise. Pour plus d’informations, consultez « [Ajout d’organisations à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts) ».
{%- endif %} {%- ifversion not ghae %} | `org.transform`    | Un compte d’utilisateur a été converti en organisation. Pour plus d’informations, consultez « [Conversion d’un utilisateur en organisation](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization) ».
{%- endif %} | `org.unblock_user` | Un propriétaire d’organisation a débloqué un utilisateur d’une organisation. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Déblocage d’un utilisateur de votre organisation](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization) »{% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | Un secret {% data variables.product.prodname_actions %} a été mis à jour.
{%- endif %} | `org.update_integration_secret` | Un secret d’intégration {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou {% data variables.product.prodname_github_codespaces %}{% endif %} a été mis à jour pour une organisation.
| `org.update_default_repository_permission` | Un propriétaire d’organisation a modifié le niveau d’autorisation de dépôt par défaut pour les membres de l’organisation.
| `org.update_member` | Un propriétaire d’organisation a changé le rôle d’une personne de propriétaire en membre ou de membre en propriétaire.
| `org.update_member_repository_creation_permission` | Un propriétaire d’organisation a modifié l’autorisation de création de dépôt pour les membres de l’organisation.
| `org.update_member_repository_invitation_permission` | Un propriétaire d’organisation a modifié le paramètre de stratégie pour l’invitation de collaborateurs externes à des dépôts par les membres de l’organisation. Pour plus d’informations, consultez « [Définition des autorisations pour l’ajout de collaborateurs externes](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators) ».
| `org.update_new_repository_default_branch_setting` | Un propriétaire d’organisation a modifié le nom de la branche par défaut pour les nouveaux dépôts de l’organisation. Pour plus d’informations, consultez « [Gestion du nom de branche par défaut pour les dépôts de votre organisation](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization) ».
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | Les paramètres de fournisseur SAML d’une organisation ont été mis à jour.
| `org.update_terms_of_service` | Une organisation est passée des conditions d’utilisation du service Standard aux conditions d’utilisation Entreprise. {% ifversion ghec %}Pour plus d’informations, consultez « [Mise à niveau vers les conditions d’utilisation Entreprise](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service) ».{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Actions de la catégorie `org_credential_authorization`

| Action | Description
|--------|-------------
| `org_credential_authorization.deauthorized` | Un membre a supprimé l’autorisation d’informations d’identification pour une utilisation avec l’authentification unique SAML. {% ifversion ghec or ghae %}Pour plus d’informations, consultez « [Authentification à l’aide de l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on) ».{% endif %}
| `org_credential_authorization.grant` | Un membre a autorisé des informations d’identification pour une utilisation avec l’authentification unique SAML. {% ifversion ghec or ghae %}Pour plus d’informations, consultez « [Authentification à l’aide de l’authentification unique SAML](/authentication/authenticating-with-saml-single-sign-on) ».{% endif %}
| `org_credential_authorization.revoke` | Un propriétaire a révoqué des informations d’identification autorisées. {% ifversion ghec %}Pour plus d’informations, consultez « [Visualisation et gestion de vos sessions SAML actives](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) ».{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Actions de la catégorie `org_secret_scanning_custom_pattern`

| Action | Description
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | Un modèle personnalisé est publié pour l’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization) ».
| `org_secret_scanning_custom_pattern.delete` | Un modèle personnalisé est supprimé de l’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern) ».
| `org_secret_scanning_custom_pattern.update` |Les modifications apportées à un modèle personnalisé sont enregistrées pour l’analyse des secrets dans une organisation. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern) ».
{%- endif %}

## Actions de la catégorie `organization_default_label`

| Action | Description
|--------|-------------
| `organization_default_label.create` | Une étiquette par défaut pour les dépôts d’une organisation a été créée. Pour plus d’informations, consultez « [Création d’une étiquette par défaut](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label) ».
| `organization_default_label.update` | Une étiquette par défaut pour les dépôts d’une organisation a été modifiée. Pour plus d’informations, consultez « [Modification d’une étiquette par défaut](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label) ».
| `organization_default_label.destroy` | Une étiquette par défaut pour les dépôts d’une organisation a été supprimée. Pour plus d’informations, consultez « [Suppression d’une étiquette par défaut](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label) ».

{%- ifversion fpt or ghec or ghes %}
## Actions de la catégorie `organization_domain`

| Action | Description
|--------|-------------
| `organization_domain.approve` | Un domaine d’entreprise a été approuvé pour une organisation. Pour plus d’informations, consultez « [Approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization) ».
| `organization_domain.create` | Un domaine d’entreprise a été ajouté à une organisation. Pour plus d’informations, consultez « [Vérification d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization) ».
| `organization_domain.destroy` | Un domaine d’entreprise a été supprimé d’une organisation. Pour plus d’informations, consultez « [Suppression d’un domaine approuvé ou vérifié](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain) ».
| `organization_domain.verify` | Un domaine d’entreprise a été vérifié pour une organisation. Pour plus d’informations, consultez « [Vérification d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization) ».

## Actions de la catégorie `organization_projects_change`

| Action | Description
|--------|-------------
| `organization_projects_change.clear` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a effacé le paramètre de stratégie pour les tableaux de projet à l’échelle de l’organisation dans l’entreprise. Pour plus d’informations, consultez « [Application de stratégies pour les projets dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards) ».
| `organization_projects_change.disable` | Les projets d’organisation ont été désactivés pour toutes les organisations d’une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour les projets dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards) ».
| `organization_projects_change.enable` | Les projets d’organisation ont été activés pour toutes les organisations d’une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour les projets dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards) ».
{%- endif %}

## Actions de la catégorie `packages`

| Action | Description
|--------|-------------
| `packages.insecure_hash` | Maven a publié un code de hachage non sécurisé pour une version de package spécifique.
| `packages.package_deleted` | Un package a été supprimé d’une organisation.{% ifversion fpt or ghec or ghes %} Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».{% endif %}
| `packages.package_published` | Un package a été publié ou republié dans une organisation.
| `packages.package_restored` | Un package entier a été restauré.{% ifversion fpt or ghec or ghes %} Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».{% endif %}
| `packages.package_version_deleted` | Un package spécifique a été supprimé.{% ifversion fpt or ghec or ghes %} Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».{% endif %}
| `packages.package_version_published` | Une version de package spécifique a été publiée ou republiée dans un package.
| `packages.package_version_restored` | Un package spécifique a été supprimé.{% ifversion fpt or ghec or ghes %} Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».{% endif %}
| `packages.part_upload` | Une version de package spécifique a été partiellement chargée dans une organisation.
| `packages.upstream_package_fetched` | Une version de package spécifique a été récupérée à partir du proxy npm en amont.
| `packages.version_download` | Une version de package spécifique a été téléchargée.
| `packages.version_upload` | Une version de package spécifique a été chargée.

{%- ifversion fpt or ghec %}
## Actions de la catégorie `pages_protected_domain`

| Action | Description
|--------|-------------
| `pages_protected_domain.create` | Un domaine vérifié {% data variables.product.prodname_pages %} a été créé pour une organisation ou une entreprise. Pour plus d’informations, consultez « [Vérification de votre domaine personnalisé pour {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) ».
| `pages_protected_domain.delete` | Un domaine vérifié {% data variables.product.prodname_pages %} a été supprimé d’une organisation ou d’une entreprise. Pour plus d’informations, consultez « [Vérification de votre domaine personnalisé pour {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) ».
| `pages_protected_domain.verify`  | Un domaine {% data variables.product.prodname_pages %} a été vérifié pour une organisation ou une entreprise. Pour plus d’informations, consultez « [Vérification de votre domaine personnalisé pour {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) ».

## Actions de la catégorie `payment_method`

| Action | Description
|--------|-------------
| `payment_method.create` | Un nouveau mode de paiement a été ajouté, par exemple une nouvelle carte de crédit ou un compte PayPal.
| `payment_method.remove` | Un mode de paiement a été supprimé.
| `payment_method.update` | Un mode de paiement existant a été mis à jour.

## Actions de la catégorie `prebuild_configuration`

| Action | Description
|--------|-------------
| `prebuild_configuration.create` | Une configuration de prébuild {% data variables.product.prodname_github_codespaces %} pour un dépôt a été créée. Pour plus d’informations, consultez « [À propos des prébuilds de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds) ».
| `prebuild_configuration.destroy` | Une configuration de prébuild {% data variables.product.prodname_github_codespaces %} pour un dépôt a été supprimée. Pour plus d’informations, consultez « [À propos des prébuilds de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds) ».
| `prebuild_configuration.run_triggered` | Un utilisateur a lancé une exécution de configuration de prébuild {% data variables.product.prodname_github_codespaces %} pour une branche de dépôt. Pour plus d’informations, consultez « [À propos des prébuilds de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds) ».
| `prebuild_configuration.update` | Une configuration de prébuild {% data variables.product.prodname_github_codespaces %} pour un dépôt a été modifiée. Pour plus d’informations, consultez « [À propos des prébuilds de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds) ».
{%- endif %}

{%- ifversion ghes %}
## Actions de la catégorie `pre_receive_environment`

| Action | Description
| ------ | -----------
| `pre_receive_environment.create` | Un environnement de hook de pré-réception a été créé. Pour plus d’informations, consultez « [Création d’un environnement de hook de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment) ».
| `pre_receive_environment.destroy` | Un environnement de hook de pré-réception a été supprimé. Pour plus d’informations, consultez « [Création d’un environnement de hook de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment) ».
| `pre_receive_environment.download` | Un environnement de hook de pré-réception a été téléchargé. Pour plus d’informations, consultez « [Création d’un environnement de hook de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment) ».
| `pre_receive_environment.update` | Un environnement de hook de pré-réception a été mis à jour. Pour plus d’informations, consultez « [Création d’un environnement de hook de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment) ».

## Actions de la catégorie `pre_receive_hook`

| Action | Description
|--------|-------------
| `pre_receive_hook.create` | Un hook de pré-réception a été créé. Pour plus d’informations, consultez « [Création de hooks de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks) ».
| `pre_receive_hook.destroy` | Un hook de pré-réception a été supprimé. Pour plus d’informations, consultez « [Suppression de hooks de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks) ».
| `pre_receive_hook.enforcement` | Un paramètre d’application de hook de pré-réception permettant aux administrateurs de dépôt et d’organisation de remplacer la configuration de hook a été activé ou désactivé. Pour plus d’informations, consultez « [Gestion des hooks de pré-réception sur l’appliance GitHub Enterprise Server](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance) ».
| `pre_receive_hook.rejected_push` | Un hook de pré-réception a rejeté une poussée.
| `pre_receive_hook.update` | Un hook de pré-réception a été créé. Pour plus d’informations, consultez « [Modification de hooks de pré-réception](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks) ».
| `pre_receive_hook.warned_push` | Un hook de pré-réception a annoncé une poussée.
{%- endif %}

## Actions de la catégorie `private_repository_forking`

| Action | Description
|--------|-------------
| `private_repository_forking.clear` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a effacé le paramètre de stratégie pour autoriser les duplications de dépôts privés et internes pour un dépôt, une organisation ou une entreprise. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository) », « [Gestion de la stratégie de duplication pour votre organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) et pour les entreprises « [Application d’une stratégie pour la duplication de dépôts privés ou internes](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories) ».
| `private_repository_forking.disable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a désactivé le paramètre de stratégie pour autoriser les duplications de dépôts privés et internes pour un dépôt, une organisation ou une entreprise. La duplication de dépôts privés et internes n’est jamais autorisée. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository) », « [Gestion de la stratégie de duplication pour votre organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) et pour les entreprises « [Application d’une stratégie pour la duplication de dépôts privés ou internes](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories) ».
| `private_repository_forking.enable` | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a activé le paramètre de stratégie pour autoriser les duplications de dépôts privés et internes pour un dépôt, une organisation ou une entreprise. La duplication de dépôts privés et internes est toujours autorisée. Pour plus d’informations, consultez « [Gestion de la stratégie de duplication pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository) », « [Gestion de la stratégie de duplication pour votre organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) et pour les entreprises « [Application d’une stratégie pour la duplication de dépôts privés ou internes](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories) ».

{%- ifversion fpt or ghec %}
## Actions de la catégorie `profile_picture`

| Action | Description
|--------|-------------
| `profile_picture.update` | Une image de profil a été mise à jour.
{%- endif %}

## Actions de la catégorie `project`

| Action | Description
|--------|-------------
| `project.access` | La visibilité d’un tableau de projet a été modifiée. Pour plus d’informations, consultez « [Modification de la visibilité d’un tableau de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility) ».
| `project.close` | Un tableau de projet a été fermé. Pour plus d’informations, consultez « [Fermeture d’un tableau de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board) ».
| `project.create` | Un tableau de projet a été créé. Pour plus d’informations, consultez « [Création d’un tableau de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board) ».
| `project.delete` | Un tableau de projet a été supprimé. Pour plus d’informations, consultez « [Suppression d’un tableau de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board) ».
| `project.link` | Un dépôt a été lié à un tableau de projet. Pour plus d’informations, consultez « [Liaison d’un dépôt à un tableau de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board) ».
| `project.open` | Un tableau de projet a été rouvert. Pour plus d’informations, consultez « [Réouverture d’un tableau de projet fermé](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board) ».
| `project.rename` | Un tableau de projet a été renommé. Pour plus d’informations, consultez « [Modification d’un tableau de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board) ».
| `project.unlink` | Un dépôt a été dissocié d’un tableau de projet. Pour plus d’informations, consultez « [Liaison d’un dépôt à un tableau de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board) ».
| `project.update_org_permission` | L’autorisation de niveau de base du projet pour tous les membres d’une organisation a été modifiée ou supprimée. Pour plus d’informations, consultez « [Gestion de l’accès à un tableau de projet pour les membres d’une organisation](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members) ».
| `project.update_team_permission` | Le niveau d’autorisation de tableau de projet d’une équipe a été modifié ou une équipe a été ajoutée à un tableau de projet ou supprimée d’un tableau de projet. Pour plus d’informations, consultez « [Gestion de l’accès d’une équipe au tableau de projet d’une organisation](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board) ».
| `project.update_user_permission` | Un membre d’organisation ou un collaborateur externe a été ajouté à un tableau de projet ou supprimé d’un tableau de projet, ou son niveau d’autorisation a été modifié. Pour plus d’informations, consultez « [Gestion de l’accès d’un individu au tableau de projet d’une organisation](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board) ».

{%- ifversion projects-v2 %}
## Actions de la catégorie `project_field`

| Action | Description
|--------|-------------
| `project_field.create` | Un champ a été créé dans un tableau de projet. Pour plus d’informations, consultez « [Présentation des types de champs](/issues/planning-and-tracking-with-projects/understanding-field-types) ».
| `project_field.delete` | Un champ a été supprimé dans un tableau de projet. Pour plus d’informations, consultez « [Suppression de champs](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields) ».

## Actions de la catégorie `project_view`

| Action | Description
|--------|-------------
| `project_view.create` | Une vue a été créée dans un tableau de projet. Pour plus d’informations, consultez « [Gestion de vos vues](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views) ».
| `project_view.delete` | Une vue a été supprimée dans un tableau de projet. Pour plus d’informations, consultez « [Gestion de vos vues](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views) ».
{%- endif %}

## Actions de la catégorie `protected_branch`

| Action | Description
|--------|-------------
| `protected_branch.create ` | La protection de branche a été activée sur une branche.
| `protected_branch.destroy` | La protection de branche a été désactivée sur une branche.
| `protected_branch.dismiss_stale_reviews ` | L’application de l’abandon des demandes de tirage (pull request) périmées a été mise à jour sur une branche.
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` |L’application de la limitation des utilisateurs et/ou des équipes qui peuvent abandonner les revues a été mise à jour sur une branche.
{%- endif %} | `protected_branch.policy_override ` | Une exigence de protection de branche a été remplacée par un administrateur de dépôt.
| `protected_branch.rejected_ref_update ` | Une tentative de mise à jour de branche a été rejetée.
| `protected_branch.required_status_override` | L’exigence de protection de branche imposant les vérifications d’état a été remplacée par un administrateur de dépôt.
| `protected_branch.review_policy_and_required_status_override` | Les exigences de protection de branche imposant les revues et les vérifications d’état ont été remplacées par un administrateur de dépôt.
| `protected_branch.review_policy_override` | L’exigence de protection de branche imposant les revues a été remplacée par un administrateur de dépôt.
| `protected_branch.update_admin_enforced ` | La protection de branche a été appliquée pour les administrateurs de dépôt.
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | L’application de l’autorisation des utilisateurs avec accès en poussée à supprimer les branches correspondantes a été mise à jour sur une branche.
| `protected_branch.update_allow_force_pushes_enforcement_level` | L’application de l’autorisation des poussées forcées pour tous les utilisateurs avec accès en poussée a été mise à jour sur une branche.
| `protected_branch.update_linear_history_requirement_enforcement_level` | L’application de l’exigence de l’historique linéaire des commits a été mise à jour sur une branche.
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | L’application de l’exigence de revue des demandes de tirage a été mise à jour sur une branche. Peut être `0`(désactivée) `1`(non-administrateurs), `2`(tout le monde).
| `protected_branch.update_require_code_owner_review ` | L’application de l’exigence de revue par le propriétaire de code a été mise à jour sur une branche.
| `protected_branch.update_required_approving_review_count` | L’application de l’exigence d’un nombre d’approbations avant fusion a été mise à jour sur une branche.
| `protected_branch.update_required_status_checks_enforcement_level ` | L’application de l’exigence des vérifications d’état a été mise à jour sur une branche.
| `protected_branch.update_signature_requirement_enforcement_level ` | L’application de l’exigence de la signature de commit a été mise à jour sur une branche.
| `protected_branch.update_strict_required_status_checks_policy` | L’application de l’exigence des vérifications d’état a été mise à jour sur une branche.
| `protected_branch.update_name` | Un modèle de nom de branche a été mis à jour pour une branche.

## Actions de la catégorie `public_key`

| Action | Description
|--------|-------------
| `public_key.create` | Une clé SSH a été [ajoutée][add key] à un compte d’utilisateur ou une [clé de déploiement][] a été ajoutée à un dépôt.
| `public_key.delete` | Une clé SSH a été supprimée d’un compte d’utilisateur ou une [clé de déploiement][] a été supprimée d’un dépôt.
| `public_key.update` | La clé SSH d’un compte d’utilisateur ou la [clé de déploiement][] d’un dépôt a été mise à jour.
| `public_key.unverification_failure` | L’annulation de la vérification de la clé SSH d’un compte d’utilisateur ou de la [clé de déploiement][] d’un dépôt a échoué.
| `public_key.unverify` | La vérification de la clé SSH d’un compte d’utilisateur ou de la [clé de déploiement][] d’un dépôt a été annulée.
| `public_key.verification_failure` | La vérification de la clé SSH d’un compte d’utilisateur ou de la [clé de déploiement][] d’un dépôt a échoué.
| `public_key.verify` | La clé SSH d’un compte d’utilisateur ou la [clé de déploiement][] d’un dépôt a été vérifiée.

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [clé de déploiement]: /developers/overview/managing-deploy-keys#deploy-keys

## Actions de la catégorie `pull_request`

| Action | Description
|--------|-------------
| `pull_request.close` | Une demande de tirage a été fermée sans être fusionnée. Pour plus d’informations, consultez « [Fermeture d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) ».
| `pull_request.converted_to_draft` | Une demande de tirage a été convertie en brouillon. Pour plus d’informations, consultez « [Modification de l’étape d’une demande de tirage](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft) ».
| `pull_request.create` | Une demande de tirage a été créée. Pour plus d’informations, consultez « [Création d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) ».
| `pull_request.create_review_request` | Une revue de demande de tirage a été demandée. Pour plus d’informations, consultez « [À propos des revues de demandes de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) ».
| `pull_request.in_progress` | Une demande de tirage a été marquée comme en cours.
| `pull_request.indirect_merge` | Une demande de tirage a été considérée comme fusionnée, car ses commits ont été fusionnés dans la branche cible.
| `pull_request.merge` | Une demande de tirage a été fusionnée. Pour plus d’informations, consultez « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) ».
| `pull_request.ready_for_review` | Une demande de tirage a été marquée comme prête pour la revue. Pour plus d’informations, consultez « [Modification de l’étape d’une demande de tirage](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review) ».
| `pull_request.remove_review_request` | Une demande de revue a été supprimée d’une demande de tirage. Pour plus d’informations, consultez « [À propos des revues de demandes de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) ».
| `pull_request.reopen` | Une demande de tirage a été rouverte après avoir été fermée.
| `pull_request_review.delete` | Une revue de demande de tirage a été supprimée.
| `pull_request_review.dismiss` | Une revue de demande de tirage a été abandonnée. Pour plus d’informations, consultez « [Abandonner une revue de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review) ».
| `pull_request_review.submit` | Une revue a été soumise pour une demande de tirage. Pour plus d’informations, consultez « [À propos des revues de demandes de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) ».

## Actions de la catégorie `pull_request_review`

| Action | Description
|--------|-------------
| `pull_request_review.delete` | Une revue de demande de tirage a été supprimée.
| `pull_request_review.dismiss` | Une revue de demande de tirage a été abandonnée. Pour plus d’informations, consultez « [Abandonner une revue de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review) ».
| `pull_request_review.submit` | Une revue de demande de tirage a été soumise. Pour plus d’informations, consultez « [Soumettre votre revue](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review) ».

## Actions de la catégorie `pull_request_review_comment`

| Action | Description
|--------|-------------
| `pull_request_review_comment.create` | Un commentaire de revue a été ajouté à une demande de tirage. Pour plus d’informations, consultez « [À propos des revues de demandes de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) ».
| `pull_request_review_comment.delete` | Un commentaire de revue d’une demande de tirage a été supprimé.
| `pull_request_review_comment.update` | Un commentaire de revue d’une demande de tirage a été modifié.

## Actions de la catégorie `repo`

| Action | Description
|--------|-------------
| `repo.access`         | La visibilité d’un dépôt est devenue privée{%- ifversion ghes %}, publique,{% endif %} ou interne.
| `repo.actions_enabled` | {% data variables.product.prodname_actions %} a été activé pour un dépôt.
| `repo.add_member`     | Un collaborateur a été ajouté à un dépôt.
| `repo.add_topic`     | Une rubrique a été ajoutée à un dépôt.
| `repo.advanced_security_disabled` | {% data variables.product.prodname_GH_advanced_security %} a été désactivé pour un dépôt.
| `repo.advanced_security_enabled` | {% data variables.product.prodname_GH_advanced_security %} a été activé pour un dépôt.
| `repo.advanced_security_policy_selected_member_disabled` | Un administrateur de dépôt a empêché l’activation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour un dépôt.
| `repo.advanced_security_policy_selected_member_enabled` | Un administrateur de dépôt a autorisé l’activation des fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour un dépôt.
| `repo.archived`       | Un dépôt a été archivé. Pour plus d’informations, consultez « [Archivage d’un dépôt {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository) ».
| `repo.code_scanning_analysis_deleted` | L’analyse du code pour un dépôt a été supprimée. Pour plus d’informations, consultez « [Supprimer une analyse du code d’un dépôt](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository) ».
| `repo.change_merge_setting` | Les options de fusion de demande de tirage ont été modifiées pour un dépôt.
| `repo.clear_actions_settings` | Un administrateur de dépôt a effacé les paramètres de stratégie {% data variables.product.prodname_actions %} pour un dépôt.
| `repo.config`         | Un administrateur de dépôt a bloqué les poussées forcées. Pour plus d’informations, consultez [Blocage des poussées forcées sur un dépôt](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/).
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | La limitation des interactions aux collaborateurs uniquement a été désactivée. Pour plus d’informations, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».
| `repo.config.disable_contributors_only` | La limitation des interactions aux contributeurs antérieurs uniquement a été désactivée dans un dépôt. Pour plus d’informations, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».
| `repo.config.disable_sockpuppet_disallowed` | La limitation des interactions aux utilisateurs existants uniquement a été désactivée dans un dépôt. Pour plus d’informations, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».
| `repo.config.enable_collaborators_only` | La limitation des interactions aux collaborateurs uniquement a été activée dans un dépôt. Les utilisateurs qui ne sont pas collaborateurs ou membres d’organisation n’ont pas pu interagir avec un dépôt pendant une période définie. Pour plus d’informations, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».
| `repo.config.enable_contributors_only` | La limitation des interactions aux contributeurs antérieurs uniquement a été activée dans un dépôt. Les utilisateurs qui ne sont pas contributeurs antérieurs, collaborateurs ou membres d’organisation n’ont pas pu interagir avec un dépôt pendant une période définie. Pour plus d’informations, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».
| `repo.config.enable_sockpuppet_disallowed` | La limitation des interactions aux utilisateurs existants a été activée dans un dépôt. Les nouveaux utilisateurs ne peuvent pas interagir avec un dépôt pendant une période définie. Les utilisateurs existants du dépôt, les contributeurs, les collaborateurs ou les membres d’organisation peuvent interagir avec un dépôt. Pour plus d’informations, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access`| L’accès en lecture Git anonyme a été désactivé pour un dépôt. Pour plus d’informations, consultez « [Activation de l’accès en lecture Git anonyme pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository) ».
| `repo.config.enable_anonymous_git_access` | L’accès en lecture Git anonyme a été activé pour un dépôt. Pour plus d’informations, consultez « [Activation de l’accès en lecture Git anonyme pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository) ».
| `repo.config.lock_anonymous_git_access` | Le paramètre d’accès en lecture Git anonyme d’un dépôt a été verrouillé, empêchant les administrateurs du dépôt de modifier (activer ou désactiver) ce paramètre. Pour plus d’informations, consultez « [Empêcher les utilisateurs de modifier l’accès en lecture Git anonyme](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) ».
| `repo.config.unlock_anonymous_git_access` | Le paramètre d’accès en lecture Git anonyme d’un dépôt a été déverrouillé, permettant aux administrateurs du dépôt de modifier (activer ou désactiver) ce paramètre. Pour plus d’informations, consultez « [Empêcher les utilisateurs de modifier l’accès en lecture Git anonyme](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) ».
{%- endif %} | `repo.create` | Un dépôt a été créé.
| `repo.create_actions_secret` | Un secret {% data variables.product.prodname_actions %} a été créé pour un dépôt. Pour plus d’informations, consultez « [Création de secrets chiffrés pour un dépôt](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) ».
| `repo.create_integration_secret` | Un secret d’intégration {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou {% data variables.product.prodname_github_codespaces %}{% endif %} a été créé pour un dépôt.
| `repo.destroy` | Un dépôt a été supprimé.
{%- ifversion ghes %} | `repo.disk_archive`  | Un dépôt a été archivé sur disque. Pour plus d’informations, consultez « [Archivage des dépôts](/repositories/archiving-a-github-repository/archiving-repositories) ».
{%- endif %} | `repo.download_zip` | Une archive de code source d’un dépôt a été téléchargée comme fichier ZIP.
| `repo.pages_cname` | Un domaine personnalisé {% data variables.product.prodname_pages %} a été modifié dans un dépôt.
| `repo.pages_create` | Un site {% data variables.product.prodname_pages %} a été créé.
| `repo.pages_destroy` | Un site {% data variables.product.prodname_pages %} a été supprimé.
| `repo.pages_https_redirect_disabled` | Les redirections HTTPS ont été désactivées pour un site {% data variables.product.prodname_pages %}.
| `repo.pages_https_redirect_enabled` | Les redirections HTTPS ont été activées pour un site {% data variables.product.prodname_pages %}.
| `repo.pages_source` | Une source {% data variables.product.prodname_pages %} a été modifiée.
| `repo.pages_private` | La visibilité d’un site {% data variables.product.prodname_pages %} a été modifiée et définie sur privée.
| `repo.pages_public` | La visibilité d’un site {% data variables.product.prodname_pages %} a été modifiée et définie sur publique.
| `repo.register_self_hosted_runner` | Un nouvel exécuteur auto-hébergé a été enregistré. Pour plus d’informations, consultez « [Ajout d’un exécuteur auto-hébergé à un dépôt](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository) ».
| `repo.remove_self_hosted_runner` | Un exécuteur auto-hébergé a été supprimé. Pour plus d’informations, consultez « [Suppression d’un exécuteur d’un dépôt](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository) ».
| `repo.remove_actions_secret` | Un secret {% data variables.product.prodname_actions %} a été supprimé pour un dépôt.
| `repo.remove_integration_secret` | Un secret d’intégration {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} ou {% data variables.product.prodname_github_codespaces %}{% endif %} a été supprimé d’un dépôt.
| `repo.remove_member` | Un collaborateur a été supprimé d’un dépôt.
| `repo.remove_topic` | Une rubrique a été supprimée d’un dépôt.
| `repo.rename` | Un dépôt a été renommé.
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | Le paramètre d’exigence d’approbation pour les workflows issus de duplications publiques a été modifié pour un dépôt. Pour plus d’informations, consultez « [Configuration de l’exigence d’approbation pour les workflows issus de duplications publiques](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks) ».
{%- endif %} | `repo.set_actions_retention_limit` | La période de conservation des artefacts et journaux de {% data variables.product.prodname_actions %} dans un dépôt a été modifiée. Pour plus d’informations, consultez « [Configuration de la période de conservation des artefacts et journaux de {% data variables.product.prodname_actions %} dans votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) ».
| `repo.self_hosted_runner_online` | L’application d’exécuteur a été démarrée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `repo.self_hosted_runner_offline` | L’application d’exécuteur a été arrêtée. Visible uniquement à l’aide de l’API REST ; non visible dans l’interface utilisateur ni l’exportation JSON/CSV. Pour plus d’informations, consultez « [Vérification de l’état d’un exécuteur auto-hébergé](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) ».
| `repo.self_hosted_runner_updated` | L’application d’exécuteur a été mise à jour. Visible à l’aide de l’API REST et de l’interface utilisateur ; non visible dans l’exportation JSON/CSV. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) ».
| `repo.staff_unlock` | Un administrateur d’entreprise ou membre du personnel GitHub (avec l’autorisation d’un administrateur de dépôt) a temporairement déverrouillé le dépôt.
| `repo.transfer` | Un utilisateur a accepté une demande de réception d’un dépôt transféré.
| `repo.transfer_outgoing` | Un dépôt a été transféré vers un autre réseau de dépôts.
| `repo.transfer_start` | Un utilisateur a envoyé une demande de transfert d’un dépôt vers un autre utilisateur ou une autre organisation.
| `repo.unarchived` | Un dépôt a été désarchivé. Pour plus d’informations, consultez « [Archivage d’un dépôt {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository) ».
| `repo.update_actions_settings` | Un administrateur de dépôt a modifié les paramètres de stratégie {% data variables.product.prodname_actions %} pour un dépôt.
| `repo.update_actions_secret` | Un secret {% data variables.product.prodname_actions %} a été mis à jour.
| `repo.update_actions_access_settings` | Le paramètre permettant de contrôler l’utilisation d’un dépôt par les workflows {% data variables.product.prodname_actions %} dans d’autres dépôts a été modifié.
| `repo.update_default_branch` | La branche par défaut d’un dépôt a été modifiée.
| `repo.update_integration_secret` | Un secret d’intégration {% data variables.product.prodname_dependabot %} ou {% data variables.product.prodname_github_codespaces %} a été mis à jour pour un dépôt.
| `repo.update_member` | L’autorisation d’un utilisateur sur un dépôt a été modifiée.

{%- ifversion fpt or ghec %}
## Actions de la catégorie `repository_advisory`

| Action | Description
|--------|-------------
| `repository_advisory.close` | Quelqu’un a fermé un avis de sécurité. Pour plus d’informations, consultez « [À propos des avis de sécurité {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories) ».
| `repository_advisory.cve_request` | Quelqu’un a demandé un numéro CVE (Common Vulnerabilities and Exposures) auprès de {% data variables.product.prodname_dotcom %} pour un avis de sécurité à l’état de brouillon.
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} a rendu un avis de sécurité public dans la {% data variables.product.prodname_advisory_database %}.
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %} a retiré un avis de sécurité publié par erreur.
| `repository_advisory.open` | Quelqu’un a ouvert un avis de sécurité à l’état de brouillon.
| `repository_advisory.publish` | Quelqu’un publie un avis de sécurité.
| `repository_advisory.reopen` | Quelqu’un a rouvert un avis de sécurité à l’état de brouillon.
| `repository_advisory.update` | Quelqu’un a modifié un avis de sécurité publié ou à l’état de brouillon.

## Actions de la catégorie `repository_content_analysis`

| Action | Description
|--------|-------------
| `repository_content_analysis.enable` | Un propriétaire d’organisation ou un administrateur de dépôt a [activé les paramètres d’utilisation des données pour un dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `repository_content_analysis.disable` | Un propriétaire d’organisation ou un administrateur de dépôt a [désactivé les paramètres d’utilisation des données pour un dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

## Actions de la catégorie `repository_dependency_graph`

| Action | Description
|--------|-------------
| `repository_dependency_graph.disable` | Un administrateur ou propriétaire de dépôt a désactivé le graphe des dépendances pour un dépôt privé. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».
| `repository_dependency_graph.enable` | Un administrateur ou propriétaire de dépôt a activé le graphe des dépendances pour un dépôt privé.
{%- endif %}

## Actions de la catégorie `repository_image`

| Action | Description
|--------|-------------
| `repository_image.create` | Une image destinée à représenter un dépôt a été chargée.
| `repository_image.destroy` | Une image destinée à représenter un dépôt a été supprimée.

## Actions de la catégorie `repository_invitation`

| Action | Description
|--------|-------------
| `repository_invitation.accept` | Une invitation à rejoindre un référentiel a été acceptée.
| `repository_invitation.create` | Une invitation à rejoindre un référentiel a été envoyée.
| `repository_invitation.reject` | Une invitation à rejoindre un référentiel a été annulée.

## Actions de la catégorie `repository_projects_change`

| Action | Description
|--------|-------------
| `repository_projects_change.clear` | La stratégie de projets de dépôt a été supprimée pour une organisation ou pour toutes les organisations de l’entreprise. Les administrateurs d’organisation peuvent désormais contrôler leurs paramètres de projets de dépôt. Pour plus d’informations, consultez « [Application de stratégies pour les projets dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise) ».
| `repository_projects_change.disable` | Les projets de dépôt ont été désactivés pour un dépôt, pour tous les dépôts d’une organisation ou pour toutes les organisations d’une entreprise.
| `repository_projects_change.enable` | Les projets de dépôt ont été activés pour un dépôt, pour tous les dépôts d’une organisation ou pour toutes les organisations d’une entreprise.

{%- ifversion ghec or ghes or ghae %}
## Actions de la catégorie `repository_secret_scanning`

| Action | Description
|--------|-------------
| `repository_secret_scanning.disable` | Un administrateur ou propriétaire de dépôt a désactivé l’analyse des secrets pour un dépôt{% ifversion ghec %} privé ou interne{% endif %}. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| `repository_secret_scanning.enable` | Un administrateur ou propriétaire de dépôt a activé l’analyse des secrets pour un dépôt{% ifversion ghec %} privé ou interne{% endif %}.
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## Actions de la catégorie `repository_secret_scanning_custom_pattern`

| Action | Description
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | Un modèle personnalisé est publié pour l’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository) ».
| `repository_secret_scanning_custom_pattern.delete` | Un modèle personnalisé est supprimé de l’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern) ».
| `repository_secret_scanning_custom_pattern.update` | Les modifications apportées à un modèle personnalisé sont enregistrées pour l’analyse des secrets dans un dépôt. Pour plus d’informations, consultez « [Définition de modèles personnalisés pour l’analyse des secrets](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern) ».

## Actions de la catégorie `repository_secret_scanning_push_protection`

| Action | Description
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | Un administrateur ou propriétaire de dépôt a désactivé l’analyse des secrets pour un dépôt. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
| `repository_secret_scanning_push_protection.enable` | Un administrateur ou propriétaire de dépôt a activé l’analyse des secrets pour un dépôt. Pour plus d’informations, consultez « [Protection des poussées avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
{%- endif %}
## Actions de la catégorie `repository_visibility_change`

| Action | Description
|--------|-------------
| `repository_visibility_change.clear` | Le paramètre de modification de la visibilité des dépôts a été effacé pour une organisation ou une entreprise. Pour plus d’informations, consultez « [Restriction des modifications de la visibilité des dépôts dans votre organisation](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) » et « [Application d’une stratégie pour la modification de la visibilité d’un dépôt](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility) pour une entreprise ».
| `repository_visibility_change.disable` | La possibilité pour les membres d’entreprise de mettre à jour la visibilité d’un dépôt a été désactivée. Les membres ne peuvent pas modifier la visibilité des dépôts dans une organisation ou dans toutes les organisations d’une entreprise.
| `repository_visibility_change.enable` | La possibilité pour les membres d’entreprise de mettre à jour la visibilité d’un dépôt a été activée. Les membres peuvent modifier la visibilité des dépôts dans une organisation ou dans toutes les organisations d’une entreprise.

## Actions de la catégorie `repository_vulnerability_alert`

| Action | Description
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %} a créé une alerte {% data variables.product.prodname_dependabot %} pour un dépôt qui utilise une dépendance non sécurisée. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) ».
| `repository_vulnerability_alert.dismiss` | Un propriétaire d'organisation ou un administrateur de référentiel a rejeté une alerte {% data variables.product.prodname_dependabot %} concernant une dépendance vulnérable{% ifversion GH-advisory-db-supports-malware %} ou un logiciel malveillant{% endif %}.
| `repository_vulnerability_alert.resolve` | Une personne ayant un accès en écriture à un référentiel a poussé des changements pour mettre à jour et résoudre une alerte {% data variables.product.prodname_dependabot %} dans une dépendance de projet.

{%- ifversion fpt or ghec %}
## Actions de la catégorie `repository_vulnerability_alerts`

| Action | Description
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | Un propriétaire d’organisation ou un administrateur de dépôt a mis à jour la liste des personnes ou équipes autorisées à recevoir des {% data variables.product.prodname_dependabot_alerts %} pour le dépôt. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) ».
| `repository_vulnerability_alerts.disable` | Un propriétaire ou administrateur de dépôt a désactivé les {% data variables.product.prodname_dependabot_alerts %}.
| `repository_vulnerability_alerts.enable` | Un propriétaire ou administrateur de dépôt a activé les {% data variables.product.prodname_dependabot_alerts %}.
{%- endif %}

## Actions de la catégorie `required_status_check`

| Action | Description
|--------|-------------
| `required_status_check.create` | La vérification d’état a été marquée comme exigée pour une branche protégée. Pour plus d’informations, consultez « [Exiger les vérifications d’état avant une fusion](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging) ».
| `required_status_check.destroy` | Le marquage de la vérification d’état comme exigée pour une branche protégée a été supprimé. Pour plus d’informations, consultez « [Exiger les vérifications d’état avant une fusion](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging) ».

{%- ifversion ghec or ghes %}
## Actions de la catégorie `restrict_notification_delivery`

| Action | Description
|--------|-------------
| `restrict_notification_delivery.enable` | Les limitations de notification par e-mail pour une organisation ou une entreprise ont été activées. Pour plus d’informations, consultez « [Limitation des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization) » et « [Limitation des notifications par e-mail pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise) ».
| `restrict_notification_delivery.disable` | Les limitations de notification par e-mail pour une organisation ou une entreprise ont été désactivées. Pour plus d’informations, consultez « [Limitation des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization) » et « [Limitation des notifications par e-mail pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise) ».
{%- endif %}

{%- ifversion custom-repository-roles %}
## Actions de la catégorie `role`

| Action | Description
|--------|-------------
|`create` | Un propriétaire d’organisation a créé un rôle de dépôt personnalisé. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
|`destroy` | Un propriétaire d’organisation a supprimé un rôle de dépôt personnalisé. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
|`update` | Un propriétaire d’organisation a modifié un rôle de dépôt personnalisé existant. Pour plus d’informations, consultez « [Gestion des rôles de dépôt personnalisés pour une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization) ».
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Actions de la catégorie `secret_scanning`

| Action | Description
|--------|-------------
| `secret_scanning.disable` | Un propriétaire d’organisation a désactivé l’analyse des secrets pour tous les dépôts{% ifversion ghec %} privés ou internes{% endif %} existants. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| `secret_scanning.enable` | Un propriétaire d’organisation a activé l’analyse des secrets pour tous les dépôts{% ifversion ghec %} privés ou internes{% endif %} existants.

{% ifversion secret-scanning-alert-audit-log %}
## Actions de la catégorie `secret_scanning_alert`

| Action | Description
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %} a détecté un secret et créé une alerte {% data variables.product.prodname_secret_scanning %}. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning) ».
| `secret_scanning_alert.reopen` | Un utilisateur a rouvert une alerte {% data variables.product.prodname_secret_scanning %}.
| `secret_scanning_alert.resolve` | Un utilisateur a résolu une alerte {% data variables.product.prodname_secret_scanning %}.
{% endif %}

## Actions de la catégorie `secret_scanning_new_repos`

| Action | Description
|--------|-------------
| `secret_scanning_new_repos.disable` | Un propriétaire d’organisation a désactivé l’analyse des secrets pour tous les nouveaux dépôts{% ifversion ghec %} privés ou internes{% endif %}. Pour plus d’informations, consultez « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) ».
| `secret_scanning_new_repos.enable` | Un propriétaire d’organisation a activé l’analyse des secrets pour tous les nouveaux dépôts{% ifversion ghec %} privés ou internes{% endif %}.
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## Actions de la catégorie `secret_scanning_push_protection`

| Action | Description
|--------|-------------
| `bypass` | Déclenché lorsqu’un utilisateur contourne la protection d’envoi sur un secret détecté par l’analyse des secrets. Pour plus d’informations, consultez « [Contournement de la protection push pour un secret](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret) ». {% endif %}

{%- ifversion ghec or ghes or ghae %}
## Actions de la catégorie `security_key`

| Action | Description
|--------|-------------
| `security_key.register` | Une clé de sécurité a été enregistrée pour un compte.
| `security_key.remove` | Une clé de sécurité a été supprimée d’un compte.
{%- endif %}

{%- ifversion fpt or ghec %}
## Actions de la catégorie `sponsors`

| Action | Description
|--------|-------------
| `sponsors.agreement_sign` | Un contrat {% data variables.product.prodname_sponsors %} a été signé au nom d’une organisation.
| `sponsors.custom_amount_settings_change` | Des montants personnalisés pour {% data variables.product.prodname_sponsors %} ont été activés ou désactivés, ou le montant personnalisé suggéré a été modifié. Pour plus d’informations, consultez « [Gestion de vos niveaux de parrainage](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers) ».
| `sponsors.fiscal_host_change` | L’hôte fiscal pour un référencement {% data variables.product.prodname_sponsors %} a été mis à jour.
| `sponsors.withdraw_agreement_signature` | Une signature a été retirée d’un contrat {% data variables.product.prodname_sponsors %} s’appliquant à une organisation.
| `sponsors.repo_funding_links_file_action` | Le fichier FUNDING dans un dépôt a été modifié. Pour plus d’informations, consultez « [Affichage d’un bouton de sponsor dans votre dépôt](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository) ».
| `sponsors.sponsor_sponsorship_cancel` | Un parrainage a été annulé. Pour plus d’informations, consultez « [Déclassement d’un parrainage](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship) ».
| `sponsors.sponsor_sponsorship_create` | Un parrainage a été créé par le biais du parrainage d’un compte. Pour plus d’informations, consultez « [Parrainage d’un contributeur open source](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor) ».
| `sponsors.sponsor_sponsorship_payment_complete` | Quand vous avez parrainé un compte et que le paiement a été traité, le paiement du parrainage a été marqué comme effectué. Pour plus d’informations, consultez « [Parrainage d’un contributeur open source](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor) ».
| `sponsors.sponsor_sponsorship_preference_change` | L’option de réception d’informations par e-mail à partir d’un compte parrainé a été modifiée. Pour plus d’informations, consultez « [Gestion de votre parrainage](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship) ».
| `sponsors.sponsor_sponsorship_tier_change` | Un parrainage a été mis à niveau ou déclassé. Pour plus d’informations, consultez « [Mise à niveau d’un parrainage](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship) » et « [Déclassement d’un parrainage](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship) ».
| `sponsors.sponsored_developer_approve` | Un compte {% data variables.product.prodname_sponsors %} a été approuvé. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) ».
| `sponsors.sponsored_developer_create` | Un compte {% data variables.product.prodname_sponsors %} a été créé. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) ».
| `sponsors.sponsored_developer_disable` | Un compte {% data variables.product.prodname_sponsors %} a été désactivé.
| `sponsors.sponsored_developer_profile_update` | Vous modifiez un profil d’organisation parrainée. Pour plus d’informations, consultez « [Modification de vos informations de profil pour {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors) ».
| `sponsors.sponsored_developer_redraft` | Un compte {% data variables.product.prodname_sponsors %} est repassé de l’état approuvé à l’état de brouillon.
| `sponsors.sponsored_developer_request_approval` | Une application pour {% data variables.product.prodname_sponsors %} a été soumise pour approbation. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) ».
| `sponsors.sponsored_developer_tier_description_update` | La description d’un niveau de parrainage a été modifiée. Pour plus d’informations, consultez « [Gestion de vos niveaux de parrainage](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers) ».
| `sponsors.update_tier_welcome_message` | Le message d’accueil pour un niveau {% data variables.product.prodname_sponsors %} pour une organisation a été mis à jour.
| `sponsors.update_tier_repository` | Un niveau {% data variables.product.prodname_sponsors %} a modifié l’accès pour un dépôt.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Actions de la catégorie `ssh_certificate_authority`

| Action | Description
|--------|-------------
| `ssh_certificate_authority.create` | Une autorité de certification SSH pour une organisation ou une entreprise a été créée. Pour plus d’informations, consultez « [Gestion des autorités de certification SSH de votre organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) » et « [Gestion des autorités de certification SSH pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise) ».
| `ssh_certificate_authority.destroy` | Une autorité de certification SSH pour une organisation ou une entreprise a été supprimée. Pour plus d’informations, consultez « [Gestion des autorités de certification SSH de votre organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) » et « [Gestion des autorités de certification SSH pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise) ».

## Actions de la catégorie `ssh_certificate_requirement`

| Action | Description
|--------|-------------
| `ssh_certificate_requirement.enable` | L’obligation pour les membres d’utiliser des certificats SSH pour accéder aux ressources d’une organisation a été activée. Pour plus d’informations, consultez « [Gestion des autorités de certification SSH de votre organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) » et « [Gestion des autorités de certification SSH pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise) ».
| `ssh_certificate_requirement.disable` | L’obligation pour les membres d’utiliser des certificats SSH pour accéder aux ressources d’une organisation a été désactivée. Pour plus d’informations, consultez « [Gestion des autorités de certification SSH de votre organisation](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) » et « [Gestion des autorités de certification SSH pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise) ».
{%- endif %}

{% ifversion sso-redirect %}
## Actions de la catégorie `sso_redirect`

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| Action | Description |
|--------|------------ |
`sso_redirect.enable` | Les redirections automatiques pour les utilisateurs vers l’authentification unique (SSO) ont été activées. |
`sso_redirect.disable` | Les redirections automatiques pour les utilisateurs vers l’authentification unique (SSO) ont été désactivées. |

Pour plus d’informations, consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users) ».
{% endif %}

## Actions de la catégorie `staff`

| Action | Description
|--------|-------------
| `staff.disable_repo`          | Un administrateur d’organisation{% ifversion ghes %}, de dépôt ou de site{% else %} ou de dépôt{% endif %} a désactivé l’accès à un dépôt et à toutes ses duplications.
| `staff.enable_repo`           | Un administrateur d’organisation{% ifversion ghes %}, de dépôt ou de site{% else %} ou de dépôt{% endif %} a réactivé l’accès à un dépôt et à toutes ses duplications.
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} a mis fin à une session d’emprunt d’identité sur {% data variables.product.product_name %}.
| `staff.fake_login`            | Un propriétaire d’entreprise{% ifversion ghes %} ou un administrateur de site{% endif %} s’est connecté à {% data variables.product.product_name %} sous le nom d’un autre utilisateur.
{%- endif %} | `staff.repo_lock`             | Un administrateur d’organisation{% ifversion ghes %}, de dépôt ou de site{% else %} ou de dépôt{% endif %} a verrouillé (obtenu temporairement un accès complet au) dépôt privé d’un utilisateur.
| `staff.repo_unlock`           | Un administrateur d’organisation{% ifversion ghes %}, de dépôt ou de site{% else %} ou de dépôt{% endif %} a déverrouillé (mis fin à son accès temporaire au) dépôt privé d’un utilisateur.
{%- ifversion ghes %} | `staff.search_audit_log` | Un administrateur de site a effectué une recherche dans le journal d’audit de l’administrateur de site.
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}Un administrateur de site ou {% endif %}un membre du personnel GitHub a défini l’heure d’expiration du code de vérification pour un domaine d’organisation ou d’entreprise. {% ifversion ghec or ghes %}Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) » et « [Vérification ou approbation d’un domaine pour votre entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».{% endif %} {%- ifversion ghes %} | `staff.unlock`                | Un administrateur de site a déverrouillé (obtenu temporairement un accès complet à) tous les référentiels privés d'un utilisateur.
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %}Un administrateur de site ou un membre du personnel {% endif %}GitHub n'a pas vérifié un domaine d’organisation ou d'entreprise. {% ifversion ghec or ghes %}Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) » et « [Vérification ou approbation d’un domaine pour votre entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».{% endif %} | `staff.verify_domain` | {% ifversion ghes %}Un administrateur de site ou {% endif %}un membre du personnel GitHub a vérifié un domaine d’organisation ou d’entreprise. {% ifversion ghec or ghes %}Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) » et « [Vérification ou approbation d’un domaine pour votre entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | Un administrateur de site a consulté le journal d'audit de l'administrateur du site.
{%- endif %}

## Actions de la catégorie `team`

| Action | Description
|--------|-------------
| `team.add_member` | Un membre d’une organisation a été ajouté à une équipe. Pour plus d’informations, consultez « [Ajout de membres d’une organisation à une équipe](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team) ».
| `team.add_repository` | L’accès à un dépôt et les autorisations sur ce dépôt ont été accordés à une équipe.
| `team.change_parent_team` | Une équipe enfant a été créée ou le parent d’une équipe enfant a été modifié. Pour plus d’informations, consultez « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy) ».
| `team.change_privacy` | Le niveau de confidentialité d’une équipe a été modifié. Pour plus d’informations, consultez « [Modification de la visibilité d’une équipe](/organizations/organizing-members-into-teams/changing-team-visibility) ».
| `team.create` | Un dépôt ou compte d’utilisateur a été ajouté à une équipe.
| `team.delete` | Un dépôt ou compte d’utilisateur a été supprimé d’une équipe.
| `team.destroy` | Une équipe a été supprimée.
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | Un utilisateur responsable d’équipe a été rétrogradé en membre d’équipe.
| `team.promote_maintainer` | Un utilisateur membre d’équipe a été promu responsable d’équipe. Pour plus d’informations, consultez « [Promotion d’un membre d’organisation comme responsable d’équipe](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer) ».
{%- endif %} | `team.remove_member` | Un membre d’une organisation a été supprimé d’une équipe. Pour plus d’informations, consultez « [Suppression de membres d’organisation d’une équipe](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team) ».
| `team.remove_repository` | Le contrôle d’un dépôt par une équipe a été supprimé.
| `team.rename` | Le nom d’une équipe a été modifié.
| `team.update_permission` | L’accès d’une équipe a été modifié.
| `team.update_repository_permission` | L’autorisation d’une équipe sur un dépôt a été modifiée.

## Actions de la catégorie `team_discussions`

| Action | Description
|--------|-------------
| `team_discussions.clear` | Un propriétaire d’organisation a effacé le paramètre d’autorisation des discussions d’équipe pour une organisation ou une entreprise.
| `team_discussions.disable` | Un propriétaire d’organisation a désactivé les discussions d’équipe pour une organisation. Pour plus d’informations, consultez « [Désactivation des discussions d’équipe pour votre organisation](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization) ».
| `team_discussions.enable` | Un propriétaire d’organisation a activé les discussions d’équipe pour une organisation.

{%- ifversion ghec %}
## Actions de la catégorie `team_sync_tenant`

| Action | Description
|--------|-------------
| `team_sync_tenant.disabled` | La synchronisation d’équipe avec un locataire a été désactivée. Pour plus d’informations, consultez « [Gestion de la synchronisation des équipes pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) » et « [Gestion de la synchronisation des équipes pour les organisations de votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise) ».
| `team_sync_tenant.enabled` | La synchronisation d’équipe avec un locataire a été activée. Pour plus d’informations, consultez « [Gestion de la synchronisation des équipes pour votre organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) » et « [Gestion de la synchronisation des équipes pour les organisations de votre entreprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise) ».
| `team_sync_tenant.update_okta_credentials` | Les informations d’identification Okta pour la synchronisation d’équipe avec un locataire ont été modifiées.
{%- endif %}

{%- ifversion fpt or ghes %}
## Actions de la catégorie `two_factor_authentication`

| Action | Description
|--------|-------------
| `two_factor_authentication.disabled` | L’[authentification à 2 facteurs][2fa] a été désactivée pour un compte d’utilisateur.
| `two_factor_authentication.enabled`  | L’[authentification à 2 facteurs][2fa] a été activée pour un compte d’utilisateur.
| `two_factor_authentication.password_reset_fallback_sms` | Un code de mot de passe à usage unique a été envoyé au numéro de téléphone de secours d’un compte d’utilisateur.
| `two_factor_authentication.recovery_codes_regenerated` | Des codes de récupération pour l’authentification à 2 facteurs ont été regénérés pour un compte d’utilisateur.
| `two_factor_authentication.sign_in_fallback_sms` | Un code de mot de passe à usage unique a été envoyé au numéro de téléphone de secours d’un compte d’utilisateur.
| `two_factor_authentication.update_fallback` | La méthode de secours pour l’authentification à 2 facteurs pour un compte d’utilisateur a été modifiée.
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## Actions de la catégorie `user`

| Action | Description
|--------|-------------
| `user.add_email`                  | Une adresse e-mail a été ajoutée à un compte d’utilisateur.
| `user.async_delete`               | Un travail asynchrone a été démarré pour détruire un compte d’utilisateur, ce qui a déclenché un événement `user.delete`.
| `user.audit_log_export` | Les entrées du journal d’audit ont été exportées.
| `user.block_user` | Un utilisateur a été bloqué par un autre utilisateur{% ifversion ghes %} ou un administrateur de site{% endif %}.
| `user.change_password`            | Un utilisateur a modifié son mot de passe.
| `user.create`                     | Un compte d’utilisateur a été créé.
| `user.creation_rate_limit_exceeded` | Le taux de création de comptes d’utilisateurs, d’applications, de problèmes, de demandes de tirage ou d’autres ressources a dépassé les limites de taux configurées, ou trop d’utilisateurs étaient suivis trop rapidement.
| `user.delete`                     | Un compte d’utilisateur a été détruit par un travail asynchrone.
{%- ifversion ghes %} | `user.demote`                     | Un administrateur de site a été rétrogradé en compte d’utilisateur ordinaire.
{%- endif %} | `user.destroy`                    | Un utilisateur a supprimé son compte, ce qui a déclenché une action `user.async_delete`.
| `user.failed_login`               | Un utilisateur tente de se connecter avec un nom d’utilisateur, un mot de passe ou un code d’authentification à 2 facteurs incorrect.
| `user.flag_as_large_scale_contributor` | Un compte d’utilisateur a été marqué comme contributeur à grande échelle. Seules les contributions de dépôts publics appartenant à l’utilisateur seront affichées dans son graphique de contribution pour éviter les dépassements de délai.
| `user.forgot_password`            | Un utilisateur a demandé une réinitialisation de mot de passe sur la page de connexion.
| `user.hide_private_contributions_count` | Un utilisateur a modifié la visibilité de ses contributions privées. Le nombre de contributions à des dépôts privés est désormais masqué sur le profil de l’utilisateur. Pour plus d’informations, consultez « [Publicisation ou masquage de vos contributions privées sur votre profil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile) ».
| `user.lockout` | L’accès au compte d’un utilisateur a été verrouillé.
| `user.login`                      | Un utilisateur s’est connecté.
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | Un utilisateur a vu un message obligatoire. Pour plus d’informations, consultez « [Personnalisation des messages utilisateur pour votre entreprise](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise) ».
{%- endif %} | `user.minimize_comment` | Un commentaire d’un utilisateur a été réduit.
{%- ifversion ghes %} | `user.promote`                    | Un compte d’utilisateur ordinaire a été promu administrateur de site.
{%- endif %} | `user.recreate` | Le compte d’un utilisateur a été restauré.
| `user.remove_email`               | Une adresse e-mail a été supprimée d’un compte d’utilisateur.
| `user.remove_large_scale_contributor_flag` | Le marquage d’un compte d’utilisateur comme contributeur à grande échelle a été supprimé.
| `user.rename`                     | Un nom d’utilisateur a été modifié.
| `user.reset_password` | Un utilisateur a réinitialisé son mot de passe de compte.
| `user.show_private_contributions_count` | Un utilisateur a modifié la visibilité de ses contributions privées. Le nombre de contributions à des dépôts privés est désormais affiché sur le profil de l’utilisateur. Pour plus d’informations, consultez « [Publicisation ou masquage de vos contributions privées sur votre profil](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile) ».
| `user.sign_in_from_unrecognized_device` | Un utilisateur s’est connecté à partir d’un appareil non reconnu.
| `user.sign_in_from_unrecognized_device_and_location` | Un utilisateur s’est connecté à partir d’un appareil et d’un emplacement non reconnus.
| `user.sign_in_from_unrecognized_location` | Un utilisateur s’est connecté à partir d’un emplacement non reconnu.
| `user.suspend`                    | Un compte d’utilisateur a été suspendu par un propriétaire d’entreprise {% ifversion ghes %} ou un administrateur de site{% endif %}.
| `user.two_factor_challenge_failure` | Une demande d’authentification à 2 facteurs pour un compte d’utilisateur n’a pas abouti.
| `user.two_factor_challenge_success` | Une demande d’authentification à 2 facteurs pour un compte d’utilisateur a abouti.
| `user.two_factor_recover` | Un utilisateur a utilisé ses codes de récupération pour l’authentification à 2 facteurs.
| `user.two_factor_recovery_codes_downloaded` | Un utilisateur a téléchargé les codes de récupération pour l’authentification à 2 facteurs pour son compte.
| `user.two_factor_recovery_codes_printed` | Un utilisateur a imprimé les codes de récupération pour l’authentification à 2 facteurs pour son compte.
| `user.two_factor_recovery_codes_viewed` | Un utilisateur a visualisé les codes de récupération pour l’authentification à 2 facteurs pour son compte.
| `user.two_factor_requested`       | Un utilisateur a été invité à entrer un code d’authentification à 2 facteurs.
| `user.unblock_user` | Un utilisateur a été débloqué par un autre utilisateur{% ifversion ghes %} ou un administrateur de site{% endif %}.
| `user.unminimize_comment` | La réduction d’un commentaire d’un utilisateur a été annulée.
| `user.unsuspend` | Un compte d’utilisateur a été rétabli par un propriétaire d’entreprise {% ifversion ghes %} ou un administrateur de site{% endif %}.
{%- endif %}

{%- ifversion ghec or ghes %}
## Actions de la catégorie `user_license`

| Action | Description
|--------|-------------
| `user_license.create` | Une licence de poste pour un utilisateur dans une entreprise a été créée.
| `user_license.destroy` | Une licence de poste pour un utilisateur dans une entreprise a été supprimée.
| `user_license.update` | Un type de licence de poste pour un utilisateur dans une entreprise a été modifié.
{%- endif %}

## Actions de la catégorie `workflows`

{% data reusables.audit_log.audit-log-events-workflows %}
