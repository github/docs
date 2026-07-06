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

>[!NOTE] The following table documents whether specific policies apply to different surfaces, but does not necessarily reflect whether the equivalent functionality is available. For example, {% data variables.copilot.copilot_cloud_agent %} **can** access the Internet, but the "{% data variables.product.prodname_copilot_short %} can search the web" policy does not affect this capability.

{% rowheaders %}

| Policy name | IDEs | {% data variables.copilot.copilot_cloud_agent %} | Third-party agents | {% data variables.copilot.copilot_cli_short %} | {% data variables.copilot.copilot_chat_dotcom_short %} | {% data variables.copilot.copilot_code-review_short %} | {% data variables.product.prodname_spark_short %} |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Editor preview features | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.product.prodname_copilot_short %} can search the web | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Enable custom models | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Suggestions matching public code | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}[^1] | {% octicon "check" aria-label="Supported" %}[^1] | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| MCP servers in {% data variables.product.prodname_copilot_short %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Restrict MCP access to registry servers | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Content exclusion | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Configure allowed models | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% data variables.copilot.copilot_memory %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

[^1]: Only supported in annotate mode. See [AUTOTITLE](/copilot/responsible-use/agents#7-limitations).

