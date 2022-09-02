---
title: Creating a GitHub App using URL parameters
intro: 'You can preselect the settings of a new {% data variables.product.prodname_github_app %} using URL [query parameters](https://en.wikipedia.org/wiki/Query_string) to quickly set up the new {% data variables.product.prodname_github_app %}''s configuration.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
---
## About {% data variables.product.prodname_github_app %} URL parameters

You can add query parameters to these URLs to preselect the configuration of a {% data variables.product.prodname_github_app %} on a personal or organization account:

* **Personal account:** `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **Organization account:** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

The person creating the app can edit the preselected values from the {% data variables.product.prodname_github_app %} registration page, before submitting the app. If you do not include required parameters in the URL query string, like `name`, the person creating the app will need to input a value before submitting the app.

For apps that require a secret to secure their webhook, the secret's value must be set in the form by the person creating the app, not by using query parameters. For more information, see "[Securing your webhooks](/developers/webhooks-and-events/webhooks/securing-your-webhooks)."

The following URL creates a new public app called `octocat-github-app` with a preconfigured description and callback URL. This URL also selects read and write permissions for `checks`, subscribes to the `check_run` and `check_suite` webhook events, and selects the option to request user authorization (OAuth) during installation:

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

The complete list of available query parameters, permissions, and events is listed in the sections below.

## {% data variables.product.prodname_github_app %} configuration parameters

 Name | Type | Description
-----|------|-------------
`name` | `string` | The name of the {% data variables.product.prodname_github_app %}. Give your app a clear and succinct name. Your app cannot have the same name as an existing GitHub user, unless it is your own user or organization name. A slugged version of your app's name will be shown in the user interface when your integration takes an action.
`description` | `string` | A description of the {% data variables.product.prodname_github_app %}.
`url` | `string` | The full URL of your {% data variables.product.prodname_github_app %}'s website homepage.
`callback_urls` | `array of strings` | A full URL to redirect to after someone authorizes an installation. You can provide up to 10 callback URLs. These URLs are used if your app needs to identify and authorize user-to-server requests. For example, `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`.
`request_oauth_on_install` | `boolean` | If your app authorizes users using the OAuth flow, you can set this option to `true` to allow people to authorize the app when they install it, saving a step. If you select this option, the `setup_url` becomes unavailable and users will be redirected to your `callback_url` after installing the app.
`setup_url` | `string` | The full URL to redirect to after someone installs the {% data variables.product.prodname_github_app %} if the app requires additional setup after installation.
`setup_on_update` | `boolean` | Set to `true` to redirect people to the setup URL when installations have been updated, for example, after repositories are added or removed.
`public` | `boolean` | Set to `true` when your {% data variables.product.prodname_github_app %} is available to the public or `false` when it is only accessible to the owner of the app.
`webhook_active` | `boolean` | Set to `false` to disable webhook. Webhook is enabled by default.
`webhook_url` | `string` | The full URL that you would like to send webhook event payloads to.
{% ifversion ghae %}`webhook_secret` | `string` | You can specify a secret to secure your webhooks. See "[Securing your webhooks](/webhooks/securing/)" for more details.
{% endif %}`events` | `array of strings` | Webhook events. Some webhook events require `read` or `write` permissions for a resource before you can select the event when registering a new {% data variables.product.prodname_github_app %}. See the "[{% data variables.product.prodname_github_app %} webhook events](#github-app-webhook-events)" section for available events and their required permissions. You can select multiple events in a query string. For example, `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
`domain` | `string` | The URL of a content reference.{% endif %}
`single_file_name` | `string` | This is a narrowly-scoped permission that allows the app to access a single file in any repository. When you set the `single_file` permission to `read` or `write`, this field provides the path to the single file your {% data variables.product.prodname_github_app %} will manage. {% ifversion fpt or ghes or ghec %} If you need to manage multiple files, see `single_file_paths` below. {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | This allows the app to access up ten specified files in a repository. When you set the `single_file` permission to `read` or `write`, this array can store the paths for up to ten files that your {% data variables.product.prodname_github_app %} will manage. These files all receive the same permission set by `single_file`, and do not have separate individual permissions. When two or more files are configured, the API returns `multiple_single_files=true`, otherwise it returns `multiple_single_files=false`.{% endif %}

## {% data variables.product.prodname_github_app %} permissions

You can select permissions in a query string using the permission name in the following table as the query parameter name and the permission type as the query value. For example, to select `Read & write` permissions in the user interface for `contents`, your query string would include `&contents=write`. To select `Read-only` permissions in the user interface for `blocking`, your query string would include `&blocking=read`. To select `no-access` in the user interface for `checks`, your query string would not include the `checks` permission.

Permission | Description
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-administration) | Grants access to various endpoints for organization and repository administration. Can be one of: `none`, `read`, or `write`.{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-blocking) | Grants access to the [Blocking Users API](/rest/reference/users#blocking). Can be one of: `none`, `read`, or `write`.{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps/#permission-on-checks) | Grants access to the [Checks API](/rest/reference/checks). Can be one of: `none`, `read`, or `write`.{% ifversion ghes < 3.4 %}
`content_references` | Grants access to the "[Create a content attachment](/rest/reference/apps#create-a-content-attachment)" endpoint. Can be one of: `none`, `read`, or `write`.{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps/#permission-on-contents) |  Grants access to various endpoints that allow you to modify repository contents. Can be one of: `none`, `read`, or `write`.
[`deployments`](/rest/reference/permissions-required-for-github-apps/#permission-on-deployments) | Grants access to the [Deployments API](/rest/reference/repos#deployments). Can be one of: `none`, `read`, or `write`.{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps/#permission-on-emails) | Grants access to the [Emails API](/rest/reference/users#emails). Can be one of: `none`, `read`, or `write`.{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps/#permission-on-followers) | Grants access to the [Followers API](/rest/reference/users#followers). Can be one of: `none`, `read`, or `write`.
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-gpg-keys) | Grants access to the [GPG Keys API](/rest/reference/users#gpg-keys). Can be one of: `none`, `read`, or `write`.
[`issues`](/rest/reference/permissions-required-for-github-apps/#permission-on-issues) | Grants access to the [Issues API](/rest/reference/issues). Can be one of: `none`, `read`, or `write`.
[`keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-keys) | Grants access to the [Public Keys API](/rest/reference/users#keys). Can be one of: `none`, `read`, or `write`.
[`members`](/rest/reference/permissions-required-for-github-apps/#permission-on-members) |  Grants access to manage an organization's members. Can be one of: `none`, `read`, or `write`.{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps/#metadata-permissions) | Grants access to read-only endpoints that do not leak sensitive data. Can be `read` or `none`. Defaults to `read` when you set any permission, or defaults to `none` when you don't specify any permissions for the {% data variables.product.prodname_github_app %}.
[`organization_administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-administration) | Grants access to "[Update an organization](/rest/reference/orgs#update-an-organization)" endpoint and the [Organization Interaction Restrictions API](/rest/reference/interactions#set-interaction-restrictions-for-an-organization). Can be one of: `none`, `read`, or `write`.{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-hooks) | Grants access to the [Organization Webhooks API](/rest/reference/orgs#webhooks/). Can be one of: `none`, `read`, or `write`.
`organization_plan` | Grants access to get information about an organization's plan using the "[Get an organization](/rest/reference/orgs#get-an-organization)" endpoint. Can be one of: `none` or `read`.
[`organization_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) |  Grants access to the [Projects API](/rest/reference/projects). Can be one of: `none`, `read`, `write`, or `admin`.{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects) | Grants access to the [Blocking Organization Users API](/rest/reference/orgs#blocking). Can be one of: `none`, `read`, or `write`.{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps/#permission-on-pages) | Grants access to the [Pages API](/rest/reference/repos#pages). Can be one of: `none`, `read`, or `write`.
`plan` | Grants access to get information about a user's GitHub plan using the "[Get a user](/rest/reference/users#get-a-user)" endpoint. Can be one of: `none` or `read`.
[`pull_requests`](/rest/reference/permissions-required-for-github-apps/#permission-on-pull-requests) | Grants access to various pull request endpoints. Can be one of: `none`, `read`, or `write`.
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-hooks) | Grants access to the [Repository Webhooks API](/rest/reference/repos#hooks). Can be one of: `none`, `read`, or `write`.
[`repository_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-projects) |  Grants access to the [Projects API](/rest/reference/projects). Can be one of: `none`, `read`, `write`, or `admin`.{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps/#permission-on-secret-scanning-alerts) |  Grants access to the [Secret scanning API](/rest/reference/secret-scanning). Can be one of: `none`, `read`, or `write`.{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps/#permission-on-security-events) |  Grants access to the [Code scanning API](/rest/reference/code-scanning/). Can be one of: `none`, `read`, or `write`.{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps/#permission-on-single-file) | Grants access to the [Contents API](/rest/reference/repos#contents). Can be one of: `none`, `read`, or `write`.
[`starring`](/rest/reference/permissions-required-for-github-apps/#permission-on-starring) | Grants access to the [Starring API](/rest/reference/activity#starring). Can be one of: `none`, `read`, or `write`.
[`statuses`](/rest/reference/permissions-required-for-github-apps/#permission-on-statuses) | Grants access to the [Statuses API](/rest/reference/commits#commit-statuses). Can be one of: `none`, `read`, or `write`.
[`team_discussions`](/rest/reference/permissions-required-for-github-apps/#permission-on-team-discussions) | Grants access to the [Team Discussions API](/rest/reference/teams#discussions) and the [Team Discussion Comments API](/rest/reference/teams#discussion-comments). Can be one of: `none`, `read`, or `write`.
`vulnerability_alerts`| Grants access to receive {% data variables.product.prodname_dependabot_alerts %} in a repository. See "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)" to learn more. Can be one of: `none` or `read`.
`watching` | Grants access to list and change repositories a user is subscribed to. Can be one of: `none`, `read`, or `write`.

## {% data variables.product.prodname_github_app %} webhook events

Webhook event name | Required permission | Description
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` or `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` or `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` or `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | Allows integrators using GitHub Actions to trigger custom events.{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}
