---
title: About content exclusions for GitHub Copilot
intro: 'Learn how content exclusions for {% data variables.product.prodname_copilot %} work.'
permissions: '{% data reusables.copilot.content-exclusion-permissions %}'
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-copilot-business/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/about-content-exclusions-for-github-copilot
topics:
  - Copilot
shortTitle: About content exclusions
---

{% data reusables.copilot.content-exclusion-note %}

You can configure {% data variables.product.prodname_copilot %} to **ignore certain files by excluding specific paths to content** in the settings for your repository or organization.

When you specify content exclusions, there are up to three effects depending on the level of support for your IDE:

* Code completion will not be available in the affected files.
* The content in affected files will not inform code completion suggestions in other files.
* The content in affected files will not inform {% data variables.product.prodname_copilot_chat %}'s responses.

{% data reusables.copilot.content-exclusions-delay %} See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/testing-changes-to-content-exclusions-in-your-ide)."

## Availability of content exclusions

| Tool | Code completion support | {% data variables.product.prodname_copilot_chat_short %} support |
|--------|:--------:|:--------:|
| {% data variables.product.prodname_vs %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.product.prodname_vscode %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| JetBrains IDEs | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Vim/Neovim | {% octicon "check" aria-label="Supported" %} | Not applicable |
| Azure Data Studio | {% octicon "x" aria-label="Not supported" %} | Not applicable |
| {% data variables.product.prodname_dotcom_the_website %} | Not applicable | {% octicon "x" aria-label="Not supported" %} |

## Limitations of content exclusions

{% data reusables.copilot.content-exclusion-limitations %}

## What can you exclude?

When you specify content exclusion in the settings for a repository, you can only exclude files in that repository.

When you specify content exclusion in the settings for an organization, you can exclude files in any Git-based repository hosted on {% data variables.product.prodname_dotcom_the_website %}, or anywhere that can be accessed using any of the following syntaxes:

```text
http[s]://host.xz[:port]/path/to/repo.git/

git://host.xz[:port]/path/to/repo.git/

[user@]host.xz:path/to/repo.git/

ssh://[user@]host.xz[:port]/path/to/repo.git/
```

## Who is affected by a content exclusion setting?

{% data reusables.copilot.content-exclusions-scope %}

{% ifversion fpt %}All exclusions, whether they are defined in repository settings or in organization settings, apply to all members of the organization who have been granted a {% data variables.product.prodname_copilot_short %} seat as part of a {% data variables.product.prodname_copilot_business_short %} subscription.{% endif %}

{% ifversion ghec %}
You can't specify content exclusions in the settings for an enterprise. However, all content exclusions defined in organization or repository settings apply to all members of the enterprise who have been granted a {% data variables.product.prodname_copilot_short %} seat as part of a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription.

This means, for example, that if you are an admin of an organization that belongs to Enterprise X, you can set up an exclusion for files in any Git-based repositories, hosted on {% data variables.product.prodname_dotcom %} or elsewhere, and the exclusion will apply to anyone who gets their {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} license from any organization in Enterprise X.

> [!TIP] To more easily track content exclusions, create exclusions in the settings of the repository containing the affected files, or in the settings of the organization that owns the repository.
{% endif %}

## Data sent to {% data variables.product.prodname_dotcom %}

After you configure content exclusion, the client (for example, the {% data variables.product.prodname_copilot_short %} extension for {% data variables.product.prodname_vscode_shortname %}) sends the current repository URL to the {% data variables.product.prodname_dotcom %} server so that the server can return the correct policy to the client. These URLs are not logged anywhere.

## Next steps

To set up content exclusions in your repository or organization, see "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/configuring-content-exclusions-for-github-copilot)."
