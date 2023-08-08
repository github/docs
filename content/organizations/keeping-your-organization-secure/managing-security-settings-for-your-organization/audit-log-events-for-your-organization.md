---
title: Audit log events for your organization
intro: Learn about audit log events recorded for your organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Audit log events
---


{% note %}

**Note:** This article contains the events that may appear in your organization's audit log. For the events that can appear in a user account's security log{% ifversion ghec or ghes or ghae %} or the audit log for an enterprise{% endif %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events){% ifversion ghec or ghes or ghae %}" and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."{% else %}."{% endif %}

{% endnote %}

{% ifversion fpt or ghec %}

## `account` category actions

| Action | Description
|------------------|-------------------
| `billing_plan_change` | Triggered when an organization's [billing cycle](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle) changes.
| `plan_change` | Triggered when an organization's [plan](/billing/managing-the-plan-for-your-github-account/about-billing-for-plans) changes.
| `pending_plan_change` | Triggered when an organization owner or billing manager [cancels or downgrades a paid subscription](/billing/managing-the-plan-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process).
| `pending_subscription_change` | Triggered when a [{% data variables.product.prodname_marketplace %} free trial starts or expires](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace).
{% endif %}

{% ifversion fpt or ghec %}

## `advisory_credit` category actions

| Action | Description
|------------------|-------------------
| `accept` | Triggered when someone accepts credit for a security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/editing-a-repository-security-advisory)."
| `create` | Triggered when the administrator of a security advisory adds someone to the credit section.
| `decline` | Triggered when someone declines credit for a security advisory.
| `destroy` | Triggered when the administrator of a security advisory removes someone from the credit section.
{% endif %}

{% ifversion pat-v2 %}

## `auto_approve_personal_access_token_requests` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when the organization must approve {% data variables.product.pat_v2 %}s before the tokens can access organization resources. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."
| `enable` | Triggered when {% data variables.product.pat_v2 %}s can access organization resources without prior approval. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."

{% endif %}

{% ifversion fpt or ghec %}

## `billing` category actions

| Action | Description
|------------------|-------------------
| `change_billing_type` | Triggered when your organization [changes how it pays for {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method).
| `change_email` | Triggered when your organization's [billing email address](/billing/managing-your-github-billing-settings/setting-your-billing-email) changes.
{% endif %}

## `business` category actions

| Action | Description
|------------------|-------------------{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Triggered when the setting for requiring approvals for workflows from public forks is changed for an enterprise. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)."{% endif %}
| `set_actions_retention_limit` | Triggered when the retention period for {% data variables.product.prodname_actions %} artifacts and logs is changed for an enterprise. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Triggered when the policy for workflows on  private repository forks is changed. For more information, see "{% ifversion fpt or ghec%}[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Enabling workflows for private repository forks](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}."{% endif %}

{% ifversion fpt or ghec %}

## `codespaces` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a user [creates a codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).
| `resume` | Triggered when a user resumes a suspended codespace.
| `delete` | Triggered when a user [deletes a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).
| `create_an_org_secret` | Triggered when a user creates an organization-level [secret for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces#about-encrypted-secrets-for-codespaces)
| `update_an_org_secret` | Triggered when a user updates an organization-level [secret for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces#about-encrypted-secrets-for-codespaces).
| `remove_an_org_secret` | Triggered when a user removes an organization-level [secret for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces#about-encrypted-secrets-for-codespaces).
| `manage_access_and_security` | Triggered when a user updates [which repositories a codespace can access](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).
{% endif %}

## `dependabot_alerts` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories.

## `dependabot_alerts_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories.

{% ifversion fpt or ghec or ghes %}

## `dependabot_security_updates` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories.

## `dependabot_security_updates_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories.
{% endif %}

{% ifversion fpt or ghec %}

## `dependency_graph` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables the dependency graph for all existing repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables the dependency graph for all existing repositories.

## `dependency_graph_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables the dependency graph for all new repositories. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables the dependency graph for all new repositories.
{% endif %}

{% ifversion team-discussions %}

## `discussion_post` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when [a team discussion post is edited](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
| `destroy` | Triggered when [a team discussion post is deleted](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).

## `discussion_post_reply` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when [a reply to a team discussion post is edited](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
| `destroy` | Triggered when [a reply to a team discussion post is deleted](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
{% endif %}

{% ifversion fpt or ghes or ghec %}

## `enterprise` category actions

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}

## `environment` category actions

| Action | Description
|------------------|-------------------
| `create_actions_secret` | Triggered when a secret is created in an environment. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)."
| `delete` | Triggered when an environment is deleted. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)."
| `remove_actions_secret` |  Triggered when a secret is removed from an environment. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)."
| `update_actions_secret` | Triggered when a secret in an environment is updated. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)."
{% endif %}

