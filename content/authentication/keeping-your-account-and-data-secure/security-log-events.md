---
title: Security log events
intro: Learn about security log events recorded for your personal account.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---

{% note %}

**Note:** This article contains the events that may appear in your user account's security log. For the events that can appear in an organization's audit log{% ifversion ghec or ghes or ghae %} or the audit log for an enterprise{% endif %}, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization){% ifversion ghec or ghes or ghae %}" and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."{% else %}."{% endif %}

{% endnote %}

{% ifversion fpt or ghec %}

## `billing` category actions

| Action | Description
|------------------|-------------------
| `change_billing_type` | Triggered when you [change how you pay](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method) for {% data variables.product.prodname_dotcom %}.
| `change_email` | Triggered when you [change your email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address).

## `codespaces` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you [create a codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).
| `resume` | Triggered when you resume a suspended codespace.
| `delete` | Triggered when you [delete a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).
| `manage_access_and_security` | Triggered when you update [the repositories a codespace has access to](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).
| `trusted_repositories_access_update` | Triggered when you change your personal account's [access and security setting for {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).

## `marketplace_agreement_signature` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you sign the {% data variables.product.prodname_marketplace %} Developer Agreement.

## `marketplace_listing` category actions

| Action | Description
|------------------|-------------------
| `approve` | Triggered when your listing is approved for inclusion in {% data variables.product.prodname_marketplace %}.
| `create` | Triggered when you create a listing for your app in {% data variables.product.prodname_marketplace %}.
| `delist` | Triggered when your listing is removed from {% data variables.product.prodname_marketplace %}.
| `redraft` | Triggered when your listing is sent back to draft state.
| `reject` | Triggered when your listing is not accepted for inclusion in {% data variables.product.prodname_marketplace %}.

{% endif %}{% ifversion security-log-oauth-access-tokens %}

## `oauth_access` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you create a new OAuth access token.
| `destroy` | Triggered when you delete an OAuth access token.
| `regenerate` | Triggered when you regenerate an OAuth access token.
| `update` | Triggered when you update an OAuth access token.

{% endif %}

## `oauth_authorization` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you grant access to an {% data variables.product.prodname_oauth_app %}. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps)."
| `destroy` | Triggered when you revoke an {% data variables.product.prodname_oauth_app %}'s access to your account, and when authorizations are revoked or expired. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations)," and "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)."

{% ifversion passkeys %}

## `passkey` category actions

| Action | Description
|------------------|-------------------
| `register` | Triggered when a new passkey is added to your account.
| `remove` | Triggered when a passkey is removed from your account.

{% endif %}

{% ifversion fpt or ghec %}

## `payment_method` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a new payment method is added, such as a new credit card or PayPal account.
| `update` | Triggered when an existing payment method is updated.

{% endif %}

{% ifversion pat-v2 %}

## `personal_access_token` category actions

| Action | Description
|------------------|-------------------
| `access_granted` | Triggered when a {% data variables.product.pat_v2 %} that you created is granted access to resources.
| `access_revoked` | Triggered when a {% data variables.product.pat_v2 %} that you created is revoked. The token can still read public organization resources.
| `create` | Triggered when you create a {% data variables.product.pat_v2 %}.
| `credential_regenerated` | Triggered when you regenerate a {% data variables.product.pat_v2 %}.
| `destroy` | Triggered when you delete a {% data variables.product.pat_v2 %}.
| `request_cancelled` | Triggered when you cancel a pending request for your {% data variables.product.pat_v2 %} to access organization resources.
| `request_created` | Triggered when you create a {% data variables.product.pat_v2 %} to access organization resources and the organization requires approval before a {% data variables.product.pat_v2 %} can access organization resources.
| `request_denied` | Triggered when your request for a {% data variables.product.pat_v2 %} to access organization resources is denied. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)."

{% endif %}

## `profile_picture` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when you [set or update your profile picture](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile).

## `project` category actions

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

## `public_key` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you [add a new public SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
| `delete` | Triggered when you [remove a public SSH key to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/authentication/keeping-your-account-and-data-secure/reviewing-your-ssh-keys).

## `repo` category actions

| Action | Description
|------------------|-------------------
| `access` | Triggered when you [change the visibility of a repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).{% ifversion emu-owned-repos %}
 | `temporary_access_granted` | Triggered when an enterprise owner enables temporary access to a repository. For more information, see "[AUTOTITLE](/admin/user-management/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise)."{% endif %}
