---
title: Feature availability when GitHub Copilot policies conflict in organizations
shortTitle: Policy conflicts
allowTitleToDifferFromFilename: true
intro: 'Learn how delegating {% data variables.product.prodname_copilot_short %} policy decisions to organizations affects users granted a license by organizations with different policies.'
versions:
  feature: copilot
category:
  - Learn about Copilot
topics:
  - Copilot
  - Policy
  - Access management
  - Organizations
  - Enterprise
redirect_from:
  - /copilot/reference/feature-availability-enterprise
contentType: reference
---

## About delegating policy decisions to organizations

Policies can be defined for a whole enterprise, or set at the organization level. See [AUTOTITLE](/copilot/concepts/policies).

When an enterprise owner delegates control of a policy to organization owners by setting "No policy," some organizations may enable a feature while others disable it. Users may be granted a {% data variables.product.prodname_copilot_short %} license by organizations with different policies for the same feature.

## How availability is determined

Feature, model, and privacy settings for users are set according to the **least restrictive** or the **most restrictive** policy defined by any of the organizations where they are granted a {% data variables.product.prodname_copilot_short %} license.

* **Least restrictive:** if any of the organizations has **enabled** a feature, this feature is enabled for the user everywhere. This applies to all but the more sensitive {% data variables.product.prodname_copilot_short %} features.

* **Most restrictive:** if any of the organizations has **disabled** a feature, this feature is disabled for the user in all their organizations. This applies only to the most sensitive {% data variables.product.prodname_copilot_short %} features, for example: access to {% data variables.product.prodname_copilot_short %} metrics using the API.

## Availability for members with {% data variables.product.prodname_copilot_short %} from multiple organizations

<!--The table below uses the following sort order:
    1. Policies with "Most restrictive" at the top in alphabetic order.
    2. Follow with remaining policies in alphabetic order.-->

| Policy | Availability matches | More information |
| :---- | :---- | :---- |
| {% data variables.product.prodname_copilot_short %} Metrics API | Most restrictive organization | [AUTOTITLE](/rest/copilot/copilot-metrics) |
| Suggestions matching public code (privacy policy) | Most restrictive organization | [AUTOTITLE](/copilot/concepts/completions/code-suggestions) |
| Allow members without a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.copilot_code-review_short %} in {% data variables.product.prodname_dotcom_the_website %} | Most restrictive organization | [AUTOTITLE](/copilot/responsible-use/code-review) |
| {% data variables.product.prodname_copilot_short %} can search the web | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/chat-in-github#leveraging-a-web-search-to-answer-a-question) |
| {% data variables.copilot.copilot_mobile_short %} | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/chat-in-github-mobile) |
| {% data variables.copilot.copilot_chat_short %} in the IDE | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/chat-in-your-ide) |
| {% data variables.copilot.copilot_code-review_short %} | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/code-review) |
| {% data variables.copilot.copilot_coding_agent %} | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom) |
| {% data variables.product.prodname_spark_short %} | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/spark) |
| {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %} | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/chat-in-github) |
| {% data variables.copilot.copilot_desktop_short %} | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/copilot-in-github-desktop) |
| {% data variables.copilot.copilot_cli_short %} | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/copilot-cli) |
| Editor preview features | Least restrictive organization | [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-pre-release-license-terms) |
| {% data variables.product.prodname_github_models %}, one policy per model | Least restrictive organization | [AUTOTITLE](/github-models/github-models-at-scale/manage-models-at-scale) |
| MCP servers in {% data variables.product.prodname_copilot_short %} | Least restrictive organization | [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp) |
| {% data variables.product.prodname_copilot_short %}-generated commit messages | Least restrictive organization | [AUTOTITLE](/copilot/responsible-use/copilot-commit-message-generation) |

## Next steps

* [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-policies-for-copilot-in-your-organization)
* [AUTOTITLE](/copilot/how-tos/administer/enterprises/managing-policies-and-features-for-copilot-in-your-enterprise)
