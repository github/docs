

    Organizations/Organization security/Manage security settings/Review audit log

Reviewing the audit log for your organization

The audit log allows organization admins to quickly review the actions performed by members of your organization. It includes details such as who performed the action, what the action was, and when it was performed.
In this article

    Accessing the audit log
    Searching the audit log
    Exporting the audit log
    Using the audit log API

Accessing the audit log

Note

Webhooks might be a good alternative to the audit log or API polling for certain use cases. Webhooks are a way for GitHub to notify your server when specific events occur for a repository, organization, or enterprise. Compared to the API or searching the audit log, webhooks can be more efficient if you just want to learn and possibly log when certain events occur on your enterprise, organization, or repository. See Webhooks documentation.

The audit log lists events triggered by activities that affect your organization within the last 180 days. Only owners can access an organization's audit log.

By default, only events from the past three months are displayed. To view older events, you must specify a date range with the created parameter. See Understanding the search syntax.

    In the upper-right corner of GitHub, select your profile photo, then click 

Your organizations.
Next to the organization, click Settings.
In the "Archive" section of the sidebar, click

    Logs, then click Audit log.

Searching the audit log

The name for each audit log entry is composed of a category of events, followed by an operation type. For example, the repo.create entry refers to the create operation on the repo category.

Each audit log entry shows applicable information about an event, such as:

    The organization an action was performed in
    The user (actor) who performed the action
    The user affected by the action
    Which repository an action was performed in
    The action that was performed
    Which country the action took place in
    The date and time the action occurred

Note that you cannot search for entries using text. You can, however, construct search queries using a variety of filters. Many operators used when querying the log, such as -, >, or <, match the same format as searching across GitHub. For more information, see About searching on GitHub.
Search based on operation

Use the operation qualifier to limit actions to specific types of operations. For example:

    operation:access finds all events where a resource was accessed.
    operation:authentication finds all events where an authentication event was performed.
    operation:create finds all events where a resource was created.
    operation:modify finds all events where an existing resource was modified.
    operation:remove finds all events where an existing resource was removed.
    operation:restore finds all events where an existing resource was restored.
    operation:transfer finds all events where an existing resource was transferred.

Search based on repository

Use the repo qualifier to limit actions to a specific repository. For example:

    repo:my-org/our-repo finds all events that occurred for the our-repo repository in the my-org organization.
    repo:my-org/our-repo repo:my-org/another-repo finds all events that occurred for both the our-repo and another-repo repositories in the my-org organization.
    -repo:my-org/not-this-repo excludes all events that occurred for the not-this-repo repository in the my-org organization.

Note that you must include the account name within the repo qualifier; searching for just repo:our-repo will not work.
Search based on the user

The actor qualifier can scope events based on who performed the action. For example:

    actor:octocat finds all events performed by octocat.
    actor:octocat actor:hubot finds all events performed by octocat or hubot.
    -actor:hubot excludes all events performed by hubot.

Note that you can only use a GitHub username, not an individual's real name.
Search based on the action performed