{% ifversion ghae %}

## `external_group` category actions

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}

## `external_identity` category actions

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}

## `git` category actions

{% note %}

**Note:** To access Git events in the audit log, you must use the audit log REST API. The audit log REST API is available for users of {% data variables.product.prodname_ghe_cloud %} only. For more information, see "[AUTOTITLE](/rest/orgs#get-the-audit-log-for-an-organization)."

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Action  | Description
|---------|----------------------------
| `clone` | Triggered when a repository is cloned.
| `fetch` | Triggered when changes are fetched from a repository.
| `push`  | Triggered when changes are pushed to a repository.

{% endif %}

## `hook` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when [a new hook was added](/get-started/exploring-integrations/about-webhooks) to a repository owned by your organization.
| `config_changed` | Triggered when an existing hook has its configuration altered.
| `destroy` | Triggered when an existing hook was removed from a repository.
| `events_changed` | Triggered when the events on a hook have been altered.

## `integration_installation` category actions

| Action | Description
|--------|-------------
| `contact_email_changed` | A contact email for an integration was changed.
| `create` | An integration was installed.
| `destroy` | An integration was uninstalled.
| `repositories_added` | Repositories were added to an integration.
| `repositories_removed` | Repositories were removed from an integration.
{%- ifversion fpt or ghec %}
| `suspend` | An integration was suspended.
| `unsuspend` | An integration was unsuspended.
{%- endif %}
| `version_updated` | Permissions for an integration were updated.

## `integration_installation_request` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when an organization member requests that an organization owner install an integration for use in the organization.
| `close` | Triggered when a request to install an integration for use in an organization is either approved or denied by an organization owner, or canceled by the organization member who opened the request.

{% ifversion ghec or ghae %}

## `ip_allow_list` category actions

| Action | Description
|------------------|-------------------
| `enable` | Triggered when an IP allow list was enabled for an organization.
| `disable` | Triggered when an IP allow list was disabled for an organization.
| `enable_for_installed_apps` | Triggered when an IP allow list was enabled for installed {% data variables.product.prodname_github_apps %}.
| `disable_for_installed_apps` | Triggered when an IP allow list was disabled for installed {% data variables.product.prodname_github_apps %}.

## `ip_allow_list_entry` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when an IP address was added to an IP allow list.
| `update` | Triggered when an IP address or its description was changed.
| `destroy` | Triggered when an IP address was deleted from an IP allow list.
{% endif %}

## `issue` category actions

| Action | Description
|------------------|-------------------
| `destroy`        | Triggered when an organization owner or someone with admin permissions in a repository deletes an issue from an organization-owned repository.

{% ifversion fpt or ghec %}

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

{% endif %}

{% ifversion fpt or ghes or ghec %}

## `members_can_create_pages` category actions

For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

| Action | Description |
| :- | :- |
| `enable` | Triggered when an organization owner enables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |
| `disable` | Triggered when an organization owner disables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |

{% endif %}

## `oauth_application` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a new {% data variables.product.prodname_oauth_app %} is created.
| `destroy` | Triggered when an existing {% data variables.product.prodname_oauth_app %} is deleted.
| `reset_secret` | Triggered when an {% data variables.product.prodname_oauth_app %}'s client secret is reset.
| `revoke_tokens` | Triggered when an {% data variables.product.prodname_oauth_app %}'s user tokens are revoked.
| `transfer` |  Triggered when an existing {% data variables.product.prodname_oauth_app %} is transferred to a new organization.

## `org` category actions

