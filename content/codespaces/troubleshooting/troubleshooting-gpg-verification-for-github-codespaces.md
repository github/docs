---
title: Troubleshooting GPG verification for GitHub Codespaces
shortTitle: GPG verification
intro: This article provides troubleshooting advice for errors related to signing your commits in codespaces.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
---

If you enable GPG verification, {% data variables.product.prodname_github_codespaces %} automatically signs your commits in codespaces that you create from selected repositories. For more information, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."

{% data reusables.codespaces.gpg-in-active-codespaces %}

If {% data variables.product.prodname_github_codespaces %} fails to sign a commit, you may see an error like the following.

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

You may encounter this error if: 

- You have disabled GPG verification, and are trying to make a regular, unsigned commit in an existing codespace.
- You have enabled GPG verification, but have overridden the Git configuration required for {% data variables.product.prodname_github_codespaces %} to sign your commits, for example by linking {% data variables.product.prodname_github_codespaces %} with a dotfiles repository that contains Git configuration files.

## Errors after disabling GPG verification

When you enable GPG verification, {% data variables.product.prodname_github_codespaces %} signs all the commits you make in codespaces by default. It does this by setting the `commit.gpgsign` Git configuration value to `true`.

If you have disabled GPG verification, and are working in an existing codespace, then this value will still be set to `true`. This means that {% data variables.product.prodname_github_codespaces %} will try to sign your commits, but will be unable to do so, because you have disabled the GPG verification setting.

To keep making regular, unsigned commits in your codespace, reset `commit.gpgsign` to the default value of `false` by entering the following command in the terminal.

```Shell{:copy}
git config --unset commit.gpgsign
```

To check that the value has been correctly removed from your configuration, you can enter `git config --list`. You should not see a value for `commit.gpgsign` in the list.

## Errors caused by conflicting configuration

To automatically sign your commits, {% data variables.product.prodname_github_codespaces %} sets certain Git configuration values in your codespace. If you override the values set by {% data variables.product.prodname_github_codespaces %}, you may be unable to sign your commits. 

You may be inadvertently overriding these values if you have linked {% data variables.product.prodname_github_codespaces %} with a dotfiles repository that contains Git configuration files. For more information about using dotfiles with {% data variables.product.prodname_github_codespaces %}, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)."

### Checking for conflicting configuration

To sign your commits with GPG, {% data variables.product.prodname_github_codespaces %} automatically sets the following Git configuration values at the system level.

| Configuration setting | Required value |
| --------------------- | -------------- |
| `user.name` | Must match the full name set on your {% data variables.product.prodname_dotcom %} profile |
| `credential.helper` | Must be set to `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | Must be set to `/.codespaces/bin/gh-gpgsign` |

To check that these values are set correctly in a codespace, you can use the `git config --list --show-origin` command. Because {% data variables.product.prodname_github_codespaces %} sets this configuration at the system level, the required configuration settings should come from `/usr/local/etc/gitconfig`.

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

In addition to the values listed above, you may run into errors if the dotfiles used in your codespaces contain any of the following values.

- The `user.signingkey` Git config value
- The `commit.gpgsign` Git config value
- A manually set `GITHUB_TOKEN`

### Removing conflicting configuration

If you want to keep automatic GPG verification for {% data variables.product.prodname_github_codespaces %} enabled, you will need to remove any conflicting configuration from the dotfiles used in your codespaces.

For example, if the global `.gitconfig` file on your local machine contains a `gpg.program` value, and you have pushed this file to a dotfiles repository that is linked with {% data variables.product.prodname_github_codespaces %}, then you may want to remove `gpg.program` from this file and set it at the system level on your local machine instead.

{% note %}

**Note:** Any changes to your dotfiles repository will apply to new codespaces you create, but not to your existing codespaces.

{% endnote %}

1. On your local machine, open a terminal.
2. To remove the conflicting value from `~/.gitconfig` (Mac/Linux) or `C:\Users\YOUR-USER\.gitconfig` (Windows), use the `git config --global --unset` command.

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. Push the change to your dotfiles repository on {% data variables.product.prodname_dotcom %}.
4. Optionally, to keep your local configuration, set the value again in a Git configuration file that you do not push to your dotfiles repository. 

   For example, you can use the `--system` flag to set the configuration in the system-level file at `PATH/etc/gitconfig`, where `PATH` is the directory in which Git is installed on your system.
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

Alternatively, if your dotfiles repository contains an installation script in a recognized file such as `install.sh`, you can use the `$CODESPACES` environment variable to add conditional logic, such as only setting `gpg.program` when you are not in a codespace. In the following example, `-z "$CODESPACES"` returns `true` if you are not in a codespace.

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Further reading
- "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
- [`git config`](https://git-scm.com/docs/git-config) in the official Git documentation
