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

If {% data variables.product.prodname_github_codespaces %} fails to sign a commit, you may see the error message `gpg failed to sign the data` in the command line or in a {% data variables.product.prodname_vscode %} pop-up window.

The following sections of this article provide troubleshooting advice for common causes of this error.

* If GPG verification has previously been enabled in your settings for {% data variables.product.prodname_github_codespaces %}, and you have recently disabled GPG verification or removed a repository from your list of trusted repositories, Git may still be trying to sign your commits. For more information, see "[Errors after disabling GPG verification](#errors-after-disabling-gpg-verification)."
* If GPG verification is enabled for the codespace, you may have overridden the Git configuration required to sign your commits. For more information, see "[Errors caused by conflicting Git configuration](#errors-caused-by-conflicting-git-configuration)."
* If GPG verification is disabled for the codespace, and you're encountering the error when trying to commit from the "Source Control" view in {% data variables.product.prodname_vscode_shortname %}, this may be because of your {% data variables.product.prodname_vscode_shortname %} settings. For more information, see "[Errors in the {% data variables.product.prodname_vscode_shortname %} "Source Control" view](#errors-in-the-vs-code-source-control-view)."

## Errors after disabling GPG verification

When you enable GPG verification, {% data variables.product.prodname_github_codespaces %} signs all the commits you make in codespaces by default. It does this by setting the `commit.gpgsign` Git configuration value to `true`.

If you have disabled GPG verification, and are working in an existing codespace, then this value will still be set to `true`. This means that {% data variables.product.prodname_github_codespaces %} will try to sign your commits, but will be unable to do so, because you have disabled the GPG verification setting.

To keep making regular, unsigned commits in your codespace, reset `commit.gpgsign` to the default value of `false` by entering the following command in the terminal.

```shell copy
git config --unset commit.gpgsign
```

To check that the value has been correctly removed from your configuration, you can enter `git config --list`. You should not see a value for `commit.gpgsign` in the list.

## Errors caused by conflicting Git configuration

To automatically sign your commits, {% data variables.product.prodname_github_codespaces %} sets certain Git configuration values in your codespace. If you override the values set by {% data variables.product.prodname_github_codespaces %}, you may be unable to sign your commits.

You may be inadvertently overriding these values if you have linked {% data variables.product.prodname_github_codespaces %} with a dotfiles repository that contains Git configuration files. For more information about using dotfiles with {% data variables.product.prodname_github_codespaces %}, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#dotfiles)."

### Checking for conflicting configuration

To sign your commits with GPG, {% data variables.product.prodname_github_codespaces %} automatically sets the following Git configuration values at the system level.

| Configuration setting | Required value |
| --------------------- | -------------- |
| `user.name` | Must match the full name set on your {% data variables.product.prodname_dotcom %} profile |
| `credential.helper` | Must be set to `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | Must be set to `/.codespaces/bin/gh-gpgsign` |

To check that these values are set correctly in a codespace, you can use the `git config --list --show-origin` command. Because {% data variables.product.prodname_github_codespaces %} sets this configuration at the system level, the required configuration settings should come from `/usr/local/etc/gitconfig`.

```shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

In addition to the values listed above, you may run into errors if the dotfiles used in your codespaces contain any of the following values.

* The `user.signingkey` Git config value
* The `commit.gpgsign` Git config value
* A manually set `GITHUB_TOKEN`

### Removing conflicting configuration

If you want to keep automatic GPG verification for {% data variables.product.prodname_github_codespaces %} enabled, you will need to remove any conflicting configuration from the dotfiles used in your codespaces.

For example, if the global `.gitconfig` file on your local machine contains a `gpg.program` value, and you have pushed this file to a dotfiles repository that is linked with {% data variables.product.prodname_github_codespaces %}, then you may want to remove `gpg.program` from this file and set it at the system level on your local machine instead.

{% note %}

**Note:** Any changes to your dotfiles repository will apply to new codespaces you create, but not to your existing codespaces.

{% endnote %}

1. On your local machine, open a terminal.
1. To remove the conflicting value from `~/.gitconfig` (Mac/Linux) or `C:\Users\YOUR-USER\.gitconfig` (Windows), use the `git config --global --unset` command.

   ```shell
   git config --global --unset gpg.program
   ```

1. Push the change to your dotfiles repository on {% data variables.product.prodname_dotcom %}.
1. Optionally, to keep your local configuration, set the value again in a Git configuration file that you do not push to your dotfiles repository.

   For example, you can use the `--system` flag to set the configuration in the system-level file at `PATH/etc/gitconfig`, where `PATH` is the directory in which Git is installed on your system.

   ```shell
   git config --system gpg.program gpg2
   ```

Alternatively, if your dotfiles repository contains an installation script in a recognized file such as `install.sh`, you can use the `$CODESPACES` environment variable to add conditional logic, such as only setting `gpg.program` when you are not in a codespace. In the following example, `-z "$CODESPACES"` returns `true` if you are not in a codespace.

```shell copy
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Errors in the {% data variables.product.prodname_vscode_shortname %} "Source Control" view

If GPG verification is disabled in your settings for {% data variables.product.prodname_github_codespaces %}, or the repository you created the codespace from isn't in your list of trusted repositories, then Git should not attempt to sign your commits. If you encounter a signing error when trying to commit from the "Source Control" view in {% data variables.product.prodname_vscode_shortname %}, you should check the {% data variables.product.prodname_vscode_shortname %} settings in your codespace.

1. In the lower-left corner of the window, select **{% octicon "gear" aria-label="Manage" %}**, then click **Settings**.

   ![Screenshot of a section of the {% data variables.product.prodname_vscode_shortname %} web client. A gear icon and the "Settings" option in a menu are both highlighted with an orange outline.](/assets/images/help/codespaces/vscode-settings.png)

1. On the "User" tab, in the search bar, search for "gpg".
1. Verify that the "Enables commit signing with GPG or X.509" setting is deselected.

   ![Screenshot of the "User" settings tab. A deselected checkbox, labeled "Enables commit signing with GPG or X.509," is highlighted with an orange outline.](/assets/images/help/codespaces/gpg-vscode-setting.png)

If you find this setting is enabled, you should either deselect the checkbox to stop {% data variables.product.prodname_vscode_shortname %} trying to sign your commits, or you should enable GPG verification for the repository you're working in so your commits can be signed successfully.

If you change your {% data variables.product.prodname_vscode_shortname %} settings, you must ensure Settings Sync is enabled if you want to share your changes with other codespaces you create. You should only turn on Settings Sync in a codespace created from a repository you trust. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/personalizing-github-codespaces-for-your-account#settings-sync)."

## Further reading

* "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
* [`git config`](https://git-scm.com/docs/git-config) in the official Git documentation