| `add_member` | Triggered when a {% data variables.product.product_name %} user is {% ifversion fpt or ghec %}[invited to have collaboration access](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository){% else %}[given collaboration access](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository){% endif %} to a repository.
| `add_topic` | Triggered when a repository owner [adds a topic](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to a repository.
| `archived` | Triggered when a repository owner [archives a repository](/repositories/archiving-a-github-repository/archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Triggered when [anonymous Git read access is disabled](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.enable_anonymous_git_access` | Triggered when [anonymous Git read access is enabled](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.lock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is locked](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).
| `config.unlock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is unlocked](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).{% endif %}
| `create` | Triggered when [a new repository is created](/repositories/creating-and-managing-repositories/creating-a-new-repository).
| `destroy` |  Triggered when [a repository is deleted](/repositories/creating-and-managing-repositories/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Triggered when a repository is disabled (e.g., for [insufficient funds](/billing/managing-your-github-billing-settings/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | Triggered when a ZIP or TAR archive of a repository is downloaded.
| `enable` | Triggered when a repository is re-enabled.{% endif %}
| `remove_member` | Triggered when a {% data variables.product.product_name %} user is [removed from a repository as a collaborator](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository).
| `remove_topic` | Triggered when a repository owner removes a topic from a repository.
| `rename` | Triggered when [a repository is renamed](/repositories/creating-and-managing-repositories/renaming-a-repository).
| `staff_unlock` | Triggered when an enterprise owner or {% data variables.contact.github_support %} (with permission from a repository administrator) temporarily unlocks the repository. The visibility of the repository isn't changed.
| `transfer` | Triggered when [a repository is transferred](/repositories/creating-and-managing-repositories/transferring-a-repository).
| `transfer_start` | Triggered when a repository transfer is about to occur.
| `unarchived` | Triggered when a repository owner unarchives a repository.

{% ifversion fpt or ghec %}

## `sponsors` category actions

| Action | Description
|------------------|-------------------
| `custom_amount_settings_change` | Triggered when you enable or disable custom amounts, or when you change the suggested custom amount (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Triggered when you change the FUNDING file in your repository (see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Triggered when you cancel a sponsorship (see "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Triggered when you sponsor an account (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_payment_complete` | Triggered after you sponsor an account and your payment has been processed (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Triggered when you change whether you receive email updates from a sponsored developer (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Triggered when you upgrade or downgrade your sponsorship (see "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)" and "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_create` | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_disable` | Triggered when your {% data variables.product.prodname_sponsors %} account is disabled
| `sponsored_developer_redraft` | Triggered when your {% data variables.product.prodname_sponsors %} account is returned to draft state from approved state
| `sponsored_developer_profile_update` | Triggered when you edit your sponsored developer profile (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `sponsored_developer_tier_description_update` | Triggered when you change the description for a sponsorship tier (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Triggered when you send an email update to your sponsors (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
| `waitlist_join` | Triggered when you join the waitlist to become a sponsored developer (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)")
{% endif %}

{% ifversion fpt or ghec %}

## `successor_invitation` category actions

| Action | Description
|------------------|-------------------
| `accept` | Triggered when you accept a succession invitation (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-personal-accounts-repositories)")
| `cancel` | Triggered when you cancel a succession invitation (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-personal-accounts-repositories)")
| `create` | Triggered when you create a succession invitation (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-personal-accounts-repositories)")
| `decline` | Triggered when you decline a succession invitation (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-personal-accounts-repositories)")
| `revoke` | Triggered when you revoke a succession invitation (see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-personal-accounts-repositories)")
{% endif %}

{% ifversion ghes or ghae %}

## `team` category actions

| Action | Description
|------------------|-------------------
| `add_member` | Triggered when a member of an organization you belong to [adds you to a team](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).
| `add_repository` | Triggered when a team you are a member of is given control of a repository.
| `create` | Triggered when a new team in an organization you belong to is created.
| `destroy` | Triggered when a team you are a member of is deleted from the organization.
| `remove_member` | Triggered when a member of an organization is [removed from a team](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team) you are a member of.
| `remove_repository` | Triggered when a repository is no longer under a team's control.

{% endif %}

{% ifversion not ghae %}

## `two_factor_authentication` category actions

| Action | Description
|------------------|-------------------
| `enabled` | Triggered when [two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa) is enabled.
| `disabled` | Triggered when two-factor authentication is disabled.
{% endif %}

## `user` category actions

| Action | Description
|--------------------|---------------------
| `add_email` | Triggered when you {% ifversion not ghae %}[add a new email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/changing-your-primary-email-address){% else %}add a new email address{% endif %}.{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | Triggered when you [allow the codespaces you create for a repository to access other repositories owned by your personal account](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).
| `codespaces_trusted_repo_access_revoked` | Triggered when you [disallow the codespaces you create for a repository to access other repositories owned by your personal account](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces). {% endif %}
| `create` | Triggered when you create a new personal account.{% ifversion not ghae %}
| `change_password` | Triggered when you change your password.
| `forgot_password` | Triggered when you ask for [a password reset](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials).{% endif %}
| `hide_private_contributions_count` | Triggered when you [hide private contributions on your profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile).
| `login` | Triggered when you log in to {% data variables.location.product_location %}.{% ifversion ghes or ghae %}
`mandatory_message_viewed`   | Triggered when you view a mandatory message (see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)" for details) | {% endif %}
| `failed_login` | Triggered when you failed to log in successfully.
| `remove_email` | Triggered when you remove an email address.
| `rename` | Triggered when you rename your account.{% ifversion fpt or ghec %}
| `report_content` | Triggered when you [report an issue or pull request, or a comment on an issue, pull request, or commit](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}
| `show_private_contributions_count` | Triggered when you [publicize private contributions on your profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile).{% ifversion not ghae %}
| `two_factor_requested` | Triggered when {% data variables.product.product_name %} asks you for [your two-factor authentication code](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication).{% endif %}

## `user_status` category actions

| Action | Description
|--------------------|---------------------
| `update` | Triggered when you set or change the status on your profile. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)."
| `destroy` | Triggered when you clear the status on your profile.