To search for specific events, use the action qualifier in your query. Actions listed in the audit log are grouped in different categories. For the full list of events in each category, see Audit log events for your organization.
Category name	Description
account	Contains all activities related to your organization account.
advisory_credit	Contains all activities related to crediting a contributor for a security advisory in the GitHub Advisory Database. For more information, see About repository security advisories.
auto_approve_personal_access_token_requests	Contains activities related to your organization's approval policy for fine-grained personal access tokens. For more information, see Setting a personal access token policy for your organization.
billing	Contains all activities related to your organization's billing.
business	Contains activities related to business settings for an enterprise.
code-scanning	Contains all activities related to your organization's code scanning alerts.
codespaces	Contains all activities related to your organization's codespaces.
copilot	Contains all activities related to your GitHub Copilot Business or GitHub Copilot Enterprise subscription.
dependabot_alerts	Contains organization-level configuration activities for Dependabot alerts in existing repositories. For more information, see About Dependabot alerts.
dependabot_alerts_new_repos	Contains organization-level configuration activities for Dependabot alerts in new repositories created in the organization.
dependabot_security_updates	Contains organization-level configuration activities for Dependabot security updates in existing repositories. For more information, see Configuring Dependabot security updates.
dependabot_security_updates_new_repos	Contains organization-level configuration activities for Dependabot security updates for new repositories created in the organization.
dependency_graph	Contains organization-level configuration activities for dependency graphs for repositories. For more information, see About the dependency graph.
dependency_graph_new_repos	Contains organization-level configuration activities for new repositories created in the organization.
discussion_post	Contains all activities related to discussions posted to a team page.
discussion_post_reply	Contains all activities related to replies to discussions posted to a team page.
enterprise	Contains activities related to enterprise settings.
hook	Contains all activities related to webhooks.
integration_installation	Contains activities related to integrations installed in an account.
integration_installation_request	Contains all activities related to organization member requests for owners to approve integrations for use in the organization.
issue	Contains activities related to deleting an issue.
marketplace_agreement_signature	Contains all activities related to signing the GitHub Marketplace Developer Agreement.
marketplace_listing	Contains all activities related to listing apps in GitHub Marketplace.
members_can_create_pages	Contains all activities related to managing the publication of GitHub Pages sites for repositories in the organization. For more information, see Managing the publication of GitHub Pages sites for your organization.
org	Contains activities related to organization membership.
org_secret_scanning_automatic_validity_checks	Contains organization-level activities related to enabling and disabling automatic validity checks for secret scanning. For more information, see Managing security and analysis settings for your organization.
org_secret_scanning_custom_pattern	Contains organization-level activities related to secret scanning custom patterns. For more information, see Defining custom patterns for secret scanning.
organization_default_label	Contains all activities related to default labels for repositories in your organization.
oauth_application	Contains all activities related to OAuth apps.
packages	Contains all activities related to GitHub Packages.
payment_method	Contains all activities related to how your organization pays for GitHub.
personal_access_token	Contains activities related to fine-grained personal access tokens in your organization. For more information, see Managing your personal access tokens.
profile_picture	Contains all activities related to your organization's profile picture.
project	Contains all activities related to projects.
protected_branch	Contains all activities related to protected branches.
repo	Contains activities related to the repositories owned by your organization.
repository_advisory	Contains repository-level activities related to security advisories in the GitHub Advisory Database. For more information, see About repository security advisories.
repository_content_analysis	Contains all activities related to enabling or disabling data use for a private repository. For more information, see Managing security and analysis settings for your repository.
repository_dependency_graph	Contains repository-level activities related to enabling or disabling the dependency graph for a private repository. For more information, see About the dependency graph.
repository_secret_scanning_automatic_validity_checks	Contains repository-level activities related to enabling and disabling automatic validity checks for secret scanning. For more information, see Enabling secret scanning for your repository.
repository_secret_scanning_custom_pattern	Contains repository-level activities related to secret scanning custom patterns. For more information, see Defining custom patterns for secret scanning.
repository_secret_scanning_custom_pattern_push_protection	Contains repository-level activities related to push protection of a custom pattern for secret scanning. For more information, see Defining custom patterns for secret scanning.
repository_secret_scanning_push_protection	Contains repository-level activities related to secret scanning push protection. For more information, see About push protection.
repository_vulnerability_alert	Contains all activities related to Dependabot alerts.
repository_vulnerability_alerts	Contains repository-level configuration activities for Dependabot alerts.
restore_member	Triggered when an organization owner reinstates a member. For more information, see Reinstating a former member of your organization.
sponsors	Contains all events related to sponsor buttons (see Displaying a sponsor button in your repository)
team	Contains all activities related to teams in your organization.
workflows	Contains activities related to GitHub Actions workflows.

You can search for specific sets of actions using these terms. For example:

    action:team finds all events grouped within the team category.
    -action:hook excludes all events in the webhook category.

Each category has a set of associated actions that you can filter on. For example:

    action:team.create finds all events where a team was created.
    -action:hook.events_changed excludes all events where the events on a webhook have been altered.

