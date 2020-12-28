---
title: GitHub App と OAuth App の違い
intro: '{% data variables.product.prodname_github_app %} と {% data variables.product.prodname_oauth_app %} の違いについて知っておくと、どちらのアプリケーションを作成するかを決めるために役立ちます。 {% data variables.product.prodname_oauth_app %} は GitHub ユーザとして振る舞う一方、{% data variables.product.prodname_github_app %} は Organization または Organization 内のリポジトリにインストールされた場合、自らのアイデンティティを用います。'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications/
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type/
  - /apps/differences-between-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### GitHub App のインストール、OAuth App の承認が可能なユーザ

GitHub App は、個人アカウントおよび自分が所有する Organization にインストールできます。 リポジトリの管理者権限がある場合には、GitHub App を Organization のアカウントにインストールできます。 GitHub App がリポジトリにインストールされていて、Organization の権限を要求している場合、Organization のオーナーはアプリケーションを承認する必要があります。

{% data reusables.apps.app_manager_role %}

それに対し、ユーザは OAuth App を_承認_します。これにより、アプリケーションは認証されたユーザとして振る舞うことができます。 たとえば、認証されたユーザに対するすべての通知を検索する OAuth App を承認できます。 OAuth App の権限はいつでも取り消すことができます。

{% data reusables.apps.deletes_ssh_keys %}

| GitHub Apps                                                                                                                                                                       | OAuth App                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Organization に GitHub App をインストールするには、Organization のオーナーであるか管理者権限を所有している必要があります。 GitHub App がリポジトリにインストールされていて、Organization の権限を要求している場合、Organization のオーナーはアプリケーションを承認する必要があります。 | OAuth App を認証し、リソースへのアクセス権限を与えることができます。                                                                                           |
| GitHub App は個人のリポジトリにインストールできます。                                                                                                                                                  | OAuth App を認証し、リソースへのアクセス権限を与えることができます。                                                                                           |
| GitHub App をアンインストールしてアクセス権限を削除するには、Organization のオーナーであるか、個人リポジトリの所有者であるか、リポジトリの管理者権限を所有している必要があります。                                                                             | OAuth アクセストークンを削除して、アクセス権限を削除することができます。                                                                                           |
| GitHub App のインストールを要求するには、Organization のオーナーであるかリポジトリの管理者権限を所有している必要があります。                                                                                                        | Organization のアプリケーションポリシーが有効である場合、その Organization の任意のメンバーが OAuth App のインストールを要求できます。 Organization のオーナーは、その要求を承認または拒否する必要があります。 |

### What can GitHub Apps and OAuth Apps access?

アカウントの所有者は、別のアカウントにアクセス権限を与えることなく {% data variables.product.prodname_github_app %} を使用できます。 たとえば、サードパーティ製のビルドサービスを従業員の Organization にインストールしつつ、そのビルドサービスに個人アカウントにあるリポジトリへのアクセスを許可しないことができます。 GitHub App をセットアップした人が Organization から離れても、その GitHub App はインストールされたままになります。

_承認された_ OAuth App は、 ユーザまたは Organization のオーナーがアクセス可能なすべてのリソースにアクセスできます。

| GitHub Apps                                                                                                                                                                            | OAuth App                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GitHub App をインスールすると、アプリケーションはユーザまたは Organization アカウントの指定したリポジトリにアクセス可能になります。                                                                                                         | OAuth App を承認すると、アプリケーションはユーザがアクセス可能なリソースにアクセスできます。 （例: リポジトリ）                                                                                                                                                                                                     |
| 管理者がインストールからリポジトリを削除した場合、GitHub App のインストールトークンはリソースにアクセスできなくなります。                                                                                                                     | リポジトリへの書き込みアクセスを失ったときなど、ユーザがアクセスを失ったとき、OAuth アクセストークンはリソースにアクセスできなくなります。                                                                                                                                                                                           |
| インストールアクセストークンは、アプリケーションの作成者が指定したリポジトリの、選択した権限に制限されます。                                                                                                                                 | OAuth アクセストークンは、スコープにより制限されます。                                                                                                                                                                                                                                     |
| GitHub App は、リポジトリの実際のコンテンツにアクセスすることなく、Issue やプルリクエストへの個別のアクセスを要求できます。                                                                                                                 | OAuth App は、Issue やプルリクエストなど、リポジトリが所有するリソースにアクセスするには `repo` スコープをリクエストする必要があります。                                                                                                                                                                                   |
| GitHub Apps aren't subject to organization application policies. A GitHub App only has access to the repositories an organization owner has granted.                                   | If an organization application policy is active, only an organization owner can authorize the installation of an OAuth App. If installed, the OAuth App gains access to anything visible to the token the organization owner has within the approved organization. |
| A GitHub App receives a webhook event when an installation is changed or removed. This tells the app creator when they've received more or less access to an organization's resources. | OAuth Apps can lose access to an organization or repository at any time based on the granting user's changing access. The OAuth App will not inform you when it loses access to a resource.                                                                        |

### Token-based identification

{% note %}

