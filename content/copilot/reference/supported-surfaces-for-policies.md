---
title: Supported surfaces for GitHub Copilot policies
shortTitle: Supported surfaces for policies
allowTitleToDifferFromFilename: true
intro: 'Which policies affect which {% data variables.product.prodname_copilot_short %} features and surfaces?'
versions:
  feature: copilot
category:
  - Manage Copilot for a team
contentType: reference
---

{% data variables.product.prodname_copilot %} is available across various surfaces: in IDEs, in the CLI, and as multiple agents and chat interfaces on the {% data variables.product.github %} website.

A dedicated policy exists to enable or disable each supported feature or surface. Additionally, you can set various policies to customize or control the {% data variables.product.prodname_copilot_short %} experience. However, not every policy applies to every available surface.

## Supported surfaces

{% rowheaders %}

| Policy name | IDEs | {% data variables.copilot.copilot_in_the_cloud_short %} (sandbox) | {% data variables.copilot.copilot_in_the_cloud_short %} ({% data variables.product.prodname_actions %}) | {% data variables.copilot.copilot_cli_short %} | The {% data variables.copilot.github_copilot_app %} | {% data variables.copilot.copilot_code-review_short %} |
| --- | --- | --- | --- | --- | --- | --- |
| Editor preview features | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.product.prodname_copilot_short %} can search the web | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Configure custom models | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Suggestions matching public code | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %}[^1] | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| MCP servers in {% data variables.product.prodname_copilot_short %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Restrict MCP access to registry servers | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Content exclusion | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Configure models | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.copilot.copilot_memory %} | {% octicon "check" aria-label="Supported" %}[^2] | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}[^3] | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

[^1]: Only supported in annotate mode. See [AUTOTITLE](/copilot/responsible-use/agents#7-limitations).

[^2]: Supported in {% data variables.product.prodname_copilot_short %} sessions that run in {% data variables.product.prodname_vscode %}'s **Local Agent Host**. The application also requires its own {% data variables.copilot.copilot_memory %} setting to be enabled. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-visual-studio-code).

[^3]: In the {% data variables.copilot.github_copilot_app %}, this policy applies where {% data variables.copilot.copilot_memory %} is available for the user's account. The app's separate project **Memory** setting is not the same feature. See [AUTOTITLE](/copilot/concepts/prompting-and-context/copilot-memory#where-copilot-memory-is-available).

## More information on {% data variables.copilot.copilot_in_the_cloud_short %}

"{% data variables.copilot.copilot_in_the_cloud_short %}" refers to cloud sessions running on cloud sandboxes or {% data variables.product.prodname_actions %}. Users can start cloud sessions from local clients. The columns for local clients in the table refer to local sessions in those clients.

{% data reusables.copilot.agent-env-support-caveat %}