Search based on time of action

Use the created qualifier to filter events in the audit log based on when they occurred. Date formatting must follow the ISO8601 standard, which is YYYY-MM-DD (year-month-day). You can also add optional time information THH:MM:SS+00:00 after the date, to search by the hour, minute, and second. That's T, followed by HH:MM:SS (hour-minutes-seconds), and a UTC offset (+00:00).

When you search for a date, you can use greater than, less than, and range qualifiers to further filter results. For more information, see Understanding the search syntax.

For example:

    created:2014-07-08 finds all events that occurred on July 8th, 2014.
    created:>=2014-07-08 finds all events that occurred on or after July 8th, 2014.
    created:<=2014-07-08 finds all events that occurred on or before July 8th, 2014.
    created:2014-07-01..2014-07-31 finds all events that occurred in the month of July 2014.

Note

The audit log contains data for the last 180 days.
Search based on location

Using the qualifier country, you can filter events in the audit log based on the originating country. You can use a country's two-letter short code or its full name. Keep in mind that countries with spaces in their name will need to be wrapped in quotation marks. For example:

    country:de finds all events that occurred in Germany.
    country:Mexico finds all events that occurred in Mexico.
    country:"United States" all finds events that occurred in the United States.

Exporting the audit log

You can export the log as JSON data or a comma-separated value (CSV) file with the Export dropdown menu.

To filter the results in your export, search by one or more of these supported qualifiers before using the Export dropdown menu.
Qualifier	Example value
action	team.create
actor	octocat
user	codertocat
org	octo-org
repo	octo-org/documentation
created	2019-06-01

After you export the log, you'll see the following keys and values in the resulting file.
Key	Example value
action	team.create
actor	octocat
user	codertocat
actor_location.country_code	US
org	octo-org
repo	octo-org/documentation
created_at	1429548104000 (Timestamp shows the time since Epoch with milliseconds.)
data.email	octocat@nowhere.com
data.hook_id	245
data.events	["issues", "issue_comment", "pull_request", "pull_request_review_comment"]
data.events_were	["push", "pull_request", "issues"]
data.target_login	octocat
data.old_user	hubot
data.team	octo-org/engineering
Using the audit log API

Organizations that use GitHub Enterprise Cloud can interact with the audit log using the GraphQL API and REST API. For more information, see the GitHub Enterprise Cloud documentation.
Further reading

    Keeping your organization secure
    Exporting member information for your organization

Help and support
Did you find what you needed?
Privacy policy
Help us make these docs great!

All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute
Still need help?
Ask the GitHub community
Contact support
Legal

    © 2025 GitHub, Inc.
    Terms
    Privacy
    Status
    Pricing
    Expert services
    Blog

Reviewing the audit log for your organization - GitHub Docs


---
title: Reviewing the audit log for your organization
intro: 'The audit log allows organization admins to quickly review the actions performed by members of your organization. It includes details such as who performed the action, what the action was, and when it was performed.'
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
---

## Accessing the audit log

> [!NOTE]
> {% data reusables.webhooks.webhooks-as-audit-log-alternative %}

The audit log lists events triggered by activities that affect your organization within the last 180 days. Only owners can access an organization's audit log.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Searching the audit log

{% data reusables.audit_log.audit-log-search %}

### Search based on the action performed

To search for specific events, use the `action` qualifier in your query. Actions listed in the audit log are grouped in different categories. For the full list of events in each category, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization).