| Action | Description
|------------------|-------------------
| `add_member` | Triggered when a user joins an organization.
| `advanced_security_policy_selected_member_disabled` | Triggered when an enterprise owner prevents {% data variables.product.prodname_GH_advanced_security %} features from being enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Triggered when an enterprise owner allows {% data variables.product.prodname_GH_advanced_security %} features to be enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | Triggered when an organization admin [creates an export of the organization audit log](#exporting-the-audit-log). If the export included a query, the log will list the query used and the number of audit log entries matching that query.
| `block_user` | Triggered when an organization owner [blocks a user from accessing the organization's repositories](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Triggered when an organization invitation has been revoked. {% endif %}{% ifversion org-enable-code-scanning %}
| `codeql_disabled` | Triggered when an organization owner or person with admin access to the organization disables {% data variables.product.prodname_code_scanning %} for repositories that use default setup for {% data variables.product.prodname_codeql %}.
| `codeql_enabled` | Triggered when an organization owner or person with admin access to the organization enables {% data variables.product.prodname_code_scanning %} for repositories that are eligible to use default setup for {% data variables.product.prodname_codeql %}. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is created for an organization. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | Triggered when an owner [disables {% data variables.product.prodname_oauth_app %} access restrictions](/organizations/managing-oauth-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization) for your organization.{% ifversion ghec %}
| `disable_saml` | Triggered when an organization admin disables SAML single sign-on for an organization.{% endif %}{% endif %}{% ifversion display-ip-org-audit-log %}
| `disable_source_ip_disclosure` | Triggered when an organization owner disables the display of IP addresses in the audit log for the organization. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/displaying-ip-addresses-in-the-audit-log-for-your-organization)." | {% endif %}
| `disable_member_team_creation_permission` | Triggered when an organization owner limits team creation to owners. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)." |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Triggered when an owner disables a two-factor authentication requirement for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | Triggered when an owner [enables {% data variables.product.prodname_oauth_app %} access restrictions](/organizations/managing-oauth-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization) for your organization.{% ifversion ghec %}
| `enable_saml` | Triggered when an organization admin [enables SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) for an organization.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | Triggered when an organization owner allows members to create teams. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)." |{% ifversion display-ip-org-audit-log %}
| `enable_source_ip_disclosure` | Triggered when an organization owner enables the display of IP addresses in the audit log for the organization. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/displaying-ip-addresses-in-the-audit-log-for-your-organization)." | {% endif %}{% ifversion not ghae %}
| `enable_two_factor_requirement` | Triggered when an owner requires two-factor authentication for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | Triggered when [a new user was invited to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
| `oauth_app_access_approved` | Triggered when an owner [grants organization access to an {% data variables.product.prodname_oauth_app %}](/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `oauth_app_access_denied` | Triggered when an owner [disables a previously approved {% data variables.product.prodname_oauth_app %}'s access](/organizations/managing-oauth-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) to your organization.
| `oauth_app_access_requested` | Triggered when an organization member requests that an owner grant an {% data variables.product.prodname_oauth_app %} access to your organization.{% endif %}
{%- ifversion ghec %}
| `org.transfer` | Triggered when an organization is transferred between enterprise accounts. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)."
{%- endif %}
| `register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)."
| `remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% ifversion fpt or ghec %}
| `remove_billing_manager` | Triggered when an [owner removes a billing manager from an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization) or when [two-factor authentication is required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and a billing manager doesn't use 2FA or disables 2FA. |{% endif %}
| `remove_member` | Triggered when an [owner removes a member from an organization](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} or when [two-factor authentication is required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disables 2FA{% endif %}. Also triggered when an [organization member removes themselves](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) from an organization.|
| `remove_outside_collaborator` | Triggered when an owner removes an outside collaborator from an organization{% ifversion not ghae %} or when [two-factor authentication is required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and an outside collaborator does not use 2FA or disables 2FA{% endif %}. |
| `remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)." {% ifversion ghec %}
| `revoke_external_identity` | Triggered when an organization owner revokes a member's linked identity. For more information, see "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."
| `revoke_sso_session` | Triggered when an organization owner revokes a member's SAML session. For more information, see "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)." {% endif %}
{%- ifversion required-workflows %}
| `required_workflow_create` | Triggered when a required workflow is created. For more information, see "[AUTOTITLE](/actions/using-workflows/required-workflows)."
| `required_workflow_update` | Triggered when a required workflow is updated. For more information, see "[AUTOTITLE](/actions/using-workflows/required-workflows)."
| `required_workflow_delete` | Triggered when a required workflow is deleted. For more information, see "[AUTOTITLE](/actions/using-workflows/required-workflows)."
{%- endif %}
| `runner_group_created` | Triggered when a self-hosted runner group is created. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."
| `runner_group_removed` | Triggered when a self-hosted runner group is removed. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."
| `runner_group_updated` | Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `runner_group_runners_added` | Triggered when a self-hosted runner is added to a group. For more information, see [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runner_removed` |  Triggered when the REST API is used to remove a self-hosted runner from a group. For more information, see "[AUTOTITLE](/rest/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."
| `runner_group_runners_updated`|  Triggered when a runner group's list of members is updated. For more information, see "[AUTOTITLE](/rest/actions#set-self-hosted-runners-in-a-group-for-an-organization)."{% ifversion secret-scanning-custom-pattern-push-protection-audit %}
| `secret_scanning_custom_pattern_push_protection_disabled`| Triggered when an organization owner or person with admin access disables push protection for a custom pattern for {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)."
| `secret_scanning_custom_pattern_push_protection_enabled`| Triggered when an organization owner or person with admin access enables push protection for a custom pattern for {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)."{% endif %}
{%- ifversion code-security-audit-log-events %}
| `secret_scanning_push_protection_custom_message_disabled` | Triggered when an organization owner or admin disables the custom message triggered by an attempted push to a push-protected repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)."
| `secret_scanning_push_protection_custom_message_enabled` | Triggered when an organization owner or admin enables the custom message triggered by an attempted push to a push-protected repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)."
| `secret_scanning_push_protection_custom_message_updated` | Triggered when an organization owner or admin updates the custom message triggered by an attempted push to a push-protected repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)."
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `secret_scanning_push_protection_disable` | Triggered when an organization owner or person with admin access to the organization disables push protection for {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
| `secret_scanning_push_protection_enable` | Triggered when an organization owner or person with admin access to the organization enables push protection for {% data variables.product.prodname_secret_scanning %}.{%- endif %}
| `self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Triggered when the setting for requiring approvals for workflows from public forks is changed for an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)."{% endif %}
| `set_actions_retention_limit` | Triggered when the retention period for {% data variables.product.prodname_actions %} artifacts and logs is changed. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Triggered when the policy for workflows on  private repository forks is changed. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)."{% endif %}{% ifversion fpt or ghec %}
| `unblock_user` | Triggered when an organization owner [unblocks a user from an organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %}{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` |Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}
| `update_new_repository_default_branch_setting` | Triggered when an owner changes the name of the default branch for new repositories in the organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."
| `update_default_repository_permission` | Triggered when an owner changes the default repository permission level for organization members.
| `update_member` | Triggered when an owner changes a person's role from owner to member or member to owner.
| `update_member_repository_creation_permission` | Triggered when an owner changes the create repository permission for organization members.{% ifversion fpt or ghec %}
| `update_saml_provider_settings` | Triggered when an organization's SAML provider settings are updated.
| `update_terms_of_service` | Triggered when an organization changes between the Standard Terms of Service and the Corporate Terms of Service. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)."{% endif %}

