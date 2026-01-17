---
title: Managing your personal access tokens
shortTitle: 'Manage {% data variables.product.pat_generic %}s'
intro: 'You can use a {% data variables.product.pat_generic %} in place of a password when authenticating to {% data variables.product.prodname_dotcom %} in the command line or with the API.'
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
  - /authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---

> [!WARNING]
> Treat your access tokens like passwords. For more information, see [Keeping your {% data variables.product.pat_generic %}s secure](#keeping-your-personal-access-tokens-secure).

## About {% data variables.product.pat_generic %}s

{% data variables.product.pat_generic_caps %}s are an alternative to using passwords for authentication to {% data variables.product.github %} when using the [{% data variables.product.github %} API](/rest/overview/authenticating-to-the-rest-api) or the [command line](#using-a-personal-access-token-on-the-command-line).

{% data variables.product.pat_generic_caps %}s are intended to access {% data variables.product.company_short %} resources on behalf of yourself. To access resources on behalf of an organization, or for long-lived integrations, you should use a {% data variables.product.prodname_github_app %}. For more information, see [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps).

{% data reusables.user-settings.token_access_capabilities %} For example, a {% data variables.product.pat_generic %} can be configured with an `admin:org` scope, but if the owner of the token is not an organization owner, the token will not give administrative access to the organization.

### Types of {% data variables.product.pat_generic %}s

{% data variables.product.company_short %} currently supports two types of {% data variables.product.pat_generic %}s: {% data variables.product.pat_v2 %}s and {% data variables.product.pat_v1_plural %}. {% data variables.product.company_short %} recommends that you use {% data variables.product.pat_v2 %}s instead of {% data variables.product.pat_v1_plural %} whenever possible.

> [!NOTE]
> {% data variables.product.pat_v2_caps %}s, while more secure and controllable, cannot accomplish every task that a {% data variables.product.pat_v1 %} can. See the section on [{% data variables.product.pat_v2_caps_plural %} limitations](#fine-grained-personal-access-tokens-limitations) below to learn more.

Both {% data variables.product.pat_v2 %}s and {% data variables.product.pat_v1_plural %} are tied to the user who generated them and will become inactive if the user loses access to the resource.

Organization owners can set a policy to restrict the access of {% data variables.product.pat_v1_plural %} to their organization{% ifversion ghec or ghes %}, and enterprise owners can restrict the access of {% data variables.product.pat_v1_plural %} to the enterprise or organizations owned by the enterprise{% endif %}. For more information, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization#restricting-access-by-personal-access-tokens).

#### {% data variables.product.pat_v2_caps %}s

{% data variables.product.pat_v2_caps_plural %} have several security advantages over {% data variables.product.pat_v1_plural %}, but also have limitations that may prevent you from using them in every scenario. These limits, and our plans to fix them, can be found in the [section below](#fine-grained-personal-access-tokens-limitations).

If you can use a {% data variables.product.pat_v2 %} for your scenario, you'll benefit from these improvements:

* Each token is limited to access resources owned by a single user or organization.
* Each token can be further limited to only access specific repositories for that user or organization.
* Each token is granted specific, fine-grained permissions, which offer more control than the scopes granted to {% data variables.product.pat_v1_plural %}.
* Organization owners can require approval for any {% data variables.product.pat_v2 %}s that can access resources in the organization.{% ifversion ghec or ghes %}
* Enterprise owners can require approval for any {% data variables.product.pat_v2 %}s that can access resources in organizations owned by the enterprise.{% endif %}

##### {% data variables.product.pat_v2_caps_plural %} limitations

{% data variables.product.pat_v2_caps_plural %} do not support every feature of {% data variables.product.pat_v1_plural %}. These feature gaps are not permanent - {% data variables.product.company_short %} is working to close them. You can review [our public roadmap](https://github.com/github/roadmap) for more details on when these scenarios will be supported.

The major gaps in {% data variables.product.pat_v2 %}s are:

* Using {% data variables.product.pat_v2 %} to contribute to public repos where the user is not a member.
* Using {% data variables.product.pat_v2 %} to contribute to repositories where the user is an outside or repository collaborator.
* Using {% data variables.product.pat_v2 %} to access multiple organizations at once.
{% ifversion ghes or ghec %}* Using {% data variables.product.pat_v2 %} to access `internal` resources within an enterprise the user belongs to.
* Using {% data variables.product.pat_v2 %} to call APIs that manage the Enterprise account.
{% endif %}* Using {% data variables.product.pat_v2 %} to access Packages.
* Using {% data variables.product.pat_v2 %} to call the Checks API.
* Using {% data variables.product.pat_v2 %} to access Projects owned by a user account.

All of these gaps will be solved over time, as {% data variables.product.company_short %} continues to invest in more secure access patterns.

#### {% data variables.product.pat_v1_caps_plural %}

{% data reusables.user-settings.patv2-limitations %}

If you choose to use a {% data variables.product.pat_v1 %}, keep in mind that it will grant access to all repositories within the organizations that you have access to, as well as all personal repositories in your personal account.

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}
{% endif %}

### Keeping your {% data variables.product.pat_generic %}s secure

{% data variables.product.pat_generic_caps %}s are like passwords, and they share the same inherent security risks. Before creating a new {% data variables.product.pat_generic %}, consider if there is a more secure method of authentication available to you:

* To access {% data variables.product.company_short %} from the command line, you can use [{% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli) or [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) instead of creating a {% data variables.product.pat_generic %}.
* When using a {% data variables.product.pat_generic %} in a {% data variables.product.prodname_actions %} workflow, consider whether you can use the built-in `GITHUB_TOKEN` instead. For more information, see [AUTOTITLE](/actions/security-guides/automatic-token-authentication).

If these options are not possible, and you must create a {% data variables.product.pat_generic %}, consider using another CLI service to store your token securely.

When using a {% data variables.product.pat_generic %} in a script, you can store your token as a secret and run your script through {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/security-guides/encrypted-secrets).{%- ifversion ghec or fpt %} You can also store your token as a {% data variables.product.prodname_codespaces %} secret and run your script in {% data variables.product.prodname_codespaces %}. For more information, see [AUTOTITLE](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

For more information about best practices, see [AUTOTITLE](/rest/overview/keeping-your-api-credentials-secure).

## Creating a {% data variables.product.pat_v2 %}

> [!NOTE]
> There is a limit of 50 {% data variables.product.pat_v2_plural %} you can create. If you require more tokens or are building automations, consider using a {% data variables.product.prodname_github_app %} for better scalability and management. For more information, see [AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/deciding-when-to-build-a-github-app#choosing-between-a-github-app-or-a-personal-access-token).

{% ifversion fpt or ghec %}1. [Verify your email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address), if it hasn't been verified yet.{% endif %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} {% data variables.product.pat_generic_caps %}s**, click **Fine-grained tokens**.
1. Click **Generate new token**.
1. Under **Token name**, enter a name for the token.
1. Under **Expiration**, select an expiration for the token. Infinite lifetimes are allowed but may be blocked by a maximum lifetime policy set by your organization or enterprise owner. For more information, See [Enforcing a maximum lifetime policy for {% data variables.product.pat_generic_plural %}](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization#enforcing-a-maximum-lifetime-policy-for-personal-access-tokens).
1. Optionally, under **Description**, add a note to describe the purpose of the token.
1. Under **Resource owner**, select a resource owner. The token will only be able to access resources owned by the selected resource owner. Organizations that you are a member of will not appear if the organization has blocked the use of {% data variables.product.pat_v2 %}s. For more information, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).{% ifversion ghec %} You may be required to perform single sign-on (SSO) if the selected organization requires it and you do not already have an active session.{% endif %}
1. Optionally, if the resource owner is an organization that requires approval for {% data variables.product.pat_v2 %}s, below the resource owner, in the box, enter a justification for the request.
1. Under **Repository access**, select which repositories you want the token to access. You should choose the minimal repository access that meets your needs. Tokens always include read-only access to all public repositories on {% data variables.product.prodname_dotcom %}.
1. If you selected **Only select repositories** in the previous step, under the **Selected repositories** dropdown, select the repositories that you want the token to access.
1. Under **Permissions**, select which permissions to grant the token. Depending on which resource owner and which repository access you specified, there are repository, organization, and account permissions. You should choose the minimal permissions necessary for your needs.

   The REST API reference document for each endpoint states whether the endpoint works with {% data variables.product.pat_v2 %}s and states what permissions are required in order for the token to use the endpoint. Some endpoints may require multiple permissions, and some endpoints may require one of multiple permissions. For an overview of which REST API endpoints a {% data variables.product.pat_v2 %} can access with each permission, see [AUTOTITLE](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens).

1. Click **Generate token**.

If you selected an organization as the resource owner and the organization requires approval for {% data variables.product.pat_v2 %}s, then your token will be marked as `pending` until it is reviewed by an organization administrator. Your token will only be able to read public resources until it is approved. If you are an owner of the organization, your request is automatically approved. For more information, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization).

### Pre-filling {% data variables.product.pat_v2 %} details using URL parameters

You can share templates for a {% data variables.product.pat_v2 %} via links. Storing token details this way makes it easier to automate workflows and improve your developer experience by directing users to token creation with relevant fields already completed.

Each supported field can be set using a specific query parameter. All parameters are optional and validated by the token generation form to ensure that the combinations of permissions and resource owner makes sense.

An example URL template is shown here, with line breaks for legibility:

```http copy
https://github.com/settings/personal-access-tokens/new
  ?name=Repo-reading+token
  &description=Just+contents:read
  &target_name=octodemo
  &expires_in=45
  &contents=read
```

Try the URL to create a token with `contents:read` and `metadata:read`, with the given name and description and an expiration date 45 days in the future. You'll see an error message indicating `Cannot find the specified resource owner: octodemo` because you're not a member of the `octodemo` organization.

Below are some example URLs that generate the tokens we see most often:

* [Read repo contents](https://github.com/settings/personal-access-tokens/new?name=Repo-reading+token&description=Just+contents:read&contents=read)
* [Push access to repos](https://github.com/settings/personal-access-tokens/new?name=Repo-writing+token&description=Just+contents:write&contents=write)
* [GitHub Models access](https://github.com/settings/personal-access-tokens/new?name=GitHub+Models+token&description=Used%20to%20call%20GitHub%20Models%20APIs%20to%20easily%20run%20LLMs%3A%20https%3A%2F%2Fdocs.github.com%2Fgithub-models%2Fquickstart%23step-2-make-an-api-call&user_models=read)<!-- markdownlint-disable-line search-replace Custom rule -->
* [Update code and open a PR](https://github.com/settings/personal-access-tokens/new?name=Core-loop+token&description=Write%20code%20and%20push%20it%20to%20main%21%20Includes%20permission%20to%20edit%20workflow%20files%20for%20Actions%20-%20remove%20%60workflows%3Awrite%60%20if%20you%20don%27t%20need%20to%20do%20that&contents=write&pull_requests=write&workflows=write)
* [Manage Copilot licenses in an organization](https://github.com/settings/personal-access-tokens/new?name=Core-loop+token&description=Enable%20or%20disable%20copilot%20access%20for%20users%20with%20the%20Seat%20Management%20APIs%3A%20https%3A%2F%2Fdocs.github.com%2Frest%2Fcopilot%2Fcopilot-user-management%0ABe%20sure%20to%20select%20an%20organization%20for%20your%20resource%20owner%20below%21&organization_copilot_seat_management=write)<!-- markdownlint-disable-line search-replace Custom rule -->
* [Make Copilot requests](https://github.com/settings/personal-access-tokens/new?name=Copilot+requests+token&description=Make%20Copilot%20API%20requests%20on%20behalf%20of%20the%20user%2C%20consuming%20premium%20requests%3A%20https%3A%2F%2Fdocs.github.com%2Fcopilot%2Fconcepts%2Fbilling%2Fcopilot-requests&copilot_requests=write)<!-- markdownlint-disable-line search-replace Custom rule -->

#### Supported Query Parameters

To create your own token template, follow the query parameter details provided in this table:

| Parameter      | Type   | Example Value    | Valid Values | Description           |
|----------------|--------|------------------|--------------|-----------------------|
| `name`        | string | `Deploy%20Bot`    | ≤ 40 characters, URL-encoded | Pre-fills the token’s display name. |
| `description` | string | `Used+for+deployments` |   ≤ 1024 chars, URL-encoded  | Pre-fills the description for the token. |
| `target_name` | string | `octodemo`  |   User or organization slug  | Sets the token's resource target. This is the owner of the repositories that the token will be able to access. If not provided, defaults to the current user's account. |
| `expires_in`  | integer| `30` or `none` | Integer between 1 and 366, or `none` | Days until expiration or `none` for non-expiring. If not provided, the default is 30 days, or less if the target has a token lifetime policy set. |
| `<permission>` | string | `contents=read` | A series of permission and access levels. | The permissions the token should have. Permissions can be set to `read`, `write`, or `admin`, but not every permission supports each of those levels. |

#### Permissions

Each supported permission is set using its name as a query parameter, with the value specifying the desired access level. Valid access levels are `read`, `write`, and `admin`. Some permissions only support `read`, some only support `write`, and only a few have `admin`. Use as many permissions as needed, in the form `&contents=read&pull_requests=write&...`.

You do not need to include both `read` and `write` for a permission in your URL—`write` always includes `read`, and `admin` always includes `write`.

##### Account Permissions

Account permissions are only used when the current user is set as the resource owner.

| Parameter name | Display name  | Access levels |
|---|---|---|
| `blocking` | Block another user | `read`, `write` |
| `codespaces_user_secrets` | Codespaces user secrets | `read`, `write` |
| `copilot_messages` | Copilot Chat | `read` |
| `copilot_editor_context` | Copilot Editor Context | `read` |
| `copilot_requests` | Copilot requests | `write` |
| `emails` | Email addresses | `read`, `write` |
| `user_events` | Events | `read` |
| `followers` | Followers | `read`, `write` |
| `gpg_keys` | GPG keys | `read`, `write` |
| `gists` | Gists | `write` |
| `keys` | Git SSH keys | `read`, `write` |
| `interaction_limits` | Interaction limits | `read`, `write` |
| `knowledge_bases` | Knowledge bases | `read`, `write` |
| `user_models` | Models | `read` |
| `plan` | Plan | `read` |
| `private_repository_invitations` | Private repository invitations | `read` |
| `profile` | Profile | `write` |
| `git_signing_ssh_public_keys` | SSH signing keys | `read`, `write` |
| `starring` | Starring | `read`, `write` |
| `watching` | Watching | `read`, `write` |

{% ifversion copilot %}

> [!NOTE]
> The `copilot_requests` permission enables making {% data variables.product.prodname_copilot_short %} requests for the given user, which count towards the user's premium request allowance or are charged to overage billing if the allowance is exceeded. For more information about {% data variables.product.prodname_copilot_short %} requests and billing, see [AUTOTITLE](/copilot/concepts/billing/copilot-requests).

{% endif %}
##### Repository Permissions

Repository permissions work for both user and organization resource owners.

| Parameter name | Display name  | Access levels |
|---|---|---|
| `actions` | Actions | `read`, `write` |
| `administration` | Administration | `read`, `write` |
| {% ifversion artifact-metadata %} |
| `artifact_metadata` | Artifact Metadata | `read`, `write` |
| {% endif %} |
| `attestations` | Attestations | `read`, `write` |
| `security_events` | Code scanning alerts | `read`, `write` |
| `codespaces` | Codespaces | `read`, `write` |
| `codespaces_lifecycle_admin` | Codespaces lifecycle admin | `read`, `write` |
| `codespaces_metadata` | Codespaces metadata | `read` |
| `codespaces_secrets` | Codespaces secrets | `write` |
| `statuses` | Commit statuses | `read`, `write` |
| `contents` | Contents | `read`, `write` |
| `repository_custom_properties` | Custom properties | `read`, `write` |
| `vulnerability_alerts` | Dependabot alerts | `read`, `write` |
| `dependabot_secrets` | Dependabot secrets | `read`, `write` |
| `deployments` | Deployments | `read`, `write` |
| `discussions` | Discussions | `read`, `write` |
| `environments` | Environments | `read`, `write` |
| `issues` | Issues | `read`, `write` |
| `merge_queues` | Merge queues | `read`, `write` |
| `metadata` | Metadata | `read` |
| `pages` | Pages | `read`, `write` |
| `pull_requests` | Pull requests | `read`, `write` |
| `repository_advisories` | Repository security advisories | `read`, `write` |
| `secret_scanning_alerts` | Secret scanning alerts | `read`, `write` |
| `secrets` | Secrets | `read`, `write` |
| `actions_variables` | Variables | `read`, `write` |
| `repository_hooks` | Webhooks | `read`, `write` |
| `workflows` | Workflows | `write` |

##### Organization Permissions

Organization permissions can only be used if the resource owner is an organization.

| Parameter name | Display name  | Access levels |
|---|---|---|
| `organization_api_insights` | API Insights | `read` |
| `organization_administration` | Administration | `read`, `write` |
| `organization_user_blocking` | Blocking users | `read`, `write` |
| `organization_campaigns` | Campaigns | `read`, `write` |
| `organization_custom_org_roles` | Custom organization roles | `read`, `write` |
| `organization_custom_properties` | Custom repository properties | `read`, `write`, `admin` |
| `organization_custom_roles` | Custom repository roles | `read`, `write` |
| `organization_events` | Events | `read` |
| `organization_copilot_seat_management` | GitHub Copilot Business | `read`, `write` |
| `issue_types` | Issue Types | `read`, `write` |
| `organization_knowledge_bases` | Knowledge bases | `read`, `write` |
| `members` | Members | `read`, `write` |
| `organization_models` | Models | `read` |
| `organization_network_configurations` | Network configurations | `read`, `write` |
| `organization_announcement_banners` | Organization announcement banners | `read`, `write` |
| `organization_codespaces` | Organization codespaces | `read`, `write` |
| `organization_codespaces_secrets` | Organization codespaces secrets | `read`, `write` |
| `organization_codespaces_settings` | Organization codespaces settings | `read`, `write` |
| `organization_dependabot_secrets` | Organization dependabot secrets | `read`, `write` |
| `organization_code_scanning_dismissal_requests` | Code scanning dismissal requests | `read`, `write` |
| `organization_private_registries` | Private registries | `read`, `write` |
| `organization_plan` | Plan | `read` |
| `organization_projects` | Projects | `read`, `write`, `admin` |
| `organization_secrets` | Secrets | `read`, `write` |
| `organization_self_hosted_runners` | Self-hosted runners | `read`, `write` |
| `team_discussions` | Team discussions | `read`, `write` |
| `organization_actions_variables` | Variables | `read`, `write` |
| `organization_hooks` | Webhooks | `read`, `write` |

## Creating a {% data variables.product.pat_v1 %}

> [!NOTE]
> Organization owners can restrict the access of {% data variables.product.pat_v1 %} to their organization. If you try to use a {% data variables.product.pat_v1 %} to access resources in an organization that has disabled {% data variables.product.pat_v1 %} access, your request will fail with a 403 response. Instead, you must use a {% data variables.product.prodname_github_app %}, {% data variables.product.prodname_oauth_app %}, or {% data variables.product.pat_v2 %}.

> [!WARNING]
> Your {% data variables.product.pat_v1 %} can access every repository that you can access. {% data variables.product.company_short %} recommends that you use {% data variables.product.pat_v2 %}s instead, which you can restrict to specific repositories. {% data variables.product.pat_v2_caps %}s also enable you to specify fine-grained permissions instead of broad scopes.

{% ifversion fpt or ghec %}1. [Verify your email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address), if it hasn't been verified yet.{% endif %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} {% data variables.product.pat_generic_caps %}s**, click **Tokens (classic)**.
1. Select **Generate new token**, then click **Generate new token (classic)**.
1. In the "Note" field, give your token a descriptive name.
1. To give your token an expiration, select **Expiration**, then choose a default option or click **Custom** to enter a date.
1. Select the scopes you'd like to grant this token. To use your token to access repositories from the command line, select **repo**. A token with no assigned scopes can only access public information. For more information, see [AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).
1. Click **Generate token**.
1. Optionally, to copy the new token to your clipboard, click {% octicon "copy" aria-label="Copy token" %}.

   {% ifversion ghes %}![Screenshot of the "{% data variables.product.pat_generic_caps_plural %}" page. Next to a blurred-out token, an icon of two overlapping squares is outlined in orange.](/assets/images/help/settings/personal-access-tokens-ghes.png){% else %}![Screenshot of the "{% data variables.product.pat_generic_caps_plural %}" page. Next to a blurred-out token, an icon of two overlapping squares is outlined in orange.](/assets/images/help/settings/personal-access-tokens.png){% endif %}{% ifversion fpt or ghec %}
1. To use your token to access resources owned by an organization that uses SAML single sign-on, authorize the token. For more information, see [AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}{% endif %}

## Deleting a {% data variables.product.pat_generic %}

You should delete a {% data variables.product.pat_generic %} if it is no longer needed. If you delete a {% data variables.product.pat_generic %} that was used to create a deploy key, the deploy key will also be deleted.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
1. In the left sidebar, under **{% octicon "key" aria-hidden="true" aria-label="key" %} {% data variables.product.pat_generic_caps %}s**, click either **Fine-grained tokens** or **Tokens (classic)**, depending on which type of {% data variables.product.pat_generic %} you'd like to delete.
1. To the right of the {% data variables.product.pat_generic %} you want to delete, click **Delete**.

{% ifversion ghec or fpt %}> [!NOTE] If you find a leaked {% data variables.product.pat_generic %} belonging to someone else, you can submit a revocation request through the REST API. See [AUTOTITLE](/code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization#mitigate-data-leaks).
{% endif %}

## Using a {% data variables.product.pat_generic %} on the command line

Once you have a {% data variables.product.pat_generic %}, you can enter it instead of your password when performing Git operations over HTTPS.

For example, to clone a repository on the command line you would enter the following `git clone` command. You would then be prompted to enter your username and password. When prompted for your password, enter your {% data variables.product.pat_generic %} instead of a password.

```shell
$ git clone https://{% data variables.product.product_url %}/USERNAME/REPO.git
Username: YOUR-USERNAME
Password: YOUR-PERSONAL-ACCESS-TOKEN
```

Although you are required to enter your username along with your {% data variables.product.pat_generic %}, the username is not used to authenticate you. Instead, the {% data variables.product.pat_generic %} is used to authenticate you. If you do not enter a username, you will receive an error message that your credentials are invalid.

{% data variables.product.pat_generic_caps %}s can only be used for HTTPS Git operations. If your repository uses an SSH remote URL, you will need to [switch the remote from SSH to HTTPS](/get-started/git-basics/managing-remote-repositories#switching-remote-urls-from-ssh-to-https).

If you are not prompted for your username and password, your credentials may be cached on your computer. You can [update your credentials in the Keychain](/get-started/git-basics/updating-credentials-from-the-macos-keychain) to replace your old password with the token.

Instead of manually entering your {% data variables.product.pat_generic %} for every HTTPS Git operation, you can cache your {% data variables.product.pat_generic %} with a Git client. Git will temporarily store your credentials in memory until an expiry interval has passed. You can also store the token in a plain text file that Git can read before every request. For more information, see [AUTOTITLE](/get-started/git-basics/caching-your-github-credentials-in-git).

## Further reading

* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
* [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)
