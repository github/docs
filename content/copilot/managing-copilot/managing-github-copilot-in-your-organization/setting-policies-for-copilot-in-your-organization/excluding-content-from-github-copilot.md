---
title: Excluding content from GitHub Copilot
shortTitle: Exclude content from Copilot
intro: 'You can prevent {% data variables.product.prodname_copilot_short %} from accessing certain content.'
permissions: '{% data reusables.copilot.content-exclusion-permissions %}'
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
layout: inline
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-copilot-business/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/about-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/about-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/testing-changes-to-content-exclusions-in-your-ide
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/testing-changes-to-content-exclusions-in-your-ide
topics:
  - Copilot
---

## About content exclusions for {% data variables.product.prodname_copilot_short %}

{% data reusables.copilot.content-exclusion-note %}

You can use content exclusions to configure {% data variables.product.prodname_copilot_short %} to ignore certain files. When you exclude content from {% data variables.product.prodname_copilot_short %}:

* Code completion will not be available in the affected files.
* The content in affected files will not inform code completion suggestions in other files.
* The content in affected files will not inform {% data variables.product.prodname_copilot_chat %}'s responses.

{% data reusables.copilot.content-exclusions-scope %}

### Availability of content exclusions

| Tool | Code completion support | {% data variables.product.prodname_copilot_chat_short %} support |
|--------|:--------:|:--------:|
| {% data variables.product.prodname_vs %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| {% data variables.product.prodname_vscode %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| JetBrains IDEs | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Vim/Neovim | {% octicon "check" aria-label="Supported" %} | Not applicable |
| Azure Data Studio | {% octicon "x" aria-label="Not supported" %} | Not applicable |
| {% data variables.product.prodname_dotcom_the_website %} | Not applicable | {% octicon "x" aria-label="Not supported" %} |

### Limitations of content exclusions

{% data reusables.copilot.content-exclusion-limitations %}

### Data sent to {% data variables.product.prodname_dotcom %}

After you configure content exclusion, the client (for example, the {% data variables.product.prodname_copilot_short %} extension for {% data variables.product.prodname_vscode_shortname %}) sends the current repository URL to the {% data variables.product.prodname_dotcom %} server so that the server can return the correct policy to the client. These URLs are not logged anywhere.

## Configuring content exclusions for your repository

You can use your repository settings to specify content in your repository that {% data variables.product.prodname_copilot %} should ignore.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}

1. In the "Code & automation" section of the side bar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**.

   If your repository inherits any exclusions from {%ifversion fpt %}its parent organization{% else %} organizations in the same enterprise{% endif %}, you'll see {%ifversion ghec %}one or more{% else %} a{% endif %} gray box{%ifversion ghec %}es{% endif %} at the top of the page containing details of these exclusions. You cannot edit these settings.

1. In the box following "Paths to exclude in this repository," enter the paths to files from which {% data variables.product.prodname_copilot_short %} should be excluded.

   Use the format: `- "/PATH/TO/DIRECTORY/OR/FILE"`, with each path on a separate line. You can add comments by starting a line with `#`.

   > [!TIP] {% data reusables.copilot.content-exclusion-fnmatch-tip %}

### Example of paths specified in the repository settings

```yaml annotate
# Ignore the `/src/some-dir/kernel.rs` file in this repository.
- "/src/some-dir/kernel.rs"

# Ignore files called `secrets.json` anywhere in this repository.
- "secrets.json"

# Ignore all files whose names begin with `secret` anywhere in this repository.
- "secret*"

# Ignore files whose names end with `.cfg` anywhere in this repository.
- "*.cfg"

# Ignore all files in or below the `/scripts` directory of this repository.
- "/scripts/**"
```

## Configuring content exclusions for your organization

You can use your organization settings to specify files that {% data variables.product.prodname_copilot %} should ignore. The files can be within a Git repository or anywhere on the file system that is not under Git control.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** then click **Content exclusion**.
1. In the box following "Repositories and paths to exclude," enter the details of files from which {% data variables.product.prodname_copilot_short %} should be excluded.

   To exclude files located anywhere (within a Git repository or elsewhere), enter `"*":` followed by the path to the file, or files, you want to exclude. If you want to specify multiple file path patterns, list each pattern on a separate line.

   To exclude files in a Git repository from {% data variables.product.prodname_copilot_short %}, enter a reference to the repository on one line, followed by paths to locations within the repository, with each path on a separate line. Use the following format, replacing `REPOSITORY-REFERENCE` with a reference to the repository that contains the files you'd like to exclude:

   ```yaml
   REPOSITORY-REFERENCE:
     - "/PATH/TO/DIRECTORY/OR/FILE"
     - "/PATH/TO/DIRECTORY/OR/FILE"
     - ...
   ```

   Repositories can be referenced using various protocols. You can use any of the following syntaxes for `REPOSITORY-REFERENCE` and {% data variables.product.prodname_copilot_short %} will match them regardless of how the repository was cloned locally:

   ```text
   http[s]://host.xz[:port]/path/to/repo.git/

   git://host.xz[:port]/path/to/repo.git/

   [user@]host.xz:path/to/repo.git/

   ssh://[user@]host.xz[:port]/path/to/repo.git/
   ```

   The `user@` and `:port` parts of the `REPOSITORY-REFERENCE` are ignored in the calculation of which paths to ignore for a repository.

   For Azure DevOps, you can use the new (dev.azure.com) or old (visualstudio.com) host format when specifying `REPOSITORY-REFERENCE`, and {% data variables.product.prodname_copilot_short %} will match them regardless of which host was used to clone the repository locally.

   > [!TIP] {% data reusables.copilot.content-exclusion-fnmatch-tip %}

### Example of repositories and paths in organization settings

```yaml annotate
# Ignore all `.env` files from all file system roots (Git and non-Git).
# For example, this excludes `REPOSITORY-PATH/.env` and also `/.env`.
# This could also have been written on a single line as:
#
# "*": ["**/.env"]
"*":
  - "**/.env"

# In the `octo-repo` repository in this organization:
octo-repo:
  # Ignore the `/src/some-dir/kernel.rs` file.
  - "/src/some-dir/kernel.rs"

# In the `primer/react` repository on {% data variables.product.prodname_dotcom %}:
https://github.com/primer/react.git:
  # Ignore files called `secrets.json` anywhere in this repository.
  - "secrets.json"
  # Ignore files called `temp.rb` in or below the `/src` directory.
  - "/src/**/temp.rb"

# In the `copilot` repository of any {% data variables.product.prodname_dotcom %} organization:
git@github.com:*/copilot:
  # Ignore any files in or below the `/__tests__` directory.
  - "/__tests__/**"
  # Ignore any files in the `/scripts` directory.
  - "/scripts/*"

# In the `gitlab-org/gitlab-runner` repository on GitLab:
git@gitlab.com:gitlab-org/gitlab-runner.git:
  # Ignore the `/main_test.go` file.
  - "/main_test.go"
  # Ignore any files with names beginning with `server` or `session` anywhere in this repository.
  - "{server,session}*"
  # Ignore any files with names ending with `.md` or `.mk` anywhere in this repository.
  - "*.m[dk]"
  # Ignore files directly within directories such as `packages` or `packaged` anywhere in this repository.
  - "**/package?/*"
  # Ignore files in or below any `security` directories, anywhere in this repository.
  - "**/security/**"
```

## Testing changes to content exclusions

You can use your IDE to confirm that your changes to content exclusions are working as expected.

### Propagate content exclusion changes to your IDE

After you add or change content exclusions, it can take up to 30 minutes to take effect in IDEs where the settings are already loaded. If you don't want to wait, you can manually reload the content exclusion settings using the following instructions.

* **For JetBrains IDEs and {% data variables.product.prodname_vs %}**, reload the content exclusion settings by closing and reopening the application.
* **For {% data variables.product.prodname_vscode %}**, use the following steps to reload the content exclusion settings:
  1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
  1. Type: `reload`.
  1. Select **Developer: Reload Window**.
* **For Vim/Neovim**, content exclusions are automatically fetched from {% data variables.product.prodname_dotcom %} each time you open a file.

### Test your content exclusions

There are a few different ways to test your content exclusions, depending on which IDE you're using.

1. Open a file that you expect to be affected by your content exclusions.
1. Use one or more of the following techniques to test if content is being excluded:
   * **In JetBrains IDEs, {% data variables.product.prodname_vs %}, and {% data variables.product.prodname_vscode %}**, check the {% data variables.product.prodname_copilot_short %} icon in the status bar. If a {% data variables.product.prodname_copilot_short %} content exclusion applies to the file, the {% data variables.product.prodname_copilot_short %} icon will have a diagonal line through it. Hover over the icon to see whether an organization or the parent repository disabled {% data variables.product.prodname_copilot_short %} for the file.
   * **In JetBrains IDEs, {% data variables.product.prodname_vs %} and {% data variables.product.prodname_vscode %}**, you can also test content exclusions in {% data variables.product.prodname_copilot_chat_short %}. Open the {% data variables.product.prodname_copilot_chat_short %} window, and ask {% data variables.product.prodname_copilot_chat_short %} a question about the excluded file. If your content is excluded successfully, {% data variables.product.prodname_copilot_short %} will be unable to answer your question, and will explain that some files were excluded from the conversation due to content exclusion rules.
   * **In Vim/Neovim**, begin typing in the file. If {% data variables.product.prodname_copilot %} no longer provides inline suggestions as you type, the file is excluded.

## Further reading

* "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-changes-to-content-exclusions-for-github-copilot)"
* [Configuring content exclusion for {% data variables.product.prodname_vs %} in the Microsoft Learn documentation](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-admin?view=vs-2022#configure-content-exclusion)
