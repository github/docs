---
title: About autofix for code scanning
shortTitle: Autofix
allowTitleToDifferFromFilename: true
intro: 'Autofix generates potential fixes for {% data variables.product.prodname_code_scanning %} alerts, helping you remediate existing vulnerabilities.'
product: '{% data reusables.rai.code-scanning.gated-feature-autofix %}'
versions:
  feature: code-scanning-autofix
contentType: concepts
category:
  - Find and fix code vulnerabilities
redirect_from:
  - /code-security/concepts/code-scanning/copilot-autofix-for-code-scanning
---

{% data variables.product.prodname_dotcom %} provides two separate autofix experiences for {% data variables.product.prodname_code_scanning %} alerts: {% data variables.copilot.agentic_autofix %} and {% data variables.copilot.copilot_autofix_short %}. Both use large language models (LLMs), data from the codebase, and {% data variables.product.prodname_code_scanning %} analysis to generate potential code changes and explanations. However, they have different workflows, results, access requirements, and usage.

## What are the two types of autofix?

{% data variables.copilot.agentic_autofix_caps %} and {% data variables.copilot.copilot_autofix_short %} solve different problems:

* Use {% data variables.copilot.agentic_autofix %} when you want {% data variables.product.prodname_copilot_short %} to investigate and fix one or more alerts for you, end to end.
* Use {% data variables.copilot.copilot_autofix_short %} when you want a single suggested code change for one alert that you review and apply yourself.

With {% data variables.copilot.agentic_autofix %}, you assign one or more alerts to {% data variables.product.prodname_copilot_short %}. It explores the codebase, generates a fix, and validates the changes. Then it opens a draft pull request containing the proposed fix.

With {% data variables.copilot.copilot_autofix_short %}, {% data variables.product.prodname_dotcom %} generates a single suggested code change for one supported alert. You can use this suggestion to create a pull request yourself.

## Where is autofix available?

Access to the two features works differently. For {% data variables.copilot.agentic_autofix %} on an organization-owned repository, an organization owner or security manager must enable it. If the organization belongs to an enterprise, an enterprise owner or security manager must also allow it. Organization enablement turns it on for eligible repositories by default, but a repository administrator can opt out, or re-enable it when higher-level settings permit.

For an eligible public repository owned by a personal account, a repository administrator can enable {% data variables.copilot.agentic_autofix %} directly. You don't need a {% data variables.product.prodname_copilot_short %} license to use {% data variables.copilot.agentic_autofix %}, but it isn't available for repositories owned by {% data variables.product.prodname_emus %}. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning) for details.

{% data variables.copilot.copilot_autofix_short %}, by contrast, is enabled by default for any repository that uses {% data variables.product.prodname_codeql %}, unless an administrator disables it. It's available to all public repositories on {% data variables.product.prodname_dotcom_the_website %}. It's also available to internal or private repositories owned by organizations and enterprises that have a license for {% data variables.product.prodname_GH_code_security %}. Unlike {% data variables.copilot.agentic_autofix %}, {% data variables.copilot.copilot_autofix_short %} is available for repositories owned by {% data variables.product.prodname_emus %}.

## Choosing an autofix type

Usage costs also factor into which feature to use. Each {% data variables.copilot.agentic_autofix %} agent session consumes {% data variables.product.prodname_ai_credits_short %} and {% data variables.product.prodname_actions %} minutes, while {% data variables.copilot.copilot_autofix_short %} suggested fixes don't consume {% data variables.product.prodname_ai_credits_short %}.

If {% data variables.copilot.agentic_autofix %} isn't enabled for a repository, you can still use {% data variables.copilot.copilot_autofix_short %} to generate suggested fixes for supported alerts.

## Using {% data variables.copilot.agentic_autofix %}

Use {% data variables.copilot.agentic_autofix %} when you want {% data variables.product.prodname_copilot_short %} to investigate one or more alerts and prepare a draft pull request. You can assign {% data variables.copilot.agentic_autofix %} alerts from the repository backlog or a security campaign. Each assignment starts an agent session. The session explores the codebase beyond the affected file, then generates and validates a fix. It opens a pull request with the changes. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#fixing-alerts-with-copilot).

Keep the following in mind:

* For details on enabling {% data variables.copilot.agentic_autofix %} at the organization, enterprise, or repository level, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning).
* {% data variables.copilot.agentic_autofix_caps %} consumes Code Security AI Credits and {% data variables.product.prodname_actions %} minutes. See [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed).
* {% data variables.product.prodname_copilot_short %} uses the custom instructions that apply when it generates a fix. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions).
* {% data variables.copilot.agentic_autofix_caps %} works on a best-effort basis. {% data variables.product.prodname_copilot_short %} validates fixes by re-running {% data variables.product.prodname_codeql %} with the {% data variables.product.prodname_code_scanning %} query suite. It can't confirm fixes for alerts from custom {% data variables.product.prodname_codeql %} queries, the `security-extended` {% data variables.product.prodname_codeql %} query suite, or {% data variables.product.prodname_code_scanning %} alerts from third-party tools.

Always review and test the generated changes before you merge the pull request.

## Using {% data variables.copilot.copilot_autofix_short %}

{% data variables.copilot.copilot_autofix_short %} works the same way whether a repository uses default or advanced setup for {% data variables.product.prodname_code_scanning %}. There is no separate step to enable it: enabling {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %} is sufficient. See [AUTOTITLE](/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning).

{% data variables.copilot.copilot_autofix_short %} is also an integral part of {% data variables.product.prodname_code_quality %}, and continues to run on code quality results even when it's disabled for {% data variables.product.prodname_code_scanning %} results.

Administrators at the enterprise, organization, and repository levels can disable {% data variables.copilot.copilot_autofix_short %}. Settings cascade downward: if an enterprise owner disallows the feature, no organization or repository in that enterprise can enable it, and if an organization owner disables it, no repository in that organization can re-enable it. To restore the feature at a given level, an administrator at that level, or a level above, must reverse the setting. To learn how to manage {% data variables.copilot.copilot_autofix_short %} at each level, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning).