**Note:** GitHub Apps can also use a user-based token. For more information, see "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

{% endnote %}

| GitHub Apps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | OAuth App                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A GitHub App can request an installation access token by using a private key with a JSON web token format out-of-band.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | An OAuth app can exchange a request token for an access token after a redirect via a web request.                                                                                                                                                                                            |
| An installation token identifies the app as the GitHub Apps bot, such as @jenkins-bot.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | An access token identifies the app as the user who granted the token to the app, such as @octocat.                                                                                                                                                                                           |
| Installation tokens expire after a predefined amount of time (currently 1 hour).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | OAuth tokens remain active until they're revoked by the customer.                                                                                                                                                                                                                            |
| {% data reusables.apps.api-rate-limits-non-ghec %}{% if currentVersion == "free-pro-team@latest" %} Higher rate limits apply for {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Rate limits for GitHub Apps](/developers/apps/rate-limits-for-github-apps)."{% endif %}                                                                                                                                                                                                                                                                | OAuth tokens use the user's rate limit of 5,000 requests per hour.                                                                                                                                                                                                                           |
| Rate limit increases can be granted both at the GitHub Apps level (affecting all installations) and at the individual installation level.                                                                                                                                                                                                                                                                                                                                                                                                                              | Rate limit increases are granted per OAuth App. Every token granted to that OAuth App gets the increased limit. |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
| {% data variables.product.prodname_github_app %}s can authenticate on behalf of the user, which is called user-to-server requests. The flow to authorize is the same as the OAuth App authorization flow. User-to-server tokens can expire and be renewed with a refresh token. For more information, see "[Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)" and "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)." | The OAuth flow used by {% data variables.product.prodname_oauth_app %}s authorizes an {% data variables.product.prodname_oauth_app %} on behalf of the user. This is the same flow used in {% data variables.product.prodname_github_app %} user-to-server authorization. |{% endif %}

### Requesting permission levels for resources

Unlike OAuth apps, GitHub Apps have targeted permissions that allow them to request access only to what they need. For example, a Continuous Integration (CI) GitHub App can request read access to repository content and write access to the status API. Another GitHub App can have no read or write access to code but still have the ability to manage issues, labels, and milestones. OAuth Apps can't use granular permissions.

| アクセス                                                    | GitHub Apps (`read` or `write` permissions)               | OAuth App                                    |
| ------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------- |
| **For access to public repositories**                   | Public repository needs to be chosen during installation. | `public_repo` scope.                         |
| **For access to repository code/contents**              | リポジトリコンテンツ                                                | `repo` scope.                                |
| **For access to issues, labels, and milestones**        | 問題                                                        | `repo` scope.                                |
| **For access to pull requests, labels, and milestones** | プルリクエスト                                                   | `repo` scope.                                |
| **For access to commit statuses (for CI builds)**       | Commit statuses                                           | `repo:status` scope.                         |
| **For access to deployments and deployment statuses**   | デプロイメント                                                   | `repo_deployment` scope.                     |
| **To receive events via a webhook**                     | A GitHub App includes a webhook by default.               | `write:repo_hook` or `write:org_hook` scope. |

### Repository discovery

| GitHub Apps                                                                                           | OAuth App                                                                                                                       |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| GitHub Apps can look at `/installation/repositories` to see repositories the installation can access. | OAuth Apps can look at `/user/repos` for a user view or `/orgs/:org/repos` for an organization view of accessible repositories. |
| GitHub Apps receive webhooks when repositories are added or removed from the installation.            | OAuth Apps create organization webhooks for notifications when a new repository is created within an organization.              |

### webhook

| GitHub Apps                                                                                                                                     | OAuth App                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| By default, GitHub Apps have a single webhook that receives the events they are configured to receive for every repository they have access to. | OAuth Apps request the webhook scope to create a repository webhook for each repository they needs to receive events from.                                     |
| GitHub Apps receive certain organization-level events with the organization member's permission.                                                | OAuth Apps request the organization webhook scope to create an organization webhook for each organization they need to receive organization-level events from. |

### Git access

| GitHub Apps                                                                                                                                                                                                                    | OAuth App                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub Apps ask for repository contents permission and use your installation token to authenticate via [HTTP-based Git](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation). | OAuth Apps ask for `write:public_key` scope and [Create a deploy key](/rest/reference/repos#create-a-deploy-key) via the API. You can then use that key to perform Git commands. |
| The token is used as the HTTP password.                                                                                                                                                                                        | The token is used as the HTTP username.                                                                                                                                          |

### Machine vs. bot accounts

Machine user accounts are OAuth-based user accounts that segregate automated systems using GitHub's user system.

Bot accounts are specific to GitHub Apps and are built into every GitHub App.

| GitHub Apps                                                                                   | OAuth App                                                                                            |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| GitHub App bots do not consume a {% data variables.product.prodname_enterprise %} seat.       | A machine user account consumes a {% data variables.product.prodname_enterprise %} seat.             |
| Because a GitHub App bot is never granted a password, a customer can't sign into it directly. | A machine user account is granted a username and password to be managed and secured by the customer. |