{% ifversion ghec %}

## `org_credential_authorization` category actions

| Action | Description
|------------------|-------------------
| `grant` | Triggered when a member [authorizes credentials for use with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on).
| `deauthorized` | Triggered when a member [deauthorizes credentials for use with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on).
| `revoke` | Triggered when an owner [revokes authorized credentials](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

## `org_secret_scanning_custom_pattern` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a custom pattern is created for {% data variables.product.prodname_secret_scanning %} in an organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)."
| `delete` | Triggered when a custom pattern is removed from {% data variables.product.prodname_secret_scanning %} in an organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)."
| `publish` | Triggered when changes to a custom pattern are published for {% data variables.product.prodname_secret_scanning %} in an organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)."
| `update` | Triggered when changes to a custom pattern are saved and a dry run is executed for {% data variables.product.prodname_secret_scanning %} in an organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)."

{% endif %}

## `organization_default_label` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a default label is created.
| `update` | Triggered when a default label is edited.
| `destroy` | Triggered when a default label is deleted.

{%- ifversion not ghes %}

## `packages` category actions

| Action | Description |
|--------|-------------|
| `package_deleted` | Triggered when an entire package is deleted. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_version_published` | Triggered when a package version is published. |
| `package_version_deleted` | Triggered when a specific package version is deleted. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_version_published` | A specific package version was published or republished to a package.
{%- endif %}

