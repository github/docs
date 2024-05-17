---
title: Configuring content exclusions for GitHub Copilot
shortTitle: Excluding content
intro: 'You can prevent specified files from being used to inform code completion suggestions made by {% data variables.product.prodname_copilot %}. {% data variables.product.prodname_copilot %} will not be available in excluded files.'
product: 'This feature is available for organization and enterprise accounts with a {% data variables.product.prodname_copilot_business_short %} subscription, and for enterprise accounts with a {% data variables.product.prodname_copilot_enterprise_short %} subscription.'
permissions: 'Repository administrators and organization owners can manage the content exclusion settings for {% data variables.product.prodname_copilot %}.
<br><br>
People with the "Maintain" role for a repository can view the content exclusion settings for that repository, but can''t change these settings. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)."'
redirect_from:
  - /copilot/managing-copilot-business/configuring-content-exclusions-for-github-copilot
layout: inline
topics:
  - Copilot
versions:
  feature: copilot
---

{% note %}

**Note:**

{% data reusables.copilot.content-exclusion-note %}

{% endnote %}

## About configuring content exclusions

You may want to prevent certain files from being available to {% data variables.product.prodname_copilot %}. You can configure {% data variables.product.prodname_copilot %} so that it ignores these files. You do this by specifying paths to excluded content in the settings for your repository or organization.

When you specify content exclusions it has two effects:

- The content of the affected files will not be used by {% data variables.product.prodname_copilot %} to inform the code completion suggestions it makes in other files.
- {% data variables.product.prodname_copilot %} code completion will not be available in the affected files.

{% data reusables.copilot.content-exclusions-delay %} For more information, see "[Propagating content exclusion changes to your IDE](#propagating-content-exclusion-changes-to-your-ide)."

### Limitations

{% data reusables.copilot.content-exclusion-limitations %}

### What can you exclude?

When you specify content exclusion in the settings for a repository, you can only exclude files in that repository.

When you specify content exclusion in the settings for an organization, you can exclude files in any Git-based repository hosted on {% data variables.product.prodname_dotcom_the_website %} or anywhere that can be accessed using any of the following syntaxes:

```text
http[s]://host.xz[:port]/path/to/repo.git/

git://host.xz[:port]/path/to/repo.git/

[user@]host.xz:path/to/repo.git/

ssh://[user@]host.xz[:port]/path/to/repo.git/
```

{% note %}

**Note:** It's important to be aware that content can be excluded by the settings of any {% data variables.product.prodname_dotcom %} organization with a {% data variables.product.prodname_copilot_business_short %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise_short %}{% endif %} subscription. Excluded files may be in a repository that is not owned by the organization in which the exclusion was defined. The excluded files may also be located in a Git-based repository that is not hosted on {% data variables.product.prodname_dotcom %}.

{% endnote %}

### Who is affected by a content exclusion setting?

{% data reusables.copilot.content-exclusions-scope %}

{% ifversion fpt %}All exclusions, whether they are defined in repository settings or in organization settings, apply to all members of the organization who have been granted a {% data variables.product.prodname_copilot_short %} seat as part of a {% data variables.product.prodname_copilot_business_short %} subscription.{% endif %}

{% ifversion ghec %}
You can't specify content exclusions in the settings for an enterprise. However, all content exclusions defined in organization or repository settings apply to all members of the enterprise who have been granted a {% data variables.product.prodname_copilot_short %} seat as part of a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription.

This means, for example, that if you are an admin of an organization that belongs to Enterprise X, you can set up an exclusion for files in any Git-based repositories, hosted on {% data variables.product.prodname_dotcom %} or elsewhere, and the exclusion will apply to anyone who gets their {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} license from any organization in Enterprise X.

However, it's recommended that, where an exclusion is being defined for a {% data variables.product.prodname_dotcom %} repository, you should define this either in the settings of that repository or in the settings for the organization that owns the repository. This makes it easier to identify the exclusions that are in place for a repository than if you define the exclusions in the settings of another organization in the enterprise.
{% endif %}

### Data sent to {% data variables.product.prodname_dotcom %}

After you configure content exclusion, the client (for example, the {% data variables.product.prodname_copilot_short %} extension for {% data variables.product.prodname_vscode_shortname %}) sends the current repository URL to the {% data variables.product.prodname_dotcom %} server so that the server can return the correct policy to the client. URLs sent to the server in this way are not logged anywhere.

## Configuring content exclusions for your repository

