---
title: Audit log events for your enterprise
intro: Learn about audit log events recorded for your enterprise.
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
---

{%- ifversion fpt or ghec %}
### `account` category actions

| Action | Description
|--------|-------------
| `account.billing_plan_change` | An organization's billing cycle changed. For more information, see "[Changing the duration of your billing cycle](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)."
| `account.plan_change` | An organization's subscription changed. For more information, see "[About billing for GitHub accounts](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)."
| `account.pending_plan_change` | An organization owner or billing manager canceled or downgraded a paid subscription. For more information, see "[How does upgrading or downgrading affect the billing process?](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)."
| `account.pending_subscription_change` | A {% data variables.product.prodname_marketplace %} free trial started or expired. For more information, see "[About billing for GitHub Marketplace](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)."
{%- endif %}

{%- ifversion fpt or ghec %}
### `advisory_credit` category actions

| Action | Description
|--------|-------------
| `advisory_credit.accept` | Someone accepted credit for a security advisory. For more information, see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory)."
| `advisory_credit.create` | The administrator of a security advisory added someone to the credit section.
| `advisory_credit.decline` | Someone declined credit for a security advisory.
| `advisory_credit.destroy` | The administrator of a security advisory removed someone from the credit section.
{%- endif %}

### `artifact` category actions

| Action | Description
|--------|-------------
| `artifact.destroy`    | A workflow run artifact was manually deleted.

{%- ifversion ghec %}
### `audit_log_streaming` category actions

| Action | Description
|--------|-------------
| `audit_log_streaming.check` | A manual check was performed of the endpoint configured for audit log streaming.
| `audit_log_streaming.create` | An endpoint was added for audit log streaming.
| `audit_log_streaming.update` | An endpoint configuration was updated for audit log streaming, such as the stream was paused, enabled, or disabled.
| `audit_log_streaming.destroy` | An audit log streaming endpoint was deleted.
{%- endif %}

{%- ifversion fpt or ghec %}
### `billing` category actions

| Action | Description
|--------|-------------
| `billing.change_billing_type` | An organization changed how it paid for {% data variables.product.prodname_dotcom %}. For more information, see "[Adding or editing a payment method](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)."
| `billing.change_email` | An organization's billing email address changed. For more information, see "[Setting your billing email](/billing/managing-your-github-billing-settings/setting-your-billing-email)."
{%- endif %}

### `business` category actions

| Action | Description
|--------|-------------
| `business.add_admin` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} was added to an enterprise.
{%- ifversion ghec %}
| `business.add_billing_manager` | A billing manager was added to an enterprise.
{%- endif %}
| `business.add_organization` | An organization was added to an enterprise.
{%- ifversion ghec %}
| `business.add_support_entitlee` | A support entitlement was added to a member of an enterprise. For more information, see "[Managing support entitlements for your enterprise](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."
{%- endif %}
{%- ifversion ghes > 3.0 or ghae %}
| `business.advanced_security_policy_update` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} created, updated, or removed a policy for {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)."
{%- endif %}
{%- ifversion ghec %}
| `business.cancel_admin_invitation` | An invitation for someone to be an owner{% ifversion ghes %} or site administrator{% endif %} of an enterprise was canceled.
| `business.cancel_billing_manager_invitation` | An invitation for someone to be an billing manager of an enterprise was canceled.
{%- endif %}
{%- ifversion ghes %}
| `business.clear_actions_settings` | An enterprise owner or site administrator cleared {% data variables.product.prodname_actions %} policy settings for an enterprise. For more information, see "[Enforcing policies for GitHub Actions in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)."
{%- endif %}
| `business.clear_default_repository_permission` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the base repository permission policy setting for an enterprise. For more information, see "[Enforcing a policy for base repository permissions](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)."
| `business.clear_members_can_create_repos`      | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared a restriction on repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."
| `business.create`                              | An enterprise was created.
{%- ifversion ghec %}
| `business.disable_saml` | SAML single sign-on was disabled for an enterprise.
{%- endif %}
| `business.disable_two_factor_requirement` | The requirement for members to have two-factor authentication enabled to access an enterprise was disabled.
{%- ifversion ghec %}
| `business.enable_saml` | SAML single sign-on was enabled for an enterprise.
{%- endif %}
| `business.enable_two_factor_requirement` | The requirement for members to have two-factor authentication enabled to access an enterprise was enabled.
{%- ifversion ghec %}
| `business.enterprise_server_license_download` | A {% data variables.product.prodname_ghe_server %} license was downloaded.
| `business.import_license_usage` | License usage information was imported from a {% data variables.product.prodname_ghe_server %} instance to an enterprise account on {% data variables.product.prodname_dotcom_the_website %}.
| `business.invite_admin` | An invitation for someone to be an enterprise owner{% ifversion ghes %} or site administrator{% endif %} of an enterprise was sent.
| `business.invite_billing_manager` | An invitation for someone to be an billing manager of an enterprise was sent.
{%- endif %}
| `business.members_can_update_protected_branches.clear` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} unset a policy for whether members of an enterprise can update protected branches on repositories for individual organizations. Organization administrators can choose whether to allow updating protected branches settings.
| `business.members_can_update_protected_branches.disable` | The ability for enterprise members to update branch protection rules was disabled. Only enterprise owners can update protected branches.
| `business.members_can_update_protected_branches.enable` | The ability for enterprise members to update branch protection rules was enabled. Enterprise owners and members can update protected branches.
| `business.remove_admin` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} was removed from an enterprise.
{%- ifversion ghes > 3.1 %}
| `business.referrer_override_enable` | An enterprise owner or site administrator enabled the referrer policy override. For more information, see "[Configuring the referrer policy for your enterprise](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)."
| `business.referrer_override_disable` | An enterprise owner or site administrator disabled the referrer policy override. For more information, see "[Configuring the referrer policy for your enterprise](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)."
{%- endif %}
{%- ifversion ghec %}
| `business.remove_billing_manager` | A billing manager was removed from an enterprise.
| `business.remove_member` | A member was removed from an enterprise.
{%- endif %}
| `business.remove_organization` | An organization was removed from an enterprise.
{%- ifversion ghec %}
| `business.remove_support_entitlee` | A support entitlement was removed from a member of an enterprise. For more information, see "[Managing support entitlements for your enterprise](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."
{%- endif %}
| `business.rename_slug` | The slug for the enterprise URL was renamed.
{%- ifversion ghec %}
| `business.revoke_external_identity` | The external identity for a member in an enterprise was revoked.
| `business.revoke_sso_session` | The SAML single sign-on session for a member in an enterprise was revoked.
{%- endif %}
{%- ifversion ghec %}
| `business.set_actions_fork_pr_approvals_policy` | The setting for requiring approvals for workflows from public forks was changed for an enterprise. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)."
{%- endif %}
| `business.set_actions_retention_limit` | The retention period for {% data variables.product.prodname_actions %} artifacts and logs was changed for an enterprise. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in an enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."
{%- ifversion ghec or ghes %}
| `business.set_fork_pr_workflows_policy` | The policy for workflows on private repository forks was changed. For more information, see "{% ifversion ghec %}[Enforcing policies for {% data variables.product.prodname_actions %} in an enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Enabling workflows for private repository forks](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}."
{%- endif %}
{%- ifversion ghes %}
| `business.update_actions_settings` | An enterprise owner or site administrator updated {% data variables.product.prodname_actions %} policy settings for an enterprise. For more information, see "[Enforcing policies for GitHub Actions in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)."
{%- endif %}
| `business.update_default_repository_permission` | The base repository permission setting was updated for all organizations in an enterprise. For more information, see "[Enforcing a policy for base repository permissions](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)."
| `business.update_member_repository_creation_permission` | The repository creation setting was updated for an enterprise. For more information, see "[Enforcing a policy for repository creation](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)."
| `business.update_member_repository_invitation_permission` | The policy setting for enterprise members inviting outside collaborators to repositories was updated. For more information, see "[Enforcing a policy for inviting outside collaborators to repositories](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
{%- ifversion ghec %}
| `business.update_saml_provider_settings` | The SAML single sign-on provider settings for an enterprise were updated.
{%- endif %}

{%- if secret-scanning-audit-log-custom-patterns %}
### `business_secret_scanning_custom_pattern` category actions

Action                        | Description
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | An enterprise-level custom pattern is published for secret scanning. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account)."
| `business_secret_scanning_custom_pattern.delete` | An enterprise-level custom pattern is removed from secret scanning.
| `business_secret_scanning_custom_pattern.update` | Changes to an enterprise-level custom pattern are saved for secret scanning.
{%- endif %}

### `checks` category actions

| Action | Description
|--------|-------------
| `checks.auto_trigger_disabled` | Automatic creation of check suites was disabled on a repository in the organization or enterprise. For more information, see "[Update repository preferences for check suites](/rest/reference/checks#update-repository-preferences-for-check-suites)."
| `checks.auto_trigger_enabled` | Automatic creation of check suites was enabled on a repository in the organization or enterprise. For more information, see "[Update repository preferences for check suites](/rest/reference/checks#update-repository-preferences-for-check-suites)."
{%- ifversion fpt or ghec %}
| `checks.delete_logs` | Logs in a check suite were deleted.
{%- endif %}

{%- ifversion fpt or ghec %}
### `codespaces` category actions