{% ifversion fpt or ghec %}

## `payment_method` category actions

| Action | Description
|------------------|-------------------
| `create` |  Triggered when a new payment method is added, such as a new credit card or PayPal account.
| `update` | Triggered when an existing payment method is updated.

{% endif %}

{% ifversion pat-v2 %}

## `personal_access_token` category actions

| Action | Description
|------------------|-------------------
| `access_granted` | Triggered when a {% data variables.product.pat_v2 %} is granted access to organization resources. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)."
| `access_revoked` | Triggered when access to organization resources by a {% data variables.product.pat_v2 %} is revoked. The token can still read public organization resources. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)."
| `request_cancelled` | Triggered when a member of the organization cancels a request for their {% data variables.product.pat_v2 %} to access organization resources.
| `request_created` | Triggered when a member of the organization creates a {% data variables.product.pat_v2 %} to access organization resources and the organization requires approval before a {% data variables.product.pat_v2 %} can access organization resources. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)."
| `request_denied` | Triggered when a request for a {% data variables.product.pat_v2 %} to access organization resources is denied. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)."

{% endif %}

## `profile_picture` category actions

| Action | Description
|------------------|-------------------
| update | Triggered when you set or update your organization's profile picture.

## `project` category actions

| Action | Description
|--------------------|---------------------
| `create` | Triggered when a project board is created.
| `link` | Triggered when a repository is linked to a project board.
| `rename` | Triggered when a project board is renamed.
| `update` | Triggered when a project board is updated.
| `delete` | Triggered when a project board is deleted.
| `unlink` | Triggered when a repository is unlinked from a project board.
| `update_org_permission` | Triggered when the base-level permission for all organization members is changed or removed. |
| `update_team_permission` | Triggered when a team's project board permission level is changed or when a team is added or removed from a project board. |
| `update_user_permission` | Triggered when an organization member or outside collaborator is added to or removed from a project board or has their permission level changed.|

## `protected_branch` category actions

| Action | Description
|--------------------|---------------------
| `create` | Triggered when branch protection is enabled on a branch.
| `destroy` | Triggered when branch protection is disabled on a branch.
| `update_admin_enforced` | Triggered when branch protection is enforced for repository administrators.
| `update_require_code_owner_review` | Triggered when enforcement of required Code Owner review is updated on a branch.
| `dismiss_stale_reviews` | Triggered when enforcement of dismissing stale pull requests is updated on a branch.
| `update_signature_requirement_enforcement_level` | Triggered when enforcement of required commit signing is updated on a branch.
| `update_pull_request_reviews_enforcement_level` | Triggered when enforcement of required pull request reviews is updated on a branch. Can be one of `0`(deactivated), `1`(non-admins), `2`(everyone).
| `update_required_status_checks_enforcement_level` | Triggered when enforcement of required status checks is updated on a branch.
| `update_strict_required_status_checks_policy` | Triggered when the requirement for a branch to be up to date before merging is changed.
| `rejected_ref_update` | Triggered when a branch update attempt is rejected.
| `policy_override` | Triggered when a branch protection requirement is overridden by a repository administrator.
| `update_allow_force_pushes_enforcement_level` | Triggered when force pushes are enabled or disabled for a protected branch.
| `update_allow_deletions_enforcement_level` | Triggered when branch deletion is enabled or disabled for a protected branch.
| `update_linear_history_requirement_enforcement_level` | Triggered when required linear commit history is enabled or disabled for a protected branch.

## `pull_request` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a pull request is created.
| `close` | Triggered when a pull request is closed without being merged.
| `reopen` | Triggered when a pull request is reopened after previously being closed.
| `merge` | Triggered when a pull request is merged.
| `indirect_merge` | Triggered when a pull request is considered merged because its commits were merged into the target branch.
| `ready_for_review` | Triggered when a pull request is marked as ready for review.
| `converted_to_draft` | Triggered when a pull request is converted to a draft.
| `create_review_request` | Triggered when a review is requested.
| `remove_review_request` | Triggered when a review request is removed.