You can use your repository settings to specify content in your repository that {% data variables.product.prodname_copilot %} should ignore.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}

1. In the "Code & automation" section of the side bar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**.

   If your repository inherits any exclusions from {%ifversion fpt %}its parent organization{% else %} organizations in the same enterprise{% endif %}, you'll see {%ifversion ghec %}one or more{% else %} a{% endif %} gray box{%ifversion ghec %}es{% endif %} at the top of the page containing details of these exclusions. You cannot edit these settings.

   {%ifversion ghec %}

   {% note %}

   **Note**: Exclusions that affect your repository can be defined in the settings of any organization in your {% data variables.product.prodname_dotcom %} enterprise, in addition to those defined in your repository settings.

   {% endnote %}

   {% endif %}

1. In the box under "Paths to exclude in this repository," enter the paths to files from which {% data variables.product.prodname_copilot_short %} should be excluded.

   ![Screenshot of the "Paths to exclude" text box in the repository settings for {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/paths-to-ignore.png)

   Use the format: `- "/PATH/TO/DIRECTORY/OR/FILE"`, with each path on a separate line. You can add comments by starting a line with `#`.

   You can use fnmatch pattern matching notation to specify file paths. For more information, see "[File](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)" in the ruby-doc.org documentation.

   {% note %}

   **Note**: Patterns are case insensitive.

   {% endnote %}

### Example of paths specified in the repository settings

```yaml annotate
# Ignore the `/src/some-dir/kernel.rs` file in this repository.
- "/src/some-dir/kernel.rs"

# Ignore files called `secrets.json` anywhere in this repository.
- "secrets.json"

# Ignore all files whose names begin `secret` anywhere in this repository.
- "secret*"

# Ignore files whose names end `.cfg` anywhere in this repository.
- "*.cfg"

# Ignore all files in or below the `/scripts` directory of this repository.
- "/scripts/**"
```

## Configuring content exclusions for your organization

You can use your organization settings to specify content, in any repository, that {% data variables.product.prodname_copilot %} should ignore.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** then click **Content exclusion**.
1. In the box under "Repositories and paths to exclude," enter details of where {% data variables.product.prodname_copilot_short %} should be excluded.

   For each repository in which you want files to be excluded from {% data variables.product.prodname_copilot_short %}, enter a reference to the repository on one line, followed by paths to locations within the repository, with each path on a separate line. Use the following format:

   ```yaml
   REPOSITORY-REFERENCE:
     - "/PATH/TO/DIRECTORY/OR/FILE"
     - "/PATH/TO/DIRECTORY/OR/FILE"
     - ...
   ```

   The following syntax is supported for `REPOSITORY-REFERENCE`:

   ```text
   http[s]://host.xz[:port]/path/to/repo.git/

   git://host.xz[:port]/path/to/repo.git/

   [user@]host.xz:path/to/repo.git/

   ssh://[user@]host.xz[:port]/path/to/repo.git/
   ```

   {% note %}

   **Notes**:

   - The `user@` and `:port` parts of the `REPOSITORY-REFERENCE` are ignored in the calculation of which paths to ignore for a repository.
   - Each repository reference can contain a single `*` wildcard. For example, `https://github.com/octo-org/*` matches all repositories in the `octo-org` organization.

   {% endnote %}

   You can use fnmatch pattern matching notation to specify file paths. For more information, see "[File](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)" in the ruby-doc.org documentation.

   {% note %}

   **Note**: Patterns are case insensitive.

   {% endnote %}

### Example of repositories and paths in organization settings

```yaml annotate
# Ignore all `.env` files at any path, in any repository.
# This setting applies to all repositories, not just to those on GitHub.com.
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
  # Ignore any files with names beginning `server` or `session`, anywhere in this repository.
  - "{server,session}*"
  # Ignore any files with names ending `.md` or `.mk`, anywhere in this repository.
  - "*.m[dk]"
  # Ignore files directly within directories such as `packages` or `packaged`, anywhere in this repository.
  - "**/package?/*"
  # Ignore files in or below any `security` directories, anywhere in this repository.
  - "**/security/**"
```

## Reviewing changes to the content exclusion settings

If you are an organization owner, you can check any changes that have been made to content exclusions.

1. Open the "Content exclusion" page in the settings for your organization ([described here](#configuring-content-exclusions-for-your-organization)), or the settings for a repository ([described here](#configuring-content-exclusions-for-your-repository)).
1. Scroll to the bottom of the page.

   You will see the name of the person who last changed the settings, and information about when they made this change.

1. Click the time of the last change.

   ![Screenshot of the last edited information. The time of change link is highlighted with a dark orange outline.](/assets/images/help/copilot/content-exclusions-last-edited-by.png)

   {% note %}

   **Note**: The time of the last change is only a link if you are an organization owner.

   {% endnote %}

   The "Audit log" page for the organization is displayed, showing the most recently logged occurrences of the `copilot.content_exclusion_changed` action.

   If you clicked through from a repository settings page, the audit log is filtered to show only changes to content exclusions for that repository.

1. Click the ellipsis (...) at the end of each entry to see more details.

   If the "excluded_paths" entry is truncated, hover over the truncated value to show the full entry. This displays the content of the exclusion settings after the change was saved.

   ![Screenshot of audit log details for the 'copilot.content_exclusion_changed' action. The ellipsis button is highlighted.](/assets/images/help/copilot/copilot-audit-log.png)

## Checking the effect of a settings change

When you change {% data variables.product.prodname_copilot_short %}'s content exclusions you can check that the setting blocks {% data variables.product.prodname_copilot_short %} from suggesting code in the specified files.

To confirm that {% data variables.product.prodname_copilot_short %} is disabled for a file, open the file in the editor and start typing a line of code, such as a comment. Normally, you would see a code completion suggestion from {% data variables.product.prodname_copilot_short %} as you type. If {% data variables.product.prodname_copilot_short %} is disabled by a content exclusion, code completion suggestions will not be offered, and the file's contents will not be used to generate suggestions in other files.

### Checking settings changes in your IDE

If you are working in {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode_shortname %}, or a supported JetBrains IDE, the {% data variables.product.prodname_copilot_short %} icon indicates when {% data variables.product.prodname_copilot_short %} has been disabled by a content exclusion.

1. Open a file that you expect to be affected by your content exclusions.

   If a {% data variables.product.prodname_copilot_short %} content exclusion applies to this file, the {% data variables.product.prodname_copilot_short %} icon in the status bar has a diagonal line through it.

1. Hover over this icon. A popup message tells you whether an organization or the parent repository disabled {% data variables.product.prodname_copilot_short %} for this file.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} disabled popup in the {% data variables.product.prodname_vscode_shortname %} toolbar.](/assets/images/help/copilot/copilot-disabled-for-repo.png)

{% note %}

**Note**: In {% data variables.product.prodname_vs %} and {% data variables.product.prodname_vscode_shortname %} you can display the log for the {% data variables.product.prodname_copilot_short %} extension to see details of content exclusions without having to hover over the {% data variables.product.prodname_copilot_short %} icon. For more information, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-environment?tool=vscode)."

