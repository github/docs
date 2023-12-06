---
title: Scopes for OAuth apps
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
  - /developers/apps/building-oauth-apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth apps
---

{% note %}

**Note**: Consider building a {% data variables.product.prodname_github_app %} instead of an {% data variables.product.prodname_oauth_app %}. {% data variables.product.prodname_github_apps %} use fine-grained permissions instead of scopes, which give you more control over what your app can do. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

{% endnote %}

When setting up an {% data variables.product.prodname_oauth_app %} on GitHub, requested scopes are displayed to the user on the authorization form.

{% note %}

**Note:** If you're building a GitHub App, you don’t need to provide scopes in your authorization request. For more on this, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/identifying-and-authorizing-users-for-github-apps)."

{% endnote %}

If your {% data variables.product.prodname_oauth_app %} doesn't have access to a browser, such as a CLI tool, then you don't need to specify a scope for users to authenticate to your app. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow)."

Check headers to see what OAuth scopes you have, and what the API action accepts:

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

- `X-OAuth-Scopes` lists the scopes your token has authorized.
- `X-Accepted-OAuth-Scopes` lists the scopes that the action checks for.

## Available scopes

Name | Description
-----|-----------|{% ifversion not ghae %}
**`(no scope)`** | Grants read-only access to public information (including user profile info, repository info, and gists){% endif %}{% ifversion ghes or ghae %}
**`site_admin`** | Grants site administrators access to [{% data variables.product.prodname_ghe_server %} Administration API endpoints](/rest/enterprise-admin).{% endif %}
**`repo`** | Grants full access to public{% ifversion ghec or ghes or ghae %}, internal,{% endif %} and private repositories including read and write access to code, commit statuses, repository invitations, collaborators, deployment statuses, and repository webhooks. **Note**: In addition to repository related resources, the `repo` scope also grants access to manage organization-owned resources including projects, invitations, team memberships and webhooks. This scope also grants the ability to manage projects owned by users.
&emsp;`repo:status`| Grants read/write access to commit statuses in {% ifversion fpt %}public and private{% elsif ghec or ghes %}public, private, and internal{% elsif ghae %}private and internal{% endif %} repositories. This scope is only necessary to grant other users or services access to private repository commit statuses _without_ granting access to the code.
&emsp;`repo_deployment`| Grants access to [deployment statuses](/rest/repos#deployments) for {% ifversion not ghae %}public{% else %}internal{% endif %} and private repositories. This scope is only necessary to grant other users or services access to deployment statuses, _without_ granting access to the code.{% ifversion not ghae %}
&emsp;`public_repo`| Limits access to public repositories. That includes read/write access to code, commit statuses, repository projects, collaborators, and deployment statuses for public repositories and organizations. Also required for starring public repositories.{% endif %}
&emsp;`repo:invite` | Grants accept/decline abilities for invitations to collaborate on a repository. This scope is only necessary to grant other users or services access to invites _without_ granting access to the code.{% ifversion fpt or ghes or ghec %}
&emsp;`security_events` | Grants: <br/> read and write access to security events in the [{% data variables.product.prodname_code_scanning %} API](/rest/code-scanning) {%- ifversion ghec %}<br/> read and write access to security events in the [{% data variables.product.prodname_secret_scanning %} API](/rest/secret-scanning){%- endif %} <br/> This scope is only necessary to grant other users or services access to security events _without_ granting access to the code.{% endif %}
**`admin:repo_hook`** | Grants read, write, ping, and delete access to repository hooks in {% ifversion fpt %}public or private{% elsif ghec or ghes %}public, private, or internal{% elsif ghae %}private or internal{% endif %} repositories. The `repo` {% ifversion fpt or ghec or ghes %}and `public_repo` scopes grant{% else %}scope grants{% endif %} full access to repositories, including repository hooks. Use the `admin:repo_hook` scope to limit access to only repository hooks.
&emsp;`write:repo_hook` | Grants read, write, and ping access to hooks in {% ifversion fpt %}public or private{% elsif ghec or ghes %}public, private, or internal{% elsif ghae %}private or internal{% endif %} repositories.
&emsp;`read:repo_hook`| Grants read and ping access to hooks in {% ifversion fpt %}public or private{% elsif ghec or ghes %}public, private, or internal{% elsif ghae %}private or internal{% endif %} repositories.
**`admin:org`** | Fully manage the organization and its teams, projects, and memberships.
&emsp;`write:org`| Read and write access to organization membership, organization projects, and team membership.
&emsp;`read:org`| Read-only access to organization membership, organization projects, and team membership.
**`admin:public_key`** | Fully manage public keys.
&emsp;`write:public_key`| Create, list, and view details for public keys.
&emsp;`read:public_key`| List and view details for public keys.
**`admin:org_hook`** | Grants read, write, ping, and delete access to organization hooks. **Note:** OAuth tokens will only be able to perform these actions on organization hooks which were created by the {% data variables.product.prodname_oauth_app %}. {% data variables.product.pat_generic_caps %}s will only be able to perform these actions on organization hooks created by a user.
**`gist`** | Grants write access to gists.
**`notifications`** | Grants: <br/>read access to a user's notifications<br/> mark as read access to threads <br/>watch and unwatch access to a repository, and<br/> read, write, and delete access to thread subscriptions.
**`user`** | Grants read/write access to profile info only.  Note that this scope includes `user:email` and `user:follow`.
&emsp;`read:user`| Grants access to read a user's profile data.
&emsp;`user:email`| Grants read access to a user's email addresses.
&emsp;`user:follow`| Grants access to follow or unfollow other users.{% ifversion projects-oauth-scope %}
**`project`** | Grants read/write access to user and organization {% data variables.projects.projects_v2 %}.
&emsp;`read:project`| Grants read only access to user and organization {% data variables.projects.projects_v2 %}.{% endif %}
**`delete_repo`** | Grants access to delete adminable repositories.{% ifversion team-discussions %}
**`write:discussion`** | Allows read and write access for team discussions.
&emsp;`read:discussion` | Allows read access for team discussions.{% endif %}
**`write:packages`** | Grants access to upload or publish a package in {% data variables.product.prodname_registry %}. For more information, see "[AUTOTITLE](/packages/learn-github-packages/publishing-a-package)".
**`read:packages`** | Grants access to download or install packages from {% data variables.product.prodname_registry %}. For more information, see "[AUTOTITLE](/packages/learn-github-packages/installing-a-package)".
**`delete:packages`** | Grants access to delete packages from {% data variables.product.prodname_registry %}. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)."
**`admin:gpg_key`** | Fully manage GPG keys.
&emsp;`write:gpg_key`| Create, list, and view details for GPG keys.
&emsp;`read:gpg_key`| List and view details for GPG keys.{% ifversion fpt or ghec %}
**`codespace`** | Grants the ability to create and manage codespaces. Codespaces can expose a GITHUB_TOKEN which may have a different set of scopes. For more information, see "[AUTOTITLE](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)."{% endif %}
**`workflow`** | Grants the ability to add and update {% data variables.product.prodname_actions %} workflow files. Workflow files can be committed without this scope if the same file (with both the same path and contents) exists on another branch in the same repository. Workflow files can expose `GITHUB_TOKEN` which may have a different set of scopes. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)."{% ifversion not fpt %}
**`admin:enterprise`** | Gives full control of enterprise functionality. For more information, see "[AUTOTITLE](/graphql/guides/managing-enterprise-accounts)" in the GraphQL API documentation.<br><br>Includes `manage_runners:enterprise`{% ifversion ghec or ghes %}, `manage_billing:enterprise`,{% endif %} and `read:enterprise`.
&emsp;`manage_runners:enterprise` | Gives full control over self-hosted runners within the enterprise. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)." {% ifversion ghec or ghes %}
&emsp;`manage_billing:enterprise` | Read and write enterprise billing data. For more information, see "[AUTOTITLE](/rest/billing)" in the REST API documentation. {% endif %}
&emsp;`read:enterprise` | Read all data on an enterprise profile. Does not include profile data of enterprise members or organizations.{% endif %}{% ifversion read-audit-scope %}
**`read:audit_log`** | Read audit log data.{% endif %}
{% note %}

**Note:** Your {% data variables.product.prodname_oauth_app %} can request the scopes in the initial redirection. You
can specify multiple scopes by separating them with a space using `%20`:

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## Requested scopes and granted scopes

The `scope` attribute lists scopes attached to the token that were granted by
the user. Normally, these scopes will be identical to what you requested.
However, users can edit their scopes, effectively
granting your application less access than you originally requested. Also, users
can edit token scopes after the OAuth flow is completed.
You should be aware of this possibility and adjust your application's behavior
accordingly.

It's important to handle error cases where a user chooses to grant you
less access than you originally requested. For example, applications can warn
or otherwise communicate with their users that they will see reduced
functionality or be unable to perform some actions.

Also, applications can always send users back through the flow again to get
additional permission, but don’t forget that users can always say no.

Check out the [Basics of Authentication guide](/rest/guides/basics-of-authentication), which
provides tips on handling modifiable token scopes.

## Normalized scopes

When requesting multiple scopes, the token is saved with a normalized list
of scopes, discarding those that are implicitly included by another requested
scope. For example, requesting `user,gist,user:email` will result in a
token with `user` and `gist` scopes only since the access granted with
`user:email` scope is included in the `user` scope.