## `pull_request_review` category actions

| Action | Description
|------------------|-------------------
| `submit` | Triggered when a review is submitted.
| `dismiss` | Triggered when a review is dismissed.
| `delete` | Triggered when a review is deleted.

## `pull_request_review_comment` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a review comment is added.
| `update` | Triggered when a review comment is changed.
| `delete` | Triggered when a review comment is deleted.

## `repo` category actions

| Action | Description
|------------------|-------------------
| `access` | Triggered when a user [changes the visibility](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) of a repository in the organization.
| `actions_enabled` | Triggered when {% data variables.product.prodname_actions %} is enabled for a repository. Can be viewed using the UI. This event is not included when you access the audit log using the REST API. For more information, see "[Using the audit log API](#using-the-audit-log-api)."
| `add_member` | Triggered when a user accepts an [invitation to have collaboration access to a repository](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Triggered when a repository admin [adds a topic](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to a repository.
| `advanced_security_disabled` | Triggered when a repository administrator disables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."
| `advanced_security_enabled` | Triggered when a repository administrator enables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).".
| `archived` | Triggered when a repository admin [archives a repository](/repositories/archiving-a-github-repository/archiving-repositories).
{%- ifversion remove-code-scanning-configurations %}
| `code_scanning_configuration_for_branch_deleted` | Triggered when a {% data variables.product.prodname_code_scanning %} configuration for a branch of a repository is deleted. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#removing-stale-configurations-and-alerts-from-a-branch)."
{%- endif %}
{%- ifversion ghes %}
| `config.disable_anonymous_git_access` | Triggered when [anonymous Git read access is disabled](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.enable_anonymous_git_access` | Triggered when [anonymous Git read access is enabled](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.lock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is locked](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).
| `config.unlock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is unlocked](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).{% endif %}
| `create` | Triggered when [a new repository is created](/repositories/creating-and-managing-repositories/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |Triggered when a {% data variables.product.prodname_actions %} secret is created for a repository. For more information, see "[AUTOTITLE](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."{% endif %}
| `destroy` | Triggered when [a repository is deleted](/repositories/creating-and-managing-repositories/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Triggered when a repository is disabled (e.g., for [insufficient funds](/billing/managing-your-github-billing-settings/unlocking-a-locked-account)).{% endif %}
| `download_zip` | A source code archive of a repository was downloaded as a ZIP file.  For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/downloading-source-code-archives)."
| `enable` | Triggered when a repository is re-enabled.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}
| `remove_member` | Triggered when a user is [removed from a repository as a collaborator](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/removing-a-collaborator-from-a-personal-repository).
| `register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."
| `remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."
| `remove_topic` | Triggered when a repository admin removes a topic from a repository.
| `rename` | Triggered when [a repository is renamed](/repositories/creating-and-managing-repositories/renaming-a-repository).
| `self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Triggered when the setting for requiring approvals for workflows from public forks is changed. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)."{% endif %}
| `set_actions_retention_limit` | Triggered when the retention period for {% data variables.product.prodname_actions %} artifacts and logs is changed. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Triggered when the policy for workflows on private repository forks is changed. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)."{% endif %}
| `staff_unlock` | Triggered when an enterprise owner or {% data variables.contact.github_support %} (with permission from a repository administrator) temporarily unlocked the repository. The visibility of the repository isn't changed.
| `transfer` | Triggered when [a repository is transferred](/repositories/creating-and-managing-repositories/transferring-a-repository).
| `transfer_start` | Triggered when a repository transfer is about to occur.
| `unarchived` | Triggered when a repository admin unarchives a repository.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}

{% ifversion fpt or ghec %}

## `repository_advisory` category actions

| Action | Description
|------------------|-------------------
| `close` | Triggered when someone closes a security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)."
| `cve_request` | Triggered when someone requests a CVE (Common Vulnerabilities and Exposures) number from {% data variables.product.prodname_dotcom %} for a draft security advisory.
| `github_broadcast` | Triggered when {% data variables.product.prodname_dotcom %} makes a security advisory public in the {% data variables.product.prodname_advisory_database %}.
| `github_withdraw` | Triggered when {% data variables.product.prodname_dotcom %} withdraws a security advisory that was published in error.
| `open` | Triggered when someone opens a draft security advisory.
| `publish` | Triggered when someone publishes a security advisory.
| `reopen` | Triggered when someone reopens as draft security advisory.
| `update` | Triggered when someone edits a draft or published security advisory.

## `repository_content_analysis` category actions

| Action | Description
|------------------|-------------------
| `enable` | Triggered when an organization owner or person with admin access to the repository enables data use settings for a private repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories)."
| `disable` | Triggered when an organization owner or person with admin access to the repository disables data use settings for a private repository.

{% endif %}{% ifversion fpt or ghec %}

## `repository_dependency_graph` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository.

{% endif %}

## `repository_invitation` category actions

| Action | Description
|--------|-------------
| `repository_invitation.accept` | An invitation to join a repository was accepted.
| `repository_invitation.cancel` | An invitation to join a repository was canceled.
| `repository_invitation.create` | An invitation to join a repository was sent.
| `repository_invitation.reject` | An invitation to join a repository was declined.

{% ifversion ghec or ghes or ghae %}

## `repository_secret_scanning` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables {% data variables.product.prodname_secret_scanning %} for a repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables {% data variables.product.prodname_secret_scanning %} for a repository.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

## `repository_secret_scanning_custom_pattern` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a custom pattern is created for {% data variables.product.prodname_secret_scanning %} in a repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."
| `delete` | Triggered when a custom pattern is removed from {% data variables.product.prodname_secret_scanning %} in a repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)."
| `publish` | Triggered when a custom pattern is published for {% data variables.product.prodname_secret_scanning %} in a repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."
| `update` | Triggered when changes to a custom pattern are saved and a dry run is executed for {% data variables.product.prodname_secret_scanning %} in a repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)."

{% endif %}{% ifversion secret-scanning-custom-pattern-push-protection-audit %}

## `repository_secret_scanning_custom_pattern_push_protection` category actions

| Action | Description
|------------------|-------------------
| `enable` | Triggered when a repository owner or person with admin access to a repository enables push protection for a custom pattern for {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."
| `disable` | Triggered when a repository owner or person with admin access to a repository disables push protection for a custom pattern for {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

## `repository_secret_scanning_push_protection` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables {% data variables.product.prodname_secret_scanning %} push protection for a repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables {% data variables.product.prodname_secret_scanning %} push protection for a repository.

{% endif %}

## `repository_vulnerability_alert` category actions

| Action | Description
|------------------|-------------------{% ifversion dependabot-alert-rules-auto-dismissal-npm-dev-dependencies %}
| `auto_dismiss` | Triggered when a {% data variables.product.prodname_dependabot %} alert is automatically dismissed due to its metadata matching an enabled {% data variables.product.prodname_dependabot %} alert rule. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/using-alert-rules-to-prioritize-dependabot-alerts)."
| `auto_reopen` | Triggered when a previously auto-dismissed {% data variables.product.prodname_dependabot %} alert is reopened because its metadata no longer matches an enabled {% data variables.product.prodname_dependabot %} alert rule. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/using-alert-rules-to-prioritize-dependabot-alerts)."{% endif %}
| `create` | Triggered when {% data variables.product.product_name %} creates a {% data variables.product.prodname_dependabot %} alert for a repository that uses a vulnerable dependency. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
| `dismiss` | Triggered when an organization owner or person with admin{% ifversion dependabot-alerts-permissions-write-maintain %}, write, or maintain{% endif %} access to the repository dismisses a {% data variables.product.prodname_dependabot %} alert about a vulnerable dependency.
| `resolve` | Triggered when someone with write {% ifversion dependabot-alerts-permissions-write-maintain %}or maintain{% endif %} access to a repository pushes changes to update and resolve a vulnerability in a project dependency.
{% ifversion fpt or ghec %}

## `repository_vulnerability_alerts` category actions

| Action | Description
|------------------|-------------------
| `authorized_users_teams` | Triggered when an organization owner or a person with admin permissions to the repository updates the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %} for the repository. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
| `disable` | Triggered when a repository owner or person with admin access to the repository disables {% data variables.product.prodname_dependabot_alerts %}.
| `enable` | Triggered when a repository owner or person with admin access to the repository enables {% data variables.product.prodname_dependabot_alerts %}.

{% endif %}{% ifversion custom-repository-roles %}

## `role` category actions

| Action | Description
|------------------|-------------------
|`create` | Triggered when an organization owner creates a new custom repository role. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
|`destroy` | Triggered when an organization owner deletes a custom repository role. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
|`update` | Triggered when an organization owner edits an existing custom repository role. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."

{% endif %}
{% ifversion ghec or ghes or ghae %}

## `secret_scanning` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_secret_scanning %} for all existing{% ifversion ghec %}, private or internal{% endif %} repositories. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_secret_scanning %} for all existing{% ifversion ghec %}, private or internal{% endif %} repositories.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}

## `secret_scanning_alert` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when {% data variables.product.prodname_dotcom %} detects an exposed secret and creates a {% data variables.product.prodname_secret_scanning %} alert. For more information, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."
| `reopen` | Triggered when a user reopens a {% data variables.product.prodname_secret_scanning %} alert.
| `resolve` | Triggered when a user resolves a {% data variables.product.prodname_secret_scanning %} alert.
{% endif %}

{% ifversion ghec or ghes or ghae %}

## `secret_scanning_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_secret_scanning %} for all new {% ifversion ghec %}private or internal {% endif %}repositories. For more information, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_secret_scanning %} for all new {% ifversion ghec %}private or internal {% endif %}repositories.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}

