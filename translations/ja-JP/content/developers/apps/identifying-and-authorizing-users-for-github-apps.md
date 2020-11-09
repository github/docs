---
title: Identifying and authorizing users for GitHub Apps
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization/
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps/
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% data reusables.pre-release-program.expiring-user-access-tokens-beta %}

When your GitHub App acts on behalf of a user, it performs user-to-server requests. These requests must be authorized with a user's access token. User-to-server requests include requesting data for a user, like determining which repositories to display to a particular user. These requests also include actions triggered by a user, like running a build.

{% data reusables.apps.expiring_user_authorization_tokens %}

### Identifying users on your site

To authorize users for standard apps that run in the browser, use the [web application flow](#web-application-flow).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
To authorize users for headless apps without direct access to the browser, such as CLI tools or Git credential managers, use the [device flow](#device-flow). The device flow uses the OAuth 2.0 [Device Authorization Grant](https://tools.ietf.org/html/rfc8628).
{% endif %}

### Web アプリケーションフロー

Using the web application flow, the process to identify users on your site is:

1. ユーザはGitHubのアイデンティティをリクエストするためにリダイレクトされます
2. ユーザはGitHubによってサイトにリダイレクトして戻されます
3. Your GitHub App accesses the API with the user's access token

If you select **Request user authorization (OAuth) during installation** when creating or modifying your app, step 1 will be completed during app installation. For more information, see "[Authorizing users during installation](/apps/installing-github-apps/#authorizing-users-during-installation)."

#### 1. ユーザのGitHubアイデンティティのリクエスト

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

GitHub Appが`login`パラメータを指定すると、ユーザに対して利用できる特定のアカウントでサインインしてアプリケーションを認可するよう求めます。

##### パラメータ

| 名前             | 種類       | 説明                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `string` | **Required.** The client ID for your GitHub App. You can find this in your [GitHub App settings](https://github.com/settings/apps) when you select your app.                                                                                                                                                                                                                              |
| `redirect_uri` | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 This must be an exact match to {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} one of the URLs you provided as a **Callback URL** {% else %} the URL you provided in the **User authorization callback URL** field{% endif %} when setting up your GitHub App and can't contain any additional parameters. |
| `state`        | `string` | This should contain a random string to protect against forgery attacks and could contain any other arbitrary data.                                                                                                                                                                                                                                                                        |
| `login`        | `string` | サインインとアプリケーションの認可に使われるアカウントを指示します。                                                                                                                                                                                                                                                                                                                                                        |

{% note %}

**Note:** You don't need to provide scopes in your authorization request. Unlike traditional OAuth, the authorization token is limited to the permissions associated with your GitHub App and those of the user.

{% endnote %}

#### 2. ユーザはGitHubによってサイトにリダイレクトして戻されます

If the user accepts your request, GitHub redirects back to your site with a temporary `code` in a code parameter as well as the state you provided in the previous step in a `state` parameter. If the states don't match, the request was created by a third party and the process should be aborted.

{% note %}

**Note:** If you select **Request user authorization (OAuth) during installation** when creating or modifying your app, GitHub returns a temporary `code` that you will need to exchange for an access token. The `state` parameter is not returned when GitHub initiates the OAuth flow during app installation.

{% endnote %}

Exchange this `code` for an access token. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} When expiring tokens are enabled, the access token expires in 8 hours and the refresh token expires in 6 months. Every time you refresh the token, you get a new refresh token. For more information, see "[Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)."

Expiring user tokens are currently part of the user-to-server token expiration beta and subject to change. To opt-in to the user-to-server token expiration beta feature, see "[Activating beta features for apps](/developers/apps/activating-beta-features-for-apps)."{% endif %}

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### パラメータ

| 名前              | 種類       | 説明                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `string` | **Required.** The  client ID for your GitHub App.                                                                                                                                                                                                                                                                                                                                         |
| `client_secret` | `string` | **Required.** The  client secret for your GitHub App.                                                                                                                                                                                                                                                                                                                                     |
| `コード`           | `string` | **必須。** ステップ1でレスポンスとして受け取ったコード。                                                                                                                                                                                                                                                                                                                                                           |
| `redirect_uri`  | `string` | 認可の後にユーザが送られるアプリケーション中のURL。 This must be an exact match to {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} one of the URLs you provided as a **Callback URL** {% else %} the URL you provided in the **User authorization callback URL** field{% endif %} when setting up your GitHub App and can't contain any additional parameters. |
| `state`         | `string` | ステップ1で提供した推測できないランダムな文字列。                                                                                                                                                                                                                                                                                                                                                                 |

##### レスポンス

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

By default, the response takes the following form. The response parameters `expires_in`, `refresh_token`,  and `refresh_token_expires_in` are only returned when you enable the beta for expiring user-to-server access tokens.

```
{
  "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "expires_in": "28800",
  "refresh_token": "r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
{% else %}

デフォルトでは、レスポンスは以下の形式になります。

    access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

{% endif %}

#### 3. Your GitHub App accesses the API with the user's access token

The user's access token allows the GitHub App to make requests to the API on behalf of a user.

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

たとえば、curlでは以下のようにAuthorizationヘッダを設定できます。

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### デバイスフロー

{% note %}

**ノート:** デバイスフローはパブリックベータであり、変更されることがあります。{% if currentVersion == "free-pro-team@latest" %} このベータの機能を有効化するには、「[アプリケーションのベータ機能のアクティベート](/developers/apps/activating-beta-features-for-apps)」を参照してください。{% endif %}

{% endnote %}

デバイスフローを使えば、CLIツールやGit認証情報マネージャーなどのヘッドレスアプリケーションのユーザを認可できます。

For more information about authorizing users using the device flow, see "[Authorizing OAuth Apps](/developers/apps/authorizing-oauth-apps#device-flow)".

{% endif %}

### Check which installation's resources a user can access

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

Once you have an OAuth token for a user, you can check which installations that user can access.

    Authorization: token OAUTH-TOKEN
    GET /user/installations

You can also check which repositories are accessible to a user for an installation.

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

More details can be found in: [List app installations accessible to the user access token](/v3/apps/installations/#list-app-installations-accessible-to-the-user-access-token) and [List repositories accessible to the user access token](/v3/apps/installations/#list-repositories-accessible-to-the-user-access-token).

### Handling a revoked GitHub App authorization

If a user revokes their authorization of a GitHub App, the app will receive the [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) webhook by default. GitHub Apps cannot unsubscribe from this event. {% data reusables.webhooks.authorization_event %}

### User-level permissions

You can add user-level permissions to your GitHub App to access user resources, such as user emails, that are granted by individual users as part of the [user authorization flow](#identifying-users-on-your-site). User-level permissions differ from [repository and organization-level permissions](/v3/apps/permissions/), which are granted at the time of installation on an organization or user account.

You can select user-level permissions from within your GitHub App's settings in the **User permissions** section of the **Permissions & webhooks** page. For more information on selecting permissions, see "[Editing a GitHub App's permissions](/apps/managing-github-apps/editing-a-github-app-s-permissions/)."

When a user installs your app on their account, the installation prompt will list the user-level permissions your app is requesting and explain that the app can ask individual users for these permissions.

Because user-level permissions are granted on an individual user basis, you can add them to your existing app without prompting users to upgrade. You will, however, need to send existing users through the user authorization flow to authorize the new permission and get a new user-to-server token for these requests.

### User-to-server requests

While most of your API interaction should occur using your server-to-server installation access tokens, certain endpoints allow you to perform actions via the API using a user access token. Your app can make the following requests using [GraphQL v4](/v4/) or [REST v3](/v3/) endpoints.

#### Supported endpoints

{% if currentVersion == "free-pro-team@latest" %}
##### Actions Runners

* [List runner applications for a repository](/v3/actions/self-hosted-runners/#list-runner-applications-for-a-repository)
* [List self-hosted runners for a repository](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-a-repository)
* [Get a self-hosted runner for a repository](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-a-repository)
* [Delete a self-hosted runner from a repository](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-a-repository)
* [Create a registration token for a repository](/v3/actions/self-hosted-runners/#create-a-registration-token-for-a-repository)
* [Create a remove token for a repository](/v3/actions/self-hosted-runners/#create-a-remove-token-for-a-repository)
* [List runner applications for an organization](/v3/actions/self-hosted-runners/#list-runner-applications-for-an-organization)
* [List self-hosted runners for an organization](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-an-organization)
* [Get a self-hosted runner for an organization](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-an-organization)
* [Delete a self-hosted runner from an organization](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-an-organization)
* [Create a registration token for an organization](/v3/actions/self-hosted-runners/#create-a-registration-token-for-an-organization)
* [Create a remove token for an organization](/v3/actions/self-hosted-runners/#create-a-remove-token-for-an-organization)

##### Actions Secrets

* [Get a repository public key](/v3/actions/secrets/#get-a-repository-public-key)
* [List repository secrets](/v3/actions/secrets/#list-repository-secrets)
* [Get a repository secret](/v3/actions/secrets/#get-a-repository-secret)
* [Create or update a repository secret](/v3/actions/secrets/#create-or-update-a-repository-secret)
* [Delete a repository secret](/v3/actions/secrets/#delete-a-repository-secret)
* [Get an organization public key](/v3/actions/secrets/#get-an-organization-public-key)
* [List organization secrets](/v3/actions/secrets/#list-organization-secrets)
* [Get an organization secret](/v3/actions/secrets/#get-an-organization-secret)
* [Create or update an organization secret](/v3/actions/secrets/#create-or-update-an-organization-secret)
* [List selected repositories for an organization secret](/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret)
* [Set selected repositories for an organization secret](/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret)
* [Add selected repository to an organization secret](/v3/actions/secrets/#add-selected-repository-to-an-organization-secret)
* [Remove selected repository from an organization secret](/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret)
* [Delete an organization secret](/v3/actions/secrets/#delete-an-organization-secret)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### 成果物

* [List artifacts for a repository](/v3/actions/artifacts/#list-artifacts-for-a-repository)
* [List workflow run artifacts](/v3/actions/artifacts/#list-workflow-run-artifacts)
* [Get an artifact](/v3/actions/artifacts/#get-an-artifact)
* [Delete an artifact](/v3/actions/artifacts/#delete-an-artifact)
* [Download an artifact](/v3/actions/artifacts/#download-an-artifact)
{% endif %}

##### チェックラン

* [Create a check run](/v3/checks/runs/#create-a-check-run)
* [Get a check run](/v3/checks/runs/#get-a-check-run)
* [Update a check run](/v3/checks/runs/#update-a-check-run)
* [List check run annotations](/v3/checks/runs/#list-check-run-annotations)
* [List check runs in a check suite](/v3/checks/runs/#list-check-runs-in-a-check-suite)
* [List check runs for a Git reference](/v3/checks/runs/#list-check-runs-for-a-git-reference)

##### チェックスイート

* [Create a check suite](/v3/checks/suites/#create-a-check-suite)
* [Get a check suite](/v3/checks/suites/#get-a-check-suite)
* [Rerequest a check suite](/v3/checks/suites/#rerequest-a-check-suite)
* [Update repository preferences for check suites](/v3/checks/suites/#update-repository-preferences-for-check-suites)
* [List check suites for a Git reference](/v3/checks/suites/#list-check-suites-for-a-git-reference)

##### Codes Of Conduct

* [Get all codes of conduct](/v3/codes_of_conduct/#get-all-codes-of-conduct)
* [Get a code of conduct](/v3/codes_of_conduct/#get-a-code-of-conduct)

##### Deployment Statuses

* [List deployment statuses](/rest/reference/repos#list-deployment-statuses)
* [Create a deployment status](/rest/reference/repos#create-a-deployment-status)
* [Get a deployment status](/rest/reference/repos#get-a-deployment-status)

##### デプロイメント

* [List deployments](/rest/reference/repos#list-deployments)
* [Create a deployment](/rest/reference/repos#create-a-deployment)
* [Get a deployment](/rest/reference/repos#get-a-deployment){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [Delete a deployment](/rest/reference/repos#delete-a-deployment){% endif %}

##### イベント

* [List public events for a network of repositories](/rest/reference/activity#list-public-events-for-a-network-of-repositories)
* [List public organization events](/rest/reference/activity#list-public-organization-events)

##### フィード

* [Get feeds](/rest/reference/activity#get-feeds)

##### Git Blobs

* [Create a blob](/v3/git/blobs/#create-a-blob)
* [Get a blob](/v3/git/blobs/#get-a-blob)

##### Git Commits

* [Create a commit](/v3/git/commits/#create-a-commit)
* [Get a commit](/v3/git/commits/#get-a-commit)

##### Git Refs

* [Create a reference](/v3/git/refs/#create-a-reference)* [Get a reference](/v3/git/refs/#get-a-reference)
* [List matching references](/v3/git/refs/#list-matching-references)
* [Update a reference](/v3/git/refs/#update-a-reference)
* [Delete a reference](/v3/git/refs/#delete-a-reference)

##### Git Tags

* [Create a tag object](/v3/git/tags/#create-a-tag-object)
* [Get a tag](/v3/git/tags/#get-a-tag)

##### Git Trees

* [Create a tree](/v3/git/trees/#create-a-tree)
* [Get a tree](/v3/git/trees/#get-a-tree)

##### Gitignore Templates

* [Get all gitignore templates](/v3/gitignore/#get-all-gitignore-templates)
* [Get a gitignore template](/v3/gitignore/#get-a-gitignore-template)

##### Installations

* [List repositories accessible to the user access token](/v3/apps/installations/#list-repositories-accessible-to-the-user-access-token)

{% if currentVersion == "free-pro-team@latest" %}
##### Interaction Limits

* [Get interaction restrictions for an organization](/v3/interactions/orgs/#get-interaction-restrictions-for-an-organization)
* [Set interaction restrictions for an organization](/v3/interactions/orgs/#set-interaction-restrictions-for-an-organization)
* [Remove interaction restrictions for an organization](/v3/interactions/orgs/#remove-interaction-restrictions-for-an-organization)
* [Get interaction restrictions for a repository](/v3/interactions/repos/#get-interaction-restrictions-for-a-repository)
* [Set interaction restrictions for a repository](/v3/interactions/repos/#set-interaction-restrictions-for-a-repository)
* [Remove interaction restrictions for a repository](/v3/interactions/repos/#remove-interaction-restrictions-for-a-repository)
{% endif %}

##### Issue Assignees

* [Add assignees to an issue](/v3/issues/assignees/#add-assignees-to-an-issue)
* [Remove assignees from an issue](/v3/issues/assignees/#remove-assignees-from-an-issue)

##### Issue Comments

* [List issue comments](/v3/issues/comments/#list-issue-comments)
* [Create an issue comment](/v3/issues/comments/#create-an-issue-comment)
* [List issue comments for a repository](/v3/issues/comments/#list-issue-comments-for-a-repository)
* [Get an issue comment](/v3/issues/comments/#get-an-issue-comment)
* [Update an issue comment](/v3/issues/comments/#update-an-issue-comment)
* [Delete an issue comment](/v3/issues/comments/#delete-an-issue-comment)

##### Issue Events

* [List issue events](/v3/issues/events/#list-issue-events)

##### Issue Timeline

* [List timeline events for an issue](/v3/issues/timeline/#list-timeline-events-for-an-issue)

##### 問題

* [List issues assigned to the authenticated user](/v3/issues/#list-issues-assigned-to-the-authenticated-user)
* [List assignees](/v3/issues/assignees/#list-assignees)
* [Check if a user can be assigned](/v3/issues/assignees/#check-if-a-user-can-be-assigned)
* [List repository issues](/v3/issues/#list-repository-issues)
* [Issue を作成します](/v3/issues/#create-an-issue)
* [Get an issue](/v3/issues/#get-an-issue)
* [Update an issue](/v3/issues/#update-an-issue)
* [Lock an issue](/v3/issues/#lock-an-issue)
* [Unlock an issue](/v3/issues/#unlock-an-issue)

{% if currentVersion == "free-pro-team@latest" %}
##### Jobs

* [Get a job for a workflow run](/v3/actions/workflow-jobs/#get-a-job-for-a-workflow-run)
* [Download job logs for a workflow run](/v3/actions/workflow-jobs/#download-job-logs-for-a-workflow-run)
* [List jobs for a workflow run](/v3/actions/workflow-jobs/#list-jobs-for-a-workflow-run)
{% endif %}

##### ラベル

* [List labels for an issue](/v3/issues/labels/#list-labels-for-an-issue)
* [Add labels to an issue](/v3/issues/labels/#add-labels-to-an-issue)
* [Set labels for an issue](/v3/issues/labels/#set-labels-for-an-issue)
* [Remove all labels from an issue](/v3/issues/labels/#remove-all-labels-from-an-issue)
* [Remove a label from an issue](/v3/issues/labels/#remove-a-label-from-an-issue)
* [List labels for a repository](/v3/issues/labels/#list-labels-for-a-repository)
* [Create a label](/v3/issues/labels/#create-a-label)
* [Get a label](/v3/issues/labels/#get-a-label)
* [Update a label](/v3/issues/labels/#update-a-label)
* [Delete a label](/v3/issues/labels/#delete-a-label)
* [Get labels for every issue in a milestone](/v3/issues/labels/#list-labels-for-issues-in-a-milestone)

##### ライセンス

* [Get all commonly used licenses](/v3/licenses/#get-all-commonly-used-licenses)
* [Get a license](/v3/licenses/#get-a-license)

##### Markdown

* [Render a Markdown document](/v3/markdown/#render-a-markdown-document)
* [Render a markdown document in raw mode](/v3/markdown/#render-a-markdown-document-in-raw-mode)

##### メタ情報

* [メタ情報](/v3/meta/#meta)

##### マイルストーン

* [List milestones](/v3/issues/milestones/#list-milestones)
* [Create a milestone](/v3/issues/milestones/#create-a-milestone)
* [Get a milestone](/v3/issues/milestones/#get-a-milestone)
* [Update a milestone](/v3/issues/milestones/#update-a-milestone)
* [Delete a milestone](/v3/issues/milestones/#delete-a-milestone)

##### Organization Hooks

* [List organization webhooks](/rest/reference/orgs#webhooks/#list-organization-webhooks)
* [Create an organization webhook](/rest/reference/orgs#webhooks/#create-an-organization-webhook)
* [Get an organization webhook](/rest/reference/orgs#webhooks/#get-an-organization-webhook)
* [Update an organization webhook](/rest/reference/orgs#webhooks/#update-an-organization-webhook)
* [Delete an organization webhook](/rest/reference/orgs#webhooks/#delete-an-organization-webhook)
* [Ping an organization webhook](/rest/reference/orgs#webhooks/#ping-an-organization-webhook)

{% if currentVersion == "free-pro-team@latest" %}
##### Organization Invitations

* [List pending organization invitations](/v3/orgs/members/#list-pending-organization-invitations)
* [Create an organization invitation](/v3/orgs/members/#create-an-organization-invitation)
* [List organization invitation teams](/v3/orgs/members/#list-organization-invitation-teams)
{% endif %}

##### Organization Members

* [List organization members](/v3/orgs/members/#list-organization-members)
* [Check organization membership for a user](/v3/orgs/members/#check-organization-membership-for-a-user)
* [Remove an organization member](/v3/orgs/members/#remove-an-organization-member)
* [Get organization membership for a user](/v3/orgs/members/#get-organization-membership-for-a-user)
* [Set organization membership for a user](/v3/orgs/members/#set-organization-membership-for-a-user)
* [Remove organization membership for a user](/v3/orgs/members/#remove-organization-membership-for-a-user)
* [List public organization members](/v3/orgs/members/#list-public-organization-members)
* [Check public organization membership for a user](/v3/orgs/members/#check-public-organization-membership-for-a-user)
* [Set public organization membership for the authenticated user](/v3/orgs/members/#set-public-organization-membership-for-the-authenticated-user)
* [Remove public organization membership for the authenticated user](/v3/orgs/members/#remove-public-organization-membership-for-the-authenticated-user)

##### Organization Outside Collaborators

* [List outside collaborators for an organization](/v3/orgs/outside_collaborators/#list-outside-collaborators-for-an-organization)
* [Convert an organization member to outside collaborator](/v3/orgs/outside_collaborators/#convert-an-organization-member-to-outside-collaborator)
* [Remove outside collaborator from an organization](/v3/orgs/outside_collaborators/#remove-outside-collaborator-from-an-organization)

{% if enterpriseServerVersions contains currentVersion %}
##### Organization Pre Receive Hooks

* [List pre-receive hooks for an organization](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [Get a pre-receive hook for an organization](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [Update pre-receive hook enforcement for an organization](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [Remove pre-receive hook enforcement for an organization](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### Organization Team Projects

* [List team projects](/v3/teams/#list-team-projects)
* [Check team permissions for a project](/v3/teams/#check-team-permissions-for-a-project)
* [Add or update team project permissions](/v3/teams/#add-or-update-team-project-permissions)
* [Remove a project from a team](/v3/teams/#remove-a-project-from-a-team)
{% endif %}

##### Organization Team Repositories

* [Team リポジトリの一覧表示](/v3/teams/#list-team-repositories)
* [Check team permissions for a repository](/v3/teams/#check-team-permissions-for-a-repository)
* [Add or update team repository permissions](/v3/teams/#add-or-update-team-repository-permissions)
* [Remove a repository from a team](/v3/teams/#remove-a-repository-from-a-team)

{% if currentVersion == "free-pro-team@latest" %}
##### Organization Team Sync

* [List idp groups for a team](/v3/teams/team_sync/#list-idp-groups-for-a-team)
* [Create or update idp group connections](/v3/teams/team_sync/#create-or-update-idp-group-connections)
* [List IdP groups for an organization](/v3/teams/team_sync/#list-idp-groups-for-an-organization)
{% endif %}

##### Organization Teams

* [List teams](/v3/teams/#list-teams)
* [Create a team](/v3/teams/#create-a-team)
* [Get a team by name](/v3/teams/#get-a-team-by-name)
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
* [Get a team](/v3/teams/#get-a-team)
{% endif %}
* [Update a team](/v3/teams/#update-a-team)
* [Delete a team](/v3/teams/#delete-a-team)
{% if currentVersion == "free-pro-team@latest" %}
* [List pending team invitations](/v3/teams/members/#list-pending-team-invitations)
{% endif %}
* [List team members](/v3/teams/members/#list-team-members)
* [Get team membership for a user](/v3/teams/members/#get-team-membership-for-a-user)
* [Add or update team membership for a user](/v3/teams/members/#add-or-update-team-membership-for-a-user)
* [Remove team membership for a user](/v3/teams/members/#remove-team-membership-for-a-user)
* [List child teams](/v3/teams/#list-child-teams)
* [List teams for the authenticated user](/v3/teams/#list-teams-for-the-authenticated-user)

##### Organization

* [List organizations](/v3/orgs/#list-organizations)
* [Get an organization](/v3/orgs/#get-an-organization)
* [Update an organization](/v3/orgs/#update-an-organization)
* [List organization memberships for the authenticated user](/v3/orgs/members/#list-organization-memberships-for-the-authenticated-user)
* [Get an organization membership for the authenticated user](/v3/orgs/members/#get-an-organization-membership-for-the-authenticated-user)
* [Update an organization membership for the authenticated user](/v3/orgs/members/#update-an-organization-membership-for-the-authenticated-user)
* [List organizations for the authenticated user](/v3/orgs/#list-organizations-for-the-authenticated-user)
* [List organizations for a user](/v3/orgs/#list-organizations-for-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Organizations Credential Authorizations

* [List SAML SSO authorizations for an organization](/v3/orgs/#list-saml-sso-authorizations-for-an-organization)
* [Remove a SAML SSO authorization for an organization](/v3/orgs/#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Organizations Scim

* [List SCIM provisioned identities](/v3/scim/#list-scim-provisioned-identities)
* [Provision and invite a SCIM user](/v3/scim/#provision-and-invite-a-scim-user)
* [Get SCIM provisioning information for a user](/v3/scim/#get-scim-provisioning-information-for-a-user)
* [Set SCIM information for a provisioned user](/v3/scim/#set-scim-information-for-a-provisioned-user)
* [Update an attribute for a SCIM user](/v3/scim/#update-an-attribute-for-a-scim-user)
* [Delete a SCIM user from an organization](/v3/scim/#delete-a-scim-user-from-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### Source Imports

* [Get an import status](/v3/migrations/source_imports/#get-an-import-status)
* [Start an import](/v3/migrations/source_imports/#start-an-import)
* [Update an import](/v3/migrations/source_imports/#update-an-import)
* [Cancel an import](/v3/migrations/source_imports/#cancel-an-import)
* [Get commit authors](/v3/migrations/source_imports/#get-commit-authors)
* [Map a commit author](/v3/migrations/source_imports/#map-a-commit-author)
* [Get large files](/v3/migrations/source_imports/#get-large-files)
* [Update Git LFS preference](/v3/migrations/source_imports/#update-git-lfs-preference)
{% endif %}

##### Project Collaborators

* [List project collaborators](/v3/projects/collaborators/#list-project-collaborators)
* [Add project collaborator](/v3/projects/collaborators/#add-project-collaborator)
* [Remove project collaborator](/v3/projects/collaborators/#remove-project-collaborator)
* [Get project permission for a user](/v3/projects/collaborators/#get-project-permission-for-a-user)

##### プロジェクト

* [List organization projects](/v3/projects/#list-organization-projects)
* [Create an organization project](/v3/projects/#create-an-organization-project)
* [Get a project](/v3/projects/#get-a-project)
* [Update a project](/v3/projects/#update-a-project)
* [Delete a project](/v3/projects/#delete-a-project)
* [List project columns](/v3/projects/columns/#list-project-columns)
* [Create a project column](/v3/projects/columns/#create-a-project-column)
* [Get a project column](/v3/projects/columns/#get-a-project-column)
* [Update a project column](/v3/projects/columns/#update-a-project-column)
* [Delete a project column](/v3/projects/columns/#delete-a-project-column)
* [List project cards](/v3/projects/cards/#list-project-cards)
* [Create a project card](/v3/projects/cards/#create-a-project-card)
* [Move a project column](/v3/projects/columns/#move-a-project-column)
* [Get a project card](/v3/projects/cards/#get-a-project-card)
* [Update a project card](/v3/projects/cards/#update-a-project-card)
* [Delete a project card](/v3/projects/cards/#delete-a-project-card)
* [Move a project card](/v3/projects/cards/#move-a-project-card)
* [List repository projects](/v3/projects/#list-repository-projects)
* [Create a repository project](/v3/projects/#create-a-repository-project)

##### Pull Comments

* [List review comments on a pull request](/v3/pulls/comments/#list-review-comments-on-a-pull-request)
* [Create a review comment for a pull request](/v3/pulls/comments/#create-a-review-comment-for-a-pull-request)
* [List review comments in a repository](/v3/pulls/comments/#list-review-comments-in-a-repository)
* [Get a review comment for a pull request](/v3/pulls/comments/#get-a-review-comment-for-a-pull-request)
* [Update a review comment for a pull request](/v3/pulls/comments/#update-a-review-comment-for-a-pull-request)
* [Delete a review comment for a pull request](/v3/pulls/comments/#delete-a-review-comment-for-a-pull-request)

##### Pull Request Review Events

* [Dismiss a review for a pull request](/v3/pulls/reviews/#dismiss-a-review-for-a-pull-request)
* [Submit a review for a pull request](/v3/pulls/reviews/#submit-a-review-for-a-pull-request)

##### Pull Request Review Requests

* [List requested reviewers for a pull request](/v3/pulls/review_requests/#list-requested-reviewers-for-a-pull-request)
* [Request reviewers for a pull request](/v3/pulls/review_requests/#request-reviewers-for-a-pull-request)
* [Remove requested reviewers from a pull request](/v3/pulls/review_requests/#remove-requested-reviewers-from-a-pull-request)

##### Pull Request Reviews

* [List reviews for a pull request](/v3/pulls/reviews/#list-reviews-for-a-pull-request)
* [Create a review for a pull request](/v3/pulls/reviews/#create-a-review-for-a-pull-request)
* [Get a review for a pull request](/v3/pulls/reviews/#get-a-review-for-a-pull-request)
* [Update a review for a pull request](/v3/pulls/reviews/#update-a-review-for-a-pull-request)
* [List comments for a pull request review](/v3/pulls/reviews/#list-comments-for-a-pull-request-review)

##### Pulls

* [List pull requests](/v3/pulls/#list-pull-requests)
* [Create a pull request](/v3/pulls/#create-a-pull-request)
* [Get a pull request](/v3/pulls/#get-a-pull-request)
* [Update a pull request](/v3/pulls/#update-a-pull-request)
* [List commits on a pull request](/v3/pulls/#list-commits-on-a-pull-request)
* [List pull requests files](/v3/pulls/#list-pull-requests-files)
* [Check if a pull request has been merged](/v3/pulls/#check-if-a-pull-request-has-been-merged)
* [Merge a pull request (Merge Button)](/v3/pulls/#merge-a-pull-request)

##### リアクション

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}* [Delete a reaction](/v3/reactions/#delete-a-reaction-legacy){% else %}* [Delete a reaction](/v3/reactions/#delete-a-reaction){% endif %}
* [List reactions for a commit comment](/v3/reactions/#list-reactions-for-a-commit-comment)
* [Create reaction for a commit comment](/v3/reactions/#create-reaction-for-a-commit-comment)
* [List reactions for an issue](/v3/reactions/#list-reactions-for-an-issue)
* [Create reaction for an issue](/v3/reactions/#create-reaction-for-an-issue)
* [List reactions for an issue comment](/v3/reactions/#list-reactions-for-an-issue-comment)
* [Create reaction for an issue comment](/v3/reactions/#create-reaction-for-an-issue-comment)
* [List reactions for a pull request review comment](/v3/reactions/#list-reactions-for-a-pull-request-review-comment)
* [Create reaction for a pull request review comment](/v3/reactions/#create-reaction-for-a-pull-request-review-comment)
* [List reactions for a team discussion comment](/v3/reactions/#list-reactions-for-a-team-discussion-comment)
* [Create reaction for a team discussion comment](/v3/reactions/#create-reaction-for-a-team-discussion-comment)
* [List reactions for a team discussion](/v3/reactions/#list-reactions-for-a-team-discussion)
* [Create reaction for a team discussion](/v3/reactions/#create-reaction-for-a-team-discussion){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [Delete a commit comment reaction](/v3/reactions/#delete-a-commit-comment-reaction)
* [Delete an issue reaction](/v3/reactions/#delete-an-issue-reaction)
* [Delete a reaction to a commit comment](/v3/reactions/#delete-an-issue-comment-reaction)
* [Delete a pull request comment reaction](/v3/reactions/#delete-a-pull-request-comment-reaction)
* [Delete team discussion reaction](/v3/reactions/#delete-team-discussion-reaction)
* [Delete team discussion comment reaction](/v3/reactions/#delete-team-discussion-comment-reaction){% endif %}

##### リポジトリ

* [Organization リポジトリの一覧表示](/v3/repos/#list-organization-repositories)
* [Create a repository for the authenticated user](/v3/repos/#create-a-repository-for-the-authenticated-user)
* [リポジトリの Get](/v3/repos/#get-a-repository)
* [Update a repository](/v3/repos/#update-a-repository)
* [Delete a repository](/v3/repos/#delete-a-repository)
* [Compare two commits](/v3/repos/commits/#compare-two-commits)
* [List repository contributors](/v3/repos/#list-repository-contributors)
* [一覧表示のフォーク](/rest/reference/repos#list-forks)
* [Create a fork](/v3/repos/forks/#create-a-fork)
* [List repository languages](/v3/repos/#list-repository-languages)
* [List repository tags](/v3/repos/#list-repository-tags)
* [List repository teams](/v3/repos/#list-repository-teams)
* [Transfer a repository](/v3/repos/#transfer-a-repository)
* [List public repositories](/v3/repos/#list-public-repositories)
* [List repositories for the authenticated user](/v3/repos/#list-repositories-for-the-authenticated-user)
* [ユーザのリポジトリの一覧表示](/v3/repos/#list-repositories-for-a-user)
* [Create repository using a repository template](/v3/repos/#create-repository-using-a-repository-template)

##### Repository Activity

* [List stargazers](/rest/reference/activity#list-stargazers)
* [List watchers](/rest/reference/activity#list-watchers)
* [List repositories starred by a user](/rest/reference/activity#list-repositories-starred-by-a-user)
* [Check if a repository is starred by the authenticated user](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [Star a repository for the authenticated user](/rest/reference/activity#star-a-repository-for-the-authenticated-user)
* [Unstar a repository for the authenticated user](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user)
* [ユーザが Watch しているリポジトリの一覧表示](/rest/reference/activity#list-repositories-watched-by-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Repository Automated Security Fixes

* [Enable automated security fixes](/v3/repos/#enable-automated-security-fixes)
* [Disable automated security fixes](/v3/repos/#disable-automated-security-fixes)
{% endif %}

##### Repository Branches

* [List branches](/v3/repos/branches/#list-branches)
* [Get a branch](/v3/repos/branches/#get-a-branch)
* [Get branch protection](/v3/repos/branches/#get-branch-protection)
* [Update branch protection](/v3/repos/branches/#update-branch-protection)
* [Delete branch protection](/v3/repos/branches/#delete-branch-protection)
* [Get admin branch protection](/v3/repos/branches/#get-admin-branch-protection)
* [Set admin branch protection](/v3/repos/branches/#set-admin-branch-protection)
* [Delete admin branch protection](/v3/repos/branches/#delete-admin-branch-protection)
* [Get pull request review protection](/v3/repos/branches/#get-pull-request-review-protection)
* [Update pull request review protection](/v3/repos/branches/#update-pull-request-review-protection)
* [Delete pull request review protection](/v3/repos/branches/#delete-pull-request-review-protection)
* [Get commit signature protection](/v3/repos/branches/#get-commit-signature-protection)
* [Create commit signature protection](/v3/repos/branches/#create-commit-signature-protection)
* [Delete commit signature protection](/v3/repos/branches/#delete-commit-signature-protection)
* [Get status checks protection](/v3/repos/branches/#get-status-checks-protection)
* [Update status check potection](/v3/repos/branches/#update-status-check-potection)
* [Remove status check protection](/v3/repos/branches/#remove-status-check-protection)
* [Get all status check contexts](/v3/repos/branches/#get-all-status-check-contexts)
* [Add status check contexts](/v3/repos/branches/#add-status-check-contexts)
* [Set status check contexts](/v3/repos/branches/#set-status-check-contexts)
* [Remove status check contexts](/v3/repos/branches/#remove-status-check-contexts)
* [Get access restrictions](/v3/repos/branches/#get-access-restrictions)
* [Delete access restrictions](/v3/repos/branches/#delete-access-restrictions)
* [List teams with access to the protected branch](/v3/repos/branches/#list-teams-with-access-to-the-protected-branch)
* [Add team access restrictions](/v3/repos/branches/#add-team-access-restrictions)
* [Set team access restrictions](/v3/repos/branches/#set-team-access-restrictions)
* [Remove team access restriction](/v3/repos/branches/#remove-team-access-restrictions)
* [List user restrictions of protected branch](/v3/repos/branches/#list-users-with-access-to-the-protected-branch)
* [Add user access restrictions](/v3/repos/branches/#add-user-access-restrictions)
* [Set user access restrictions](/v3/repos/branches/#set-user-access-restrictions)
* [Remove user access restrictions](/v3/repos/branches/#remove-user-access-restrictions)
* [Merge a branch](/v3/repos/merging/#merge-a-branch)

##### Repository Collaborators

* [List repository collaborators](/v3/repos/collaborators/#list-repository-collaborators)
* [Check if a user is a repository collaborator](/v3/repos/collaborators/#check-if-a-user-is-a-repository-collaborator)
* [Add a repository collaborator](/v3/repos/collaborators/#add-a-repository-collaborator)
* [Remove a repository collaborator](/v3/repos/collaborators/#remove-a-repository-collaborator)
* [Get repository permissions for a user](/v3/repos/collaborators/#get-repository-permissions-for-a-user)

##### Repository Commit Comments

* [List commit comments for a repository](/v3/repos/comments/#list-commit-comments-for-a-repository)
* [Get a commit comment](/v3/repos/comments/#get-a-commit-comment)
* [Update a commit comment](/v3/repos/comments/#update-a-commit-comment)
* [Delete a commit comment](/v3/repos/comments/#delete-a-commit-comment)
* [List commit comments](/v3/repos/comments/#list-commit-comments)
* [Create a commit comment](/v3/repos/comments/#create-a-commit-comment)

##### Repository Commits

* [List commits](/v3/repos/commits/#list-commits)
* [Get a commit](/v3/repos/commits/#get-a-commit)
* [List branches for head commit](/v3/repos/commits/#list-branches-for-head-commit)
* [List pull requests associated with commit](/v3/repos/commits/#list-pull-requests-associated-with-commit)

##### Repository Community

* [Get the code of conduct for a repository](/v3/codes_of_conduct/#get-the-code-of-conduct-for-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
* [Get community profile metrics](/v3/repos/community/#get-community-profile-metrics)
{% endif %}

##### Repository Contents

* [Download a repository archive](/v3/repos/contents/#download-a-repository-archive)
* [Get repository content](/v3/repos/contents/#get-repository-content)
* [Create or update file contents](/v3/repos/contents/#create-or-update-file-contents)
* [Delete a file](/v3/repos/contents/#delete-a-file)
* [Get a repository README](/v3/repos/contents/#get-a-repository-readme)
* [Get the license for a repository](/v3/licenses/#get-the-license-for-a-repository)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### Repository Event Dispatches

* [Create a repository dispatch event](/v3/repos/#create-a-repository-dispatch-event)
{% endif %}

##### Repository Hooks

* [List repository webhooks](/v3/repos/hooks/#list-repository-webhooks)
* [Create a repository webhook](/v3/repos/hooks/#create-a-repository-webhook)
* [Get a repository webhook](/v3/repos/hooks/#get-a-repository-webhook)
* [Update a repository webhook](/v3/repos/hooks/#update-a-repository-webhook)
* [Delete a repository webhook](/v3/repos/hooks/#delete-a-repository-webhook)
* [Ping a repository webhook](/v3/repos/hooks/#ping-a-repository-webhook)
* [Test the push repository webhook](/v3/repos/hooks/#test-the-push-repository-webhook)

##### Repository Invitations

* [List repository invitations](/v3/repos/invitations/#list-repository-invitations)
* [Update a repository invitation](/v3/repos/invitations/#update-a-repository-invitation)
* [Delete a repository invitation](/v3/repos/invitations/#delete-a-repository-invitation)
* [List repository invitations for the authenticated user](/v3/repos/invitations/#list-repository-invitations-for-the-authenticated-user)
* [Accept a repository invitation](/v3/repos/invitations/#accept-a-repository-invitation)
* [Decline a repository invitation](/v3/repos/invitations/#decline-a-repository-invitation)

##### Repository Keys

* [List deploy keys](/v3/repos/keys/#list-deploy-keys)
* [Create a deploy key](/v3/repos/keys/#create-a-deploy-key)
* [Get a deploy key](/v3/repos/keys/#get-a-deploy-key)
* [Delete a deploy key](/v3/repos/keys/#delete-a-deploy-key)

##### Repository Pages

* [Get a GitHub Pages site](/rest/reference/repos#get-a-github-pages-site)
* [Create a GitHub Pages site](/rest/reference/repos#create-a-github-pages-site)
* [Update information about a GitHub Pages site](/rest/reference/repos#update-information-about-a-github-pages-site)
* [Delete a GitHub Pages site](/rest/reference/repos#delete-a-github-pages-site)
* [List GitHub Pages builds](/rest/reference/repos#list-github-pages-builds)
* [Request a GitHub Pages build](/rest/reference/repos#request-a-github-pages-build)
* [Get GitHub Pages build](/rest/reference/repos#get-github-pages-build)
* [Get latest pages build](/rest/reference/repos#get-latest-pages-build)

{% if enterpriseServerVersions contains currentVersion %}
##### Repository Pre Receive Hooks

* [List pre-receive hooks for a repository](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [Get a pre-receive hook for a repository](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [Update pre-receive hook enforcement for a repository](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [Remove pre-receive hook enforcement for a repository](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

##### Repository Releases

* [リリースの一覧表示](/rest/reference/repos/#list-releases)
* [Create a release](/rest/reference/repos/#create-a-release)
* [Get a release](/rest/reference/repos/#get-a-release)
* [リリースの更新](/rest/reference/repos/#update-a-release)
* [Delete a release](/rest/reference/repos/#delete-a-release)
* [List release assets](/rest/reference/repos/#list-release-assets)
* [Get a release asset](/rest/reference/repos/#get-a-release-asset)
* [Update a release asset](/rest/reference/repos/#update-a-release-asset)
* [Delete a release asset](/rest/reference/repos/#delete-a-release-asset)
* [Get the latest release](/rest/reference/repos/#get-the-latest-release)
* [Get a release by tag name](/rest/reference/repos/#get-a-release-by-tag-name)

##### Repository Stats

* [Get the weekly commit activity](/v3/repos/statistics/#get-the-weekly-commit-activity)
* [Get the last year of commit activity](/v3/repos/statistics/#get-the-last-year-of-commit-activity)
* [Get all contributor commit activity](/v3/repos/statistics/#get-all-contributor-commit-activity)
* [Get the weekly commit count](/v3/repos/statistics/#get-the-weekly-commit-count)
* [Get the hourly commit count for each day](/v3/repos/statistics/#get-the-hourly-commit-count-for-each-day)

{% if currentVersion == "free-pro-team@latest" %}
##### リポジトリ脆弱性アラート

* [Enable vulnerability alerts](/v3/repos/#enable-vulnerability-alerts)
* [Disable vulnerability alerts](/v3/repos/#disable-vulnerability-alerts)
{% endif %}

##### ルート

* [ルートエンドポイント](/v3/#root-endpoint)
* [絵文字](/v3/emojis/#emojis)
* [Get rate limit status for the authenticated user](/v3/rate_limit/#get-rate-limit-status-for-the-authenticated-user)

##### 検索

* [Search code](/v3/search/#search-code)
* [Search commits](/v3/search/#search-commits)
* [Search labels](/v3/search/#search-labels)
* [リポジトリを検索](/v3/search/#search-repositories)
* [Search topics](/v3/search/#search-topics)
* [Search users](/v3/search/#search-users)

##### ステータス

* [Get the combined status for a specific reference](/v3/repos/statuses/#get-the-combined-status-for-a-specific-reference)
* [List commit statuses for a reference](/v3/repos/statuses/#list-commit-statuses-for-a-reference)
* [Create a commit status](/v3/repos/statuses/#create-a-commit-status)

##### Team Discussions

* [List discussions](/v3/teams/discussions/#list-discussions)
* [Create a discussion](/v3/teams/discussions/#create-a-discussion)
* [Get a discussion](/v3/teams/discussions/#get-a-discussion)
* [Update a discussion](/v3/teams/discussions/#update-a-discussion)
* [Delete a discussion](/v3/teams/discussions/#delete-a-discussion)
* [List discussion comments](/v3/teams/discussion_comments/#list-discussion-comments)
* [Create a discussion comment](/v3/teams/discussion_comments/#create-a-discussion-comment)
* [Get a discussion comment](/v3/teams/discussion_comments/#get-a-discussion-comment)
* [Update a discussion comment](/v3/teams/discussion_comments/#update-a-discussion-comment)
* [Delete a discussion comment](/v3/teams/discussion_comments/#delete-a-discussion-comment)

##### Topics

* [Get all repository topics](/v3/repos#get-all-repository-topics)
* [Replace all repository topics](/v3/repos/#replace-all-repository-topics)

{% if currentVersion == "free-pro-team@latest" %}
##### トラフィック

* [Get repository clones](/v3/repos/traffic/#get-repository-clones)
* [Get top referral paths](/v3/repos/traffic/#get-top-referral-paths)
* [Get top referral sources](/v3/repos/traffic/#get-top-referral-sources)
* [Get page views](/v3/repos/traffic/#get-page-views)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### User Blocking

* [List users blocked by the authenticated user](/v3/users/blocking/#list-users-blocked-by-the-authenticated-user)
* [Check if a user is blocked by the authenticated user](/v3/users/blocking/#check-if-a-user-is-blocked-by-the-authenticated-user)
* [List users blocked by an organization](/v3/orgs/blocking/#list-users-blocked-by-an-organization)
* [Check if a user is blocked by an organization](/v3/orgs/blocking/#check-if-a-user-is-blocked-by-an-organization)
* [Block a user from an organization](/v3/orgs/blocking/#block-a-user-from-an-organization)
* [Unblock a user from an organization](/v3/orgs/blocking/#unblock-a-user-from-an-organization)
* [Block a user](/v3/users/blocking/#block-a-user)
* [Unblock a user](/v3/users/blocking/#unblock-a-user)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
##### User Emails

{% if currentVersion == "free-pro-team@latest" %}
* [Set primary email visibility for the authenticated user](/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [List email addresses for the authenticated user](/v3/users/emails/#list-email-addresses-for-the-authenticated-user)
* [Add email address(es)](/v3/users/emails/#add-an-email-address-for-the-authenticated-user)
* [Delete email address(es)](/v3/users/emails/#delete-an-email-address-for-the-authenticated-user)
* [List public email addresses for the authenticated user](/v3/users/emails/#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

##### User Followers

* [List followers of a user](/v3/users/followers/#list-followers-of-a-user)
* [List the people a user follows](/v3/users/followers/#list-the-people-a-user-follows)
* [Check if a person is followed by the authenticated user](/v3/users/followers/#check-if-a-person-is-followed-by-the-authenticated-user)
* [Follow a user](/v3/users/followers/#follow-a-user)
* [Unfollow a user](/v3/users/followers/#unfollow-a-user)
* [Check if a user follows another user](/v3/users/followers/#check-if-a-user-follows-another-user)

##### User Gpg Keys

* [List GPG keys for the authenticated user](/v3/users/gpg_keys/#list-gpg-keys-for-the-authenticated-user)
* [Create a GPG key for the authenticated user](/v3/users/gpg_keys/#create-a-gpg-key-for-the-authenticated-user)
* [Get a GPG key for the authenticated user](/v3/users/gpg_keys/#get-a-gpg-key-for-the-authenticated-user)
* [Delete a GPG key for the authenticated user](/v3/users/gpg_keys/#delete-a-gpg-key-for-the-authenticated-user)
* [List gpg keys for a user](/v3/users/gpg_keys/#list-gpg-keys-for-a-user)

##### User Public Keys

* [List public SSH keys for the authenticated user](/v3/users/keys/#list-public-ssh-keys-for-the-authenticated-user)
* [Create a public SSH key for the authenticated user](/v3/users/keys/#create-a-public-ssh-key-for-the-authenticated-user)
* [Get a public SSH key for the authenticated user](/v3/users/keys/#get-a-public-ssh-key-for-the-authenticated-user)
* [Delete a public SSH key for the authenticated user](/v3/users/keys/#delete-a-public-ssh-key-for-the-authenticated-user)
* [List public keys for a user](/v3/users/keys/#list-public-keys-for-a-user)

##### ユーザ

* [Get the authenticated user](/v3/users/#get-the-authenticated-user)
* [List app installations accessible to the user access token](/v3/apps/installations/#list-app-installations-accessible-to-the-user-access-token)
{% if currentVersion == "free-pro-team@latest" %}
* [List subscriptions for the authenticated user](/v3/apps/marketplace/#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [List users](/v3/users/#list-users)
* [Get a user](/v3/users/#get-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### Workflow Runs

* [List workflow runs for a repository](/v3/actions/workflow-runs/#list-workflow-runs-for-a-repository)
* [Get a workflow run](/v3/actions/workflow-runs/#get-a-workflow-run)
* [Cancel a workflow run](/v3/actions/workflow-runs/#cancel-a-workflow-run)
* [Download workflow run logs](/v3/actions/workflow-runs/#download-workflow-run-logs)
* [Delete workflow run logs](/v3/actions/workflow-runs/#delete-workflow-run-logs)
* [Re run a workflow](/v3/actions/workflow-runs/#re-run-a-workflow)
* [List workflow runs](/v3/actions/workflow-runs/#list-workflow-runs)
* [Get workflow run usage](/v3/actions/workflow-runs/#get-workflow-run-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### ワークフロー

* [List repository workflows](/v3/actions/workflows/#list-repository-workflows)
* [Get a workflow](/v3/actions/workflows/#get-a-workflow)
* [Get workflow usage](/v3/actions/workflows/#get-workflow-usage)
{% endif %}