| Category name | Description
|------------------|-------------------
| {% ifversion fpt or ghec %} |
| `account` | Contains all activities related to your organization account.
| `advisory_credit` | Contains all activities related to crediting a contributor for a security advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories).
| {% endif %} |
| `auto_approve_personal_access_token_requests` | Contains activities related to your organization's approval policy for {% data variables.product.pat_v2 %}s. For more information, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).
| {% ifversion fpt or ghec %} |
| `billing` | Contains all activities related to your organization's billing.
| `business` | Contains activities related to business settings for an enterprise. |
| {% endif %} |
| {% ifversion fpt or ghec or ghes > 3.16 %} |
| `code-scanning` | Contains all activities related to your organization's code scanning alerts. |
| {% endif %} |
| {% ifversion fpt or ghec %} |
| `codespaces` | Contains all activities related to your organization's codespaces. |
| `copilot` | Contains all activities related to your {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %} subscription.
| {% endif %} |
| `dependabot_alerts` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_alerts %} in existing repositories. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
| `dependabot_alerts_new_repos` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_alerts %} in new repositories created in the organization.
| `dependabot_security_updates` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} in existing repositories. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).
| `dependabot_security_updates_new_repos` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.
| {% ifversion fpt or ghec %} |
| `dependency_graph` | Contains organization-level configuration activities for dependency graphs for repositories. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).
| `dependency_graph_new_repos` | Contains organization-level configuration activities for new repositories created in the organization.
| {% endif %} |
| `discussion_post` | Contains all activities related to discussions posted to a team page.
| `discussion_post_reply` | Contains all activities related to replies to discussions posted to a team page.
| `enterprise` | Contains activities related to enterprise settings. |
| `hook` | Contains all activities related to webhooks.
| `integration_installation` | Contains activities related to integrations installed in an account. |
| `integration_installation_request` | Contains all activities related to organization member requests for owners to approve integrations for use in the organization. |
| {% ifversion ghec %} |
| `ip_allow_list` | Contains activities related to enabling or disabling the IP allow list for an organization.
| `ip_allow_list_entry` | Contains activities related to the creation, deletion, and editing of an IP allow list entry for an organization.
| {% endif %} |
| `issue` | Contains activities related to deleting an issue.
| {% ifversion fpt or ghec %} |
| `marketplace_agreement_signature` | Contains all activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.
| `marketplace_listing` | Contains all activities related to listing apps in {% data variables.product.prodname_marketplace %}. |
| {% endif %} |
| `members_can_create_pages` | Contains all activities related to managing the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization). |
| `org` | Contains activities related to organization membership.
| {% ifversion ghec %} |
| `org_credential_authorization` | Contains all activities related to authorizing credentials for use with SAML single sign-on. |
| {% endif %} |
| `org_secret_scanning_automatic_validity_checks` | Contains organization-level activities related to enabling and disabling automatic validity checks for {% data variables.product.prodname_secret_scanning %}. For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-validity-checks-for-partner-patterns-in-an-organization).
| `org_secret_scanning_custom_pattern` | Contains organization-level activities related to {% data variables.product.prodname_secret_scanning %} custom patterns. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).
| `organization_default_label` | Contains all activities related to default labels for repositories in your organization.
| `oauth_application` | Contains all activities related to {% data variables.product.prodname_oauth_apps %}.
| `packages` | Contains all activities related to {% data variables.product.prodname_registry %}.
| {% ifversion fpt or ghec %} |
| `payment_method` | Contains all activities related to how your organization pays for GitHub.
| {% endif %} |
| `personal_access_token` | Contains activities related to {% data variables.product.pat_v2 %}s in your organization. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
| `profile_picture`| Contains all activities related to your organization's profile picture.
| `project` | Contains all activities related to {% data variables.projects.projects_v2_and_v1 %}.
| `protected_branch` | Contains all activities related to protected branches.
| `repo` | Contains activities related to the repositories owned by your organization.
| {% ifversion fpt or ghec %} |
| `repository_advisory` | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}. For more information, see [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories).
| `repository_content_analysis` | Contains all activities related to enabling or disabling data use for a private repository. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
| `repository_dependency_graph` | Contains repository-level activities related to enabling or disabling the dependency graph for a private repository. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).
| {% endif %} |
| {% ifversion ghes or ghec %} |
| `repository_secret_scanning` | Contains repository-level activities related to {% data variables.product.prodname_secret_scanning %}. For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning).
| {% endif %} |
| `repository_secret_scanning_automatic_validity_checks` | Contains repository-level activities related to enabling and disabling automatic validity checks for {% data variables.product.prodname_secret_scanning %}. For more information, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository).
| `repository_secret_scanning_custom_pattern` | Contains repository-level activities related to {% data variables.product.prodname_secret_scanning %} custom patterns. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning). |
| `repository_secret_scanning_custom_pattern_push_protection`| Contains repository-level activities related to push protection of a custom pattern for {% data variables.product.prodname_secret_scanning %}. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository).
| `repository_secret_scanning_push_protection` | Contains repository-level activities related to {% data variables.product.prodname_secret_scanning %} push protection. For more information, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `repository_vulnerability_alert` | Contains all activities related to [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
| {% ifversion fpt or ghec %} |
| `repository_vulnerability_alerts` | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot_alerts %}.
| {% endif %} |
| {% ifversion ghec or ghes %} |
| `role` | Contains all activities related to [custom repository roles](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-custom-repository-roles-for-an-organization).
| {% endif %} |
| {% ifversion ghes or ghec %} |
| `secret_scanning` | Contains organization-level configuration activities for {% data variables.product.prodname_secret_scanning %} in existing repositories. For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning).
| `secret_scanning_new_repos` | Contains organization-level configuration activities for {% data variables.product.prodname_secret_scanning %} for new repositories created in the organization.
| {% endif %} |
| {% ifversion fpt or ghec %} |
| `restore_member` | Triggered when an organization owner reinstates a member. For more information, see [AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).|
| `sponsors`| Contains all events related to sponsor buttons (see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository))
| {% endif %} |
| `team` | Contains all activities related to teams in your organization.
| `workflows` | Contains activities related to {% data variables.product.prodname_actions %} workflows.

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