## `secret_scanning_push_protection` category actions

| Action | Description
|------------------|-------------------
| `bypass` | Triggered when a user bypasses the push protection on a secret detected by {% data variables.product.prodname_secret_scanning %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)."
{% endif %}

{% ifversion fpt or ghec %}

## `sponsors` category actions

| Action | Description
|------------------|-------------------
| `custom_amount_settings_change` | Triggered when you enable or disable custom amounts, or when you change the suggested custom amount (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Triggered when you change the FUNDING file in your repository (see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Triggered when you cancel a sponsorship (see "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Triggered when you sponsor an account (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_payment_complete` | Triggered after you sponsor an account and your payment has been processed (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Triggered when you change whether you receive email updates from a sponsored account (see "[AUTOTITLE](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Triggered when you upgrade or downgrade your sponsorship (see "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)" and "[AUTOTITLE](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_create` | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_disable` | Triggered when your {% data variables.product.prodname_sponsors %} account is disabled
| `sponsored_developer_redraft` | Triggered when your {% data variables.product.prodname_sponsors %} account is returned to draft state from approved state
| `sponsored_developer_profile_update` | Triggered when you edit your sponsored organization profile (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_tier_description_update` | Triggered when you change the description for a sponsorship tier (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Triggered when you send an email update to your sponsors (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `waitlist_join` | Triggered when you join the waitlist to become a sponsored organization (see "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
{% endif %}

## `team` category actions

| Action | Description
|------------------|-------------------
| `add_member` | Triggered when a member of an organization is [added to a team](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team).
| `add_repository` | Triggered when a team is given control of a repository.
| `change_parent_team` | Triggered when a child team is created or [a child team's parent is changed](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy).
| `change_privacy` | Triggered when a team's privacy level is changed.
| `create` | Triggered when a new team is created.
| `demote_maintainer` | Triggered when a user was demoted from a team maintainer to a team member. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."
| `destroy` | Triggered when a team is deleted from the organization.
| `promote_maintainer` | Triggered when a user is promoted from a team member to a team maintainer. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."
| `remove_member` | Triggered when a member of an organization is [removed from a team](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team).
| `remove_repository` | Triggered when a repository is no longer under a team's control.

{% ifversion team-discussions %}

## `team_discussions` category actions

| Action | Description
|---|---|
| `disable` | Triggered when an organization owner disables team discussions for an organization. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)."
| `enable` | Triggered when an organization owner enables team discussions for an organization.
{% endif %}

## `workflows` category actions

{% data reusables.actions.actions-audit-events-workflow %}
