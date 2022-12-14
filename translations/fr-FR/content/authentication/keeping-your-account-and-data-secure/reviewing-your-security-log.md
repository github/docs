---
title: Examen de votre journal de sécurité
intro: Vous pouvez examiner le journal de sécurité de votre compte personnel pour mieux comprendre les actions que vous avez effectuées et celles que d’autres personnes ont effectuées et qui vous concernent.
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
ms.openlocfilehash: 2061c1836300ee21155841d407c46cdfd8712efd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107364'
---
## Accès à votre journal de sécurité

Le journal de sécurité liste toutes les actions effectuées au cours des 90 derniers jours.

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. Dans la section « Archives » de la barre latérale, cliquez sur **Journal de sécurité** en regard de {% octicon "log" aria-label="The log icon" %}.
{% else %}
1. Dans la barre latérale des paramètres utilisateur, cliquez sur **Journal de sécurité**.
  ![Onglet](/assets/images/help/settings/audit-log-tab.png) Journal de sécurité {% endif %}

## Recherche dans votre journal de sécurité

{% data reusables.audit_log.audit-log-search %}

### Recherche basée sur l’action effectuée

Les événements listés dans votre journal de sécurité sont déclenchés par vos actions. Les actions sont regroupées par catégories :

| Nom de la catégorie | Description |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Contient toutes les activités liées à vos informations de facturation.
| [`codespaces`](#codespaces-category-actions) | Contient toutes les activités liées à {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces) ».
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contient toutes les activités liées à la signature du contrat de développeur {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contient toutes les activités liées au listage des applications dans {% data variables.product.prodname_marketplace %}.{% endif %} | [`oauth_access`](#oauth_access-category-actions) | Contient toutes les activités liées aux [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) auxquelles vous vous êtes connecté.{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Contient toutes les activités liées au paiement de votre abonnement {% data variables.product.prodname_dotcom %}.{% endif %}{% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Contient les activités liées aux {% data variables.product.pat_v2 %}. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».{% endif %} | [`profile_picture`](#profile_picture-category-actions) | Contient toutes les activités liées à votre photo de profil.
| [`project`](#project-category-actions) | Contient toutes les activités liées aux tableaux de projet.
| [`public_key`](#public_key-category-actions) | Contient toutes les activités liées à [vos clés SSH publiques](/articles/adding-a-new-ssh-key-to-your-github-account).
| [`repo`](#repo-category-actions) | Contient toutes les activités liées aux dépôts que vous possédez.{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Contient tous les événements liés aux {% data variables.product.prodname_sponsors %} et boutons de sponsor (consultez « [À propos des {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors) » et « [Affichage d’un bouton de sponsor dans votre dépôt](/articles/displaying-a-sponsor-button-in-your-repository) »){% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | Contient toutes les activités liées aux équipes dont vous êtes membre.{% endif %}{% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | Contient toutes les activités liées à l’[authentification à 2 facteurs](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %} | [`user`](#user-category-actions) | Contient toutes les activités liées à votre compte.

{% ifversion fpt or ghec %}

## Exportation de votre journal de sécurité

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## Actions du journal de sécurité

Voici un aperçu des actions les plus courantes enregistrées comme événements dans le journal de sécurité.

{% ifversion fpt or ghec %}

### Actions de la catégorie `billing`

| Action | Description
|------------------|-------------------
| `change_billing_type` | Déclenchée quand vous [modifiez votre méthode de paiement](/articles/adding-or-editing-a-payment-method) pour {% data variables.product.prodname_dotcom %}.
| `change_email` | Déclenchée quand vous [modifiez votre adresse e-mail](/articles/changing-your-primary-email-address).

### Actions de la catégorie `codespaces`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand vous [créez un codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Déclenchée quand vous reprenez un codespace suspendu.
| `delete` | Déclenchée quand vous [supprimez un codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `manage_access_and_security` | Déclenchée quand vous mettez à jour [les dépôts auxquels un codespace a accès](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `trusted_repositories_access_update` | Déclenchée quand vous modifiez les [paramètres d’accès et de sécurité de votre compte personnel pour {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).

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

### Actions de la catégorie `oauth_authorization`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand vous [accordez l’accès à une {% data variables.product.prodname_oauth_app %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `destroy` | Se déclenche quand vous [révoquez l’accès d’une {% data variables.product.prodname_oauth_app %} à votre compte](/articles/reviewing-your-authorized-integrations), et quand les [autorisations ont été révoquées ou ont expiré](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

{% ifversion fpt or ghec %}

### Actions de la catégorie `payment_method`

| Action | Description
|------------------|-------------------
| `create` | Déclenchée quand un nouveau mode de paiement est ajouté, par exemple une nouvelle carte de crédit ou un compte PayPal.
| `update` | Déclenchée quand un mode de paiement existant est mis à jour.

{% endif %}

{% ifversion pat-v2 %}

### Actions de la catégorie `personal_access_token`

| Action | Description
|------------------|-------------------
| `access_granted` | Se déclenche quand un {% data variables.product.pat_v2 %} que vous avez créé se voit octroyer l’accès aux ressources.
| `access_revoked` | Se déclenche quand un {% data variables.product.pat_v2 %} que vous avez créé est révoqué. Le jeton peut toujours lire les ressources d’une organisation publique.
| `create` | Se déclenche quand vous créez un {% data variables.product.pat_v2 %}.
| `credential_regenerated` | Se déclenche quand vous regénérez un {% data variables.product.pat_v2 %}.
| `destroy` | Se déclenche quand vous supprimez un {% data variables.product.pat_v2 %}.
| `request_cancelled` | Se déclenche quand vous annulez une demande en attente de votre {% data variables.product.pat_v2 %} pour accéder aux ressources de l’organisation.
| `request_created` | Se déclenche quand vous créez un {% data variables.product.pat_v2 %} pour accéder aux ressources de l’organisation, et que cette dernière nécessite une approbation pour permettre au {% data variables.product.pat_v2 %} d’accéder aux ressources de l’organisation.
| `request_denied` | Se déclenche quand votre demande d’accès d’un {% data variables.product.pat_v2 %} aux ressources de l’organisation est refusée. Pour plus d’informations, consultez « [Gestion des demandes des {% data variables.product.pat_generic %} dans votre organisation](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization) ».

{% endif %}

### Actions de la catégorie `profile_picture`

| Action | Description
|------------------|-------------------
| `update` | Déclenchée quand vous [définissez ou mettez à jour votre image de profil](/articles/setting-your-profile-picture/).

### Actions de la catégorie `project`

| Action | Description
|--------------------|---------------------
| `access` | Déclenchée quand la visibilité d’un tableau de projet est modifiée.
| `create` | Déclenchée quand un tableau de projet est créé.
| `rename` | Déclenchée quand un tableau de projet est renommé.
| `update` | Déclenchée quand un tableau de projet est mis à jour.
| `delete` | Déclenchée quand un tableau de projet est supprimé.
| `link`   | Déclenchée quand un dépôt est lié à un tableau de projet.
| `unlink` | Déclenchée quand un dépôt est dissocié d’un tableau de projet.
| `update_user_permission` | Déclenchée quand un collaborateur externe est ajouté à un tableau de projet ou supprimé d’un tableau de projet ou que son niveau d’autorisation a changé.

### Actions de la catégorie `public_key`

| Action | Description
|------------------|-------------------
| `create` | Se déclenche quand vous [ajoutez une nouvelle clé SSH publique à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/adding-a-new-ssh-key-to-your-github-account).
| `delete` | Se déclenche quand vous [supprimez une clé SSH publique de votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/reviewing-your-ssh-keys).

### Actions de la catégorie `repo`

| Action | Description
|------------------|-------------------
| `access` | Déclenchée quand un dépôt vous appartenant [passe de « privé » à « public »](/articles/making-a-private-repository-public) (ou inversement).
| `add_member` | Déclenchée quand un utilisateur de {% data variables.product.product_name %} {% ifversion fpt or ghec %}[est invité à avoir un accès en collaboration](/articles/inviting-collaborators-to-a-personal-repository){% else %}[se voit accorder un accès en collaboration](/articles/inviting-collaborators-to-a-personal-repository){% endif %} à un dépôt.
| `add_topic` | Déclenchée quand un propriétaire de dépôt [ajoute une rubrique](/articles/classifying-your-repository-with-topics) à un dépôt.
| `archived` | Déclenchée quand un propriétaire de dépôt [archive un dépôt](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Déclenchée quand [l’accès en lecture Git anonyme est désactivé](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) dans un dépôt public.
| `config.enable_anonymous_git_access` | Déclenchée quand [l’accès en lecture Git anonyme est activé](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) dans un dépôt public.
| `config.lock_anonymous_git_access` | Déclenchée quand [le paramètre d’accès en lecture Git anonyme](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) d’un dépôt est verrouillé.
| `config.unlock_anonymous_git_access` | Déclenchée quand [le paramètre d’accès en lecture Git anonyme](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) d’un dépôt est déverrouillé.{% endif %}
| `create` | Déclenchée quand [un dépôt est créé](/articles/creating-a-new-repository).
| `destroy` |  Déclenchée quand [un dépôt est supprimé](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Déclenchée quand un dépôt est désactivé (par exemple, en raison de [fonds insuffisants](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | Déclenchée lors du téléchargement d’une archive ZIP ou TAR d’un dépôt.
| `enable` | Déclenchée quand un dépôt est réactivé.{% endif %}
| `remove_member` | Déclenchée quand un utilisateur de {% data variables.product.product_name %} est [supprimé d’un dépôt pour lequel il était collaborateur](/articles/removing-a-collaborator-from-a-personal-repository).
| `remove_topic` | Déclenchée quand un propriétaire de dépôt supprime une rubrique d’un dépôt.
| `rename` | Déclenchée quand [un dépôt est renommé](/articles/renaming-a-repository).
| `transfer` | Déclenchée quand [un dépôt est transféré](/articles/how-to-transfer-a-repository).
| `transfer_start` | Déclenchée quand un transfert de dépôt est sur le point de se produire.
| `unarchived` | Déclenchée quand un propriétaire de dépôt désarchive un dépôt.

{% ifversion fpt or ghec %}
### Actions de la catégorie `sponsors`

| Action | Description
|------------------|-------------------
| `custom_amount_settings_change` | Déclenchée quand vous activez ou désactivez des montants personnalisés, ou quand vous modifiez le montant personnalisé suggéré (consultez « [Gestion de vos niveaux de parrainage](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers) »)
| `repo_funding_links_file_action` | Déclenchée quand vous modifiez le fichier FUNDING dans votre dépôt (consultez « [Affichage d’un bouton de sponsor dans votre dépôt](/articles/displaying-a-sponsor-button-in-your-repository) »)
| `sponsor_sponsorship_cancel` | Déclenchée quand vous annulez un parrainage (consultez « [Déclassement d’un parrainage](/articles/downgrading-a-sponsorship) »)
| `sponsor_sponsorship_create` | Déclenchée quand vous parrainez un compte (consultez « [Parrainage d’un contributeur open source](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor) »)
| `sponsor_sponsorship_payment_complete` | Déclenchée quand vous avez parrainé un compte et que votre paiement a été traité (consultez « [Parrainage d’un contributeur open source](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor) »)
| `sponsor_sponsorship_preference_change` | Déclenchée quand vous modifiez votre choix de recevoir des mises à jour d’un développeur parrainé par e-mail (consultez « [Gestion de votre parrainage](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship) »)
| `sponsor_sponsorship_tier_change` | Déclenchée quand vous mettez à niveau ou déclassez votre parrainage (consultez « [Mise à niveau d’un parrainage](/articles/upgrading-a-sponsorship) » et « [Déclassement d’un parrainage](/articles/downgrading-a-sponsorship) »)
| `sponsored_developer_approve` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} est approuvé (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre compte personnel](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account) »)
| `sponsored_developer_create` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} est créé (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre compte personnel](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account) »)
| `sponsored_developer_disable` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} est désactivé
| `sponsored_developer_redraft` | Déclenchée quand votre compte {% data variables.product.prodname_sponsors %} repasse de l’état approuvé à l’état de brouillon
| `sponsored_developer_profile_update` | Déclenchée quand vous modifiez votre profil de développeur parrainé (consultez « [Modification de vos informations de profil pour {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors) »)
| `sponsored_developer_request_approval` | Déclenchée quand vous faites une demande d’approbation auprès de {% data variables.product.prodname_sponsors %} (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre compte personnel](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account) »)
| `sponsored_developer_tier_description_update` | Déclenchée quand vous modifiez la description d’un niveau de parrainage (consultez « [Gestion de vos niveaux de parrainage](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers) »)
| `sponsored_developer_update_newsletter_send` | Déclenchée quand vous envoyez une mise à jour par e-mail à vos sponsors (consultez « [Contacter vos sponsors](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors) »)
| `waitlist_invite_sponsored_developer` | Déclenchée quand vous êtes sur la liste d’attente et que vous êtes invité à rejoindre {% data variables.product.prodname_sponsors %} (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre compte personnel](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account) »)
| `waitlist_join` | Déclenchée quand vous rejoignez la liste d’attente pour devenir développeur parrainé (consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre compte personnel](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account) »)
{% endif %}

{% ifversion fpt or ghec %}
### Actions de la catégorie `successor_invitation`

| Action | Description
|------------------|-------------------
| `accept` | Déclenchée quand vous acceptez une invitation de succession (consultez « [Gestion de la continuité de propriété des dépôts de votre compte personnel](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories) »)
| `cancel` | Déclenchée quand vous annulez une invitation de succession (consultez « [Gestion de la continuité de propriété des dépôts de votre compte personnel](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories) »)
| `create` | Déclenchée quand vous créez une invitation de succession (consultez « [Gestion de la continuité de propriété des dépôts de votre compte personnel](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories) »)
| `decline` | Déclenchée quand vous déclinez une invitation de succession (consultez « [Gestion de la continuité de propriété des dépôts de votre compte personnel](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories) »)
| `revoke` | Déclenchée quand vous révoquez une invitation de succession (consultez « [Gestion de la continuité de propriété des dépôts de votre compte personnel](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories) »)
{% endif %}

{% ifversion ghes or ghae %}

### Actions de la catégorie `team`

| Action | Description
|------------------|-------------------
| `add_member` | Déclenchée quand un membre d’une organisation à laquelle vous appartenez [vous ajoute à une équipe](/articles/adding-organization-members-to-a-team).
| `add_repository` | Déclenchée quand le contrôle d’un dépôt est donné à une équipe dont vous êtes membre.
| `create` | Déclenchée quand une équipe est créée dans une organisation à laquelle vous appartenez.
| `destroy` | Déclenchée quand une équipe dont vous êtes membre est supprimée de l’organisation.
| `remove_member` | Déclenchée quand un membre d’une organisation est [supprimé d’une équipe](/articles/removing-organization-members-from-a-team) dont vous êtes membre.
| `remove_repository` | Déclenchée quand un dépôt n’est plus sous le contrôle d’une équipe.

{% endif %}

{% ifversion not ghae %}
### Actions de la catégorie `two_factor_authentication`

| Action | Description
|------------------|-------------------
| `enabled` | Déclenchée quand l’[authentification à 2 facteurs](/articles/securing-your-account-with-two-factor-authentication-2fa) est activée.
| `disabled` | Déclenchée quand l’authentification à 2 facteurs est désactivée.
{% endif %}

### Actions de la catégorie `user`

| Action | Description
|--------------------|---------------------
| `add_email` | Déclenchée quand vous {% ifversion not ghae %}[ajoutez une nouvelle adresse e-mail](/articles/changing-your-primary-email-address){% else %}ajoutez une nouvelle adresse e-mail{% endif %}.{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | Déclenchée quand vous [autorisez les codespaces que vous créez pour un dépôt à accéder à d’autres dépôts appartenant à votre compte personnel](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `codespaces_trusted_repo_access_revoked` | Déclenchée quand vous [interdisez les codespaces que vous créez pour un dépôt à accéder à d’autres dépôts appartenant à votre compte personnel](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). {% endif %}
| `create` | Déclenchée quand vous créez un compte personnel.{% ifversion not ghae %}
| `change_password` | Déclenchée quand vous modifiez votre mot de passe.
| `forgot_password` | Déclenchée quand vous demandez une [réinitialisation de mot de passe](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count` | Déclenchée quand vous [masquez les contributions privées sur votre profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `login` | Se déclenche quand vous vous connectez à {% data variables.location.product_location %}.{% ifversion ghes or ghae %}
`mandatory_message_viewed`   | Déclenchée quand vous voyez un message obligatoire (pour plus d’informations, consultez « [Personnalisation des messages utilisateur](/admin/user-management/customizing-user-messages-for-your-enterprise) »). | {% endif %}
| `failed_login` | Déclenchée quand votre tentative de connexion a échoué.
| `remove_email` | Déclenchée quand vous supprimez une adresse e-mail.
| `rename` | Déclenchée quand vous renommez votre compte.{% ifversion fpt or ghec %}
| `report_content` | Déclenchée quand vous [signalez un problème ou une demande de tirage (pull request) ou un commentaire sur un problème, une demande de tirage ou un commit](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}
| `show_private_contributions_count` | Déclenchée quand vous [publicisez des contributions privées sur votre profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% ifversion not ghae %}
| `two_factor_requested` | Déclenchée quand {% data variables.product.product_name %} vous demande votre [code d’authentification à 2 facteurs](/articles/accessing-github-using-two-factor-authentication).{% endif %}

### Actions de la catégorie `user_status`

| Action | Description
|--------------------|---------------------
| `update` | Déclenchée quand vous définissez ou modifiez l’état sur votre profil. Pour plus d’informations, consultez « [Définition d’un état](/articles/personalizing-your-profile/#setting-a-status) ».
| `destroy` | Déclenchée quand vous supprimez l’état sur votre profil.
