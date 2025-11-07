---
title: Content exclusion for GitHub Copilot
shortTitle: Content exclusion
intro: You can prevent {% data variables.product.prodname_copilot_short %} from accessing certain files.
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/concepts/content-exclusion-for-github-copilot
  - /copilot/concepts/content-exclusion
contentType: concepts
category: 
  - Manage Copilot for a team
---

## About content exclusion for {% data variables.product.prodname_copilot_short %}

You can use content exclusion to configure {% data variables.product.prodname_copilot_short %} to ignore certain files. When you exclude content from {% data variables.product.prodname_copilot_short %}:

* Code completion will not be available in the affected files.
* The content in affected files will not inform code completion suggestions in other files.
* The content in affected files will not inform {% data variables.copilot.copilot_chat %}'s responses.
* Affected files will not be reviewed in a {% data variables.product.prodname_copilot_short %} code review.

### Who can configure content exclusion

Repository administrators, organization owners, and enterprise owners can configure content exclusion.

{% data reusables.copilot.content-exclusions-scope %}

### Availability of content exclusion

The {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans provide the following level of support for content exclusion.

| Tool                                            |            Code completion support            | {% data variables.copilot.copilot_chat_short %} support |
|-------------------------------------------------|:---------------------------------------------:|:----------------------------------------------------------------:|
| {% data variables.product.prodname_vs %}        | {% octicon "check" aria-label="Supported" %}  |           {% octicon "check" aria-label="Supported" %}           |
| {% data variables.product.prodname_vscode %}    | {% octicon "check" aria-label="Supported" %}  |           {% octicon "check" aria-label="Supported" %}           |
| JetBrains IDEs                                  | {% octicon "check" aria-label="Supported" %}  |           {% octicon "check" aria-label="Supported" %}           |
| Vim/Neovim                                      | {% octicon "check" aria-label="Supported" %}  |                          Not applicable                          |
| Xcode                                           | {% octicon "check" aria-label="Supported" %}  |           {% octicon "x" aria-label="Not supported" %}           |
| Eclipse                                         | {% octicon "check" aria-label="Supported" %}  |           {% octicon "x" aria-label="Not supported" %}           |
| Azure Data Studio                               | {% octicon "x" aria-label="Not supported" %}  |                          Not applicable                          |
| The {% data variables.product.github %} website |                Not applicable                 |           {% octicon "check" aria-label="Supported" %}           |
| {% data variables.product.prodname_mobile %}    |                Not applicable                 |           {% octicon "check" aria-label="Supported" %}           |

Content exclusions also apply to {% data variables.copilot.copilot_code-review_short %} on the {% data variables.product.github %} website.

> [!NOTE]
> * Content exclusion is in {% data variables.release-phases.public_preview %} on the {% data variables.product.github %} website and in {% data variables.product.prodname_mobile %} and is subject to change.
> * Content exclusion is currently not supported in Edit and Agent modes of {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %} and other editors.

### Limitations of content exclusion

{% data reusables.copilot.content-exclusion-limitations %}

Currently, content exclusions do not apply to symbolic links (symlinks) and repositories located on remote filesystems.

### Data sent to {% data variables.product.prodname_dotcom %}

After you configure content exclusion, the client (for example, the {% data variables.product.prodname_copilot_short %} extension for {% data variables.product.prodname_vscode_shortname %}) sends the current repository URL to the {% data variables.product.prodname_dotcom %} server so that the server can return the correct policy to the client. These URLs are not logged anywhere.

## Further reading

* [AUTOTITLE](/copilot/how-tos/content-exclusion/excluding-content-from-github-copilot)
* [AUTOTITLE](/copilot/how-tos/content-exclusion/reviewing-changes-to-content-exclusions-for-github-copilot)
