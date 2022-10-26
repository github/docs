---
title: Reviewing the audit log for your organization
intro: 'The audit log allows organization admins to quickly review the actions performed by members of your organization. It includes details such as who performed the action, what the action was, and when it was performed.'
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
---

## Accessing the audit log

The audit log lists events triggered by activities that affect your organization within the current month and previous six months. Only owners can access an organization's audit log.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Searching the audit log

{% data reusables.audit_log.audit-log-search %}

### Search based on the action performed

To search for specific events, use the `action` qualifier in your query. Actions listed in the audit log are grouped within the following categories:

| Category name | Description
|------------------|-------------------{% ifversion fpt or ghec %}
| [`account`](#account-category-actions) | Contains all activities related to your organization account.{% endif %}{% ifversion fpt or ghec %}
| [`advisory_credit`](#advisory_credit-category-actions) | Contains all activities related to crediting a contributor for a security advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."{% endif %}{% ifversion pat-v2%}
| [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | Contains activities related to your organization's approval policy for {% data variables.product.pat_v2 %}s. For more information, see "[Setting a {% data variables.product.pat_generic %} policy for your organization](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."{% endif %}{% ifversion fpt or ghec %}
| [`billing`](#billing-category-actions) | Contains all activities related to your organization's billing.{% endif %}{% ifversion fpt or ghec %}
| [`business`](#business-category-actions) | Contains activities related to business settings for an enterprise. |{% endif %}{% ifversion fpt or ghec %}
| [`codespaces`](#codespaces-category-actions) | Contains all activities related to your organization's codespaces. |{% endif %}
| [`dependabot_alerts`](#dependabot_alerts-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_alerts %} in existing repositories. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_alerts %} in new repositories created in the organization.{% ifversion fpt or ghec or ghes %}
| [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} in existing repositories. For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.{% endif %}{% ifversion fpt or ghec %}
| [`dependency_graph`](#dependency_graph-category-actions) | Contains organization-level configuration activities for dependency graphs for repositories. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | Contains organization-level configuration activities for new repositories created in the organization.{% endif %}
| [`discussion_post`](#discussion_post-category-actions) | Contains all activities related to discussions posted to a team page.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | Contains all activities related to replies to discussions posted to a team page.{% ifversion fpt or ghes or ghec %}
| [`enterprise`](#enterprise-category-actions) | Contains activities related to enterprise settings. |{% endif %}
| [`hook`](#hook-category-actions) | Contains all activities related to webhooks.
| [`integration_installation`](#integration_installation-category-actions)  | Contains activities related to integrations installed in an account. |
| [`integration_installation_request`](#integration_installation_request-category-actions) | Contains all activities related to organization member requests for owners to approve integrations for use in the organization. |{% ifversion ghec or ghae %}
| [`ip_allow_list`](#ip_allow_list-category-actions) | Contains activities related to enabling or disabling the IP allow list for an organization.
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | Contains activities related to the creation, deletion, and editing of an IP allow list entry for an organization.{% endif %}
| [`issue`](#issue-category-actions) | Contains activities related to deleting an issue. {% ifversion fpt or ghec %}
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contains all activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% ifversion fpt or ghes or ghec %}
| [`members_can_create_pages`](#members_can_create_pages-category-actions) | Contains all activities related to managing the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)." | {% endif %}
| [`org`](#org-category-actions) | Contains activities related to organization membership.{% ifversion ghec %}
| [`org_credential_authorization`](#org_credential_authorization-category-actions) | Contains all activities related to authorizing credentials for use with SAML single sign-on.{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}
| [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | Contains organization-level activities related to secret scanning custom patterns. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)." {% endif %}
| [`organization_default_label`](#organization_default_label-category-actions) | Contains all activities related to default labels for repositories in your organization.
| [`oauth_application`](#oauth_application-category-actions) | Contains all activities related to OAuth Apps.
| [`packages`](#packages-category-actions) | Contains all activities related to {% data variables.product.prodname_registry %}.{% ifversion fpt or ghec %}
| [`payment_method`](#payment_method-category-actions) | Contains all activities related to how your organization pays for GitHub.{% endif %}{% ifversion pat-v2%}
| [`personal_access_token`](#personal_access_token-category-actions) | Contains activities related to {% data variables.product.pat_v2 %}s in your organization. For more information, see "[Creating a {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."{% endif %}
| [`profile_picture`](#profile_picture-category-actions) | Contains all activities related to your organization's profile picture.
| [`project`](#project-category-actions) | Contains all activities related to project boards.
| [`protected_branch`](#protected_branch-category-actions) | Contains all activities related to protected branches.
| [`repo`](#repo-category-actions) | Contains activities related to the repositories owned by your organization.{% ifversion fpt or ghec %}
| [`repository_advisory`](#repository_advisory-category-actions) | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}.  For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | Contains all activities related to [enabling or disabling data use for a private repository](/articles/about-github-s-use-of-your-data).{% endif %}{% ifversion fpt or ghec %}
| [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | Contains repository-level activities related to enabling or disabling the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."{% endif %}{% ifversion ghes or ghae or ghec %}
| [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | Contains repository-level activities related to secret scanning. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)." {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}
| [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | Contains repository-level activities related to secret scanning custom patterns. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)." {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}
| [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | Contains repository-level activities related to secret scanning custom patterns. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)." {% endif %}
| [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | Contains all activities related to [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).{% ifversion fpt or ghec %}
| [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion custom-repository-roles %}
| [`role`](#role-category-actions) | Contains all activities related to [custom repository roles](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %}
| [`secret_scanning`](#secret_scanning-category-actions) | Contains organization-level configuration activities for secret scanning in existing repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Contains organization-level configuration activities for secret scanning for new repositories created in the organization. {% endif %}{% ifversion fpt or ghec %}
| [`sponsors`](#sponsors-category-actions) | Contains all events related to sponsor buttons (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}
| [`team`](#team-category-actions) | Contains all activities related to teams in your organization.
| [`team_discussions`](#team_discussions-category-actions) | Contains activities related to managing team discussions for an organization.
| [`workflows`](#workflows-category-actions) | Contains activities related to {% data variables.product.prodname_actions %} workflows.

You can search for specific sets of actions using these terms. For example:

  * `action:team` finds all events grouped within the team category.
  * `-action:hook` excludes all events in the webhook category.

Each category has a set of associated actions that you can filter on. For example:

  * `action:team.create` finds all events where a team was created.
  * `-action:hook.events_changed` excludes all events where the events on a webhook have been altered.

### Search based on time of action

Use the `created` qualifier to filter events in the audit log based on when they occurred. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

For example:

  * `created:2014-07-08` finds all events that occurred on July 8th, 2014.
  * `created:>=2014-07-08` finds all events that occurred on or after July 8th, 2014.
  * `created:<=2014-07-08` finds all events that occurred on or before July 8th, 2014.
  * `created:2014-07-01..2014-07-31` finds all events that occurred in the month of July 2014.

{% note %}

**Note**: The audit log contains data for the current month and every day of the previous six months.

{% endnote %}

### Search based on location

Using the qualifier `country`, you can filter events in the audit log based on the originating country. You can use a country's two-letter short code or its full name. Keep in mind that countries with spaces in their name will need to be wrapped in quotation marks. For example:

  * `country:de` finds all events that occurred in Germany.
  * `country:Mexico` finds all events that occurred in Mexico.
  * `country:"United States"` all finds events that occurred in the United States.

{% ifversion fpt or ghec %}
## Exporting the audit log

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

## Using the audit log API

{% ifversion fpt %}

Organizations that use {% data variables.product.prodname_ghe_cloud %} can interact with the audit log using the GraphQL API and REST API. For more information, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

You can interact with the audit log using the GraphQL API{% ifversion fpt or ghec %} or the REST API{% endif %}.

{% ifversion ghec %}

{% note %}

**Note:** To use the audit log API, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### Using the GraphQL API

{% endif %}

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %}
Note that you can't retrieve Git events using the GraphQL API. To retrieve Git events, use the REST API instead. For more information, see "[`git` category actions](#git-category-actions)."
{% endif %}

The GraphQL response can include data for up to 90 to 120 days.

For example, you can make a GraphQL request to see all the new organization members added to your organization. For more information, see the "[GraphQL API Audit Log](/graphql/reference/interfaces#auditentry/)."

{% ifversion ghec %}

### Using the REST API

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

By default, only events from the past three months are returned. To include older events, you must specify a timestamp in your query.

For more information about the audit log REST API, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

{% endif %}
{% endif %}

## Audit log actions

An overview of some of the most common actions that are recorded as events in the audit log.

{% ifversion fpt or ghec %}
### `account` category actions

| Action | Description
|------------------|-------------------
| `billing_plan_change` | Triggered when an organization's [billing cycle](/articles/changing-the-duration-of-your-billing-cycle) changes.
| `plan_change` | Triggered when an organization's [subscription](/articles/about-billing-for-github-accounts) changes.
| `pending_plan_change` | Triggered when an organization owner or billing manager [cancels or downgrades a paid subscription](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/).
| `pending_subscription_change` | Triggered when a [{% data variables.product.prodname_marketplace %} free trial starts or expires](/articles/about-billing-for-github-marketplace/).
{% endif %}

{% ifversion fpt or ghec %}
### `advisory_credit` category actions

| Action | Description
|------------------|-------------------
| `accept` | Triggered when someone accepts credit for a security advisory. For more information, see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory)."
| `create` | Triggered when the administrator of a security advisory adds someone to the credit section.
| `decline` | Triggered when someone declines credit for a security advisory.
| `destroy` | Triggered when the administrator of a security advisory removes someone from the credit section.
{% endif %}

{% ifversion pat-v2 %}

### `auto_approve_personal_access_token_requests` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when the organization must approve {% data variables.product.pat_v2 %}s before the tokens can access organization resources. For more information, see "[Setting a {% data variables.product.pat_generic %} policy for your organization](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."
| `enable` | Triggered when {% data variables.product.pat_v2 %}s can access organization resources without prior approval. For more information, see "[Setting a {% data variables.product.pat_generic %} policy for your organization](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)."

{% endif %}

{% ifversion fpt or ghec %}
### `billing` category actions

| Action | Description
|------------------|-------------------
| `change_billing_type` | Triggered when your organization [changes how it pays for {% data variables.product.prodname_dotcom %}](/articles/adding-or-editing-a-payment-method).
| `change_email` | Triggered when your organization's [billing email address](/articles/setting-your-billing-email) changes.
{% endif %}

### `business` category actions

| Action | Description
|------------------|-------------------{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Triggered when the setting for requiring approvals for workflows from public forks is changed for an enterprise. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)."{% endif %}
| `set_actions_retention_limit` | Triggered when the retention period for {% data variables.product.prodname_actions %} artifacts and logs is changed for an enterprise. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Triggered when the policy for workflows on  private repository forks is changed. For more information, see "{% ifversion fpt or ghec%}[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Enabling workflows for private repository forks](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}."{% endif %}

{% ifversion fpt or ghec %}
### `codespaces` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a user [creates a codespace](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Triggered when a user resumes a suspended codespace.
| `delete` | Triggered when a user [deletes a codespace](/github/developing-online-with-codespaces/deleting-a-codespace).
| `create_an_org_secret` | Triggered when a user creates an organization-level [secret for {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)
| `update_an_org_secret` | Triggered when a user updates an organization-level [secret for {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `remove_an_org_secret` | Triggered when a user removes an organization-level [secret for {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `manage_access_and_security` | Triggered when a user updates [which repositories a codespace can access](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{% endif %}

### `dependabot_alerts` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories.

### `dependabot_alerts_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories.

{% ifversion fpt or ghec or ghes %}
### `dependabot_security_updates` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories.

### `dependabot_security_updates_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories.
{% endif %}

{% ifversion fpt or ghec %}
### `dependency_graph` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables the dependency graph for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables the dependency graph for all existing repositories.

### `dependency_graph_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables the dependency graph for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables the dependency graph for all new repositories.
{% endif %}

### `discussion_post` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when [a team discussion post is edited](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Triggered when [a team discussion post is deleted](/articles/managing-disruptive-comments/#deleting-a-comment).

### `discussion_post_reply` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when [a reply to a team discussion post is edited](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Triggered when [a reply to a team discussion post is deleted](/articles/managing-disruptive-comments/#deleting-a-comment).

{% ifversion fpt or ghes or ghec %}
### `enterprise` category actions

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### `environment` category actions

| Action | Description
|------------------|-------------------
| `create_actions_secret` | Triggered when a secret is created in an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
| `delete` | Triggered when an environment is deleted. For more information, see ["Deleting an environment](/actions/reference/environments#deleting-an-environment)."
| `remove_actions_secret` |  Triggered when a secret is removed from an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
| `update_actions_secret` | Triggered when a secret in an environment is updated. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
{% endif %}

{% ifversion ghae %}
### `external_group` category actions

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### `external_identity` category actions

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### `git` category actions

{% note %}

**Note:** To access Git events in the audit log, you must use the audit log REST API. The audit log REST API is available for users of {% data variables.product.prodname_ghe_cloud %} only. For more information, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Action  | Description
|---------|----------------------------
| `clone` | Triggered when a repository is cloned.
| `fetch` | Triggered when changes are fetched from a repository.
| `push`  | Triggered when changes are pushed to a repository.

{% endif %}

### `hook` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when [a new hook was added](/articles/creating-webhooks) to a repository owned by your organization.
| `config_changed` | Triggered when an existing hook has its configuration altered.
| `destroy` | Triggered when an existing hook was removed from a repository.
| `events_changed` | Triggered when the events on a hook have been altered.

### `integration_installation` category actions

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

### `integration_installation_request` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when an organization member requests that an organization owner install an integration for use in the organization.
| `close` | Triggered when a request to install an integration for use in an organization is either approved or denied by an organization owner, or canceled by the organization member who opened the request.

{% ifversion ghec or ghae %}
### `ip_allow_list` category actions

| Action | Description
|------------------|-------------------
| `enable` | Triggered when an IP allow list was enabled for an organization.
| `disable` | Triggered when an IP allow list was disabled for an organization.
| `enable_for_installed_apps` | Triggered when an IP allow list was enabled for installed {% data variables.product.prodname_github_apps %}.
| `disable_for_installed_apps` | Triggered when an IP allow list was disabled for installed {% data variables.product.prodname_github_apps %}.

### `ip_allow_list_entry` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when an IP address was added to an IP allow list.
| `update` | Triggered when an IP address or its description was changed.
| `destroy` | Triggered when an IP address was deleted from an IP allow list.
{% endif %}

### `issue` category actions

| Action | Description
|------------------|-------------------
| `destroy`        | Triggered when an organization owner or someone with admin permissions in a repository deletes an issue from an organization-owned repository.

{% ifversion fpt or ghec %}

### `marketplace_agreement_signature` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when you sign the {% data variables.product.prodname_marketplace %} Developer Agreement.

### `marketplace_listing` category actions

| Action | Description
|------------------|-------------------
| `approve` | Triggered when your listing is approved for inclusion in {% data variables.product.prodname_marketplace %}.
| `create` | Triggered when you create a listing for your app in {% data variables.product.prodname_marketplace %}.
| `delist` | Triggered when your listing is removed from {% data variables.product.prodname_marketplace %}.
| `redraft` | Triggered when your listing is sent back to draft state.
| `reject` | Triggered when your listing is not accepted for inclusion in {% data variables.product.prodname_marketplace %}.

{% endif %}

{% ifversion fpt or ghes or ghec %}

### `members_can_create_pages` category actions

For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

| Action | Description |
| :- | :- |
| `enable` | Triggered when an organization owner enables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |
| `disable` | Triggered when an organization owner disables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |

{% endif %}

### `oauth_application` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a new {% data variables.product.prodname_oauth_app %} is created.
| `destroy` | Triggered when an existing {% data variables.product.prodname_oauth_app %} is deleted.
| `reset_secret` | Triggered when an {% data variables.product.prodname_oauth_app %}'s client secret is reset.
| `revoke_tokens` | Triggered when an {% data variables.product.prodname_oauth_app %}'s user tokens are revoked.
| `transfer` |  Triggered when an existing {% data variables.product.prodname_oauth_app %} is transferred to a new organization.

### `org` category actions

| Action | Description
|------------------|-------------------
| `add_member` | Triggered when a user joins an organization.
| `advanced_security_policy_selected_member_disabled` | Triggered when an enterprise owner prevents {% data variables.product.prodname_GH_advanced_security %} features from being enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Triggered when an enterprise owner allows {% data variables.product.prodname_GH_advanced_security %} features to be enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | Triggered when an organization admin [creates an export of the organization audit log](#exporting-the-audit-log). If the export included a query, the log will list the query used and the number of audit log entries matching that query.
| `block_user` | Triggered when an organization owner [blocks a user from accessing the organization's repositories](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Triggered when an organization invitation has been revoked. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is created for an organization. For more information, see "[Creating encrypted secrets for an organization](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | Triggered when an owner [disables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/disabling-oauth-app-access-restrictions-for-your-organization) for your organization.{% ifversion ghec %}
| `disable_saml` | Triggered when an organization admin disables SAML single sign-on for an organization.{% endif %}{% endif %}
| `disable_member_team_creation_permission` | Triggered when an organization owner limits team creation to owners. For more information, see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)." |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Triggered when an owner disables a two-factor authentication requirement for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | Triggered when an owner [enables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/enabling-oauth-app-access-restrictions-for-your-organization) for your organization.{% ifversion ghec %}
| `enable_saml` | Triggered when an organization admin [enables SAML single sign-on](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) for an organization.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | Triggered when an organization owner allows members to create teams. For more information, see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)." |{% ifversion not ghae %}
| `enable_two_factor_requirement` | Triggered when an owner requires two-factor authentication for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | Triggered when [a new user was invited to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
| `oauth_app_access_approved` | Triggered when an owner [grants organization access to an {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization/).
| `oauth_app_access_denied` | Triggered when an owner [disables a previously approved {% data variables.product.prodname_oauth_app %}'s access](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) to your organization.
| `oauth_app_access_requested` | Triggered when an organization member requests that an owner grant an {% data variables.product.prodname_oauth_app %} access to your organization.{% endif %}
| `register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to an organization](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)."
| `remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% ifversion fpt or ghec %}
| `remove_billing_manager` | Triggered when an [owner removes a billing manager from an organization](/articles/removing-a-billing-manager-from-your-organization/) or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and a billing manager doesn't use 2FA or disables 2FA. |{% endif %}
| `remove_member` | Triggered when an [owner removes a member from an organization](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disables 2FA{% endif %}. Also triggered when an [organization member removes themselves](/articles/removing-yourself-from-an-organization/) from an organization.|
| `remove_outside_collaborator` | Triggered when an owner removes an outside collaborator from an organization{% ifversion not ghae %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an outside collaborator does not use 2FA or disables 2FA{% endif %}. |
| `remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see "[Removing a runner from an organization](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)." {% ifversion ghec %}
| `revoke_external_identity` | Triggered when an organization owner revokes a member's linked identity. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."
| `revoke_sso_session` | Triggered when an organization owner revokes a member's SAML session. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)." {% endif %}
| `runner_group_created` | Triggered when a self-hosted runner group is created. For more information, see "[Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."
| `runner_group_removed` | Triggered when a self-hosted runner group is removed. For more information, see "[Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."
| `runner_group_updated` | Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `runner_group_runners_added` | Triggered when a self-hosted runner is added to a group. For more information, see [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runner_removed` |  Triggered when the REST API is used to remove a self-hosted runner from a group. For more information, see "[Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."
| `runner_group_runners_updated`|  Triggered when a runner group's list of members is updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."
{%- ifversion code-security-audit-log-events %}
| `secret_scanning_push_protection_custom_message_disabled` | Triggered when an organization owner or admin disables the custom message triggered by an attempted push to a push-protected repository. For more information, see "[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)."
| `secret_scanning_push_protection_custom_message_enabled` | Triggered when an organization owner or admin enables the custom message triggered by an attempted push to a push-protected repository. For more information, see "[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)."
| `secret_scanning_push_protection_custom_message_updated` | Triggered when an organization owner or admin updates the custom message triggered by an attempted push to a push-protected repository. For more information, see "[Protecting pushes with {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)."
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `secret_scanning_push_protection_disable ` | Triggered when an organization owner or person with admin access to the organization disables push protection for secret scanning. For more information, see "[Protecting pushes with secret scanning](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
| `secret_scanning_push_protection_enable ` | Triggered when an organization owner or person with admin access to the organization enables push protection for {% data variables.product.prodname_secret_scanning %}.{%- endif %}
| `self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Triggered when the setting for requiring approvals for workflows from public forks is changed for an organization. For more information, see "[Requiring approval for workflows from public forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)."{% endif %}
| `set_actions_retention_limit` | Triggered when the retention period for {% data variables.product.prodname_actions %} artifacts and logs is changed. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Triggered when the policy for workflows on  private repository forks is changed. For more information, see "[Enabling workflows for private repository forks](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)."{% endif %}{% ifversion fpt or ghec %}
| `unblock_user` | Triggered when an organization owner [unblocks a user from an organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %}{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` |Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}
| `update_new_repository_default_branch_setting` | Triggered when an owner changes the name of the default branch for new repositories in the organization. For more information, see "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."
| `update_default_repository_permission` | Triggered when an owner changes the default repository permission level for organization members.
| `update_member` | Triggered when an owner changes a person's role from owner to member or member to owner.
| `update_member_repository_creation_permission` | Triggered when an owner changes the create repository permission for organization members.{% ifversion fpt or ghec %}
| `update_saml_provider_settings` | Triggered when an organization's SAML provider settings are updated.
| `update_terms_of_service` | Triggered when an organization changes between the Standard Terms of Service and the Corporate Terms of Service. For more information, see "[Upgrading to the Corporate Terms of Service](/articles/upgrading-to-the-corporate-terms-of-service)."{% endif %}

{% ifversion ghec %}
### `org_credential_authorization` category actions

| Action | Description
|------------------|-------------------
| `grant` | Triggered when a member [authorizes credentials for use with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `deauthorized` | Triggered when a member [deauthorizes credentials for use with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `revoke` | Triggered when an owner [revokes authorized credentials](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `org_secret_scanning_custom_pattern` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a custom pattern is published for secret scanning in an organization. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)."
| `update` | Triggered when changes to a custom pattern are saved for secret scanning in an organization. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)."
| `delete` | Triggered when a custom pattern is removed from secret scanning in an organization. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)."

{% endif %}
### `organization_default_label` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a default label is created.
| `update` | Triggered when a default label is edited.
| `destroy` | Triggered when a default label is deleted.

### `packages` category actions

| Action | Description |
|--------|-------------|
| `package_version_published` | Triggered when a package version is published. |
| `package_version_deleted` | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_deleted` | Triggered when an entire package is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_version_restored` | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_restored` | Triggered when an entire package is restored. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."

{% ifversion fpt or ghec %}

### `payment_method` category actions

| Action | Description
|------------------|-------------------
| `create` |  Triggered when a new payment method is added, such as a new credit card or PayPal account.
| `update` | Triggered when an existing payment method is updated.

{% endif %}

{% ifversion pat-v2 %}

### `personal_access_token` category actions

| Action | Description
|------------------|-------------------
| `access_granted` | Triggered when a {% data variables.product.pat_v2 %} is granted access to organization resources. For more information, see "[Managing requests for {% data variables.product.pat_generic %} in your organization](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)."
| `access_revoked` | Triggered when access to organization resources by a {% data variables.product.pat_v2 %} is revoked. The token can still read public organization resources. For more information, see "[Reviewing and revoking {% data variables.product.pat_generic %} in your organization](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)."
| `request_cancelled` | Triggered when a member of the organization cancels a request for their {% data variables.product.pat_v2 %} to access organization resources.
| `request_created` | Triggered when a member of the organization creates a {% data variables.product.pat_v2 %} to access organization resources and the organization requires approval before a {% data variables.product.pat_v2 %} can access organization resources. For more information, see "[Managing requests for {% data variables.product.pat_generic %} in your organization](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)."
| `request_denied` | Triggered when a request for a {% data variables.product.pat_v2 %} to access organization resources is denied. For more information, see "[Managing requests for {% data variables.product.pat_generic %} in your organization](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization)."

{% endif %}

### `profile_picture` category actions
| Action | Description
|------------------|-------------------
| update | Triggered when you set or update your organization's profile picture.

### `project` category actions

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

### `protected_branch` category actions

| Action | Description
|--------------------|---------------------
| `create ` | Triggered when branch protection is enabled on a branch.
| `destroy` | Triggered when branch protection is disabled on a branch.
| `update_admin_enforced ` | Triggered when branch protection is enforced for repository administrators.
| `update_require_code_owner_review ` | Triggered when enforcement of required Code Owner review is updated on a branch.
| `dismiss_stale_reviews ` | Triggered when enforcement of dismissing stale pull requests is updated on a branch.
| `update_signature_requirement_enforcement_level ` | Triggered when enforcement of required commit signing is updated on a branch.
| `update_pull_request_reviews_enforcement_level ` | Triggered when enforcement of required pull request reviews is updated on a branch. Can be one of `0`(deactivated), `1`(non-admins), `2`(everyone).
| `update_required_status_checks_enforcement_level ` | Triggered when enforcement of required status checks is updated on a branch.
| `update_strict_required_status_checks_policy` | Triggered when the requirement for a branch to be up to date before merging is changed.
| `rejected_ref_update ` | Triggered when a branch update attempt is rejected.
| `policy_override ` | Triggered when a branch protection requirement is overridden by a repository administrator.
| `update_allow_force_pushes_enforcement_level ` | Triggered when force pushes are enabled or disabled for a protected branch.
| `update_allow_deletions_enforcement_level ` | Triggered when branch deletion is enabled or disabled for a protected branch.
| `update_linear_history_requirement_enforcement_level ` | Triggered when required linear commit history is enabled or disabled for a protected branch.

### `pull_request` category actions

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

### `pull_request_review` category actions

| Action | Description
|------------------|-------------------
| `submit` | Triggered when a review is submitted.
| `dismiss` | Triggered when a review is dismissed.
| `delete` | Triggered when a review is deleted.

### `pull_request_review_comment` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a review comment is added.
| `update` | Triggered when a review comment is changed.
| `delete` | Triggered when a review comment is deleted.

### `repo` category actions

| Action | Description
|------------------|-------------------
| `access` | Triggered when a user [changes the visibility](/github/administering-a-repository/setting-repository-visibility) of a repository in the organization.
| `actions_enabled` | Triggered when {% data variables.product.prodname_actions %} is enabled for a repository. Can be viewed using the UI. This event is not included when you access the audit log using the REST API. For more information, see "[Using the REST API](#using-the-rest-api)."
| `add_member` | Triggered when a user accepts an [invitation to have collaboration access to a repository](/articles/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Triggered when a repository admin [adds a topic](/articles/classifying-your-repository-with-topics) to a repository.
| `advanced_security_disabled` | Triggered when a repository administrator disables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
| `advanced_security_enabled` | Triggered when a repository administrator enables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).".
| `archived` | Triggered when a repository admin [archives a repository](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Triggered when [anonymous Git read access is disabled](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.enable_anonymous_git_access` | Triggered when [anonymous Git read access is enabled](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.lock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is locked](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `config.unlock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is unlocked](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create` | Triggered when [a new repository is created](/articles/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |Triggered when a {% data variables.product.prodname_actions %} secret is created for a repository. For more information, see "[Creating encrypted secrets for a repository](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."{% endif %}
| `destroy` | Triggered when [a repository is deleted](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Triggered when a repository is disabled (e.g., for [insufficient funds](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | Triggered when a repository is re-enabled.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}
| `remove_member` | Triggered when a user is [removed from a repository as a collaborator](/articles/removing-a-collaborator-from-a-personal-repository).
| `register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."
| `remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)."
| `remove_topic` | Triggered when a repository admin removes a topic from a repository.
| `rename` | Triggered when [a repository is renamed](/articles/renaming-a-repository).
| `self_hosted_runner_online` | Triggered when the runner application is started. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."
| `self_hosted_runner_offline` | Triggered when the runner application is stopped. Can only be viewed using the REST API; not visible in the UI or JSON/CSV export. For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Triggered when the setting for requiring approvals for workflows from public forks is changed. For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)."{% endif %}
| `set_actions_retention_limit` | Triggered when the retention period for {% data variables.product.prodname_actions %} artifacts and logs is changed. For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)."{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Triggered when the policy for workflows on private repository forks is changed. For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)."{% endif %}
| `transfer` | Triggered when [a repository is transferred](/articles/how-to-transfer-a-repository).
| `transfer_start` | Triggered when a repository transfer is about to occur.
| `unarchived` | Triggered when a repository admin unarchives a repository.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}

{% ifversion fpt or ghec %}

### `repository_advisory` category actions

| Action | Description
|------------------|-------------------
| `close` | Triggered when someone closes a security advisory. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
| `cve_request` | Triggered when someone requests a CVE (Common Vulnerabilities and Exposures) number from {% data variables.product.prodname_dotcom %} for a draft security advisory.
| `github_broadcast` | Triggered when {% data variables.product.prodname_dotcom %} makes a security advisory public in the {% data variables.product.prodname_advisory_database %}.
| `github_withdraw` | Triggered when {% data variables.product.prodname_dotcom %} withdraws a security advisory that was published in error.
| `open` | Triggered when someone opens a draft security advisory.
| `publish` | Triggered when someone publishes a security advisory.
| `reopen` | Triggered when someone reopens as draft security advisory.
| `update` | Triggered when someone edits a draft or published security advisory.

### `repository_content_analysis` category actions

| Action | Description
|------------------|-------------------
| `enable` | Triggered when an organization owner or person with admin access to the repository [enables data use settings for a private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `disable` | Triggered when an organization owner or person with admin access to the repository [disables data use settings for a private repository](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

{% endif %}{% ifversion fpt or ghec %}

### `repository_dependency_graph` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository.

{% endif %}{% ifversion ghec or ghes or ghae %}
### `repository_secret_scanning` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables secret scanning for a repository. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables secret scanning for a repository.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_custom_pattern` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a custom pattern is published for secret scanning in a repository. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)."
| `update` | Triggered when changes to a custom pattern are saved for secret scanning in a repository. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)."
| `delete` | Triggered when a custom pattern is removed from secret scanning in a repository. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)."

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### `repository_secret_scanning_push_protection` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables secret scanning for a repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables secret scanning for a repository.

{% endif %}
### `repository_vulnerability_alert` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when {% data variables.product.product_name %} creates a {% data variables.product.prodname_dependabot %} alert for a repository that uses a vulnerable dependency. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
| `dismiss` | Triggered when an organization owner or person with admin access to the repository dismisses a {% data variables.product.prodname_dependabot %} alert about a vulnerable dependency.
| `resolve` | Triggered when someone with write access to a repository pushes changes to update and resolve a vulnerability in a project dependency.
{% ifversion fpt or ghec %}
### `repository_vulnerability_alerts` category actions

| Action | Description
|------------------|-------------------
| `authorized_users_teams` | Triggered when an organization owner or a person with admin permissions to the repository updates the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %} for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
| `disable` | Triggered when a repository owner or person with admin access to the repository disables {% data variables.product.prodname_dependabot_alerts %}.
| `enable` | Triggered when a repository owner or person with admin access to the repository enables {% data variables.product.prodname_dependabot_alerts %}.

{% endif %}{% ifversion custom-repository-roles %}
### `role` category actions
| Action | Description
|------------------|-------------------
|`create` | Triggered when an organization owner creates a new custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
|`destroy` | Triggered when an organization owner deletes a custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
|`update` | Triggered when an organization owner edits an existing custom repository role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."

{% endif %}
{% ifversion ghec or ghes or ghae %}
### `secret_scanning` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables secret scanning for all existing{% ifversion ghec %}, private or internal{% endif %} repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `enable` | Triggered when an organization owner enables secret scanning for all existing{% ifversion ghec %}, private or internal{% endif %} repositories.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### `secret_scanning_alert` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when {% data variables.product.prodname_dotcom %} detects an exposed secret and creates a {% data variables.product.prodname_secret_scanning %} alert. For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."
| `reopen` | Triggered when a user reopens a {% data variables.product.prodname_secret_scanning %} alert.
| `resolve` | Triggered when a user resolves a {% data variables.product.prodname_secret_scanning %} alert.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### `secret_scanning_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables secret scanning for all new {% ifversion ghec %}private or internal {% endif %}repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `enable` | Triggered when an organization owner enables secret scanning for all new {% ifversion ghec %}private or internal {% endif %}repositories.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### `secret_scanning_push_protection` category actions

| Action | Description
|------------------|-------------------
| `bypass` | Triggered when a user bypasses the push protection on a secret detected by secret scanning. For more information, see "[Bypassing push protection for a secret](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)."
{% endif %}

{% ifversion fpt or ghec %}
### `sponsors` category actions

| Action | Description
|------------------|-------------------
| `custom_amount_settings_change` | Triggered when you enable or disable custom amounts, or when you change the suggested custom amount (see "[Managing your sponsorship tiers](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Triggered when you change the FUNDING file in your repository (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Triggered when you cancel a sponsorship (see "[Downgrading a sponsorship](/articles/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Triggered when you sponsor an account (see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_payment_complete` | Triggered after you sponsor an account and your payment has been processed (see "[Sponsoring an open source contributor](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Triggered when you change whether you receive email updates from a sponsored account (see "[Managing your sponsorship](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Triggered when you upgrade or downgrade your sponsorship (see "[Upgrading a sponsorship](/articles/upgrading-a-sponsorship)" and "[Downgrading a sponsorship](/articles/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_create` | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_disable` | Triggered when your {% data variables.product.prodname_sponsors %} account is disabled
| `sponsored_developer_redraft` | Triggered when your {% data variables.product.prodname_sponsors %} account is returned to draft state from approved state
| `sponsored_developer_profile_update` | Triggered when you edit your sponsored organization profile (see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_tier_description_update` | Triggered when you change the description for a sponsorship tier (see "[Managing your sponsorship tiers](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Triggered when you send an email update to your sponsors (see "[Contacting your sponsors](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `waitlist_join` | Triggered when you join the waitlist to become a sponsored organization (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)")
{% endif %}

### `team` category actions

| Action | Description
|------------------|-------------------
| `add_member` | Triggered when a member of an organization is [added to a team](/articles/adding-organization-members-to-a-team).
| `add_repository` | Triggered when a team is given control of a repository.
| `change_parent_team` | Triggered when a child team is created or [a child team's parent is changed](/articles/moving-a-team-in-your-organization-s-hierarchy).
| `change_privacy` | Triggered when a team's privacy level is changed.
| `create` | Triggered when a new team is created.
| `demote_maintainer` | Triggered when a user was demoted from a team maintainer to a team member. For more information, see "[Assigning the team maintainer role to a team member](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."
| `destroy` | Triggered when a team is deleted from the organization.
| `team.promote_maintainer` | Triggered when a user was promoted from a team member to a team maintainer. For more information, see "[Assigning the team maintainer role to a team member](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)."
| `remove_member` | Triggered when a member of an organization is [removed from a team](/articles/removing-organization-members-from-a-team).
| `remove_repository` | Triggered when a repository is no longer under a team's control.

### `team_discussions` category actions

| Action | Description
|---|---|
| `disable` | Triggered when an organization owner disables team discussions for an organization. For more information, see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)."
| `enable` | Triggered when an organization owner enables team discussions for an organization.

### `workflows` category actions

{% data reusables.actions.actions-audit-events-workflow %}
## Further reading

- "[Keeping your organization secure](/articles/keeping-your-organization-secure)"{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{%- ifversion fpt or ghec %}
- "[Exporting member information for your organization](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)"{% endif %}
{%- endif %}
