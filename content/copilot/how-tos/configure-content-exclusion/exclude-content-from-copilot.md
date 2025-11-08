---
title: Excluding content from GitHub Copilot
shortTitle: Exclude content from Copilot
intro: 'Learn how to prevent {% data variables.product.prodname_copilot_short %} from accessing certain content.'
permissions: 'Repository administrators, organization owners, and enterprise owners can manage content exclusion settings. People with the "Maintain" role for a repository can view, but not edit, content exclusion settings for that repository.'
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
layout: inline
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot
  - /copilot/managing-copilot-business/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/about-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/about-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/testing-changes-to-content-exclusions-in-your-ide
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/testing-changes-to-content-exclusions-in-your-ide
  - /copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot
  - /copilot/how-tos/content-exclusion/excluding-content-from-github-copilot
  - /copilot/how-tos/content-exclusion/exclude-content-from-copilot
topics:
  - Copilot
contentType: how-tos
category: 
  - Configure Copilot
---

## Configuring content exclusion for your repository

You can use your repository settings to specify content in your repository that {% data variables.product.prodname_copilot %} should ignore.

> [!NOTE]
> {% data variables.copilot.copilot_cli %}, {% data variables.copilot.copilot_coding_agent %}, and Agent mode in {% data variables.copilot.copilot_chat_short %} in IDEs, do not support content exclusion. For more information, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent) and [AUTOTITLE](/copilot/how-tos/chat-with-copilot/chat-in-ide).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}

1. In the "Code & automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** then click **Content exclusion**.

   If your repository inherits any exclusions from its parent organization, or from organizations in the same enterprise, you'll see one or more gray boxes at the top of the page, containing details of these exclusions. You cannot edit these settings.

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

## Configuring content exclusion for your organization

You can use your organization settings to specify files that {% data variables.product.prodname_copilot %} should ignore. The files can be within a Git repository or anywhere on the file system that is not under Git control.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** then click **Content exclusion**.
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

## Configuring content exclusion for your enterprise

As an enterprise owner, you can use the enterprise settings to specify files that {% data variables.product.prodname_copilot %} should ignore. The files can be within a Git repository or anywhere on the file system that is not under Git control.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.view-copilot-policies %}
1. Click {% octicon "circle-slash" aria-hidden="true" aria-label="circle-slash" %} **Content exclusion**.
1. Use paths to specify which content to exclude. See the previous section, [Configuring content exclusion for your organization](#configuring-content-exclusion-for-your-organization).

> [!NOTE]
> The key difference between setting content exclusion at the enterprise level and the organization level is that rules set at the enterprise level apply to all {% data variables.product.prodname_copilot_short %} users in the enterprise, whereas the rules set by organization owners only apply to users who are assigned a {% data variables.product.prodname_copilot_short %} seat by that organization.

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

You can verify that content exclusions you have configured are working as expected.

1. First confirm that content exclusion is working in files that are not subject to content exclusion. To do this:
   * In your IDE, open a file that is not subject to content exclusion.
   * Make an edit that would normally generate a code completion suggestion. A suggestion should be offered
1. Open a file that should be excluded and make the same edit. No suggestion should be offered.
1. To test content exclusion for {% data variables.copilot.copilot_chat_short %}:
   * In your IDE, open the {% data variables.copilot.copilot_chat_short %} panel.
   * Open a file that should be excluded and close any other files that are open in the editor.
   * Make sure that the open file is attached to the prompt as the context file.
   * Enter the prompt `explain this file`.

     If the file is excluded, {% data variables.copilot.copilot_chat_short %} will not be able to use the file to generate a response. The file will not be listed as a reference in {% data variables.product.prodname_copilot_short %}'s response.

## Further reading

* [AUTOTITLE](/copilot/concepts/content-exclusion-for-github-copilot)
* [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/reviewing-changes-to-content-exclusions-for-github-copilot)
* [Configuring content exclusion for {% data variables.product.prodname_vs %}](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-admin?view=vs-2022#configure-content-exclusion) in the Microsoft Learn documentation
