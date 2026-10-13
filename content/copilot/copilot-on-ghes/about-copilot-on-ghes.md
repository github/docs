---
title: About GitHub Copilot on GitHub Enterprise Server
shortTitle: About Copilot on GHES
intro: 'Most {% data variables.product.prodname_copilot_short %} features require a presence on {% data variables.product.prodname_ghe_cloud %}, but some features are available on {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '*'
contentType: concepts
category:
  - Learn about Copilot
---

If your enterprise is primarily hosted on {% data variables.product.prodname_ghe_server %}, you must take extra steps for your developers to use {% data variables.product.prodname_copilot %}.

{% data variables.product.prodname_copilot %} is available on {% data variables.product.github %}'s cloud-hosted platforms: {% data variables.product.prodname_dotcom_the_website %} and {% data variables.enterprise.data_residency_site %}.

* {% data variables.product.prodname_copilot_short %} licenses can **only** be assigned to users through one of these platforms. A {% data variables.product.prodname_copilot_short %} license is required for all {% data variables.product.prodname_copilot_short %} functionality, with the exception of local "bring your own key" (BYOK) setups.
* Administrative features such as policies and managed settings are configured on these platforms.
* {% data variables.product.prodname_copilot_short %} features, such as {% data variables.copilot.copilot_chat_short %}, are integrated into these platforms, and **not** into {% data variables.product.prodname_ghe_server %}.

However, if your enterprise is primarily hosted on {% data variables.product.prodname_ghe_server %}, your developers can still benefit from {% data variables.product.prodname_copilot %}. The following sections explain your options.

> [!IMPORTANT]
> {% data variables.product.prodname_copilot %} documentation on this version of {% data variables.product.prodname_docs %} is limited to content that applies specifically to {% data variables.product.prodname_ghe_server %}. View documentation for usage and administration on the [{% data variables.product.prodname_ghe_cloud %} version](/enterprise-cloud@latest/copilot) of the site.

## Assigning licenses on a cloud platform

Your {% data variables.product.prodname_enterprise %} license also entitles you to an enterprise account on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}.

You can use your cloud-hosted enterprise account to assign {% data variables.product.prodname_copilot_short %} licenses to users and configure policies for {% data variables.product.prodname_copilot_short %}. Users will then be able to authenticate to their cloud account to use {% data variables.product.prodname_copilot_short %} in local clients such as {% data variables.copilot.copilot_cli_short %}.

{% data variables.product.prodname_copilot_short %} will have access to locally checked-out code and files. Users can configure their local [GitHub MCP server](https://github.com/github/github-mcp-server?tab=readme-ov-file#local-github-mcp-server) so that {% data variables.product.prodname_copilot_short %} can connect to your instance and perform actions like opening issues or pull requests.

If you enable license sync with {% data variables.product.prodname_github_connect %}, each individual will only consume one {% data variables.product.prodname_enterprise %} license, even with an account on both cloud and server. See [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/about-github-connect).

## Using {% data variables.product.prodname_copilot_short %} in an air-gapped environment

Alternatively, you can configure {% data variables.copilot.copilot_cli_short %} to work with {% data variables.product.prodname_ghe_server %} in disconnected or air-gapped environments, without connecting to {% data variables.product.github %}'s cloud platforms or requiring a {% data variables.product.prodname_copilot_short %} license.

{% ifversion copilot-cli-ghes %}

An administrator configures a model provider for the instance, and users connect {% data variables.copilot.copilot_cli_short %} with their {% data variables.product.prodname_ghe_server %} credentials.

For more information, see [AUTOTITLE](/copilot/copilot-on-ghes/set-up-copilot-cli).

> [!NOTE]
> This feature is in {% data variables.release-phases.technical_preview %} and subject to change.

{% else %}

To use this feature, upgrade your instance to **version 3.22 or later**, where this feature is available in {% data variables.release-phases.technical_preview %}.

{% endif %}