{% endnote %}

### Propagating content exclusion changes to your IDE

If you are working in Neovim, content exclusions are fetched from {% data variables.product.prodname_dotcom %} each time you open a file. However, if you are working in {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode_shortname %}, or a supported JetBrains IDE, you may have to wait up to 30 minutes to see the effect of a settings change. Alternatively, you can manually reload the content exclusion settings into your IDE.

To reload content exclusions into {% data variables.product.prodname_vs %}, close and reopen the application.

To reload content exclusions into {% data variables.product.prodname_vscode_shortname %}:

1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type: `reload`.
1. Select **Developer: Reload Window**.

To reload content exclusions into your JetBrains IDE, either close and reopen the application, or log out of {% data variables.product.prodname_dotcom %} and then log back in, as follows.

1. Click the {% data variables.product.prodname_copilot_short %} icon in the status bar and select **Logout from {% data variables.product.prodname_dotcom %}**.
1. The {% data variables.product.prodname_copilot_short %} icon in the status bar will now have a diagonal line through it. Click it and select **Login to {% data variables.product.prodname_dotcom %}**.
1. The "Sign in to {% data variables.product.prodname_dotcom %}" message is displayed showing a device code. Click **Copy and Open**.
1. On the "Device Activation" page, paste in the device code and click **Continue**.
1. On the next page, click **Authorize {% data variables.product.prodname_copilot %} Plugin**.

## Further reading

- "[AUTOTITLE](/copilot/managing-copilot-business/reviewing-your-organization-or-enterprises-audit-logs-for-copilot-business)"
- "[AUTOTITLE](/enterprise-cloud@latest/copilot/troubleshooting-github-copilot/troubleshooting-common-issues-with-github-copilot#github-copilot-content-exclusions-are-not-being-applied)"
