---
title: Configuring content exclusions for GitHub Copilot
intro: 'You can prevent {% data variables.product.prodname_copilot %} from accessing certain content.'
permissions: '{% data reusables.copilot.content-exclusion-permissions %}'
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
layout: inline
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Configure content exclusions
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/configuring-content-exclusions-for-github-copilot
---

{% data reusables.copilot.content-exclusions-availability-and-beta-note %}

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

You can use your organization settings to specify content in any Git repository that {% data variables.product.prodname_copilot %} should ignore.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** then click **Content exclusion**.
1. In the box following "Repositories and paths to exclude," enter details of where {% data variables.product.prodname_copilot_short %} should be excluded.

   For each repository in which you want files to be excluded from {% data variables.product.prodname_copilot_short %}, enter a reference to the repository on one line, followed by paths to locations within the repository, with each path on a separate line. Use the following format:

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

### Formatting tips for `REPOSITORY-REFERENCE`

* {% data reusables.copilot.content-exclusion-fnmatch-tip %}
* The `user@` and `:port` parts of the `REPOSITORY-REFERENCE` are ignored in the calculation of which paths to ignore for a repository.
* Each repository reference can contain a single `*` wildcard. For example, `https://github.com/octo-org/*` matches all repositories in the `octo-org` organization.
* For Azure DevOps, you can use the new (dev.azure.com) or old (visualstudio.com) host format when specifying `REPOSITORY-REFERENCE`, and {% data variables.product.prodname_copilot_short %} will match them regardless of which host was used to clone the repository locally.

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
  # Ignore any files with names beginning with `server` or `session` anywhere in this repository.
  - "{server,session}*"
  # Ignore any files with names ending with `.md` or `.mk` anywhere in this repository.
  - "*.m[dk]"
  # Ignore files directly within directories such as `packages` or `packaged` anywhere in this repository.
  - "**/package?/*"
  # Ignore files in or below any `security` directories, anywhere in this repository.
  - "**/security/**"
```

## Next steps

To test your changes, see "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/testing-changes-to-content-exclusions-in-your-ide)."
