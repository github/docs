---
title: Content exclusion for GitHub Copilot
shortTitle: Content exclusion
intro: You can prevent {% data variables.product.prodname_copilot_short %} from accessing certain files.
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/content-exclusion-for-github-copilot
  - /copilot/concepts/content-exclusion
  - /copilot/concepts/context/content-exclusion
contentType: concepts
category:
  - Manage Copilot for a team
---

## About content exclusion for {% data variables.product.prodname_copilot_short %}

{% data reusables.copilot.content-exclusion-intro %} When you exclude content from {% data variables.product.prodname_copilot_short %}:

* Inline suggestions will not be available in the affected files.
* The content in affected files will not inform inline suggestions in other files.
* The content in affected files will not inform {% data variables.product.prodname_copilot_short %}'s responses.
* Affected files will not be reviewed in a {% data variables.product.prodname_copilot_short %} code review.

### Who can configure content exclusion

Repository administrators, organization owners, and enterprise owners can configure content exclusion.

{% data reusables.copilot.content-exclusions-scope %}

### Availability of content exclusion

The {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans provide the following level of support for content exclusion.

| Tool                                            | Inline suggestions support                    | Chat and agent support                         |
|-------------------------------------------------|:---------------------------------------------:|:----------------------------------------------:|
| {% data variables.product.prodname_vs %}        | {% octicon "check" aria-label="Supported" %}  | {% octicon "check" aria-label="Supported" %}   |
| {% data variables.product.prodname_vscode %}    | {% octicon "check" aria-label="Supported" %}  | {% octicon "check" aria-label="Supported" %}   |
| JetBrains IDEs                                  | {% octicon "check" aria-label="Supported" %}  | {% octicon "check" aria-label="Supported" %}   |
| Vim/Neovim                                      | {% octicon "check" aria-label="Supported" %}  | Not applicable                                 |
| Xcode                                           | {% octicon "check" aria-label="Supported" %}  | {% octicon "x" aria-label="Not supported" %}   |
| Eclipse                                         | {% octicon "check" aria-label="Supported" %}  | {% octicon "x" aria-label="Not supported" %}   |
| Azure Data Studio                               | {% octicon "x" aria-label="Not supported" %}  | Not applicable                                 |
| The {% data variables.copilot.github_copilot_app %} | Not applicable                                | {% octicon "check" aria-label="Supported" %}   |
| {% data variables.copilot.copilot_cli %}        | Not applicable                                | {% octicon "check" aria-label="Supported" %}   |
| {% data variables.copilot.copilot_in_the_cloud_short %} | Not applicable | {% octicon "check" aria-label="Supported" %} |
| {% data variables.copilot.copilot_code-review_short %} | Not applicable | {% octicon "check" aria-label="Supported" %} |

{% data variables.copilot.copilot_in_the_cloud_short %} includes chat and agent sessions started on the {% data variables.product.github %} website, {% data variables.product.prodname_mobile %}, or cloud sandboxes.

### Limitations of content exclusion

{% data reusables.copilot.content-exclusion-limitations %}

> [!NOTE]
> {% data reusables.copilot.content-exclusion-agent-limitations %}

Currently, content exclusions do not apply to symbolic links (symlinks) and repositories located on remote filesystems.

### Data sent to {% data variables.product.prodname_dotcom %}

After you configure content exclusion, the client (for example, the {% data variables.product.prodname_copilot_short %} extension for {% data variables.product.prodname_vscode_shortname %}) sends the current repository URL to the {% data variables.product.prodname_dotcom %} server so that the server can return the correct policy to the client. These URLs are not logged anywhere.

## Further reading

* [AUTOTITLE](/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
* [AUTOTITLE](/copilot/how-tos/configure-content-exclusion/review-changes)
