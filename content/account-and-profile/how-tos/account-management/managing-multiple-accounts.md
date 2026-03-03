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

## Contributing to multiple accounts using SSH and multiple keys

If you are a member of an {% data variables.enterprise.prodname_emu_enterprise %}, but also want to collaborate outside your enterprise using a personal account, you can use different SSH keys for each account. For more information about using SSH, see [AUTOTITLE](/authentication/connecting-to-github-with-ssh).
> [!WARNING]
> You cannot use the same SSH key to contribute to both repositories inside your {% data variables.enterprise.prodname_emu_org %} and outside the enterprise. 

1. Generate a different SSH key for the repositories in your {% data variables.enterprise.prodname_emu_org %}. See [AUTOTITLE](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key). When you save the key, give it a different filename from your existing key (for instance, add -emu to the suggested name of the file).

1. Add the new ssh key to your {% data variables.enterprise.prodname_managed_user %}. See [AUTOTITLE](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account)

1. Configure your SSH Config File `~/.ssh/config` to use the different keys. For example, if your personal SSH key is `~/.ssh/id_ed25519` and your {% data variables.enterprise.prodname_emu_enterprise %} SSH key is `~/.ssh/id_ed25519-emu`

   ```text copy
   Host github.com
	   IdentityFile ~/.ssh/id_ed25519
       IdentitiesOnly yes

   Host github-emu.com
	   Hostname github.com
	   IdentityFile ~/.ssh/id_ed25519-emu
       IdentitiesOnly yes
   ```

   > [!NOTE]
   > The `IdentitiesOnly` line ensures that if the ssh-agent has loaded multiple keys, ssh uses the correct key when connecting.

1. Test your SSH configuration by running the following command to connect using the SSH key associated with your personal account - see [AUTOTITLE](/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection) for further details

   ```shell copy
   ssh -T git@github.com
   ```

   Test to see if you can connect to ({% data variables.product.github %}) using your {% data variables.enterprise.prodname_emu_enterprise %} SSH key

   ```shell copy
   ssh -T git@github-emu.com
   ```

1. Tell `git` to use the correct key when downloading or uploading a repository in an {% data variables.enterprise.prodname_emu_org %}. 
   To list the organizations in your {% data variables.enterprise.prodname_emu_enterprise %},
   {% data reusables.profile.access_org %}
   1. For each organization listed tell `git` to use the `github-emu.com` host.

   For example, if one of your organizations is called `octocat-emu` then to tell `git` to use the host `github-emu.com` for repositories in the `octocat-emu` organization, run the following command

   ```shell copy
   git config --global url."git@github-emu.com:octocat-emu/".insteadOf "git@github.com:octocat-emu/"
   ```

Now, when you clone a repository using SSH, in the `octocat-emu` organization, `git` will use the SSH key associated with your {% data variables.enterprise.prodname_emu_enterprise %} instead of your personal key.

## Next steps

For reference information, see [AUTOTITLE](/account-and-profile/reference/personal-account-reference).
