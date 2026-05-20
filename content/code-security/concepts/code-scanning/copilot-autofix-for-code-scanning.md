---
title: About Copilot Autofix for code scanning
shortTitle: Copilot Autofix
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.copilot_autofix_short %} provides targeted recommendations to help you fix {% data variables.product.prodname_code_scanning %} alerts and avoid introducing new security vulnerabilities.'
product: '{% data reusables.rai.code-scanning.gated-feature-autofix %}'
versions:
  feature: code-scanning-autofix
contentType: concepts
category:
  - Find and fix code vulnerabilities
---

{% data variables.copilot.copilot_autofix_short %} is an expansion of {% data variables.product.prodname_code_scanning %} that provides you with targeted recommendations to help you fix {% data variables.product.prodname_code_scanning %} alerts so you can avoid introducing new security vulnerabilities. The potential fixes are generated automatically by large language models (LLMs) using data from the codebase and from {% data variables.product.prodname_code_scanning %} analysis.

## How {% data variables.copilot.copilot_autofix_short %} works

{% data variables.copilot.copilot_autofix_short %} translates the description and location of an alert into code changes that may fix the alert. It interfaces with the large language model {% data variables.copilot.copilot_gpt_53_codex %} from OpenAI, which has sufficient generative capabilities to produce both suggested fixes in code and explanatory text for those fixes.

## Enabling and managing {% data variables.copilot.copilot_autofix_short %}

You do not need a subscription to {% data variables.product.prodname_copilot %} to use {% data variables.copilot.copilot_autofix %}. {% data variables.copilot.copilot_autofix_short %} is available to all public repositories on {% data variables.product.prodname_dotcom_the_website %}, as well as internal or private repositories owned by organizations and enterprises that have a license for {% data variables.product.prodname_GH_code_security %}.

{% data variables.copilot.copilot_autofix_short %} is allowed by default and enabled for every repository that uses {% data variables.product.prodname_codeql %}, regardless of whether it uses default or advanced setup for {% data variables.product.prodname_code_scanning %}. There is no separate step to enable {% data variables.copilot.copilot_autofix_short %}: enabling {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %} is sufficient. See [AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning).

Administrators at the enterprise, organization, and repository levels can choose to disable {% data variables.copilot.copilot_autofix_short %}. If {% data variables.copilot.copilot_autofix_short %} has been disabled at your level, you can re-enable it by following the same steps used to disable it and selecting the option to allow {% data variables.copilot.copilot_autofix_short %}. To learn how to manage {% data variables.copilot.copilot_autofix_short %} at each level, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-autofix-for-code-scanning).
