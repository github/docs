---
title: Reviewing the audit log for your organization
intro: 'The audit log allows organization admins to quickly review the actions performed by members of your organization. It includes details such as who performed the action, what the action was, and when it was performed.'
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Accessing the audit log

The audit log lists actions performed within the last 90 days. Only owners can access an organization's audit log.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

### Searching the audit log

{% data reusables.audit_log.audit-log-search %}

#### Search based on the action performed

To search for specific events, use the `action` qualifier in your query. Actions listed in the audit log are grouped within the following categories:

| Category Name                                     | 설명                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| `계정`                                              | Contains all activities related to your organization account.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `결제`                                              | Contains all activities related to your organization's billing.{% endif %}
| `discussion_post`                                 | Contains all activities related to discussions posted to a team page.                                                                                                                                                                                                                                                                                                                                                |
| `discussion_post_reply`                           | Contains all activities related to replies to discussions posted to a team page.                                                                                                                                                                                                                                                                                                                                     |
| `후크`                                              | Contains all activities related to webhooks.                                                                                                                                                                                                                                                                                                                                                                         |
| `integration_installation_request`                | Contains all activities related to organization member requests for owners to approve integrations for use in the organization. |{% if currentVersion == "free-pro-team@latest" %}
| `marketplace_agreement_signature`                 | Contains all activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.                                                                                                                                                                                                                                                                                                |
| `marketplace_listing`                             | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `members_can_create_pages`                        | Contains all activities related to disabling the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see "[Restricting publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization)." |{% endif %}
| `org`                                             | Contains all activities related to organization membership{% if currentVersion == "free-pro-team@latest" %}
| `org_credential_authorization`                    | Contains all activities related to authorizing credentials for use with SAML single sign-on.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| `organization_label`                              | Contains all activities related to default labels for repositories in your organization.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `payment_method`                                  | Contains all activities related to how your organization pays for GitHub.{% endif %}
| `profile_picture`                                 | Contains all activities related to your organization's profile picture.                                                                                                                                                                                                                                                                                                                                              |
| `프로젝트`                                            | Contains all activities related to project boards.                                                                                                                                                                                                                                                                                                                                                                   |
| `protected_branch`                                | Contains all activities related to protected branches.                                                                                                                                                                                                                                                                                                                                                               |
| `repo`                                            | Contains all activities related to the repositories owned by your organization.{% if currentVersion == "free-pro-team@latest" %}
| `repository_content_analysis`                     | Contains all activities related to [enabling or disabling data use for a private repository](/articles/about-github-s-use-of-your-data).                                                                                                                                                                                                                                                                             |
| `repository_dependency_graph`                     | Contains all activities related to [enabling or disabling the dependency graph for a private repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository).{% endif %}{% if currentVersion != "github-ae@latest" %}
| `repository_vulnerability_alert`                  | Contains all activities related to [{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `sponsors`                                        | Contains all events related to sponsor buttons (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `팀`                                               | Contains all activities related to teams in your organization.{% endif %}
| `team_discussions`                                | Contains activities related to managing team discussions for an organization.                                                                                                                                                                                                                                                                                                                                        |

You can search for specific sets of actions using these terms. 예시:

  * `action:team` finds all events grouped within the team category.
  * `-action:hook` excludes all events in the webhook category.

Each category has a set of associated events that you can filter on. 예시:

  * `action:team.create` finds all events where a team was created.
  * `-action:hook.events_changed` excludes all events where the events on a webhook have been altered.

This list describes the available categories and associated events:

{% if currentVersion == "free-pro-team@latest" %}- [The `account` category](#the-account-category)
- [The `billing` category](#the-billing-category){% endif %}
- [The `discussion_post` category](#the-discussion_post-category)
- [The `discussion_post_reply` category](#the-discussion_post_reply-category)
- [The `hook` category](#the-hook-category)
- [The `integration_installation_request` category](#the-integration_installation_request-category)
- [The `issue` category](#the-issue-category){% if currentVersion == "free-pro-team@latest" %}
- [The `marketplace_agreement_signature` category](#the-marketplace_agreement_signature-category)
- [The `marketplace_listing` category](#the-marketplace_listing-category){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- [The `members_can_create_pages` category](#the-members_can_create_pages-category){% endif %}
- [The `org` category](#the-org-category){% if currentVersion == "free-pro-team@latest" %}
- [The `org_credential_authorization` category](#the-org_credential_authorization-category){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- [The `organization_label` category](#the-organization_label-category){% endif %}
- [The `oauth_application` category](#the-oauth_application-category){% if currentVersion == "free-pro-team@latest" %}
- [The `payment_method` category](#the-payment_method-category){% endif %}
- [The `profile_picture` category](#the-profile_picture-category)
- [The `project` category](#the-project-category)
- [The `protected_branch` category](#the-protected_branch-category)
- [The `repo` category](#the-repo-category){% if currentVersion == "free-pro-team@latest" %}
- [The `repository_content_analysis` category](#the-repository_content_analysis-category)
- [The `repository_dependency_graph` category](#the-repository_dependency_graph-category){% endif %}{% if currentVersion != "github-ae@latest" %}
- [The `repository_vulnerability_alert` category](#the-repository_vulnerability_alert-category){% endif %}{% if currentVersion == "free-pro-team@latest" %}
- [The `sponsors` category](#the-sponsors-category){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- [The `team` category](#the-team-category){% endif %}
- [The `team_discussions` category](#the-team_discussions-category)

{% if currentVersion == "free-pro-team@latest" %}

##### The `account` category

| 동작                            | 설명                                                                                                                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `billing_plan_change`         | Triggered when an organization's [billing cycle](/articles/changing-the-duration-of-your-billing-cycle) changes.                                                              |
| `plan_change`                 | Triggered when an organization's [subscription](/articles/about-billing-for-github-accounts) changes.                                                                         |
| `pending_plan_change`         | Triggered when an organization owner or billing manager [cancels or downgrades a paid subscription](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/). |
| `pending_subscription_change` | Triggered when a [{% data variables.product.prodname_marketplace %} free trial starts or expires](/articles/about-billing-for-github-marketplace/).                           |

##### The `billing` category

| 동작                    | 설명                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `change_billing_type` | Triggered when your organization [changes how it pays for {% data variables.product.prodname_dotcom %}](/articles/adding-or-editing-a-payment-method). |
| `change_email`        | Triggered when your organization's [billing email address](/articles/setting-your-billing-email) changes.                                              |

{% endif %}

##### The `discussion_post` category

| 동작        | 설명                                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `업데이트`    | Triggered when [a team discussion post is edited](/articles/managing-disruptive-comments/#editing-a-comment).   |
| `destroy` | Triggered when [a team discussion post is deleted](/articles/managing-disruptive-comments/#deleting-a-comment). |

##### The `discussion_post_reply` category

| 동작        | 설명                                                                                                                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `업데이트`    | Triggered when [a reply to a team discussion post is edited](/articles/managing-disruptive-comments/#editing-a-comment).   |
| `destroy` | Triggered when [a reply to a team discussion post is deleted](/articles/managing-disruptive-comments/#deleting-a-comment). |

##### The `hook` category

| 동작               | 설명                                                                                                             |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `create`         | Triggered when [a new hook was added](/articles/creating-webhooks) to a repository owned by your organization. |
| `config_changed` | Triggered when an existing hook has its configuration altered.                                                 |
| `destroy`        | Triggered when an existing hook was removed from a repository.                                                 |
| `events_changed` | Triggered when the events on a hook have been altered.                                                         |

##### The `integration_installation_request` category

| 동작       | 설명                                                                                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Triggered when an organization member requests that an organization owner install an integration for use in the organization.                                                                       |
| `close`  | Triggered when a request to install an integration for use in an organization is either approved or denied by an organization owner, or canceled by the organization member who opened the request. |

##### The `issue` category

| 동작        | 설명                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `destroy` | Triggered when an organization owner or someone with admin permissions in a repository deletes an issue from an organization-owned repository. |

{% if currentVersion == "free-pro-team@latest" %}

##### The `marketplace_agreement_signature` category

| 동작       | 설명                                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------- |
| `create` | Triggered when you sign the {% data variables.product.prodname_marketplace %} Developer Agreement. |

##### The `marketplace_listing` category

| 동작        | 설명                                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| `승인`      | Triggered when your listing is approved for inclusion in {% data variables.product.prodname_marketplace %}.     |
| `create`  | Triggered when you create a listing for your app in {% data variables.product.prodname_marketplace %}.          |
| `delist`  | Triggered when your listing is removed from {% data variables.product.prodname_marketplace %}.                  |
| `redraft` | Triggered when your listing is sent back to draft state.                                                        |
| `reject`  | Triggered when your listing is not accepted for inclusion in {% data variables.product.prodname_marketplace %}. |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

##### The `members_can_create_pages` category

For more information, see "[Restricting publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization)."

| 동작     | 설명                                                                                                                                                   |
|:------ |:---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `활성화`  | Triggered when an organization owner enables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization.  |
| `비활성화` | Triggered when an organization owner disables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |

{% endif %}

##### The `org` category

| 동작                                                                                                             | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |{% if currentVersion == "free-pro-team@latest"%}
| `audit_log_export`                                                                                             | Triggered when an organization admin [creates an export of the organization audit log](#exporting-the-audit-log). If the export included a query, the log will list the query used and the number of audit log entries matching that query.                                                                                                                                                                                                                                                                              |
| `block_user`                                                                                                   | Triggered when an organization owner [blocks a user from accessing the organization's repositories](/articles/blocking-a-user-from-your-organization).                                                                                                                                                                                                                                                                                                                                                                   |
| `cancel_invitation`                                                                                            | Triggered when an organization invitation has been revoked.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`                                                                                        | Triggered when a organization admin [creates a {% data variables.product.prodname_actions %} secret](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization).{% endif %}                                                                                                                                                                                                                                                                                                                    |{% if currentVersion == "free-pro-team@latest"%}
| `disable_oauth_app_restrictions`                                                                               | Triggered when an owner [disables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/disabling-oauth-app-access-restrictions-for-your-organization) for your organization.                                                                                                                                                                                                                                                                                                                 |
| `disable_saml`                                                                                                 | Triggered when an organization admin disables SAML single sign-on for an organization.{% endif %}
| `disable_member_team_creation_permission`                                                                      | Triggered when an organization owner limits team creation to owners. For more information, see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)." |{% if currentVersion != "github-ae@latest" %}
| `disable_two_factor_requirement`                                                                               | Triggered when an owner disables a two-factor authentication requirement for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable_oauth_app_restrictions`                                                                                | Triggered when an owner [enables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/enabling-oauth-app-access-restrictions-for-your-organization) for your organization.                                                                                                                                                                                                                                                                                                                   |
| `enable_saml`                                                                                                  | Triggered when an organization admin [enables SAML single sign-on](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) for an organization.{% endif %}
| `enable_member_team_creation_permission`                                                                       | Triggered when an organization owner allows members to create teams. For more information, see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)." |{% if currentVersion != "github-ae@latest" %}
| `enable_two_factor_requirement`                                                                                | Triggered when an owner requires two-factor authentication for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}
| `invite_member`                                                                                                | Triggered when [a new user was invited to join your organization](/articles/adding-organization-members-to-a-team).{% if currentVersion == "free-pro-team@latest" %}
| `oauth_app_access_approved`                                                                                    | Triggered when an owner [grants organization access to an {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization/).                                                                                                                                                                                                                                                                                                                                                     |
| `oauth_app_access_denied`                                                                                      | Triggered when an owner [disables a previously approved {% data variables.product.prodname_oauth_app %}'s access](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) to your organization.                                                                                                                                                                                                                                                                                             |
| `oauth_app_access_requested`                                                                                   | Triggered when an organization member requests that an owner grant an {% data variables.product.prodname_oauth_app %} access to your organization.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`                                                                                  | Triggered when an organization owner [registers a new self-hosted runner](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization).                                                                                                                                                                                                                                                                                                                                  |
| `remove_actions_secret`                                                                                        | Triggered when a organization admin removes a {% data variables.product.prodname_actions %} secret.{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `remove_billing_manager`                                                                                       | Triggered when an [owner removes a billing manager from an organization](/articles/removing-a-billing-manager-from-your-organization/) or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and a billing manager doesn't use 2FA or disables 2FA. |{% endif %}
| `remove_member`                                                                                                | Triggered when an [owner removes a member from an organization](/articles/removing-a-member-from-your-organization/){% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disables 2FA{% endif %}. Also triggered when an [organization member removes themselves](/articles/removing-yourself-from-an-organization/) from an organization. |
| `remove_outside_collaborator`                                                                                  | Triggered when an owner removes an outside collaborator from an organization{% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an outside collaborator does not use 2FA or disables 2FA{% endif %}. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_self_hosted_runner`                                                                                    | Triggered when an organization owner [removes a self-hosted runner](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).                                                                                                                                                                                                                                                                                                                                              |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `revoke_external_identity`                                                                                     | Triggered when an organization owner revokes a member's linked identity. For more information, see "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."                                                                                                                                                                                 |
| `revoke_sso_session`                                                                                           | Triggered when an organization owner revokes a member's SAML session. For more information, see "[Viewing and managing a member's SAML access to your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."                                                                                                                                                                                    |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `runner_group_created`                                                                                         | Triggered when an organization admin [creates a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).                                                                                                                                                                                                                                                                                                |
| `runner_group_removed`                                                                                         | Triggered when an organization admin removes a self-hosted runner group.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `runner_group_renamed`                                                                                         | Triggered when an organization admin renames a self-hosted runner group.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `runner_group_runners_added`                                                                                   | Triggered when an organization admin [adds a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).                                                                                                                                                                                                                                                                                                               |
| `runner_group_runners_removed`                                                                                 | Triggered when an organization admin removes a self-hosted runner from a group.                                                                                                                                                                                                                                                                                                                                                                                                                                          |{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `unblock_user`                                                                                                 | Triggered when an organization owner [unblocks a user from an organization](/articles/unblocking-a-user-from-your-organization).{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`                                                                                        | Triggered when a organization admin updates a {% data variables.product.prodname_actions %} secret.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `update_new_repository_default_branch_setting`                                                                 | Triggered when an owner changes the name of the default branch for new repositories in the organization. For more information, see "[Managing the default branch name for repositories in your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)."{% endif %}
| `update_default_repository_permission`                                                                         | Triggered when an owner changes the default repository permission level for organization members.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `update_member`                                                                                                | Triggered when an owner changes a person's role from owner to member or member to owner.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `update_member_repository_creation_permission`                                                                 | Triggered when an owner changes the create repository permission for organization members.{% if currentVersion == "free-pro-team@latest" %}
| `update_saml_provider_settings`                                                                                | Triggered when an organization's SAML provider settings are updated.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `update_terms_of_service`                                                                                      | Triggered when an organization changes between the Standard Terms of Service and the Corporate Terms of Service. For more information, see "[Upgrading to the Corporate Terms of Service](/articles/upgrading-to-the-corporate-terms-of-service)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### The `org_credential_authorization` category

| 동작             | 설명                                                                                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grant`        | Triggered when a member [authorizes credentials for use with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).                       |
| `deauthorized` | Triggered when a member [deauthorizes credentials for use with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).                     |
| `revoke`       | Triggered when an owner [revokes authorized credentials](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization). |

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
##### The `organization_label` category

| 동작        | 설명                                         |
| --------- | ------------------------------------------ |
| `create`  | Triggered when a default label is created. |
| `업데이트`    | Triggered when a default label is edited.  |
| `destroy` | Triggered when a default label is deleted. |

{% endif %}

##### The `oauth_application` category

| 동작              | 설명                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `create`        | Triggered when a new {% data variables.product.prodname_oauth_app %} is created.                                 |
| `destroy`       | Triggered when an existing {% data variables.product.prodname_oauth_app %} is deleted.                           |
| `reset_secret`  | Triggered when an {% data variables.product.prodname_oauth_app %}'s client secret is reset.                      |
| `revoke_tokens` | Triggered when an {% data variables.product.prodname_oauth_app %}'s user tokens are revoked.                     |
| `전송`            | Triggered when an existing {% data variables.product.prodname_oauth_app %} is transferred to a new organization. |

{% if currentVersion == "free-pro-team@latest" %}

##### The `payment_method` category

| 동작       | 설명                                                                                         |
| -------- | ------------------------------------------------------------------------------------------ |
| `clear`  | Triggered when a payment method on file is [removed](/articles/removing-a-payment-method). |
| `create` | Triggered when a new payment method is added, such as a new credit card or PayPal account. |
| `업데이트`   | Triggered when an existing payment method is updated.                                      |

{% endif %}

##### The `profile_picture` category
| 동작   | 설명                                                                    |
| ---- | --------------------------------------------------------------------- |
| 업데이트 | Triggered when you set or update your organization's profile picture. |

##### The `project` category

| 동작                       | 설명                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create`                 | Triggered when a project board is created.                                                                                                       |
| `link`                   | Triggered when a repository is linked to a project board.                                                                                        |
| `rename`                 | Triggered when a project board is renamed.                                                                                                       |
| `업데이트`                   | Triggered when a project board is updated.                                                                                                       |
| `delete`                 | Triggered when a project board is deleted.                                                                                                       |
| `unlink`                 | Triggered when a repository is unlinked from a project board.                                                                                    |
| `update_org_permission`  | Triggered when the base-level permission for all organization members is changed or removed.                                                     |
| `update_team_permission` | Triggered when a team's project board permission level is changed or when a team is added or removed from a project board.                       |
| `update_user_permission` | Triggered when an organization member or outside collaborator is added to or removed from a project board or has their permission level changed. |

##### The `protected_branch` category

| 동작                                                    | 설명                                                                                                                                                                                                                                     |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                                              | Triggered when branch protection is enabled on a branch.                                                                                                                                                                               |
| `destroy`                                             | Triggered when branch protection is disabled on a branch.                                                                                                                                                                              |
| `update_admin_enforced`                               | Triggered when branch protection is enforced for repository administrators.                                                                                                                                                            |
| `update_require_code_owner_review`                    | Triggered when enforcement of required Code Owner review is updated on a branch.                                                                                                                                                       |
| `dismiss_stale_reviews`                               | Triggered when enforcement of dismissing stale pull requests is updated on a branch.                                                                                                                                                   |
| `update_signature_requirement_enforcement_level`      | Triggered when enforcement of required commit signing is updated on a branch.                                                                                                                                                          |
| `update_pull_request_reviews_enforcement_level`       | Triggered when enforcement of required pull request reviews is updated on a branch.                                                                                                                                                    |
| `update_required_status_checks_enforcement_level`     | Triggered when enforcement of required status checks is updated on a branch.                                                                                                                                                           |
| `update_strict_required_status_checks_policy`         | Triggered when the requirement for a branch to be up to date before merging is changed.                                                                                                                                                |
| `rejected_ref_update`                                 | Triggered when a branch update attempt is rejected.                                                                                                                                                                                    |
| `policy_override`                                     | Triggered when a branch protection requirement is overridden by a repository administrator.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| `update_allow_force_pushes_enforcement_level`         | Triggered when force pushes are enabled or disabled for a protected branch.                                                                                                                                                            |
| `update_allow_deletions_enforcement_level`            | Triggered when branch deletion is enabled or disabled for a protected branch.                                                                                                                                                          |
| `update_linear_history_requirement_enforcement_level` | Triggered when required linear commit history is enabled or disabled for a protected branch.                                                                                                                                           |
{% endif %}

##### The `repo` category

| 동작                                    | 설명                                                                                                                                                                                                                                       |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `액세스`                                 | Triggered when a repository owned by an organization is [switched from "private" to "public"](/articles/making-a-private-repository-public) (or vice versa).                                                                             |
| `add_member`                          | Triggered when a user accepts an [invitation to have collaboration access to a repository](/articles/inviting-collaborators-to-a-personal-repository).                                                                                   |
| `add_topic`                           | Triggered when a repository admin [adds a topic](/articles/classifying-your-repository-with-topics) to a repository.                                                                                                                     |
| `archived`                            | Triggered when a repository admin [archives a repository](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `config.disable_anonymous_git_access` | Triggered when [anonymous Git read access is disabled](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.                                                       |
| `config.enable_anonymous_git_access`  | Triggered when [anonymous Git read access is enabled](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.                                                        |
| `config.lock_anonymous_git_access`    | Triggered when a repository's [anonymous Git read access setting is locked](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).                                     |
| `config.unlock_anonymous_git_access`  | Triggered when a repository's [anonymous Git read access setting is unlocked](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create`                              | Triggered when [a new repository is created](/articles/creating-a-new-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret`               | Triggered when a repository admin [creates a {% data variables.product.prodname_actions %} secret](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).{% endif %}
| `destroy`                             | Triggered when [a repository is deleted](/articles/deleting-a-repository).{% if currentVersion == "free-pro-team@latest" %}
| `비활성화`                                | Triggered when a repository is disabled (e.g., for [insufficient funds](/articles/unlocking-a-locked-account)).{% endif %}
| `활성화`                                 | Triggered when a repository is reenabled.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_actions_secret`               | Triggered when a repository admin removes a {% data variables.product.prodname_actions %} secret.{% endif %}
| `remove_member`                       | Triggered when a user is [removed from a repository as a collaborator](/articles/removing-a-collaborator-from-a-personal-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner`         | Triggered when a repository admin [registers a new self-hosted runner](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).                                                        |
| `remove_self_hosted_runner`           | Triggered when a repository admin [removes a self-hosted runner](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).                                                                    |{% endif %}
| `remove_topic`                        | Triggered when a repository admin removes a topic from a repository.                                                                                                                                                                     |
| `rename`                              | Triggered when [a repository is renamed](/articles/renaming-a-repository).                                                                                                                                                               |
| `전송`                                  | Triggered when [a repository is transferred](/articles/how-to-transfer-a-repository).                                                                                                                                                    |
| `transfer_start`                      | Triggered when a repository transfer is about to occur.                                                                                                                                                                                  |
| `unarchived`                          | Triggered when a repository admin unarchives a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret`               | Triggered when a repository admin updates a {% data variables.product.prodname_actions %} secret.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

##### The `repository_content_analysis` category

| 동작     | 설명                                                                                                                                                                                                                                                             |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `활성화`  | Triggered when an organization owner or person with admin access to the repository [enables data use settings for a private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository).  |
| `비활성화` | Triggered when an organization owner or person with admin access to the repository [disables data use settings for a private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository). |

##### The `repository_dependency_graph` category

| 동작     | 설명                                                                                                                                                                                                                                                   |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `활성화`  | Triggered when a repository owner or person with admin access to the repository [enables the dependency graph for a private repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository).  |
| `비활성화` | Triggered when a repository owner or person with admin access to the repository [disables the dependency graph for a private repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository). |

{% endif %}
{% if currentVersion != "github-ae@latest" %}
##### The `repository_vulnerability_alert` category

| 동작                                                                                                                                                                                                                                                                       | 설명                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                                                                                                                                                                                                                                                                 | Triggered when {% data variables.product.product_name %} creates a [{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert for a vulnerable dependency](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in a particular repository.      |
| `해결`                                                                                                                                                                                                                                                                     | Triggered when someone with write access to a repository [pushes changes to update and resolve a vulnerability](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) in a project dependency.                                                                                                                                                                                   |
| `해제`                                                                                                                                                                                                                                                                     | Triggered when an organization owner or person with admin access to the repository dismisses a                                                                                                                                                                                                                                                                                                                 |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert about a vulnerable dependency.{% if currentVersion == "free-pro-team@latest" %} |                                                                                                                                                                                                                                                                                                                                                                                                                |
| `authorized_users_teams`                                                                                                                                                                                                                                                 | Triggered when an organization owner or a member with admin permissions to the repository [updates the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %}](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-dependabot-alerts) for vulnerable dependencies in the repository.{% endif %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### The `sponsors` category

| 동작                                  | 설명                                                                                                                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| repo_funding_link_button_toggle | Triggered when you enable or disable a sponsor button in your repository (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)") |
| repo_funding_links_file_action  | Triggered when you change the FUNDING file in your repository (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)")            |
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
##### The `team` category

| 동작                   | 설명                                                                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`         | Triggered when a member of an organization is [added to a team](/articles/adding-organization-members-to-a-team).                       |
| `add_repository`     | Triggered when a team is given control of a repository.                                                                                 |
| `change_parent_team` | Triggered when a child team is created or [a child team's parent is changed](/articles/moving-a-team-in-your-organization-s-hierarchy). |
| `change_privacy`     | Triggered when a team's privacy level is changed.                                                                                       |
| `create`             | Triggered when a new team is created.                                                                                                   |
| `destroy`            | Triggered when a team is deleted from the organization.                                                                                 |
| `remove_member`      | Triggered when a member of an organization is [removed from a team](/articles/removing-organization-members-from-a-team).               |
| `remove_repository`  | Triggered when a repository is no longer under a team's control.                                                                        |
{% endif %}

##### The `team_discussions` category

| 동작     | 설명                                                                                                                                                                                                                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `비활성화` | Triggered when an organization owner disables team discussions for an organization. For more information, see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)." |
| `활성화`  | Triggered when an organization owner enables team discussions for an organization.                                                                                                                                              |

#### Search based on time of action

Use the `created` qualifier to filter actions in the audit log based on when they occurred. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %} For example:

  * `created:2014-07-08` finds all events that occurred on July 8th, 2014.
  * `created:>=2014-07-08` finds all events that occurred on or after July 8th, 2014.
  * `created:<=2014-07-08` finds all events that occurred on or before July 8th, 2014.
  * `created:2014-07-01..2014-07-31` finds all events that occurred in the month of July 2014.

The audit log contains data for the past 90 days, but you can use the `created` qualifier to search for events earlier than that.

#### Search based on location

Using the qualifier `country`, you can filter actions in the audit log based on the originating country. You can use a country's two-letter short code or its full name. Keep in mind that countries with spaces in their name will need to be wrapped in quotation marks. 예시:

  * `country:de` finds all events that occurred in Germany.
  * `country:Mexico` finds all events that occurred in Mexico.
  * `country:"United States"` all finds events that occurred in the United States.

{% if currentVersion == "free-pro-team@latest" %}
### Exporting the audit log

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

### Using the Audit log API

{% note %}

**Note**: The Audit log API is available for organizations using {% data variables.product.prodname_enterprise %}. {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

To ensure a secure IP and maintain compliance for your organization, you can use the Audit log API to keep copies of your audit log data and monitor:
* Access to your organization or repository settings.
* Changes in permissions.
* Added or removed users in an organization, repository, or team.
* Users being promoted to admin.
* Changes to permissions of a GitHub App.

The GraphQL response can include data for up to 90 to 120 days.

For example, you can make a GraphQL request to see all the new organization members added to your organization. For more information, see the "[GraphQL API Audit Log](/graphql/reference/interfaces#auditentry/)."

### 더 읽을거리

- "[Keeping your organization secure](/articles/keeping-your-organization-secure)"