| Action | Description
|--------|-------------
| `codespaces.connect` | A codespace was started.
| `codespaces.create` | A user [created a codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `codespaces.destroy` | A user [deleted a codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `codespaces.allow_permissions` | A codespace using custom permissions from its `devcontainer.json` file was launched.
| `codespaces.attempted_to_create_from_prebuild` | An attempt to create a codespace from a prebuild was made.
| `codespaces.create_an_org_secret` | A user created an organization-level [secret for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)
| `codespaces.update_an_org_secret` | A user updated an organization-level [secret for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.remove_an_org_secret` | A user removed an organization-level [secret for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.manage_access_and_security` | A user updated [which repositories a codespace can access](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{%- endif %}

{%- ifversion fpt or ghec %}
### `commit_comment` category actions

| Action | Description
|--------|-------------
| `commit_comment.destroy` | A commit comment was deleted.
| `commit_comment.update` | A commit comment was updated.
{%- endif %}

{%- ifversion ghes %}
### `config_entry` category actions

| Action | Description
|--------|-------------
| `config_entry.create` | A configuration setting was created. These events are only visible in the site admin audit log. The type of events recorded relate to:</br>- Enterprise settings and policies</br>- Organization and repository permissions and settings</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, project, and code security settings.
| `config_entry.destroy` | A configuration setting was deleted. These events are only visible in the site admin audit log. The type of events recorded relate to:</br>- Enterprise settings and policies</br>- Organization and repository permissions and settings</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, project, and code security settings.
| `config_entry.update` | A configuration setting was edited. These events are only visible in the site admin audit log. The type of events recorded relate to:</br>- Enterprise settings and policies</br>- Organization and repository permissions and settings</br>- Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, project, and code security settings.
{%- endif %}

{%- ifversion fpt or ghec or ghes > 3.2 or ghae %}
### `dependabot_alerts` category actions

| Action | Description
|--------|-------------
| `dependabot_alerts.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `dependabot_alerts.enable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories.

### `dependabot_alerts_new_repos` category actions

| Action | Description
|--------|-------------
| `dependabot_alerts_new_repos.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `dependabot_alerts_new_repos.enable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories.

### `dependabot_repository_access`category actions

| Action | Description
|--------|-------------
| `dependabot_repository_access.repositories_updated` | The repositories that {% data variables.product.prodname_dependabot %} can access were updated.
{%- endif %}

{%- ifversion fpt or ghec or ghes > 3.2 %}
### `dependabot_security_updates` category actions

| Action | Description
|--------|-------------
| `dependabot_security_updates.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `dependabot_security_updates.enable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories.

### `dependabot_security_updates_new_repos` category actions

| Action | Description
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled {% data variables.product.prodname_dependabot_security_updates %} for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `dependabot_security_updates_new_repos.enable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled {% data variables.product.prodname_dependabot_security_updates %} for all new repositories.
{%- endif %}

{%- ifversion fpt or ghec or ghes or ghae %}
### `dependency_graph` category actions

| Action | Description
|--------|-------------
| `dependency_graph.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled the dependency graph for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `dependency_graph.enable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled the dependency graph for all existing repositories.

### `dependency_graph_new_repos` category actions

| Action | Description
|--------|-------------
| `dependency_graph_new_repos.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled the dependency graph for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `dependency_graph_new_repos.enable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled the dependency graph for all new repositories.
{%- endif %}

{%- ifversion fpt or ghec %}
### `discussion` category actions

| Action | Description
|--------|-------------
| `discussion.destroy` | A team discussion was deleted.

### `discussion_comment` category actions

| Action | Description
|--------|-------------
| `discussion_comment.destroy` | A [comment on a team discussion post was deleted](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_comment.update` | A [comment on a team discussion post was edited](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).

### `discussion_post` category actions

| Action | Description
|--------|-------------
| `discussion_post.destroy` | A [team discussion post was deleted](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).
| `discussion_post.update` | A [team discussion post was edited](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).

### `discussion_post_reply` category actions

| Action | Description
|--------|-------------
| `discussion_post_reply.destroy` | A [reply to a team discussion post was deleted](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_post_reply.update` | A [reply to a team discussion post was edited](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
{%- endif %}

{%- ifversion ghec or ghes %}
### `dotcom_connection` category actions

| Action | Description
|--------|-------------
| `dotcom_connection.create` | A {% data variables.product.prodname_github_connect %} connection to {% data variables.product.prodname_dotcom_the_website %} was created.
| `dotcom_connection.destroy` | A {% data variables.product.prodname_github_connect %} connection to {% data variables.product.prodname_dotcom_the_website %} was deleted.
| `dotcom_connection.token_updated` | The {% data variables.product.prodname_github_connect %} connection token for {% data variables.product.prodname_dotcom_the_website %} was updated.
| `dotcom_connection.upload_license_usage` | {% data variables.product.prodname_ghe_server %} license usage was manually uploaded to {% data variables.product.prodname_ghe_cloud %}.
| `dotcom_connection.upload_usage_metrics` | {% data variables.product.prodname_ghe_server %} usage metrics were uploaded to {% data variables.product.prodname_dotcom_the_website %}.
{%- endif %}

### `enterprise` category actions

| Action | Description
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled anonymous Git read access for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."
| `enterprise.config.enable_anonymous_git_access`   | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled anonymous Git read access for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."
| `enterprise.config.lock_anonymous_git_access`   | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} locked anonymous Git read access to prevent repository admins from changing existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."
| `enterprise.config.unlock_anonymous_git_access` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} unlocked anonymous Git read access to allow repository admins to change existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."
| `enterprise.register_self_hosted_runner` | A new {% data variables.product.prodname_actions %} self-hosted runner was registered. For more information, see "[Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."
| `enterprise.remove_self_hosted_runner` | A {% data variables.product.prodname_actions %} self-hosted runner was removed. For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."
| `enterprise.runner_group_created` | A {% data variables.product.prodname_actions %} self-hosted runner group was created. For more information, see "[Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."
| `enterprise.runner_group_removed` | A {% data variables.product.prodname_actions %} self-hosted runner group was removed. For more information, see "[Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."
| `enterprise.runner_group_renamed` | A {% data variables.product.prodname_actions %} self-hosted runner group was renamed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `enterprise.runner_group_updated` | The configuration of a {% data variables.product.prodname_actions %} self-hosted runner group was changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `enterprise.runner_group_runner_removed` |  The REST API was used to remove a {% data variables.product.prodname_actions %} self-hosted runner from a group. For more information, see "[Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."
| `enterprise.runner_group_runners_added` | A {% data variables.product.prodname_actions %} self-hosted runner was added to a group. For more information, see [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `enterprise.runner_group_runners_updated`|  A {% data variables.product.prodname_actions %} runner group's list of members was updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."
{%- ifversion ghec %}
| `enterprise.runner_group_visiblity_updated` | The visibility of a {% data variables.product.prodname_actions %} self-hosted runner group was updated via the REST API. For more information, see "[Update a self-hosted runner group for an organization](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)."
{%- endif %}
{%- ifversion ghec or ghes > 3.1 or ghae %}
| `enterprise.self_hosted_runner_online` | The {% data variables.product.prodname_actions %} runner application was started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `enterprise.self_hosted_runner_offline` | The {% data variables.product.prodname_actions %} runner application was stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
{%- endif %}
{%- ifversion ghec or ghes %}
| `enterprise.self_hosted_runner_updated` | The {% data variables.product.prodname_actions %} runner application was updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %}

{%- ifversion ghec %}
### `enterprise_domain` category actions

| Action | Description
|--------|-------------
| `enterprise_domain.approve` | An enterprise domain was approved for an enterprise. For more information, see "[Approving a domain for your enterprise account](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account)."
| `enterprise_domain.create` | An enterprise domain was added to an enterprise. For more information, see "[Verifying a domain for your enterprise account](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)."
| `enterprise_domain.destroy` | An enterprise domain was removed from an enterprise. For more information, see "[Removing an approved or verified domain](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain)."
| `enterprise_domain.verify` | An enterprise domain was verified for an enterprise. For more information, see "[Verifying a domain for your enterprise account](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)."

### `enterprise_installation` category actions

| Action | Description
|--------|-------------
| `enterprise_installation.create` | The {% data variables.product.prodname_github_app %} associated with an {% data variables.product.prodname_github_connect %} enterprise connection was created.
| `enterprise_installation.destroy` | The {% data variables.product.prodname_github_app %} associated with an {% data variables.product.prodname_github_connect %} enterprise connection was deleted.
| `enterprise_installation.token_updated` | The token belonging to {% data variables.product.prodname_github_app %} associated with an {% data variables.product.prodname_github_connect %} enterprise connection was updated.
{%- endif %}

{%- ifversion fpt or ghec %}
### `environment` category actions

| Action | Description
|--------|-------------
| `environment.add_protection_rule` | A {% data variables.product.prodname_actions %} environment protection rule was created via the API. For more information, see "[Environment protection rules](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)."
| `environment.create_actions_secret` | A secret was created for a {% data variables.product.prodname_actions %} environment via the API. For more information, see "[Environment secrets](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)."
| `environment.delete` | An environment was deleted via the API. For more information, see "[Deleting an environment](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)."
| `environment.remove_actions_secret` | A secret was deleted for a {% data variables.product.prodname_actions %} environment via the API. For more information, see "[Environment secrets](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)."
| `environment.remove_protection_rule` | A {% data variables.product.prodname_actions %} environment protection rule was deleted via the API. For more information, see "[Environment protection rules](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)."
| `environment.update_actions_secret` | A secret was updated for a {% data variables.product.prodname_actions %} environment via the API. For more information, see "[Environment secrets](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)."
| `environment.update_protection_rule` | A {% data variables.product.prodname_actions %} environment protection rule was updated via the API. For more information, see "[Environment protection rules](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)."
{%- endif %}

{%- ifversion ghae %}
### `external_group` category actions

| Action | Description
|--------|-------------
| `external_group.delete` | An Okta group was deleted. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
| `external_group.link` | An Okta group was mapped to a {% data variables.product.prodname_ghe_managed %} team. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
| `external_group.provision` | An Okta group was mapped to a team on {% data variables.product.prodname_ghe_managed %}. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
| `external_group.unlink` | An Okta group was unmapped from a {% data variables.product.prodname_ghe_managed %} team. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
| `external_group.update` | An Okta group's settings were updated. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."

### `external_identity` category actions
| Action | Description
|--------|-------------
| `external_identity.deprovision` | A user was removed from an Okta group and was subsequently deprovisioned from {% data variables.product.prodname_ghe_managed %}. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
| `external_identity.provision` | An Okta user was added to an Okta group and was subsequently provisioned to the mapped team on {% data variables.product.prodname_ghe_managed %}. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
| `external_identity.update` | An Okta user's settings were updated. For more information, see "[Mapping Okta groups to teams](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
{%- endif %}

### `gist` category actions

| Action | Description
|--------|-------------
| `gist.create` | A gist is created.
| `gist.destroy` | A gist is deleted.
| `gist.visibility_change` | The visibility of a gist is changed.

{% ifversion ghec or ghes > 3.4 or ghae-issue-6724 %}
### `git` category actions

| Action | Description
|--------|-------------
| `git.clone` | A repository was cloned.
| `git.fetch` | Changes were fetched from a repository.
| `git.push`  | Changes were pushed to a repository.
{% endif %}

### `hook` category actions

| Action | Description
|--------|-------------
{%- ifversion ghes or ghae %}
| `hook.active_changed`             | A hook's active status was updated.
{%- endif %}
| `hook.config_changed`             | A hook's configuration was changed.
| `hook.create`                     | A new hook was added.
| `hook.destroy`                    | A hook was deleted.
| `hook.events_changed`             | A hook's configured events were changed.

### `integration` category actions

| Action | Description
|--------|-------------
| `integration.create` | An integration was created.
| `integration.destroy` | An integration was deleted.
| `integration.manager_added` | A member of an enterprise or organization was added as an integration manager.
| `integration.manager_removed` | A member of an enterprise or organization was removed from being an integration manager.
| `integration.transfer` | Ownership of an integration was transferred to another user or organization.
| `integration.remove_client_secret` | A client secret for an integration was removed.
| `integration.revoke_all_tokens` | All user tokens for an integration were requested to be revoked.
| `integration.revoke_tokens` | Token(s) for an integration were revoked.

### `integration_installation`category actions

| Action | Description
|--------|-------------
| `integration_installation.contact_email_changed` | A contact email for an integration was changed.
| `integration_installation.create` | An integration was installed.
| `integration_installation.destroy` | An integration was uninstalled.
| `integration_installation.repositories_added` | Repositories were added to an integration.
| `integration_installation.repositories_removed` | Repositories were removed from an integration.
{%- ifversion fpt or ghec %}
| `integration_installation.suspend` | An integration was suspended.
| `integration_installation.unsuspend` | An integration was unsuspended.
{%- endif %}
| `integration_installation.version_updated` | Permissions for an integration were updated.

### `integration_installation_request` category actions

| Action | Description
|--------|-------------
| `integration_installation_request.create` | An member requested that an owner install an integration for use in an enterprise or organization.
| `integration_installation_request.close` | A request to install an integration for use in an enterprise or organization was either approved or denied by an owner, or canceled by the member who opened the request.

{%- ifversion ghec or ghae %}
### `ip_allow_list` category actions

| Action | Description
|--------|-------------
| `ip_allow_list.enable`               | An IP allow list was enabled.
| `ip_allow_list.enable_for_installed_apps` | An IP allow list was enabled for installed {% data variables.product.prodname_github_apps %}.
| `ip_allow_list.disable`              | An IP allow list was disabled.
| `ip_allow_list.disable_for_installed_apps` | An IP allow list was disabled for installed {% data variables.product.prodname_github_apps %}.

### `ip_allow_list_entry` category actions

| Action | Description
|--------|-------------
| `ip_allow_list_entry.create` | An IP address was added to an IP allow list.
| `ip_allow_list_entry.update` | An IP address or its description was changed.
| `ip_allow_list_entry.destroy` | An IP address was deleted from an IP allow list.
{%- endif %}

### `issue` category actions

| Action | Description
|--------|-------------
| `issue.destroy`                      | An issue was deleted from the repository. For more information, see "[Deleting an issue](/issues/tracking-your-work-with-issues/deleting-an-issue)."
| `issue.pinned`                       | An issue was pinned to a repository. For more information, see "[Pinning an issue to your repository](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)."
| `issue.transfer`                     | An issue was transferred to another repository. For more information, see "[Transferring an issue to another repository](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)."
| `issue.unpinned`                     | An issue was unpinned from a repository. For more information, see "[Pinning an issue to your repository](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)."

### `issue_comment` category actions

| Action | Description
|--------|-------------
| `issue_comment.destroy`  | A comment on an issue was deleted from the repository.
| `issue_comment.pinned`   | A comment on an issue was pinned to a repository.
| `issue_comment.unpinned` | A comment on an issue was unpinned from a repository.
| `issue_comment.update`   | A comment on an issue (other than the initial one) changed.

### `issues` category actions

| Action | Description
|--------|-------------
| `issues.deletes_disabled` | The ability for enterprise members to delete issues was disabled. Members cannot delete issues in any organizations in an enterprise. For more information, see "[Enforcing a policy for deleting issues](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)."
| `issues.deletes_enabled` | The ability for enterprise members to delete issues was enabled. Members can delete issues in any organizations in an enterprise. For more information, see "[Enforcing a policy for deleting issues](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)."
| `issues.deletes_policy_cleared` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the policy setting for allowing members to delete issues in an enterprise. For more information, see "[Enforcing a policy for deleting issues](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)."

{%- ifversion fpt or ghec %}
### `marketplace_agreement_signature` category actions

| Action | Description
|--------|-------------
| `marketplace_agreement_signature.create` | A user signed the {% data variables.product.prodname_marketplace %} Developer Agreement on behalf of an organization.

### `marketplace_listing` category actions

| Action | Description
|--------|-------------
| `marketplace_listing.approve` | A listing was approved for inclusion in {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.change_category` | A category for a listing for an app in {% data variables.product.prodname_marketplace %} was changed.
| `marketplace_listing.create` | A listing for an app in {% data variables.product.prodname_marketplace %} was created.
| `marketplace_listing.delist` | A listing was removed from {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.redraft` | A listing was sent back to draft state.
| `marketplace_listing.reject` | A listing was not accepted for inclusion in {% data variables.product.prodname_marketplace %}.
{%- endif %}

### `members_can_create_pages` category actions

| Action | Description
|--------|-------------
| `members_can_create_pages.disable` | The ability for members to publish {% data variables.product.prodname_pages %} was disabled. Members cannot publish {% data variables.product.prodname_pages %} in an organization. For more information, see "[Managing the publication of GitHub Pages sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."
| `members_can_create_pages.enable` | The ability for members to publish {% data variables.product.prodname_pages %} was enabled. Members can publish {% data variables.product.prodname_pages %} in an organization. For more information, see "[Managing the publication of GitHub Pages sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

### `members_can_create_private_pages` category actions

| Action | Description
|--------|-------------
| `members_can_create_private_pages.disable` | The ability for members to publish private {% data variables.product.prodname_pages %} was disabled. Members cannot publish private {% data variables.product.prodname_pages %} in an organization. For more information, see "[Managing the publication of GitHub Pages sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."
| `members_can_create_private_pages.enable` |  The ability for members to publish private {% data variables.product.prodname_pages %} was enabled. Members can publish private {% data variables.product.prodname_pages %} in an organization. For more information, see "[Managing the publication of GitHub Pages sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

### `members_can_create_public_pages` category actions

| Action | Description
|--------|-------------
| `members_can_create_public_pages.disable` |  The ability for members to publish public {% data variables.product.prodname_pages %} was disabled. Members cannot publish public {% data variables.product.prodname_pages %} in an organization. For more information, see "[Managing the publication of GitHub Pages sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."
| `members_can_create_public_pages.enable` |  The ability for members to publish public {% data variables.product.prodname_pages %} was enabled. Members can publish public {% data variables.product.prodname_pages %} in an organization. For more information, see "[Managing the publication of GitHub Pages sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

{%- ifversion ghec or ghes or ghae %}
### `members_can_delete_repos` category actions

| Action | Description
|--------|-------------
| `members_can_delete_repos.clear` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the policy setting for deleting or transfering repositories in any organizations in an enterprise. For more information, see "[Enforcing a policy for repository deletion and transfer](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)."
| `members_can_delete_repos.disable` | The ability for enterprise members to delete repositories was disabled. Members cannot delete or transfer repositories in any organizations in an enterprise. For more information, see "[Enforcing a policy for repository deletion and transfer](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)."
| `members_can_delete_repos.enable` |  The ability for enterprise members to delete repositories was enabled. Members can delete or transfer repositories in any organizations in an enterprise. For more information, see "[Enforcing a policy for repository deletion and transfer](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)."

### `members_can_view_dependency_insights` category actions

| Action | Description
|--------|-------------
| `members_can_view_dependency_insights.clear` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the policy setting for viewing dependency insights in any organizations in an enterprise.{% ifversion ghec %} For more information, see "[Enforcing a policy for visibility of dependency insights](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)."{% endif %}
| `members_can_view_dependency_insights.disable` | The ability for enterprise members to view dependency insights was disabled. Members cannot view dependency insights in any organizations in an enterprise.{% ifversion ghec %} For more information, see "[Enforcing a policy for visibility of dependency insights](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)."{% endif %}
| `members_can_view_dependency_insights.enable` |  The ability for enterprise members to view dependency insights was enabled. Members can view dependency insights in any organizations in an enterprise.{% ifversion ghec %} For more information, see "[Enforcing a policy for visibility of dependency insights](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)."{% endif %}

### `migration` category actions

| Action | Description
|--------|-------------
| `migration.create` | A migration file was created for transferring data from a *source* location (such as a {% data variables.product.prodname_dotcom_the_website %} organization or a {% data variables.product.prodname_ghe_server %} instance) to a *target* {% data variables.product.prodname_ghe_server %} instance.
| `migration.destroy_file` | A migration file for transferring data from a *source* location (such as a {% data variables.product.prodname_dotcom_the_website %} organization or a {% data variables.product.prodname_ghe_server %} instance) to a *target* {% data variables.product.prodname_ghe_server %} instance was deleted.
|  `migration.download` | A migration file for transferring data from a *source* location (such as a {% data variables.product.prodname_dotcom_the_website %} organization or a {% data variables.product.prodname_ghe_server %} instance) to a *target* {% data variables.product.prodname_ghe_server %} instance was downloaded.
{%- endif %}

### `oauth_access` category actions

| Action | Description
|--------|-------------
`oauth_access.create`   | An [OAuth access token][] was generated for a user account. For more information, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
`oauth_access.destroy`  | An [OAuth access token][] was deleted from a user account.

  [OAuth access token]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

### `oauth_application` category actions

| Action | Description
|--------|-------------
| `oauth_application.create`           | An [OAuth application][] was created for a user or organization account.
| `oauth_application.destroy`          | An [OAuth application][] was deleted from a user or organization account.
{%- ifversion fpt or ghec %}
| `oauth_application.generate_client_secret`   | An [OAuth application][]'s secret key was generated.
| `oauth_application.remove_client_secret`     | An [OAuth application][]'s secret key was deleted.
{%- endif %}
| `oauth_application.reset_secret`      | An [OAuth application][]'s secret key was reset.
{%- ifversion fpt or ghec %}
| `oauth_application.revoke_all_tokens` | All user tokens for an [OAuth application][] were requested to be revoked.
{%- endif %}
| `oauth_application.revoke_tokens`     | Token(s) for an [OAuth application][] were revoked.
| `oauth_application.transfer`          | An [OAuth application][] was transferred from one user or organization account to another.
{%- ifversion ghes or ghae %}
| `oauth_application.unsuspend`         | An [OAuth application][] was unsuspended for a user or organization account.
{%- endif %}

  [OAuth application]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
### `oauth_authorization` category actions

| Action | Description
|--------|-------------
| `oauth_authorization.create`          | An authorization for an OAuth application was created. For more information, see "[Authorizing OAuth Apps](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)."
| `oauth_authorization.destroy`          | An authorization for an OAuth application was deleted. For more information, see "[Authorizing OAuth Apps](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)."
| `oauth_authorization.update`          | An authorization for an OAuth application was updated. For more information, see "[Authorizing OAuth Apps](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)."
{%- endif %}

### `org` category actions

| Action | Description
|--------|-------------
| `org.accept_business_invitation` | An invitation sent to an organization to join an enterprise was accepted. {% ifversion ghec %}For more information, see "[Inviting an organization to join your enterprise account](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)."{% endif %}
| `org.add_billing_manager` | A billing manager was added to an organization. {% ifversion fpt or ghec %}For more information, see "[Adding a billing manager to your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)."{% endif %}
| `org.add_member` | A user joined an organization.
{%- ifversion ghes > 3.0 or ghae or ghec %}
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} was disabled for new repositories in an organization.
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} was disabled for all repositories in an organization.
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} was enabled for new repositories in an organization.
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} was enabled for all repositories in an organization.
| `org.advanced_security_policy_selected_member_disabled` | An enterprise owner prevented {% data variables.product.prodname_GH_advanced_security %} features from being enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | An enterprise owner allowed {% data variables.product.prodname_GH_advanced_security %} features to be enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | An organization owner updated polices for {% data variables.product.prodname_GH_advanced_security %} in an enterprise. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
{%- endif %}
| `org.async_delete` | A user initiated a background job to delete an organization.
{%- ifversion ghec %}
| `org.audit_log_export` | An organization owner created an export of the organization audit log. If the export included a query, the log will list the query used and the number of audit log entries matching that query. For more information, see "[Exporting audit log activity for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)."
{%- endif %}
| `org.block_user` | An organization owner blocked a user from accessing the organization's repositories. {% ifversion fpt or ghec %}For more information, see "[Blocking a user from your organization](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)."{% endif %}
| `org.cancel_business_invitation` | An invitation for an organization to join an enterprise was revoked. {% ifversion ghec %}For more information, see "[Inviting an organization to join your enterprise account](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)."{% endif %}
| `org.cancel_invitation` | An invitation sent to a user to join an organization was revoked.
| `org.clear_actions_settings` |  An organization owner cleared {% data variables.product.prodname_actions %} policy settings for an organization. For more information, see "[Managing GitHub Actions permissions for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)."
| `org.clear_default_repository_permission` | An organization owner cleared the base repository permission policy setting for an organization. For more information, see "[Setting base permissions](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)."
| `org.clear_member_team_creation_permission` | An organization owner cleared the new teams creation setting for an organization. For more information, see "[Setting team creation permissions in your organization](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)."
| `org.clear_reader_discussion_creation_permission` | An organization owner cleared the new discussion creation setting for an organization. {% ifversion fpt or ghec %}For more information, see "[Allowing or disallowing users with read access to create discussions](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."{% endif %}
| `org.clear_members_can_create_repos`                 | An organization owner cleared a restriction on repository creation in an organization. For more information, see "[Restricting repository creation in your organization](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)."
| `org.clear_members_can_invite_outside_collaborators` | An organization owner cleared the outside collaborators invitation policy for an organization. For more information, see "[Setting permissions for adding outside collaborators](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)."
| `org.clear_new_repository_default_branch_setting`    | An organization owner cleared the default branch name for new repositories setting for an organization. For more information, see "[Setting the default branch name](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name)."
{%- ifversion fpt or ghec %}
| `org.codespaces_trusted_repo_access_granted`         | {% data variables.product.prodname_codespaces %} was granted trusted repository access to all other repositories in an organization. For more information, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)."
| `org.codespaces_trusted_repo_access_revoked`         | {% data variables.product.prodname_codespaces %} trusted repository access to all other repositories in an organization was revoked. For more information, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)."
{%- endif %}                                                                                                             |
| `org.config.disable_collaborators_only` | The interaction limit for collaborators only for an organization was disabled. {% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}
| `org.config.disable_contributors_only` | The interaction limit for prior contributors only for an organization was disabled. {% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}
| `org.config.disable_sockpuppet_disallowed` | The interaction limit for existing users only for an organization was disabled. {% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}
| `org.config.enable_collaborators_only` | The interaction limit for collaborators only for an organization was enabled. {% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}
| `org.config.enable_contributors_only` | The interaction limit for prior contributors only for an organization was enabled. {% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}
| `org.config.enable_sockpuppet_disallowed` | The interaction limit for existing users only for an organization was enabled. {% ifversion fpt or ghec %}For more information, see "[Limiting interactions in your organization](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)."{% endif %}
| `org.confirm_business_invitation` | An invitation for an organization to join an enterprise was confirmed. {% ifversion ghec %}For more information, see "[Inviting an organization to join your enterprise account](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)."{% endif %}
| `org.create` | An organization was created. For more information, see "[Creating a new organization from scratch](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."
{%- ifversion fpt or ghec or ghes %}
| `org.create_actions_secret` | A {% data variables.product.prodname_actions %} secret was created for an organization. For more information, see "[Creating encrypted secrets for an organization](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."
{%- endif %}
| `org.create_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was created for an organization.
| `org.delete`       | An organization was deleted by a user-initiated background job.
| `org.disable_member_team_creation_permission` | An organization owner limited team creation to owners. For more information, see "[Setting team creation permissions in your organization](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)."
| `org.disable_reader_discussion_creation_permission` | An organization owner limited discussion creation to users with at least triage permission in an organization. {% ifversion fpt or ghec %}For more information, see "[Allowing or disallowing users with read access to create discussions](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."{% endif %}
{%- ifversion fpt or ghec %}
| `org.disable_oauth_app_restrictions` | Third-party application access restrictions for an organization were disabled. For more information, see "[Disabling OAuth App access restrictions for your organization](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)."
{%- endif %}
{%- ifversion ghec %}
| `org.disable_saml` | An organization owner disabled SAML single sign-on for an organization.
{%- endif %}
{%- ifversion not ghae %}
| `org.disable_two_factor_requirement` | An organization owner disabled a two-factor authentication requirement for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.
{%- endif %}
| `org.display_commenter_full_name_disabled` | An organization owner disabled the display of a commenter's full name in an organization. Members cannot see a comment author's full name.
| `org.display_commenter_full_name_enabled` | An organization owner enabled the display of a commenter's full name in an organization. Members can see a comment author's full name.
| `org.enable_member_team_creation_permission` | An organization owner allowed members to create teams. For more information, see "[Setting team creation permissions in your organization](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)."
| `org.enable_reader_discussion_creation_permission` | An organization owner allowed users with read access to create discussions in an organization. {% ifversion fpt or ghec %}For more information, see "[Allowing or disallowing users with read access to create discussions](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)."{% endif %}
{%- ifversion fpt or ghec %}
| `org.enable_oauth_app_restrictions` | Third-party application access restrictions for an organization were enabled. For more information, see "[Enabling OAuth App access restrictions for your organization](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)."
{%- endif %}
{%- ifversion ghec %}
| `org.enable_saml` | An organization owner [enabled SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) for an organization.
{%- endif %}
{%- ifversion not ghae %}
| `org.enable_two_factor_requirement` | An organization owner requires two-factor authentication for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.
{%- endif %}
| `org.integration_manager_added` | An organization owner granted a member access to manage all GitHub Apps owned by an organization.
| `org.integration_manager_removed` | An organization owner removed access to manage all GitHub Apps owned by an organization from an organization member.
| `org.invite_member` | A new user was invited to join an organization. {% ifversion fpt or ghec %}For more information, see "[Inviting users to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)."{% endif %}
| `org.invite_to_business` | An organization was invited to join an enterprise.
| `org.members_can_update_protected_branches.clear` | An organization owner unset a policy for whether members of an organization can update protected branches on repositories in an organization. Organization administrators can choose whether to allow updating protected branches settings.
| `org.members_can_update_protected_branches.disable` | The ability for enterprise members to update protected branches was disabled. Only enterprise owners can update protected branches.
| `org.members_can_update_protected_branches.enable` |  The ability for enterprise members to update protected branches was enabled. Members of an organization can update protected branches.
{%- ifversion fpt or ghec %}
| `org.oauth_app_access_approved` | An owner [granted organization access to an {% data variables.product.prodname_oauth_app %}](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `org.oauth_app_access_denied` | An owner [disabled a previously approved {% data variables.product.prodname_oauth_app %}'s access](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) to an organization.
| `org.oauth_app_access_requested` | An organization member requested that an owner grant an {% data variables.product.prodname_oauth_app %} access to an organization.
{%- endif %}
| `org.recreate` | An organization was restored.
| `org.register_self_hosted_runner` | A new self-hosted runner was registered. For more information, see "[Adding a self-hosted runner to an organization](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)."
| `org.remove_actions_secret` | A {% data variables.product.prodname_actions %} secret was removed.
| `org.remove_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was removed from an organization.
| `org.remove_billing_manager` | An owner removed a billing manager from an organization. {% ifversion fpt or ghec %}For more information, see "[Removing a billing manager from your organization](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization)"{% endif %}{% ifversion not ghae %} or when [two-factor authentication was required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and a billing manager didn't use 2FA or disabled 2FA.{% endif %}
| `org.remove_member` | An [owner removed a member from an organization](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} or when [two-factor authentication was required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disabled 2FA{% endif %}. Also an [organization member removed themselves](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) from an organization.
| `org.remove_outside_collaborator` | An owner removed an outside collaborator from an organization{% ifversion not ghae %} or when [two-factor authentication was required in an organization](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) and an outside collaborator didn't use 2FA or disabled 2FA{% endif %}.
| `org.remove_self_hosted_runner` | A self-hosted runner was removed. For more information, see "[Removing a runner from an organization](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)."
| `org.rename` | An organization was renamed.
| `org.restore_member` | An organization member was restored. For more information, see "[Reinstating a former member of your organization](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)."
{%- ifversion ghec %}
| `org.revoke_external_identity` | An organization owner revoked a member's linked identity. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."
| `org.revoke_sso_session` | An organization owner revoked a member's SAML session. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."
{%- endif %}
| `org.runner_group_created` | A self-hosted runner group was created. For more information, see "[Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."
| `org.runner_group_removed` | A self-hosted runner group was removed. For more information, see "[Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."
{%- ifversion fpt or ghec %}
| `org.runner_group_renamed` | A self-hosted runner group was renamed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
{%- endif %}
| `org.runner_group_updated` | The configuration of a self-hosted runner group was changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `org.runner_group_runner_removed` |  The REST API was used to remove a self-hosted runner from a group. For more information, see "[Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."
| `org.runner_group_runners_added` | A self-hosted runner was added to a group. For more information, see [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `org.runner_group_runners_updated`|  A runner group's list of members was updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."
{%- ifversion fpt or ghec %}
| `org.runner_group_visiblity_updated` | The visibility of a self-hosted runner group was updated via the REST API. For more information, see "[Update a self-hosted runner group for an organization](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)."
{%- endif %}
{%- if secret-scanning-audit-log-custom-patterns %}
| `org.secret_scanning_push_protection_disable` | An organization owner or administrator disabled push protection for secret scanning. For more information, see "[Protecting pushes with secret scanning](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
| `org.secret_scanning_push_protection_enable` | An organization owner or administrator enabled push protection for secret scanning.
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
| `org.self_hosted_runner_online` | The runner application was started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `org.self_hosted_runner_offline` | The runner application was stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
{%- endif %}
{%- ifversion fpt or ghec or ghes %}
| `org.self_hosted_runner_updated` | The runner application was updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %}
{%- ifversion fpt or ghec %}
| `org.set_actions_fork_pr_approvals_policy` | The setting for requiring approvals for workflows from public forks was changed for an organization. For more information, see "[Requiring approval for workflows from public forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)."
{%- endif %}
| `org.set_actions_retention_limit` | The retention period for {% data variables.product.prodname_actions %} artifacts and logs in an organization was changed. For more information, see "[Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your organization](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)."
{%- ifversion fpt or ghec or ghes %}
| `org.set_fork_pr_workflows_policy` | The policy for workflows on private repository forks was changed. For more information, see "[Enabling workflows for private repository forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)."
{%- endif %}
{%- ifversion ghes %}
| `org.sso_response` | A SAML single sign-on response was generated when a member attempted to authenticate with an organization.
{%- endif %}
{%- ifversion not ghae %}
| `org.transform`    | A user account was converted into an organization. For more information, see "[Converting a user into an organization](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."
{%- endif %}
| `org.unblock_user` | An organization owner unblocked a user from an organization. {% ifversion fpt or ghec %}For more information, see "[Unblocking a user from your organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)."{% endif %}
{%- ifversion fpt or ghec or ghes %}
| `org.update_actions_secret` | A {% data variables.product.prodname_actions %} secret was updated.
{%- endif %}
| `org.update_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was updated for an organization.
| `org.update_default_repository_permission` | An organization owner changed the default repository permission level for organization members.
| `org.update_member` | An organization owner changed a person's role from owner to member or member to owner.
| `org.update_member_repository_creation_permission` | An organization owner changed the create repository permission for organization members.
| `org.update_member_repository_invitation_permission` | An organization owner changed the policy setting for organization members inviting outside collaborators to repositories. For more information, see "[Setting permissions for adding outside collaborators](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)."
| `org.update_new_repository_default_branch_setting` | An organization owner changed the name of the default branch for new repositories in the organization. For more information, see "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."
{%- ifversion ghec or ghae %}
| `org.update_saml_provider_settings` | An organization's SAML provider settings were updated.
| `org.update_terms_of_service` | An organization changed between the Standard Terms of Service and the Corporate Terms of Service. {% ifversion ghec %}For more information, see "[Upgrading to the Corporate Terms of Service](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)."{% endif %}
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### `org_credential_authorization` category actions

| Action | Description
|--------|-------------
| `org_credential_authorization.deauthorized` | A member deauthorized credentials for use with SAML single sign-on. {% ifversion ghec or ghae %}For more information, see "[Authenticating with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on)."{% endif %}
| `org_credential_authorization.grant` | A member authorized credentials for use with SAML single sign-on. {% ifversion ghec or ghae %}For more information, see "[Authenticating with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on)."{% endif %}
| `org_credential_authorization.revoke` | An owner revoked authorized credentials. {% ifversion ghec %}For more information, see "[Viewing and managing your active SAML sessions](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)."{% endif %}
{%- endif %}

{%- if secret-scanning-audit-log-custom-patterns %}
### `org_secret_scanning_custom_pattern` category actions

| Action | Description
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | A custom pattern is published for secret scanning in an organization. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)."
| `org_secret_scanning_custom_pattern.delete` | A custom pattern is removed from secret scanning in an organization. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)."
| `org_secret_scanning_custom_pattern.update` |Changes to a custom pattern are saved for secret scanning in an organization. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)."
{%- endif %}

### `organization_default_label` category actions

| Action | Description
|--------|-------------
| `organization_default_label.create` | A default label for repositories in an organization was created. For more information, see "[Creating a default label](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label)."
| `organization_default_label.update` | A default label for repositories in an organization was edited. For more information, see "[Editing a default label](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label)."
| `organization_default_label.destroy` | A default label for repositories in an organization was deleted. For more information, see "[Deleting a default label](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label)."

{%- ifversion fpt or ghec or ghes > 3.1 %}
### `organization_domain` category actions

| Action | Description
|--------|-------------
| `organization_domain.approve` | An enterprise domain was approved for an organization. For more information, see "[Approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization)."
| `organization_domain.create` | An enterprise domain was added to an organization. For more information, see "[Verifying a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)."
| `organization_domain.destroy` | An enterprise domain was removed from an organization. For more information, see "[Removing an approved or verified domain](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain)."
| `organization_domain.verify` | An enterprise domain was verified for an organization. For more information, see "[Verifying a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)."

### `organization_projects_change` category actions

| Action | Description
|--------|-------------
| `organization_projects_change.clear` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the policy setting for organization-wide project boards in an enterprise. For more information, see "[Enforcing a policy for organization-wide project boards](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)."
| `organization_projects_change.disable` | Organization projects were disabled for all organizations in an enterprise. For more information, see "[Enforcing a policy for organization-wide project boards](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)."
| `organization_projects_change.enable` | Organization projects were enabled for all organizations in an enterprise. For more information, see "[Enforcing a policy for organization-wide project boards](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)."
{%- endif %}

{%- ifversion fpt or ghec or ghes > 3.0 or ghae %}
### `packages` category actions

| Action | Description
|--------|-------------
| `packages.insecure_hash` | Maven published an insecure hash for a specific package version.
| `packages.package_deleted` | A package was deleted from an organization.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.package_published` | A package was published or republished to an organization.
| `packages.package_restored` | An entire package was restored.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.package_version_deleted` | A specific package version was deleted.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.package_version_published` | A specific package version was published or republished to a package.
| `packages.package_version_restored` | A specific package version was deleted.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `packages.part_upload` | A specific package version was partially uploaded to an organization.
| `packages.upstream_package_fetched` | A specific package version was fetched from the npm upstream proxy.
| `packages.version_download` | A specific package version was downloaded.
| `packages.version_upload` | A specific package version was uploaded.
{%- endif %}

{%- ifversion fpt or ghec %}
### `pages_protected_domain` category actions

| Action | Description
|--------|-------------
| `pages_protected_domain.create` | A {% data variables.product.prodname_pages %} verified domain was created for an organization or enterprise. For more information, see "[Verifying your custom domain for {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."
| `pages_protected_domain.delete` | A {% data variables.product.prodname_pages %} verified domain was deleted from an organization or enterprise. For more information, see "[Verifying your custom domain for {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."
| `pages_protected_domain.verify`  | A {% data variables.product.prodname_pages %} domain was verified for an organization or enterprise. For more information, see "[Verifying your custom domain for {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."

### `payment_method` category actions

| Action | Description
|--------|-------------
| `payment_method.create` | A new payment method was added, such as a new credit card or PayPal account.
| `payment_method.remove` | A payment method was removed.
| `payment_method.update` | An existing payment method was updated.

### `prebuild_configuration` category actions

| Action | Description
|--------|-------------
| `prebuild_configuration.create` | A {% data variables.product.prodname_codespaces %} prebuild configuration for a repository was created. For more information, see "[About Codespaces prebuilds](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)."
| `prebuild_configuration.destroy` | A {% data variables.product.prodname_codespaces %} prebuild configuration for a repository was deleted. For more information, see "[About Codespaces prebuilds](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)."
| `prebuild_configuration.run_triggered` | A user initiated a run of a {% data variables.product.prodname_codespaces %} prebuild configuration for a repository branch. For more information, see "[About Codespaces prebuilds](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)."
| `prebuild_configuration.update` | A {% data variables.product.prodname_codespaces %} prebuild configuration for a repository was edited. For more information, see "[About Codespaces prebuilds](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds)."
{%- endif %}

{%- ifversion ghes %}
### `pre_receive_environment` category actions

| Action | Description
| ------ | -----------
| `pre_receive_environment.create` | A pre-receive hook environment was created. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)."
| `pre_receive_environment.destroy` | A pre-receive hook environment was deleted. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)."
| `pre_receive_environment.download` | A pre-receive hook environment was downloaded. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)."
| `pre_receive_environment.update` | A pre-receive hook environment was updated. For more information, see "[Creating a pre-receive hook environment](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)."

### `pre_receive_hook` category actions

| Action | Description
|--------|-------------
| `pre_receive_hook.create` | A pre-receive hook was created. For more information, see "[Creating pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks)."
| `pre_receive_hook.destroy` | A pre-receive hook was deleted. For more information, see "[Deleting pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks)."
| `pre_receive_hook.enforcement` | A pre-receive hook enforcement setting allowing repository and organization administrators to override the hook configuration was enabled or disabled. For more information, see "[Managing pre-receive hooks on the GitHub Enterprise Server appliance](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance)."
| `pre_receive_hook.rejected_push` | A pre-receive hook rejected a push.
| `pre_receive_hook.update` | A pre-receive hook was created. For more information, see "[Editing pre-receive hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks)."
| `pre_receive_hook.warned_push` | A pre-receive hook warned about a push.
{%- endif %}

### `private_repository_forking` category actions

| Action | Description
|--------|-------------
| `private_repository_forking.clear` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} cleared the policy setting for allowing forks of private and internal repositories, for a repository, organization or enterprise. For more information, see "[Managing the forking policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) and for enterprises "[Enforcing a policy for forking private or internal repositories](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."
| `private_repository_forking.disable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} disabled the policy setting for allowing forks of private and internal repositories, for a repository, organization or enterprise. Private and internal repositories are never allowed  to be forked. For more information, see "[Managing the forking policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) and for enterprises "[Enforcing a policy for forking private or internal repositories](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."
| `private_repository_forking.enable` | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} enabled the policy setting for allowing forks of private and internal repositories, for a repository, organization or enterprise. Private and internal repositories are always allowed to be forked. For more information, see "[Managing the forking policy for your repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), "[Managing the forking policy for your organization](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) and for enterprises "[Enforcing a policy for forking private or internal repositories](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)."

{%- ifversion fpt or ghec %}
### `profile_picture` category actions

| Action | Description
|--------|-------------
| `profile_picture.update` | A profile picture was updated.
{%- endif %}

### `project` category actions

| Action | Description
|--------|-------------
| `project.access` | A project board visibility was changed. For more information, see "[Changing project board visibility](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)."
| `project.close` | A project board was closed. For more information, see "[Closing a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)."
| `project.create` | A project board was created. For more information, see "[Creating a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)."
| `project.delete` | A project board was deleted. For more information, see "[Deleting a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)."
| `project.link` | A repository was linked to a project board. For more information, see "[Linking a repository to a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."
| `project.open` | A project board was reopened. For more information, see "[Reopening a closed project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)."
| `project.rename` | A project board was renamed. For more information, see "[Editing a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)."
| `project.unlink` | A repository was unlinked from a project board. For more information, see "[Linking a repository to a project board](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)."
| `project.update_org_permission` | The project's base-level permission for all organization members was changed or removed. For more information, see "[Managing access to a project board for organization members](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)."
| `project.update_team_permission` | A team's project board permission level was changed or when a team was added or removed from a project board. For more information, see "[Managing team access to an organization project board](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)."
| `project.update_user_permission` | An organization member or outside collaborator was added to or removed from a project board or had their permission level changed. For more information, see "[Managing an individual’s access to an organization project board](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)."

{%- ifversion fpt or ghec %}
### `project_field` category actions

| Action | Description
|--------|-------------
| `project_field.create` | A field was created in a project board. For more information, see "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-fields)."
| `project_field.delete` | A field was deleted in a project board. For more information, see "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-fields)."

### `project_view` category actions

| Action | Description
|--------|-------------
| `project_view.create` | A view was created in a project board. For more information, see "[Customizing your project (beta) views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#creating-a-project-view)."
| `project_view.delete` | A view was deleted in a project board. For more information, see "[Customizing your project (beta) views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#deleting-a-saved-view)."
{%- endif %}

### `protected_branch` category actions

| Action | Description
|--------|-------------
| `protected_branch.create ` | Branch protection was enabled on a branch.
| `protected_branch.destroy` | Branch protection was disabled on a branch.
| `protected_branch.dismiss_stale_reviews ` | Enforcement of dismissing stale pull requests was updated on a branch.
{%- ifversion ghes %}
| `protected_branch.dismissal_restricted_users_teams` | Enforcement of restricting users and/or teams who can dismiss reviews was updated on a branch.
{%- endif %}
| `protected_branch.policy_override ` | A branch protection requirement was overridden by a repository administrator.
| `protected_branch.rejected_ref_update ` | A branch update attempt was rejected.
| `protected_branch.required_status_override` | The required status checks branch protection requirement was overridden by a repository administrator.
| `protected_branch.review_policy_and_required_status_override` | The required reviews and required status checks branch protection requirements were overridden by a repository administrator.
| `protected_branch.review_policy_override` | The required reviews branch protection requirement was overridden by a repository administrator.
| `protected_branch.update_admin_enforced ` | Branch protection was enforced for repository administrators.
{%- ifversion ghes %}
| `protected_branch.update_allow_deletions_enforcement_level` | Enforcement of allowing users with push access to delete matching branches was updated on a branch.
| `protected_branch.update_allow_force_pushes_enforcement_level` | Enforcement of allowing force pushes for all users with push access was updated on a branch.
| `protected_branch.update_linear_history_requirement_enforcement_level` | Enforcement of requiring linear commit history was updated on a branch.
{%- endif %}
| `protected_branch.update_pull_request_reviews_enforcement_level ` | Enforcement of required pull request reviews was updated on a branch. Can be one of `0`(deactivated), `1`(non-admins), `2`(everyone).
| `protected_branch.update_require_code_owner_review ` | Enforcement of required code owner review was updated on a branch.
| `protected_branch.update_required_approving_review_count` | Enforcement of the required number of approvals before merging was updated on a branch.
| `protected_branch.update_required_status_checks_enforcement_level ` | Enforcement of required status checks was updated on a branch.
| `protected_branch.update_signature_requirement_enforcement_level ` | Enforcement of required commit signing was updated on a branch.
| `protected_branch.update_strict_required_status_checks_policy` | Enforcement of required status checks was updated on a branch.
| `protected_branch.update_name` | A branch name pattern was updated for a branch.

### `public_key` category actions

| Action | Description
|--------|-------------
| `public_key.create` | An SSH key was [added][add key] to a user account or a [deploy key][] was added to a repository.
| `public_key.delete` | An SSH key was removed from a user account or a [deploy key][] was removed from a repository.
| `public_key.update` | A user account's SSH key or a repository's [deploy key][] was updated.
| `public_key.unverification_failure` | A user account's SSH key or a repository's [deploy key][] was unable to be unverified.
| `public_key.unverify` | A user account's SSH key or a repository's [deploy key][] was unverified.
| `public_key.verification_failure` | A user account's SSH key or a repository's [deploy key][] was unable to be verified.
| `public_key.verify` | A user account's SSH key or a repository's [deploy key][] was verified.

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [deploy key]: /developers/overview/managing-deploy-keys#deploy-keys

{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
### `pull_request` category actions

| Action | Description
|--------|-------------
| `pull_request.close` | A pull request was closed without being merged. For more information, see "[Closing a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)."
| `pull_request.converted_to_draft` | A pull request was converted to a draft. For more information, see "[Changing the stage of a pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)."
| `pull_request.create` | A pull request was created. For more information, see "[Creating a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)."
| `pull_request.create_review_request` | A review was requested on a pull request. For more information, see "[About pull request reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)."
| `pull_request.in_progress` | A pull request was marked as in progress.
| `pull_request.indirect_merge` | A pull request was considered merged because the pull request's commits were merged into the target branch.
| `pull_request.merge` | A pull request was merged. For more information, see "[Merging a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)."
| `pull_request.ready_for_review` | A pull request was marked as ready for review. For more information, see "[Changing the stage of a pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)."
| `pull_request.remove_review_request` | A review request was removed from a pull request. For more information, see "[About pull request reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)."
| `pull_request.reopen` | A pull request was reopened after previously being closed.
| `pull_request_review.delete` | A review on a pull request was deleted.
| `pull_request_review.dismiss` | A review on a pull request was dismissed. For more information, see "[Dismissing a pull request review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."
| `pull_request_review.submit` | A review was submitted for a pull request. For more information, see "[About pull request reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)."

### `pull_request_review` category actions

| Action | Description
|--------|-------------
| `pull_request_review.delete` | A review on a pull request was deleted.
| `pull_request_review.dismiss` | A review on a pull request was dismissed. For more information, see "[Dismissing a pull request review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."
| `pull_request_review.submit` | A review on a pull request was submitted. For more information, see "[Submitting your review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review)."

### `pull_request_review_comment` category actions

| Action | Description
|--------|-------------
| `pull_request_review_comment.create` | A review comment was added to a pull request. For more information, see "[About pull request reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)."
| `pull_request_review_comment.delete` | A review comment on a pull request was deleted.
| `pull_request_review_comment.update` | A review comment on a pull request was changed.
{%- endif %}

### `repo` category actions

| Action | Description
|--------|-------------
| `repo.access`         | The visibility of a repository changed to private{%- ifversion ghes %}, public,{% endif %} or internal.
| `repo.actions_enabled` | {% data variables.product.prodname_actions %} was enabled for a repository.
| `repo.add_member`     | A collaborator was added to a repository.
| `repo.add_topic`     | A topic was added to a repository.
| `repo.advanced_security_disabled` | {% data variables.product.prodname_GH_advanced_security %} was disabled for a repository.
| `repo.advanced_security_enabled` | {% data variables.product.prodname_GH_advanced_security %} was enabled for a repository.
| `repo.advanced_security_policy_selected_member_disabled` | A repository administrator prevented {% data variables.product.prodname_GH_advanced_security %} features from being enabled for a repository.
| `repo.advanced_security_policy_selected_member_enabled` | A repository administrator allowed {% data variables.product.prodname_GH_advanced_security %} features to be enabled for a repository.
| `repo.archived`       | A repository was archived. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."
| `repo.code_scanning_analysis_deleted` | Code scanning analysis for a repository was deleted. For more information, see "[Delete a code scanning analysis from a repository](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)."
| `repo.change_merge_setting` | Pull request merge options were changed for a repository.
| `repo.clear_actions_settings` | A repository administrator cleared {% data variables.product.prodname_actions %} policy settings for a repository.
| `repo.config`         | A repository administrator blocked force pushes. For more information, see [Blocking force pushes to a repository](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/) to a repository.
{%- ifversion fpt or ghec %}
| `repo.config.disable_collaborators_only` | The interaction limit for collaborators only was disabled. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
| `repo.config.disable_contributors_only` | The interaction limit for prior contributors only was disabled in a repository. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
| `repo.config.disable_sockpuppet_disallowed` | The interaction limit for existing users only was disabled in a repository. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
| `repo.config.enable_collaborators_only` | The interaction limit for collaborators only was enabled in a repository. Users that are not collaborators or organization members were unable to interact with a repository for a set duration. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
| `repo.config.enable_contributors_only` | The interaction limit for prior contributors only was enabled in a repository. Users that are not prior contributors, collaborators or organization members were unable to interact with a repository for a set duration. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
| `repo.config.enable_sockpuppet_disallowed` | The interaction limit for existing users was enabled in a repository. New users aren't able to interact with a repository for a set duration. Existing users of the repository, contributors, collaborators or organization members are able to interact with a repository. For more information, see "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)."
{%- endif %}
{%- ifversion ghes %}
| `repo.config.disable_anonymous_git_access`| Anonymous Git read access was disabled for a repository. For more information, see "[Enabling anonymous Git read access for a repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)."
| `repo.config.enable_anonymous_git_access` | Anonymous Git read access was enabled for a repository. For more information, see "[Enabling anonymous Git read access for a repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)."
| `repo.config.lock_anonymous_git_access` | A repository's anonymous Git read access setting was locked, preventing repository administrators from changing (enabling or disabling) this setting. For more information, see "[Preventing users from changing anonymous Git read access](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."
| `repo.config.unlock_anonymous_git_access` | A repository's anonymous Git read access setting was unlocked, allowing repository administrators to change (enable or disable) this setting. For more information, see "[Preventing users from changing anonymous Git read access](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."
{%- endif %}
| `repo.create` | A repository was created.
| `repo.create_actions_secret` | A {% data variables.product.prodname_actions %} secret was created for a repository. For more information, see "[Creating encrypted secrets for a repository](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."
| `repo.create_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was created for a repository.
| `repo.destroy` | A repository was deleted.
{%- ifversion ghes %}
| `repo.disk_archive`  | A repository was archived on disk. For more information, see "[Archiving repositories](/repositories/archiving-a-github-repository/archiving-repositories)."
{%- endif %}
| `repo.download_zip` | A source code archive of a repository was downloaded as a ZIP file.
| `repo.pages_cname` | A {% data variables.product.prodname_pages %} custom domain was modified in a repository.
| `repo.pages_create` | A {% data variables.product.prodname_pages %} site was created.
| `repo.pages_destroy` | A {% data variables.product.prodname_pages %} site was deleted.
| `repo.pages_https_redirect_disabled` | HTTPS redirects were disabled for a {% data variables.product.prodname_pages %} site.
| `repo.pages_https_redirect_enabled` | HTTPS redirects were enabled for a {% data variables.product.prodname_pages %} site.
| `repo.pages_source` | A {% data variables.product.prodname_pages %} source was modified.
| `repo.pages_private` | A {% data variables.product.prodname_pages %} site visibility was changed to private.
| `repo.pages_public` | A {% data variables.product.prodname_pages %} site visibility was changed to public.
| `repo.register_self_hosted_runner` | A new self-hosted runner was registered. For more information, see "[Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."
| `repo.remove_self_hosted_runner` | A self-hosted runner was removed. For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."
| `repo.remove_actions_secret` | A {% data variables.product.prodname_actions %} secret was deleted for a repository.
| `repo.remove_integration_secret` | A {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} or {% data variables.product.prodname_codespaces %}{% endif %} integration secret was deleted for a repository.
| `repo.remove_member` | A collaborator was removed from a repository.
| `repo.remove_topic` | A topic was removed from a repository.
| `repo.rename` | A repository was renamed.
{%- ifversion fpt or ghec %}
| `repo.set_actions_fork_pr_approvals_policy` | The setting for requiring approvals for workflows from public forks was changed for a repository. For more information, see "[Configuring required approval for workflows from public forks](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)."
{%- endif %}
| `repo.set_actions_retention_limit` | The retention period for {% data variables.product.prodname_actions %} artifacts and logs in a repository was changed. For more information, see "[Configuring the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)."
{%- ifversion fpt or ghec or ghes > 3.1 or ghae %}
| `repo.self_hosted_runner_online` | The runner application was started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `repo.self_hosted_runner_offline` | The runner application was stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `repo.self_hosted_runner_updated` | The runner application was updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %}
| `repo.staff_unlock` | An enterprise administrator or GitHub staff (with permission from a repository administrator) temporarily unlocked the repository.
| `repo.transfer` | A user accepted a request to receive a transferred repository.
| `repo.transfer_outgoing` | A repository was transferred to another repository network.
| `repo.transfer_start` | A user sent a request to transfer a repository to another user or organization.
| `repo.unarchived` | A repository was unarchived. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."
| `repo.update_actions_settings` | A repository administrator changed {% data variables.product.prodname_actions %} policy settings for a repository.
| `repo.update_actions_secret` | A {% data variables.product.prodname_actions %} secret was updated.
| `repo.update_actions_access_settings` | The setting to control how a repository was used by {% data variables.product.prodname_actions %} workflows in other repositories was changed.
| `repo.update_default_branch` | The default branch for a repository was changed.
| `repo.update_integration_secret` | A {% data variables.product.prodname_dependabot %} or {% data variables.product.prodname_codespaces %} integration secret was updated for a repository.
| `repo.update_member` | A user's permission to a repository was changed.

{%- ifversion fpt or ghec %}
### `repository_advisory` category actions

| Action | Description
|--------|-------------
| `repository_advisory.close` | Someone closed a security advisory. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
| `repository_advisory.cve_request` | Someone requested a CVE (Common Vulnerabilities and Exposures) number from {% data variables.product.prodname_dotcom %} for a draft security advisory.
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} made a security advisory public in the {% data variables.product.prodname_advisory_database %}.
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %} withdrew a security advisory that was published in error.
| `repository_advisory.open` | Someone opened a draft security advisory.
| `repository_advisory.publish` | Someone publishes a security advisory.
| `repository_advisory.reopen` | Someone reopened as draft security advisory.
| `repository_advisory.update` | Someone edited a draft or published security advisory.

### `repository_content_analysis` category actions

| Action | Description
|--------|-------------
| `repository_content_analysis.enable` | An organization owner or repository administrator [enabled data use settings for a private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `repository_content_analysis.disable` | An organization owner or repository administrator [disabled data use settings for a private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

### `repository_dependency_graph` category actions

| Action | Description
|--------|-------------
| `repository_dependency_graph.disable` | A repository owner or administrator disabled the dependency graph for a private repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
| `repository_dependency_graph.enable` | A repository owner or administrator enabled the dependency graph for a private repository.
{%- endif %}

### `repository_image` category actions

| Action | Description
|--------|-------------
| `repository_image.create` | An image to represent a repository was uploaded.
| `repository_image.destroy` | An image to represent a repository was deleted.

### `repository_invitation` category actions

| Action | Description
|--------|-------------
| `repository_invitation.accept` | An invitation to join a repository was accepted.
| `repository_invitation.create` | An invitation to join a repository was sent.
| `repository_invitation.reject` | An invitation to join a repository was canceled.

### `repository_projects_change` category actions

| Action | Description
|--------|-------------
| `repository_projects_change.clear` | The repository projects policy was removed for an organization, or all organizations in the enterprise. Organization admins can now control their repository projects settings. For more information, see "[Enforcing project board policies in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise)."
| `repository_projects_change.disable` | Repository projects were disabled for a repository, all repositories in an organization, or all organizations in an enterprise.
| `repository_projects_change.enable` | Repository projects were enabled for a repository, all repositories in an organization, or all organizations in an enterprise.

{%- ifversion ghec or ghes or ghae %}
### `repository_secret_scanning` category actions

| Action | Description
|--------|-------------
| `repository_secret_scanning.disable` | A repository owner or administrator disabled secret scanning for a {% ifversion ghec %}private or internal {% endif %}repository. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `repository_secret_scanning.enable` | A repository owner or administrator enabled secret scanning for a {% ifversion ghec %}private or internal {% endif %}repository.
{%- endif %}

{%- if secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_custom_pattern` category actions

| Action | Description
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | A custom pattern is published for secret scanning in a repository. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."
| `repository_secret_scanning_custom_pattern.delete` | A custom pattern is removed from secret scanning in a repository. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)."
| `repository_secret_scanning_custom_pattern.update` | Changes to a custom pattern are saved for secret scanning in a repository. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)."

### `repository_secret_scanning_push_protection` category actions

| Action | Description
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | A repository owner or administrator  disabled secret scanning for a repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
| `repository_secret_scanning_push_protection.enable` | A repository owner or administrator  enabled secret scanning for a repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
{%- endif %}
### `repository_visibility_change` category actions

| Action | Description
|--------|-------------
| `repository_visibility_change.clear` | The repository visibility change setting was cleared for an organization or enterprise. For more information, see "[Restricting repository visibility changes in your organization](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)" and "[Enforcing a policy for changes to repository visibility](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility) for an enterprise."
| `repository_visibility_change.disable` | The ability for enterprise members to update a repository's visibility was disabled. Members are unable to change repository visibilities in an organization, or all organizations in an enterprise.
| `repository_visibility_change.enable` | The ability for enterprise members to update a repository's visibility was enabled. Members are able to change repository visibilities in an organization, or all organizations in an enterprise.

{%- ifversion fpt or ghec or ghes or ghae %}
### `repository_vulnerability_alert` category actions

| Action | Description
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %} created a {% data variables.product.prodname_dependabot %} alert for a repository that uses a vulnerable dependency. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
| `repository_vulnerability_alert.dismiss` | An organization owner or repository administrator dismissed a {% data variables.product.prodname_dependabot %} alert about a vulnerable dependency.
| `repository_vulnerability_alert.resolve` | Someone with write access to a repository pushed changes to update and resolve a vulnerability in a project dependency.
{%- endif %}

{%- ifversion fpt or ghec %}
### `repository_vulnerability_alerts` category actions

| Action | Description
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | An organization owner or repository administrator updated the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies in the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
| `repository_vulnerability_alerts.disable` | A repository owner or repository administrator disabled {% data variables.product.prodname_dependabot_alerts %}.
| `repository_vulnerability_alerts.enable` | A repository owner or repository administrator enabled {% data variables.product.prodname_dependabot_alerts %}.
{%- endif %}

### `required_status_check` category actions

| Action | Description
|--------|-------------
| `required_status_check.create` | A status check was marked as required for a protected branch. For more information, see "[Require status checks before merging](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)."
| `required_status_check.destroy` | A status check was no longer marked as required for a protected branch. For more information, see "[Require status checks before merging](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)."

{%- ifversion ghec or ghes > 3.1 %}
### `restrict_notification_delivery` category actions

| Action | Description
|--------|-------------
| `restrict_notification_delivery.enable` | Email notification restrictions for an organization or enterprise were enabled. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" and "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."
| `restrict_notification_delivery.disable` | Email notification restrictions for an organization or enterprise were disabled. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)" and "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."
{%- endif %}

{%- if custom-repository-roles %}
### `role` category actions

| Action | Description
|--------|-------------
|`create` | An organization owner created a new custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
|`destroy` | An organization owner deleted a custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
|`update` | An organization owner edited an existing custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### `secret_scanning` category actions

| Action | Description
|--------|-------------
| `secret_scanning.disable` | An organization owner disabled secret scanning for all existing{% ifversion ghec %} private or internal{% endif %} repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `secret_scanning.enable` | An organization owner enabled secret scanning for all existing{% ifversion ghec %} private or internal{% endif %} repositories.

### `secret_scanning_new_repos` category actions

| Action | Description
|--------|-------------
| `secret_scanning_new_repos.disable` | An organization owner disabled secret scanning for all new{% ifversion ghec %} private or internal{% endif %} repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `secret_scanning_new_repos.enable` | An organization owner enabled secret scanning for all new{% ifversion ghec %} private or internal{% endif %} repositories.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### `security_key` category actions

| Action | Description
|--------|-------------
| `security_key.register` | A security key was registered for an account.
| `security_key.remove` | A security key was removed from an account.
{%- endif %}

{%- ifversion fpt or ghec %}
### `sponsors` category actions

| Action | Description
|--------|-------------
| `sponsors.agreement_sign` | A {% data variables.product.prodname_sponsors %} agreement was signed on behalf of an organization.
| `sponsors.custom_amount_settings_change` | Custom amounts for {% data variables.product.prodname_sponsors %} were enabled or disabled, or the suggested custom amount was changed. For more information, see "[Managing your sponsorship tiers](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)."
| `sponsors.fiscal_host_change` | The fiscal host for a {% data variables.product.prodname_sponsors %} listing was updated.
| `sponsors.withdraw_agreement_signature` | A signature was withdrawn from a {% data variables.product.prodname_sponsors %} agreement that applies to an organization.
| `sponsors.repo_funding_links_file_action` | The FUNDING file in a repository was changed. For more information, see "[Displaying a sponsor button in your repository](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)."
| `sponsors.sponsor_sponsorship_cancel` | A sponsorship was canceled. For more information, see "[Downgrading a sponsorship](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)."
| `sponsors.sponsor_sponsorship_create` | A sponsorship was created, by sponsoring an account. For more information, see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)."
| `sponsors.sponsor_sponsorship_payment_complete` | After you sponsor an account and a payment has been processed, the sponsorship payment was marked as complete. For more information, see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)."
| `sponsors.sponsor_sponsorship_preference_change` | The option to receive email updates from a sponsored account was changed. For more information, see "[Managing your sponsorship](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)."
| `sponsors.sponsor_sponsorship_tier_change` | A sponsorship was upgraded or downgraded. For more information, see "[Upgrading a sponsorship](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)" and "[Downgrading a sponsorship](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)."
| `sponsors.sponsored_developer_approve` | A {% data variables.product.prodname_sponsors %} account was approved. For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)."
| `sponsors.sponsored_developer_create` | A {% data variables.product.prodname_sponsors %} account was created. For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)."
| `sponsors.sponsored_developer_disable` | A {% data variables.product.prodname_sponsors %} account was disabled.
| `sponsors.sponsored_developer_profile_update` | You edit a sponsored organization profile. For more information, see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)."
| `sponsors.sponsored_developer_redraft` | A {% data variables.product.prodname_sponsors %} account was returned to draft state from approved state.
| `sponsors.sponsored_developer_request_approval` | An application for {% data variables.product.prodname_sponsors %} was submitted for approval. For more information, see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)."
| `sponsors.sponsored_developer_tier_description_update` | The description for a sponsorship tier was changed. For more information, see "[Managing your sponsorship tiers](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)."
| `sponsors.update_tier_welcome_message` | The welcome message for a {% data variables.product.prodname_sponsors %} tier for an organization was updated.
| `sponsors.update_tier_repository` | A {% data variables.product.prodname_sponsors %} tier changed access for a repository.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
### `ssh_certificate_authority` category actions

