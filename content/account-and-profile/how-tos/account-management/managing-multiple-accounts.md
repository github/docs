---
title: Managing multiple accounts
intro: If you use one workstation to contribute to projects for more than one account, you can modify your Git configuration to simplify the contribution process.
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Manage multiple accounts
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts
contentType: how-tos
---

## Contributing to multiple accounts using HTTPS and {% data variables.product.pat_generic %}s

Alternatively, if you want to use the HTTPS protocol for both accounts, you can use different {% data variables.product.pat_generic %}s for each account by configuring Git to store different credentials for each repository.

{% mac %}

{% data reusables.git.open-terminal %}
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   * If the output is `osxkeychain`, you're using the macOS keychain. To clear the credentials, you can use the credential helper on the command line:

     ```shell
     $ git credential-osxkeychain erase
     host={% data variables.product.product_url %}
     protocol=https
     > [Press Return]
     >
     ```

   {% data reusables.git.clear-stored-gcm-credentials %}

     ```shell copy
     echo "protocol=https\nhost=github.com" | git credential-manager erase
     ```
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. Open Git Bash.
{% data reusables.git.confirm-credential-manager %}
{% data reusables.git.clear-the-stored-credentials %}
   {% data reusables.git.no-credential-manager %}
   {% data reusables.git.clear-stored-gcm-credentials %}

    ```shell copy
    echo "protocol=https`nhost=github.com" | git credential-manager erase
    ```

   * If the output is `wincred`, you're using the Windows Credential Manager. To clear the credentials, enter the following command.

     ```shell copy
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

    ```shell copy
    echo "protocol=https\nhost=github.com" | git credential-manager erase
    ```
{% data reusables.git.cache-on-repository-path %}
{% data reusables.accounts.create-personal-access-tokens %}
{% data reusables.git.provide-credentials %}

{% endlinux %}

## Contributing to multiple accounts using SSH and `GIT_SSH_COMMAND`

If you want to use the SSH protocol for both accounts, you can use different SSH keys for each account. For more information about using SSH, see [AUTOTITLE](/authentication/connecting-to-github-with-ssh).

To use a different SSH key for different repositories that you clone to your workstation, you must write a shell wrapper function for Git operations. The function should perform the following steps.
1. Determine the repository's full name with owner, using a command such as `git config --get remote.origin.url`.
1. Choose the correct SSH key for authentication.
1. Modify `GIT_SSH_COMMAND` accordingly. For more information about `GIT_SSH_COMMAND`, see [Environment Variables](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) in the Git documentation.

For example, the following command sets the `GIT_SSH_COMMAND` environment variable to specify an SSH command that uses the private key file at **_PATH/TO/KEY/FILE_** for authentication to clone the repository named OWNER/REPOSITORY on {% data variables.location.product_location %}.

```shell copy
GIT_SSH_COMMAND='ssh -i PATH/TO/KEY/FILE -o IdentitiesOnly=yes' git clone git@github.com:OWNER/REPOSITORY
```

## Next steps

For reference information, see [AUTOTITLE](/account-and-profile/reference/personal-account-reference).
