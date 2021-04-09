---
title: Managing deploy keys
intro: Learn different ways to manage SSH keys on your servers when you automate deployment scripts and which way is best for you.
redirect_from:
  - /guides/managing-deploy-keys/
  - /v3/guides/managing-deploy-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---


You can manage SSH keys on your servers when automating deployment scripts using SSH agent forwarding, HTTPS with OAuth tokens, deploy keys, or machine users.

### SSH agent forwarding

In many cases, especially in the beginning of a project, SSH agent forwarding is the quickest and simplest method to use. Agent forwarding uses the same SSH keys that your local development computer uses.

##### Pros

* You do not have to generate or keep track of any new keys.
* There is no key management; users have the same permissions on the server that they do locally.
* No keys are stored on the server, so in case the server is compromised, you don't need to hunt down and remove the compromised keys.

##### Cons

* Users **must** SSH in to deploy; automated deploy processes can't be used.
* SSH agent forwarding can be troublesome to run for Windows users.

##### Setup

1. Turn on agent forwarding locally. See [our guide on SSH agent forwarding][ssh-agent-forwarding] for more information.
2. Set your deploy scripts to use agent forwarding. For example, on a bash script, enabling agent forwarding would look something like this: `ssh -A serverA 'bash -s' < deploy.sh`

### HTTPS cloning with OAuth tokens

If you don't want to use SSH keys, you can use [HTTPS with OAuth tokens][git-automation].

##### Pros

* Anyone with access to the server can deploy the repository.
* Users don't have to change their local SSH settings.
* Multiple tokens (one for each user) are not needed; one token per server is enough.
* A token can be revoked at any time, turning it essentially into a one-use password.
{% if enterpriseServerVersions contains currentVersion %}
* Generating new tokens can be easily scripted using [the OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization).
{% endif %}

##### Cons

* You must make sure that you configure your token with the correct access scopes.
* Tokens are essentially passwords, and must be protected the same way.

##### Setup

See [our guide on Git automation with tokens][git-automation].

### Deploy keys

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

##### Pros

* Anyone with access to the repository and server has the ability to deploy the project.
* Users don't have to change their local SSH settings.
* Deploy keys are read-only by default, but you can give them write access when adding them to a repository.

##### Cons

* Deploy keys only grant access to a single repository. More complex projects may have many repositories to pull to the same server.
* Deploy keys are usually not protected by a passphrase, making the key easily accessible if the server is compromised.

##### Setup

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server, and remember where you save the generated public/private rsa key pair.
2. In the upper-right corner of any {% data variables.product.product_name %} page, click your profile photo, then click **Your profile**. ![Navigation to profile](/assets/images/profile-page.png)
3. On your profile page, click **Repositories**, then click the name of your repository. ![Repositories link](/assets/images/repos.png)
4. From your repository, click **Settings**. ![Repository settings](/assets/images/repo-settings.png)
5. In the sidebar, click **Deploy Keys**, then click **Add deploy key**. ![Add Deploy Keys link](/assets/images/add-deploy-key.png)
6. Provide a title, paste in your public key.  ![Deploy Key page](/assets/images/deploy-key.png)
7. Select **Allow write access** if you want this key to have write access to the repository. A deploy key with write access lets a deployment push to the repository.
8. Click **Add key**.

##### Using multiple repositories on one server

If you use multiple repositories on one server, you will need to generate a dedicated key pair for each one. You can't reuse a deploy key for multiple repositories.

In the server's SSH configuration file (usually `~/.ssh/config`), add an alias entry for each repository. 예시:

```bash
Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - The repository's alias.
* `Hostname {% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}` - Configures the hostname to use with the alias.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - Assigns a private key to the alias.

You can then use the hostname's alias to interact with the repository using SSH, which will use the unique deploy key assigned to that alias. 예시:

```bash
$ git clone git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

### Server-to-server tokens

If your server needs to access repositories across one or more organizations, you can use a GitHub App to define the access you need, and then generate _tightly-scoped_, _server-to-server_ tokens from that GitHub App. The server-to-server tokens can be scoped to single or multiple repositories, and can have fine-grained permissions. For example, you can generate a token with read-only access to a repository's contents.

Since GitHub Apps are a first class actor on  {% data variables.product.product_name %}, the server-to-server tokens are decoupled from any GitHub user, which makes them comparable to "service tokens". Additionally, server-to-server tokens have dedicated rate limits that scale with the size of the organizations that they act upon. For more information, see [Rate limits for Github Apps](/developers/apps/rate-limits-for-github-apps).

##### Pros

- Tightly-scoped tokens with well-defined permission sets and expiration times (1 hour, or less if revoked manually using the API).
- Dedicated rate limits that grow with your organization.
- Decoupled from GitHub user identities, so they do not consume any licensed seats.
- Never granted a password, so cannot be directly signed in to.

##### Cons

- Additional setup is needed to create the GitHub App.
- Server-to-server tokens expire after 1 hour, and so need to be re-generated, typically on-demand using code.

##### Setup

1. Determine if your GitHub App should be public or private. If your GitHub App will only act on repositories within your organization, you likely want it private.
1. Determine the permissions your GitHub App requires, such as read-only access to repository contents.
1. Create your GitHub App via your organization's settings page. For more information, see [Creating a GitHub App](/developers/apps/creating-a-github-app).
1. Note your GitHub App `id`.
1. Generate and download your GitHub App's private key, and store this safely. For more information, see [Generating a private key](/developers/apps/authenticating-with-github-apps#generating-a-private-key).
1. Install your GitHub App on the repositories it needs to act upon, optionally you may install the GitHub App on all repositories in your organization.
1. Identify the `installation_id` that represents the connection between your GitHub App and the organization repositories it can access.  Each GitHub App and organization pair have at most a single `installation_id`. You can identify this `installation_id` via [Get an organization installation for the authenticated app](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app).
1. Generate a server-to-server token using the corresponding REST API endpoint, [Create an installation access token for an app](/rest/reference/apps#create-an-installation-access-token-for-an-app). This requires authenticating as a GitHub App using a JWT, for more information see [Authenticating as a GitHub App](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app), and [Authenticating as an installation](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation).
1. Use this server-to-server token to interact with your repositories, either via the REST or GraphQL APIs, or via a Git client.

### Machine users

If your server needs to access multiple repositories, you can create a new {% data variables.product.product_name %} account and attach an SSH key that will be used exclusively for automation. Since this {% data variables.product.product_name %} account won't be used by a human, it's called a _machine user_. You can add the machine user as a [collaborator][collaborator] on a personal repository (granting read and write access), as an [outside collaborator][outside-collaborator] on an organization repository (granting read, write, or admin access), or to a [team][team] with access to the repositories it needs to automate (granting the permissions of the team).

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tip:** Our [terms of service][tos] state:

> *Accounts registered by "bots" or other automated methods are not permitted.*

This means that you cannot automate the creation of accounts. But if you want to create a single machine user for automating tasks such as deploy scripts in your project or organization, that is totally cool.

{% endtip %}

{% endif %}

##### Pros

* Anyone with access to the repository and server has the ability to deploy the project.
* No (human) users need to change their local SSH settings.
* Multiple keys are not needed; one per server is adequate.

##### Cons

* Only organizations can restrict machine users to read-only access. Personal repositories always grant collaborators read/write access.
* Machine user keys, like deploy keys, are usually not protected by a passphrase.

##### Setup

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server and attach the public key to the machine user account.
2. Give the machine user account access to the repositories you want to automate. You can do this by adding the account as a [collaborator][collaborator], as an [outside collaborator][outside-collaborator], or to a [team][team] in an organization.

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /articles/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team
