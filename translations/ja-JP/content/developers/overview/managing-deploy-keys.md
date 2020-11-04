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

##### セットアップ

1. Turn on agent forwarding locally. See [our guide on SSH agent forwarding][ssh-agent-forwarding] for more information.
2. Set your deploy scripts to use agent forwarding. For example, on a bash script, enabling agent forwarding would look something like this: `ssh -A serverA 'bash -s' < deploy.sh`

### HTTPS cloning with OAuth tokens

If you don't want to use SSH keys, you can use [HTTPS with OAuth tokens][git-automation].

##### Pros

* Anyone with access to the server can deploy the repository.
* Users don't have to change their local SSH settings.
* Multiple tokens (one for each user) are not needed; one token per server is enough.
* A token can be revoked at any time, turning it essentially into a one-use password.
* Generating new tokens can be easily scripted using [the OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization).

##### Cons

* You must make sure that you configure your token with the correct access scopes.
* Tokens are essentially passwords, and must be protected the same way.

##### セットアップ

See [our guide on Git automation with tokens][git-automation].

### デプロイキー

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

##### Pros

* Anyone with access to the repository and server has the ability to deploy the project.
* Users don't have to change their local SSH settings.
* Deploy keys are read-only by default, but you can give them write access when adding them to a repository.

##### Cons

* Deploy keys only grant access to a single repository. More complex projects may have many repositories to pull to the same server.
* Deploy keys are usually not protected by a passphrase, making the key easily accessible if the server is compromised.

##### セットアップ

1. [Run the `ssh-keygen` procedure][generating-ssh-keys] on your server, and remember where you save the generated public/private rsa key pair.
2. In the upper-right corner of any {% data variables.product.product_name %} page, click your profile photo, then click **Your profile**. ![Navigation to profile](/assets/images/profile-page.png)
3. On your profile page, click **Repositories**, then click the name of your repository. ![Repositories link](/assets/images/repos.png)
4. From your repository, click **Settings**. ![Repository settings](/assets/images/repo-settings.png)
5. In the sidebar, click **Deploy Keys**, then click **Add deploy key**. ![Add Deploy Keys link](/assets/images/add-deploy-key.png)
6. Provide a title, paste in your public key.  ![Deploy Key page](/assets/images/deploy-key.png)
7. Select **Allow write access** if you want this key to have write access to the repository. A deploy key with write access lets a deployment push to the repository.
8. Click **Add key**.

### Machine users

If your server needs to access multiple repositories, you can create a new {% data variables.product.product_name %} account and attach an SSH key that will be used exclusively for automation. Since this {% data variables.product.product_name %} account won't be used by a human, it's called a _machine user_. You can add the machine user as a [collaborator][collaborator] on a personal repository (granting read and write access), as an [outside collaborator][outside-collaborator] on an organization repository (granting read, write, or admin access), or to a [team][team] with access to the repositories it needs to automate (granting the permissions of the team).

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tip:** Our [terms of service][tos] state:

> *「ボット」またはその他の自動化された手段で「アカウント」を登録することは許可されていません。*

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

##### セットアップ

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
