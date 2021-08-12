---
title: Reviewing your security log
intro: You can review the security log for your user account to better understand actions you've performed and actions others have performed that involve you.
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-your-security-log
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### Accessing your security log

The security log lists all actions performed within the last 90 days{% if currentVersion ver_lt "enterprise-server@2.20" %}, up to 50{% endif %}.

{% data reusables.user_settings.access_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
2. In the user settings sidebar, click **Security log**.
  ![Security log tab](/assets/images/help/settings/audit-log-tab.png)
{% else %}
{% data reusables.user_settings.security %}
3. Under "Security history," your log is displayed.
  ![Security log](/assets/images/help/settings/user_security_log.png)
4. Click on an entry to see more information about the event.
  ![Security log](/assets/images/help/settings/user_security_history_action.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Searching your security log

{% data reusables.audit_log.audit-log-search %}

#### Search based on the action performed
{% else %}
### Understanding events in your security log
{% endif %}

The events listed in your security log are triggered by your actions. Actions are grouped into the following categories:

| Category name | Description
|------------------|-------------------{% if currentVersion == "free-pro-team@latest" %}
| [`account_recovery_token`](#account_recovery_token-category-actions) | Contains all activities related to [adding a recovery token](/articles/configuring-two-factor-authentication-recovery-methods).
| [`billing`](#billing-category-actions) | Contains all activities related to your billing information.
| [`codespaces`](#codespaces-category-actions) | Contains all activities related to {% data variables.product.prodname_codespaces %}. For more information, see "[About {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)."
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contains all activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}
| [`oauth_access`](#oauth_access-category-actions) | Contains all activities related to [{% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps) you've connected with.{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions) | Contains all activities related to paying for your {% data variables.product.prodname_dotcom %} subscription.{% endif %}
| [`profile_picture`](#profile_picture-category-actions) | Contains all activities related to your profile picture.
| [`project`](#project-category-actions) | Contains all activities related to project boards.
| [`public_key`](#public_key-category-actions) | Contains all activities related to [your public SSH keys](/articles/adding-a-new-ssh-key-to-your-github-account).
| [`repo`](#repo-category-actions) | Contains all activities related to the repositories you own.{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions) | Contains all events related to {% data variables.product.prodname_sponsors %} and sponsor buttons (see "[About {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)" and "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| [`team`](#team-category-actions) | Contains all activities related to teams you are a part of.{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions) | Contains all activities related to [two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %}
| [`user`](#user-category-actions) | Contains all activities related to your account.

{% if currentVersion == "free-pro-team@latest" %}

### Exporting your security log

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

### Security log actions

An overview of some of the most common actions that are recorded as events in the security log.

{% if currentVersion == "free-pro-team@latest" %}

#### `account_recovery_token` category actions

| Action | Description
|------------------|-------------------
| `confirm` | Triggered when you successfully [store a new token with a recovery provider](/articles/configuring-two-factor-authentication-recovery-methods).
| `recover` | Triggered when you successfully [redeem an account recovery token](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).
| `recover_error` | Triggered when a token is used but {% data variables.product.prodname_dotcom %} is not able to validate it.

#### `billing` category actions

| Action | Description
|------------------|-------------------
| `change_billing_type` | Triggered when you [change how you pay](/articles/adding-or-editing-a-payment-method) for {% data variables.product.prodname_dotcom %}.
| `change_email` | Triggered when you [change your email address](/articles/changing-your-primary-email-address).

#### `codespaces` category actions

| Action | Description
|------------------|-------------------
| `trusted_repositories_access_update` | Triggered when you change your user account's [access and security setting for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).

#### `marketplace_agreement_signature` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you sign the {% data variables.product.prodname_marketplace %} Developer Agreement.

#### `marketplace_listing` category actions

| Action | Description
|------------------|-------------------
| `approve` | Triggered when your listing is approved for inclusion in {% data variables.product.prodname_marketplace %}.
| `create` | Triggered when you create a listing for your app in {% data variables.product.prodname_marketplace %}.
| `delist` | Triggered when your listing is removed from {% data variables.product.prodname_marketplace %}.
| `redraft` | Triggered when your listing is sent back to draft state.
| `reject` | Triggered when your listing is not accepted for inclusion in {% data variables.product.prodname_marketplace %}.

{% endif %}

#### `oauth_access` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you [grant access to an {% data variables.product.prodname_oauth_app %}](/articles/authorizing-oauth-apps).
| `destroy` | Triggered when you [revoke an {% data variables.product.prodname_oauth_app %}'s access to your account](/articles/reviewing-your-authorized-integrations).

{% if currentVersion == "free-pro-team@latest" %}

#### `payment_method` category actions

| Action | Description
|------------------|-------------------
| `clear` | Triggered when [a payment method](/articles/removing-a-payment-method) on file is removed.
| `create` | Triggered when a new payment method is added, such as a new credit card or PayPal account.
| `update` | Triggered when an existing payment method is updated.

{% endif %}

#### `profile_picture` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when you [set or update your profile picture](/articles/setting-your-profile-picture/).

#### `project` category actions

| Action | Description
|--------------------|---------------------
| `access` | Triggered when a project board's visibility is changed.
| `create` | Triggered when a project board is created.
| `rename` | Triggered when a project board is renamed.
| `update` | Triggered when a project board is updated.
| `delete` | Triggered when a project board is deleted.
| `link`   | Triggered when a repository is linked to a project board.
| `unlink` | Triggered when a repository is unlinked from a project board.
| `update_user_permission` | Triggered when an outside collaborator is added to or removed from a project board or has their permission level changed.

#### `public_key` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you [add a new public SSH key to your {% data variables.product.product_name %} account](/articles/adding-a-new-ssh-key-to-your-github-account).
| `delete` | Triggered when you [remove a public SSH key to your {% data variables.product.product_name %} account](/articles/reviewing-your-ssh-keys).

#### `repo` category actions

| Action | Description
|------------------|-------------------
| `access` | Triggered when you a repository you own is [switched from "private" to "public"](/articles/making-a-private-repository-public) (or vice versa).
| `add_member` | Triggered when a {% data variables.product.product_name %} user is {% if currentVersion == "free-pro-team@latest" %}[invited to have collaboration access](/articles/inviting-collaborators-to-a-personal-repository){% else %}[given collaboration access](/articles/inviting-collaborators-to-a-personal-repository){% endif %} to a repository.
| `add_topic` | Triggered when a repository owner [adds a topic](/articles/classifying-your-repository-with-topics) to a repository.
| `archived` | Triggered when a repository owner [archives a repository](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | Triggered when [anonymous Git read access is disabled](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.enable_anonymous_git_access` | Triggered when [anonymous Git read access is enabled](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.lock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is locked](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `config.unlock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is unlocked](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create` | Triggered when [a new repository is created](/articles/creating-a-new-repository).
| `destroy` |  Triggered when [a repository is deleted](/articles/deleting-a-repository).{% if currentVersion == "free-pro-team@latest" %}
| `disable` | Triggered when a repository is disabled (e.g., for [insufficient funds](/articles/unlocking-a-locked-account)).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable` | Triggered when a repository is re-enabled.{% endif %}
| `remove_member` | Triggered when a {% data variables.product.product_name %} user is [removed from a repository as a collaborator](/articles/removing-a-collaborator-from-a-personal-repository).
| `remove_topic` | Triggered when a repository owner removes a topic from a repository.
| `rename` | Triggered when [a repository is renamed](/articles/renaming-a-repository).
| `transfer` | Triggered when [a repository is transferred](/articles/how-to-transfer-a-repository).
| `transfer_start` | Triggered when a repository transfer is about to occur.
| `unarchived` | Triggered when a repository owner unarchives a repository.

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` category actions

| Action | Description
|------------------|-------------------
| `repo_funding_link_button_toggle` | Triggered when you enable or disable a sponsor button in your repository (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)")
| `repo_funding_links_file_action` | Triggered when you change the FUNDING file in your repository (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Triggered when you cancel a sponsorship (see "[Downgrading a sponsorship](/articles/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Triggered when you sponsor an account (see "[Sponsoring an open source contributor](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Triggered when you change whether you receive email updates from a sponsored developer (see "[Managing your sponsorship](/articles/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Triggered when you upgrade or downgrade your sponsorship (see "[Upgrading a sponsorship](/articles/upgrading-a-sponsorship)" and "[Downgrading a sponsorship](/articles/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")
| `sponsored_developer_create` | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")
| `sponsored_developer_profile_update` | Triggered when you edit your sponsored developer profile (see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")
| `sponsored_developer_tier_description_update` | Triggered when you change the description for a sponsorship tier (see "[Changing your sponsorship tiers](/articles/changing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Triggered when you send an email update to your sponsors (see "[Contacting your sponsors](/articles/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")
| `waitlist_join` | Triggered when you join the waitlist to become a sponsored developer (see "[Setting up {% data variables.product.prodname_sponsors %} for your user account](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `successor_invitation` category actions

| Action | Description
|------------------|-------------------
| `accept` | Triggered when you accept a succession invitation (see "[Maintaining ownership continuity of your user account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `cancel` | Triggered when you cancel a succession invitation (see "[Maintaining ownership continuity of your user account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `create` | Triggered when you create a succession invitation (see "[Maintaining ownership continuity of your user account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `decline` | Triggered when you decline a succession invitation (see "[Maintaining ownership continuity of your user account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
| `revoke` | Triggered when you revoke a succession invitation (see "[Maintaining ownership continuity of your user account's repositories](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

#### `team` category actions

| Action | Description
|------------------|-------------------
| `add_member` | Triggered when a member of an organization you belong to [adds you to a team](/articles/adding-organization-members-to-a-team).
| `add_repository` | Triggered when a team you are a member of is given control of a repository.
| `create` | Triggered when a new team in an organization you belong to is created.
| `destroy` | Triggered when a team you are a member of is deleted from the organization.
| `remove_member` | Triggered when a member of an organization is [removed from a team](/articles/removing-organization-members-from-a-team) you are a member of.
| `remove_repository` | Triggered when a repository is no longer under a team's control.

{% endif %}

{% if currentVersion != "github-ae@latest" %}
#### `two_factor_authentication` category actions

| Action | Description
|------------------|-------------------
| `enabled` | Triggered when [two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) is enabled.
| `disabled` | Triggered when two-factor authentication is disabled.
{% endif %}

#### `user` category actions

| Action | Description
|--------------------|---------------------
| `add_email` | Triggered when you {% if currentVersion != "github-ae@latest" %}[add a new email address](/articles/changing-your-primary-email-address){% else %}add a new email address{% endif %}.{% if currentVersion == "free-pro-team@latest" %}
| `codespaces_trusted_repo_access_granted` | Triggered when you [allow the codespaces you create for a repository to access other repositories owned by your user account](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces.
| `codespaces_trusted_repo_access_revoked` | Triggered when you [disallow the codespaces you create for a repository to access other repositories owned by your user account](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces. {% endif %}
| `create` | Triggered when you create a new user account.{% if currentVersion != "github-ae@latest" %}
| `change_password` | Triggered when you change your password.
| `forgot_password` | Triggered when you ask for [a password reset](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count` | Triggered when you [hide private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `login` | Triggered when you log in to {% data variables.product.product_location %}.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
`mandatory_message_viewed`   | Triggered when you view a mandatory message (see "[Customizing user messages](/admin/user-management/customizing-user-messages-for-your-enterprise)" for details) | {% endif %}
| `failed_login` | Triggered when you failed to log in successfully.
| `remove_email` | Triggered when you remove an email address.
| `rename` | Triggered when you rename your account.{% if currentVersion == "free-pro-team@latest" %}
| `report_content` | Triggered when you [report an issue or pull request, or a comment on an issue, pull request, or commit](/articles/reporting-abuse-or-spam).{% endif %}
| `show_private_contributions_count` | Triggered when you [publicize private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% if currentVersion != "github-ae@latest" %}
| `two_factor_requested` | Triggered when {% data variables.product.product_name %} asks you for [your two-factor authentication code](/articles/accessing-github-using-two-factor-authentication).{% endif %}

#### `user_status` category actions

| Action | Description
|--------------------|---------------------
| `update` | Triggered when you set or change the status on your profile. For more information, see "[Setting a status](/articles/personalizing-your-profile/#setting-a-status)."
| `destroy` | Triggered when you clear the status on your profile.

