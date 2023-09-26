---
title: Managing deploy keys
intro: Learn different ways to manage SSH keys on your servers when you automate deployment scripts and which way is best for you.
redirect_from:
  - /guides/managing-deploy-keys
  - /v3/guides/managing-deploy-keys
  - /deploy-keys
  - /articles/managing-deploy-keys
  - /multiple-keys
  - /developers/overview/managing-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---


You can manage SSH keys on your servers when automating deployment scripts using SSH agent forwarding, HTTPS with OAuth tokens, deploy keys, or machine users.

## SSH agent forwarding

In many cases, especially in the beginning of a project, SSH agent forwarding is the quickest and simplest method to use. Agent forwarding uses the same SSH keys that your local development computer uses.

### Pros of SSH agent forwarding

- You do not have to generate or keep track of any new keys.
- There is no key management; users have the same permissions on the server that they do locally.
- No keys are stored on the server, so in case the server is compromised, you don't need to hunt down and remove the compromised keys.

### Cons of SSH agent forwarding

- Users **must** SSH in to deploy; automated deploy processes can't be used.
- SSH agent forwarding can be troublesome to run for Windows users.

### Set up SSH agent forwarding

1. Turn on agent forwarding locally. See [our guide on SSH agent forwarding][ssh-agent-forwarding] for more information.
1. Set your deploy scripts to use agent forwarding. For example, on a bash script, enabling agent forwarding would look something like this:
`ssh -A serverA 'bash -s' < deploy.sh`

## HTTPS cloning with OAuth tokens

If you don't want to use SSH keys, you can use HTTPS with OAuth tokens.

### Pros of HTTPS cloning with OAuth tokens