| Action | Description
|--------|-------------
| `ssh_certificate_authority.create` | An SSH certificate authority for an organization or enterprise was created. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."
| `ssh_certificate_authority.destroy` | An SSH certificate authority for an organization or enterprise was deleted. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."

### `ssh_certificate_requirement` category actions

| Action | Description
|--------|-------------
| `ssh_certificate_requirement.enable` | The requirement for members to use SSH certificates to access an organization resources was enabled. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."
| `ssh_certificate_requirement.disable` | The requirement for members to use SSH certificates to access an organization resources was disabled. For more information, see "[Managing your organization's SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)" and "[Managing SSH certificate authorities for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."
{%- endif %}

### `staff` category actions

| Action | Description
|--------|-------------
| `staff.disable_repo`          | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator disabled access to a repository and all of its forks.
| `staff.enable_repo`           | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator re-enabled access to a repository and all of its forks.
{%- ifversion ghes > 3.2 or ghae %}
| `staff.exit_fake_login`       | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} ended an impersonation session on {% data variables.product.product_name %}.
| `staff.fake_login`            | An enterprise owner{% ifversion ghes %} or site administrator{% endif %} signed into {% data variables.product.product_name %} as another user.
{%- endif %}
| `staff.repo_lock`             | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator locked (temporarily gained full access to) a user's private repository.
| `staff.repo_unlock`           | An organization{% ifversion ghes %}, repository or site{% else %} or repository{% endif %} administrator unlocked (ended their temporary access to) a user's private repository.
{%- ifversion ghes %}
| `staff.search_audit_log` | A site administrator performed a search of the site admin audit log.
{%- endif %}
| `staff.set_domain_token_expiration` | {% ifversion ghes %}A site administrator or {% endif %}GitHub staff set the verification code expiry time for an organization or enterprise domain. {% ifversion ghec or ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" and "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}
{%- ifversion ghes %}
| `staff.unlock`                | A site administrator unlocked (temporarily gained full access to) all of a user's private repositories.
{%- endif %}
| `staff.unverify_domain` | {% ifversion ghes %}A site administrator or {% endif %}GitHub staff unverified an organization or enterprise domain. {% ifversion ghec or ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" and "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}
| `staff.verify_domain` | {% ifversion ghes %}A site administrator or {% endif %}GitHub staff verified an organization or enterprise domain. {% ifversion ghec or ghes > 3.1 %}For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" and "[Verifying or approving a domain for your enterprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."{% endif %}
{%- ifversion ghes %}
| `staff.view_audit_log` | A site administrator viewed the site admin audit log.
{%- endif %}

### `team` category actions

| Action | Description
|--------|-------------
| `team.add_member` | A member of an organization was added to a team. For more information, see "[Adding organization members to a team](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)."
| `team.add_repository` | A team was given access and permissions to a repository.
| `team.change_parent_team` | A child team was created or a child team's parent was changed. For more information, see "[Moving a team in your organization’s hierarchy](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)."
| `team.change_privacy` | A team's privacy level was changed. For more information, see "[Changing team visibility](/organizations/organizing-members-into-teams/changing-team-visibility)."
| `team.create` | A user account or repository was added to a team.
| `team.delete` | A user account or repository was removed from a team.
| `team.destroy` | A team was deleted.
{%- ifversion ghec or ghes or ghae %}
| `team.demote_maintainer` | A user was demoted from a team maintainer to a team member.
| `team.promote_maintainer` | A user was promoted from a team member to a team maintainer. For more information, see "[Promoting an organization member to team maintainer](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer)."
{%- endif %}
| `team.remove_member` | A member of an organization was removed from a team. For more information, see "[Removing organization members from a team](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)."
| `team.remove_repository` | A repository was no longer under a team's control.
| `team.rename` | A team's name was changed.
| `team.update_permission` | A team's access was changed.
| `team.update_repository_permission` | A team's permission to a repository was changed.

### `team_discussions` category actions

| Action | Description
|--------|-------------
| `team_discussions.clear` | An organization owner cleared the setting to allow team discussions for an organization or enterprise.
| `team_discussions.disable` | An organization owner disabled team discussions for an organization. For more information, see "[Disabling team discussions for your organization](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)."
| `team_discussions.enable` | An organization owner enabled team discussions for an organization.

{%- ifversion ghec %}
### `team_sync_tenant` category actions

| Action | Description
|--------|-------------
| `team_sync_tenant.disabled` | Team synchronization with a tenant was disabled. For more information, see "[Managing team synchronization for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."
| `team_sync_tenant.enabled` | Team synchronization with a tenant was enabled. For more information, see "[Managing team synchronization for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" and "[Managing team synchronization for organizations in your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."
| `team_sync_tenant.update_okta_credentials` | The Okta credentials for team synchronization with a tenant were changed.
{%- endif %}

{%- ifversion fpt or ghes %}
### `two_factor_authentication` category actions

| Action | Description
|--------|-------------
| `two_factor_authentication.disabled` | [Two-factor authentication][2fa] was disabled for a user account.
| `two_factor_authentication.enabled`  | [Two-factor authentication][2fa] was enabled for a user account.
| `two_factor_authentication.password_reset_fallback_sms` | A one-time password code was sent to a user account fallback phone number.
| `two_factor_authentication.recovery_codes_regenerated` | Two factor recovery codes were regenerated for a user account.
| `two_factor_authentication.sign_in_fallback_sms` | A one-time password code was sent to a user account fallback phone number.
| `two_factor_authentication.update_fallback` | The two-factor authentication fallback for a user account was changed.
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
### `user` category actions

| Action | Description
|--------|-------------
| `user.add_email`                  | An email address was added to a user account.
| `user.async_delete`               | An asynchronous job was started to destroy a user account, eventually triggering a `user.delete` event.
| `user.audit_log_export` | Audit log entries were exported.
| `user.block_user` | A user was blocked by another user{% ifversion ghes %} or a site administrator{% endif %}.
| `user.change_password`            | A user changed his or her password.
| `user.create`                     | A new user account was created.
| `user.creation_rate_limit_exceeded` | The rate of creation of user accounts, applications, issues, pull requests or other resources exceeded the configured rate limits, or too many users were followed too quickly.
| `user.delete`                     | A user account was destroyed by an asynchronous job.
{%- ifversion ghes %} 
| `user.demote`                     | A site administrator was demoted to an ordinary user account.
{%- endif %}
| `user.destroy`                    | A user deleted his or her account, triggering `user.async_delete`.
| `user.failed_login`               | A user tries to sign in with an incorrect username, password, or two-factor authentication code.
| `user.flag_as_large_scale_contributor` | A user account was flagged as a large scale contributor. Only contributions from public repositories the user owns will be shown in their contribution graph, in order to prevent timeouts.
| `user.forgot_password`            | A user requested a password reset via the sign-in page.
| `user.hide_private_contributions_count` | A user changed the visibility of their private contributions. The number of contributions to private repositories on the user's profile are now hidden. For more information, see "[Publicizing or hiding your private contributions on your profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)."
| `user.lockout` | A user was locked out of their account.
| `user.login`                      | A user signed in.
{%- ifversion ghes or ghae %}
| `user.mandatory_message_viewed`   | A user viewed a mandatory message. For more information see "[Customizing user messages for your enterprise](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)" for details."
{%- endif %}
| `user.minimize_comment` | A comment made by a user was minimized.
{%- ifversion ghes %} 
| `user.promote`                    | An ordinary user account was promoted to a site administrator.
{%- endif %}
| `user.recreate` | A user's account was restored.
| `user.remove_email`               | An email address was removed from a user account.
| `user.remove_large_scale_contributor_flag` | A user account was no longer flagged as a large scale contributor.
| `user.rename`                     | A username was changed.
| `user.reset_password` | A user reset their account password.
| `user.show_private_contributions_count` | A user changed the visibility of their private contributions. The number of contributions to private repositories on the user's profile are now shown. For more information, see "[Publicizing or hiding your private contributions on your profile](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)."
| `user.sign_in_from_unrecognized_device` | A user signed in from an unrecognized device.
| `user.sign_in_from_unrecognized_device_and_location` | A user signed in from an unrecognized device and location.
| `user.sign_in_from_unrecognized_location` | A user signed in from an unrecognized location.
| `user.suspend`                    | A user account was suspended by an enterprise owner {% ifversion ghes %} or site administrator{% endif %}.
| `user.two_factor_challenge_failure` | A 2FA challenge issued for a user account failed.
| `user.two_factor_challenge_success` | A 2FA challenge issued for a user account succeeded.
| `user.two_factor_recover` | A user used their 2FA recovery codes.
| `user.two_factor_recovery_codes_downloaded` | A user downloaded 2FA recovery codes for their account.
| `user.two_factor_recovery_codes_printed` | A user printed 2FA recovery codes for their account.
| `user.two_factor_recovery_codes_viewed` | A user viewed 2FA recovery codes for their account.
| `user.two_factor_requested`       | A user was prompted for a two-factor authentication code.
| `user.unblock_user` | A user was unblocked another user{% ifversion ghes %} or a site administrator{% endif %}.
| `user.unminimize_comment` | A comment made by a user was unminimized.
| `user.unsuspend` | A user account was unsuspended by an enterprise owner {% ifversion ghes %} or site administrator{% endif %}.
{%- endif %}

{%- ifversion ghec or ghes %}
### `user_license` category actions

| Action | Description
|--------|-------------
| `user_license.create` | A seat license for a user in an enterprise was created.
| `user_license.destroy` | A seat license for a user in an enterprise was deleted.
| `user_license.update` | A seat license type for a user in an enterprise was changed.
{%- endif %}

{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
### `workflows` category actions

{% data reusables.audit_log.audit-log-events-workflows %}
{%- endif %}