> [!NOTE]
> The audit log contains data for the last 180 days.

### Search based on location

Using the qualifier `country`, you can filter events in the audit log based on the originating country. You can use a country's two-letter short code or its full name. Keep in mind that countries with spaces in their name will need to be wrapped in quotation marks. For example:

* `country:de` finds all events that occurred in Germany.
* `country:Mexico` finds all events that occurred in Mexico.
* `country:"United States"` all finds events that occurred in the United States.

{% ifversion ghec %}

### Search based on access token

You can identify all events that were performed by a specific access token. For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/identifying-audit-log-events-performed-by-an-access-token).

{% endif %}

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

You can interact with the audit log using the GraphQL API{% ifversion fpt or ghec %} or the REST API{% endif %}. You can use the `read:audit_log` scope to access the audit log via the APIs.

{% ifversion ghec %}

> [!NOTE]
> To use the audit log API, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

### Using the GraphQL API

{% endif %}

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %}
Note that you can't retrieve Git events using the GraphQL API. To retrieve Git events, use the REST API instead. For more information, see [`git` category actions](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#git).
{% endif %}

The GraphQL response can include data for up to 90 to 120 days.

For example, you can make a GraphQL request to see all the new organization members added to your organization. For more information, see the [AUTOTITLE](/graphql/reference/interfaces#auditentry/).

{% ifversion ghec %}

### Using the REST API

To ensure your intellectual property is secure, and you maintain compliance for your organization, you can use the audit log REST API to keep copies of your audit log data. For more information about the specific events you can access using the REST API, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization).

{% data reusables.audit_log.audit-log-git-events-retention %}

By default, only events from the past three months are returned. To include older events, you must specify a timestamp in your query.

When you use the REST API to request Git events, events that were initiated via the web browser or the REST or GraphQL APIs are not included. For example, when you merge a pull request in the web browser, changes are pushed to the base branch, but the Git event for that push is not included in the response.

For more information about the audit log REST API, see [AUTOTITLE](/rest/orgs#get-the-audit-log-for-an-organization).

{% endif %}
{% endif %}

# Further reading

* [AUTOTITLE](/organizations/keeping-your-organization-secure)
{%- ifversion fpt or ghec %}
* [AUTOTITLE](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization){% endif %}