- Anyone with access to the server can deploy the repository.
- Users don't have to change their local SSH settings.
- Multiple tokens (one for each user) are not needed; one token per server is enough.
- A token can be revoked at any time, turning it essentially into a one-use password.
{% ifversion ghes %}
- Generating new tokens can be easily scripted using [the OAuth API](/rest/oauth-authorizations#create-a-new-authorization).
{% endif %}

### Cons of HTTPS cloning with OAuth tokens

- You must make sure that you configure your token with the correct access scopes.
- Tokens are essentially passwords, and must be protected the same way.

### Set up HTTPS cloning with OAuth tokens

See [our guide on creating a {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

## Deploy keys

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

### Pros of deploy keys

- Anyone with access to the repository and server has the ability to deploy the project.
- Users don't have to change their local SSH settings.
- Deploy keys are read-only by default, but you can give them write access when adding them to a repository.

### Cons of deploy keys

- Deploy keys only grant access to a single repository. More complex projects may have many repositories to pull to the same server.
- Deploy keys are usually not protected by a passphrase, making the key easily accessible if the server is compromised.
- If the user who created the deploy key is removed from the repository, the deploy key will still be active as it isn't tied to the specific user, but rather to the repository.

### Set up deploy keys

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server, and remember where you save the generated public and private rsa key pair.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, click **Deploy Keys**.
1. Click **Add deploy key**.
1. In the "Title" field, provide a title.
1. In the "Key" field, paste your public key.
1. Select **Allow write access** if you want this key to have write access to the repository. A deploy key with write access lets a deployment push to the repository.
1. Click **Add key**.

### Using multiple repositories on one server

If you use multiple repositories on one server, you will need to generate a dedicated key pair for each one. You can't reuse a deploy key for multiple repositories.

In the server's SSH configuration file (usually `~/.ssh/config`), add an alias entry for each repository. For example:

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

- `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - The repository's alias.
- `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}` - Configures the hostname to use with the alias.
- `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - Assigns a private key to the alias.

You can then use the hostname's alias to interact with the repository using SSH, which will use the unique deploy key assigned to that alias. For example:

```bash
git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## {% data variables.product.prodname_github_app %} installation access tokens

If your server needs to access repositories across one or more organizations, you can use a {% data variables.product.prodname_github_app %} to define the access you need, and then generate _tightly-scoped_, installation access tokens from that {% data variables.product.prodname_github_app %}. The installation access tokens can be scoped to single or multiple repositories, and can have fine-grained permissions. For example, you can generate a token with read-only access to a repository's contents.

Since {% data variables.product.prodname_github_apps %} are a first class actor on  {% data variables.product.product_name %}, the installation access tokens are decoupled from any {% data variables.product.prodname_dotcom %} user, which makes them comparable to "service tokens". Additionally, installation access tokens have dedicated rate limits that scale with the size of the organizations that they act upon. For more information, see [Rate limits for {% data variables.product.prodname_github_apps %}](/apps/creating-github-apps/setting-up-a-github-app/rate-limits-for-github-apps).

### Pros of installation access tokens

- Tightly-scoped tokens with well-defined permission sets and expiration times (1 hour, or less if revoked manually using the API).
- Dedicated rate limits that grow with your organization.
- Decoupled from {% data variables.product.prodname_dotcom %} user identities, so they do not consume any licensed seats.
- Never granted a password, so cannot be directly signed in to.

### Cons of installation access tokens

- Additional setup is needed to create the {% data variables.product.prodname_github_app %}.
- Installation access tokens expire after 1 hour, and so need to be re-generated, typically on-demand using code.

### Set up installation access tokens

1. Determine if your {% data variables.product.prodname_github_app %} should be public or private. If your {% data variables.product.prodname_github_app %} will only act on repositories within your organization, you likely want it private.
1. Determine the permissions your {% data variables.product.prodname_github_app %} requires, such as read-only access to repository contents.
1. Create your {% data variables.product.prodname_github_app %} via your organization's settings page. For more information, see [Creating a {% data variables.product.prodname_github_app %}](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app).
1. Note your {% data variables.product.prodname_github_app %} `id`.
1. Generate and download your {% data variables.product.prodname_github_app %}'s private key, and store this safely. For more information, see [Generating a private key](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps).
1. Install your {% data variables.product.prodname_github_app %} on the repositories it needs to act upon, optionally you may install the {% data variables.product.prodname_github_app %} on all repositories in your organization.
1. Identify the `installation_id` that represents the connection between your {% data variables.product.prodname_github_app %} and the organization repositories it can access.  Each {% data variables.product.prodname_github_app %} and organization pair have at most a single `installation_id`. You can identify this `installation_id` via [Get an organization installation for the authenticated app](/rest/apps#get-an-organization-installation-for-the-authenticated-app). This requires authenticating as a {% data variables.product.prodname_github_app %} using a JWT, for more information see [Authenticating as a {% data variables.product.prodname_github_app %}](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app).
1. Generate an installation access token using the corresponding REST API endpoint, [Create an installation access token for an app](/rest/apps#create-an-installation-access-token-for-an-app). This requires authenticating as a {% data variables.product.prodname_github_app %} using a JWT, for more information see [Authenticating as a {% data variables.product.prodname_github_app %}](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app), and [Authenticating as an installation](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).
1. Use this installation access token to interact with your repositories, either via the REST or GraphQL APIs, or via a Git client.

For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app)."

## Machine users

If your server needs to access multiple repositories, you can create a new account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} and attach an SSH key that will be used exclusively for automation. Since this account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} won't be used by a human, it's called a _machine user_. You can add the machine user as a [collaborator][collaborator] on a personal repository (granting read and write access), as an [outside collaborator][outside-collaborator] on an organization repository (granting read, write, or admin access), or to a [team][team] with access to the repositories it needs to automate (granting the permissions of the team).

{% ifversion fpt or ghec %}

{% tip %}

**Tip:** Our [terms of service][tos] state:

> _Accounts registered by "bots" or other automated methods are not permitted._

This means that you cannot automate the creation of accounts. But if you want to create a single machine user for automating tasks such as deploy scripts in your project or organization, that is totally cool.

{% endtip %}

{% endif %}

### Pros of machine users

- Anyone with access to the repository and server has the ability to deploy the project.
- No (human) users need to change their local SSH settings.
- Multiple keys are not needed; one per server is adequate.

### Cons of machine users

- Only organizations can restrict machine users to read-only access. Personal repositories always grant collaborators read/write access.
- Machine user keys, like deploy keys, are usually not protected by a passphrase.

### Set up machine users

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server and attach the public key to the machine user account.
1. Give the machine user account access to the repositories you want to automate. You can do this by adding the account as a [collaborator][collaborator], as an [outside collaborator][outside-collaborator], or to a [team][team] in an organization.

[ssh-agent-forwarding]: /authentication/connecting-to-github-with-ssh/using-ssh-agent-forwarding
[generating-ssh-keys]: /authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/site-policy/github-terms/github-terms-of-service
[collaborator]: /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /organizations/organizing-members-into-teams/adding-organization-members-to-a-team

## Further reading

- [Configuring notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
