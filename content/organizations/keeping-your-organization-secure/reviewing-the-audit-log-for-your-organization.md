---
title: Reviewing the audit log for your organization
intro: 'The audit log allows organization admins to quickly review the actions performed by members of your organization. It includes details such as who performed the action, what the action was, and when it was performed.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### Accessing the audit log

The audit log lists events triggered by activities that affect your organization within the last 90 days. Only owners can access an organization's audit log.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

### Searching the audit log

{% data reusables.audit_log.audit-log-search %}

#### Search based on the action performed

To search for specific events, use the `action` qualifier in your query. Actions listed in the audit log are grouped within the following categories:

| Category name | Description
|------------------|-------------------{% if currentVersion == "free-pro-team@latest" %}
| [`account`](#account-category-actions) | Contains all activities related to your organization account.
| [`advisory_credit`](#advisory_credit-category-actions) | Contains all activities related to crediting a contributor for a security advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
| [`billing`](#billing-category-actions) | Contains all activities related to your organization's billing.
| [`dependabot_alerts`](#dependabot_alerts-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot %} alerts in existing repositories. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot %} alerts in new repositories created in the organization.
| [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} in existing repositories. For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.
| [`dependency_graph`](#dependency_graph-category-actions) | Contains organization-level configuration activities for dependency graphs for repositories. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | Contains organization-level configuration activities for new repositories created in the organization.{% endif %}
| [`discussion_post`](#discussion_post-category-actions) | Contains all activities related to discussions posted to a team page.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | Contains all activities related to replies to discussions posted to a team page.
| [`hook`](#hook-category-actions) | Contains all activities related to webhooks.
| [`integration_installation_request`](#integration_installation_request-category-actions) | Contains all activities related to organization member requests for owners to approve integrations for use in the organization. |
| [`issue`](#issue-category-actions) | Contains activities related to deleting an issue. {% if currentVersion == "free-pro-team@latest" %}
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contains all activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| [`members_can_create_pages`](#members_can_create_pages-category-actions) | Contains all activities related to managing the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)." | {% endif %}
| [`org`](#org-category-actions) | Contains activities related to organization membership.{% if currentVersion == "free-pro-team@latest" %}
| [`org_credential_authorization`](#org_credential_authorization-category-actions) | Contains all activities related to authorizing credentials for use with SAML single sign-on.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| [`organization_label`](#organization_label-category-actions) | Contains all activities related to default labels for repositories in your organization.{% endif %}
| [`oauth_application`](#oauth_application-category-actions) | Contains all activities related to OAuth Apps.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| [`packages`](#packages-category-actions) | Contains all activities related to {% data variables.product.prodname_registry %}.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions) | Contains all activities related to how your organization pays for GitHub.{% endif %}
| [`profile_picture`](#profile_picture-category-actions) | Contains all activities related to your organization's profile picture.
| [`project`](#project-category-actions) | Contains all activities related to project boards.
| [`protected_branch`](#protected_branch-category-actions) | Contains all activities related to protected branches.
| [`repo`](#repo-category-actions) | Contains activities related to the repositories owned by your organization.{% if currentVersion == "free-pro-team@latest" %}
| [`repository_advisory`](#repository_advisory-category-actions) | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}.  For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | Contains all activities related to [enabling or disabling data use for a private repository](/articles/about-github-s-use-of-your-data).{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | Contains repository-level activities related to enabling or disabling the dependency graph for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | Contains repository-level activities related to secret scanning. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)." {% endif %}{% if currentVersion != "github-ae@latest" %}
| [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | Contains all activities related to [{% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot %} alerts. {% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| [`secret_scanning`](#secret_scanning-category-actions) | Contains organization-level configuration activities for secret scanning in existing repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Contains organization-level configuration activities for secret scanning for new repositories created in the organization. {% endif %}{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions) | Contains all events related to sponsor buttons (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}
| [`team`](#team-category-actions) | Contains all activities related to teams in your organization.
| [`team_discussions`](#team_discussions-category-actions) | Contains activities related to managing team discussions for an organization.

You can search for specific sets of actions using these terms. For example:

  * `action:team` finds all events grouped within the team category.
  * `-action:hook` excludes all events in the webhook category.

Each category has a set of associated actions that you can filter on. For example:

  * `action:team.create` finds all events where a team was created.
  * `-action:hook.events_changed` excludes all events where the events on a webhook have been altered.

#### Search based on time of action

Use the `created` qualifier to filter events in the audit log based on when they occurred. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

For example:

  * `created:2014-07-08` finds all events that occurred on July 8th, 2014.
  * `created:>=2014-07-08` finds all events that occurred on or after July 8th, 2014.
  * `created:<=2014-07-08` finds all events that occurred on or before July 8th, 2014.
  * `created:2014-07-01..2014-07-31` finds all events that occurred in the month of July 2014.

The audit log contains data for the past 90 days, but you can use the `created` qualifier to search for events earlier than that.

#### Search based on location

Using the qualifier `country`, you can filter events in the audit log based on the originating country. You can use a country's two-letter short code or its full name. Keep in mind that countries with spaces in their name will need to be wrapped in quotation marks. For example:

  * `country:de` finds all events that occurred in Germany.
  * `country:Mexico` finds all events that occurred in Mexico.
  * `country:"United States"` all finds events that occurred in the United States.

{% if currentVersion == "free-pro-team@latest" %}
### Exporting the audit log

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

### Using the audit log API

You can interact with the audit log using the GraphQL API{% if currentVersion == "free-pro-team@latest" %} or the REST API{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}

#### Using the GraphQL API

{% endif %}

{% note %}

**Note**: The audit log GraphQL API is available for organizations using {% data variables.product.prodname_enterprise %}. {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

To ensure a secure IP and maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

{% if currentVersion == "free-pro-team@latest" %}
Note that you can't retrieve Git events using the GraphQL API. To retrieve Git events, use the REST API instead. For more information, see "[`git` category actions](#git-category-actions)."
{% endif %}

The GraphQL response can include data for up to 90 to 120 days.

For example, you can make a GraphQL request to see all the new organization members added to your organization. For more information, see the "[GraphQL API Audit Log](/graphql/reference/interfaces#auditentry/)."

{% if currentVersion == "free-pro-team@latest" %}

#### Using the REST API

{% note %} 

**Note:** The audit log REST API is available for users of {% data variables.product.prodname_ghe_cloud %} only. 

{% endnote %}

To ensure a secure IP and maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}
* Git events, such as cloning, fetching, and pushing

{% data reusables.audit_log.audit-log-git-events-retention %}

For more information about the audit log REST API, see "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

{% endif %}

### Audit log actions

An overview of some of the most common actions that are recorded as events in the audit log.

{% if currentVersion == "free-pro-team@latest" %}

#### `account` category actions

| Action | Description
|------------------|-------------------
| `billing_plan_change` | Triggered when an organization's [billing cycle](/articles/changing-the-duration-of-your-billing-cycle) changes.
| `plan_change` | Triggered when an organization's [subscription](/articles/about-billing-for-github-accounts) changes.
| `pending_plan_change` | Triggered when an organization owner or billing manager [cancels or downgrades a paid subscription](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/).
| `pending_subscription_change` | Triggered when a [{% data variables.product.prodname_marketplace %} free trial starts or expires](/articles/about-billing-for-github-marketplace/).

#### `advisory_credit` category actions

| Action | Description
|------------------|-------------------
| `accept` | Triggered when someone accepts credit for a security advisory. For more information, see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory)."
| `create` | Triggered when the administrator of a security advisory adds someone to the credit section.
| `decline` | Triggered when someone declines credit for a security advisory.
| `destroy` | Triggered when the administrator of a security advisory removes someone from the credit section.

#### `billing` category actions

| Action | Description
|------------------|-------------------
| `change_billing_type` | Triggered when your organization [changes how it pays for {% data variables.product.prodname_dotcom %}](/articles/adding-or-editing-a-payment-method).
| `change_email` | Triggered when your organization's [billing email address](/articles/setting-your-billing-email) changes.

#### `dependabot_alerts` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all existing {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all existing {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.

#### `dependabot_alerts_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.

#### `dependabot_security_updates` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all existing repositories.

#### `dependabot_security_updates_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_security_updates %} for all new repositories.

#### `dependency_graph` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables the dependency graph for all existing repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables the dependency graph for all existing repositories.

#### `dependency_graph_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables the dependency graph for all new repositories. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
| `enable` | Triggered when an organization owner enables the dependency graph for all new repositories.

{% endif %}

#### `discussion_post` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when [a team discussion post is edited](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Triggered when [a team discussion post is deleted](/articles/managing-disruptive-comments/#deleting-a-comment).

#### `discussion_post_reply` category actions

| Action | Description
|------------------|-------------------
| `update` | Triggered when [a reply to a team discussion post is edited](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Triggered when [a reply to a team discussion post is deleted](/articles/managing-disruptive-comments/#deleting-a-comment).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
#### `enterprise` category actions

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `environment` category actions

| Action | Description
|------------------|-------------------
| `create_actions_secret` | Triggered when a secret is created in an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
| `delete` | Triggered when an environment is deleted. For more information, see ["Deleting an environment](/actions/reference/environments#deleting-an-environment)."
| `remove_actions_secret` |  Triggered when a secret is removed from an environment. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
| `update_actions_secret` | Triggered when a secret in an environment is updated. For more information, see ["Environment secrets](/actions/reference/environments#environment-secrets)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `git` category actions

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

#### `hook` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when [a new hook was added](/articles/creating-webhooks) to a repository owned by your organization.
| `config_changed` | Triggered when an existing hook has its configuration altered.
| `destroy` | Triggered when an existing hook was removed from a repository.
| `events_changed` | Triggered when the events on a hook have been altered.

#### `integration_installation_request` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when an organization member requests that an organization owner install an integration for use in the organization.
| `close` | Triggered when a request to install an integration for use in an organization is either approved or denied by an organization owner, or canceled by the organization member who opened the request.

#### `issue` category actions

| Action | Description
|------------------|-------------------
| `destroy`        | Triggered when an organization owner or someone with admin permissions in a repository deletes an issue from an organization-owned repository.

{% if currentVersion == "free-pro-team@latest" %}

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

#### `members_can_create_pages` category actions

For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

| Action | Description |
| :- | :- |
| `enable` | Triggered when an organization owner enables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |
| `disable` | Triggered when an organization owner disables publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. |

{% endif %}

#### `org` category actions

| Action | Description
|------------------|-------------------{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_policy_selected_member_disabled` | Triggered when an enterprise owner prevents {% data variables.product.prodname_GH_advanced_security %} features from being enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Triggered when an enterprise owner allows {% data variables.product.prodname_GH_advanced_security %} features to be enabled for repositories owned by the organization. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `audit_log_export` | Triggered when an organization admin [creates an export of the organization audit log](#exporting-the-audit-log). If the export included a query, the log will list the query used and the number of audit log entries matching that query.
| `block_user` | Triggered when an organization owner [blocks a user from accessing the organization's repositories](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Triggered when an organization invitation has been revoked. {% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is created for an organization. For more information, see "[Creating encrypted secrets for an organization](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)."{% endif %} {% if currentVersion == "free-pro-team@latest"%}
| `disable_oauth_app_restrictions` | Triggered when an owner [disables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/disabling-oauth-app-access-restrictions-for-your-organization) for your organization.
| `disable_saml` | Triggered when an organization admin disables SAML single sign-on for an organization.{% endif %}
| `disable_member_team_creation_permission` | Triggered when an organization owner limits team creation to owners. For more information, see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)." |{% if currentVersion != "github-ae@latest" %}
| `disable_two_factor_requirement` | Triggered when an owner disables a two-factor authentication requirement for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable_oauth_app_restrictions` | Triggered when an owner [enables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/enabling-oauth-app-access-restrictions-for-your-organization) for your organization.
| `enable_saml` | Triggered when an organization admin [enables SAML single sign-on](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) for an organization.{% endif %}
| `enable_member_team_creation_permission` | Triggered when an organization owner allows members to create teams. For more information, see "[Setting team creation permissions in your organization](/articles/setting-team-creation-permissions-in-your-organization)." |{% if currentVersion != "github-ae@latest" %}
| `enable_two_factor_requirement` | Triggered when an owner requires two-factor authentication for all members{% if currentVersion == "free-pro-team@latest" %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}
| `invite_member` | Triggered when [a new user was invited to join your organization](/articles/adding-organization-members-to-a-team).{% if currentVersion == "free-pro-team@latest" %}
| `oauth_app_access_approved` | Triggered when an owner [grants organization access to an {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization/).
| `oauth_app_access_denied` | Triggered when an owner [disables a previously approved {% data variables.product.prodname_oauth_app %}'s access](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) to your organization.
| `oauth_app_access_requested` | Triggered when an organization member requests that an owner grant an {% data variables.product.prodname_oauth_app %} access to your organization.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to an organization](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)."
| `remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}{% if currentVersion == "free-pro-team@latest"%}
| `remove_billing_manager` | Triggered when an [owner removes a billing manager from an organization](/articles/removing-a-billing-manager-from-your-organization/) or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and a billing manager doesn't use 2FA or disables 2FA. |{% endif %}
| `remove_member` | Triggered when an [owner removes a member from an organization](/articles/removing-a-member-from-your-organization/){% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an organization member doesn't use 2FA or disables 2FA{% endif %}. Also triggered when an [organization member removes themselves](/articles/removing-yourself-from-an-organization/) from an organization.|
| `remove_outside_collaborator` | Triggered when an owner removes an outside collaborator from an organization{% if currentVersion != "github-ae@latest" %} or when [two-factor authentication is required in an organization](/articles/requiring-two-factor-authentication-in-your-organization) and an outside collaborator does not use 2FA or disables 2FA{% endif %}. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see "[Removing a runner from an organization](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)." {% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `revoke_external_identity` | Triggered when an organization owner revokes a member's linked identity. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)."
| `revoke_sso_session` | Triggered when an organization owner revokes a member's SAML session. For more information, see "[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)." {% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `runner_group_created` | Triggered when a self-hosted runner group is created. For more information, see "[Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)."
| `runner_group_removed` | Triggered when a self-hosted runner group is removed. For more information, see "[Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)."
| `runner_group_updated` | Triggered when the configuration of a self-hosted runner group is changed. For more information, see "[Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
| `runner_group_runners_added` | Triggered when a self-hosted runner is added to a group. For more information, see [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runner_removed` |  Triggered when the REST API is used to remove a self-hosted runner from a group. For more information, see "[Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)."
| `runner_group_runners_updated`|  Triggered when a runner group's list of members is updated. For more information, see "[Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)."{% endif %}{% if currentVersion == "free-pro-team@latest"%}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}
| `unblock_user` | Triggered when an organization owner [unblocks a user from an organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret` |Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `update_new_repository_default_branch_setting` | Triggered when an owner changes the name of the default branch for new repositories in the organization. For more information, see "[Managing the default branch name for repositories in your organization](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)."{% endif %}
| `update_default_repository_permission` | Triggered when an owner changes the default repository permission level for organization members.
| `update_member` | Triggered when an owner changes a person's role from owner to member or member to owner.
| `update_member_repository_creation_permission` | Triggered when an owner changes the create repository permission for organization members.{% if currentVersion == "free-pro-team@latest" %}
| `update_saml_provider_settings` | Triggered when an organization's SAML provider settings are updated.
| `update_terms_of_service` | Triggered when an organization changes between the Standard Terms of Service and the Corporate Terms of Service. For more information, see "[Upgrading to the Corporate Terms of Service](/articles/upgrading-to-the-corporate-terms-of-service)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `org_credential_authorization` category actions

| Action | Description
|------------------|-------------------
| `grant` | Triggered when a member [authorizes credentials for use with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `deauthorized` | Triggered when a member [deauthorizes credentials for use with SAML single sign-on](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `revoke` | Triggered when an owner [revokes authorized credentials](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
#### `organization_label` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a default label is created.
| `update` | Triggered when a default label is edited.
| `destroy` | Triggered when a default label is deleted.

{% endif %}

#### `oauth_application` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when a new {% data variables.product.prodname_oauth_app %} is created.
| `destroy` | Triggered when an existing {% data variables.product.prodname_oauth_app %} is deleted.
| `reset_secret` | Triggered when an {% data variables.product.prodname_oauth_app %}'s client secret is reset.
| `revoke_tokens` | Triggered when an {% data variables.product.prodname_oauth_app %}'s user tokens are revoked.
| `transfer` |  Triggered when an existing {% data variables.product.prodname_oauth_app %} is transferred to a new organization.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
#### `packages` category actions

| Action | Description |
|--------|-------------|
| `package_version_published` | Triggered when a package version is published. |
| `package_version_deleted` | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_deleted` | Triggered when an entire package is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_version_restored` | Triggered when a specific package version is deleted. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."
| `package_restored` | Triggered when an entire package is restored. For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

#### `payment_method` category actions

| Action | Description
|------------------|-------------------
| `clear` | Triggered when a payment method on file is [removed](/articles/removing-a-payment-method).
| `create` |  Triggered when a new payment method is added, such as a new credit card or PayPal account.
| `update` | Triggered when an existing payment method is updated.

{% endif %}

#### `profile_picture` category actions
| Action | Description
|------------------|-------------------
| update | Triggered when you set or update your organization's profile picture.

#### `project` category actions

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

#### `protected_branch` category actions

| Action | Description
|--------------------|---------------------
| `create ` | Triggered when branch protection is enabled on a branch.
| `destroy` | Triggered when branch protection is disabled on a branch.
| `update_admin_enforced ` | Triggered when branch protection is enforced for repository administrators.
| `update_require_code_owner_review ` | Triggered when enforcement of required Code Owner review is updated on a branch.
| `dismiss_stale_reviews ` | Triggered when enforcement of dismissing stale pull requests is updated on a branch.
| `update_signature_requirement_enforcement_level ` | Triggered when enforcement of required commit signing is updated on a branch.
| `update_pull_request_reviews_enforcement_level ` | Triggered when enforcement of required pull request reviews is updated on a branch.
| `update_required_status_checks_enforcement_level ` | Triggered when enforcement of required status checks is updated on a branch.
| `update_strict_required_status_checks_policy` | Triggered when the requirement for a branch to be up to date before merging is changed.
| `rejected_ref_update ` | Triggered when a branch update attempt is rejected.
| `policy_override ` | Triggered when a branch protection requirement is overridden by a repository administrator.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
| `update_allow_force_pushes_enforcement_level ` | Triggered when force pushes are enabled or disabled for a protected branch.
| `update_allow_deletions_enforcement_level ` | Triggered when branch deletion is enabled or disabled for a protected branch.
| `update_linear_history_requirement_enforcement_level ` | Triggered when required linear commit history is enabled or disabled for a protected branch.
{% endif %}

#### `repo` category actions

| Action | Description
|------------------|-------------------
| `access` | Triggered when a user [changes the visibility](/github/administering-a-repository/setting-repository-visibility) of a repository in the organization.
| `actions_enabled` | Triggered when {% data variables.product.prodname_actions %} is enabled for a repository. Can be viewed using the UI. This event is not included when you access the audit log using the REST API. For more information, see "[Using the REST API](#using-the-rest-api)."
| `add_member` | Triggered when a user accepts an [invitation to have collaboration access to a repository](/articles/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Triggered when a repository admin [adds a topic](/articles/classifying-your-repository-with-topics) to a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
| `advanced_security_disabled` | Triggered when a repository administrator disables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."
| `advanced_security_enabled` | Triggered when a repository administrator enables {% data variables.product.prodname_GH_advanced_security %} features for the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).".{% endif %}
| `archived` | Triggered when a repository admin [archives a repository](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access` | Triggered when [anonymous Git read access is disabled](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.enable_anonymous_git_access` | Triggered when [anonymous Git read access is enabled](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) in a public repository.
| `config.lock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is locked](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `config.unlock_anonymous_git_access` | Triggered when a repository's [anonymous Git read access setting is unlocked](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create` | Triggered when [a new repository is created](/articles/creating-a-new-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `create_actions_secret` |Triggered when a {% data variables.product.prodname_actions %} secret is created for a repository. For more information, see "[Creating encrypted secrets for a repository](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)."{% endif %}
| `destroy` | Triggered when [a repository is deleted](/articles/deleting-a-repository).{% if currentVersion == "free-pro-team@latest" %}
| `disable` | Triggered when a repository is disabled (e.g., for [insufficient funds](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | Triggered when a repository is reenabled.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `remove_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is removed.{% endif %}
| `remove_member` | Triggered when a user is [removed from a repository as a collaborator](/articles/removing-a-collaborator-from-a-personal-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `register_self_hosted_runner` | Triggered when a new self-hosted runner is registered. For more information, see "[Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."
| `remove_self_hosted_runner` | Triggered when a self-hosted runner is removed. For more information, see "[Removing a runner from a repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)." {% endif %}
| `remove_topic` | Triggered when a repository admin removes a topic from a repository.
| `rename` | Triggered when [a repository is renamed](/articles/renaming-a-repository).{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `self_hosted_runner_updated` | Triggered when the runner application is updated. Can be viewed using the REST API and the UI; not visible in the JSON/CSV export. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."{% endif %}
| `transfer` | Triggered when [a repository is transferred](/articles/how-to-transfer-a-repository).
| `transfer_start` | Triggered when a repository transfer is about to occur.
| `unarchived` | Triggered when a repository admin unarchives a repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
| `update_actions_secret` | Triggered when a {% data variables.product.prodname_actions %} secret is updated.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

#### `repository_advisory` category actions

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

#### `repository_content_analysis` category actions

| Action | Description
|------------------|-------------------
| `enable` | Triggered when an organization owner or person with admin access to the repository [enables data use settings for a private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository).
| `disable` | Triggered when an organization owner or person with admin access to the repository [disables data use settings for a private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository).

{% endif %}{% if currentVersion != "github-ae@latest" %}

#### `repository_dependency_graph` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables the dependency graph for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables the dependency graph for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository.

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `repository_secret_scanning` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when a repository owner or person with admin access to the repository disables secret scanning for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `enable` | Triggered when a repository owner or person with admin access to the repository enables secret scanning for a {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository.

{% endif %}{% if currentVersion != "github-ae@latest" %}
#### `repository_vulnerability_alert` category actions

| Action | Description
|------------------|-------------------
| `create` | Triggered when {% data variables.product.product_name %} creates a {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert for a repository that uses a vulnerable dependency. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
| `dismiss` | Triggered when an organization owner or person with admin access to the repository dismisses a {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alert about a vulnerable dependency.
| `resolve` | Triggered when someone with write access to a repository pushes changes to update and resolve a vulnerability in a project dependency.

{% endif %}{% if currentVersion == "free-pro-team@latest" %}
#### `repository_vulnerability_alerts` category actions

| Action | Description
|------------------|-------------------
| `authorized_users_teams` | Triggered when an organization owner or a person with admin permissions to the repository updates the list of people or teams authorized to receive {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies in the repository. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."
| `disable` | Triggered when a repository owner or person with admin access to the repository disables {% data variables.product.prodname_dependabot_alerts %}.
| `enable` | Triggered when a repository owner or person with admin access to the repository enables {% data variables.product.prodname_dependabot_alerts %}.

{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### `secret_scanning` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables secret scanning for all existing{% if currentVersion == "free-pro-team@latest" %}, private{% endif %} repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `enable` | Triggered when an organization owner enables secret scanning for all existing{% if currentVersion == "free-pro-team@latest" %}, private{% endif %} repositories.

#### `secret_scanning_new_repos` category actions

| Action | Description
|------------------|-------------------
| `disable` | Triggered when an organization owner disables secret scanning for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `enable` | Triggered when an organization owner enables secret scanning for all new {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repositories.

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### `sponsors` category actions

| Action | Description
|------------------|-------------------
| `custom_amount_settings_change` | Triggered when you enable or disable custom amounts, or when you change the suggested custom amount (see "[Managing your sponsorship tiers](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")
| `repo_funding_links_file_action` | Triggered when you change the FUNDING file in your repository (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)")
| `sponsor_sponsorship_cancel` | Triggered when you cancel a sponsorship (see "[Downgrading a sponsorship](/articles/downgrading-a-sponsorship)")
| `sponsor_sponsorship_create` | Triggered when you sponsor an account (see "[Sponsoring an open source contributor](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor)")
| `sponsor_sponsorship_preference_change` | Triggered when you change whether you receive email updates from a sponsored account (see "[Managing your sponsorship](/articles/managing-your-sponsorship)")
| `sponsor_sponsorship_tier_change` | Triggered when you upgrade or downgrade your sponsorship (see "[Upgrading a sponsorship](/articles/upgrading-a-sponsorship)" and "[Downgrading a sponsorship](/articles/downgrading-a-sponsorship)")
| `sponsored_developer_approve` | Triggered when your {% data variables.product.prodname_sponsors %} account is approved (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_create` | Triggered when your {% data variables.product.prodname_sponsors %} account is created (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_disable` | Triggered when your {% data variables.product.prodname_sponsors %} account is disabled
| `sponsored_developer_redraft` | Triggered when your {% data variables.product.prodname_sponsors %} account is returned to draft state from approved state
| `sponsored_developer_profile_update` | Triggered when you edit your sponsored organization profile (see "[Editing your profile details for {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)")
| `sponsored_developer_request_approval` | Triggered when you submit your application for {% data variables.product.prodname_sponsors %} for approval (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `sponsored_developer_tier_description_update` | Triggered when you change the description for a sponsorship tier (see "[Managing your sponsorship tiers](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)")
| `sponsored_developer_update_newsletter_send` | Triggered when you send an email update to your sponsors (see "[Contacting your sponsors](/articles/contacting-your-sponsors)")
| `waitlist_invite_sponsored_developer` | Triggered when you are invited to join {% data variables.product.prodname_sponsors %} from the waitlist (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")
| `waitlist_join` | Triggered when you join the waitlist to become a sponsored organization (see "[Setting up {% data variables.product.prodname_sponsors %} for your organization](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization)")
{% endif %}

#### `team` category actions

| Action | Description
|------------------|-------------------
| `add_member` | Triggered when a member of an organization is [added to a team](/articles/adding-organization-members-to-a-team).
| `add_repository` | Triggered when a team is given control of a repository.
| `change_parent_team` | Triggered when a child team is created or [a child team's parent is changed](/articles/moving-a-team-in-your-organization-s-hierarchy).
| `change_privacy` | Triggered when a team's privacy level is changed.
| `create` | Triggered when a new team is created.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
`demote_maintainer` | Triggered when a user was demoted from a team maintainer to a team member. For more information, see "[Giving "team maintainer" permissions to an organization member](/organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member)."{% endif %}
| `destroy` | Triggered when a team is deleted from the organization.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
`team.promote_maintainer` | Triggered when a user was promoted from a team member to a team maintainer. For more information, see "[Giving "team maintainer" permissions to an organization member](/organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member)."{% endif %}
| `remove_member` | Triggered when a member of an organization is [removed from a team](/articles/removing-organization-members-from-a-team).
| `remove_repository` | Triggered when a repository is no longer under a team's control.

#### `team_discussions` category actions

| Action | Description
|---|---|
| `disable` | Triggered when an organization owner disables team discussions for an organization. For more information, see "[Disabling team discussions for your organization](/articles/disabling-team-discussions-for-your-organization)."
| `enable` | Triggered when an organization owner enables team discussions for an organization.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest"%}
#### `workflows` category actions

{% data reusables.actions.actions-audit-events-workflow %}

{% endif %}

### Further reading

- "[Keeping your organization secure](/articles/keeping-your-organization-secure)"
