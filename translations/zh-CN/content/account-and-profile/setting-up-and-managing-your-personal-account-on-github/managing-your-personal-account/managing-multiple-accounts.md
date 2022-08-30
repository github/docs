---
title: Managing multiple accounts
intro: 'If you use one workstation to contribute to projects for more than one account on {% data variables.product.product_location %}, you can modify your Git configuration to simplify the contribution process.'
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Manage multiple accounts
---

## About management of multiple accounts

In some cases, you may need to use multiple accounts on {% data variables.product.product_location %}. For example, you may have a personal account for open source contributions, and your employer may also create and manage a user account for you within an enterprise.

You cannot use your {% data variables.product.prodname_managed_user %} to contribute to public projects on {% data variables.product.product_location %}, so you must contribute to those resources using your personal account. For more information, see "[About  {% data variables.product.prodname_emus %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}."{% endif %}

If you want to use one workstation to contribute from both accounts, you can simplify contribution with Git by using a mixture of protocols to access repository data, or by using credentials on a per-repository basis.

{% warning %}

**Warning**: Be mindful when you use one workstation to contribute to two separate accounts. Management of two or more accounts can increase the chance of mistakenly leaking internal code to the public.

{% endwarning %}

If you aren't required to use a {% data variables.product.prodname_managed_user %}, {% data variables.product.company_short %} recommends that you use one personal account for all your work on {% data variables.product.product_location %}. With a single personal account, you can contribute to a combination of personal, open source, or professional projects using one identity. Other people can invite the account to contribute to both individual repositories and repositories owned by an organization, and the account can be a member of multiple organizations or enterprises.

## Contributing to two accounts using HTTPS and SSH

If you contribute with two accounts from one workstation, you can access repositories by using a different protocol and credentials for each account.

Git can use either the HTTPS or SSH protocol to access and update data in repositories on {% data variables.product.product_location %}. The protocol you use to clone a repository determines which credentials your workstation will use to authenticate when you access the repository. With this approach to account management, you store the credentials for one account to use for HTTPS connections and upload an SSH key to the other account to use for SSH connections.

You can find both the HTTPS or an SSH URLs for cloning a repository on {% data variables.product.product_name %}. 更多信息请参阅“[克隆仓库](/repositories/creating-and-managing-repositories/cloning-a-repository)”。

For more information about the use of SSH to access repositories on {% data variables.product.product_name %}, see "[Connecting to {% data variables.product.prodname_dotcom %} with SSH](/authentication/connecting-to-github-with-ssh)."

## Contributing to multiple accounts using HTTPS and PATs

Alternatively, if you want to use the HTTPS protocol for both accounts, you can use different personal access tokens (PAT) for each account by configuring Git to store different credentials for each repository.

{% mac %}

{% data reusables.git.open-terminal %}
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   - If the output is `osxkeychain`, you're using the macOS keychain. To clear the credentials, enter the following command.

     ```shell{:copy}
     git credential-osxkeychain erase https://github.com
     ```
   {% data reusables.git.clear-stored-gcm-credentials %}
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. 打开 Git Bash。
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   {% data reusables.git.clear-stored-gcm-credentials %}
   - If the output is `wincred`, you're using the Windows Credential Manager. To clear the credentials, enter the following command.

     ```shell{:copy}
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endwindows %}

{% linux %}

{% data reusables.git.open-terminal %}
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   {% data reusables.git.clear-stored-gcm-credentials %}
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endlinux %}

## Contributing to multiple accounts using SSH and `GIT_SSH_COMMAND`

If you want to use the SSH protocol for both accounts, you can use different SSH keys for each account. For more information about using SSH, see "[Connecting to {% data variables.product.prodname_dotcom %} with SSH](/authentication/connecting-to-github-with-ssh)."

To use a different SSH key for different repositories that you clone to your workstation, you must write a shell wrapper function for Git operations. The function should perform the following steps.
1. Determine the repository's full name with owner, using a command such as `git config --get remote.origin.url`.
2. Choose the correct SSH key for authentication.
3. Modify `GIT_SSH_COMMAND` accordingly. For more information about `GIT_SSH_COMMAND`, see [Environment Variables](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) in the Git documentation.

For example, the following command sets the `GIT_SSH_COMMAND` environment variable to specify an SSH command that uses the private key file at **_PATH/TO/KEY/FILE_** for authentication to clone the repository named **_OWNER_**/**_REPOSITORY_** on {% data variables.product.product_location %}.

<pre>
GIT_SSH_COMMAND='ssh -i <em>PATH/TO/KEY/FILE</em> -o IdentitiesOnly=yes' git clone git@github.com:<em>OWNER</em>/<em>REPOSITORY</em>
</pre>
